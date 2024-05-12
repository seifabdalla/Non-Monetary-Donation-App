import React from 'react';
import { motion } from 'framer-motion';
import {
    FigmaLogoIcon,
    SketchLogoIcon,
    TwitterLogoIcon,
    GitHubLogoIcon,
    VercelLogoIcon,
    NotionLogoIcon,
    DiscordLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";


const slides = [
    {
        icon: <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Resala.png/623px-Resala.png"} alt={"Resala"} className={"w-28 h-auto"}/>
    },
    {
        icon: <img src={"https://upload.wikimedia.org/wikipedia/ar/0/0a/Misr_El-Kheir.jpg"} alt={"Misr al keir"} className={"w-28 h-auto"}/>
    },
    {
        icon: <img src={"https://upload.wikimedia.org/wikipedia/ar/thumb/9/9a/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89_57357.png/280px-%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89_57357.png"} alt={"57357"} className={"w-28 h-auto"}/>
    },
    {
        icon: <img src={"https://upload.wikimedia.org/wikipedia/ar/f/f0/Dar-alorman.png"} alt={"Al Orman"} className={"w-28 h-auto"}/>
    },
];



const TrustedBySlider = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <>
            <h2 className={"text-center text-2xl font-semibold my-5"}>Trusted By</h2>
            <div className="relative h-full w-full overflow-hidden py-5 bg-Turquoise-Slate mx-auto mb-0">
                <div
                    className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-teal-50 before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-teal-50 after:to-transparent after:filter after:blur-3"></div>
                <motion.div
                    className="flex"
                    animate={{
                        x: ['0%', '-100%'],
                        transition: {
                            ease: 'linear',
                            duration: 15,
                            repeat: Infinity,
                        }
                    }}
                >
                    {duplicatedSlides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0" style={{width: `${100 / slides.length}%`}}>
                            <div className="flex items-center justify-center h-full">
                                {slide.icon}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </>

    );
};

export default TrustedBySlider;