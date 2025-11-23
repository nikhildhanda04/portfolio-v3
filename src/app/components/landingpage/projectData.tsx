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
import Shadcn from '../svgs/technologies/Shadcn';
import PostgreSQL from '../svgs/technologies/PostgreSQL';
import Vercel from '../svgs/technologies/Vercel';
import Jwt from '../svgs/technologies/Jwt';
import { p } from 'motion/react-client';

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
  postgresql: PostgreSQL,
  ollama: Ollama,
  scikit: Scikit,
  shadcn: Shadcn,
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
    live: "https://next-hire-bice.vercel.app/",
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
    title: "Warm Reach",
    description: "This is an AI-based email generator that helps you in drafting cold emails to reach out to potential clients effectively.",
    tech: mapTechs(["Nextjs", "typescript", "mongodb", "Vercel"]),
    link: "https://github.com/nikhildhanda04/Warm-Reach", 
    live: "https://warmreach.vercel.app/",
    image: "/warm-reach.png",
    isWorking: true, 
  },
  {
    title: "VitB Notes",
    description: "An online platform to share and access study notes for various courses at VIT Bhopal.",
    tech: mapTechs(["Nextjs", "JWT","Gemini API", "Tailwind", "Vercel", "Shadcn", "PostgreSQL" ]),
    link: "https://github.com/nikhildhanda04/vitb-notes", 
    live: "https://github.com/nikhildhanda04/vitb-notes",
    image: "/vitb-notes.png", 
    isWorking: false,
  },
];