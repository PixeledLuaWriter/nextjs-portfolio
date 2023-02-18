import config from "../../data/config";
import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import SmoothGrid from "../../components/SmoothGrid"
/** 
 * Render the RepositoryHome page inside a div element that's automatically configured for the webpage like the other conponent files are but leave the Next.js Head title alone
 * and use the configuration for the title and description for the actual piece within the webpage before rendering
 * the repositories component with the repos prop set with the project list data in the configuration file inside the smoothgrid component with the repositories data
 */

const DynamicRepositories = dynamic(() => import("../../components/Repo"), {
    ssr: false
})

export default function RepositoryHome() { 
    return (
        <div className="transition-colors container px-4 mx-auto">
            <Head>
                <title>Repositories</title>
                <meta property='og:title' content='The repository homepage of all of my projects' />
                <meta name="theme-color" content="#000000" />
                <meta property="og:description" content="The Repositories Homepage of the portfolio" />
                <meta property='og:image' content="https://www.pixeledluawriter.ml/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPixeledLuaWriter.6d457aaa.jpg&w=256&q=75" />
                <meta property='twitter:card' content='summary_large_image' />
            </Head>
            <div className="">
                    <div className="overflow-x-hidden w-full antialiased">
                        <h2 className="mx-0 max-w-max text-left relative mb-4 md:w-max">
                            {config.title}
                        </h2>
                    </div>
                    <p className="text-lg">
                        {config.description}
                    </p>
                </div>
            <SmoothGrid className="space-x-5 grid -mx-4 justify-items-center items-center" gap="1rem" gridTemplateColumns="auto" gridTemplateRows="auto">
                <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">My projects</h1>
                <DynamicRepositories repos={config.projects} />
            </SmoothGrid>
        </div>
    );
}
