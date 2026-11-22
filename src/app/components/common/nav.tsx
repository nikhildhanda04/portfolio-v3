"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Sun, Moon, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell } from "./Layout";
import { site } from "@/app/data/site";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function ThemeButton({ size }: { size: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = !mounted || resolvedTheme !== "light";

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const root = document.documentElement;
    root.style.setProperty("--theme-x", `${r.left + r.width / 2}px`);
    root.style.setProperty("--theme-y", `${r.top + r.height / 2}px`);
    const next = dark ? "light" : "dark";
    if (!document.startViewTransition) return setTheme(next);
    document.startViewTransition(() => flushSync(() => setTheme(next)));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={`grid ${size} cursor-pointer place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-all duration-300 hover:rotate-45 hover:text-[var(--fg)]`}
    >
      {dark ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
    </button>
  );
}

export function Nav({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const searchBtn = (size: string) => (
    <button
      type="button"
      onClick={onOpenPalette}
      aria-label="Search Command Palette"
      className={`grid ${size} cursor-pointer place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-all duration-300 hover:text-[var(--fg)]`}
    >
      <Search className="size-3.5" />
    </button>
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 mx-auto backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "mt-2 w-[763px] max-w-[calc(100%-24px)] border border-[var(--line)] bg-[var(--bg)]/90 shadow-2xl"
            : "mt-0 w-full border-b border-[var(--line)] bg-[var(--bg)]/85"
        }`}
      >
        <Shell className="flex items-center justify-between px-6 py-4 sm:px-8">
          <a href="#" className="font-serif text-xl tracking-wide text-[var(--fg)] transition-opacity hover:opacity-80">
            {site.firstName}
          </a>

          <nav className="hidden items-center gap-5 text-[13px] text-[var(--muted)] sm:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="group relative transition-colors hover:text-[var(--fg)]">
                {label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
            {searchBtn("size-7")}
            <ThemeButton size="size-7" />
          </nav>

          <div className="flex items-center gap-3 sm:hidden">
            {searchBtn("size-8")}
            <ThemeButton size="size-8" />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle Mobile Menu"
              className="grid size-8 cursor-pointer place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)]"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </Shell>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute top-full left-0 z-50 w-full overflow-hidden border-b border-[var(--line)] bg-[var(--bg)] shadow-lg sm:hidden"
            >
              <div className="flex flex-col space-y-4 px-6 py-6 font-serif text-lg">
                {NAV_LINKS.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="border-b border-dashed border-[var(--line)] pb-2.5 text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <div className="h-[64px]" />
    </>
  );
}
