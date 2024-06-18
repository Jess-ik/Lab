import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Graphic Design",
        src: "salar_de_atacama.jpg"
    },
    {
        title: "Front end Development",
        src: "valle_de_la_muerte.jpeg"
    },
    {
        title: "Crafts",
        src: "miscani_lake.jpeg"
    },

]

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
            markers: true,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>Creative developer with design background for over 7 years. Crafting inspiring digital experiences that combine creativity and functionality.</p>
               
                    <p>The combination of my passion for design, web development and craft leads me to produce both elegant and functional creations.</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
