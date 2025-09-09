"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Poppins, Lato, Great_Vibes } from "next/font/google";

const nameArr = [
	"Avinash",
	"a Software Engineer",
	"an Electrical Engineer",
	"a Tech enthusiast",
];

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default function Hero() {
	const [name, setName] = useState(nameArr[0]);
	const [hovered, setHovered] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const [scrollY, setScrollY] = useState(0);

	// Cycle names
	useEffect(() => {
		if (hovered) {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
			return;
		}
		let index = 0;
		intervalRef.current = setInterval(() => {
			index = (index + 1) % nameArr.length;
			setName(nameArr[index]);
		}, 2000);

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [hovered]);

	// Scroll tracking (parallax + fade)
	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const opacity = Math.max(1 - scrollY / 400, 0);
	const translateY = scrollY * 0.2;

	// Stagger variants for heading
	const headingVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i = 1) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.15, duration: 0.6 },
		}),
	};

	return (
		<section className="relative h-screen w-screen m-0 p-0">
			{/* GPU-friendly animated gradient background */}
			<motion.div
				className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-(--primary) via-(--background) to-(--secondary) animate-gradient-x"
				style={{
					opacity,
					transform: `translateY(${translateY}px)`,
				}}
				animate="true"
			/>

			{/* Overlay */}
			<motion.div
				className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white bg-black/30 text-center"
				style={{
					opacity,
					transform: `translateY(${translateY}px)`,
					transition: "opacity 0.1s linear, transform 0.1s linear",
				}}>
				{/* Heading with stagger */}
				<motion.h1
					className={`text-3xl md:text-6xl lg:text-6xl xl:text-8xl break-words p-6 text-(--primary) ${poppins.className}`}>
					{"Welcome to my Portfolio".split(" ").map((word, i) => (
						<motion.span
							key={i}
							custom={i}
							variants={headingVariants}
							initial="hidden"
							animate="visible"
							className="inline-block mr-2">
							{word}
						</motion.span>
					))}
				</motion.h1>

				{/* Subheading */}
				<motion.h3
					className={`text-2xl md:text-3xl lg:text-3xl xl:text-6xl break-words p-6 ${lato.className}`}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}>
					I am{" "}
					<motion.span
						key={name}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className={`${greatVibes.className} inline-block animate-bounce hover:[animation-play-state:paused] cursor-auto)`}>
						{name}
					</motion.span>
				</motion.h3>

				{/* Scroll indicator */}
				<motion.div
					className="absolute bottom-6 animate-bounce text-lg opacity-80"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					↓ Scroll down here
				</motion.div>
			</motion.div>
		</section>
	);
}
