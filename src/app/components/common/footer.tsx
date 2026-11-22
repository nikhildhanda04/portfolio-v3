"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell, GapBand, SectionHeader } from "./Layout";
import ContactForm from "../landingpage/ContactForm";
import { site } from "@/app/data/site";

export function Footer() {
  const [time, setTime] = useState("");
  const [quote, setQuote] = useState(0);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", { timeZone: site.timezone, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const clock = setInterval(tick, 1000);
    const quotes = setInterval(() => setQuote((q) => (q + 1) % site.quotes.length), 6000);
    return () => {
      clearInterval(clock);
      clearInterval(quotes);
    };
  }, []);

  return (
    <footer className="w-full">
      <GapBand h="h-12" />
      <SectionHeader title="Scrolled Too Far" />
      <Shell className="px-6 py-10 sm:px-8">
        <div className="text-center">
          <p className="text-[14px] text-[var(--muted)]">
            If you&apos;ve read this far, you might be interested in collaborating or building something great.
          </p>
          <a
            href={site.socials.email}
            className="group mt-5 inline-flex items-center gap-2 rounded-lg bg-[var(--fg)] px-5 py-2.5 text-[13px] font-semibold text-[var(--bg)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Let&apos;s Talk
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
        <div className="mx-auto mt-10 max-w-xl">
          <ContactForm rows={4} />
        </div>
      </Shell>

      <GapBand className="border-t border-[var(--line)]" />
      <div className="w-full border-y border-[var(--line)]">
        <Shell className="flex min-h-[160px] flex-col items-center justify-center bg-[var(--bg)] px-8 py-12 text-center select-none">
          <div className="flex min-h-[140px] w-full max-w-[580px] flex-col items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={quote}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <span className="font-serif text-4xl leading-none text-[var(--soft)]">&ldquo;</span>
                <p className="-mt-2 max-w-md font-serif text-[20px] leading-snug text-[var(--fg)] italic sm:text-[22px]">
                  {site.quotes[quote].text}
                </p>
                <p className="mt-4 font-mono text-[10px] font-bold tracking-[0.3em] text-[var(--soft)] uppercase">
                  — {site.quotes[quote].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Shell>
      </div>

      <GapBand h="h-5" />
      <div className="w-full border-t border-[var(--line)]">
        <Shell className="px-6 py-8 pb-24 text-center sm:px-8">
          <p className="text-[14.5px] text-[var(--muted)]">
            Designed &amp; Developed by <span className="font-semibold text-[var(--fg)]">{site.name}</span>
          </p>
          <p className="mt-1.5 font-mono text-[12px] text-[var(--soft)]">© {new Date().getFullYear()} All rights reserved.</p>
          <p className="mt-2.5 flex items-center justify-center gap-2 font-mono text-[12px] text-[var(--soft)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {site.location} · {time || "IST"}
          </p>
        </Shell>
      </div>
    </footer>
  );
}
