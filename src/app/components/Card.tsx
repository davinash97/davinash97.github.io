import { Lato } from "next/font/google";
import React from "react";
import { IconType } from "react-icons";
import { IoIosLink } from "react-icons/io";

const lato = Lato({ weight: "400", subsets: ["latin"] });

type Props = {
	title: string;
	organization: string;
	duration: string;
	detail: React.ReactNode;
	className?: string;
	link?: string; // The URL
	linkIcon?: IconType; // Icon component
};

export default React.memo(function Card({
	title,
	organization,
	duration,
	detail,
	className,
	link,
	linkIcon: LinkIcon = IoIosLink, // Default icon
}: Props) {
	return (
		<article
			className={`max-w-md h-full justify-between flex flex-col gap-4 p-4 rounded-lg border border-gray-200 shadow-sm ${
				className || ""
			}`}>
			<h3 className="text-2xl font-semibold">{title}</h3>

			<div className="flex justify-between text-sm">
				<span className="no-anim">{organization}</span>
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
						className={`text-purple-500 inline-flex items-center ${lato.className}`}>
						<LinkIcon className="mr-1" /> Visit
					</a>
				)}
			</div>
		</article>
	);
});
