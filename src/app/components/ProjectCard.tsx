import { ProjectItem } from "app/types/Section";

import { motion } from "framer-motion";

import { Fira_Sans, Roboto_Slab } from "next/font/google";
import Image from "next/image";
import { IoIosLink } from "react-icons/io";

const roboto = Roboto_Slab({ preload: false });
const fira = Fira_Sans({ weight: "300", preload: false });

export default function ProjectCard({
	title,
	image,
	detail,
	points,
	className,
	link,
	techStack,
	linkIcon: LinkIcon = IoIosLink,
}: ProjectItem) {
	return (
		<motion.div
			className={`flex flex-col gap-5 w-full h-full max-w-md items-center justify-between rounded-xl p-5 border border-gray-200 ${
				className || ""
			}`}
			initial={{ boxShadow: "0 5px 5px rgba(0,0,0,0.10)" }}
			whileHover={{
				boxShadow: "0 8px 15px rgba(0,0,0,0.25)",
				transition: { duration: 0 },
			}}
			transition={{ duration: 0.1 }}>
			<div className="relative flex flex-col h-[200px] w-[300px]">
				<Image
					src={image || "https://dummyimage.com/600x400/000/fff"}
					alt={`image of ${title?.trim() || "dummy project"}`}
					fill={true}
					loading="lazy"
					draggable="false"
					className="w-full h-full select-none object-cover rounded-md"
				/>
				<h3
					className={`absolute font-bold text-lg z-10 w-full bottom-1 text-center text-(--accent) bg-(--secondary) ${roboto.className}`}>
					{title || "This is a dummy project name"}
				</h3>
			</div>

			<div
				className={`flex flex-col gap-3 w-full max-w-sm justify-between ${fira.className}`}>
				<p className="text-justify">{detail}</p>
				<ol className="list-decimal list-inside flex flex-col gap-1">
					{points.map((point, index) => (
						<li key={index} className="text-justify">
							{point}
						</li>
					))}
				</ol>
			</div>

			<div className="w-full flex flex-row justify-between items-center">
				<div className="flex flex-row flex-wrap gap-1 text-left">
					{techStack.map((tech, index) => (
						<span
							key={index}
							className="text-sm rounded-full px-2 py-1 text-(--background) bg-(--secondary)">
							{tech}
						</span>
					))}
				</div>

				<a
					className="flex items-center text-right text-purple-500"
					rel="noopener noreferrer"
					href={link}
					target="_blank">
					<LinkIcon className="mr-1" /> Visit
				</a>
			</div>
		</motion.div>
	);
}
