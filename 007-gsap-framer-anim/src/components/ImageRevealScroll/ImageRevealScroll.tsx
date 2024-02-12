"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import SplitType from "split-type";
import { useScroll, motion, useTransform } from "framer-motion";


export default function ImageRevealScroll() {
    const target = useRef(null);
	const { scrollYProgress } = useScroll({
		target: target,
		offset: ["0 1", "1.33 1"], //start:"element window", end:"element, window"
    });
   const smoothProgress = useTransform(scrollYProgress, [0,1], [0.8, 1])
	return (
		<div className=" h-screen bg-slate-400 px-20 py-16 lg:py-24 flex flex-col justify-center">
			<h1 className="pt-52 pb-24 text-center max-w-4xl mx-auto text-8xl relative m-0">Votre escapade vous appelle</h1>

			<div id="container" className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div ref={target}
                    style={{
                        scale: smoothProgress,
                        opacity: smoothProgress 
                    }}
                >
					
					<img className="box image" alt="a room with a stove and a chair in it" loading="lazy" width="6034" height="4023" srcSet="https://images.unsplash.com/photo-1631630259742-c0f0b17c6c10?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzc0NjN8MHwxfHNlYXJjaHw3fHxjYWJpbnxlbnwwfHx8fDE3MDY2MTcwOTJ8MA&amp;ixlib=rb-4.0.3&amp;q=85%3Fauto%3Dcompress%2Cformat&amp;fit=max&amp;w=3840 1x" src="https://images.unsplash.com/photo-1631630259742-c0f0b17c6c10?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzc0NjN8MHwxfHNlYXJjaHw3fHxjYWJpbnxlbnwwfHx8fDE3MDY2MTcwOTJ8MA&amp;ixlib=rb-4.0.3&amp;q=85%3Fauto%3Dcompress%2Cformat&amp;fit=max&amp;w=3840" />
				</motion.div>
				<p className="animation max-w-2xl mx-auto py-8 text-xl md:text-2xl lg:text-3xl font-extralight text-center ">Rendez-vous au rez-de-chaussée de notre ferme traditionnelle de la Vallouise située entre la chapelle St Sébastien et le four banal.</p>
			</div>
		</div>
	);
}
