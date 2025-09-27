import { CommonItem } from "app/types/Section";

import { Fira_Sans, Montserrat, Roboto_Slab } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
import { IoIosLink } from "react-icons/io";

const roboto = Roboto_Slab();
const fira = Fira_Sans({ weight: "300" });
const monsterrat = Montserrat();

export default React.memo(function Card({
	title,
	subtitle,
	duration,
	detail,
	className,
	link,
	linkIcon: LinkIcon = IoIosLink, // Default icon
}: CommonItem) {
	return (
		<motion.article
			className={`max-w-md h-full justify-between flex flex-col gap-4 p-4 rounded-lg border border-gray-200 ${
				className || ""
			}`}
			initial={{ boxShadow: "0 5px 5px rgba(0,0,0,0.10)" }}
			whileHover={{
				boxShadow: "0 8px 15px rgba(0,0,0,0.15)",
				transition: { duration: 0.2 },
			}}
			transition={{ duration: 0.6 }}>
			<h3 className={`text-2xl ${roboto.className}`}>{title}</h3>

			<div
				className={`flex justify-between text-sm ${monsterrat.className}`}>
				<span className="no-anim">{subtitle}</span>
				<time>{duration}</time>
			</div>

			<p
				className={`leading-relaxed text-justify text-base ${fira.className}`}>
				{detail ||
					`Lorem Ipsum is simply dummy text of the printing and typesetting industry...`}
			</p>

			<div className="text-right">
				{link && (
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className={`text-(--primary) inline-flex items-center ${fira.className}`}>
						<LinkIcon className="mr-1" /> Visit
					</a>
				)}
			</div>
		</motion.article>
	);
});
