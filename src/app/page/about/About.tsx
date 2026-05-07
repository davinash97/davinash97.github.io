"use client";

import AnimatedSection from "@components/AnimatedSection";
import { SectionTitle } from "@hooks/useSectionData";
import { ContainerVariants } from "app/utils/Variant";

import { motion } from "framer-motion";
import { Fira_Sans } from "next/font/google";

const fira = Fira_Sans({
	weight: "300",
	subsets: ["latin"],
	preload: false,
});

export default function About() {
	const title = "About me";

	return (
		<section
			className="flex flex-col w-full min-h-[60dvh] text-center items-center gap-5 overflow-x-hidden xl:px-60"
		>
			<SectionTitle title={title} />

			<AnimatedSection>
				<motion.p
					className={`max-w-5xl text-justify text-base md:text-lg lg:text-xl p-5 lg:p-10 leading-relaxed ${fira.className}`}
					initial={{ opacity: 0, x: 60 }}
					whileInView={{ opacity: 1, x: 0 }}
					variants={ContainerVariants}
					viewport={{ once: true, amount: 0.3 }}
					transition={{
						duration: 0.8,
						ease: [0.25, 0.1, 0.25, 1],
						delay: 0.1,
					}}
				>
					{`I'm a Computer Science Engineer with a strong foundation in Electrical Engineering from RSR Rungta College of Engineering & Technology, Bhilai, Chhattisgarh, India. Currently working at Amazon in Bangalore, I combine software expertise with hardware knowledge to create comprehensive solutions.My interdisciplinary background allows me to bridge the gap between digital innovation and physical implementation. With experience in full-stack development, embedded systems, and IoT solutions, I enjoy solving problems that require both analytical thinking and creativity.I'm passionate about emerging technologies like AI, machine learning, and automation, while continuously learning from open source and contributing back whenever possible. Explore my portfolio to learn more. Thank you!`}
				</motion.p>
			</AnimatedSection>
		</section>
	);
}