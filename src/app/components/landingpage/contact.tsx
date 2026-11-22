import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { Shell, SectionHeader } from "../common/Layout";
import { GitHubIcon, LinkedInIcon, XIcon } from "../common/icons";
import { site } from "@/app/data/site";

const LINKS = [
  { label: "GitHub", href: site.socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
  { label: "Twitter", href: site.socials.twitter, Icon: XIcon },
  { label: "Mail", href: site.socials.email, Icon: Mail },
  { label: "Resume", href: site.socials.resume, Icon: FileText },
];

export function Contact() {
  return (
    <div id="contact">
      <SectionHeader title="Contact" />
      <Shell>
        <div className="grid grid-cols-2 border-b border-[var(--line)] sm:grid-cols-5 sm:border-b-0">
          {LINKS.map(({ label, href, Icon }, idx) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`group flex items-center justify-center gap-2.5 border-[var(--line)] px-4 py-4 text-[13px] font-medium transition-colors duration-200 hover:bg-[var(--hover)] ${
                idx % 2 === 0 ? "border-r" : "border-r-0"
              } ${idx < 4 ? "border-b" : ""} sm:border-b-0 ${idx === LINKS.length - 1 ? "sm:border-r-0" : "sm:border-r"}`}
            >
              <span className="grid size-9 place-items-center rounded-lg border border-[var(--line)] bg-[var(--chip)] text-[var(--fg)]">
                <Icon className="size-4" />
              </span>
              <span className="text-[var(--muted)] transition-colors group-hover:text-[var(--fg)]">{label}</span>
              <ArrowUpRight className="size-3.5 text-[var(--soft)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--fg)]" />
            </a>
          ))}
        </div>
      </Shell>
    </div>
  );
}
