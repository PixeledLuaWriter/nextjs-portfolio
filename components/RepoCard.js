import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubButton from "react-github-btn";

const RepoCard = ({ project: { title, description, tags, link } }) => {
  return (
    <div className="group w-full sm:w-1/2 m-[0.125rem] mx-auto p-6 rounded-xl border-[0.5px] border-slate-900 bg-gradient-to-br from-fuchsia-800 via-amber-700 to-neutral-900 shadow-[8px_6px_6px_0px] shadow-gray-500">
      <a href={link} target="_blank">
        <h1 className="text-xl text-center font-bold dark:text-gray-100">
          {title}{" "}
          <FaExternalLinkAlt className="inline align-baseline" />
        </h1>
      </a>
      <hr className="my-4" />
      <p className="">{description}</p>
      <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
        {tags.map((tag) => (
          <div className="px-4 py-1 border-2 rounded-[0.325em]">{tag}</div>
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