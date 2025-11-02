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
			<body className="antialiased">{children}</body>
		</html>
	);
}
