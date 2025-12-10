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
  slug: string;
  title: string;
  description: string;
  tech: Array<{ icon: React.ReactNode; name: string }>;
  link: string;
  live: string;
  image: string;
  tagline: string;
  isWorking?: boolean;
  timeline?: string;
  role?: string;
  team?: string;
  features?: { title: string; description: string }[];
  motivation?: { title: string; description: string; points: string[] };
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
    slug: "next-hire",
    title: "Next Hire",
    tagline: "AI based job finding platform",
    description: "This is an AI-based job finding platform. Just upload your resume and voila! It finds the best-suited jobs for you and auto-applies.",
    tech: mapTechs(["Nextjs", "Mongo", "NLP", "Scikit", "Motion", "Vercel"]),
    link: "https://github.com/nikhildhanda04/next-hire",
    live: "https://next-hire-bice.vercel.app/",
    image: "/Nexthire.png",
    isWorking: false,
    timeline: "Nov 2025 - Present",
    role: "Full Stack Developer",
    team: "Solo",
  },
  {
    slug: "roadmap-generator",
    title: "Roadmap Generator",
    tagline: "Simple and minimal roadmap generator",
    description: "This is a saas project, which runs on local LLM model and uses reactflow to generate roadmap that help you in learning",
    tech: mapTechs(["Reactjs", "Mongo", "Ollama", "Express", "jwt", "Motion", "Vercel"]),
    link: "https://github.com/nikhildhanda04/Roadmap-Generator",
    live: "https://roadmapgenerator.vercel.app/",
    image: "/Roadmap.png",
    isWorking: true,
    timeline: "Aug 2024 - Nov 2024",
    role: "Full Stack Developer",
    team: "Solo",
  },
  {
    slug: "warm-reach",
    title: "Warm Reach",
    tagline: "AI based email generator",
    description: "This is an AI-based email generator that helps you in drafting cold emails to reach out to potential clients effectively.",
    tech: mapTechs(["Nextjs", "typescript", "mongodb", "Vercel"]),
    link: "https://github.com/nikhildhanda04/Warm-Reach",
    live: "https://warmreach.vercel.app/",
    image: "/warm-reach.png",
    isWorking: true,
    timeline: "Sep 2024 - Oct 2024",
    role: "Full Stack Developer",
    team: "Solo",
  },
  {
    slug: "vitb-notes",
    title: "VitB Notes",
    tagline: "Online platform to share and access study notes for various courses at VIT Bhopal",
    description: "An online platform to share and access study notes for various courses at VIT Bhopal.",
    tech: mapTechs(["Nextjs", "JWT", "Gemini API", "Tailwind", "Vercel", "Shadcn", "PostgreSQL"]),
    link: "https://github.com/nikhildhanda04/vitb-notes",
    live: "https://www.vitbnotes.info/",
    image: "/vitb-notes.png",
    isWorking: true,
    timeline: "Aug 2024 - Sep 2024",
    role: "Full Stack Developer",
    team: "Solo",
    features: [
      { title: "Find Notes", description: "Search and access notes by year or semester (1st to 4th year)." },
      { title: "Share Resources", description: "Share notes and materials with friends." },
      { title: "Use Flashcards", description: "Practice with interactive flashcards for active recall." },
      { title: "Attempt Quizzes", description: "Test your knowledge with practice quizzes." },
      { title: "Access PYQs", description: "Get previous year questions (PYQs) with answers." },
      { title: "One-Shots", description: "Quick review materials for last-minute prep." },
      { title: "Topper Notes", description: "Handwritten notes from top-performing students." },
      { title: "AI Study Assistant", description: "(Coming soon) Get instant answers to your study questions." },
      { title: "Video Material", description: "Watch video explanations for better understanding." },
    ],
    motivation: {
      title: "Why i built this",
      description: "I built this platform to solve a fundamental issue i faced while studying as follows -",
      points: [
        "Professors don't share notes with students.",
        "Toppers notes are not available to everyone.",
        "Notes are scattered & not organized.",
        "Reading one notes and then another notes is a pain with no sync, same example's and tone of writing.",
        "I don't want to read notes from a pdf, i want to customize my reading experience.",
      ]
    }
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}