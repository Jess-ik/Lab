"use client";
import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";

const Paragraph = ({ children }) => {
	const element = useRef(null);
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ["start 0.9", "start 0.25"], //start:"element window", end:"element, window"
	});
	return (
		<motion.p ref={element} style={{ opacity: scrollYProgress }} className="text-[50px] max-w-7xl p-10">
			{children}
		</motion.p>
	);
};

export default Paragraph;
