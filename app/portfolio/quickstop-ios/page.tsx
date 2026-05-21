"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronDown, Loader2, X } from "lucide-react";
import { Navbar } from "@/components/site-nav";

const tags = ["iOS", "End-to-End UX", "AI-Assisted"];

export default function QuickStopPage() {
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
              <span className="bg-site-severity-warn-bg text-site-severity-warn border border-site-severity-warn-border text-sm md:text-base font-medium rounded-2xl px-3.5 py-1.5">
                In Progress
              </span>
            </div>

            <h1
              className="type-case-hero-title font-quattrocento font-bold text-site-fg tracking-[-0.04em] leading-[0.88] mb-8 md:mb-12 transition-colors"
            >
              QuickStop{" "}
              iOS
            </h1>

            <div className="flex flex-wrap gap-x-10 gap-y-2">
              <div>
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-site-label mb-0.5 transition-colors">
                  Role
                </p>
                <p className="font-quattrocento font-bold text-site-fg text-[15px] transition-colors">
                  Product Designer + iOS Developer
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-site-label mb-0.5 transition-colors">
                  Type
                </p>
                <p className="font-quattrocento font-bold text-site-fg text-[15px] transition-colors">
                  Personal Project
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-site-label mb-0.5 transition-colors">
                  Tools
                </p>
                <p className="font-quattrocento font-bold text-site-fg text-[15px] transition-colors">
                  Claude · Cursor · Figma · Figma MCP
                </p>
                
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-site-label mb-0.5 transition-colors">
                  Tech Stack
                </p>
                <p className="font-quattrocento font-bold text-site-fg text-[15px] transition-colors">
                  SwiftUI · UIKit · Convex
                </p>
                
              </div>
            </div>
          </div>

          {/* ══ Body ══ */}
          <div className="px-6 md:px-[6.6vw] pb-32">
            <div>

              {/* ── Overview ── */}
              <Section label="Overview">
                <BodyText>
                  QuickStop is a convenience store app built around a single premise: give customers their time back. Current convenience store apps — where they exist at all — are glorified loyalty cards. They don&apos;t solve the core friction: <strong>uncertainty</strong>. Is the item in stock? How long is the line? Will my mobile order be ready?
                </BodyText>
                <BodyText className="mt-4">
                  This case study documents an end-to-end AI-assisted workflow, from research and strategy through information architecture, interaction design in Figma, and a full port to native iOS in Swift.
                </BodyText>
              </Section>

              <Divider />

              {/* ── The Problem ── */}
              <Section label="The Problem">
                <BodyText>
                  The opportunity was to build for <strong>certainty</strong> — and let speed follow naturally from that. The five distinct user mindsets driving the project each have a different definition of &ldquo;fast,&rdquo; but share one unifying need: confidence that the trip will take exactly as long as expected.
                </BodyText>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <ScoreCard value="0" label="Existing apps" sublabel="that solve in-store uncertainty" />
                  <ScoreCard value="5" label="Distinct personas" sublabel="each with a different 'fast'" accent />
                  <ScoreCard value="1" label="Unifying insight" sublabel="certainty drives speed" />
                </div>
              </Section>

              <Divider />

              {/* ── User Research & Personas ── */}
              <Section label="User Research & Personas">
                <BodyText>
                  Five personas were developed from a bottom-up analysis of real convenience store use patterns — not broad demographics, but specific <em>jobs to be done</em> at different times of day.
                </BodyText>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <PersonaCard
                    number="01"
                    name="Marcus Hale, 32"
                    archetype="The Commuter"
                    coreNeed="Order-ahead, 90-second in-and-out"
                    dimensions={{ Speed: 5, Reliability: 4, Freshness: 2, Discovery: 1 }}
                  />
                  <PersonaCard
                    number="02"
                    name="Priya Ramanathan, 28"
                    archetype="The Night Shifter"
                    coreNeed="Curbside pickup, fresh food transparency at 3am"
                    dimensions={{ Speed: 4, Reliability: 5, Freshness: 5, Discovery: 1 }}
                  />
                  <PersonaCard
                    number="03"
                    name="Danny Reyes, 41"
                    archetype="The Bulk Buyer"
                    coreNeed="Group orders, business receipts, crew presets"
                    dimensions={{ Speed: 3, Reliability: 5, Freshness: 2, Discovery: 2 }}
                  />
                  <PersonaCard
                    number="04"
                    name="Zoe Kapoor, 19"
                    archetype="The Impulse Local"
                    coreNeed="Scan-and-go, discovery, three-tap max"
                    dimensions={{ Speed: 5, Reliability: 2, Freshness: 3, Discovery: 5 }}
                  />
                  <PersonaCard
                    number="05"
                    name="Sarah Mitchell, 38"
                    archetype="The Emergency Errand"
                    coreNeed="Sub-15min delivery, verified real-time stock"
                    dimensions={{ Speed: 5, Reliability: 5, Freshness: 4, Discovery: 1 }}
                  />
                </div>

                <div className="mt-6 bg-site-surface-raised rounded-2xl px-5 py-4 border border-site-accent/20 transition-colors">
                  <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-site-accent mb-2">
                    Key Insight
                  </p>
                  <p className="font-quattrocento font-bold text-site-fg text-[15px] tracking-[-0.02em] leading-snug transition-colors">
                    Across all five personas, the unifying need is <em>certainty</em> — certainty that the item is in stock, that the line won&apos;t kill them, that the trip will take exactly as long as expected.
                  </p>
                </div>
              </Section>

              <Divider />

              {/* ── Information Architecture ── */}
              <Section label="Information Architecture">
                <BodyText>
                  The IA was worked out iteratively — proposing structures, stress-testing them against each persona&apos;s flow, and revising. Two key decisions shaped the final nav.
                </BodyText>

                <div className="mt-6 space-y-3">
                  <IADecisionCard
                    decision="Scan & Go promoted to top-level tab"
                    rationale="Originally nested inside Shop as a mode. Promoted because it's a mode of being in the store — not a browsing mode — with a fundamentally different input model (camera-first vs. browse/search). Zoe's three-tap constraint is much easier to hit from the tab bar."
                  />
                  <IADecisionCard
                    decision="Store tab merged into Home smart header"
                    rationale="To keep the nav at five tabs, live inventory, hours, and locations were surfaced in Home's header rather than as a standalone tab. This pulls the 'certainty layer' closer to the first screen every user sees."
                  />
                </div>

                <div className="mt-6 bg-site-surface-raised rounded-2xl px-5 py-5 overflow-x-auto transition-colors">
                  <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-site-label mb-4 transition-colors">
                    Final Nav — v0.3
                  </p>
                  <p className="font-mono text-sm text-site-fg tracking-wide mb-5 transition-colors">
                    [ Home ] &nbsp; [ Shop ] &nbsp; [ Scan ] &nbsp; [ Orders ] &nbsp; [ You ]
                  </p>
                  <div className="space-y-2">
                    {[
                      { tab: "Home", purpose: "Smart entry — reorder, quick actions, store status", persona: "Marcus, Sarah" },
                      { tab: "Shop", purpose: "Browse catalog, Order Ahead + Delivery modes", persona: "Zoe, Priya" },
                      { tab: "Scan", purpose: "Camera-first in-store checkout", persona: "Zoe, Marcus" },
                      { tab: "Orders", purpose: "Active + historical, all pickup/delivery methods", persona: "All" },
                      { tab: "You", purpose: "Profile, payment, loyalty", persona: "All" },
                    ].map(({ tab, purpose, persona }) => (
                      <div key={tab} className="flex gap-3 items-start">
                        <span className="font-mono text-[12px] font-bold text-site-accent w-16 shrink-0 pt-0.5 transition-colors">
                          {tab}
                        </span>
                        <span className="font-quattrocento text-site-fg/70 text-sm tracking-[-0.02em] leading-snug flex-1 transition-colors">
                          {purpose}
                        </span>
                        <span className="text-[11px] text-site-label shrink-0 transition-colors">
                          {persona}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <ExpandableContent>
                  <div className="space-y-3">
                    <p className="font-quattrocento font-bold text-site-fg text-[14px] tracking-[-0.02em] transition-colors">
                      Deferred to v2
                    </p>
                    <ul className="space-y-1.5 list-none">
                      {[
                        "Group / crew ordering and shared carts",
                        "Business accounts with itemized tax receipts",
                        "In-app ID scanning for age-gated items",
                      ].map((item) => (
                        <BulletItem key={item}>{item}</BulletItem>
                      ))}
                    </ul>
                  </div>
                </ExpandableContent>
              </Section>

              <Divider />

              {/* ── Shop Taxonomy ── */}
              <Section label="Shop Taxonomy">
                <BodyText>
                  The Shop section required the most structural work — 10 top-level categories with subcategories, special filters, and two age-gated categories requiring a distinct verification model.
                </BodyText>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-2">
                  {[
                    { num: "01", label: "Hot Food & Pizza" },
                    { num: "02", label: "Coffee & Hot Drinks" },
                    { num: "03", label: "Cold Drinks" },
                    { num: "04", label: "Snacks & Candy" },
                    { num: "05", label: "Fresh Food" },
                    { num: "06", label: "Ice Cream & Frozen" },
                    { num: "07", label: "Beer, Wine & Spirits", gated: true },
                    { num: "08", label: "Tobacco & Vaping", gated: true },
                    { num: "09", label: "Grocery & Household" },
                    { num: "10", label: "Health & Beauty" },
                  ].map(({ num, label, gated }) => (
                    <div
                      key={num}
                      className={`bg-site-surface-raised rounded-xl px-3 py-3 transition-colors ${gated ? "border border-site-severity-warn-border" : ""}`}
                    >
                      <p className="text-[10px] font-bold tracking-[0.08em] uppercase text-site-label mb-1 transition-colors">
                        {num}
                        {gated && <span className="ml-1.5 text-site-severity-warn">18+</span>}
                      </p>
                      <p className="font-quattrocento text-site-fg text-[13px] leading-snug tracking-[-0.02em] transition-colors">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <ExpandableContent>
                  <div className="space-y-4">
                    <SubHeading>Age-Gated Model — v1 (trust-and-confirm)</SubHeading>
                    <ul className="space-y-1.5 list-none mt-3">
                      {[
                        "DOB stored at account level — entered once at signup",
                        "One-time-per-session cart acknowledgement",
                        "Manual visual ID check at handoff by driver or associate",
                        "No in-app ID scanning — deferred to v2 as a drop-in addition to the flow",
                      ].map((item) => (
                        <BulletItem key={item}>{item}</BulletItem>
                      ))}
                    </ul>

                    <SubHeading className="mt-6">Cross-Cutting Features</SubHeading>
                    <div className="mt-3 space-y-2">
                      {[
                        { label: '"The Usual"', desc: "History-driven reorder strip", persona: "Marcus" },
                        { label: '"New This Week"', desc: "Discovery strip, excludes age-gated", persona: "Zoe" },
                        { label: '"Need It Now"', desc: "Emergency shortcut preset", persona: "Sarah" },
                        { label: '"Running Low?"', desc: "Cadence-based reorder prompts", persona: "All" },
                      ].map(({ label, desc, persona }) => (
                        <div key={label} className="bg-site-surface-raised rounded-xl px-4 py-3 flex items-start gap-3 transition-colors">
                          <span className="font-mono text-[12px] font-bold text-site-accent shrink-0 pt-0.5">
                            {label}
                          </span>
                          <span className="font-quattrocento text-site-fg/70 text-sm tracking-[-0.02em] flex-1 transition-colors">
                            {desc}
                          </span>
                          <span className="text-[11px] text-site-label shrink-0 transition-colors">
                            {persona}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ExpandableContent>
              </Section>

              <Divider />

              {/* ── Design System ── */}
              <Section label="Design System">
                <BodyText>
                  Before designing screens, the color system was established. The brand palette was extracted from Figma&apos;s Apple Design System file via Figma MCP, then exported as a production-ready Swift file — <strong>DSColors.swift</strong> — covering 70+ tokens across brand, system backgrounds, labels, fills, and separators, all with Light/Dark mode values.
                </BodyText>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                  <SwatchCard color="#30C5FF" name="brandPrimary" label="Teal" note="Light & Dark identical" />
                  <SwatchCard color="#5C946E" name="brandAccent1" label="Forest" note="Primary accent" />
                  <SwatchCard color="#80C2AF" name="brandAccent12" label="Sage" note="Secondary accent" />
                  <SwatchCard color="#A0DDE6" name="brandAccent13" label="Sky" note="Tertiary accent" />
                </div>

                <div className="mt-4 bg-site-surface-raised rounded-2xl px-5 py-4 transition-colors">
                  <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-site-label mb-2 transition-colors">
                    AI Workflow note
                  </p>
                  <BodyText>
                    <code className="text-site-accent text-sm">DSColors.swift</code> was generated by connecting to the Figma file via MCP and extracting variable values directly — removing the manual copy-paste step entirely. The token file bridges design and code: SwiftUI views reference <code className="text-site-accent text-sm">Color.brandPrimary</code>, never hardcoded hex values.
                  </BodyText>
                </div>
              </Section>

              <Divider />

              {/* ── Screen Design ── */}
              <Section label="Screen Design in Figma">
                <BodyText>
                  Screens were built in Figma using components from the Apple Design System library, with QuickStop brand tokens applied. The Figma MCP connection allowed writing and executing plugin code directly in the file — creating frames, placing components, setting fills, and wiring up auto-layout — rather than manually building each screen.
                </BodyText>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      label: "Onboarding (6 screens)",
                      desc: "Value prop → Location permission → Category preferences → Sign-in → First order preset → Success + habit prompt",
                      image: "/images/Quickstop-Onboarding.png",
                      imageAlt: "QuickStop onboarding flow — six screens from value prop through order confirmation",
                    },
                    {
                      label: "Shop Landing",
                      desc: "Search bar, mode selector (Order Ahead / Delivery), 'The Usual' card, 10-category grid with age-gated lock badges",
                      image: "/images/Shopping-screens.png",
                      imageAlt: "QuickStop shopping flow — home, shop landing, cart, order confirmation, and digital receipt",
                    },
                    {
                      label: "Cold Drinks Category",
                      desc: "Subcategory chips, featured banner, sectioned product grid with real-time stock indicators",
                    },
                    {
                      label: "Product Detail",
                      desc: "Product image, nutrition facts grid (Calories / Sugar / Caffeine / Serving), 'Frequently bought together' strip",
                    },
                  ].map(({ label, desc, image, imageAlt }) => (
                    <div key={label} className="bg-site-surface-raised rounded-2xl overflow-hidden transition-colors">
                      <div className="px-5 pt-4 pb-4">
                        <p className="font-quattrocento font-bold text-site-fg text-[14px] md:text-[15px] tracking-[-0.02em] mb-1 transition-colors">
                          {label}
                        </p>
                        <p className="font-quattrocento text-site-fg/60 text-sm tracking-[-0.02em] leading-snug transition-colors">
                          {desc}
                        </p>
                      </div>
                      {image ? (
                        <ScreenImageLightbox src={image} alt={imageAlt ?? label} />
                      ) : (
                        <div className="mx-5 mb-5 rounded-xl bg-site-canvas border-2 border-dashed border-white/10 flex items-center justify-center h-44 transition-colors">
                          <p className="text-[11px] text-site-label tracking-[0.06em] uppercase transition-colors">
                            Screenshot coming soon
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Section>

              <Divider />

              {/* ── iOS Development in Swift ── */}
              <Section label="iOS Development in Swift">
                <BodyText>
                  The designs were ported to native iOS using SwiftUI and UIKit, using the{" "}
                  <code className="text-site-accent text-sm">DSColors.swift</code> token file as the bridge between design and code.
                </BodyText>

                <SubHeading className="mt-8">Implementation highlights</SubHeading>
                <ul className="space-y-2 list-none mt-4">
                  {[
                    "Color tokens from DSColors.swift used directly in SwiftUI views via Color.brandPrimary, Color.backgroundSecondary, etc. — no hardcoded hex values in view code",
                    "UIKit extensions on UIColor for components that required UIKit interop",
                    "Asset catalog structure follows the Figma variable group hierarchy (Brand/Primary, Backgrounds/Secondary, Labels/Primary, etc.) — making design-to-code handoff mechanical rather than interpretive",
                    "Light/Dark mode handled entirely at the token level — no conditional appearance checks in view logic",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>

                <SubHeading className="mt-10">Project Structure</SubHeading>
                <BodyText className="mt-4">
                  The Swift project is organised around a strict separation of concerns, using an atomic design hierarchy for UI components and a feature-based structure for product areas.
                </BodyText>
                <div className="mt-6 bg-site-surface-raised rounded-2xl px-5 py-5 overflow-x-auto transition-colors">
                  <p className="font-mono text-sm leading-[1.8] whitespace-pre">
{`Quickpitstop/
├── Resources/
├── Sources/
│   ├── App/                        # Entry points
│   │   ├── ContentView
│   │   ├── QuickStopApp
│   │   └── RootView
│   ├── Components/                 # Atomic design system
│   │   ├── Atoms/                  # Primitive, single-purpose components
│   │   │   ├── DSBadge
│   │   │   ├── DSButton
│   │   │   ├── DSDivider
│   │   │   ├── DSIcon
│   │   │   ├── DSLabel
│   │   │   ├── DSSpinner
│   │   │   ├── DSTag
│   │   │   ├── DSTextField
│   │   │   └── DSToggle
│   │   ├── Molecules/              # Composed components
│   │   │   ├── CartItemRow
│   │   │   ├── CategoryPill
│   │   │   ├── PriceLabel
│   │   │   ├── ProductCard
│   │   │   ├── PromoBanner
│   │   │   ├── QuantityStepper
│   │   │   ├── SearchBar
│   │   │   └── StockBadge
│   │   ├── Navigation/
│   │   │   ├── DSTabBar
│   │   │   └── DSToolbar
│   │   └── Organisms/              # Full UI sections
│   │       ├── CartSummary
│   │       ├── CheckoutPaymentSelector
│   │       ├── DSInsetSettingsMenu
│   │       ├── DSNavHeader
│   │       ├── ProductGrid
│   │       └── PromoBannerCarousel
│   ├── Config/
│   ├── DesignSystem/
│   │   ├── Extensions/
│   │   │   └── View+DS             # SwiftUI view modifiers
│   │   └── Tokens/
│   │       ├── DSColors
│   │       ├── DSRadius
│   │       ├── DSShadow
│   │       ├── DSSpacing
│   │       └── DSTypography
│   ├── Features/                   # Screen-level product areas
│   │   ├── Account/
│   │   ├── Auth/
│   │   ├── Cart/
│   │   ├── Home/
│   │   ├── Orders/
│   │   └── Search/
│   ├── Models/
│   ├── Utilities/
│   ├── ViewModels/
│   └── PreviewMocks
└── Products/

Package Dependencies:
  - ConvexMobile 0.7.0
  - Stripe 23.32.0`}
                  </p>
                </div>

                <SubHeading className="mt-10">Architecture Decisions</SubHeading>

                <div className="mt-6 space-y-3">
                  <IADecisionCard
                    decision="Atomic Design for Components"
                    rationale="Components are split into three tiers matching the Figma file structure. Atoms are single-purpose primitives with tokens applied (DSButton, DSLabel) — no business logic. Molecules compose atoms into product concepts (ProductCard, CartItemRow). Organisms assemble full UI sections (ProductGrid, PromoBannerCarousel). This mirrors the Figma component hierarchy directly, making design-to-code handoff straightforward."
                  />
                  <IADecisionCard
                    decision="Design System Tokens"
                    rationale="All visual decisions are centralised in DesignSystem/Tokens/: DSColors (brand and semantic colors), DSTypography (SF Pro type scale), DSSpacing, DSRadius (14pt cards, 10pt buttons), DSShadow, and View+DS modifiers. No hardcoded hex values or magic numbers appear in feature or component code."
                  />
                  <IADecisionCard
                    decision="Feature-Based Organisation"
                    rationale="Product areas (Home, Cart, Orders, Search, Account, Auth) each live in their own folder under Features/. Each feature owns its views, with state managed through the shared ViewModels/ layer. PreviewMocks provides fixture data for SwiftUI previews without requiring a live backend."
                  />
                  <IADecisionCard
                    decision="Package Dependencies"
                    rationale="ConvexMobile 0.7.0 handles real-time backend sync for live inventory, order status, and stock levels — directly addressing the core product promise of certainty. Stripe 23.32.0 powers payment processing for checkout flows."
                  />
                </div>

                <SubHeading className="mt-10">Cursor-Assisted Development</SubHeading>
                <BodyText className="mt-4">
                  The Swift implementation was built using Cursor with the project structure and{" "}
                  <code className="text-site-accent text-sm">DSColors.swift</code> token file as persistent context.
                </BodyText>
                <ul className="space-y-2 list-none mt-4">
                  {[
                    "Component scaffolding — Cursor generated boilerplate for each atom and molecule from a description of its Figma equivalent, with tokens applied from DSColors and DSTypography automatically",
                    "Token referencing — rather than looking up hex values or sizes, Cursor resolved the correct token for each use case from the existing design system files in context",
                    "Preview generation — PreviewMocks stubs were generated alongside each component so SwiftUI previews worked immediately without a backend connection",
                    "Refactoring — when token names changed during design system iteration, Cursor propagated the rename across all component files in a single pass",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </ul>
              </Section>

              <Divider />

              {/* ── AI Workflow ── */}
              <Section label="AI Workflow — What Actually Changed">
                <BodyText>
                  This project was used as a test of how far an AI-assisted workflow could go end-to-end. The honest summary:
                </BodyText>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-site-surface-raised rounded-2xl px-5 py-5 transition-colors">
                    <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-site-accent mb-4 transition-colors">
                      AI accelerated significantly
                    </p>
                    <ul className="space-y-2 list-none">
                      {[
                        "Persona generation and synthesis — hours → under an hour",
                        "IA iteration — proposing, critiquing, and revising structure in the same session",
                        "Shop taxonomy — category naming, subcategory logic, age-gating model, edge cases",
                        "DSColors.swift — extracted directly from Figma rather than transcribed manually",
                        "Figma screen construction — plugin code written and executed via MCP",
                      ].map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="text-site-accent text-[12px] mt-px shrink-0">→</span>
                          <span className="font-quattrocento text-site-fg/70 text-sm tracking-[-0.02em] leading-snug transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-site-surface-raised rounded-2xl px-5 py-5 transition-colors">
                    <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-site-label mb-4 transition-colors">
                      Still required human judgment
                    </p>
                    <ul className="space-y-2 list-none">
                      {[
                        "Deciding which structural options were right (e.g. Scan & Go promotion, merging Store into Home)",
                        "Visual taste — verifying designs looked right, not just structurally correct",
                        "Scoping decisions — what goes in v1 vs. v2",
                        "Swift architecture decisions during the native port",
                      ].map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="text-site-label text-[12px] mt-px shrink-0">–</span>
                          <span className="font-quattrocento text-site-fg/70 text-sm tracking-[-0.02em] leading-snug transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-site-surface-raised rounded-2xl px-5 py-4 border border-site-accent/20 transition-colors">
                  <p className="font-quattrocento font-bold text-site-fg text-[14px] tracking-[-0.02em] leading-snug transition-colors">
                    The net effect: the gap between concept and testable designs compressed substantially. The workflow didn&apos;t remove design judgment — it removed the time between having a judgment and seeing it rendered.
                  </p>
                </div>
              </Section>

              <Divider />

              {/* ── Open Questions
              <Section label="Open Questions">
                <div className="space-y-3">
                  {[
                    { q: "First-time DOB prompt", detail: "During onboarding (less friction later) vs. just-in-time when the user first hits an age-gated item?" },
                    { q: "Under-21 account behavior", detail: "Hide age-gated categories entirely, or show a locked state with an explanation?" },
                    { q: "Scan & Go geofencing", detail: "Require in-store location to activate the scanner, or keep it always available?" },
                    { q: "Home personalization", detail: "How aggressive on day one with no behavior history? Risk of feeling empty." },
                  ].map(({ q, detail }, i) => (
                    <div key={q} className="bg-site-surface-raised rounded-xl px-4 py-4 transition-colors">
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-[11px] font-bold text-site-label shrink-0 mt-0.5 transition-colors">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="font-quattrocento font-bold text-site-fg text-[14px] tracking-[-0.02em] mb-1 transition-colors">
                            {q}
                          </p>
                          <p className="font-quattrocento text-site-fg/60 text-sm tracking-[-0.02em] leading-snug transition-colors">
                            {detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
 ── */}

              <Divider />

              {/* ── Product Demo ── */}
              <Section label="Product Demo">
                <BodyText>
                  Native iOS build captured on device — browse, cart, and checkout in the QuickStop app.
                </BodyText>
                <PortfolioVideo src="/videos/quickstop.mov" />
              </Section>

              {/* <Divider /> */}

              {/* ── What's Next
              <Section label="What&apos;s Next">
                <div className="space-y-2">
                  {[
                    "Age-gated checkpoint sheet (the ID-required modal at cart level)",
                    "Orders tab — active order tracking, pickup method screens",
                    "Scan & Go flow — scanner UI, cart drawer, exit & pay",
                    "v2 scoping: crew/group ordering, business accounts, in-app ID verification",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 items-start bg-site-surface-raised rounded-xl px-4 py-3 transition-colors">
                      <span className="text-site-accent text-[12px] mt-0.5 shrink-0">→</span>
                      <span className="font-quattrocento text-site-fg/70 text-sm tracking-[-0.02em] leading-snug transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </Section>
 ── */}
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
    <p className={`text-site-fg-body tracking-[-0.03em] leading-relaxed transition-colors ${className}`}>
      {children}
    </p>
  );
}

function SubHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`type-case-problem font-quattrocento font-bold text-site-fg tracking-[-0.03em] leading-tight transition-colors ${className}`}>
      {children}
    </h3>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-site-accent shrink-0" />
      <span className="text-site-fg-body tracking-[-0.03em] leading-relaxed transition-colors">
        {children}
      </span>
    </li>
  );
}

function Divider() {
  return (
    <hr className="border-none border-t border-black/10 dark:border-white/10 mt-0 transition-colors" />
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
      <p className={`font-quattrocento font-bold text-[28px] md:text-[32px] tracking-[-0.04em] leading-none mb-1 transition-colors ${accent ? "text-site-accent" : "text-site-fg"}`}>
        {value}
      </p>
      <p className="text-[11px] font-bold tracking-[0.06em] uppercase text-site-fg/60 mb-0.5 transition-colors">
        {label}
      </p>
      <p className="text-[10px] text-site-fg/35 transition-colors">{sublabel}</p>
    </div>
  );
}

function PersonaCard({
  number,
  name,
  archetype,
  coreNeed,
  dimensions,
}: {
  number: string;
  name: string;
  archetype: string;
  coreNeed: string;
  dimensions: Record<string, number>;
}) {
  return (
    <div className="bg-site-surface-raised rounded-2xl px-5 py-4 transition-colors">
      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-mono text-[10px] font-bold text-site-label transition-colors">{number}</span>
        <p className="font-quattrocento font-bold text-site-fg text-[14px] tracking-[-0.02em] transition-colors">
          {name}
        </p>
        <span className="text-[11px] text-site-accent font-medium ml-auto shrink-0">{archetype}</span>
      </div>
      <p className="font-quattrocento text-site-fg/60 text-sm tracking-[-0.02em] leading-snug mb-3 transition-colors">
        {coreNeed}
      </p>
      <div className="flex gap-3 flex-wrap">
        {Object.entries(dimensions).map(([dim, val]) => (
          <div key={dim} className="flex items-center gap-1.5">
            <span className="text-[10px] text-site-label uppercase tracking-[0.06em] transition-colors">{dim}</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${i < val ? "bg-site-accent" : "bg-white/10"}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IADecisionCard({ decision, rationale }: { decision: string; rationale: string }) {
  return (
    <div className="bg-site-surface-raised rounded-2xl px-5 py-4 transition-colors">
      <p className="font-quattrocento font-bold text-site-fg text-[14px] md:text-[15px] tracking-[-0.02em] mb-2 transition-colors">
        {decision}
      </p>
      <p className="font-quattrocento text-site-fg/60 text-sm tracking-[-0.02em] leading-snug transition-colors">
        {rationale}
      </p>
    </div>
  );
}

function PortfolioVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="mt-6 mx-auto max-w-[320px] md:max-w-[360px]">
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-site-surface-raised ring-1 ring-black/10 dark:ring-white/10 transition-colors">
        {(loading || error) && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-site-surface-raised transition-colors">
            {error ? (
              <>
                <p className="font-quattrocento text-site-fg/60 text-sm tracking-[-0.02em] px-6 text-center">
                  Video couldn&apos;t load. Try refreshing the page.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setError(false);
                    setLoading(true);
                    videoRef.current?.load();
                  }}
                  className="text-sm font-bold tracking-wide text-site-accent hover:opacity-75 transition-opacity"
                >
                  Retry
                </button>
              </>
            ) : (
              <>
                <Loader2
                  size={28}
                  strokeWidth={2}
                  className="animate-spin text-site-accent"
                  aria-hidden
                />
                <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-site-label transition-colors">
                  Loading video…
                </p>
              </>
            )}
          </div>
        )}
        <video
          ref={videoRef}
          src={src}
          controls
          playsInline
          preload="metadata"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${loading && !error ? "opacity-0" : "opacity-100"}`}
          onLoadedData={() => setLoading(false)}
          onCanPlay={() => setLoading(false)}
          onWaiting={() => setLoading(true)}
          onPlaying={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

function ScreenImageLightbox({
  src,
  alt,
  className = "mx-5 mb-5 w-[calc(100%-2.5rem)]",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        className={`group block rounded-xl overflow-hidden bg-site-canvas transition-colors cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-site-accent focus-visible:ring-offset-2 focus-visible:ring-offset-site-canvas ${className}`}
        aria-label={`View larger: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={2400}
          height={800}
          className="w-full h-auto object-contain block transition-opacity group-hover:opacity-90"
        />
      </button>

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="fixed inset-0 z-50 m-0 max-h-none max-w-none h-full w-full border-0 bg-transparent p-4 md:p-8 backdrop:bg-black/75 backdrop:backdrop-blur-sm open:animate-in open:fade-in-0"
      >
        <div className="relative flex h-full w-full items-center justify-center">
          <button
            type="button"
            onClick={close}
            className="absolute right-2 top-2 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
          <Image
            src={src}
            alt={alt}
            width={3840}
            height={1280}
            className="max-h-[90vh] max-w-[95vw] w-auto h-auto object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </dialog>
    </>
  );
}

function SwatchCard({
  color,
  name,
  label,
  note,
}: {
  color: string;
  name: string;
  label: string;
  note: string;
}) {
  return (
    <div className="bg-site-surface-raised rounded-2xl overflow-hidden transition-colors">
      <div className="h-12" style={{ backgroundColor: color }} />
      <div className="px-3 py-3">
        <p className="font-mono text-[11px] text-site-fg font-bold tracking-[-0.01em] transition-colors">
          {name}
        </p>
        <p className="text-[11px] text-site-label transition-colors">{label} · {color}</p>
        <p className="text-[10px] text-site-fg/35 mt-0.5 transition-colors">{note}</p>
      </div>
    </div>
  );
}
