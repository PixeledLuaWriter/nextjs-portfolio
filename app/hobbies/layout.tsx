import type { Metadata } from "next";


export const metadata: Metadata = {
	title: "Hobbies",
	openGraph: {
		title: "My hobbies",
		description: "literally just my hobbies in free time",
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
		<div className="transition-colors ease-in-out lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
			{children}
		</div>
	)
}
