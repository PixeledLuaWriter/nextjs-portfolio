import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubButton from "react-github-btn";
import { genRandString } from "../data/config";

const RepoCard = ({ project: { title, description, tags, link, id } }) => {
  return (
    <div key={genRandString(16)} className="repo-card-group 2xs:[border-radius:_2rem] xs:[border-radius:_1.75rem] sm:rounded-3xl md:[border-radius:_1.25rem] lg:rounded-2xl xl:rounded-xl flex self-center w-full h-full p-1 rounded-xl [background:_linear-gradient(to_bottom_right,_gold,_coral,_goldenrod,_chartreuse)] dark:[background:_linear-gradient(to_bottom_right,_darkorange,_magenta,_rebeccapurple)] border-none shadow-[8px_6px_6px_0px] shadow-gray-500" /**style={{
      "background": 'linear-gradient(45deg, red, orange, yellow, green, turquoise, cyan, blue, darkblue, purple, red)',
    }}**/>
      <div key={genRandString(16)} className="repo-card-group-inner 2xs:[border-radius:_1.75rem] xs:[border-radius:_1.5rem] sm:[border-radius:_1.25rem] md:rounded-2xl lg:rounded-xl xl:rounded-lg backdrop-blur w-full h-full before:absolute box-border self-center align-middle flex flex-col flex-grow content-center justify-center items-center bg-slate-100/[45%] dark:bg-neutral-800/[45%] p-6 rounded-lg ease-in-out duration-300 transition-colors">
        <a key={genRandString(16)} href={link} target="_blank">
          <h1 key={genRandString(16)} className="text-xl text-center font-bold dark:text-gray-100">
            {title}{" "}
            <FaExternalLinkAlt key={genRandString(16)} className="inline align-baseline" />
          </h1>
        </a>
        <hr key={genRandString(16)} className="my-4 w-full h-[4px] border border-black bg-black dark:border-white dark:bg-white rounded-2xl transition-colors duration-300 ease-in-out" />
        <p key={genRandString(16)} className="text-ellipsis overflow-wrap">{description}</p>
        <div key={genRandString(16)} className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
          {tags && tags.map((tag) => (
            <a key={genRandString(16)} className="px-4 py-1 bg-[#388bfd26] hover:bg-[#1f6feb] font-medium text-[#6db1ff] hover:text-white duration-300 ease-in-out rounded-full text-center" target="_blank" href={`https://github.com/topics/${tag}`} title={`Topic: ${tag}`}>{tag}{/** These Are Topic Chip Components customly */}</a>
          ))}
        </div>
        <div key={genRandString(16)} className="w-full text-center">
          <GitHubButton key={genRandString(16)} href={link} data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
          {"  "}
          <GitHubButton key={genRandString(16)} href={link + "/fork"} data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork ntkme/github-buttons on GitHub">Fork</GitHubButton>
        </div>
        <h2 key={genRandString(16)} className="text-lg font-black">CID: {id}</h2>
      </div>
    </div>
  );
};

export default RepoCard;
