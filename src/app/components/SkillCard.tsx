import { SkillItem } from "app/types/Section";

import { motion } from "framer-motion";
import { Fira_Sans, Roboto_Slab } from "next/font/google";

const roboto = Roboto_Slab();
const fira = Fira_Sans({ weight: "300" });

export default function SkillCard({ title, set, className }: SkillItem) {
	return (
		<motion.article
			className={`flex flex-col text-left p-10 rounded-lg 
						transition duration-200 cursor-pointer max-w-sm w-full h-full ${
							roboto.className
						} ${className || ""} border border-gray-200`}
			initial={{ boxShadow: "0 5px 5px rgba(0,0,0,0.10)" }}
			whileHover={{
				boxShadow: "0 8px 15px rgba(0,0,0,0.25)",
				transition: { duration: 0 },
			}}
			transition={{ duration: 0.1 }}>
			<h3 className={`text-xl ${roboto.className}`}>{title}</h3>
			<ul
				className={`mt-3 list-disc list-inside space-y-1 ${fira.className}`}>
				{set.map((skill, index) => (
					<li key={index}>{skill}</li>
				))}
			</ul>
		</motion.article>
	);
}
