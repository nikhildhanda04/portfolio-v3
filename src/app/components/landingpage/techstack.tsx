"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Code2, LayoutTemplate, Server, Database, Cloud, Sparkles } from "lucide-react";
import { Shell, SectionHeader } from "../common/Layout";
import JavaScript from "../svgs/technologies/JavaScript";
import TypeScript from "../svgs/technologies/TypeScript";
import Html from "../svgs/technologies/Html";
import CSS from "../svgs/technologies/CSS";
import ReactIcon from "../svgs/technologies/ReactIcon";
import NextJs from "../svgs/technologies/NextJs";
import TailwindCss from "../svgs/technologies/TailwindCss";
import Motion from "../svgs/technologies/Motion";
import Vite from "../svgs/technologies/Vite";
import Shadcn from "../svgs/technologies/Shadcn";
import ReactFlow from "../svgs/technologies/ReactFlow";
import NodeJs from "../svgs/technologies/NodeJs";
import ExpressJs from "../svgs/technologies/ExpressJs";
import Jwt from "../svgs/technologies/Jwt";
import Zod from "../svgs/technologies/Zod";
import Puppeteer from "../svgs/technologies/Puppeteer";
import Axios from "../svgs/technologies/Axios";
import PostgreSQL from "../svgs/technologies/PostgreSQL";
import MongoDB from "../svgs/technologies/MongoDB";
import Prisma from "../svgs/technologies/Prisma";
import AWS from "../svgs/technologies/AWS";
import Vercel from "../svgs/technologies/Vercel";
import Github from "../svgs/technologies/Github";
import Postman from "../svgs/technologies/Postman";
import Bun from "../svgs/technologies/Bun";
import Gemini from "../svgs/technologies/Gemini";
import OpenAi from "../svgs/technologies/OpenAi";
import Ollama from "../svgs/technologies/Ollama";

type Icon = React.ComponentType<{ className?: string }>;

// some brand svgs are hard-coded black/white, so flip them where they'd vanish
const ON_DARK = "[.dark_&]:invert";
const ON_LIGHT = "[.light_&]:invert";

const CATEGORIES: { name: string; icon: Icon; skills: [string, Icon, string?][] }[] = [
  { name: "Languages", icon: Code2, skills: [["JavaScript", JavaScript], ["TypeScript", TypeScript], ["HTML", Html], ["CSS", CSS]] },
  {
    name: "Frontend",
    icon: LayoutTemplate,
    skills: [["React", ReactIcon], ["Next.js", NextJs], ["Tailwind CSS", TailwindCss], ["Motion", Motion], ["Vite", Vite], ["shadcn/ui", Shadcn], ["React Flow", ReactFlow]],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [["Node.js", NodeJs], ["Express.js", ExpressJs], ["JWT", Jwt], ["Zod", Zod], ["Puppeteer", Puppeteer], ["Axios", Axios]],
  },
  { name: "Databases", icon: Database, skills: [["PostgreSQL", PostgreSQL], ["MongoDB", MongoDB], ["Prisma", Prisma, ON_DARK]] },
  {
    name: "DevOps & Cloud",
    icon: Cloud,
    skills: [["AWS", AWS], ["Vercel", Vercel], ["GitHub", Github, ON_DARK], ["Postman", Postman], ["Bun", Bun]],
  },
  { name: "AI", icon: Sparkles, skills: [["Gemini", Gemini], ["OpenAI", OpenAi, ON_LIGHT], ["Ollama", Ollama]] },
];

const ALL = { name: "All", icon: Layers, skills: CATEGORIES.flatMap((c) => c.skills) };

export function TechStack() {
  const [active, setActive] = useState("All");
  const skills = [ALL, ...CATEGORIES].find((c) => c.name === active)!.skills;

  return (
    <div id="skills">
      <SectionHeader
        title="Tech Stack"
        aside={<span className="hidden font-mono text-[10px] tracking-wider text-[var(--soft)] sm:inline">( select tab to filter )</span>}
      />
      <Shell className="px-6 py-6 sm:px-8">
        <div className="flex flex-wrap gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--chip)] p-1">
          {[ALL, ...CATEGORIES].map(({ name, icon: CatIcon }) => {
            const isActive = active === name;
            return (
              <button key={name} type="button" onClick={() => setActive(name)} className="relative flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1.5 text-[12px] font-medium">
                {isActive && (
                  <motion.div
                    layoutId="active-category-pill"
                    className="absolute inset-0 rounded-md bg-[var(--fg)] shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
                  />
                )}
                <span className={`relative z-10 flex items-center gap-1.5 transition-colors duration-200 ${isActive ? "font-semibold text-[var(--bg)]" : "text-[var(--muted)]"}`}>
                  <CatIcon className="size-3.5" />
                  {name}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {skills.map(([skill, SkillIcon, fix], i) => (
            <motion.span
              key={`${active}-${skill}`}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.35, delay: i * 0.03, ease: "easeOut" }}
              className="flex cursor-default items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 font-mono text-[12px] text-[var(--muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--fg)] hover:bg-[var(--fg)] hover:text-[var(--bg)]"
            >
              <SkillIcon className={`size-4 shrink-0 ${fix ?? ""}`} />
              {skill}
            </motion.span>
          ))}
        </div>
      </Shell>
    </div>
  );
}
