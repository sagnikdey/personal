"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Sun, Moon, Layers, Zap, Star, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, type Testimonial } from "./testimonials";

// ─── Icons ────────────────────────────────────────────────────────────────────

function SDLogo({ isDark }: { isDark: boolean }) {
  const fill = isDark ? "#F0F0F0" : "#202020";
  return (
    <svg
      className="w-[44px] h-[37px] md:w-[55px] md:h-[46px]"
      viewBox="0 0 844 704"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sagnik Dey logo"
    >
      <path d="M272.051 109.449C286.203 108.709 300.545 109.034 314.87 109.359C326.006 109.612 337.132 109.865 348.15 109.617C364.807 109.242 381.271 109.147 397.932 109.15L460.803 109.578C464.864 109.583 469.091 109.548 473.393 109.512C485.792 109.41 498.819 109.302 510.334 110.135C560.597 113.27 608.554 132.334 647.249 164.566C697.032 205.796 727.974 265.446 733.008 329.889C739.123 394.312 718.862 458.461 676.854 507.685C641.49 549.8 596.974 578.224 542.837 590.271C533.758 592.292 525.942 592.94 517.196 593.665C515.649 593.793 514.071 593.924 512.454 594.065C512.22 579.254 512.315 563.99 512.409 548.84C512.459 540.775 512.509 532.742 512.509 524.827L512.016 474.97C524.057 471.917 531.842 469.74 543.323 464.259C573.227 449.661 596.099 423.771 606.898 392.295C617.773 361.45 615.737 327.52 601.252 298.196C585.447 265.711 559.391 244.496 525.485 232.655C502.098 224.488 481.758 224.743 458.688 225.033C454.655 225.084 450.538 225.135 446.306 225.143L368.625 225.1L286.144 224.961C282.76 224.964 279.16 224.865 275.439 224.756L274.74 224.735C259.059 224.274 241.343 223.753 228.572 230.132C218.702 235.015 211.231 243.687 207.863 254.171C203.872 266.418 205.322 278.883 211.073 290.284C223.555 313.862 245.269 316.37 269.219 315.22C278.956 314.752 288.955 315.041 298.948 315.33C307.133 315.567 315.316 315.803 323.346 315.624C342.241 315.267 360.192 314.982 379.019 317.242C429.804 323.336 473.905 360.417 484.405 411.165C487.527 426.253 487.352 443.344 487.186 459.46C487.15 462.969 487.115 466.433 487.114 469.819L487.266 534.385L487.564 572.829C487.568 573.815 487.58 574.944 487.592 576.163C487.653 581.842 487.734 589.48 487.132 593.745C474.803 593.296 460.747 593.397 447.322 593.495C441.53 593.537 435.853 593.579 430.485 593.575L315.629 593.6C310.016 593.593 300.636 593.558 289.888 593.517C289.88 593.517 289.871 593.517 289.862 593.517C266.841 593.431 237.552 593.321 225.54 593.408C225.304 593.436 149.04 602.583 149.04 540.179C149.04 478.68 183.539 480.024 195.04 480.005C214.025 479.973 340.74 479.931 341.041 479.93C354.315 479.88 364.788 478 374.83 468.114C382.311 460.749 385.998 451.718 385.856 441.151C385.76 430.521 381.418 420.372 373.799 412.961C362.355 402.01 347.429 402.503 332.682 402.991C328.402 403.133 324.136 403.274 319.975 403.135C306.014 402.667 292.077 402.75 278.143 402.833C264.736 402.912 251.328 402.992 237.902 402.582C204.511 401.561 175.637 388.864 151.649 365.534C125.274 340.19 110.264 305.26 110.03 268.682C109.207 226.875 125.346 186.514 154.77 156.801C180.999 130.35 215.598 113.827 252.656 110.053C257.468 109.552 264.127 109.505 269.531 109.468C270.408 109.461 271.253 109.457 272.051 109.449Z" fill={fill} />
      <path d="M382.006 251.003H489.006C489.006 286.503 489.006 334.504 489.006 357.003C470.616 335.161 463.005 323.501 436.283 310.21C381.818 288.502 350 301.503 350 279.502C350 267.002 349.924 273.553 350 261.004C350.066 250.004 354.508 251.003 382.006 251.003Z" fill={fill} />
      <path d="M0 602V102C0 45.667 45.667 0 102 0V45L101.264 45.005C70.123 45.399 45 70.766 45 102V602L45.005 602.736C45.396 633.632 70.368 658.604 101.264 658.995L102 659H742C773.234 659 798.601 633.877 798.995 602.736L799 602V102C799 70.52 773.48 45 742 45V0C798.333 0 844 45.667 844 102V602C844 658.333 798.333 704 742 704H102C45.667 704 0 658.333 0 602ZM742 0V45H102V0H742Z" fill={fill} />
    </svg>
  );
}

function MenuIcon({ isDark }: { isDark: boolean }) {
  const stroke = isDark ? "#F0F0F0" : "#202020";
  return (
    <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 44 44" fill="none">
      <rect x="1.5" y="1.5" width="41" height="41" rx="7.5" stroke={stroke} strokeWidth="3" />
      <line x1="11" y1="15" x2="33" y2="15" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="11" y1="22" x2="33" y2="22" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="11" y1="29" x2="33" y2="29" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

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

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved === "dark" || (!saved && prefersDark);
    setIsDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0f0f0f] flex items-center justify-between px-5 md:px-8 py-4 md:py-5 border-b border-black/5 dark:border-white/10 transition-colors duration-300">
      <SDLogo isDark={isDark} />
      <div className="flex items-center gap-4 md:gap-5">
        <button
          onClick={toggle}
          aria-label="Toggle dark mode"
          className="text-[#202020] dark:text-[#F0F0F0] hover:opacity-60 transition-opacity"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button aria-label="Open menu">
          <MenuIcon isDark={isDark} />
        </button>
      </div>
    </nav>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

interface ProjectCardProps {
  number: string;
  title: string;
  tags: string[];
}

function ProjectCard({ number, title, tags }: ProjectCardProps) {
  return (
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
            { label: "TWITTER", href: "https://twitter.com/sagnikdoesstuff" },
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
            className="font-quattrocento font-bold text-[#202020] dark:text-[#BEBEBE] tracking-[-0.04em] leading-relaxed mb-10 transition-colors"
            style={{ fontSize: "clamp(13px, 3.6vw, 16px)" }}
          >
            Product Design Manager with 15+ years of experience leading UX/UI, design systems, and front-end collaboration across enterprise, healthcare, and startup environments in India, Malaysia, and the US. </p>

<p className="font-quattrocento font-bold text-[#202020] dark:text-[#BEBEBE] tracking-[-0.04em] leading-relaxed mb-10 transition-colors"
            style={{ fontSize: "clamp(13px, 3.6vw, 16px)" }}>I specialize in building scalable design systems, conducting end-to-end UX research, and translating complex requirements into intuitive, high-impact product experiences for web and mobile platforms. At 7-Eleven Global Solution Center – India, I partner closely with product and engineering to drive design strategy, improve DesignOps, and mentor designers and developers while breaking silos between teams. 

          </p>

          {/* Project cards */}
          <div className="flex flex-col gap-3">
            <ProjectCard number="01" title="Tawazon Redesign *coming soon*" tags={["Case Studies", "Website"]} />
            <ProjectCard number="02" title="QuickStop Mobile App *coming soon*" tags={["Case Studies", "Mobile App"]} />
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
            { label: "TWITTER", href: "https://twitter.com/sagnikdoesstuff" },
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
            className="font-quattrocento font-bold text-[#202020] dark:text-[#BEBEBE] tracking-[-0.04em] leading-relaxed max-w-[520px] mb-12 transition-colors"
            style={{ fontSize: "clamp(18px, 1.4vw, 20px)" }}
          >
            Product Design Manager with 15+ years of experience leading UX/UI, design systems, and front-end collaboration across enterprise, healthcare, and startup environments in India, Malaysia, and the US. 
          </p>
          <p className="font-quattrocento font-bold text-[#202020] dark:text-[#BEBEBE] tracking-[-0.04em] max-w-[520px] leading-relaxed mb-10 transition-colors"
            style={{ fontSize: "clamp(18px, 3.6vw, 16px)" }}>I specialize in building scalable design systems, conducting end-to-end UX research, and translating complex requirements into intuitive, high-impact product experiences for web and mobile platforms. At 7-Eleven Global Solution Center – India, I partner closely with product and engineering to drive design strategy, improve DesignOps, and mentor designers and developers while breaking silos between teams. 

          </p>

          <div className="flex flex-col gap-4 max-w-[520px]">
            <ProjectCard number="01" title="Tawazon Redesign *coming soon*" tags={["Case Studies", "Website"]} />
            <ProjectCard number="02" title="QuickStop MObile App *coming soon*" tags={["Case Studies", "Mobile App"]} />
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
      <p className="flex-1 text-[#202020] dark:text-[#DEDEDE] text-[17px] italic leading-[1.55] transition-colors">
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
        className="max-w-[900px] space-y-6 md:space-y-10 text-[#1a1a1a] dark:text-[#AAAAAA] leading-tight transition-colors"
        style={{ fontSize: "clamp(16px, 2.1vw, 34px)" }}
      >
        <p>
          Over the past decade and a half, this journey has gone from pushing
          pixels to pushing product strategy—proof that spending too much time in
          Figma can accidentally turn you into a people and process person. It
          began in the world of UI and frontend development, handcoding HTML and
          CSS and discovering that if something looked broken, it was usually a
          missing semicolon… or the designer.
        </p>
        <p>
          Curiosity about how and why people actually use products led deeper
          into SaaS and UX, where user research, prototyping, and
          cross-functional debates over &apos;just one more iteration&apos; became part of
          daily life. Working on data-heavy, digitally-native, business-critical
          products made it clear that good design is less about Dribbble shots
          and more about quietly fixing the things that used to make users
          rage-click.
        </p>
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
