'use client'

import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Project } from "./projectData";
import { easeIn, motion } from 'framer-motion'
import { Globe } from "lucide-react";


interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col gap-24 py-12 px-6 md:px-44 ">

      <div>
        <motion.div
          initial={{ y: -20, filter: "blur(10px)" }}
          whileInView={{ y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: easeIn }}
          className="font-primary font-medium text-lg text-stone-500">
          Featured
        </motion.div>
        <motion.div
          initial={{ y: -20, filter: "blur(10px)" }}
          whileInView={{ y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, ease: easeIn }}
          className="font-primary font-medium text-stone-800 dark:text-stone-300 text-3xl">
          Projects
        </motion.div>

      </div>

      <motion.div
        initial={{ y: -20, filter: "blur(10px)" }}
        whileInView={{ y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.4, ease: easeIn }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start  ">
        {projects.map((project, index) => (
          <div key={index} className="flex rounded-lg flex-col border border-stone-400 dark:border-stone-800 items-start overflow-hidden group/card hover:border-stone-500 dark:hover:border-stone-700 transition-colors">
            <Link href={`/projects/${project.slug}`} className="w-full cursor-pointer">
              <div className="relative w-full h-full mx-auto">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </Link>

            <div className="px-6 py-8 bg-nerutral-200 dark:bg-neutral-800 w-full">

              <div className="flex flex-row justify-between w-full">
                <Link href={`/projects/${project.slug}`} className="font-primary text-stone-800 dark:text-stone-300 font-medium text-2xl hover:underline decoration-stone-400 underline-offset-4">
                  {project.title}
                </Link>

                <div className="flex flex-row gap-5">
                  <a
                    href={project.live}
                    target="_blank"
                    className="transition-colors text-stone-700 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 z-10">
                    <Globe className="w-5 h-5" />
                  </a>

                  <a
                    href={project.link}
                    target="_blank"
                    className="transition-colors text-stone-700 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 z-10">
                    <GithubIcon />
                  </a>

                </div>
              </div>


              <div className="font-secondary text-sm tracking-tight text-stone-500 mt-2">
                {project.description}
              </div>


              <div className="flex gap-1 flex-wrap my-4">
                {project.tech.map((tech, i) => (
                  <div
                    key={i}
                    className="group relative flex items-center justify-center w-7 h-7 rounded-xl text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      {tech.icon}
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <div className="bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg">
                        {tech.name}
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                          <div className="border-4 border-transparent border-t-stone-900 dark:border-t-stone-100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='mt-9'>
                <div
                  className={`flex items-center w-fit text-stone-800 dark:text-stone-300 gap-1 rounded-md px-2 py-1 text-xs ${project.isWorking
                    ? 'border-green-300 bg-green-500/10'
                    : 'border-red-300 bg-red-500/10'
                    }`}
                >
                  {project.isWorking ? (
                    <>
                      <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                      All Systems Operational
                    </>
                  ) : (
                    <>
                      <div className="size-2 rounded-full bg-red-500 animate-pulse" />
                      Building
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

    </div>
  );
}



const GithubIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
)
