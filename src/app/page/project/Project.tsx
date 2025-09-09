"use client";

import AnimatedSection from "@/app/components/AnimatedSection";
import ProjectCard from "@/app/components/ProjectCard";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
	exit: { opacity: 0 },
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
	},
	exit: { opacity: 0, y: 40 },
};

export default function Project() {
	const title = "Project";
	const content = [
		{
			name: "Global Buzz",
			image: "/assets/global-buzz.jpg",
			details: `GlobalBuzz is a dynamic news web application built with Next.js, Tailwind CSS, and
					integrated with NewsAPI to fetch real-time news articles from various sources.
					The platform provides users with the latest news across multiple categories in
					a fast, responsive, and modern interface.`,
			points: [
				"Real-time news updates powered by NewsAPI.",
				"Clean, responsive UI built using Tailwind CSS.",
				"Server-side rendering and optimized performance with Next.js.",
				"Dynamic routing to browse news by categories.",
				"Deployed on Netlify for fast and reliable access.",
			],
			link: "https://global-buzz.netlify.app",
			techStack: ["Next.js", "TailwindCSS"],
		},
		{
			name: "Password Generator",
			image: "/assets/pass-gen.jpg",
			details: `Pass-Gen is a lightweight, browser-based password generator built using pure HTML, CSS, and Vanilla JavaScript.
									It provides users with the ability to generate strong random passwords instantly without relying on any external frameworks or libraries.`,
			points: [
				"Generates secure, random passwords with configurable options.",
				"Simple, intuitive user interface for ease of use.",
				"Copy-to-clipboard functionality for quick password usage.",
				"Fully responsive design, works seamlessly across devices.",
				"Lightweight codebase ensuring fast load times and performance.",
			],
			link: "https://davinash97.github.io/pass-gen",
			techStack: ["HTML", "CSS", "JavaScript"],
		},
	];
	return (
		<section className="w-screen flex flex-col items-center justify-center gap-5 p-10">
			{/* Animated Heading */}
			<AnimatedSection>
				<h2 className="text-4xl">
					{Array.from(title, (char, index) => (
						<span key={index} className="heading">
							{char}
						</span>
					))}
				</h2>
			</AnimatedSection>

			{/* Projects Grid */}
			<AnimatedSection>
				<motion.div
					className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-6xl mx-auto justify-items-center"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					exit="exit"
					viewport={{ once: false, amount: 0.3 }}>
					{content.map((value, index) => (
						<motion.div key={index} variants={cardVariants}>
							<ProjectCard {...value} />
						</motion.div>
					))}
				</motion.div>
			</AnimatedSection>
		</section>
	);
}
