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
