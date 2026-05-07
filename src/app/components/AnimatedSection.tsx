"use client";

import { ContainerVariants } from "app/utils/Variant";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
	children: ReactNode;
	className?: string;
}

export default function AnimatedSection({
	children,
	className = "",
}: AnimatedSectionProps) {
	return (
		<motion.section
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={ContainerVariants}
			>
			{children}
		</motion.section>
	);
}
