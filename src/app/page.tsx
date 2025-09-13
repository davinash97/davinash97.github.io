"use client";

import React, { Suspense, useEffect, useState } from "react";

import Loading from "./components/Loading";

import Hero from "./page/hero/Hero";
import About from "./page/about/About";
import Skill from "./page/skill/Skill";
import Project from "./page/project/Project";
import Experience from "./page/experience/Experience";
import Education from "./page/education/Education";
import Contact from "./page/contact/Contact";
import Achievement from "./page/achievements/Achievement";
import Other from "./page/other/Other";

export default function Home() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 1000);
		return () => clearTimeout(timer);
	}, []);

	if (loading) return <Loading />;

	return (
		<>
			<Suspense fallback={<Loading />}>
				<main className="flex flex-col gap-5 text-center items-center justify-center p-0 m-0 bg-gray-200 text-black dark:bg-gray-900 dark:text-gray-200">
					<Hero />
					<About />
					<Skill />
					<Project />
					<Experience />
					<Education />
					<Achievement />
					<Other />
					<Contact />
				</main>
			</Suspense>
		</>
	);
}
