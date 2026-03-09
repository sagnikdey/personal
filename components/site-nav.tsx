"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

export function SDLogo({ isDark }: { isDark: boolean }) {
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

export function MenuIcon({ isDark }: { isDark: boolean }) {
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

export function Navbar() {
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
      <Link href="/" aria-label="Home">
        <SDLogo isDark={isDark} />
      </Link>
      <div className="flex items-center gap-4 md:gap-6">
        <Link
          href="/portfolio"
          className="hidden md:block text-[12px] font-bold tracking-[0.12em] uppercase text-[#202020] dark:text-[#F0F0F0] hover:opacity-50 transition-opacity"
        >
          Portfolio
        </Link>
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
