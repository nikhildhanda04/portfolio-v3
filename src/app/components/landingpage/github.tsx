"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Shell, SectionHeader } from "../common/Layout";
import { site } from "@/app/data/site";

const HEAT_OPACITY = [0.07, 0.25, 0.45, 0.7, 1];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

type Day = { date: string; count: number; level: number };

export function GithubActivity() {
  const { username } = site.github;
  const [cells, setCells] = useState<(number | null)[]>(() => Array(53 * 7).fill(0));
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: { contributions: Day[]; total: { lastYear: number } }) => {
        if (!d.contributions?.length) return;
        // pad so the first column starts on the right weekday
        const pad = new Date(d.contributions[0].date).getDay();
        setCells([...Array(pad).fill(null), ...d.contributions.map((c) => c.level)]);
        setTotal(d.total?.lastYear ?? d.contributions.reduce((a, c) => a + c.count, 0));
      })
      .catch(() => {}); // keep the empty grid
  }, [username]);

  const now = new Date().getMonth();
  const months = Array.from({ length: 12 }, (_, i) => MONTHS[(now + 1 + i) % 12]);

  return (
    <div id="github">
      <SectionHeader
        title="GitHub Activity"
        aside={
          <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--muted)] transition-colors hover:text-[var(--fg)]">
            @{username} <ExternalLink size={12} />
          </a>
        }
      />
      <Shell className="px-6 py-6 sm:px-8">
        <div className="overflow-x-auto pb-2">
          <div className="min-w-[640px]">
            <div className="mb-1.5 flex justify-between pr-8 font-mono text-[10px] text-[var(--soft)]">
              {months.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
              {cells.map((lvl, i) =>
                lvl === null ? (
                  <span key={i} className="size-[10px]" />
                ) : (
                  <span key={i} className="size-[10px] rounded-[2px] bg-[var(--fg)] transition-transform duration-150 hover:scale-125" style={{ opacity: HEAT_OPACITY[lvl] }} />
                ),
              )}
            </div>
            <div className="mt-2.5 flex items-center justify-between font-mono text-[11px] text-[var(--muted)]">
              <span>{total === null ? "Loading contributions…" : `${total} contributions in the last year`}</span>
              <span className="flex items-center gap-1.5">
                Less
                {HEAT_OPACITY.map((o) => (
                  <span key={o} className="size-[10px] rounded-[2px] bg-[var(--fg)]" style={{ opacity: o }} />
                ))}
                More
              </span>
            </div>
          </div>
        </div>
      </Shell>
    </div>
  );
}
