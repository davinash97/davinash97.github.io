"use client";

import AnimatedSection from "@components/AnimatedSection";
import Card from "@components/Card";
import { SectionTitle, useSectionData } from "@hooks/useSectionData";

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
    const data = useSectionData(title);

    if (!data || data.length === 0) return null;

    return (
        <section className="flex flex-col w-screen text-center items-center p-10 gap-10">
            <SectionTitle title={title} />

            <AnimatedSection>
                <motion.div
                    className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-6xl mx-auto justify-items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {data.map((value, index) => (
                        <motion.div key={index} variants={cardVariants}>
                            <Card {...value} />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatedSection>
        </section>
    );
}
