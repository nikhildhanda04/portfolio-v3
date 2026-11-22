"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shell, SectionHeader } from "../common/Layout";
import { site } from "@/app/data/site";

export function Experience() {
  return (
    <div id="experience">
      <SectionHeader title="Experience" />
      <Shell>
        {site.experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`px-6 py-6 transition-colors duration-200 hover:bg-[var(--hover)] sm:px-8 ${i > 0 ? "border-t border-[var(--line)]" : ""}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
              <h3 className="flex items-center gap-2 text-[15.5px] font-semibold text-[var(--fg)]">
                <span className="relative size-8 shrink-0 overflow-hidden rounded-lg border border-[var(--line)] bg-white">
                  <Image src={job.logo} alt={job.company} fill sizes="32px" className="object-contain p-1" />
                </span>
                {job.role}
                <span className="text-[var(--soft)]">·</span>
                <span className="text-[var(--muted)]">{job.company}</span>
              </h3>
              <span className="font-mono text-[11px] text-[var(--soft)]">{job.period}</span>
            </div>
            <ul className="mt-3 max-w-2xl space-y-1.5 sm:pl-10 text-[13.5px] leading-relaxed text-[var(--muted)]">
              {job.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[var(--soft)]">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </Shell>
    </div>
  );
}
