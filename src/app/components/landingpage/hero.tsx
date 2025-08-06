import { Linkedin, Github, Instagram, Download } from "lucide-react"
import Image from 'next/image'

export default function Hero(){
    return(
        <>
        <div className="flex flex-col px-32 gap-20">

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
                    <div className="font-primary text-3xl font-medium text-stone-800">
                        Nikhil Dhanda
                    </div>
                    <div className="font-primary text-stone-500">
                        Design Engineer
                    </div>
                    <div className="flex flex-row mt-4 gap-2">
                        <a 
                        className="p-3 border border-neutral-400 rounded-full hover:shadow-[0px_3px_15px_rgba(0,0,0,0.2)] transition-all duration-150 ease-in"
                        href="">
                            <Linkedin />
                        </a>
                        <a 
                        className="p-3 border border-neutral-400 rounded-full hover:shadow-[0px_3px_15px_rgba(0,0,0,0.2)] transition-all duration-150 ease-in"
                        href="">
                            <Github />
                        </a>
                        <a 
                        className="p-3 border border-neutral-400 rounded-full hover:shadow-[0px_3px_15px_rgba(0,0,0,0.2)] transition-all duration-150 ease-in"
                        href="">
                            <Instagram />
                        </a>
                    </div>

                </div>

            </div>

            <div className="flex flex-col items-start gap-8">

            <div className="font-secondary tracking-wide" > 
                Hey! This is Nikhil Dhanda -- a design engineer focused on creating high performance, user centric, engaging web applications. <br />
                Having a experience of over a year, and catering to a industry that I am passionate about, I like building flows that capture audience and look and feel highly professional.<br /> 
                Apart from this I dont do anything, majority of my day goes by learning and doing, cause that is what I love. <br />
                Let’s connect and collaborate.
            </div>

            <a 
            href=""
            download
            className="px-7 py-4 flex flex-row gap-3 bg-stone-800 text-light rounded-xl hover:shadow-[0px_6px_20px_rgba(0,0,0,0.3)] transition-all duration-200 ease-in">
                Resume <Download />
            </a>

            </div>
        </div>
        </>
    )
}