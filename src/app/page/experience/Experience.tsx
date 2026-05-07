"use client";

import AnimatedSection from "@components/AnimatedSection";
import Card from "@components/Card";
import { SectionTitle, useSectionData } from "@hooks/useSectionData";
import {ContainerVariants, CardVariants} from "app/utils/Variant";

import { motion } from "framer-motion";

export default function Experience() {
	const title = "Experience";
	const data = useSectionData(title);

	if (!data || data.length === 0) return null;

	return (
		<section className="flex flex-col w-screen text-center items-center p-10 gap-10">
			<SectionTitle title={title} />

			{/* Experience Grid */}
			<AnimatedSection>
				<motion.div
					className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-6xl mx-auto justify-items-center"
					variants={ContainerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					{data.map((value, index) => (
						<motion.div
							key={index}
							variants={CardVariants}
							className="w-full flex justify-center"
						>
							<Card {...value} />
						</motion.div>
					))}
				</motion.div>
			</AnimatedSection>
		</section>
	);
}
