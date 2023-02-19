import React from "react";
import { Flipper } from "react-flip-toolkit";
import RepoCard from "./RepoCard";

export default function Repositories({ repos }) {
    return (
        <Flipper flipKey={`true`} spring={"wobble"}>
            <div className="grid grid-cols-3 2xs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {repos.map((repo) => (
                    <RepoCard key={`${Math.random() * (1000-9999) + 9999}`} project={repo} />
                ))}
            </div>
        </Flipper>
    );
};
