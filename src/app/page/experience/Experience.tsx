"use client";

import AnimatedSection from "@/app/components/AnimatedSection";
import Card from "@/app/components/Card";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.3 },
	},
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

export default function Experience() {
	const title = "Experience";
	const content = [
		{
			title: "Catalog Associate",
			subtitle: "Amazon Development Center",
			duration: "Jan 2025 - Present",
			detail: `Currently working at Amazon as a Catalog Associate, specializing in Product Knowledge Classification.
					In my role, I have classified thousands of products accurately according to Standard Operating Procedures (SOPs),
					maintaining a consistent reliability score of 100%. I collaborate closely with cross-functional teams to ensure
					product data quality and correctness, helping improve catalog accuracy and customer experience. Additionally,
					streamline classification workflows by identifying process improvements, contributing to higher efficiency and
					faster turnaround times in product onboarding.`,
		},
		{
			title: "Web Developer Intern",
			subtitle: "Rungta Infotech Pvt Ltd",
			duration: "Feb 2024 - Apr 2024",
			detail: `Worked as a Web Development Intern at Rungta Infotech PVT LTD, where I gained hands-on experience in building
					and maintaining web applications. Throughout my internship, I learned and worked with key web development technologies
					including PHP, HTML, CSS, JavaScript, and SQL. I contributed to developing responsive web pages, implementing dynamic
					features, and managing database interactions, while following best practices for clean code and efficient performance.
					This experience strengthened my problem-solving skills and understanding of full-stack web development in a real-world environment.`,
		},
	];
	return (
		<section className="flex flex-col w-screen text-center items-center p-10 gap-10">
			<AnimatedSection>
				<h2>
					{Array.from(title, (char, index) => (
						<span key={index} className="heading">
							{char}
						</span>
					))}
				</h2>
			</AnimatedSection>

			{/* Experience Grid */}
			<AnimatedSection>
				<motion.div
					className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-6xl mx-auto justify-items-center"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					exit="exit"
					viewport={{ once: false, amount: 0.3 }}>
					{content.map((value, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							className="w-full flex justify-center">
							<Card {...value} />
						</motion.div>
					))}
				</motion.div>
			</AnimatedSection>
		</section>
	);
}
