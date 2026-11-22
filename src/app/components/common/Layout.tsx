import React from "react";

export function Shell({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-full max-w-[760px] border-x border-dashed border-[var(--line)] ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeader({
  title,
  aside,
}: {
  title: string;
  aside?: React.ReactNode;
}) {
  return (
    <div className="relative w-full border-y border-[var(--line)] bg-stripes">
      <Shell className="bg-[var(--bg)]">
        {/* crosshair dots where the shell meets the header borders */}
        <span className="absolute top-0 left-0 z-20 h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 bg-[var(--fg)] opacity-40" />
        <span className="absolute top-0 right-0 z-20 h-[3px] w-[3px] translate-x-1/2 -translate-y-1/2 bg-[var(--fg)] opacity-40" />
        <span className="absolute bottom-0 left-0 z-20 h-[3px] w-[3px] -translate-x-1/2 translate-y-1/2 bg-[var(--fg)] opacity-40" />
        <span className="absolute bottom-0 right-0 z-20 h-[3px] w-[3px] translate-x-1/2 translate-y-1/2 bg-[var(--fg)] opacity-40" />

        <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-3 sm:px-8">
          <h2 className="font-serif text-2xl tracking-wide text-[var(--fg)]">{title}</h2>
          {aside}
        </div>
      </Shell>
    </div>
  );
}

export function GapBand({ h = "h-7", className = "" }: { h?: string; className?: string }) {
  return (
    <div className={`relative w-full bg-stripes ${h} ${className}`}>
      <Shell className="h-full bg-[var(--bg)]" />
    </div>
  );
}
