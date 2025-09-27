"use client";

import AnimatedSection from "@components/AnimatedSection";
import { SectionTitle } from "@hooks/useSectionData";

import { motion } from "framer-motion";
import { Fira_Sans } from "next/font/google";

const fira = Fira_Sans({ weight: "300" });

export default function About() {
	const title = "About me";
	return (
		<section
			className="flex flex-col w-screen text-center items-center gap-5 overflow-x-hidden xl:px-60 lg:px-0"
			style={{ height: "60dvh" }}>
			<SectionTitle title={title} />

			<AnimatedSection>
				<motion.p
					className={`max-w-full text-justify md:text-xl p-5 lg:p-10 ${fira.className}`}
					initial={{ opacity: 0, x: 90 }}
					whileInView={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 100 }}
					transition={{
						duration: 1,
						ease: [0.25, 0.1, 0.25, 1.0],
						delay: 0.2,
					}}
					viewport={{ amount: 0.3, once: false }}>
					{`I'm a Computer Science Engineer with a strong foundation in Electrical Engineering, from RSR Rungta College of Engineering & Technology, Bhilai, Chhattisgarh -India. Combining software expertise with hardware knowledge to create comprehensive solutions. Currently Working in Amazon in Bangalore. My interdisciplinary background allows me to bridge the gap between digital innovation and physical implementation. With experience in full-stack development, embedded systems, and IoT solutions, I thrive on challenges that require both analytical thinking and creative problem-solving. I'm passionate about emerging technologies like AI, machine learning, and automation. Passionate about tech, and Learning from Open Source, trying to give back the most. Explore my portfolio for more. Thank you!`}
				</motion.p>
			</AnimatedSection>
		</section>
	);
}
