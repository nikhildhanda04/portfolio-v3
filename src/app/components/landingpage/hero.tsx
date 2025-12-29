'use client'

import { Linkedin, Github, Instagram } from "lucide-react"
import Image from 'next/image'
import VSCodeStatusWidget from "./vscodestatus"
// import RevolvingText from "./revolvingText"
import { easeIn, motion } from 'framer-motion';

export default function Hero(){

    return(
        <div className=" relative flex flex-col px-6 md:px-44 py-12 gap-12">
            
            {/* Header Block: Profile + Name/Info */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12">
                
                {/* Profile Picture */}
                <motion.div 
                    initial={{opacity:0, scale: 0.9, filter: "blur(10px)"}}
                    whileInView={{opacity:1, scale:1, filter: "blur(0px)"}}
                    transition={{duration: 0.5, ease: easeIn}}
                    className="relative w-48 h-48 flex-shrink-0"
                >
                    <div className="w-full h-full rounded-full border-[6px] border-stone-800 dark:border-stone-300 overflow-hidden relative">
                        <Image 
                            src="/Profile.png"
                            alt="Nikhil Dhanda"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute bottom-1 right-2 z-10">   
                        <VSCodeStatusWidget />
                    </div>
                </motion.div>

                {/* Name and Info */}
                <div className="flex flex-col items-center md:items-start flex-grow gap-4">
                    <motion.div 
                        initial={{opacity:0, x: 20}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration: 0.5}}
                        className="flex items-center gap-3"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold font-primary text-stone-800 dark:text-stone-300">
                            Nikhil Dhanda
                        </h1>
                        <VerifiedBadge />
                    </motion.div>

                    <motion.div 
                        initial={{opacity:0, x: 20}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="flex flex-wrap items-center justify-center md:justify-start gap-3 font-secondary text-sm text-stone-500 uppercase tracking-tighter"
                    >
                        <span>20</span>
                        <div className="w-1 h-1 bg-stone-500 rounded-full" />
                        <span>Full Stack Developer</span>
                        <div className="w-1 h-1 bg-stone-500 rounded-full" />
                        <span>Engineer</span>
                        <div className="w-1 h-1 bg-stone-500 rounded-full" />
                        <span>Builder</span>
                    </motion.div>

                    {/* Socials & Resume */}
                    <div className="flex items-center gap-4 mt-2">
                        <div className="flex gap-4">
                             <a href="mailto:nikhildhanda005@gmail.com" className="text-stone-800 dark:text-stone-300 hover:opacity-70">
                                <GmailIcon />
                            </a>
                            <a href="https://github.com/nikhildhanda04" target="_blank" rel="noopener noreferrer" className="text-stone-800 dark:text-stone-300 hover:opacity-70">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/nikkhildhanda/" target="_blank" rel="noopener noreferrer" className="text-stone-800 dark:text-stone-300 hover:opacity-70">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com/nikhildhanda005" target="_blank" rel="noopener noreferrer" className="text-stone-800 dark:text-stone-300 hover:opacity-70">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                        
                        <a 
                            href="/Nikhil_Dhanda_Resume_FullStack_Dev.pdf"
                            download
                            className="ml-4 px-4 py-1.5 border border-stone-800 dark:border-stone-300 text-xs font-secondary dark:text-stone-300 uppercase tracking-widest hover:bg-stone-800 hover:text-white dark:hover:bg-stone-300 dark:hover:text-black transition-all"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <motion.div 
                initial={{opacity:0, y: 20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 0.5, delay: 0.3}}
                className="flex flex-col gap-4 mt-4"
            >
                <h2 className="text-2xl font-bold font-primary text-stone-800 dark:text-stone-300 uppercase tracking-tight">About</h2>
                <p className="max-w-3xl font-secondary mb-10 tracking-tight text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                   a design engineer focused on creating high performance, user centric, engaging web applications.
                    Having a experience of over 2 years, and catering to a industry that I am passionate about, I like building flows that capture audience and look and feel highly professional.
                    Let’s connect and collaborate.
                </p>
            </motion.div>

        </div>
    )
}

const VerifiedBadge = () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-500 fill-current">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
)

const GmailIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
)