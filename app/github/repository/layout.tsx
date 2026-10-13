export default function Layout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className="transition-colors ease-in-out duration-300 container overflow-ellipsis overflow-hidden justify-center items-center mx-auto">
			{children}
		</div>
	)
}
