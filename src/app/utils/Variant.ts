import { Variants } from "framer-motion";

const ContainerVariants: Variants = {
	hidden: { opacity: 0, y:50 },
	visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const CardVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
	},
};

export {ContainerVariants, CardVariants};
