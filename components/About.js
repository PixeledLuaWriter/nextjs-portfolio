import React from "react"
import Image from "next/image"
import profile from "../public/PixeledLuaWriter.jpg"

const About = () => {
    return (
        <div className="transition-colors ease-in-out container px-4 mx-auto">
            <div className="transition-colors ease-in-out lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="transition-colors ease-in-out lg:px-4 lg:mt-12 ">
                    <h1 className="transition-colors ease-in-out text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey there, Welcome To My Portfolio
                    </h1>
                    <div className="transition-colors ease-in-out mt-4 text-gray-800 dark:text-white rounded-[6px] border-2">
                        <p className="m-4">
                            This portfolio was created with The Next.JS Framework For React.JS and TailwindCSS,
                            If you want to see my projects just click the button down below to see my public repositories on github
                        </p>
                    </div>
                    <div className="transition-colors ease-in-out mt-4 text-gray-800 dark:text-white rounded-[6px] border-2">
                        <p className="m-4">
                            This portfolio contains a stack of the following: Next.JS, React.JS, Node.JS, HTML5, CSS3, PostCSS and TailwindCSS
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="duration-300 ease-in-out rounded-[0.325rem] active:focus:outline-none active:rounded-tl-[45.824rem] active:rounded-br-[45.824rem]"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;