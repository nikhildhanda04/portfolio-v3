"use client";

import { useEffect, useState } from "react";
import { User, Mail, FolderKanban, BriefcaseBusiness, Wrench } from "lucide-react";
import { GitHubIcon } from "./icons";

const ITEMS = [
  { id: "about", label: "About", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "github", label: "GitHub", icon: GitHubIcon },
];

export function SideIndex() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 180;
      const hit = ITEMS.find(({ id }) => {
        const el = document.getElementById(id);
        return el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight;
      });
      setActive(hit?.id ?? "");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside className="group fixed top-[24vh] left-[calc(50%+400px)] z-30 hidden w-10 transition-[width] duration-300 ease-out hover:w-[170px] xl:block">
      <div className="mb-2 h-6 overflow-hidden px-2 whitespace-nowrap">
        <span className="font-mono text-[10px] font-medium tracking-[0.12em] text-[var(--soft)] uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          On this page
        </span>
      </div>
      <nav className="flex flex-col gap-[2px]">
        {ITEMS.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            title={label}
            className={`group/item flex h-8 w-full items-center gap-2.5 overflow-hidden rounded-md px-2 text-[12px] whitespace-nowrap transition-all duration-200 ${
              active === id ? "bg-[var(--hover)] text-[var(--fg)]" : "text-[var(--soft)] hover:bg-[var(--hover)] hover:text-[var(--fg)]"
            }`}
          >
            <Icon className="size-[15px] shrink-0" />
            <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:max-w-[120px] group-hover:opacity-100">{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
