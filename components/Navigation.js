import Link from "next/link";
import { useState } from "react";
import Paper from "@mui/material/Paper"
import ThemeSwitch from "./ThemeSwitch";
import HamburgerMenu from "./HamburgerMenu"

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClosing = () => {
        setIsOpen(false);
    }
    // use hamburger menu on nav bar and make a rounded menu come up with a list of links but leave current things in
    return (
        <div className="transition-all ease-in-out duration-300 w-full h-full sticky top-0 z-10 bg-white p-6 m-0 dark:bg-black bg-opacity-50 dark:bg-opacity-50 rounded-lg backdrop-blur-md justify-self-center">
            <div className="transition-colors p-4 flex flex-row row-auto justify-between justify-self-center">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx text dark:text-white"}
                    >
                        PLW
                    </a>
                </Link>
                <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
                <ThemeSwitch />
            </div>
            {isOpen && (
                <div className={`p-2 z-20 bg-transparent ${isOpen ? "flex" : "hidden"} justify-center items-center sticky`} >
                    <div className="transition-all p-6 m-auto ease-in-out duration-300 bg-white dark:bg-black rounded-lg shadow-md">
                        <div className="bg-transparent flex flex-col antialiased items-center">
                            <Link href="/">
                                <a
                                    className={"font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx uppercase text dark:text-white"}
                                    onClick={handleClosing}
                                >
                                                    Home
                                </a>
                            </Link>
                            <Link href="/about">
                                <a
                                    className={"font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx uppercase text dark:text-white"}
                                    onClick={handleClosing}
                                >
                                                    About
                                </a>
                            </Link>
                            <Link href="/github/repository">
                                <a
                                    className={"font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx uppercase text dark:text-white"}
                                    onClick={handleClosing}
                                >
                                                    Repositories
                                </a>
                            </Link>
                            <Link href='/hobbies'>
                                <a
                                    className={"font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx uppercase text dark:text-white"}
                                    onClick={handleClosing}
                                >
                                                    Hobbies
                                </a>
                            </Link>
                            <Link href='/gallery/wallpapers'>
                                <a
                                    className={"font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx uppercase text dark:text-white"}
                                    onClick={handleClosing}
                                >
                                                    Wallpapers
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>                
            )}
        </div>
    );
}

export default Navigation
