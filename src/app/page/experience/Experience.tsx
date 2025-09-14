"use client";

import AnimatedSection from "@components/AnimatedSection";
import Card from "@components/Card";
import { SectionTitle, useSectionData } from "@hooks/useSectionData";

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
	const data = useSectionData(title);

	return (
		<section className="flex flex-col w-screen text-center items-center p-10 gap-10">
			<SectionTitle title={title} />

			{/* Experience Grid */}
			<AnimatedSection>
				<motion.div
					className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-6xl mx-auto justify-items-center"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					exit="exit"
					viewport={{ once: false, amount: 0.3 }}>
					{data.map((value, index) => (
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
