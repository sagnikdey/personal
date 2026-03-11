"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layers, Zap, Star, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, type Testimonial } from "./testimonials";
import { Navbar } from "@/components/site-nav";

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
      <path d="M11 3H17V9" stroke="#FF522F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 3L9 11" stroke="#FF522F" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 5H4C3.45 5 3 5.45 3 6V16C3 16.55 3.45 17 4 17H14C14.55 17 15 16.55 15 16V11"
        stroke="#FF522F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

interface ProjectCardProps {
  number: string;
  title: string;
  tags: string[];
  href?: string;
}

function ProjectCard({ number, title, tags, href }: ProjectCardProps) {
  const card = (
    <div className="relative overflow-hidden rounded-3xl bg-black dark:bg-[#1c1c1c] px-5 md:px-6 py-7 md:py-9 flex items-end justify-between h-[180px] md:h-[240px] cursor-pointer hover:opacity-90 transition-opacity">
      <div className="flex flex-col justify-between h-full">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span key={tag}
              className="text-[10px] md:text-[11px] font-semibold tracking-wide text-white/70 border border-white/25 rounded px-2 md:px-2.5 py-0.5 md:py-1 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="font-quattrocento font-bold text-white text-lg md:text-2xl tracking-tight">
          {title}
        </p>
      </div>
      <span
        className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 select-none leading-none"
        style={{ fontSize: "clamp(72px, 18vw, 152px)", color: "rgba(255,255,255,0.22)" }}
      >
        {number}
      </span>
    </div>
  );
  return href ? <Link href={href}>{card}</Link> : card;
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

const PHOTO_SRC =
  "https://workers.paper.design/file-assets/01KJPG9EESD97PW396KB97XRK4/01KJRXBXE575ZP1Y9H5PRGBY4H.jpg";

function HeroSection() {
  return (
    // On mobile: single column, stacked. On md+: side-by-side with right panel.
    <section className="relative bg-[#F5F5F5] dark:bg-[#111111] overflow-hidden transition-colors duration-300">

      {/* ══════════════════ MOBILE LAYOUT (hidden on md+) ══════════════════ */}
      <div className="block md:hidden pt-[76px]">

        {/* Content block */}
        <div className="px-6 pt-8 pb-16">

          {/* Photo thumbnail */}
          <div
            className="relative mb-6 overflow-hidden rounded-2xl"
            style={{
              width: "42%",
              aspectRatio: "326 / 257",
              outline: "2px solid #e8e8e8",
              outlineOffset: "-2px",
            }}
          >
            <Image
              src={PHOTO_SRC}
              alt="Sagnik Dey"
              fill
              className="object-cover object-top"
              style={{ filter: "grayscale(100%)" }}
              priority
            />
          </div>

          {/* Small heading */}
          <p
            className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] mb-4 tracking-[-0.04em] transition-colors"
            style={{ fontSize: "22px", lineHeight: 1 }}
          >
            Hi, I&apos;m Sagnik — a...
          </p>

          {/* Main heading */}
          <h1
            className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] tracking-[-0.04em] leading-[0.92] mb-6 transition-colors"
            style={{ fontSize: "clamp(38px, 10vw, 48px)" }}
          >
            product designer &amp; creative strategist
          </h1>

          {/* Social links */}
          <div className="flex items-center gap-4 mb-6">
            {[
            { label: "LINKEDIN", href: "https://linkedin.com/in/sagnikdey" },
            //{ label: "TWITTER", href: "https://twitter.com/sagnikdoesstuff" },
            { label: "RESUME", href: "/Sagnik_Resume_Product Design.pdf" },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#FF522F] font-semibold text-[11px] tracking-wide underline underline-offset-2 decoration-[1.5px] hover:opacity-70 transition-opacity"
            >
                <ExternalLinkIcon />
                {label}
              </a>
            ))}
          </div>

          {/* Bio */}
          <p
            className="font-quattrocento font-normal text-[#202020] dark:text-[#BEBEBE] tracking-[-0.04em] leading-relaxed mb-10 transition-colors"
            style={{ fontSize: "clamp(18px, 3.6vw, 20px)" }}
          >
            Product Design Manager with 15+ years of experience leading UX/UI, design systems, and front-end collaboration across enterprise, healthcare, and startup environments in India, Malaysia, and the US. </p>

<p className="font-quattrocento  text-[#202020] dark:text-[#BEBEBE] tracking-[-0.04em] leading-relaxed mb-10 transition-colors"
            style={{ fontSize: "clamp(18px, 3.6vw, 20px)" }}>I specialize in building scalable design systems, conducting end-to-end UX research, and translating complex requirements into intuitive, high-impact product experiences for web and mobile platforms. At 7-Eleven Global Solution Center – India, I partner closely with product and engineering to drive design strategy, improve DesignOps, and mentor designers and developers while breaking silos between teams. 

          </p>

          {/* Project cards */}
          <div className="flex flex-col gap-3">
            <ProjectCard number="01" title="DOC – Health Services: The Providers" tags={["Case Study", "Healthcare"]} href="/portfolio/doc-health-services" />
            <ProjectCard number="02" title="DOC – Health Services: The Users" tags={["Case Study", "Healthcare"]} href="/portfolio/doc-health-services-users" />
          </div>
        </div>
      </div>

      {/* ══════════════════ DESKTOP LAYOUT (hidden below md) ══════════════════ */}
      <div className="hidden md:flex min-h-screen">

        {/* Left content column */}
        <div className="flex-1 pt-[180px] pl-[6.6vw] pr-12 pb-24 z-10">
          <p
            className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] mb-3 tracking-[-0.04em] transition-colors"
            style={{ fontSize: "clamp(22px, 2.4vw, 38px)", lineHeight: 1 }}
          >
            Hi, I&apos;m Sagnik — a...
          </p>

          <h1
            className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] tracking-[-0.04em] leading-[0.92] mb-8 transition-colors"
            style={{ fontSize: "clamp(42px, 5.4vw, 82px)" }}
          >
            product designer &amp;{" "}
            <br />
            creative strategist
          </h1>

          <div className="flex items-center gap-6 mb-8">
            {[
            { label: "LINKEDIN", href: "https://linkedin.com/in/sagnikdey" },
            //{ label: "TWITTER", href: "https://twitter.com/sagnikdoesstuff" },
            { label: "RESUME", href: "/Sagnik_Resume_Product Design.pdf" },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#FF522F] font-semibold text-sm tracking-wide underline underline-offset-2 decoration-[1.5px] hover:opacity-70 transition-opacity"
            >
                <ExternalLinkIcon />
                {label}
              </a>
            ))}
          </div>

          <p
            className="font-quattrocento  text-[#202020] dark:text-[#BEBEBE] tracking-[-0.04em] leading-relaxed max-w-[620px] mb-12 transition-colors"
            style={{ fontSize: "clamp(18px, 1.4vw, 20px)" }}
          >
            Product Design Manager with 15+ years of experience leading UX/UI, design systems, and front-end collaboration across enterprise, healthcare, and startup environments in India, Malaysia, and the US. 
          </p>
          <p className="font-quattrocento  text-[#202020] dark:text-[#BEBEBE] tracking-[-0.04em] max-w-[620px] leading-relaxed mb-10 transition-colors"
            style={{ fontSize: "clamp(18px, 1.4vw, 20px)" }}>I specialize in building scalable design systems, conducting end-to-end UX research, and translating complex requirements into intuitive, high-impact product experiences for web and mobile platforms. I partner closely with product and engineering to drive design strategy, improve DesignOps, and mentor designers and developers while breaking silos between teams. 

          </p>

          <div className="flex flex-col gap-4 max-w-[520px]">
            <ProjectCard number="01" title="DOC – Health Services: The Providers" tags={["Case Study", "Healthcare"]} href="/portfolio/doc-health-services" />
            <ProjectCard number="02" title="DOC – Health Services: The Users" tags={["Case Study", "Healthcare"]} href="/portfolio/doc-health-services-users" />
          </div>
        </div>

        {/* Right: page-bg top + black bottom + floating photo */}
        <div className="relative shrink-0" style={{ width: "clamp(240px, 36.5vw, 820px)" }}>
          {/* Black occupies only the bottom 50% */}
          <div
            className="absolute inset-x-0 bottom-0 bg-black dark:bg-[#f5f5f5] transition-colors duration-300"
            style={{ top: "0%", borderBottomLeftRadius: "24px" }}
          />
          {/* Photo — center at 50% = exact top of black → half above, half below */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-[32px] overflow-hidden"
            style={{ top: "10%", height: "80%",left: "4vw", width: "80%" }}
          >
            <Image
              src={PHOTO_SRC}
              alt="Sagnik Dey"
              fill
              className="object-cover object-top"
              style={{ filter: "grayscale(100%)" }}
              priority
            />
          </div>
        </div>
      </div>

    </section>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.FC<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Layers,
  Zap,
  Star,
  MessageSquare,
};

function QuoteText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-bold italic">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function Avatar({ name, image }: { name: string; image?: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  if (image) {
    return (
      <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-black/10 dark:ring-white/10">
        <Image
          src={image}
          alt={name}
          width={44}
          height={44}
          className="w-full h-full object-cover grayscale"
        />
      </div>
    );
  }

  return (
    <div className="w-11 h-11 rounded-full bg-[#1e1e1e] dark:bg-[#333] flex items-center justify-center shrink-0 ring-2 ring-black/10 dark:ring-white/10">
      <span className="text-white text-[13px] font-bold tracking-wider">{initials}</span>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const Icon = ICON_MAP[testimonial.icon] ?? Zap;
  return (
    <article className="snap-start shrink-0 w-[min(82vw,360px)] md:w-[380px] bg-white dark:bg-[#1a1a1a] rounded-2xl p-12 flex flex-col gap-8 transition-colors duration-300 shadow-sm">
      {/* Icon badge */}
      {/* <div className="w-[60px] h-[60px] bg-black dark:bg-white rounded-2xl flex items-center justify-center">
        <Icon size={26} strokeWidth={1.75} className="text-white dark:text-black" />
      </div> */}

      {/* Quote */}
      <p className="font-quattrocento flex-1 text-[#202020] dark:text-[#DEDEDE] text-[18px] italic leading-[1.55] transition-colors">
        <QuoteText text={testimonial.quote} />
      </p>

      {/* Attribution */}
      <div className="flex items-center gap-3.5">
        <Avatar name={testimonial.name} image={testimonial.image} />
        <div>
          <p className="text-[#111111] dark:text-[#F0F0F0] text-[13px] font-bold tracking-[0.12em] uppercase transition-colors">
            {testimonial.name}
          </p>
          <p className="text-[#888888] dark:text-[#777] text-[13px] transition-colors">
            {testimonial.title}
          </p>
        </div>
      </div>
    </article>
  );
}

function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const CARD_W = 380 + 20; // card width + gap

  const scroll = (dir: -1 | 1) => {
    trackRef.current?.scrollBy({ left: dir * CARD_W, behavior: "smooth" });
  };

  return (
    <section className="bg-[#F5F5F5] dark:bg-[#111111] pt-16 md:pt-24 pb-20 md:pb-32 transition-colors duration-300">
      {/* Header row */}
      <div className="flex items-end justify-between px-6 md:px-[6.6vw] mb-10 md:mb-12">
        <h2
          className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] tracking-[-0.04em] transition-colors"
          style={{ fontSize: "clamp(40px, 5.4vw, 82px)", lineHeight: 1 }}
        >
          what people say
        </h2>

        {/* Nav arrows — hidden on mobile (touch-scroll instead) */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-[#202020]/20 dark:border-white/20 flex items-center justify-center text-[#202020] dark:text-[#EFEFEF] hover:bg-[#202020] hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-[#202020]/20 dark:border-white/20 flex items-center justify-center text-[#202020] dark:text-[#EFEFEF] hover:bg-[#202020] hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Scroll track with fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 z-10 bg-linear-to-r from-[#F5F5F5] dark:from-[#111111] to-transparent transition-colors" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-linear-to-l from-[#F5F5F5] dark:from-[#111111] to-transparent transition-colors" />

        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-6 md:px-[6.6vw] pb-4"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
          {/* Trailing spacer so last card clears the right fade */}
          <div className="shrink-0 w-2 md:w-[calc(6.6vw-20px)]" />
        </div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section className="bg-[#F5F5F5] dark:bg-[#111111] px-6 md:px-[6.6vw] pt-16 md:pt-24 pb-10 md:pb-16 transition-colors duration-300">
      <h2
        className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] tracking-[-0.04em] mb-8 md:mb-16 transition-colors"
        style={{ fontSize: "clamp(40px, 5.4vw, 82px)", lineHeight: 1.6 }}
      >
        about me
      </h2>

      <div
        className="font-quattrocento  max-w-[900px] space-y-6 md:space-y-10 text-[#1a1a1a] dark:text-[#AAAAAA] leading-relaxed transition-colors"
        style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
      >
        <p>
        Focused on UX/UI, design systems, design leadership, and AI‑led front‑end development, I sit at the intersection of product, design, and engineering, helping teams make better decisions, ship faster, and build experiences that are both user‑centered and technically realistic.</p>
        <p>Over nearly two decades, I’ve worked across in‑house, agency, and freelance roles, designing for enterprise platforms, marketplaces, and healthcare and consumer products. My path has taken me from front‑end designer and UI roles at companies like Tangelo, Tata Consultancy Services, and Bazaarvoice into senior UX and product design positions, and eventually into leading teams and practices. Along the way, I’ve built a toolkit that spans UX research, interaction design, system thinking, and implementation awareness, which lets me stay involved from early discovery to production‑ready delivery.</p>
        <p>As a Product Design Manager, I partner closely with product managers, engineers, and designers to align short‑term priorities with a clear long‑term product vision. I facilitate workshops and design reviews, connect dependencies across products and services, and champion accessible, data‑informed design decisions at every stage of the process. A big part of my work is breaking down silos between designers and developers—turning design systems into real, reusable code, optimizing Jira workflows, and building processes that make collaboration the default instead of an exception.</p>
        <p>Mentorship and design culture are core to how I operate. I coach designers and developers on both craft and communication, helping them grow while scaling design practices through documented frameworks, playbooks, and decision‑making guides. I care deeply about building teams that share patterns, critique generously, and see design systems as living products rather than static libraries.</p>
        <p>My freelance and independent work has kept me close to the realities of different types of organizations—from startups and healthcare products like DoctorOnCall to self‑employed UX and product design engagements where I’ve had to wear multiple hats at once. Those experiences trained me to quickly frame problems, prioritize impact, and adapt my process to fit the context rather than forcing a one‑size‑fits‑all approach.</p>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] dark:bg-[#111111] transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
    </main>
  );
}
