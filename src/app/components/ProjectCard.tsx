import { Lato } from "next/font/google";
import Image from "next/image";
import { IconType } from "react-icons";
import { IoIosLink } from "react-icons/io";

const lato = Lato({ weight: "400", subsets: ["latin"] });

type ProjectCardProps = {
	name: string;
	image: string;
	details: string;
	points: string[];
	className?: string;
	link: string;
	techStack: string[];
	linkIcon?: IconType;
};

export default function ProjectCard({
	name,
	image,
	details,
	points,
	className,
	link,
	techStack,
	linkIcon: LinkIcon = IoIosLink,
}: ProjectCardProps) {
	return (
		<div
			className={`flex flex-col gap-5 w-full h-full max-w-md items-center justify-between border-2 rounded-xl p-5 ${
				className || ""
			}`}>
			<div className="relative flex flex-col h-[200px] w-[300px]">
				<Image
					src={image || "https://dummyimage.com/600x400/000/fff"}
					alt={`image of ${name?.trim() || "dummy project"}`}
					fill={true}
					loading="lazy"
					draggable="false"
					className="w-full h-full select-none object-cover rounded-md"
				/>
				<h3 className="absolute font-bold text-lg z-10 w-full bottom-1 text-center text-white bg-purple-500">
					{name || "This is a dummy project name"}
				</h3>
			</div>

			<div
				className={`flex flex-col gap-3 w-full max-w-sm justify-between ${lato.className}`}>
				<p className="text-justify">{details}</p>
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
							className="text-gray-200 text-sm rounded-full px-2 py-1 bg-purple-500">
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
		</div>
	);
}
