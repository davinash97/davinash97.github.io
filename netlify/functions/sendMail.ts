import type { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

const corsHeaders = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "POST, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type",
};

const ipStore: Record<string, { count: number; firstRequestTime: number }> = {};
const MAX_EMAILS_PER_HOUR = 3;
const ONE_HOUR_MS = 60 * 60 * 1000;

setInterval(() => {
	const now = Date.now();
	for (const ip in ipStore) {
		if (now - ipStore[ip].firstRequestTime > ONE_HOUR_MS) {
			delete ipStore[ip];
		}
	}
}, 10 * 60 * 1000);

export const handler: Handler = async (event) => {
	if (event.httpMethod === "OPTIONS") {
		return {
			statusCode: 200,
			headers: corsHeaders,
			body: "",
		};
	}

	if (event.httpMethod !== "POST") {
		return {
			statusCode: 405,
			headers: { ...corsHeaders, "Content-Type": "application/json" },
			body: JSON.stringify({ error: "Method Not Allowed" }),
		};
	}

	const forwarded = event.headers["x-forwarded-for"];
	const clientIP =
		(forwarded ? forwarded.split(",")[0] : null) ||
		event.headers["client-ip"] ||
		event.headers["x-nf-client-connection-ip"] ||
		"unknown";

	const now = Date.now();

	if (!ipStore[clientIP]) {
		ipStore[clientIP] = { count: 1, firstRequestTime: now };
	} else {
		const elapsed = now - ipStore[clientIP].firstRequestTime;

		if (elapsed < ONE_HOUR_MS) {
			if (ipStore[clientIP].count >= MAX_EMAILS_PER_HOUR) {
				return {
					statusCode: 429,
					headers: {
						...corsHeaders,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						error: "Rate limit exceeded: Max 3 emails per hour allowed.",
					}),
				};
			}
			ipStore[clientIP].count++;
		} else {
			ipStore[clientIP] = { count: 1, firstRequestTime: now };
		}
	}

	try {
		const { firstname, lastname, email, subject, message } = JSON.parse(
			event.body || "{}"
		);

		if (!firstname || !email || !message) {
			return {
				statusCode: 400,
				headers: { ...corsHeaders, "Content-Type": "application/json" },
				body: JSON.stringify({ error: "Missing required fields" }),
			};
		}

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: Number(process.env.SMTP_PORT) === 465,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		await transporter.sendMail({
			from: process.env.SMTP_USER,
			replyTo: email,
			to: process.env.SMTP_TO,
			subject: subject || "New Contact Form Submission",
			text: `Name: ${firstname} ${
				lastname || ""
			}\nEmail: ${email}\n\n${message}`,
		});

		return {
			statusCode: 200,
			headers: corsHeaders,
			body: JSON.stringify({ message: "Email sent!" }),
		};
	} catch (error: any) {
		console.error("Error sending mail:", error);
		return {
			statusCode: 500,
			headers: { ...corsHeaders, "Content-Type": "application/json" },
			body: JSON.stringify({ error: error.message || "Unknown error" }),
		};
	}
};
