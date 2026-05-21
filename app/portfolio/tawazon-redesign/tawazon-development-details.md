# Tawazon Chemical Co. — Website Redesign
### A Next.js · Tailwind CSS · Shadcn/ui · Cursor AI Case Study

---

> *"What happens when you hand a specialty chemical distributor a modern design system, an AI-powered IDE, and a researcher who won't stop asking 'but WHY does this page exist?'"*
> **Spoiler: you get something actually good.**

---

## The Brief

Tawazon Chemical Co. LLC is a Dubai-based specialty chemical distributor that's been quietly powering industries across 40+ countries for 35+ years. They're backed by the Ghobash Group, hold a triple ISO certification stack (9001, 14001, 45001 — rare for a regional distributor), and serve 1,800+ customers across coatings, inks, construction chemicals, plastics, packaging, fiberglass, rubber, and food additives.

Their existing WordPress site — [tawazon.com](https://tawazon.com) — does a lot of things well. Real customer testimonials from three-decade relationships. Blog content targeting SEO. A Suppliers page. An EcoVadis section. ISO certificates linked as PDFs. These are genuine strengths. But structurally, the site is a company-first brochure. It talks *about* Tawazon more than it helps the people visiting it.

The ask: rebuild the information architecture from scratch and deliver a new Next.js site that meets buyers where they actually are.

---

## My Stack

| Layer | Choice |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Styling** | Tailwind CSS |
| **Components** | Shadcn/ui |
| **AI-assisted dev** | Cursor (with Claude Sonnet) |
| **Design research** | Competitive analysis across 9 competitors |
| **IA methodology** | UX heuristic evaluation (Nielsen's 10) |

---

## Phase 0 — Research First, Pixels Later

Before writing a single line of code, I did something most devs skip: I actually *studied the market*.

I ran a full competitive research report covering 9 competitors — from global giants like **Brenntag SE** (€15.1B revenue, 70+ countries) and **IMCD Group** (80 in-house labs, EcoVadis Platinum rating) down to UAE-based regional specialists like Kemipex, Tajchem, and H.A.K. Industrial Chemicals.

What this told me, immediately:

- **Coatings, inks, and construction chemicals** are a bloodbath — all 9 competitors play here
- **Food additives and packaging** are almost unclaimed territory among Tawazon's regional peers
- **Triple ISO certification** is a genuine differentiator — nobody else in the regional set can confirm all three
- **Technical documentation** (TDS, SDS, CoA) is expected by B2B buyers but absent or buried on competitor sites
- **Digital procurement** (RFQ tracking, order history, document vaults) is table stakes for enterprise buyers that IMCD and Brenntag already deliver
- **REDA Group** is the single most dangerous competitor — near-identical ME/Africa/Asia geographic thesis, same founding era, and a fast-expanding multi-brand structure

This research didn't just inform the strategy — it directly shaped the IA. Every new section I proposed came from a gap I spotted in the competitive landscape.

---

## Phase 1 — Information Architecture

### The Problem with the Old Structure

The previous site organized everything around the company. *Who we are. What we do. Contact us.* Standard corporate brochure-ware. The navigation: Home · About Us · Industries · Suppliers · EcoVadis · Media · Careers · Contact.

But Tawazon's buyers don't arrive asking "who is Tawazon?" — they arrive with a product name, a CAS number, a segment, a compliance question. The site needed to meet them there.

### The New IA — Buyer-Intent First

I rebuilt the navigation and page hierarchy around **what buyers actually need**:

```
Homepage
├── Industries (8 segments × product sub-categories)  ← Live ✅
│   ├── Coatings → Binders · Pigments · Additives · Extenders
│   ├── Inks
│   ├── Construction Chemicals
│   ├── Plastics
│   ├── Packaging
│   ├── Fiberglass
│   ├── Rubber
│   └── Food Additives
├── About Us  ← Live ✅
├── Careers  ← Live ✅
├── Contact / Locations  ← Live ✅
├── Products (searchable catalog + CAS lookup)  ← Coming soon 🔜
├── Resources (TDS · SDS · Application guides · FAQ)  ← Coming soon 🔜
├── Suppliers (named cards, filterable)  ← Coming soon 🔜
├── Sustainability (ESG hub · EcoVadis · ISO scope)  ← Coming soon 🔜
├── Media (Technical blog · News · Events)  ← Coming soon 🔜
└── Customer Portal (RFQ · Orders · Document vault)  ← Coming soon 🔜
```

The triple ISO certifications, Ghobash Group relationship, global presence map, and real team profiles all got proper space in the About Us page — because a procurement manager in Jakarta *should* be able to find that in three clicks.

---

## Phase 2 — What's Live Now

### ✅ Homepage

The redesigned homepage is a dramatic step up from the original's auto-playing carousel with no pause control. What's live:

- **Clear hero statement** — "We're a specialty chemical distributor connecting leading manufacturers with industries" — instead of rotating marketing slides
- **Focused CTAs** — Explore Industries and Contact Regional Team, rather than six competing links
- **KPI stat block** — 30+ years · 1,800+ clients · 51 countries — animated and scannable
- **All 8 industries** surfaced immediately with direct links
- **Real testimonials** from named partners: Basco Paints, Goldstar, Kansai Plascon Tanzania
- **Language switcher** in the nav — EN · AR · FR · SW · ID · HI — built in from day one (localisation content is the next phase)
- **Ghobash Group section** with direct link to ghobash.com
- **ISO 9001/14001/45001 callout** in the "Responsible Business Partner" section

### ✅ Industries (All 8 Segments)

Every industry page now follows a uniform template — a massive UX improvement over the old site where each segment page had completely different structure and depth.

What the coatings page delivers that the old one didn't: a proper segment intro, then sub-category cards (Binders, Pigments, Additives, Specialty Extenders), then product-level breakdowns with individual entries like *Epoxy Resins & Hardeners*, *Acrylic Emulsions*, *Alkyd Resins*. Food Additives gets the same treatment with Botanicals, Koda™ Potassium Bicarbonate, Pell™ Low Sodium Baking Powder, Nutraceuticals, Vitamins — Tawazon's own branded ingredient lines, finally getting proper spotlight.

### ✅ About Us

The MD letter from Oussama Ghandour is live — a genuine differentiator versus competitors whose "about" pages are pure corporate boilerplate. The world map with subsidiary markers (UAE, KSA, Kenya, India, Indonesia, South Africa), the Ghobash Group section, and the team grid are all in. Some team headshots are placeholder at this stage — real photography is incoming.

### ✅ Careers

Open positions with location, division, and employment type. The "Why Work With Us" section covers global opportunities, professional development, and culture. Application flow is live.

### ✅ Contact / Locations

All 9 offices across 7 countries with full addresses, phone numbers, and email addresses — Dubai HQ, Jeddah, Riyadh, Nairobi, Chennai, Mumbai, Tangerang (Indonesia), Umhlanga (South Africa), and Jebel Ali Free Zone. Contact form with enquiry routing is live.

---

## Phase 3 — What's Coming Next

These sections are designed, IA-documented, and in the build queue — not live yet:

### 🔜 Products Catalog
A fully searchable chemical catalog with CAS number lookup, filterable by industry segment, supplier principal, and application type. Every product will have a dedicated detail page with technical specifications, industry applications, TDS/SDS download links, and a segment-specific RFQ form. This is the single biggest functional gap versus what B2B buyers expect in 2026.

### 🔜 Resources Hub (TDS · SDS · Application Guides · FAQ)
A dedicated library for technical data sheets and safety data sheets — filterable, searchable, downloadable. Plus application guides per segment (coatings formulation, food additive compliance, rubber processing) and a FAQ covering MOQ, lead times, certifications, and hazmat handling. IMCD's global lab network sets the bar high here; this resource hub is Tawazon's answer.

### 🔜 Suppliers
Named supplier cards filterable by segment, each with country of origin, product categories, and a list of products from that principal. A "Become a Supplier" application form. The old tawazon.com has a suppliers page but it's largely unstructured — this version will actually be useful for buyers trying to trace provenance.

### 🔜 Sustainability Hub
A dedicated ESG section consolidating what currently lives in scattered places: the ISO certification PDFs (already linked on tawazon.com), the EcoVadis journey, environmental responsibility commitments, and an annual sustainability report. The BBBEE Level 1 status in South Africa also gets its own page. This directly addresses the fact that MNC procurement teams are increasingly using ESG credentials as supplier shortlist criteria.

### 🔜 Media / Blog
The old tawazon.com has an active blog — PVD coating guides, polyaspartic floor coating content — which is generating real traffic. The redesign pivots this toward B2B-relevant technical content: formulation insights, regulatory updates, industry trend analysis — content that serves procurement managers and R&D engineers rather than general readers.

### 🔜 Customer Portal
The big one. Login/register, RFQ submission and tracking, order history, repeat order shortcuts, and a document vault (TDS, SDS, CoA, invoices). This closes the digital procurement gap that Brenntag and IMCD have and Tawazon currently doesn't. No regional competitor in the analysis had this — it's a genuine differentiator once live.

---

## Design: Old vs. New

### What the Old Site Does Well
The existing tawazon.com deserves credit where it's due. The testimonials section is exceptional — ten named industry partners with full quotes, titles, and companies, some spanning 30-year relationships. That's real social proof that most B2B sites fake with anonymous pull quotes. The EcoVadis dedicated page (with its own nav item!) shows genuine ESG commitment. ISO certificates are linked directly as downloadable PDFs. The blog is active and generating content.

### What the Redesign Changes

**Navigation clarity.** The old nav has 8 items with nested sub-menus and a separate "Get Connected" CTA. The new nav is clean: Industries · About Us · Careers · Contact. Secondary sections (Products, Resources, Sustainability, Portal) come as the build progresses — adding hierarchy only when content is ready, not upfront.

**Typography & visual hierarchy.** The old site is WordPress/Elementor with mixed heading sizes and inconsistent spacing. The redesign uses **DM Serif Display** for headings (serious, editorial, unexpected for a chemical company — in the best way) and **DM Sans** for body. Every type scale decision is consistent across all 8 industry pages.

**Colour system.** Old site: a loose collection of navy, teal, and grey with inconsistent application. New site: a strict token system — `--navy: #0B1F3A`, `--teal: #1A7A6E`, `--gold: #C8922A` — applied as Tailwind semantic tokens throughout. The gold accent, drawn from Ghobash Group brand heritage, lifts the premium feel significantly.

**Industry page depth.** Old site: each industry page is a short description with a product list. New site: a uniform template with a segment hero, sub-category breakdown, individual product entries with descriptions, and a CTA. The food additives page in the redesign — showing Pell™ and Koda™ as named branded products — is a complete transformation from the old version.

**Mobile experience.** The old site's carousel and navigation don't adapt cleanly to mobile. The redesign is mobile-first from the Tailwind config up, with a responsive nav and properly stacked layouts across all breakpoints.

**Performance.** WordPress + Elementor + multiple plugins means the old site carries significant JS overhead. Next.js 15 with React Server Components for the static industry pages delivers a fundamentally faster baseline — especially for international visitors in markets like Kenya and Indonesia where connection quality varies.

---

## How Cursor Made This Possible

Here's where it got genuinely exciting.

### Why Cursor Changed Everything

I've used AI coding assistants before. Cursor with Claude Sonnet felt different — less like autocomplete, more like having a very caffeinated senior dev sitting next to you who has *also* read all the documentation.

**Component generation at speed.** Once I'd established the design system (Tailwind config, colour tokens, typography scale), I could describe a component in plain language and get production-quality TSX back in seconds. The `IndustryPageWithHeader`, `KpiStatGrid`, `LocationsOffices`, and `WorldMapWithMarkers` components all started as Cursor prompts and needed only light refinement.

**Shadcn/ui + Tailwind synergy.** Shadcn's unstyled-but-accessible components paired with Tailwind made the styling layer genuinely enjoyable. No fighting with opinionated CSS-in-JS. `Button`, `Dialog`, `Sheet`, `Badge`, `Field` — all extended cleanly. The `field.tsx` component became the workhorse across the contact form, RFQ inputs, and future portal screens.

**App Router architecture.** Next.js 15's file-system routing mapped almost perfectly to the IA:

```
app/
├── industries/
│   └── [segment]/
│       └── page.tsx        ← one template, 8 segments
├── about-us/
│   └── page.tsx
├── careers/
│   └── page.tsx
├── locations/              ← serves as Contact
│   └── page.tsx
└── products/               ← coming soon
    └── [slug]/
        └── page.tsx
```

The dynamic `[segment]` routing means I built one template and let the data drive every industry page — no copy-paste, no drift.

**Cursor for refactoring.** When `page-modules.tsx` started doing too much, I described the problem and got a clean refactor plan back — split into `section-header.tsx`, `site-section-block.tsx`, and `section-highlight-list.tsx`. What would've been a 90-minute refactor took 20 minutes.

---

## What the Research Directly Built

The research wasn't a PDF that sat in a folder. It became the website:

| Research Finding | Website Feature |
|---|---|
| No competitor has searchable product catalog with CAS numbers | `/products` catalog — coming soon 🔜 |
| IMCD's 80 labs set expectations for technical docs | `/resources` TDS + SDS library — coming soon 🔜 |
| Triple ISO cert is unclaimed regional differentiator | ISO callout on homepage + About Us — live ✅ |
| ESG credentials becoming MNC procurement criteria | `/sustainability` hub — coming soon 🔜 |
| Food additives + packaging are under-contested niches | Both get named sub-product treatment — live ✅ |
| No digital procurement capability visible publicly | Customer portal — coming soon 🔜 |
| Old site blog lacks B2B-relevant technical content | Technical blog pivot — coming soon 🔜 |
| Real testimonials are a competitive strength | 3 named testimonials on homepage — live ✅ |

---

## Implementation Roadmap

**Phase 1 — Foundation (Complete)**
Homepage · All 8 industry pages with product sub-categories · About Us with world map and team · Careers with live positions · Contact / Locations with all 9 offices · Language switcher UI

**Phase 2 — Discovery (Next)**
Products catalog with CAS search · TDS/SDS resource library · Suppliers page with named cards · Sustainability hub · Arabic + French content

**Phase 3 — Engagement (Future)**
Customer portal (RFQ + document vault) · Swahili/Bahasa/Hindi content · Application guides per segment · CoA on-request automation · EcoVadis certification pursuit

---

## What I Learned

**Research is underrated in web projects.** Most redesigns start with Figma. This one started with a competitive analysis, and it made every subsequent decision faster and more defensible. When a stakeholder asks "why do we need a Resources section?" — the answer is "because IMCD has 80 labs and buyers expect documentation," not "because it seems useful."

**Cursor + a clear brief = remarkable velocity.** The key was front-loading the thinking — clear IA, typed data models, and a design system *before* writing component code. Cursor excels when you know what you want to build.

**Next.js App Router is genuinely good now.** Server Components for static industry pages, Client Components only where interactivity was needed (language switcher, contact form, mega-menu). Clean performance story from day one.

**Shadcn/ui is the right call for B2B.** Not because it's trendy — because unstyled, accessible, copy-paste components give full control without fighting a framework. For a site where a 52-year-old procurement manager in Nairobi needs to find a TDS and download it in three clicks, accessibility isn't optional.

**Ship in phases.** The old WordPress site has things the redesign doesn't yet — the EcoVadis page, the Suppliers section, the full blog archive. Acknowledging that and planning the rollout honestly is better than waiting for everything to be perfect before deploying anything.

---

## TL;DR

Built a full IA redesign and Next.js website for a 35-year-old specialty chemical distributor operating across 40+ countries. Started from competitive research across 9 rivals, ran a UX heuristic evaluation against the existing WordPress site, and built a component-driven Next.js 15 app with Tailwind CSS and Shadcn/ui using Cursor as the development accelerant.

The foundation is live at [tawazonredesign.vercel.app](https://tawazonredesign.vercel.app) — homepage, all 8 industry segments with product sub-categories, about, careers, and all 9 office locations. The product catalog, resource library, sustainability hub, supplier directory, and customer portal are in the queue.

The research shaped the IA. The IA shaped the components. The components are shipping a site that will actually work for the people it's meant to serve.

---

*Case study written May 2026 · Stack: Next.js 15 · Tailwind CSS · Shadcn/ui · Cursor · TypeScript*
*Live preview: [tawazonredesign.vercel.app](https://tawazonredesign.vercel.app) · Existing site: [tawazon.com](https://tawazon.com)*
