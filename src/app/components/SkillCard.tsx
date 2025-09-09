import { Lato } from "next/font/google";

type SkillCardProps = {
	skillName: string;
	skillSet: string[];
	className?: string;
};

const lato = Lato({ weight: "400", subsets: ["latin"] });

export default function SkillCard({
	skillName,
	skillSet,
	className,
}: SkillCardProps) {
	return (
		<article
			className={`flex flex-col text-left p-10 border-2 rounded-lg 
						hover:shadow-2xl hover:shadow-black/40 transition duration-200 
						cursor-pointer max-w-sm w-full h-full ${lato.className} ${className || ""}`}>
			<h3 className="text-xl font-semibold">{skillName}</h3>
			<ul className="mt-3 list-disc list-inside space-y-1">
				{skillSet.map((skill, index) => (
					<li key={index}>{skill}</li>
				))}
			</ul>
		</article>
	);
}
