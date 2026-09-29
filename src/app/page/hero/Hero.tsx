"use client";

import "./Hero.css";
import Hamburger from "@components/Menu";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Poppins, Lato, Great_Vibes, Raleway } from "next/font/google";

const nameArr = [
	"Avinash",
	"a Software Engineer",
	"an Electrical Engineer",
	"a Tech enthusiast",
];

const lato = Lato({ weight: "400", subsets: ["latin"] });
const sans = Raleway({ weight: "400", subsets: ["latin"] });
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
			<motion.div
				className="absolute top-0 left-0 w-full h-full brightness-(--filter-brightness) bg-cover bg-center bg-no-repeat"
				style={{
					opacity,
					transform: `translateY(${translateY}px)`,
					backgroundImage: 'url("assets/heroBg.jpg")',
				}}
				animate="true"
			/>

			<div className="absolute top-0 right-0">{<Hamburger />}</div>

			{/* Overlay */}
			<motion.div
				className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white bg-black/30 text-center"
				style={{
					opacity,
					transform: `translateY(${translateY}px)`,
					transition: "opacity 0.1s linear, transform 0.1s linear",
					backdropFilter: "blur(1.5px)",
				}}>
				{/* Heading with stagger */}
				<div
					className={`${sans.className} xl:leading-25 wrap-break-words text-(--primary)`}
					style={{
						width: "fit-content",
						padding: "100px",
					}}>
					<div className="text-left">
						<motion.h1 className="xl:text-[150px] text-[80px]">
							<b>W</b>
							<span className="">elcome</span>
						</motion.h1>
					</div>
					<div className="text-right">
						<motion.h1 className="xl:text-[50px] text-[30px]">
							<b>t</b>
							<span className="">o my</span>
						</motion.h1>
					</div>
					<div className="text-left">
						<motion.h1 className="xl:text-[90px] text-[50px]">
							<b>P</b>
							<span className="">ortfolio</span>
						</motion.h1>
					</div>
				</div>

				{/* Subheading */}
				<motion.h3
					className={`text-3xl xl:text-6xl wrap-break-words p-6 ${lato.className}`}
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
					className="absolute bottom-6 animate-bounce text-base opacity-80"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					↓ Scroll down here
				</motion.div>
			</motion.div>
		</section>
	);
}
