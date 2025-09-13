import AnimatedSection from "@/app/components/AnimatedSection";
import Card from "@/app/components/Card";
import { easeInOut, motion, Variants } from "framer-motion";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.4 },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 50, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.6, ease: easeInOut },
	},
	exit: { opacity: 0, y: 40, scale: 0.95 },
};
export default function Other() {
	const title = "Other";
	const content = [
		{
			title: "AEON Custom Kernel",
			subtitle: "Samsung Exynos 7870",
			duration: "2017",
			detail: `AEON is a custom Linux kernel designed for Samsung devices with the Exynos 7870 chipset.
					It focuses on improving performance, optimizing battery life, and enabling advanced customization.
					This project highlights my experience in low-level system programming,
					kernel development, and hardware optimization, aimed at power users and developers.`,
		},
		{
			title: "Custom ROMs",
			subtitle: "Samsung Exynos 7870",
			duration: "2017",
			detail: `Ported custom ROMs to various Samsung devices, including Galaxy J7 Nxt, Neo, J6, and A3.
					Collaborated with other developers to port and maintain ROMs for the Exynos 7870 chipset.
					As part of the Android Moderation Community, I gained valuable experience in Android
					development and contributed by supporting and moderating community projects.`,
		},
		{
			title: "Group Management Bot",
			subtitle: "Telegram",
			duration: "2017",
			detail: `Maintained a Python-based Telegram bot using the Python Telegram Bot library,
					focused on group management and automating tasks like fetching resources from
					GitHub and providing update notifications. The bot helped reduce manual effort
					by delivering release updates and other important information directly to the group.`,
		},
	];
	return (
		<section className="flex flex-col p-10 gap-10 justify-center items-center">
			<AnimatedSection>
				<motion.h2
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -30 }}
					transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
					viewport={{ amount: 0.3, once: false }}>
					{Array.from(title, (char, index) => (
						<span key={index} className="heading">
							{char}
						</span>
					))}
				</motion.h2>
			</AnimatedSection>
			<AnimatedSection>
				<motion.div
					className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-around gap-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					exit="exit"
					viewport={{ amount: 0.3, once: false }}>
					{content.map((item, index) => (
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
