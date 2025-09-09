"use client";

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
			viewport={{ once: false, amount: 0.2 }}
			exit="hidden"
			variants={{
				hidden: { opacity: 0, y: 50 },
				visible: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.6,
						ease: "easeInOut",
					},
				},
			}}>
			{children}
		</motion.section>
	);
}
