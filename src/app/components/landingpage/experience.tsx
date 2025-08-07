'use client'

import Image from 'next/image'
import { motion, easeIn} from 'framer-motion'

export default function Experience() {
    return(
        <>
        <div className="flex flex-col gap-20 py-12 px-6 md:px-32 border-t border-b border-stone-300">

            <motion.div 
                initial={{y: -20, filter: "blur(10px)"}}
                whileInView={{y:0, filter: "blur(0px)"}}
                transition={{duration: 0.4, ease: easeIn}}
            className="font-primary font-medium text-3xl text-stone-800 dark:text-stone-300">
                Experience 
            </motion.div>

            <div className="flex flex-col gap-16">

                <motion.div 
                initial={{y: -20, filter: "blur(10px)"}}
                whileInView={{y:0, filter: "blur(0px)"}}
                transition={{duration: 0.4, ease: easeIn}}
                className="flex flex-col gap-6 font-primary tracking-tight border border-stone-300  pl-9 py-7">

                    <div className="flex flex-col gap-1">
                    <div className="flex flex-row items-center gap-3">
                        <div className='relative w-10 h-10'>
                            <Image 
                            src="/oscode.svg"
                            alt="oscode"
                            fill
                            className='object-cover  border border-zinc-500 p-1 bg-neutral-100  rounded-full'
                            />
                        </div>
                        <div className="text-3xl font-medium text-zinc-800 dark:text-zinc-300">
                            Oscode
                        </div>
                    </div>

                    <div className="text-xl text-stone-700">
                        Full Stack Web Intern <span className="text-sm">(Oct 2024 - May 2025)</span>
                    </div>
                    </div>

                    <div className="font-secondary text-stone-500">
                        <li className="">Designed and developed effective web solutions, delivering high-quality services to meet client requirements.</li>
                        <li className="mt-2">Collaborated in cross-functional teams and participated in client meetings to ensure alignment with user needs and adherence to project deadlines.</li>
                        <li className="mt-2">Worked closely with teams and attended client meetings to facilitate seamless project execution and client satisfaction.</li>
                    </div>

                </motion.div>

                <motion.div 
                initial={{y: -20, filter: "blur(10px)"}}
                whileInView={{y:0, filter: "blur(0px)"}}
                transition={{duration: 0.6, ease: easeIn}}
                className="flex flex-col gap-6 font-primary tracking-tight border border-stone-300 pl-9 py-7">

                    <div className="flex flex-col gap-1">
                    <div className="flex flex-row items-center gap-3">
                        <div className='relative w-14 h-14'>
                            <Image 
                            src="/wcm-.png"
                            alt=""
                            fill
                            className='object-cover border border-zinc-500  bg-neutral-100  rounded-full' 
                            />

                        </div>
                        <div className="text-3xl font-medium text-zinc-800 dark:text-zinc-300">
                            WebscraftMedia
                        </div>
                    </div>

                    <div className="text-xl text-stone-700">
                        Front-end Stack Intern <span className="text-sm">(Aug 2024 – Oct 2025)</span>
                    </div>
                    </div>

                    <div className="font-secondary text-stone-500">
                        <li className="">Supported maintenance of 5+ websites, ensuring 100% uptime.</li>
                        <li className="mt-2">Learned working in a time bound environment and meeting my deadlines on time. </li>
                        <li className="mt-2">Gained experience on technologies like React, Tailwind, and Typescript.</li>
                        <li className="mt-2">Learned about how a corporate startup works.</li>
                    </div>

                </motion.div>

                

                
            </div>

        </div>
        </>
    )
}