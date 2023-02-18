import React from "react";
import { Flipper } from "react-flip-toolkit";
import AnimatedGrid from "./AnimatedGrid";
import RepoCard from "./RepoCard";

export default function Repositories({ repos }) {
    return (
        <Flipper flipKey={`true`} spring={"wobble"}>
            <div className="grid grid-cols-3 grid-rows-1 gap-4">
                {repos.map((repo) => (
                    <RepoCard key={`${Math.random() * (1000-9999) + 9999}`} project={repo} />
                ))}
            </div>
        </Flipper>
    );
};
