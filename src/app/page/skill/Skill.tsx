"use client";

import SkillCard from "@components/SkillCard";
import AnimatedSection from "@components/AnimatedSection";
import { SectionTitle, useSectionData } from "@hooks/useSectionData";
import { CardVariants, ContainerVariants } from "app/utils/Variant";

import { motion } from "framer-motion";

export default function Skill() {
	const title = "Skill";
	const data = useSectionData(title);
	if (!data || data.length === 0) return null;

    return (
        <section className="flex w-screen text-center items-center p-10 justify-center">
            <div className="flex flex-col justify-evenly gap-5">
                {/* Animated Heading */}
                <SectionTitle title={title} />

				{/* Grid with scroll-trigger animation */}
				<AnimatedSection>
					<motion.div
						className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-around gap-3"
						variants={ContainerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.3, once: true }}
					>
						{data.map((value, index) => (
							<motion.div key={index} variants={CardVariants}>
								<SkillCard {...value} />
							</motion.div>
						))}
					</motion.div>
				</AnimatedSection>
			</div>
		</section>
	);
}
