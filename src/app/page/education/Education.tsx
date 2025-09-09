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
			detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
								when an unknown printer took a galley of type and scrambled it to make a type specimen book.
								It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
								It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
								and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		},
		{
			title: "Bachelors in Computer Science Engineering (Lateral)",
			organization: "Rungta College of Engineering & Technology",
			duration: "2021-2024",
			detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
								when an unknown printer took a galley of type and scrambled it to make a type specimen book.
								It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
								It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
								and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
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
