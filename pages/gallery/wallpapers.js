import Image from "next/image";
import React from "react";
import grey_matter from "../../public/assets/wallpapers/grey matter.png"
import red_matter from "../../public/assets/wallpapers/red matter.png"
import light_matter from "../../public/assets/wallpapers/light matter.png"
import pink_matter from "../../public/assets/wallpapers/pink matter.png"
import dark_matter from "../../public/assets/wallpapers/dark matter.png"

export default function Wallpapers() {
    return (
        <div className="">
            <h2 className="text-center text-xl font-bold">Welcome To My Wallpaper gallery</h2>
            <p className="text-center">I hope you'll enjoy these wallpapers i've created through blender</p>
            <div className="image-holder p-4">
                <div className="p-4 m-2">
                    <h4 className="p-3 text-4xl text-center font-black">Grey Matter</h4>
                    <a href={grey_matter.src} target="_blank">
                        <Image
                            src={grey_matter}
                            alt={"grey matter"}
                            placeholder={"blur"}
                            priority={true}
                            className="rounded-lg p-4"
                            width={1920}
                            height={1080}
                            quality={100}
                        />
                    </a>
                </div>
                <div className="p-4 m-2">
                    <h4 className="p-3 text-4xl text-center font-black">Red Matter</h4>
                    <a href={red_matter.src} target="_blank">
                        <Image
                            src={red_matter}
                            alt={"red matter"}
                            placeholder={"blur"}
                            priority={true}
                            className="rounded-lg p-4"
                            width={1920}
                            height={1080}
                            quality={100}
                        />
                    </a>
                </div>
                <div className="p-4 m-2">
                    <h4 className="p-3 text-4xl text-center font-black">Light Matter</h4>
                    <a href={light_matter.src} target="_blank">
                        <Image
                            src={light_matter}
                            alt={"light matter"}
                            placeholder={"blur"}
                            priority={true}
                            className="rounded-lg p-4"
                            width={1920}
                            height={1080}
                            quality={100}
                        />
                    </a>
                </div>
                <div className="p-4 m-2">
                    <h4 className="p-3 text-4xl text-center font-black">Pink Matter</h4>
                    <a href={pink_matter.src} target="_blank">
                        <Image
                            src={pink_matter}
                            alt={"pink matter"}
                            placeholder={"blur"}
                            priority={true}
                            className="rounded-lg p-4"
                            width={1920}
                            height={1080}
                            quality={100}
                        />
                    </a>
                </div>
                <div className="p-4 m-2">
                    <h4 className="p-3 text-4xl text-center font-black">Dark Matter</h4>
                    <a href={dark_matter.src} target="_blank">
                        <Image
                            src={dark_matter}
                            alt={"dark matter"}
                            placeholder={"blur"}
                            priority={true}
                            className="rounded-lg p-4"
                            width={1920}
                            height={1080}
                            quality={100}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
