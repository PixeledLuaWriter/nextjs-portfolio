import config from "../../data/config";
import React from "react";
import Repositories from "../../components/Repo";

/**
                    <div className="mt-8">
                        {projects.projects.map((item, index) => {
                            return (
                                <div key={index} className="p-6 mb-4 rounded-xl border-[0.5px] border-gray-700">
                                    <h3>
                                        {item.title}
                                    </h3>
                                    <p>
                                        {item.description}
                                    </p>
                                    {item.link && (
                                        <a href={item.link} rel="noreferrer" target="_blank" className="flax items-center py-1 px-3">
                                            <FaExternalLinkAlt className="inline align-baseline" />
                                            <span className="ml-2 text-gray-700 transition-colors duration-500">
                                                {item.link}
                                            </span>
                                        </a>
                                    )}
                                    {item.github && (
                                        <a href={`https://github.com/PixeledLuaWriter/${item.github}`} rel="noreferrer" target="_blank" className="flax items-center py-1 px-3">
                                            <FaGithub className="inline align-baseline" />
                                            <span className="ml-2 text-gray-700 transition-colors duration-500">
                                                {item.github}
                                            </span>
                                        </a>
                                    )}
                                </div>
                            );
                        })}
                    </div>
 */

export default function RepositoryHome() {
   return (
    <div className="transition-colors container px-4 mx-auto">
        <div className="transition-colors lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
            <div className="transition-colors lg:px-4 lg:mt-12 ">
                 <div className="">
                    <div className="overflow-x-hidden w-full antialiased">
                        <h2 className="mx-0 max-w-max text-left relative mb-4 md:w-max">
                            {config.title}
                        </h2>
                    </div>
                    <p className="text-lg">
                        {config.description}
                    </p>
                    <Repositories repos={config.projects}/>
                </div>
            </div>
        </div>
    </div>
  );
}