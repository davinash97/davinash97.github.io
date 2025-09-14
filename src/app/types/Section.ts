import { IconType } from "react-icons";

/*
  For Education, Experience, Other
*/
export interface CommonItem {
	title: string;
	subtitle: string;
	duration: string;
	detail: React.ReactNode;
	className?: string;
	link?: string; // The URL
	linkIcon?: IconType; // Icon component
}

export interface ProjectItem {
	title: string;
	image: string;
	detail: string;
	points: string[];
	className?: string;
	link: string;
	techStack: string[];
	linkIcon?: IconType;
}

export interface SkillItem {
	title: string;
	set: string[];
	className?: string;
}

export interface AchievementItem {
	title: string;
	subtitle: string;
	duration: string;
	detail: string;
	link: string;
}

export interface ContactItem {
	title: string;
	image: IconType;
	content: React.ReactNode;
}

export type SectionType =
	| "Contact"
	| "Education"
	| "Experience"
	| "Other"
	| "Project"
	| "Skill"
	| "Achievement";

export type SectionDataMap = {
	Contact: ContactItem[];
	Education: CommonItem[];
	Experience: CommonItem[];
	Other: CommonItem[];
	Project: ProjectItem[];
	Skill: SkillItem[];
	Achievement: AchievementItem[];
};
