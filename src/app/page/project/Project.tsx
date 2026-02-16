"use client";

import AnimatedSection from "@components/AnimatedSection";
import ProjectCard from "@components/ProjectCard";
import { SectionTitle, useSectionData } from "@hooks/useSectionData";

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
    const data = useSectionData(title);

    if (!data || data.length === 0) return null;

    return (
        <section className="w-screen flex flex-col items-center justify-center gap-5 p-10">
            {/* Animated Heading */}
            <SectionTitle title={title} />

            {/* Projects Grid */}
            <AnimatedSection>
                <motion.div
                    className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-6xl mx-auto justify-items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {data.map((value, index) => (
                        <motion.div key={index} variants={cardVariants}>
                            <ProjectCard {...value} />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatedSection>
        </section>
    );
}
