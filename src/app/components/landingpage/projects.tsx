 'use client'

import React from 'react'
import Image from "next/image";
import { Project } from "./projectData";
import { easeIn, motion } from 'framer-motion'
import { Github, Globe } from "lucide-react";

interface ProjectsProps {
  projects: Project[]; 
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col gap-24 py-12 px-6 md:px-44 ">
        
      <div>
              <motion.div 
              initial={{y: -20, filter: "blur(10px)"}}
                whileInView={{y:0, filter: "blur(0px)"}}
                transition={{duration: 0.4, ease: easeIn}}
      className="font-primary font-medium text-lg text-stone-500">
        Featured
      </motion.div>
      <motion.div 
                initial={{y: -20, filter: "blur(10px)"}}
                whileInView={{y:0, filter: "blur(0px)"}}
                transition={{duration: 0.4, ease: easeIn}}
      className="font-primary font-medium text-stone-800 dark:text-stone-300 text-3xl">
        Projects
        </motion.div>

      </div>

      <motion.div 
                initial={{y: -20, filter: "blur(10px)"}}
                whileInView={{y:0, filter: "blur(0px)"}}
                transition={{duration: 0.4, ease: easeIn}}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start  ">
        {projects.map((project, index) => (
          <div key={index} className="flex rounded-lg flex-col border border-stone-400 dark:border-stone-800 items-start">
            <div className="relative w-full h-full mx-auto">
              <Image
                src={project.image}
                alt={project.title}
                width={1920}
                height={1080}
                loading="lazy"
                className="object-cover  rounded-t-lg"
              />
            </div>

            <div className="px-6 py-8 bg-nerutral-200 dark:bg-neutral-800">

              <div className="flex flex-row justify-between w-full">
               <div className="font-primary text-stone-800 dark:text-stone-300 font-medium text-2xl">
              {project.title}
            </div>

            <div className="flex flex-row gap-5">
             <a 
            href={project.live}
            target="_blank"
            className="transition-colors text-stone-700 dark:text-stone-400">
              <Globe className="w-5 h-5"/>
            </a>

            <a 
            href={project.link}
            target="_blank"
            className="transition-colors text-stone-700 dark:text-stone-400">
              <Github className="w-5 h-5"/>
            </a>

            </div>
              </div>
           

            <div className="font-secondary text-stone-500">
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
            className={`flex items-center w-fit text-stone-800 dark:text-stone-300 gap-1 rounded-md px-2 py-1 text-xs ${
              project.isWorking
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


