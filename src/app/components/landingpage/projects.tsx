"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, X } from "lucide-react";
import { Shell, SectionHeader } from "../common/Layout";
import { GitHubIcon } from "../common/icons";
import { projects, type Project } from "./projectData";

const TABS = ["All", "Frontend", "Backend", "Fullstack"] as const;

const yearOf = (p: Project) => p.timeline?.match(/\d{4}/)?.[0] ?? "";

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col justify-between rounded-xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--soft)] hover:shadow-md">
      <div>
        <div className="relative mb-4 flex h-48 w-full flex-col justify-between overflow-hidden rounded-lg border border-[var(--line)] bg-gradient-to-br from-[var(--chip)] via-[var(--card)] to-[var(--bg)]/40 p-3">
          <div className="bg-stripes pointer-events-none absolute inset-0 opacity-20" />

          {/* viewfinder reticles */}
          <div className="pointer-events-none absolute inset-0 z-10 font-mono text-[9px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute top-2.5 left-2.5 h-2.5 w-2.5 border-t border-l border-white/70" />
            <div className="absolute top-2.5 right-2.5 h-2.5 w-2.5 border-t border-r border-white/70" />
            <div className="absolute bottom-2.5 left-2.5 h-2.5 w-2.5 border-b border-l border-white/70" />
            <div className="absolute right-2.5 bottom-2.5 h-2.5 w-2.5 border-r border-b border-white/70" />
            <div className="absolute top-2.5 left-7 flex items-center gap-1 text-[8px] font-semibold text-white/80">
              <span className="size-1.5 animate-pulse rounded-full bg-rose-500" /> REC
            </div>
            <div className="absolute top-2.5 right-7 text-[8px] font-semibold text-white/80">ISO 400</div>
          </div>

          <div className="relative z-20">
            {p.isWorking ? (
              <span className="inline-flex items-center gap-1 rounded border border-emerald-500/40 bg-emerald-500/20 px-2 py-0.5 font-mono text-[9px] font-semibold tracking-wider text-emerald-300 uppercase backdrop-blur-md">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                </span>
                Live
              </span>
            ) : (
              <span className="rounded border border-amber-500/40 bg-amber-500/20 px-2 py-0.5 font-mono text-[9px] font-semibold tracking-wider text-amber-300 uppercase backdrop-blur-md">
                • Building
              </span>
            )}
          </div>

          {/* angled screenshot */}
          <div className="pointer-events-none absolute -right-6 -bottom-3 h-32 w-56 overflow-hidden rounded-lg border-4 border-[var(--bg)]/40 shadow-xl transition-all duration-300 group-hover:-right-4 group-hover:-bottom-1 sm:-right-12 sm:-bottom-5 sm:h-40 sm:w-72 sm:group-hover:-right-9 sm:group-hover:-bottom-2">
            <Image src={p.image} alt={`${p.title} preview`} fill sizes="288px" className="object-cover object-top" />
          </div>
        </div>

        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[16px] font-semibold tracking-wide text-[var(--fg)]">{p.title}</h3>
          <span className="font-mono text-xs text-[var(--soft)]">{yearOf(p)}</span>
        </div>
        <p className="mt-2 line-clamp-4 text-[13px] leading-relaxed text-[var(--muted)]">{p.description}</p>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-[var(--line)]/50 pt-3">
        <div className="flex flex-wrap gap-1.5">
          {p.tech.slice(0, 3).map((t) => (
            <span key={t.name} className="rounded border border-[var(--line)]/30 bg-[var(--chip)] px-2 py-0.5 font-mono text-[10.5px] text-[var(--muted)]">
              {t.name}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2.5 text-[var(--soft)]">
          <a href={p.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} aria-label={`${p.title} live site`} className="transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--fg)]">
            <Globe className="size-4" />
          </a>
          <a href={p.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} aria-label={`${p.title} repository`} className="transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--fg)]">
            <GitHubIcon className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--muted)] uppercase">{children}</span>
);

function ProjectModal({ project: p, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      <motion.button
        type="button"
        aria-label="Close project details"
        onClick={onClose}
        className="fixed inset-0 cursor-default bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 25, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg)] shadow-2xl"
      >
        <div className="flex shrink-0 items-center justify-between border-b border-[var(--line)] px-5 py-4 sm:px-7">
          <div className="flex items-center gap-2">
            <Label>Project</Label>
            {p.timeline && (
              <>
                <span className="text-[var(--soft)]">/</span>
                <Label>{p.timeline}</Label>
              </>
            )}
          </div>
          <button type="button" onClick={onClose} aria-label="Close project details" className="flex size-8 cursor-pointer items-center justify-center rounded-md border border-[var(--line)] text-[var(--muted)] transition-colors hover:bg-[var(--hover)] hover:text-[var(--fg)]">
            <X className="size-4" />
          </button>
        </div>

        <div className="min-h-0 overflow-y-auto overscroll-contain">
          <div className="relative aspect-[16/7] w-full overflow-hidden border-b border-[var(--line)] bg-[var(--chip)]">
            <Image src={p.image} alt={p.title} fill sizes="896px" className="object-cover" />
          </div>

          <div className="border-b border-[var(--line)] p-6 sm:p-8">
            <div className="mb-5 flex flex-wrap gap-2">
              {p.categories.map((c) => (
                <span key={c} className="rounded-md border border-[var(--line)] bg-[var(--chip)] px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-[var(--muted)] uppercase">
                  {c}
                </span>
              ))}
            </div>
            <h2 id="project-modal-title" className="text-3xl font-medium tracking-[-0.035em] text-[var(--fg)] sm:text-4xl">
              {p.title}
            </h2>
            <p className="mt-1 font-mono text-[12px] text-[var(--soft)]">{p.tagline}</p>
            <p className="mt-4 max-w-3xl text-[14px] leading-7 text-[var(--muted)]">{p.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[var(--fg)] px-4 py-2.5 text-[12px] font-medium text-[var(--bg)] transition-opacity hover:opacity-80">
                Live Demo <ArrowUpRight className="size-3.5" />
              </a>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--chip)] px-4 py-2.5 text-[12px] font-medium text-[var(--fg)] transition-colors hover:bg-[var(--hover)]">
                <GitHubIcon className="size-4" /> Source <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-[1fr_260px]">
            <div className="border-b border-[var(--line)] sm:border-r sm:border-b-0">
              <div className="border-b border-[var(--line)] px-6 py-4 sm:px-8">
                <Label>Features</Label>
              </div>
              <div className="space-y-5 p-6 sm:p-8">
                {p.features?.map((f) => (
                  <div key={f.title}>
                    <h4 className="text-[14px] font-semibold text-[var(--fg)]">{f.title}</h4>
                    <p className="mt-1 text-[13.5px] leading-7 text-[var(--muted)]">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="border-b border-[var(--line)] px-6 py-4 sm:px-7">
                <Label>Tech Stack</Label>
              </div>
              <div className="flex flex-wrap gap-2 p-6 sm:p-7">
                {p.tech.map((t) => (
                  <span key={t.name} className="flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--chip)] px-2.5 py-2 text-[11px] text-[var(--fg)]">
                    {t.icon}
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[var(--line)] px-6 py-4 sm:px-8">
            <span className="font-mono text-[9px] tracking-[0.18em] text-[var(--soft)] uppercase">
              {p.title} · {p.role}
            </span>
            <Link href={`/projects/${p.slug}`} className="inline-flex items-center gap-1 text-[11px] text-[var(--muted)] transition-colors hover:text-[var(--fg)]">
              Full case study <ArrowUpRight className="size-3" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);
  const shown = tab === "All" ? projects : projects.filter((p) => p.categories.includes(tab));

  return (
    <>
      <div id="projects">
        <SectionHeader
          title="Projects"
          aside={
            <div className="flex gap-1 rounded-lg border border-[var(--line)] bg-[var(--chip)] p-0.5">
              {TABS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`cursor-pointer rounded-md px-2.5 py-1 text-[11px] font-medium transition-all duration-200 ${
                    tab === t ? "bg-[var(--fg)] font-semibold text-[var(--bg)] shadow-sm" : "text-[var(--muted)] hover:text-[var(--fg)]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          }
        />
        <Shell className="px-6 py-6 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {shown.map((p) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="cursor-pointer"
                  onClick={() => setActive(p)}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Shell>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>{active && <ProjectModal project={active} onClose={() => setActive(null)} />}</AnimatePresence>,
          document.body,
        )}
    </>
  );
}
