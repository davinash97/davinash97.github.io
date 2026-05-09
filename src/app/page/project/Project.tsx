"use client";

import AnimatedSection from "@components/AnimatedSection";
import ProjectCard from "@components/ProjectCard";
import { SectionTitle, useSectionData } from "@hooks/useSectionData";
import {ContainerVariants, CardVariants} from "app/utils/Variant";

import { motion } from "framer-motion";

export default function Project() {
	const title = "Project";
	const data = useSectionData(title);

	if (!data || data.length === 0) return null;

	return (
		<section className="w-screen flex flex-col items-center justify-center gap-5 p-10">
			{/* Animated Heading */}
			<SectionTitle title={title} />

			{/* Projects Grid */}
			<AnimatedSection>
				<motion.div
					className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-6xl mx-auto justify-evenly place-items-start"
					variants={ContainerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					{data.map((value, index) => (
						<motion.div key={index} variants={CardVariants}>
							<ProjectCard {...value} />
						</motion.div>
					))}
				</motion.div>
			</AnimatedSection>
		</section>
	);
}
