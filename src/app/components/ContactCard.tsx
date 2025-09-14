import { ContactItem } from "app/types/Section";

import { Lato } from "next/font/google";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export default function ContactCard({
	title,
	image: Icon,
	content,
}: ContactItem) {
	return (
		<div className="flex flex-row w-full gap-4 rounded-xl p-4 border-2 border-solid border-(--primary) items-center">
			{/* Icon */}
			<div className="h-[80px] w-[80px] flex items-center justify-center text-4xl text-(--primary)">
				<Icon />
			</div>

			{/* Content */}
			<div className="flex flex-col justify-center text-left min-w-0">
				<h3 className="font-semibold">{title}</h3>
				<div className={`break-words text-sm ${lato.className}`}>
					{content}
				</div>
			</div>
		</div>
	);
}
