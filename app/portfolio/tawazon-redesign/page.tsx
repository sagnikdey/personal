"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/site-nav";

const tags = ["Heuristic Evaluation", "Competitive Research", "Information Architecture"];

export default function TawazonRedesignPage() {
  return (
    <main className="bg-site-canvas transition-colors duration-300">
      <Navbar />

      <div className="flex pt-[65px] md:pt-[76px]">

        {/* ── Left: all content ── */}
        <div className="flex-1 min-w-0">

          {/* Hero */}
          <div className="px-6 md:pl-[6.6vw] md:pr-[5vw] pt-8 md:pt-14 pb-14">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-widest uppercase text-site-label hover:text-site-accent transition-colors mb-8 md:mb-12"
            >
              <ArrowLeft size={13} strokeWidth={2.5} />
              Portfolio
            </Link>

            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-site-surface-tag text-site-fg text-sm md:text-base font-medium rounded-2xl px-3.5 py-1.5 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="type-case-hero-title font-quattrocento font-bold text-site-fg tracking-[-0.04em] leading-[0.88] mb-8 md:mb-12 transition-colors"
            >
              Tawazon{" "}
              
              Redesign
            </h1>

            <div className="flex flex-wrap gap-x-10 gap-y-2">
              <div>
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-site-label mb-0.5 transition-colors">
                  Role
                </p>
                <p className="font-quattrocento font-bold text-site-fg text-[15px] transition-colors">
                  Sole UX Researcher &amp; Designer
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-site-label mb-0.5 transition-colors">
                  Client
                </p>
                <p className="font-quattrocento font-bold text-site-fg text-[15px] transition-colors">
                  Tawazon Chemical Co. LLC
                </p>
              </div>
            </div>
          </div>

          {/* ══ Body ══ */}
          <div className="px-6 md:px-[6.6vw] pb-32">
            <div className="">

              {/* ── Overview ── */}
              <Section label="Overview">
                <BodyText>
                  Tawazon Chemical Co. LLC is a specialty chemical distributor headquartered
                  in Dubai, UAE — part of the Ghobash Group with 35+ years of operations across
                  40+ countries. This case study documents the UX research and redesign of
                  tawazon.com, taking it from a basic company brochure to a product-first,
                  self-service platform that matches the standards set by global competitors.
                </BodyText>
              </Section>

              <Divider />

              {/* ── Why the Redesign ── */}
              <Section label="Why the Redesign">
                <BodyText>
                  A heuristic evaluation using Nielsen&apos;s 10 Usability Heuristics scored
                  tawazon.com at <strong>5.8 out of 10</strong> — a full 3.1 points behind the
                  industry best-in-class (IMCD Group at 8.9/10). The evaluation uncovered{" "}
                  <strong>2 critical issues</strong>, 4 major issues, and 4 minor issues that
                  directly impact the site&apos;s ability to convert B2B chemical buyers.
                </BodyText>

                <div className="my-8 md:my-10 grid grid-cols-2 md:grid-cols-4 gap-3">
                  <ScoreCard value="5.8" label="UX Score" sublabel="out of 10" accent />
                  <ScoreCard value="2" label="Critical Issues" sublabel="blocking conversion" />
                  <ScoreCard value="4" label="Major Issues" sublabel="limiting usability" />
                  <ScoreCard value="−3.1" label="Gap vs Best" sublabel="IMCD at 8.9/10" accent />
                </div>

                <BodyText className="mt-6">
                  The two most critical failures are the <strong>complete absence of a product
                  catalog</strong> and the <strong>lack of any technical documentation</strong>{" "}
                  (TDS/SDS). These are baseline requirements for enterprise chemical procurement.
                  Without them, the site cannot complete the evaluation phase of any B2B purchase
                  cycle.
                </BodyText>

                <ExpandableContent>
                  <div className="mt-6 space-y-4">
                    <ScoringRow heuristic="H1" name="Visibility of system status" score={5} severity="Minor" />
                    <ScoringRow heuristic="H2" name="Real-world match" score={7} severity="Pass" />
                    <ScoringRow heuristic="H3" name="User control and freedom" score={4} severity="Major" />
                    <ScoringRow heuristic="H4" name="Consistency and standards" score={7} severity="Pass" />
                    <ScoringRow heuristic="H5" name="Error prevention" score={3} severity="Critical" />
                    <ScoringRow heuristic="H6" name="Recognition over recall" score={5} severity="Minor" />
                    <ScoringRow heuristic="H7" name="Flexibility and efficiency" score={3} severity="Critical" />
                    <ScoringRow heuristic="H8" name="Aesthetic and minimalist design" score={6} severity="Minor" />
                    <ScoringRow heuristic="H9" name="Error recovery" score={5} severity="Minor" />
                    <ScoringRow heuristic="H10" name="Help and documentation" score={2} severity="Critical" />
                  </div>

                  <SubHeading className="mt-10">Key Findings</SubHeading>

                  <ul className="mt-4 space-y-2.5 list-none">
                    {[
                      "No product search, filter system, or chemical catalog exists anywhere on the site — buyers cannot find specific chemicals by name or CAS number.",
                      "Zero technical documentation (TDS/SDS) — a prerequisite for the majority of B2B chemical procurement decisions.",
                      "Every CTA leads to a single generic contact form. No segment-specific inquiry, sample request, or quote flow exists.",
                      "No customer portal, digital procurement, or self-service path for repeat buyers.",
                      "English-only for a 40+ country audience spanning Arabic, French, Swahili, and Hindi-speaking markets.",
                      "The contact page returned a server error (500) during evaluation — the primary conversion mechanism has reliability issues.",
                      "Blog content targets consumer readers, not the procurement and R&D professionals who are the actual audience.",
                    ].map((text, i) => (
                      <BulletItem key={i}>{text}</BulletItem>
                    ))}
                  </ul>

                  <SubHeading className="mt-10">Competitive UX Positioning</SubHeading>
                  <BodyText className="mt-3">
                    Tawazon sits mid-table in the regional peer group — better than H.A.K.
                    and Kemipex aesthetically, but materially behind REDA in product information
                    depth and far behind the global tier (Brenntag, IMCD) in self-service capability.
                  </BodyText>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr>
                          {["Company", "UX Score", "Catalog", "TDS/SDS", "RFQ Flow"].map((h) => (
                            <th
                              key={h}
                              className="text-[10px] font-bold tracking-widest uppercase text-site-label pb-2.5 pr-4 transition-colors"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { company: "IMCD Group", score: "8.9", catalog: "Full", tds: "Yes", rfq: "Per product" },
                          { company: "Brenntag", score: "8.5", catalog: "Full + CAS", tds: "Yes", rfq: "Per product" },
                          { company: "REDA Chemicals", score: "5.5", catalog: "Partial", tds: "Partial", rfq: "Generic" },
                          { company: "Tawazon", score: "5.8", catalog: "None", tds: "None", rfq: "Generic" },
                          { company: "Kemipex", score: "5.0", catalog: "None", tds: "None", rfq: "Generic" },
                        ].map((row) => (
                          <tr key={row.company} className="border-t border-black/5 dark:border-white/5">
                            <td className={`py-2.5 pr-4 font-quattrocento text-sm tracking-[-0.02em] transition-colors ${row.company === "Tawazon" ? "text-site-accent" : "text-site-fg-body"}`}>
                              {row.company}
                            </td>
                            <td className="py-2.5 pr-4 font-quattrocento text-sm text-site-fg-body transition-colors">{row.score}</td>
                            <td className="py-2.5 pr-4 font-quattrocento text-sm text-site-fg-body transition-colors">{row.catalog}</td>
                            <td className="py-2.5 pr-4 font-quattrocento text-sm text-site-fg-body transition-colors">{row.tds}</td>
                            <td className="py-2.5 pr-4 font-quattrocento text-sm text-site-fg-body transition-colors">{row.rfq}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </ExpandableContent>
              </Section>

              <Divider />

              {/* ── Competitive Research ── */}
              <Section label="Competitive Research">
                <BodyText>
                  A comprehensive competitive analysis was conducted across{" "}
                  <strong>9 competitors</strong> — 3 global giants and 6 regional players —
                  spanning the Middle East, Africa, and Asia specialty chemical distribution
                  market. The research mapped each competitor&apos;s industry coverage,
                  geographic reach, capabilities, and threat level to Tawazon.
                </BodyText>

                <div className="my-8 md:my-10 space-y-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <CompetitorCard
                    name="Brenntag SE"
                    threat="Critical"
                    hq="Germany"
                    revenue="€15.1B"
                    countries="70+"
                    differentiator="World's largest chemical distributor. 10,000+ product portfolio, CO₂Xplorer carbon tracking tool."
                  />
                  <CompetitorCard
                    name="IMCD Group"
                    threat="Critical"
                    hq="Netherlands"
                    revenue="€4.7B"
                    countries="60+"
                    differentiator="80 in-house technical labs globally. EcoVadis Platinum rating (top 1%). Formulation co-creation."
                  />
                  <CompetitorCard
                    name="REDA Group"
                    threat="Critical"
                    hq="Saudi Arabia"
                    revenue="~$195M"
                    countries="30–40"
                    differentiator="Near-identical geographic focus to Tawazon. Multi-brand structure across 9+ verticals."
                  />
                </div>

                <ExpandableContent>
                  <SubHeading className="mt-2">Regional Competitors</SubHeading>

                  <div className="mt-4 space-y-3">
                    <CompetitorCard
                      name="Kemipex"
                      threat="High"
                      hq="Dubai, UAE"
                      countries="125 ports"
                      differentiator="Strong lubricants niche. Widest port coverage of regional peers. 25+ languages."
                    />
                    <CompetitorCard
                      name="H.A.K. Industrial Chemicals"
                      threat="High"
                      hq="Dubai, UAE"
                      countries="GCC+"
                      differentiator="Nearly identical product-industry overlap. Kanoo Group conglomerate backing."
                    />
                    <CompetitorCard
                      name="Tajchem"
                      threat="High"
                      hq="UAE"
                      countries="ME + Africa"
                      differentiator="Similar tenure and geographic scope. Broader lubricant and base oil coverage."
                    />
                    <CompetitorCard
                      name="RishiChem MidEast"
                      threat="Medium"
                      hq="Jebel Ali, Dubai"
                      countries="MENA"
                      differentiator="In-house Technical Applications Laboratory. 25+ supplier principals."
                    />
                    <CompetitorCard
                      name="BosTech Polymer"
                      threat="Medium"
                      hq="Dubai, UAE"
                      countries="UAE/GCC"
                      differentiator="Own polymer manufacturing capability. Climate-controlled hazmat storage."
                    />
                    <CompetitorCard
                      name="Environ Speciality Chemicals"
                      threat="Medium"
                      hq="RAK / Mumbai"
                      countries="India + ME"
                      differentiator="Deep India–ME corridor expertise. 45+ manufacturer principals."
                    />
                  </div>

                  <SubHeading className="mt-10">Where Tawazon Leads</SubHeading>
                  <ul className="mt-4 space-y-2.5 list-none">
                    {[
                      "Triple ISO certification (9001, 14001, 45001) — no regional competitor confirmed with all three.",
                      "8-segment industry breadth rivals IMCD's 8 business groups — exceptional for a private regional distributor.",
                      "Africa + SE Asia depth that Brenntag and IMCD don't match with local presence (6 subsidiaries).",
                      "Packaging and food additives as dedicated segments — among the least-contested niches analyzed.",
                    ].map((text, i) => (
                      <BulletItem key={i}>{text}</BulletItem>
                    ))}
                  </ul>

                  <SubHeading className="mt-10">Gaps and Risks</SubHeading>
                  <ul className="mt-4 space-y-2.5 list-none">
                    {[
                      "No in-house technical lab — IMCD's 80 labs and RishiChem's lab raise buyer expectations for formulation support.",
                      "No digital procurement platform — Brenntag offers digital tools; Tawazon has no e-commerce or digital ordering.",
                      "Revenue scale gap vs. global players limits supplier negotiating leverage and R&D funding.",
                      "REDA's multi-brand diversification creates cross-sell moats that Tawazon's single-brand model cannot easily replicate.",
                    ].map((text, i) => (
                      <BulletItem key={i}>{text}</BulletItem>
                    ))}
                  </ul>

                  <SubHeading className="mt-10">Strategic Recommendations</SubHeading>
                  <div className="mt-4 space-y-3">
                    {[
                      { num: "1", title: "Defend the REDA-Overlap Territory", desc: "Differentiate on ISO certifications, Ghobash Group credibility, and faster local delivery in East Africa and Indonesia." },
                      { num: "2", title: "Build a Technical Applications Lab", desc: "Even one regional lab — starting with coatings or construction — would close a critical capability gap." },
                      { num: "3", title: "Amplify the Triple ISO Differentiator", desc: "Front-and-centre in all marketing, proposals, and supplier conversations for regulated markets." },
                      { num: "4", title: "Invest in Digital Presence and SEO", desc: "Add technical datasheets, formulation guides, and searchable product catalogs to drive inbound B2B leads." },
                    ].map((rec) => (
                      <div key={rec.num} className="bg-site-surface-raised rounded-2xl px-5 py-4 transition-colors">
                        <div className="flex items-baseline gap-3 mb-1.5">
                          <span className="text-site-accent font-quattrocento font-bold text-[14px]">{rec.num}.</span>
                          <p className="font-quattrocento font-bold text-site-fg text-[14px] md:text-[15px] tracking-[-0.02em] transition-colors">
                            {rec.title}
                          </p>
                        </div>
                        <p className="font-quattrocento text-site-fg/70 text-sm tracking-[-0.02em] leading-relaxed pl-6 transition-colors">
                          {rec.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </ExpandableContent>
              </Section>

              <Divider />

              {/* ── Information Architecture ── */}
              <Section label="Information Architecture">
                <BodyText>
                  The proposed IA restructures tawazon.com from a brand-first brochure to a{" "}
                  <strong>product-first, self-service platform</strong>. Every structural change
                  traces directly to a heuristic finding, targeting an improvement from{" "}
                  <strong>5.8/10 to 8.3/10</strong> across Nielsen&apos;s 10 heuristics.
                </BodyText>

                <SubHeading className="mt-8">IA Design Principles</SubHeading>
                <div className="mt-4 space-y-3">
                  {[
                    { num: "1", text: "Buyers arrive with a product in mind, not a company in mind. The IA must be product-first and segment-specific — matching how B2B procurement actually works." },
                    { num: "2", text: "Documentation is the primary conversion blocker. TDS, SDS, and product specs must be top-level destinations, not buried in contact forms." },
                    { num: "3", text: "Self-service scales; manual contact does not. The redesign introduces product search, RFQ flows, and a customer portal to eliminate friction." },
                  ].map((p) => (
                    <div key={p.num} className="flex gap-4">
                      <span className="text-site-accent font-quattrocento font-bold text-[16px] md:text-[18px] mt-0.5 shrink-0">
                        {p.num}
                      </span>
                      <BodyText>{p.text}</BodyText>
                    </div>
                  ))}
                </div>

                <SubHeading className="mt-10">Key Structural Changes</SubHeading>
                <div className="mt-4 grid md:grid-cols-2 gap-3">
                  {[
                    { label: "Products", tag: "NEW", desc: "Searchable chemical catalog with CAS number lookup, TDS/SDS downloads, and per-product RFQ.", fixes: "H1, H6, H7" },
                    { label: "Resources", tag: "NEW", desc: "TDS library, SDS library, application guides, and FAQ — closing the documentation gap.", fixes: "H5, H10" },
                    { label: "Customer Portal", tag: "NEW", desc: "Login, RFQ submission & tracking, order history, document vault, account manager contact.", fixes: "H3, H7" },
                    { label: "Sustainability", tag: "NEW", desc: "ISO certifications with explanations, ESG roadmap, EcoVadis progress, annual report.", fixes: "H4, H10" },
                    { label: "Industries", tag: "ENHANCED", desc: "Uniform template across all 8 segments with segment-specific RFQ and principal cards.", fixes: "H4" },
                    { label: "Contact", tag: "ENHANCED", desc: "Enquiry type selector, regional office directory, inline validation, success/error states.", fixes: "H3, H9" },
                  ].map((item) => (
                    <IAChangeCard key={item.label} {...item} />
                  ))}
                </div>

                <ExpandableContent>
                  <SubHeading className="mt-8">Proposed Navigation</SubHeading>
                  <div className="mt-4 bg-site-surface-code rounded-2xl px-5 py-4 overflow-x-auto transition-colors">
                    <p className="font-mono text-sm md:text-base text-white/70 leading-relaxed whitespace-pre">
{`[Logo]  Industries ▾  Products  Resources  Suppliers  About  Sustainability  Media  [Search 🔍]  [AR | EN ▾]  [Portal]`}
                    </p>
                  </div>

                  <SubHeading className="mt-10">IA Score Improvement</SubHeading>
                  <div className="mt-4 space-y-2">
                    {[
                      { h: "H1", name: "Visibility of system status", before: 5, after: 8, change: "Site search + product catalog + carousel controls" },
                      { h: "H2", name: "Real-world match", before: 7, after: 9, change: "Segment-specific CTAs + named supplier cards" },
                      { h: "H3", name: "User control and freedom", before: 4, after: 8, change: "Customer portal + per-segment RFQ" },
                      { h: "H4", name: "Consistency and standards", before: 7, after: 9, change: "Uniform industry page template" },
                      { h: "H5", name: "Error prevention", before: 3, after: 8, change: "Product catalog + form validation" },
                      { h: "H6", name: "Recognition over recall", before: 5, after: 8, change: "CAS search + named suppliers" },
                      { h: "H7", name: "Flexibility and efficiency", before: 3, after: 8, change: "Customer portal + language switcher" },
                      { h: "H8", name: "Aesthetic and minimalist", before: 6, after: 8, change: "Focused homepage CTA + refined blog" },
                      { h: "H9", name: "Error recovery", before: 5, after: 8, change: "Custom 404 + inline validation" },
                      { h: "H10", name: "Help and documentation", before: 2, after: 9, change: "Resources hub: TDS + SDS + FAQ" },
                    ].map((row) => (
                      <IAScoreRow key={row.h} {...row} />
                    ))}
                  </div>

                  <SubHeading className="mt-10">Implementation Phases</SubHeading>
                  <div className="mt-4 space-y-3">
                    <PhaseBlock
                      phase="Phase 1"
                      timeline="0–3 months"
                      items={[
                        "Build /resources section: TDS and SDS library",
                        "Redesign contact page with enquiry routing",
                        "Add global site search",
                        "Standardise industry page template",
                        "Fix blog spam & pivot editorial to technical content",
                      ]}
                    />
                    <PhaseBlock
                      phase="Phase 2"
                      timeline="3–6 months"
                      items={[
                        "Build /products catalog with CAS number search",
                        "Add Arabic and French language support",
                        "Redesign Suppliers page with named cards",
                        "Launch Sustainability hub",
                        "Deploy segment-specific CTAs",
                      ]}
                    />
                    <PhaseBlock
                      phase="Phase 3"
                      timeline="6–12 months"
                      items={[
                        "Build Customer Portal: RFQ tracker + order history",
                        "Add Swahili, Bahasa Indonesia, Hindi",
                        "Develop application guides per segment",
                        "Integrate documentation with portal",
                        "Pursue EcoVadis certification",
                      ]}
                    />
                  </div>
                </ExpandableContent>
              </Section>

              <Divider />

              {/* ── Sitemap ── */}
              <Section label="Sitemap">
                <BodyText>
                  The proposed site map restructures tawazon.com from 5 top-level sections to{" "}
                  <strong>10 — adding Products, Resources, Sustainability, and Customer Portal</strong>{" "}
                  as entirely new destinations. The full map includes 90+ pages across 4 depth
                  levels, with each new or enhanced section mapped to the specific heuristic
                  it fixes.
                </BodyText>

                
                  <div className="mt-6 bg-site-surface-raised rounded-2xl px-5 py-5 overflow-x-auto transition-colors">
                    <p className="font-mono text-sm leading-[1.8] whitespace-pre">
{`tawazon.com (Homepage)
│
├── Industries (ENHANCED — H4)
│   ├── Coatings         ├── Plastics
│   ├── Inks             ├── Packaging
│   ├── Construction     ├── Fiberglass
│   ├── Rubber           └── Food Additives
│   └── [Uniform template: Overview · Products · Principals · RFQ]
│
├── Products (NEW — H1, H6, H7)
│   ├── Search & Filter (by name, CAS, segment, supplier)
│   └── Product Detail (specs · TDS · SDS · CoA · RFQ)
│
├── Resources (NEW — H5, H10)
│   ├── TDS Library      ├── Application Guides
│   ├── SDS Library      └── FAQ
│
├── Suppliers (ENHANCED — H2, H6)
│   ├── Filter by segment
│   ├── Supplier cards (name · country · scope)
│   └── Become a Supplier
│
├── About Us (ENHANCED)
│   ├── Who we are       ├── Ghobash Group
│   ├── MD message       ├── Global presence map
│   └── Certifications (ISO 9001 · 14001 · 45001)
│
├── Sustainability (NEW — H4, H10)
│   ├── ISO certifications    ├── EcoVadis progress
│   ├── ESG roadmap           └── Annual report
│
├── Media (ENHANCED — H8, H10)
│   ├── Technical Blog (formulation · regulatory · trends)
│   └── News & Events
│
├── Careers · Contact (ENHANCED — H3, H9)
│
└── Customer Portal (NEW — H3, H7)
    ├── Login / Register      ├── Order history
    ├── RFQ submission        ├── Document vault
    └── RFQ tracking          └── Account manager`}
                    </p>
                  </div>
                

                  <div className="mt-4">
                    <a
                      href="/html/tawazon-sitemap.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-site-surface-raised text-site-fg text-sm font-medium hover:opacity-75 transition-opacity border border-white/10"
                    >
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <path d="M11 3H17V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 3L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M9 5H4C3.45 5 3 5.45 3 6V16C3 16.55 3.45 17 4 17H14C14.55 17 15 16.55 15 16V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      View Full Sitemap
                    </a>
                  </div>

              </Section>

            </div>
          </div>
        </div>

        {/* ── Right: sticky black panel ── */}
        <div
          className="hidden md:block shrink-0 bg-site-surface-inverse w-site-portfolio-rail sticky top-0 h-screen rounded-bl-3xl transition-colors duration-300"
        />
      </div>
    </main>
  );
}

// ─── Local layout components ──────────────────────────────────────────────────

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="pt-12 md:pt-16">
      <p className="type-case-section-label uppercase text-site-label mb-4 md:mb-5 transition-colors">
        {label}
      </p>
      {children}
    </section>
  );
}

function BodyText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`text-site-fg-body tracking-[-0.03em] leading-relaxed transition-colors ${className}`}
    >
      {children}
    </p>
  );
}

function SubHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3
      className={`type-case-problem font-quattrocento font-bold text-site-fg tracking-[-0.03em] leading-tight transition-colors ${className}`}
    >
      {children}
    </h3>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-site-accent shrink-0" />
      <span
        className="text-site-fg-body tracking-[-0.03em] leading-relaxed transition-colors"
      >
        {children}
      </span>
    </li>
  );
}

function Divider() {
  return (
    <hr
      className="border-none border-t border-black/10 dark:border-white/10 mt-0 transition-colors"
    />
  );
}

function ExpandableContent({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-6">
      {expanded && <div>{children}</div>}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold tracking-wide text-site-accent hover:text-site-accent/80 transition-colors group"
      >
        {expanded ? "Show less" : "See more\u2026"}
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
}

function ScoreCard({
  value,
  label,
  sublabel,
  accent = false,
}: {
  value: string;
  label: string;
  sublabel: string;
  accent?: boolean;
}) {
  return (
    <div className="bg-site-surface-raised rounded-2xl px-4 py-4 text-center transition-colors">
      <p
        className={`font-quattrocento font-bold text-[28px] md:text-[32px] tracking-[-0.04em] leading-none mb-1 transition-colors ${
          accent ? "text-site-accent" : "text-site-fg"
        }`}
      >
        {value}
      </p>
      <p className="text-[11px] font-bold tracking-[0.06em] uppercase text-site-fg/60 mb-0.5 transition-colors">
        {label}
      </p>
      <p className="text-[10px] text-site-fg/35 transition-colors">{sublabel}</p>
    </div>
  );
}

function ScoringRow({
  heuristic,
  name,
  score,
  severity,
}: {
  heuristic: string;
  name: string;
  score: number;
  severity: string;
}) {
  const severityColor =
    severity === "Critical"
      ? "text-site-severity-critical bg-site-severity-critical-bg border-site-severity-critical-border"
      : severity === "Major"
      ? "text-site-severity-high bg-site-severity-high-bg border-site-severity-high-border"
      : severity === "Pass"
      ? "text-site-pass bg-site-pass-bg border-site-pass-border"
      : "text-site-severity-warn bg-site-severity-warn-bg border-site-severity-warn-border";

  return (
    <div className="flex items-center gap-3 bg-site-surface-raised rounded-xl px-4 py-2.5 transition-colors">
      <span className="text-[12px] font-bold text-site-label w-8 shrink-0 transition-colors">
        {heuristic}
      </span>
      <span
        className="flex-1 font-quattrocento text-site-fg-body text-sm tracking-[-0.02em] transition-colors"
      >
        {name}
      </span>
      <span className="font-quattrocento font-bold text-site-fg text-base w-8 text-right shrink-0 transition-colors">
        {score}
      </span>
      <span
        className={`text-[10px] font-bold tracking-[0.06em] uppercase px-2 py-0.5 rounded border shrink-0 ${severityColor}`}
      >
        {severity}
      </span>
    </div>
  );
}

function CompetitorCard({
  name,
  threat,
  hq,
  revenue,
  countries,
  differentiator,
}: {
  name: string;
  threat: string;
  hq: string;
  revenue?: string;
  countries: string;
  differentiator: string;
}) {
  const threatColor =
    threat === "Critical"
      ? "text-site-severity-critical bg-site-severity-critical-bg border-site-severity-critical-border"
      : threat === "High"
      ? "text-site-severity-high bg-site-severity-high-bg border-site-severity-high-border"
      : "text-site-severity-warn bg-site-severity-warn-bg border-site-severity-warn-border";

  return (
    <div className="bg-site-surface-raised rounded-2xl px-5 py-4 transition-colors">
      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <p className="font-quattrocento font-bold text-site-fg text-[15px] md:text-[16px] tracking-[-0.02em] transition-colors">
          {name}
        </p>
        <span
          className={`text-[10px] font-bold tracking-[0.06em] uppercase px-2 py-0.5 rounded border shrink-0 ${threatColor}`}
        >
          {threat}
        </span>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-1 mb-2">
        <span className="text-sm  transition-colors">
          HQ: {hq}
        </span>
        {revenue && (
          <span className="text-sm transition-colors">
            Rev: {revenue}
          </span>
        )}
        <span className="text-sm transition-colors">
          Countries: {countries}
        </span>
      </div>
      <p className=" text-sm tracking-[-0.02em] leading-relaxed transition-colors">
        {differentiator}
      </p>
    </div>
  );
}

function IAChangeCard({
  label,
  tag,
  desc,
  fixes,
}: {
  label: string;
  tag: string;
  desc: string;
  fixes: string;
}) {
  const isNew = tag === "NEW";
  return (
    <div className={`rounded-2xl px-5 py-4 transition-colors ${isNew ? "bg-site-surface-raised border border-site-accent/20" : "bg-site-surface-raised"}`}>
      <div className="flex items-center gap-2.5 mb-2">
        <p className="font-quattrocento font-bold text-site-fg text-[14px] md:text-[15px] tracking-[-0.02em] transition-colors">
          {label}
        </p>
        <span
          className={`text-[9px] font-bold tracking-[0.08em] uppercase px-1.5 py-0.5 rounded ${
            isNew
              ? "text-site-accent bg-site-accent/10 border border-site-accent/20"
              : "text-site-severity-warn bg-site-severity-warn-bg border border-site-severity-warn-border"
          }`}
        >
          {tag}
        </span>
        <span className="text-[10px] font-medium text-site-teal ml-auto shrink-0">
          {fixes}
        </span>
      </div>
      <p className="font-quattrocento text-site-fg/70 text-sm tracking-[-0.02em] leading-relaxed transition-colors">
        {desc}
      </p>
    </div>
  );
}

function IAScoreRow({
  h,
  name,
  before,
  after,
  change,
}: {
  h: string;
  name: string;
  before: number;
  after: number;
  change: string;
}) {
  const improvement = after - before;
  return (
    <div className="bg-site-surface-raised rounded-xl px-4 py-3 transition-colors">
      <div className="flex items-center gap-3 mb-1">
        <span className="text-[11px] font-bold text-site-label w-7 shrink-0 transition-colors">{h}</span>
        <span className="flex-1 font-quattrocento text-site-fg-body text-sm tracking-[-0.02em] transition-colors">
          {name}
        </span>
        <span className="font-quattrocento text-site-label text-sm transition-colors">
          {before}
        </span>
        <span className="text-site-fg/20 text-[11px] transition-colors">→</span>
        <span className="font-quattrocento font-bold text-site-fg text-sm transition-colors">
          {after}
        </span>
        <span className="text-[11px] font-bold text-site-teal">+{improvement}</span>
      </div>
      <p className="text-[11px] text-site-fg/50 pl-10 transition-colors">{change}</p>
    </div>
  );
}

function PhaseBlock({
  phase,
  timeline,
  items,
}: {
  phase: string;
  timeline: string;
  items: string[];
}) {
  return (
    <div className="bg-site-surface-raised rounded-2xl px-5 py-4 transition-colors">
      <div className="flex items-baseline gap-2.5 mb-3">
        <p className="font-quattrocento font-bold text-site-fg text-[14px] md:text-[15px] tracking-[-0.02em] transition-colors">
          {phase}
        </p>
        <span className="text-[11px] text-site-label transition-colors">{timeline}</span>
      </div>
      <ul className="space-y-1.5 list-none">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5">
            <span className="text-site-accent text-[12px] mt-px shrink-0">→</span>
            <span className="font-quattrocento text-site-fg/70 text-sm tracking-[-0.02em] leading-snug transition-colors">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
