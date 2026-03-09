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
    title: "DOC – Health Services: The Providers",
    tags: ["Market Research", "User Interviews", "Wireframes"],
    year: "2022",
    client: "DoctorOnCall",
    href: "/portfolio/doc-health-services",
    available: true,
  },
  {
    number: "02",
    title: "DOC – Health Services: The Users",
    tags: ["User Research", "User Personas", "Wireframes", "Hi-Fi Mocks"],
    year: "2022",
    client: "DoctorOnCall",
    href: "/portfolio/doc-health-services-users",
    available: true,
  },
  {
    number: "03",
    title: "Tawazon Redesign",
    tags: ["UX Research", "Design System", "Web"],
    year: "2024",
    client: "7-Eleven",
    href: "#",
    available: false,
  },
  {
    number: "04",
    title: "QuickStop Mobile App",
    tags: ["Mobile", "End-to-End UX", "iOS & Android"],
    year: "2024",
    client: "7-Eleven",
    href: "#",
    available: false,
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] dark:bg-[#111111] transition-colors duration-300">
      <Navbar />

      {/* Two-column layout */}
      <div className="flex pt-[65px] md:pt-[76px]">

        {/* ── Left: content ── */}
        <div className="flex-1 px-6 md:pl-[6.6vw] md:pr-[5vw] pt-8 md:pt-14 pb-28 min-w-0">

          {/* Hero heading */}
          <div className="pb-8 md:pb-14 border-b border-black/10 dark:border-white/10">
            <p
              className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] tracking-[0.14em] uppercase mb-4 opacity-40 transition-colors"
              style={{ fontSize: "11px" }}
            >
              selected work
            </p>
            <h1
              className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] tracking-[-0.04em] leading-[0.88] transition-colors"
              style={{ fontSize: "clamp(52px, 8vw, 120px)" }}
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
                    className="font-quattrocento font-bold text-[#202020] dark:text-white leading-none shrink-0 transition-colors"
                    style={{ fontSize: "clamp(22px, 3vw, 42px)", opacity: 0.18 }}
                  >
                    {item.number}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2
                      className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] tracking-[-0.03em] leading-tight mb-2.5 transition-colors"
                      style={{ fontSize: "clamp(17px, 2.4vw, 34px)" }}
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
                          className="text-[10px] md:text-[11px] font-semibold tracking-wide uppercase text-[#202020]/50 dark:text-white/40 border border-black/15 dark:border-white/15 rounded px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="hidden md:flex flex-col items-end gap-0.5 shrink-0 text-right">
                    <span className="text-[12px] font-semibold text-[#202020]/40 dark:text-white/30 transition-colors">
                      {item.client}
                    </span>
                    <span className="text-[12px] text-[#202020]/30 dark:text-white/20 transition-colors">
                      {item.year}
                    </span>
                  </div>

                  {item.available && (
                    <ArrowRight
                      size={18}
                      className="text-[#202020]/25 dark:text-white/25 group-hover:text-[#FF522F] group-hover:translate-x-1 transition-all shrink-0"
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
            className="mt-16 md:mt-24 font-quattrocento font-bold text-[#202020]/30 dark:text-white/20 tracking-[-0.03em] transition-colors"
            style={{ fontSize: "clamp(13px, 1.2vw, 18px)" }}
          >
            More case studies in progress. Check back soon.
          </p>
        </div>

        {/* ── Right: black panel — sticky, full viewport height ── */}
        <div
          className="hidden md:block shrink-0 bg-black dark:bg-[#f0f0f0] sticky top-0 h-screen rounded-bl-3xl transition-colors duration-300"
          style={{ width: "clamp(200px, 26vw, 450px)" }}
        />
      </div>
    </main>
  );
}
