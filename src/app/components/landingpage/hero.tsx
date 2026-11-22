"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, Eye } from "lucide-react";
import { Shell } from "../common/Layout";
import { site } from "@/app/data/site";

function useVisitors() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const counted = sessionStorage.getItem("hasCounted");
    const base = "https://api.counterapi.dev/v1/projects/nikhildhanda-vercel-app/counters/visitors/";
    fetch(counted ? base : `${base}up`)
      .then((r) => r.json())
      .then((d) => {
        if (!d?.count) return;
        setCount(866 + d.count);
        sessionStorage.setItem("hasCounted", "true");
      })
      .catch(() => {});
  }, []);

  return count;
}

export function Hero({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const visitors = useVisitors();

  useEffect(() => {
    const t = setInterval(() => setTitleIndex((i) => (i + 1) % site.titles.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <div id="hero">
      {/* Cover banner */}
      <Shell>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          className="relative h-48 w-full overflow-hidden border-b border-[var(--line)] sm:h-56"
        >
          <Image src={site.bannerImage} alt="Cover" fill priority sizes="760px" className="object-cover" />
        </motion.div>
      </Shell>

      {/* Avatar & identity */}
      <Shell className="px-6 py-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left"
        >
          <div className="flex flex-col items-center gap-5 sm:flex-row">
            <div className="group relative size-20 shrink-0 overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--chip)] shadow-md">
              <Image src={site.profileImage} alt={site.name} fill priority sizes="80px" className="object-cover" />
              {/* CRT scanline overlay */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-[0.18] transition-opacity group-hover:opacity-30">
                <div className="animate-scanline absolute inset-0 h-1 bg-white/20 blur-[1px]" />
              </div>
            </div>

            <div>
              <h1 className="text-glitch font-serif text-3xl leading-none tracking-tight text-[var(--fg)] sm:text-[38px]">
                {site.name}
              </h1>
              <div className="mt-1 h-[20px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={titleIndex}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="font-mono text-[13px] text-[var(--muted)]"
                  >
                    {site.titles[titleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
              <p className="mt-1 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-mono text-[11px] text-[var(--soft)] sm:justify-start">
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="shrink-0" /> {site.location}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Eye size={12} className="shrink-0" />
                  {visitors ? visitors.toLocaleString() : "..."} views
                </span>
              </p>
            </div>
          </div>

          <button
            onClick={onOpenPalette}
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--chip)] px-3 py-1.5 font-mono text-[11px] text-[var(--muted)] shadow-sm transition-colors hover:border-[var(--soft)] hover:text-[var(--fg)]"
          >
            <Search size={14} />
            <span>⌘K</span>
          </button>
        </motion.div>
      </Shell>
    </div>
  );
}
