import AnimatedSection from "@components/AnimatedSection";
import Card from "@components/Card";
import { SectionTitle, useSectionData } from "@hooks/useSectionData";

import { easeInOut, motion, Variants } from "framer-motion";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.4 },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 0, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.3, ease: easeInOut },
	},
	exit: { opacity: 0, y: 30, scale: 0.95 },
};

export default function Achievement() {
	const title = "Achievement";
	const data = useSectionData(title);

	return (
		<section className="flex flex-col p-10 gap-10 justify-center items-center">
			<SectionTitle title={title} />

			<AnimatedSection>
				<motion.div
					className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-around gap-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					exit="exit"
					viewport={{ amount: 0.1, once: false }}>
					{data.map((item, index) => (
						<motion.div
							variants={cardVariants}
							whileHover={{
								scale: 1.02,
								boxShadow: "0 8px 15px rgba(0, 0, 0, 0.15)",
							}}
							key={index}>
							<Card {...item} />
						</motion.div>
					))}
				</motion.div>
			</AnimatedSection>
		</section>
	);
}
