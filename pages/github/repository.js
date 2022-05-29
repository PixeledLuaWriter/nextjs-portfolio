import config from "../../data/config";
import React from "react";
import Repositories from "../../components/Repo";
import Head from "next/head";
import SmoothGrid from "../../components/SmoothGrid";

/** 
 * Render the RepositoryHome page inside a div element that's automatically configured for the webpage like the other conponent files are but leave the Next.js Head title alone
 * and use the configuration for the title and description for the actual piece within the webpage before rendering
 * the repositories component with the repos prop set with the project list data in the configuration file inside the smoothgrid component with the repositories data
 */

export default function RepositoryHome() { 
    return (
        <div className="transition-colors container px-4 mx-auto">
            <Head>
                <title>Repositories</title>
                <meta name="description" content="The Repositories Homepage of the portfolio" />
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
            <SmoothGrid className="lg:space-x-5 lg:flex lg:flex-row lg:-mx-4" gap="1rem" gridTemplateColumns="repeat(5, 1fr)" gridTemplateRows="repeat(3, 1fr)">
                <Repositories repos={config.projects} />
            </SmoothGrid>
        </div>
    );
}