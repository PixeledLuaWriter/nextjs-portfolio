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
        <div className="transition-colors sticky top-0 z-20 bg-white p-6 m-0 dark:bg-black bg-opacity-50 dark:bg-opacity-50 rounded backdrop-blur-md">
            <div className="transition-colors container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx uppercase text dark:text-white"}
                    >
                        PixeledLuaWriter
                    </a>
                </Link>
                <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
                <div className="" style={{
                    "display": isOpen ? "block" : "none",
                    "zIndex": "1",
                    "position": "absolute",
                    "top": "5rem",
                    "right": "0",
                    "left": "0",
                    "bottom": "0",
                    "backgroundColor": "rgba(0,0,0,0.5)",
                    "backdropFilter": "blur(10px)",
                    "transition": "all 0.3s ease-in-out",
                    "transform": isOpen ? "translateX(0)" : "translateX(100%)",
                    "borderRadius": "0 0 0.5rem 0.5rem",
                }}>
                    <Paper className="transition-colors duration-150 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 rounded-lg shadow-md">
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
                        <Link href='/'>
                            <a
                                className={"font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx uppercase text dark:text-white"}
                                onClick={handleClosing}
                            >
                                Hobbies [coming soon]
                            </a>
                        </Link>
                    </Paper>
                </div>
                <ThemeSwitch />
            </div>
        </div>
    );
}

export default Navigation
