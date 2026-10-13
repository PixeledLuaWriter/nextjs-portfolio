import config from "@/data/config"
import Repositories from "@/components/Core/Repo"

export default function Repos() {
	return (
		<>
			<div className="overflow-x-hidden antialiased p-4">
				<h2 className="text-center text-2xl font-bold">
					{config.title}
				</h2>
				<p className="text-xl text-center font-medium p-4">
					{config.description} &darr;
				</p>
            </div>
            <h1 className="mt-8 text-4xl 2xs:text-xl md:text-4xl text-center font-extrabold">My Repositories</h1>
            <Repositories repos={config.projects} />
		</>
	)
}
