"use client";
import SVGPathScroll from "@/components/SVGPathScroll/SVGPathScroll";
import ImageRevealScroll from "../components/ImageRevealScroll/ImageRevealScroll";
import TextOpacityScroll from "../components/TextOpacityScroll/TextOpacityScroll";
import TextSliderScroll from "../components/TextSliderScroll/TextSliderScroll";
import HorizontalGalleryScroll from "../components/HorizontalGalleryScroll";
import { motion } from "framer-motion";

const anim = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: "easeInOut",
			delay: 0.08,
		},
	},
};

export default function Home() {
	return (
		<div className="bg-[#8AA398]">
			<section className="bg-[#f5f4f3] h-screen p-6 rounded-b-xl">
				<motion.div variants={anim} initial="initial" whileInView="animate" className="absolute bottom-0 grid grid-row py-6 pb-44">
					<div className="py-12">Logo</div>
					<div className="max-w-2xl text-3xl">
						<p>Bristol based digital designer crafting engaging, human-focused digital experiences for a range of forward-thinking brands.</p>
					</div>
				</motion.div>
			</section>
			<TextSliderScroll directionProp={-1} textProp="Web Developer - Creative Designer - " />
			<TextSliderScroll directionProp={1} textProp="Creative Designer - Passionate Crafter - " />
			<TextOpacityScroll />
      <ImageRevealScroll />
      <HorizontalGalleryScroll />
      <SVGPathScroll />
		</div>
	);
}
