import React from "react";
import { Flipper } from "react-flip-toolkit";
import { genRandString } from "../data/config";
import RepoCard from "./RepoCard";

export default function Repositories({ repos }) {
    return (
        <Flipper key={genRandString(16)} flipKey={`true`} spring={"wobble"}>
            <div key={genRandString(16)} className="repo-body grid grid-cols-3 2xs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {repos.map((repo) => (
                    <RepoCard project={repo} />
                ))}
            </div>
        </Flipper>
    );
};
