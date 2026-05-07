import AnimatedSection from "@components/AnimatedSection";
import Card from "@components/Card";
import { SectionTitle, useSectionData } from "@hooks/useSectionData";
import {ContainerVariants, CardVariants} from "app/utils/Variant";

import { motion } from "framer-motion";

export default function Achievement() {
	const title = "Achievement";
	const data = useSectionData(title);
	if (!data || data.length === 0) return null;

    return (
        <section className="flex flex-col p-10 gap-10 justify-center items-center">
            <SectionTitle title={title} />

			<AnimatedSection>
				<motion.div
					className="max-w-7xl grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-around gap-6"
					variants={ContainerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ amount: 0.1, once: true }}
				>
					{data.map((item, index) => (
						<motion.div variants={CardVariants} key={index}>
							<Card {...item} />
						</motion.div>
					))}
				</motion.div>
			</AnimatedSection>
		</section>
	);
}
