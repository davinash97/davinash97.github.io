import AnimatedSection from "@/app/components/AnimatedSection";
import Card from "@/app/components/Card";
import { easeInOut, motion, Variants } from "framer-motion";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.4 },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 0, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.3, ease: easeInOut },
	},
	exit: { opacity: 0, y: 30, scale: 0.95 },
};

export default function Achievement() {
	const title = "Achievements";
	return (
		<section className="flex flex-col p-10 gap-10 justify-center items-center">
			<AnimatedSection>
				<motion.h2
					className="wrap-break-word text-wrap"
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
					viewport={{ amount: 0.3, once: false }}>
					{Array.from(title, (char, index) => (
						<span key={index} className="heading">
							{char}
						</span>
					))}
				</motion.h2>
			</AnimatedSection>

			<AnimatedSection>
				<motion.div
					className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-around gap-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					exit="exit"
					viewport={{ amount: 0.1, once: false }}>
					{[
						{
							title: "Programming in Java",
							subtitle: "IIT-KGP",
							duration: "2023",
							detail: `Successfully completed the Java Programming course offered by IIT-KGP through the NPTEL program,
							within the prescribed duration. Gained a thorough understanding of core Object-Oriented Programming
							concepts such as inheritance, multiple inheritance, polymorphism, etc. Concepts like Data Structures,
							multithreading, Collections etc. The fundamental were clearly explained and well understood.
							Submitted all assignments and assessments on time, and achieved a score of 71% in the certification exam.`,
							link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs74/Course/NPTEL23CS74S73270001020114236.pdf",
						},
						{
							title: "Collections in Java",
							subtitle: "Great Learning",
							duration: "2024",
							detail: `Gained a comprehensive understanding of the Java Collections Framework, including key concepts such as
							List, Set, Map, and their implementations (ArrayList, LinkedList, HashSet, TreeSet, HashMap, etc.).
							Learned about collection algorithms, iteration techniques, sorting, and efficient data handling practices.
							The course provided in-depth coverage of practical usage, performance considerations, and best practices.
							Successfully completed the course within the prescribed time frame.`,
							link: "https://www.mygreatlearning.com/certificate/PBQNAOTL",
						},
						{
							title: "OOP in Java",
							subtitle: "Great Learning",
							duration: "2024",
							detail: `Gained a thorough understanding of core object-oriented programming concepts,
							including inheritance, multiple inheritance, polymorphism, encapsulation,
							interfaces, abstraction, classes, and objects. The fundamental pillars
							of OOP were clearly covered and well comprehended. Successfully completed
							the course within the prescribed time frame.`,
							link: "https://www.mygreatlearning.com/certificate/JMEIZSVL",
						},
						{
							title: "Java (Basics)",
							subtitle: "HackerRank",
							duration: "2024",
							detail: `Successfully completed the Java Basics course on HackerRank, developing a strong
							foundation in core Java programming concepts. Covered essential topics such as data types,
							conditionals, loops, arrays, functions, and basic input/output handling. Gained
							experience by solving practical coding challenges, which reinforced problem-solving
							skills and logical thinking in Java.`,
							link: "https://www.hackerrank.com/certificates/cbaf34afb204",
						},
						{
							title: "Software Engineering in Java",
							subtitle: "HackerRank",
							duration: "2024",
							detail: `Completed the Software Engineering Intern program on HackerRank, gaining hands-on experience
							in problem-solving, coding best practices, and core software development concepts. Developed skills
							in algorithms, data structures, object-oriented programming, and debugging by working on practical
							coding challenges. Built a solid foundation for approaching real-world software engineering tasks
							with efficiency and clarity.`,
							link: "https://www.hackerrank.com/certificates/fd23e8486b66",
						},
						{
							title: "Solved 300+ questions in Java",
							subtitle: "LeetCode",
							duration: "2024",
							detail: `Solved over 300 coding problems on LeetCode, focusing on Easy and Medium difficulty levels,
							to strengthen problem-solving skills and algorithmic thinking. Maintained a continuous streak of
							nearly ~290 days of daily practice, demonstrating strong discipline, consistency, and dedication
							toward mastering data structures and algorithms.`,
							link: "https://leetcode.com/u/davinash97",
						},
					].map((item, index) => (
						<motion.div
							variants={cardVariants}
							whileHover={{
								scale: 1.02,
								boxShadow: "0 8px 15px rgba(0, 0, 0, 0.15)",
							}}
							key={index}>
							<Card {...item} />
						</motion.div>
					))}
				</motion.div>
			</AnimatedSection>
		</section>
	);
}
