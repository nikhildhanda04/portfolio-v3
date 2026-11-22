"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CornerDownLeft } from "lucide-react";
import { site } from "@/app/data/site";

const ITEMS = [
  { group: "Sections", label: "About", href: "#about" },
  { group: "Sections", label: "Contact", href: "#contact" },
  { group: "Sections", label: "Projects", href: "#projects" },
  { group: "Sections", label: "Experience", href: "#experience" },
  { group: "Sections", label: "Tech Stack", href: "#skills" },
  { group: "Sections", label: "GitHub Activity", href: "#github" },
  { group: "Links", label: "GitHub", href: site.socials.github },
  { group: "Links", label: "LinkedIn", href: site.socials.linkedin },
  { group: "Links", label: "Twitter / X", href: site.socials.twitter },
  { group: "Links", label: "Email", href: site.socials.email },
  { group: "Links", label: "Resume", href: site.socials.resume },
];

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState(0);
  const results = ITEMS.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (open) {
      setQuery("");
      setSel(0);
    }
  }, [open]);

  const go = (href: string) => {
    onClose();
    if (href.startsWith("#")) document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    else window.open(href, href.startsWith("mailto:") ? "_self" : "_blank", "noopener");
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowDown") setSel((s) => Math.min(s + 1, results.length - 1));
    else if (e.key === "ArrowUp") setSel((s) => Math.max(s - 1, 0));
    else if (e.key === "Enter" && results[sel]) go(results[sel].href);
    else return;
    e.preventDefault();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center px-4 pt-[18vh]">
          <motion.div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.div
            role="dialog"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg)] shadow-2xl"
          >
            <div className="flex items-center gap-2.5 border-b border-[var(--line)] px-4">
              <Search className="size-4 text-[var(--soft)]" />
              <input
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSel(0);
                }}
                onKeyDown={onKey}
                placeholder="Type a command or search..."
                className="w-full bg-transparent py-3.5 text-[13.5px] text-[var(--fg)] outline-none placeholder:text-[var(--soft)]"
              />
              <kbd className="rounded border border-[var(--line)] bg-[var(--chip)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--soft)]">ESC</kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto p-2">
              {results.map((item, i) => (
                <li key={item.label}>
                  {(i === 0 || results[i - 1].group !== item.group) && (
                    <div className="px-2.5 pt-2 pb-1 font-mono text-[10px] tracking-[0.12em] text-[var(--soft)] uppercase">{item.group}</div>
                  )}
                  <button
                    type="button"
                    onMouseEnter={() => setSel(i)}
                    onClick={() => go(item.href)}
                    className={`flex w-full cursor-pointer items-center justify-between rounded-md px-2.5 py-2 text-left text-[13px] ${
                      sel === i ? "bg-[var(--hover)] text-[var(--fg)]" : "text-[var(--muted)]"
                    }`}
                  >
                    {item.label}
                    {sel === i && <CornerDownLeft className="size-3.5 text-[var(--soft)]" />}
                  </button>
                </li>
              ))}
              {!results.length && <li className="py-8 text-center font-mono text-[12px] text-[var(--soft)]">No results.</li>}
            </ul>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
