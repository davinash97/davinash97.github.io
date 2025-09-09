import type { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

const corsHeaders = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "POST, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type",
};

export const handler: Handler = async (event) => {
	// CORS Preflight
	if (event.httpMethod === "OPTIONS") {
		return {
			statusCode: 200,
			headers: corsHeaders,
			body: "",
		};
	}

	// Only allow POST
	if (event.httpMethod !== "POST") {
		return {
			statusCode: 405,
			headers: corsHeaders,
			body: "Method Not Allowed",
		};
	}

	try {
		const { firstname, lastname, email, subject, message } = JSON.parse(
			event.body || "{}"
		);
		console.log("Parsed body:", {
			firstname,
			lastname,
			email,
			subject,
			message,
		});
		// Optionally validate required fields
		if (!firstname || !email || !message) {
			return {
				statusCode: 400,
				headers: corsHeaders,
				body: JSON.stringify({ error: "Missing required fields" }),
			};
		}
		// For debugging, log the event body and env vars
		console.log("Request body:", event.body);
		console.log("SMTP Host:", process.env.SMTP_HOST);
		console.log("SMTP User:", process.env.SMTP_USER);

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: true,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		await transporter.sendMail({
			from: `"${firstname} ${lastname || ""}" <${email}>`,
			to: process.env.SMTP_TO,
			subject: subject,
			text: `${message} \n${email}`,
			// html: `<p>this is message in html</p>`,
		});

		return {
			statusCode: 200,
			headers: corsHeaders,
			body: JSON.stringify({ message: "Email sent!" }),
		};
	} catch (error: any) {
		// Print error to log
		console.error("Error sending mail:", error);
		return {
			statusCode: 500,
			headers: corsHeaders,
			body: JSON.stringify({ error: error.message || "Unknown error" }),
		};
	}
};
