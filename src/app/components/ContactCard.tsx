import { ContactItem } from "app/types/Section";

import { motion } from "framer-motion";
import { Fira_Sans, Roboto_Slab } from "next/font/google";

const roboto = Roboto_Slab({ preload: false });
const fira = Fira_Sans({ weight: "300", preload: false });

export default function ContactCard({
	title,
	image: Icon,
	content,
	link,
}: ContactItem) {
	const data = (
		<motion.div
			className="flex flex-row w-full gap-4 rounded-xl p-4 items-center border border-gray-200"
			initial={{ boxShadow: "0 5px 5px rgba(0,0,0,0.10)" }}
			whileHover={{
				boxShadow: "0 8px 15px rgba(0,0,0,0.25)",
				transition: { duration: 0 },
			}}
			transition={{ duration: 0.1 }}>
			{/* Icon */}
			<div className="h-[80px] w-[80px] flex items-center justify-center text-4xl text-(--primary)">
				<Icon />
			</div>

			{/* Content */}
			<div className="flex flex-col justify-center text-left min-w-0">
				<h3 className={`${roboto.className}`}>{title}</h3>
				<div className={`break-words text-sm ${fira.className}`}>
					{content}
				</div>
			</div>
		</motion.div>
	);
	return link ? (
		<a href={link} target="_blank" rel="noopener noreferrer">
			{data}
		</a>
	) : (
		data
	);
}
