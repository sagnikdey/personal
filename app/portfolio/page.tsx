"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site-nav";

interface PortfolioItem {
  number: string;
  title: string;
  tags: string[];
  year: string;
  client: string;
  href: string;
  available: boolean;
}

const portfolioItems: PortfolioItem[] = [
  {
    number: "01",
    title: "Tawazon Redesign",
    tags: ["UX Research", "Design System", "Web"],
    year: "",
    client: "Tawazon",
    href: "/portfolio/tawazon-redesign",
    available: true,
  },
  {
    number: "02",
    title: "DOC – Health Services: The Providers",
    tags: ["Market Research", "User Interviews", "Wireframes"],
    year: "",
    client: "DoctorOnCall",
    href: "/portfolio/doc-health-services",
    available: true,
  },
  {
    number: "03",
    title: "DOC – Health Services: The Users",
    tags: ["User Research", "User Personas", "Wireframes", "Hi-Fi Mocks"],
    year: "",
    client: "DoctorOnCall",
    href: "/portfolio/doc-health-services-users",
    available: true,
  },
  {
    number: "04",
    title: "QuickStop Mobile App",
    tags: ["Mobile", "End-to-End UX", "iOS"],
    year: "2024",
    client: "Personal Project",
    href: "#",
    available: false,
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-site-canvas transition-colors duration-300">
      <Navbar />

      {/* Two-column layout */}
      <div className="flex pt-[65px] md:pt-[76px]">

        {/* ── Left: content ── */}
        <div className="flex-1 px-6 md:pl-[6.6vw] md:pr-[5vw] pt-8 md:pt-14 pb-28 min-w-0">

          {/* Hero heading */}
          <div className="pb-8 md:pb-14 border-b border-black/10 dark:border-white/10">
            <p
              className="type-portfolio-eyebrow font-quattrocento font-bold text-site-fg tracking-[0.14em] uppercase mb-4 opacity-40 transition-colors"
            >
              selected work
            </p>
            <h1
              className="type-portfolio-title font-quattrocento font-bold text-site-fg tracking-[-0.04em] leading-[0.88] transition-colors"
            >
              portfolio
            </h1>
          </div>

          {/* List */}
          <div>
            {portfolioItems.map((item) => {
              const inner = (
                <div
                  className={`group py-7 md:py-10 border-b border-black/10 dark:border-white/10 flex items-center gap-5 md:gap-8 transition-colors ${
                    item.available
                      ? "cursor-pointer hover:bg-black/2.5 dark:hover:bg-white/2.5 -mx-6 md:-mx-[6.6vw] px-6 md:px-[6.6vw]"
                      : "cursor-default opacity-40"
                  }`}
                >
                  {/* Number */}
                  <span
                    className="type-portfolio-item-number font-quattrocento font-bold text-site-fg opacity-[0.18] leading-none shrink-0 transition-colors"
                  >
                    {item.number}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2
                      className="type-portfolio-item-title font-quattrocento font-bold text-site-fg tracking-[-0.03em] leading-tight mb-2.5 transition-colors"
                    >
                      {item.title}
                      {!item.available && (
                        <span className="ml-3 text-[11px] font-semibold tracking-wide uppercase align-middle opacity-60">
                          coming soon
                        </span>
                      )}
                    </h2>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] md:text-[11px] font-semibold tracking-wide uppercase text-site-fg/50 border border-site-fg/15 rounded px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="hidden md:flex flex-col items-end gap-0.5 shrink-0 text-right">
                    <span className="text-[12px] font-semibold text-site-label transition-colors">
                      {item.client}
                    </span>
                    <span className="text-[12px] text-site-fg/30 transition-colors">
                      {item.year}
                    </span>
                  </div>

                  {item.available && (
                    <ArrowRight
                      size={18}
                      className="text-site-fg/25 group-hover:text-site-accent group-hover:translate-x-1 transition-all shrink-0"
                    />
                  )}
                </div>
              );

              return item.available ? (
                <Link key={item.number} href={item.href}>
                  {inner}
                </Link>
              ) : (
                <div key={item.number}>{inner}</div>
              );
            })}
          </div>

          {/* Footer note */}
          <p
            className="type-portfolio-footer-note mt-16 md:mt-24 font-quattrocento text-site-fg/30 tracking-[-0.03em] transition-colors"
          >
            More case studies in progress. Check back soon.
          </p>
        </div>

        {/* ── Right: black panel — sticky, full viewport height ── */}
        <div
          className="hidden md:block shrink-0 bg-site-surface-inverse w-site-portfolio-rail sticky top-0 h-screen rounded-bl-3xl transition-colors duration-300"
        />
      </div>
    </main>
  );
}
