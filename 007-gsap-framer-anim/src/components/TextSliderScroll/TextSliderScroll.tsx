"use client";
import Image from "next/image";
import "./style.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Home({directionProp, textProp}) {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	let xPercent = 0;
	let direction = directionProp; 

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: 0.25,
				start: 0,
				end: window.innerHeight,
				onUpdate: (e) => (direction = e.direction * directionProp),
			},
			x: "-500px",
		});
		requestAnimationFrame(animate);
	}, []);

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}
		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		requestAnimationFrame(animate);
		xPercent += 0.1 * direction;
	};

	return (
		<main id="main" className="  h-[25vh]">
			<div id="slider-container">
				<div ref={slider} id="slider">
					<p ref={firstText}>{textProp}</p>
					<p ref={secondText}>{textProp}</p>
				</div>	
			</div>
		</main>
	);
}
