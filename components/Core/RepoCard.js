import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubButton from "react-github-btn";
import { genRandString } from "../../data/config";

const RepoCard = ({ project: { title, description, tags, link, id } }) => {
  return (
    <div key={genRandString(Math.floor(Math.random() * (21 - 12) + 12))} className="repo-card-group 2xs:[border-radius:_2rem] xs:[border-radius:_1.85rem] sm:[border-radius:_1.6rem] md:[border-radius:_1.35rem] lg:[border-radius:_1.1rem] xl:rounded-xl flex flex-col flex-grow content-center justify-center items-center w-full h-full p-1 rounded-xl [background:_linear-gradient(to_bottom_right,_gold,_coral,_goldenrod,_chartreuse)] dark:[background:_linear-gradient(to_bottom_right,_darkorange,_magenta,_rebeccapurple)] border-none shadow-[8px_6px_6px_0px] transition-all ease-in-out duration-300 shadow-gray-500" /**style={{
      "background": 'linear-gradient(45deg, red, orange, yellow, green, turquoise, cyan, blue, darkblue, purple, red)',
    }}**/>
      <div key={genRandString(Math.floor(Math.random() * (21 - 12) + 12))} className="repo-card-group-inner 2xs:[border-radius:_1.85rem] xs:[border-radius:_1.6rem] sm:[border-radius:_1.35rem] md:[border-radius:_1.1rem] lg:rounded-xl xl:rounded-lg backdrop-blur w-full h-full before:absolute box-border self-center align-middle flex flex-col flex-grow content-center justify-center items-center bg-slate-100/[45%] dark:bg-neutral-800/[45%] p-4 rounded-lg ease-in-out duration-300 transition-colors">
        <div key={genRandString(Math.floor(Math.random() * (21 - 12) + 12))} className="repo-card-group-inner-body flex flex-col flex-grow content-center justify-center items-center w-full h-full p-4 rounded-xl bg-slate-100/60 dark:bg-neutral-800/60 transition-colors ease-in-out duration-300">
          <a key={genRandString(Math.floor(Math.random() * (21 - 12) + 12))} href={link} target="_blank">
            <h1 key={genRandString(Math.floor(Math.random() * (21 - 12) + 12))} className="text-xl text-center font-bold dark:text-gray-100 transition-colors ease-in-out duration-300">
              {title}{" "}
              <FaExternalLinkAlt key={genRandString(Math.floor(Math.random() * (21 - 12) + 12))} className="inline align-baseline" />
            </h1>
          </a>
          <hr key={genRandString(Math.floor(Math.random() * (21 - 12) + 12))} className="my-4 w-full h-[1px] border border-black bg-black dark:border-white dark:bg-white rounded-2xl transition-colors duration-300 ease-in-out" />
          <p key={genRandString(Math.floor(Math.random() * (21 - 12) + 12))} className="text-ellipsis overflow-wrap transition-colors duration-300 ease-in-out">{description}</p>
          <div key={genRandString(Math.floor(Math.random() * (21 - 12) + 12))} className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
            {tags && tags.map((tag) => (
              <a key={genRandString(Math.floor(Math.random() * (21 - 12) + 12))} className="px-4 py-1 bg-[#f72e2e26] hover:bg-[#cf3e3e] text-[#fc5c5c] hover:text-black dark:bg-[#388bfd26] dark:hover:bg-[#1f6feb] font-medium dark:text-[#6db1ff] dark:hover:text-white duration-300 ease-in-out rounded-full text-center" target="_blank" href={`https://github.com/topics/${tag}`} title={`Topic: ${tag}`}>{tag}{/** These Are Topic Chip Components customly */}</a>
            ))}
          </div>
          <div key={genRandString(Math.floor(Math.random() * (21 - 12) + 12))} className="w-full text-center">
            <GitHubButton key={genRandString(Math.floor(Math.random() * (21 - 12) + 12))} href={link} data-color-scheme /*"no-preference: dark; light: light; dark: dark;"*/ data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
            {"  "}
            <GitHubButton key={genRandString(Math.floor(Math.random() * (21 - 12) + 12))} href={link + "/fork"} data-color-scheme /*"no-preference: dark; light: light; dark: dark;"*/ data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork ntkme/github-buttons on GitHub">Fork</GitHubButton>
          </div>
          <h2 key={genRandString(Math.floor(Math.random() * (21 - 12) + 12))} className="text-lg font-black">CID: {id}</h2>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
