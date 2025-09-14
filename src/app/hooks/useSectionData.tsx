import { useState, useEffect } from "react";
import { SectionType, SectionDataMap } from "../types/Section";
import { motion } from "framer-motion";
import AnimatedSection from "@components/AnimatedSection";

export function SectionTitle({ title }: { title: string }) {
	return (
		<AnimatedSection>
			<motion.h2
				className="w-full flex flex-row justify-center items-center cursor-pointer"
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -50 }}
				transition={{
					duration: 0.8,
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
	);
}

export function useSectionData<T extends SectionType>(title: T) {
	const [data, setData] = useState<SectionDataMap[T]>([]);

	useEffect(() => {
		const worker = new Worker(
			new URL("../worker/LoadData.ts", import.meta.url)
		);

		worker.onmessage = (event) => {
			if (event.data.type === title) {
				setData(event.data.data as SectionDataMap[T]);
			}
		};

		worker.postMessage({ type: title });

		return () => worker.terminate();
	}, [title]);

	return data;
}
