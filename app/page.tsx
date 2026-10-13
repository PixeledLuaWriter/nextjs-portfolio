import { FaExclamationTriangle } from "react-icons/fa";

export default function Home() {
	return (
		<div className="transition-colors ease-in-out space-y-14 lg:space-y-24">
			<div className="transition-colors ease-in-out max-w-4xl mx-auto mt-16 antialiased">
        		<div className="transition-colors ease-in-out lg:px-4 lg:mt-12 ">
        		<h1 className="transition-colors text-center ease-in-out text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
				Hey there, Welcome To My Portfolio, Hope you'll enjoy the show for
				the specialties that this brings
        		</h1>
				<FaExclamationTriangle />
				<h2>
					Note: Some stuff in this portfolio is still under development, so please be patient with me as I work on it. Thank you for your understanding!
				</h2>
    		</div>
    	</div>
    </div>
	)
}
