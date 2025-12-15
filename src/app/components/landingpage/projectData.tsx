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
import GoogleSheets from '../svgs/technologies/GoogleSheets';
import GoogleDrive from '../svgs/technologies/GoogleDrive';
import Jwt from '../svgs/technologies/Jwt';
import Prisma from '../svgs/technologies/Prisma';
import Gemini from '../svgs/technologies/Gemini';
import Puppeteer from '../svgs/technologies/Puppeteer';
import Zod from '../svgs/technologies/Zod';
import OpenAi from '../svgs/technologies/OpenAi';
import Vite from '../svgs/technologies/Vite';
import ReactFlow from '../svgs/technologies/ReactFlow';
import Axios from '../svgs/technologies/Axios';

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
  challenges?: string[];
  learnings?: string[];
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
  sheets: GoogleSheets,
  googlesheets: GoogleSheets,
  drive: GoogleDrive,
  googledrive: GoogleDrive,
  prisma: Prisma,
  gemini: Gemini,
  google: Gemini,
  puppeteer: Puppeteer,
  zod: Zod,
  openai: OpenAi,
  gpt: OpenAi,
  vite: Vite,
  reactflow: ReactFlow,
  axios: Axios,
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
    description: "Built a full-stack AI platform using Next.js 16 and TypeScript to automate resume parsing and job application autofill, reducing application time by 40%. Features a fault-tolerant RAG pipeline and hybrid scraping engine.",
    tech: mapTechs(["Nextjs", "TypeScript", "Tailwind", "PostgreSQL", "Prisma", "Gemini", "Puppeteer", "Zod"]),
    link: "https://github.com/nikhildhanda04/next-hire",
    live: "https://next-hire-bice.vercel.app/",
    image: "/Next Hire.jpeg",
    isWorking: false,
    timeline: "Nov 2025 - Present",
    role: "Full Stack Developer",
    team: "Solo",
    features: [
      {title: "AI-Powered Resume Parsing", description: "Instantly converts raw PDF into structured data using custom schemas via Gemini 2.0 & OpenAI."},
      {title: "Smart Autofill Extension", description: "Chrome extension that 'reads' job pages and fills complex questions using profile context."},
      {title: "Bring Your Own Key (BYOK)", description: "Flexible auth system allowing power users to input their own Gemini/OpenAI keys."},
      {title: "Hybrid Scraping Engine", description: "Polymorphic engine switching between Puppeteer and Cheerio for optimal parsing."},
    ],
    learnings: [
      "Prompt Engineering is Code: Treated prompts as composable, typed software artifacts.",
      "Defensive API Design: Externalized state to DB/Redis for reliable serverless rate limiting.",
      "Stream Handling: Managed long-running AI streams with careful client-side chunk handling.",
    ],
    challenges: [
      "Engineered a self-healing JSON parsing layer (jsonrepair) to handle non-deterministic LLM outputs.",
      "Architected a context-aware 'RAG-Lite' engine acting as a retrieval orchestrator.",
      "Built a distributed Token Bucket rate limiter using PostgreSQL transactions for serverless.",
      "Implemented a hybrid polymorphic scraping engine switching between Cheerio and Puppeteer.",
    ],
  },
  {
    slug: "roadmap-generator",
    title: "AI Roadmap Generator",
    tagline: "Intelligent Learning Pathways",
    description: "An intelligent, interactive learning platform that transforms abstract learning goals into structured, step-by-step visual pathways using AI. Features a custom DAG visualization engine and smart responsive layouts.",
    tech: mapTechs(["Reactjs", "JavaScript", "Vite", "NodeJs", "Express", "Tailwind", "Motion", "ReactFlow", "Axios"]),
    link: "https://github.com/nikhildhanda04/Roadmap-Generator",
    live: "https://roadmapgenerator.vercel.app/",
    image: "/Roadmap Gen.jpeg",
    isWorking: true,
    timeline: "Aug 2024 - Nov 2024",
    role: "Full Stack Developer",
    team: "Solo",
    features: [
      {title: "AI-Driven Content Gen", description: "Dynamically generates comprehensive learning paths based on user input via backend AI service."},
      {title: "Interactive DAG Visuals", description: "Visualizes learning paths as connected graphs with dependencies using a custom layout engine."},
      {title: "Smart Responsive Layout", description: "Automatically adapts graph structure: columnar for desktop, vertical stack for mobile."},
      {title: "Dynamic Prerequisite Map", description: "Visualizes non-linear dependencies between modules using dashed connection lines."},
    ],
    learnings: [
      "Mastered React Flow to build a custom visualization engine for hierarchical data.",
      "Implemented complex responsive logic to transform graph layouts based on device viewport.",
      "Orchestrated smooth fluid animations using Framer Motion for asynchronous state changes.",
    ],
    challenges: [
      "Engineered a two-pass custom layout algorithm to map hierarchical JSON to flat node coordinates.",
      "Solved complex mobile visualization challenges by switching layout strategies at runtime.",
      "Integrated Framer Motion to create polished entrance animations during async AI generation.",
    ],
  },
  {
    slug: "law-journal",
    title: "Law Journal",
    tagline: "A blog website for law students",
    description: "A highly optimized Next.js blog that eliminates CMS costs by engineering a custom adapter for Google Sheets and Drive, featuring ISR for static performance and dynamic content updates.",
    tech: mapTechs(["Nextjs", "TypeScript", "Reactjs", "Tailwind", "Motion", "Vercel", "Google Sheets", "Google Drive"]),
    link: "https://github.com/nikhildhanda04/reblog",
    live: "https://lawjournal-rho.vercel.app/",
    image: "/Law Journal .jpeg",
    isWorking: true,
    timeline: "",
    role: "Full Stack Developer",
    team: "Solo",
    features: [
      {title: "Headless Google Sheets CMS", description: "Custom adapter transforming raw spreadsheet rows into fully typed content."},
      {title: "Zero-Cost Asset Hosting", description: "Clever URL transformation to use Google Drive as a CDN for blog images."},
      {title: "Incremental Static Regeneration", description: "Configured via ISR to serve static HTML that updates automatically every minute."},
      {title: "Type-Safe Architecture", description: "Full TypeScript implementation extending from the API layer to React components."},
    ],
    learnings: [
      "Deepened understanding of Next.js 15 App Router and server-side data fetching/caching.",
      "Mastered Service Account Authentication for secure GCP server-to-server requests.",
      "Applied the Adapter Pattern to bridge incompatible Google Sheets data with modern UI.",
    ],
    challenges: [
      "engineered a middleware layer to safely map untyped 2D arrays to typed interfaces.",
      "Reverse-engineered Google Drive URLs to create a regex translater for serving images directly.",
      "Implemented server-side caching with ISR to reduce Google API calls by over 95%.",
    ],
  },
  {
    slug: "vitb-notes",
    title: "VitB Notes",
    tagline: "AI-Powered Study Companion",
    description: "An advanced educational platform utilizing Gemini 2.0 Flash to transform raw syllabus materials into structured, textbook-quality notes and quizzes. Features a resilient AI pipeline and modern type-safe stack.",
    tech: mapTechs(["Nextjs", "TypeScript", "NodeJs", "Reactjs", "Tailwind", "Motion", "PostgreSQL", "Prisma"]),
    link: "https://github.com/nikhildhanda04/vitb-notes",
    live: "https://www.vitbnotes.info/",
    image: "/Vitb Notes.jpeg",
    isWorking: true,
    timeline: "Aug 2024 - Sep 2024",
    role: "Full Stack Developer",
    team: "Solo",
    features: [
      { title: "AI-Driven Content Gen", description: "Generates comprehensive markdown notes with LaTeX and Mermaid diagrams via Gemini 2.0 Flash." },
      { title: "Resilient AI Pipeline", description: "Implements schema validation, JSON repair, and exponential backoff retry logic for reliability." },
      { title: "Multi-Modal Parsing", description: "Ingests PDFs and images (OCR) to create structured study materials." },
      { title: "Role-Based Generation", description: "Secure admin-only generation endpoints using Better Auth and session verification." },
    ],
    challenges: [
      "Implemented a 'repair-and-retry' resiliency layer with jsonrepair to handle malformed LLM JSON outputs.",
      "Built a custom exponential backoff strategy to manage API rate limits during bulk generation.",
      "Enforced strict type-safety across the stack, ensuring AI output schemas mirror the Prisma database model.",
    ],
    learnings: [
      "Mastered prompt engineering to direct AI personas and enforce strict schema adherence.",
      "Gained expertise in building robust, error-tolerant backend systems for long-running AI processes.",
      "Leveraged Next.js 16 and Tailwind v4 to implement bleeding-edge frontend standards.",
    ]
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}