import React from "react";
import RepoCard from "./RepoCard";

export default function Repositories({ repos }) {
    return (
        <div>
            <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">My projects</h1>
            {repos.map((repo) => (
                <RepoCard key={`${Math.random() * (1000-9999) + 9999}`} project={repo} />
            ))}
        </div>
    );
};