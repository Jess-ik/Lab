'use client'
import React, { useEffect } from "react";

export default function SVGPathScroll() {
    useEffect(() => {
        const svg = document.querySelector(".pathSVG");
        const container = document.querySelector("#container");
        const path = svg?.querySelector("path");

        const scroll = () => {
            const distance = window.scrollY;
            const totalDistance = svg.clientHeight - window.innerHeight
            const percentage = distance / totalDistance
            const pathLength = path?.getTotalLength();
            
            if (path && pathLength !== undefined) {
                path.style.strokeDasharray = `${pathLength}`;
                path.style.strokeDashoffset = `${distance * (1 - percentage)}`;
            }
        };

        scroll();
        window.addEventListener("scroll", scroll);

        return () => {
            window.removeEventListener("scroll", scroll);
        };
    }, []);

    return (
        <div id="container" className="bg-white h-screen relative py-12">
            <div className="grid grid-row h-screen px-32">
                <div className="grid grid-col justify-start items-center">
                    <section className="max-w-md text-3xl border font-thin">
                        <p className="pb-6">Helping brands to stand out in the digital era. Together we will set the new status quo</p>
                        <button>Learn more</button>
                    </section>
                </div>
                <div className="grid grid-col justify-end items-center">
                    <section className="max-w-md text-3xl border font-thin">
                        <p className="pb-6">Helping brands to stand out in the digital era. Together we will set the new status quo</p>
                        <button>Learn more</button>
                    </section>
                </div>
            </div>
            <svg className="pathSVG absolute z-1 top-0 w-screen h-screen py-32" width="385" height="683" viewBox="0 0 385 683" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M209 6.5C228.833 33.8333 276.9 103.1 288.5 157.5C303 225.5 312.5 289.5 288.5 345C264.5 400.5 229 438 181 457.5C152.742 468.979 103 474.5 49.4996 438C21.65 419 1.99945 365 6.99945 339C11.9994 313 24.9987 281 54.9994 263C85 245 166.499 243 181 325.5C187.415 362 178.999 393.5 166.499 438C153.999 482.5 129.499 624.5 222.499 665C315.499 705.5 382.5 628 378 570" stroke="black" stroke-width="12" stroke-linecap="round" />
            </svg>
        </div>
    );
}
