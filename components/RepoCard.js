import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubButton from "react-github-btn";

const RepoCard = ({ project: { title, description, tags, link }, key }) => {
  return (
    <div key={key} className="group flex flex-col justify-center items-center m-4 p-6 rounded-xl border-[0.5px] border-white dark:border-slate-900 shadow-[8px_6px_6px_0px] shadow-gray-500 bg-gradient-to-br from-neutral-400 via-red-500 to-gray-400 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-800" /**style={{
      "background": 'linear-gradient(45deg, red, orange, yellow, green, turquoise, cyan, blue, darkblue, purple, red)',
    }}**/>
      <a href={link} target="_blank">
        <h1 className="text-xl text-center font-bold dark:text-gray-100">
          {title}{" "}
          <FaExternalLinkAlt className="inline align-baseline" />
        </h1>
      </a>
      <hr className="my-4" />
      <p className="">{description}</p>
      <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
        {tags && tags.map((tag) => (
          <div className="px-4 py-1 bg-[#388bfd26] hover:bg-[#1f6feb] font-medium text-[#6db1ff] hover:text-white duration-300 ease-in-out rounded-full">{tag}{/** These Are Topic Chip Components customly */}</div>
        ))}
      </div>
      <div className="w-full text-center">
        <GitHubButton href={link} data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
        {"  "}
        <GitHubButton href={link + "/fork"} data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork ntkme/github-buttons on GitHub">Fork</GitHubButton>
      </div>
    </div>
  );
};

export default RepoCard;
