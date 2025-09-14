"use client";

import SkillCard from "@components/SkillCard";
import AnimatedSection from "@components/AnimatedSection";
import { SectionTitle, useSectionData } from "@hooks/useSectionData";

import { Lato } from "next/font/google";
import { motion, Variants } from "framer-motion";

const lato = Lato({ weight: "400", subsets: ["latin"] });

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2 },
	},
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

export default function Skill() {
	const title = "Skill";
	const data = useSectionData(title);

	return (
		<section className="flex w-screen text-center items-center p-10 justify-center">
			<div className="flex flex-col justify-evenly gap-5">
				{/* Animated Heading */}
				<SectionTitle title={title} />

				{/* Grid with scroll-trigger animation */}
				<AnimatedSection>
					<motion.div
						className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-around gap-3"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						exit="exit"
						viewport={{ amount: 0.3, once: false }}>
						{data.map((value, index) => (
							<motion.div key={index} variants={cardVariants}>
								<SkillCard
									className={lato.className}
									{...value}
								/>
							</motion.div>
						))}
					</motion.div>
				</AnimatedSection>
			</div>
		</section>
	);
}
