import type { Metadata } from "next";


export const metadata: Metadata = {
	title: "About",
	openGraph: {
		title: "The About Section Of My Portfolio",
		description: "What the portfolio is and why",
		images: [
			{
				url: "/assets/PixeledLuaWriter.jpg"
			}
		]
	},
}

export default function Layout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className="transition-colors container duration-300 px-4 mx-auto">
			{children}
		</div>
	)
}
