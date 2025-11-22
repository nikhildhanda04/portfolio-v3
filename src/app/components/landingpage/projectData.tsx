import React from 'react';
import NextJs from '../svgs/technologies/NextJs';
import MongoDB from '../svgs/technologies/MongoDB';
import Motion from '../svgs/technologies/Motion';
import ReactIcon from '../svgs/technologies/ReactIcon';
import ExpressJs from '../svgs/technologies/ExpressJs';
import TailwindCss from '../svgs/technologies/TailwindCss';
import JavaScript from '../svgs/technologies/JavaScript';
import TypeScript from '../svgs/technologies/TypeScript';
import NodeJs from '../svgs/technologies/NodeJs';
import MDXIcon from '../svgs/technologies/MDXIcon';
import Ollama from '../svgs/technologies/Ollama';
import Scikit from '../svgs/technologies/Scikit';
import Vercel from '../svgs/technologies/Vercel';
import Jwt from '../svgs/technologies/Jwt';

export interface Project {
  title: string;
  description: string;
  tech: Array<{ icon: React.ReactNode; name: string }>;
  link: string;
  live: string;
  image: string;
  isWorking?: boolean;
}

const techMap: Record<string, React.ComponentType<{ className?: string }>> = {
  nextjs: NextJs,
  mongo: MongoDB,
  mongodb: MongoDB,
  motion: Motion,
  reactjs: ReactIcon,
  react: ReactIcon,
  express: ExpressJs,
  expressjs: ExpressJs,
  tailwind: TailwindCss,
  tailwindcss: TailwindCss,
  javascript: JavaScript,
  js: JavaScript,
  typescript: TypeScript,
  node: NodeJs,
  nodejs: NodeJs,
  manifest: MDXIcon,
  vercel: Vercel,
  ollama: Ollama,
  scikit: Scikit,
  jwt: Jwt,
};

const mapTechs = (techs: string[]) => {
  return techs
    .map((t) => {
      const key = t.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
      const Comp = techMap[key];
      if (!Comp) return null;
      return {
        icon: <Comp className="w-4 h-4" />,
        name: t
      };
    })
    .filter(Boolean) as Array<{ icon: React.ReactNode; name: string }>;
};

export const projects: Project[] = [
  {
    title: "Next Hire",
    description: "This is an AI-based job finding platform. Just upload your resume and voila! It finds the best-suited jobs for you and auto-applies.",
    tech: mapTechs(["Nextjs", "Mongo", "NLP", "Scikit", "Motion", "Vercel"]),
    link: "https://github.com/nikhildhanda04/next-hire", 
    live: "https://nexthire.vercel.app/",
    image: "/Nexthire.png", 
    isWorking: false,
  },
  {
    title: "Roadmap Generator",
    description: "This is a saas project, which runs on local LLM model and uses reactflow to generate roadmap that help you in learning",
    tech: mapTechs(["Reactjs", "Mongo", "Ollama", "Express", "jwt", "Motion", "Vercel" ]),
    link: "https://github.com/nikhildhanda04/Roadmap-Generator", 
    live: "https://roadmapgenerator.vercel.app/",
    image: "/Roadmap.png", 
    isWorking: true,
  },
  {
    title: "Font Finder",
    description: "This parses into the project directory and passes out the font and its details used in that project.",
    tech: mapTechs(["Reactjs", "Manifest", "Motion", "Vercel"]),
    link: "https://github.com/nikhildhanda04/FontFinder", 
    live: "https://font-finder.vercel.app/",
    image: "/Fontfinder.png",
    isWorking: true, 
  },
  {
    title: "Recipe Lab",
    description: "This is a completely AI handeled money managenment dashboard, and AI suggests you how to spend money.",
    tech: mapTechs(["Nextjs", "JWT","Gemini API", "Tailwind", "Vercel"]),
    link: "https://github.com/nikhildhanda04/recipe-lab", 
    live: "https://recipelab.vercel.app/",
    image: "/recipelab.png", 
    isWorking: true,
  },
];