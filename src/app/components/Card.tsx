import { CommonItem } from "app/types/Section";

import { Lato } from "next/font/google";
import React from "react";
import { IoIosLink } from "react-icons/io";

const lato = Lato({ weight: "400", subsets: ["latin"] });

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
		<article
			className={`max-w-md h-full justify-between flex flex-col gap-4 p-4 rounded-lg border border-gray-200 shadow-sm ${
				className || ""
			}`}>
			<h3 className="text-2xl font-semibold">{title}</h3>

			<div className="flex justify-between text-sm">
				<span className="no-anim">{subtitle}</span>
				<time>{duration}</time>
			</div>

			<p className={`leading-relaxed text-justify ${lato.className}`}>
				{detail ||
					`Lorem Ipsum is simply dummy text of the printing and typesetting industry...`}
			</p>

			<div className="text-right">
				{link && (
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className={`text-(--primary) inline-flex items-center ${lato.className}`}>
						<LinkIcon className="mr-1" /> Visit
					</a>
				)}
			</div>
		</article>
	);
});
