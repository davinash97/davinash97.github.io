import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Avinash's Portfolio",
	description: "This is my portfolio website, explore to know more",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased bg-gray-200 text-black dark:bg-gray-900 dark:text-gray-200">{children}</body>
		</html>
	);
}
