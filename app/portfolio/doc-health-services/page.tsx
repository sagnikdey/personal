"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site-nav";

const tags = ["Market Research", "User Interviews", "Wireframes"];

export default function DocHealthServicesPage() {
  return (
    <main className="bg-[#F5F5F5] dark:bg-[#111111] transition-colors duration-300">
      <Navbar />

      {/* ══ Two-column layout: scrolling left + sticky right panel ══ */}
      <div className="flex pt-[65px] md:pt-[76px]">

        {/* ── Left: all content ── */}
        <div className="flex-1 min-w-0">

          {/* Hero */}
          <div className="px-6 md:pl-[6.6vw] md:pr-[5vw] pt-8 md:pt-14">

            {/* Back */}
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-widest uppercase text-[#202020]/40 dark:text-white/30 hover:text-[#FF522F] dark:hover:text-[#FF522F] transition-colors mb-8 md:mb-12"
            >
              <ArrowLeft size={13} strokeWidth={2.5} />
              Portfolio
            </Link>

            {/* Tag badges */}
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white dark:bg-[#1e1e1e] text-[#202020] dark:text-white text-[13px] md:text-[16px] font-medium rounded-2xl px-3.5 py-1.5 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1
              className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] tracking-[-0.04em] leading-[0.88] mb-8 md:mb-12 transition-colors"
              style={{ fontSize: "clamp(34px, 5.8vw, 94px)" }}
            >
              DOC –{" "}
              <br className="hidden md:block" />
              Health Services:{" "}
              <br className="hidden md:block" />
              The Providers
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap gap-x-10 gap-y-2">
              <div>
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#202020]/40 dark:text-white/30 mb-0.5 transition-colors">
                  Team
                </p>
                <p className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] text-[15px] transition-colors">
                  3 — Business, Junior Designer, Me
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#202020]/40 dark:text-white/30 mb-0.5 transition-colors">
                  Client
                </p>
                <p className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] text-[15px] transition-colors">
                  DoctorOnCall
                </p>
              </div>
            </div>
          </div>

          {/* ══ CASE STUDY BODY ══ */}
          <div className="px-6 md:px-[6.6vw] pb-32">
            <div className="max-w-[760px]">

          {/* ── Overview ── */}
          <Section label="Overview">
            <BodyText>
              DoctorOnCall is a dedicated website designed to provide doctor
              consultation, order medications, and facilitate healthcare
              professionals in showcasing their services, expertise, and
              specialties to a wider audience. This case study delves into the
              user-centered design process behind the creation of Health Services
              — a subset of their platform dedicated to helping healthcare
              professionals build credibility and connect with patients.
            </BodyText>
          </Section>

          <Divider />

          {/* ── The Business Plan ── */}
          <Section label="The Business Plan">
            <BodyText>
              In the healthcare industry, many skilled professionals and
              institutions struggle to effectively market and promote their
              services. There is a need for a user-friendly platform that allows
              healthcare practitioners to create comprehensive profiles,
              highlight specialised services and qualifications, and connect with
              patients seeking care.
            </BodyText>
            <BodyText className="mt-5">
              DOC had an existing system that was rigid and manual — controlled
              entirely by in-house admins via a CMS. The legacy process was
              rudimentary at best and created a significant bottleneck. The
              business case was clear: give providers the power to create and
              manage their own content, freeing up internal resources and
              automating the entire flow.
            </BodyText>

            <div className="my-8 md:my-10 grid md:grid-cols-2 gap-4">
              <ProcessBlock label="Current Process" dark>
                The clinic sends descriptions of their packages and contents via
                Google Sheets and email to the Healthcare division. A DOC admin
                then manually inputs the content and builds each package through
                the CMS.
              </ProcessBlock>
              <ProcessBlock label="Updated Process">
                Providers create an account on the DOC platform and build their
                own packages from a master item list maintained by DOC. If an
                item is missing, they can request it be added — directly through
                the platform.
              </ProcessBlock>
            </div>

            <CaseImage
              src="/images/Screenshot_2023-08-15_at_3.17.41_PM.png"
              alt="Process flow diagram"
              caption="Business process flow — from manual admin entry to provider self-service"
            />
          </Section>

          <Divider />

          {/* ── Step 2: Acceptance ── */}
          <Section label="Step 2 — The Acceptance">
            <BodyText>
              After the business defined the idea, my next step was to validate
              that enough providers would actually adopt the new process. I
              joined business stakeholders on visits to top providers to discuss
              the change firsthand.
            </BodyText>
            <BodyText className="mt-5">
              I applied <strong>Atomic Design</strong> principles — breaking
              packages (molecules/organisms) down to their smallest atoms. This
              required extensive back-and-forth with SMEs to confirm feasibility.
              I designed process flows, walked stakeholders through user journeys,
              and used paper prototypes to show intended screens and interaction
              patterns.
            </BodyText>
            <BodyText className="mt-5">
              I interviewed around <strong>15 providers</strong> — 12 were
              enthusiastic about the new process, while the remaining 3 were
              somewhat apprehensive. The consistent feedback was relief: they
              wouldn&apos;t have to wait on us (the bottleneck) to create or update
              their products. Offering guided onboarding support in the early
              stages gave the hesitant providers the added confidence they
              needed.
            </BodyText>
          </Section>

          <Divider />

          {/* ── Step 3: Problems ── */}
          <Section label="Step 3 — Solving Problems">

            <ProblemLabel>Problem 1 — Creating &amp; Publishing a Custom Package</ProblemLabel>
            <BodyText className="mt-4">
              Working with in-house SMEs and clinic partners to arrive at an
              optimum package-creation flow:
            </BodyText>
            <ul className="mt-4 space-y-2 list-none">
              {[
                "DOC admin defines the base item library; providers pick items and assemble their packages.",
                "Providers can name, price, edit, and add add-ons to any package.",
                "If a needed item doesn&apos;t exist, providers submit a request for it to be added to the database.",
              ].map((text, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#FF522F] shrink-0" />
                  <span
                    className="font-quattrocento font-bold text-[#202020] dark:text-[#BEBEBE] tracking-[-0.03em] leading-relaxed transition-colors"
                    style={{ fontSize: "clamp(14px, 1.1vw, 17px)" }}
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                </li>
              ))}
            </ul>

            <div className="mt-8 md:mt-10 space-y-6">
              <CaseImage
                src="/images/Screen_Shot_2022-11-05_at_1.20.17_PM.png"
                alt="Package creation wireframe"
                caption="Early wireframe — package creation flow"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <CaseImage
                  src="/images/Packages.png"
                  alt="Packages UI"
                  caption="Packages listing screen"
                />
                <CaseImage
                  src="/images/Search_Items.png"
                  alt="Search items UI"
                  caption="Item search & selection"
                />
              </div>
            </div>

            <ProblemLabel className="mt-12 md:mt-16">
              Problem 2 — Bulk Upload for Large Catalogues
            </ProblemLabel>
            <BodyText className="mt-4">
              After testing the package upload module with clinics, a new concern
              surfaced: some providers had hundreds of packages to migrate. They
              needed a way to bulk-upload an entire catalogue at once. I returned
              to the drawing board and designed a feature where providers receive
              a pre-formatted Excel template, fill in each package&apos;s field
              details, and upload the file — creating all packages in a single
              action.
            </BodyText>

            <CaseImage
              src="/images/Packages-List_view.png"
              alt="Packages list view with bulk upload"
              caption="Packages list view — bulk upload entry point"
              className="mt-8 md:mt-10"
            />
          </Section>

          <Divider />

          {/* ── Results ── */}
          <Section label="The Results">
            <BodyText>
              We shared a walkthrough video with all providers ahead of launch.
              Despite the UI not being as polished as I had envisioned, the
              adoption rate far exceeded expectations — only{" "}
              <strong>10% of providers</strong> required any additional
              hand-holding after go-live.
            </BodyText>
            <BodyText className="mt-5">
              Today, while DoctorOnCall undergoes a broader UI refresh, providers
              continue to onboard independently and the package catalogue grows
              without any admin intervention.
            </BodyText>
            <BodyText className="mt-5">
              Beyond the Health Services module, I was also involved in several
              other areas of the marketplace platform:{" "}
              <strong>
                Redemption module, Commissions module, Discounts &amp; Category
                management.
              </strong>
            </BodyText>
          </Section>

            </div>
          </div>
        </div>

        {/* ── Right: sticky black panel — full viewport height ── */}
        <div
          className="hidden md:block shrink-0 bg-black dark:bg-[#f0f0f0] sticky top-0 h-screen rounded-bl-3xl transition-colors duration-300"
          style={{ width: "clamp(200px, 26vw, 450px)" }}
        />
      </div>
    </main>
  );
}

// ─── Local layout components ───────────────────────────────────────────────

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-12 md:pt-16">
      <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#202020]/40 dark:text-white/30 mb-4 md:mb-5 transition-colors">
        {label}
      </p>
      {children}
    </section>
  );
}

function BodyText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-quattrocento font-bold text-[#202020] dark:text-[#BEBEBE] tracking-[-0.03em] leading-relaxed transition-colors ${className}`}
      style={{ fontSize: "clamp(15px, 1.2vw, 18px)" }}
    >
      {children}
    </p>
  );
}

function ProblemLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] tracking-[-0.03em] leading-tight transition-colors ${className}`}
      style={{ fontSize: "clamp(18px, 1.8vw, 26px)" }}
    >
      {children}
    </h3>
  );
}

function ProcessBlock({
  label,
  children,
  dark = false,
}: {
  label: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 md:p-6 ${
        dark
          ? "bg-[#202020] dark:bg-[#1c1c1c]"
          : "bg-white dark:bg-[#1a1a1a]"
      } transition-colors`}
    >
      <p
        className={`text-[11px] font-bold tracking-[0.14em] uppercase mb-3 ${
          dark ? "text-white/40" : "text-[#202020]/40 dark:text-white/30"
        }`}
      >
        {label}
      </p>
      <p
        className={`font-quattrocento font-bold tracking-[-0.03em] leading-relaxed text-[14px] md:text-[15px] ${
          dark ? "text-white/80" : "text-[#202020] dark:text-[#BEBEBE]"
        } transition-colors`}
      >
        {children}
      </p>
    </div>
  );
}

function CaseImage({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`${className}`}>
      <div className="relative w-full overflow-hidden rounded-2xl bg-white dark:bg-[#1a1a1a] transition-colors">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto object-contain"
          style={{ display: "block" }}
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-[12px] font-semibold tracking-wide text-[#202020]/40 dark:text-white/30 transition-colors">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Divider() {
  return (
    <hr className="border-none border-t border-black/10 dark:border-white/10 mt-0 transition-colors" style={{ borderTopWidth: "1px" }} />
  );
}
