import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubButton from "react-github-btn";

const RepoCard = ({ project: { title, description, tags, link, id }, key }) => {
  return (
    <div key={key} className="group flex flex-col justify-center items-center m-4 p-1 rounded-xl bg-[linear-gradient(to_bottom_right,_gold,_coral,_goldenrod,_chartreuse)] dark:bg-[linear-gradient(to_bottom_right,_darkorange,_magenta,_rebeccapurple)] border-none shadow-[8px_6px_6px_0px] shadow-gray-500" /**style={{
      "background": 'linear-gradient(45deg, red, orange, yellow, green, turquoise, cyan, blue, darkblue, purple, red)',
    }}**/>
      <div className="group-inner w-full h-full flex flex-col justify-center items-center bg-slate-100 dark:bg-neutral-800 p-6 rounded-xl ease-in-out duration-300 transition-colors">
        <a href={link} target="_blank">
          <h1 className="text-xl text-center font-bold dark:text-gray-100">
            {title}{" "}
            <FaExternalLinkAlt className="inline align-baseline" />
          </h1>
        </a>
        <hr className="my-4 w-full h-[4px] border border-black bg-black dark:border-white dark:bg-white rounded-2xl transition-colors duration-300 ease-in-out" />
        <p className="text-ellipsis overflow-wrap">{description}</p>
        <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
          {tags && tags.map((tag) => (
            <a className="px-4 py-1 bg-[#388bfd26] hover:bg-[#1f6feb] font-medium text-[#6db1ff] hover:text-white duration-300 ease-in-out rounded-full text-center" target="_blank" href={`https://github.com/topics/${tag}`} title={`Topic: ${tag}`}>{tag}{/** These Are Topic Chip Components customly */}</a>
          ))}
        </div>
        <div className="w-full text-center">
          <GitHubButton href={link} data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
          {"  "}
          <GitHubButton href={link + "/fork"} data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork ntkme/github-buttons on GitHub">Fork</GitHubButton>
        </div>
        <h2 className="text-lg font-black">CID: {id}</h2>
      </div>
    </div>
  );
};

export default RepoCard;
