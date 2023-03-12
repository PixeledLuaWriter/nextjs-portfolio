import React from "react"
import Image from "next/image"
import profile from "../public/assets/Icons/PixeledLuaWriter.jpg"
import ReactIcon from "./Icons/React"
import NextJSIcon from "./Icons/Next"
import NodeJSIcon from "./Icons/NodeJS"
import HTMLIcon from "./Icons/HTML"
import CSSIcon from "./Icons/CSS"
import PostCSSIcon from "./Icons/PostCSS"
import TailwindIcon from "./Icons/Tailwind"

const About = () => {
    return (
        <div className="transition-colors ease-in-out container px-4 mx-auto">
            <div className="transition-colors ease-in-out lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="transition-colors ease-in-out lg:px-4 lg:mt-12 ">
                    <div className="transition-colors ease-in-out mt-4 text-gray-800 dark:text-white rounded-[6px] border-2">
                        <p className="m-4">
                            This portfolio was created with The Next.JS Framework For React.JS and TailwindCSS,
                            If you want to see my projects just click the hamburger button on the navbar to and click the Repositories button to see my public repositories on github
                            Now why did i make this portfolio you ask?
                            I wanted to make a portfolio that would be easy to use and easy to understand.
                            And i also wanted to try and see how doing a portfolio would look like with a stack.
                        </p>
                    </div>
                    <div className="transition-colors ease-in-out w-auto h-auto mt-4 text-gray-800 dark:text-white rounded-[6px] border-2">
                        <p className="m-4">
                            This portfolio contains a stack of the following:
                        </p>
                        <div className="flex items-center p-4">
                            <ReactIcon width={'48'} height={'48'} />
                            <h1 className="text-lg">React.JS</h1>
                        </div>
                        <div className="flex items-center p-4">
                            <NextJSIcon width={'48'} height={'48'} /> Next.JS
                        </div>
                        <div className="flex items-center p-4">
                            <NodeJSIcon width={'48'} height={'48'} /> Node.JS
                        </div>
                        <div className="flex items-center p-4">
                            <HTMLIcon width={'48'} height={'48'} /> HTML5
                        </div>
                        <div className="flex items-center p-4">
                            <CSSIcon width={'48'} height={'48'} /> CSS3
                        </div>
                        <div className="flex items-center p-4">
                            <PostCSSIcon width={'48'} height={'48'} /> PostCSS
                        </div>
                        <div className="flex items-center p-4">
                            <TailwindIcon width={'48'} height={'48'} /> TailwindCSS
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <a href={"https://github.com/PixeledLuaWriter"} className="[text-decoration:_none]" target="_blank">
                        <Image
                            src={profile}
                            alt="Profile"
                            priority={true}
                            className="duration-300 ease-in-out rounded-[0.325rem] active:focus:outline-none active:rounded-tl-[45.824rem] active:rounded-br-[45.824rem]"
                            width={250}
                            height={250}
                            placeholder="blur"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;
