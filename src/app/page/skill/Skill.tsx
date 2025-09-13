"use client";

import { motion, Variants } from "framer-motion";
import SkillCard from "@/app/components/SkillCard";
import { Lato } from "next/font/google";
import AnimatedSection from "@/app/components/AnimatedSection";

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
	const content = [
		{
			skillName: "Programming Language",
			skillSet: ["Java", "JavaScript", "TypeScript", "Python"],
		},
		{
			skillName: "Web Development",
			skillSet: ["React.js", "Next.js	", "TailwindCSS", "SpringBoot"],
		},
		{
			skillName: "Database",
			skillSet: ["PostgreSql", "MongoDb"],
		},
		{
			skillName: "DevOps",
			skillSet: ["Docker", "Git", "Github"],
		},
		{
			skillName: "Operating System",
			skillSet: ["Windows", "Linux"],
		},
	];
	return (
		<section className="flex w-screen text-center items-center p-10 justify-center">
			<div className="flex flex-col justify-evenly gap-5">
				{/* Animated Heading */}
				<AnimatedSection>
					<motion.h2
						initial={{ opacity: 0, y: -30 }}
						whileInView={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -30 }}
						transition={{
							duration: 0.7,
							ease: [0.25, 0.1, 0.25, 1.0],
						}}
						viewport={{ amount: 0.3, once: false }}>
						{Array.from(title, (char, index) => (
							<span key={index} className="heading">
								{char}
							</span>
						))}
					</motion.h2>
				</AnimatedSection>

				{/* Grid with scroll-trigger animation */}
				<AnimatedSection>
					<motion.div
						className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-around gap-3"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						exit="exit"
						viewport={{ amount: 0.3, once: false }}>
						{content.map((value, index) => (
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
