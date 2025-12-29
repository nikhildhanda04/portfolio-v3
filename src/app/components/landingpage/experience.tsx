'use client'

import Image from 'next/image'
import { motion, easeIn} from 'framer-motion'

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  logo: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Oscode",
    role: "Full Stack Web Intern",
    duration: "Oct 2024 - May 2025",
    logo: "/oscode.svg",
    points: [
      "Designed and developed effective web solutions, delivering high-quality services to meet client requirements.",
      "Collaborated in cross-functional teams and participated in client meetings to ensure alignment with user needs and adherence to project deadlines.",
      "Worked closely with teams and attended client meetings to facilitate seamless project execution and client satisfaction.",
    ],
  },
  {
    company: "WebscraftMedia",
    role: "Front-end Development Intern",
    duration: "Aug 2024 – Oct 2024",
    logo: "/wcm-.png",
    points: [
      "Supported maintenance of 5+ websites, ensuring 100% uptime.",
      "Learned working in a time bound environment and meeting my deadlines on time.",
      "Gained experience on technologies like React, Tailwind, and Typescript.",
      "Learned about how a corporate startup works.",
    ],
  },
  {
    company: "News19",
    role: "Video Editor",
    duration: "Jan 2025 - Mar 2025",
    logo: "/news19.png", 
    points: [
      "Crafting high-quality video content for news broadcasting and digital platforms.",
      "Utilizing professional editing software to enhance storytelling and visual appeal.",
      "Collaborating with production teams to meet tight deadlines and maintain editorial standards.",
    ],
  }
];

export default function Experience() {
    return(
        <>
        <div id="experience" className="flex flex-col gap-20 py-12 px-6 md:px-44 ">

            <motion.div 
                initial={{y: -20, filter: "blur(10px)"}}
                whileInView={{y:0, filter: "blur(0px)"}}
                transition={{duration: 0.4, ease: easeIn}}
            className="font-primary font-medium text-3xl text-stone-800 dark:text-stone-300">
                Experience 
            </motion.div>

            <div className="flex flex-col gap-16">
                {experiences.map((exp, index) => (
                    <motion.div 
                        key={index}
                        initial={{y: -20, filter: "blur(10px)"}}
                        whileInView={{y:0, filter: "blur(0px)"}}
                        transition={{duration: 0.4 + (index * 0.2), ease: easeIn}}
                        className="flex flex-col gap-6 font-primary tracking-tight pl-9 py-7"
                    >
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row items-center gap-3">
                                <div className='relative w-10 h-10'>
                                    {exp.logo ? (
                                        <Image 
                                            src={exp.logo}
                                            alt={exp.company}
                                            fill
                                            className='object-cover border border-zinc-500 p-1 bg-neutral-100 rounded-full'
                                        />
                                    ) : (
                                        <div className="w-full h-full border border-zinc-500 bg-neutral-100 rounded-full flex items-center justify-center text-[10px] font-bold text-stone-400">
                                            {exp.company.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div className="text-3xl font-medium text-zinc-800 dark:text-zinc-300">
                                    {exp.company}
                                </div>
                            </div>

                            <div className="text-xl text-stone-700 dark:text-stone-400">
                                {exp.role} <span className="text-sm">({exp.duration})</span>
                            </div>
                        </div>

                        <ul className="font-secondary text-stone-500 dark:text-stone-500 list-disc list-inside space-y-2">
                            {exp.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

        </div>
        </>
    )
}