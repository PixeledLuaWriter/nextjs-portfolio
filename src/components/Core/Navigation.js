"use client"
import Link from "next/link";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import HamburgerMenu from "./HamburgerMenu"
import Modal from "../Other/Modal"

const Navigation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleClosing = () => {
        setIsModalOpen(false);
    }
    // use hamburger menu on nav bar and make a rounded menu come up with a list of links but leave current things in
    return (
        <section className="transition-all ease-in-out duration-300 w-full h-full sticky top-0 bg-white/50 p-6 m-0 dark:bg-black/50 rounded-lg backdrop-blur-md justify-self-center">
            <div className="transition-colors p-4 flex flex-row row-auto justify-between justify-self-center">
                <Link href="/" className="font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx text dark:text-white">
                        PLW
                </Link>
                <HamburgerMenu toggled={isModalOpen} toggle={setIsModalOpen} />
                <ThemeSwitch />
            </div>
            {isModalOpen && (
                    <Modal isVisible={isModalOpen} heading="Navigation" onClickCloseBtn={handleClosing} onPressEscape={handleClosing}>
                        <div className="flex flex-row items-center gap-4 p-4">
                        <Link href="/" className="font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx uppercase text dark:text-white"
                            onClick={handleClosing}
                            >
                                    Home
                            </Link>
                            <Link href="/about"
                            className={"font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx uppercase text dark:text-white"}
                            onClick={handleClosing}
                            >
                                    About
                            </Link>
                            <Link href="/github/repository"
                            className={"font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx uppercase text dark:text-white"}
                            onClick={handleClosing}
                            >
                                Repositories
                            </Link>
                            <Link href='/hobbies'
                            className={"font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx uppercase text dark:text-white"}
                            onClick={handleClosing}
                            >
                                Hobbies
                            </Link>
                            <Link href='/wallpapers'
                            className={"font-medium tracking-wider duration-150 text-gray-900 hover:text-sky-500 hover:text-shadow-smx2 hover:dark:text-red-700 hover:dark:text-shadow-smx uppercase text dark:text-white"}
                            onClick={handleClosing}
                            >
                                Wallpapers
                            </Link>
                        </div>
                     </Modal>
                )}
        </section>
    );
}

export default Navigation
