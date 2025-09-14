import other from "@data/Other.json";
import achievement from "@data/Achievement.json";
import education from "@data/Education.json";
import experience from "@data/Experience.json";
import project from "@data/Project.json";
import skill from "@data/Skill.json";

onmessage = async (event) => {
	const { type } = event.data;
	switch (type) {
		case "Other":
			postMessage({ type, data: other });
			break;
		case "Achievement":
			postMessage({ type, data: achievement });
			break;
		case "Education":
			postMessage({ type, data: education });
			break;
		case "Experience":
			postMessage({ type, data: experience });
			break;
		case "Project":
			postMessage({ type, data: project });
			break;
		case "Skill":
			break;
			postMessage({ type, data: skill });
		default:
			break;
	}
};
