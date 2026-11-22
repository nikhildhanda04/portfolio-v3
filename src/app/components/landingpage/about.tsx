"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { Shell, SectionHeader } from "../common/Layout";
import { site } from "@/app/data/site";

const MAX_LIFT = 10; // px the hovered letter rises
const SPREAD = 3; // wave width in letters
const SCALE = [0, 2, 4, 7, 9]; // major pentatonic, any notes sound fine together

// ponytail: one bare oscillator per pop, no reverb/echo chain like the reference
function pop(ctx: AudioContext, index: number) {
  const step = SCALE[index % SCALE.length] + 12 * (Math.floor(index / SCALE.length) % 2);
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.value = 261.63 * 2 ** (step / 12);
  gain.gain.setValueAtTime(0.08, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);
  osc.connect(gain).connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.25);
}

function WaveText({ text, onLetter }: { text: string; onLetter: (i: number) => void }) {
  const [active, setActive] = useState<number | null>(null);
  let offset = 0; // running letter index across the paragraph

  return (
    <p onMouseLeave={() => setActive(null)}>
      {text.split(" ").map((word, w) => {
        const start = offset;
        offset += word.length + 1;
        return (
          <span key={w}>
            <span className="inline-block whitespace-nowrap">
              {word.split("").map((char, c) => {
                const index = start + c;
                let lift = 0;
                if (active !== null) {
                  const d = Math.abs(index - active);
                  lift = MAX_LIFT * Math.exp(-(d * d) / (2 * SPREAD * SPREAD));
                  if (lift < 0.4) lift = 0;
                }
                return (
                  <span
                    key={c}
                    className="inline-block"
                    onMouseEnter={() => {
                      setActive(index);
                      onLetter(index);
                    }}
                  >
                    <motion.span
                      className="inline-block"
                      animate={{ y: -lift }}
                      transition={{ type: "spring", stiffness: 500, damping: 15, mass: 0.5 }}
                    >
                      {char}
                    </motion.span>
                  </span>
                );
              })}
            </span>{" "}
          </span>
        );
      })}
    </p>
  );
}

export function About() {
  const [soundOn, setSoundOn] = useState(false);
  const ctx = useRef<AudioContext | null>(null);
  const last = useRef(0);

  const toggleSound = () => {
    ctx.current ??= new AudioContext(); // created on click to satisfy autoplay policy
    setSoundOn((s) => !s);
  };

  const onLetter = (i: number) => {
    const now = performance.now();
    if (!soundOn || !ctx.current || now - last.current < 40) return;
    last.current = now;
    pop(ctx.current, i);
  };

  return (
    <div id="about">
      <SectionHeader title="About" />
      <Shell className="relative space-y-4 px-6 py-7 sm:px-8">
        <button
          onClick={toggleSound}
          aria-label={soundOn ? "Mute hover sounds" : "Enable hover sounds"}
          aria-pressed={soundOn}
          className="absolute top-3 right-4 rounded-md p-1.5 text-[var(--soft)] transition-colors hover:bg-[var(--hover)] hover:text-[var(--muted)]"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={soundOn ? "on" : "off"}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.12 }}
              className="block"
            >
              {soundOn ? <Volume2 size={16} strokeWidth={1.75} /> : <VolumeX size={16} strokeWidth={1.75} />}
            </motion.span>
          </AnimatePresence>
        </button>

        {site.about.map((para, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex gap-2 pr-6 text-[14.5px] leading-relaxed text-[var(--muted)]"
          >
            <span className="font-mono text-[var(--soft)]">•</span>
            <WaveText text={para} onLetter={onLetter} />
          </motion.div>
        ))}
      </Shell>
    </div>
  );
}
