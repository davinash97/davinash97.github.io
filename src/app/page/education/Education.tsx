"use client";

import AnimatedSection from "@/app/components/AnimatedSection";
import Card from "@/app/components/Card";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2 },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
	},
};

export default function Education() {
	const title = "Education";
	const content = [
		{
			title: "Diploma in Electrical Engineering (Lateral)",
			organization: "Rungta College of Engineering & Technology",
			duration: "2017-2019",
			detail: `I completed my Diploma in Electrical Engineering from Rungta College of Engineering & Technology, where I gained extensive knowledge during my academic years (2017-2019 Lateral Entry after ITI). I worked on various projects, including an Arduino-based robotic arm capable of picking up and placing objects, and a path-following vehicle designed to reach a predefined destination. Both projects were controllable via an Android device using Bluetooth communication.`,

		},
		{
			title: "Bachelors in Computer Science Engineering (Lateral)",
			organization: "Rungta College of Engineering & Technology",
			duration: "2021-2024",
			detail: `I completed my Bachelor of Technology in Computer Science Engineering from 2021 to 2024 (3 years due to Lateral Entry). Throughout my academic journey, I gained a solid understanding of how computers work, as well as the wide range of applications and software in the industry. During this time, I was part of a team that developed a social media-like platform for pets, designed to help users arrange playdates. Additionally, I worked on various web-based management software projects. These experiences significantly enhanced my knowledge and skills in web development and software engineering.`,
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

			<AnimatedSection>
				<motion.div
					className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-6xl mx-auto justify-items-center"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					exit="hidden"
					viewport={{ once: false, amount: 0.3 }}>
					{content.map((value, index) => (
						<motion.div key={index} variants={cardVariants}>
							<Card {...value} />
						</motion.div>
					))}
				</motion.div>
			</AnimatedSection>
		</section>
	);
}
