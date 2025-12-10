'use client'

import { Linkedin, Github, Instagram, Download } from "lucide-react"
import Image from 'next/image'
import VSCodeStatusWidget from "./vscodestatus"
// import RevolvingText from "./revolvingText"
import { easeIn, motion } from 'framer-motion';

export default function Hero(){

    return(
        <>
        <div className="flex flex-col px-6 md:px-44 py-12 gap-20 ">

            <div className="flex flex-col gap-8 items-start">

                <motion.div 
                initial={{opacity:0, y: -20, filter: "blur(10px)"}}
                whileInView={{opacity:1, y:0, filter: "blur(0px)"}}
                transition={{duration: 0.5, ease: easeIn}}
                className="rounded-full relative w-48 h-48 ">
                    <Image 
                    src="/Profile.png"
                    alt=""
                    fill
                    className="object-cover rounded-full p-1"
                    />
                <div className="absolute bottom-1 right-8 z-10">   
                    <VSCodeStatusWidget />
                </div>
                </motion.div>
                
                
                {/* <motion.div 
                initial={{opacity:0, y: -20, filter: "blur(10px)"}}
                whileInView={{opacity:1, y:0, filter: "blur(0px)"}}
                transition={{duration: 0.7, ease: easeIn}}
                className="flex flex-col gap-2 py-8">
                    {/* <div className="font-primary text-3xl font-medium text-stone-800 dark:text-stone-300">
                        Nikhil Dhanda
                        
                    </div>
                    
                    <div className="font-primary text-stone-500">
                        <RevolvingText/>
                    </div> */}
                    

                {/* </motion.div> */} 

            </div>

            <div className="flex flex-col items-start gap-8 ">

            <motion.div 
                initial={{opacity:0, y: -20, filter: "blur(10px)"}}
                whileInView={{opacity:1, y:0, filter: "blur(0px)"}}
                transition={{duration: 0.7, ease: easeIn}}
            className="font-secondary tracking-wide text-stone-800 dark:text-stone-300" > 
               <span className="text-4xl font-primary font-semibold dark:text-stone-300 text-stone-800"> Hey! I am Nikhil - <span className="text-stone-500">A Full Stack Developer</span> </span> <br/> -- a design engineer focused on creating high performance, user centric, engaging web applications. <br />
                Having a experience of over 2 years, and catering to a industry that I am passionate about, I like <span className="font-bold">building flows that capture audience</span> and look and feel highly <span className="font-bold">professional</span>.<br /> 
                Let’s <span className="font-bold">connect and collaborate</span>.
            </motion.div>
            <div className="flex flex-row mt-4 gap-2">
                        <a 
                        className="p-3 text-stone-800 dark:text-stone-300 border border-neutral-400 rounded-full hover:shadow-[0px_3px_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0px_3px_25px_rgba(255,255,255,0.2)] transition-all duration-150 ease-in"
                        href="https://www.linkedin.com/in/nikkhildhanda/"
                        target="_blank" rel="noopener noreferrer"
                        >
                            <Linkedin />
                        </a>
                        <a 
                        className="p-3 text-stone-800 dark:text-stone-300 border border-neutral-400 rounded-full hover:shadow-[0px_3px_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0px_3px_25px_rgba(255,255,255,0.2)] transition-all duration-150 ease-in"
                        href="https://github.com/nikhildhanda04"
                        target="_blank" rel="noopener noreferrer"
                        >
                            <Github />
                        </a>
                        <a
                        className="py-3 px-4 text-stone-800 dark:text-stone-300 border border-neutral-400 rounded-full hover:shadow-[0px_3px_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0px_3px_25px_rgba(255,255,255,0.2)] transition-all duration-150 ease-in flex items-center justify-center"
                        href="https://x.com/NikkhilDhanda"
                        target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                        >
                        <X />
                        </a>
                        <a 
                        className="p-3 text-stone-800 dark:text-stone-300 border border-neutral-400 rounded-full hover:shadow-[0px_3px_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0px_3px_25px_rgba(255,255,255,0.2)] transition-all duration-150 ease-in"
                        href="https://instagram.com/nikhildhanda005"
                        target="_blank" rel="noopener noreferrer"
                        >
                            <Instagram />
                        </a>
                        
                    </div>

            <motion.a
                initial={{opacity:0, y: -20, filter: "blur(10px)"}}
                whileInView={{opacity:1, y:0, filter: "blur(0px)"}}
                transition={{duration: 0.7, ease: easeIn}} 
            href="/Nikhil_Dhanda_Resume_FullStack_Dev.pdf"
            download
            className="px-7 py-4 flex flex-row gap-3 bg-stone-800 dark:bg-stone-300 text-light dark:text-dark rounded-xl hover:shadow-[0px_6px_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0px_3px_25px_rgba(255,255,255,0.2)] transition-all duration-200 ease-in">
                Resume <Download />
            </motion.a>

            </div>
        </div>
        </>
    )
}

const X = () => {
    return(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter-x w-4 h-4" viewBox="0 0 16 16" id="Twitter-X--Streamline-Bootstrap" height="16" width="16" aria-hidden="true">
<desc>
    Twitter X Streamline Icon: https://streamlinehq.com
  </desc>
    <path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z" strokeWidth="1"></path>
</svg>
        </>
    )
}