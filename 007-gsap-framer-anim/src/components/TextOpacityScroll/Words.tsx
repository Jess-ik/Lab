"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const Word = ({ children, range, progress }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
        <span className="mr-3 mb-3 relative">
            <span className="absolute opacity-[0.1]">{ children}</span>
			<motion.span style={{ opacity }}>
				{children}
			</motion.span>
		</span>
	);
};

export default function Paragraph({ children }) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start 0.9", "start 0.25"], //start:"element window", end:"element, window"
	});

	//split paragraph into words
	const words = children.split(" ");

	return (
		<p ref={container} className="text-[50px] max-w-7xl pl-10 flex flex-wrap">
			{words.map((word, i) => {
				const start = i / words.length;
				const end = start + 1 / words.length;
				return (
					<Word key={i} range={[start, end]} progress={scrollYProgress}>
						{word}
					</Word>
				);
			})}
		</p>
	);
}
