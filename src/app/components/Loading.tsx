"use client";

import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default function Loading() {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
			<h1
				className={`flex justify-center gap-5 text-6xl text-purple-500 animate-pulse ${greatVibes.className}`}>
				{"<Loading.../>"}
			</h1>
		</div>
	);
}
