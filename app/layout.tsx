import type { Metadata } from "next";
import Navigation from "@/components/Core/Navigation"
import { Providers } from "./providers";
import "@/styles/globals.css"

export const metadata: Metadata = {
	title: "Welcome",
	openGraph: {
		title: "Main Homepage Of My Portfolio",
		description: "A portfolio of projects",
		images: [
			{
				url: "/assets/PixeledLuaWriter.jpg"
			}
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className="antialiased"
			suppressHydrationWarning
		>
			
			<body>
			<style>
				{`
				body {
				padding: 0;
				margin: 0;
				}

				* {
				box-sizing: border-box;
				}
			`}
	    	</style>
				<Providers>
					<Navigation />
					{children}
				</Providers>
			</body>
		</html>
	)
}
