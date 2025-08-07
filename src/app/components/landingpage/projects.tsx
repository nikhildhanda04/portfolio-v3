
import Image from "next/image";
import { Project } from "./projectData";

interface ProjectsProps {
  projects: Project[]; 
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col gap-24 py-12 px-6 md:px-32 border-t border-b border-stone-300">
      <div className="font-primary font-medium text-stone-800 dark:text-stone-300 text-3xl">Projects</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start  ">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-4 px-8 py-6 border border-stone-400 items-start">
            <div className="relative w-[300px] h-[200px] md:w-[350px] md:h-[240px] mx-auto">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover border border-dark rounded-lg"
              />
            </div>

            <div className="font-primary text-stone-800 dark:text-stone-300 font-medium text-2xl">
              {project.title}
            </div>

            <div className="font-secondary text-stone-500">
              {project.description}
            </div>

            <div className="flex gap-2 flex-wrap my-4">
            {project.tech.map((techItem, i) => (
                <div
                key={i}
                className="font-primary rounded-xl text-xs px-4 py-1 bg-neutral-100 border border-zinc-600 hover:bg-neutral-700 text-dark hover:text-light transition"
                >
                {techItem}
                </div>
            ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-primary bg-neutral-300 text-dark px-7 py-3 rounded-2xl hover:shadow-[0px_6px_20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0px_3px_25px_rgba(255,255,255,0.43)] transition-all duration-200 ease-in"
            >
              Check Out
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
