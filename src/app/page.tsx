"use client";

import { useEffect, useState } from "react";
import { Nav } from "./components/common/nav";
import { SideIndex } from "./components/common/SideIndex";
import { CommandPalette } from "./components/common/CommandPalette";
import { Footer } from "./components/common/footer";
import { Hero } from "./components/landingpage/hero";
import { About } from "./components/landingpage/about";
import { Contact } from "./components/landingpage/contact";
import { Projects } from "./components/landingpage/projects";
import { Experience } from "./components/landingpage/experience";
import { TechStack } from "./components/landingpage/techstack";
import { GithubActivity } from "./components/landingpage/github";

export default function Home() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const openPalette = () => setPaletteOpen(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Nav onOpenPalette={openPalette} />
      <SideIndex />
      <main className="relative z-10">
        <Hero onOpenPalette={openPalette} />
        <About />
        <Contact />
        <Projects />
        <Experience />
        <TechStack />
        <GithubActivity />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
      <div className="bottom-blur" aria-hidden="true" />
    </div>
  );
}
