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
        <div className="transition-colors block sticky top-0 z-20 bg-white p-6 m-0 dark:bg-black bg-opacity-50 dark:bg-opacity-50 rounded-lg backdrop-blur-md justify-self-center">
            <div className="transition-colors p-4 flex flex-row row-auto justify-between justify-self-center">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx uppercase text dark:text-white"}
                    >
                        PLW
                    </a>
                </Link>
                <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
                <div className="" style={{
                    "display": isOpen ? "flex" : "none",
                    "top": "8rem",
                    "right": "0rem",
                    "left": "0rem",
                    "bottom": "0rem",
                    "transition": "all 0.3s ease-in-out",
                    //"backdropFilter": "blur(10px)",
                    "transform": isOpen ? "translateX(0)" : "translateX(100%)",
                    "borderRadius": "0.5rem 0.5rem",
                    "position": "absolute",
                    "justifyItems": "center",
                }}>
                    <Paper className="transition-all p-6 m-auto w-[50%]  ease-in-out bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 rounded-lg shadow-md">
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
                        </div>
                    </Paper>
                </div>
                <ThemeSwitch />
            </div>
        </div>
    );
}

export default Navigation
