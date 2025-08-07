import { Linkedin, Github, Instagram, Download } from "lucide-react"
import Image from 'next/image'
import RevolvingText from "./revolvingText"

export default function Hero(){

    return(
        <>
        <div className="flex flex-col px-6 md:px-32 py-12 mt-20 gap-20 border-t border-b border-stone-300">

            <div className="flex flex-row gap-8 items-end">

                <div className="rounded-full relative w-64 h-64 border border-stone-300">
                    <Image 
                    src="/Profile.png"
                    alt=""
                    fill
                    className="object-cover rounded-full p-1"
                    />

                </div>
                
                <div className="flex flex-col gap-2 py-8">
                    <div className="font-primary text-3xl font-medium text-stone-800 dark:text-stone-300">
                        Nikhil Dhanda
                    </div>
                    <div className="font-primary text-stone-500">
                        <RevolvingText/>
                    </div>
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
                        className="p-3 text-stone-800 dark:text-stone-300 border border-neutral-400 rounded-full hover:shadow-[0px_3px_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0px_3px_25px_rgba(255,255,255,0.2)] transition-all duration-150 ease-in"
                        href="https://instagram.com/nikhildhanda005"
                        target="_blank" rel="noopener noreferrer"
                        >
                            <Instagram />
                        </a>
                    </div>

                </div>

            </div>

            <div className="flex flex-col items-start gap-8 ">

            <div className="font-secondary tracking-wide text-stone-800 dark:text-stone-300" > 
                Hey! This is <span className="font-bold">Nikhil Dhanda</span> -- a design engineer focused on creating high performance, user centric, engaging web applications. <br />
                Having a experience of over a year, and catering to a industry that I am passionate about, I like <span className="font-bold">building flows that capture audience</span> and look and feel highly <span className="font-bold">professional</span>.<br /> 
                Apart from this I dont do anything, majority of my day goes by learning and doing, cause that is what I love. <br />
                Let’s <span className="font-bold">connect and collaborate</span>.
            </div>

            <a 
            href="/Nikhil_Dhanda_Resume.pdf"
            download
            className="px-7 py-4 flex flex-row gap-3 bg-stone-800 dark:bg-stone-300 text-light dark:text-dark rounded-xl hover:shadow-[0px_6px_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0px_3px_25px_rgba(255,255,255,0.2)] transition-all duration-200 ease-in">
                Resume <Download />
            </a>

            </div>
        </div>
        </>
    )
}