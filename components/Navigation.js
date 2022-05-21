import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navigation = () => {
    return (
        <div className="transition-colors sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black rounded">
            <div className="transition-colors container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx uppercase text dark:text-white"}
                    >
                        PixeledLuaWriter
                    </a>
                </Link>
                <ThemeSwitch />
            </div>
        </div>
    );
}

export default Navigation