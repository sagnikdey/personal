# QuickStop — AI-Assisted Design & Development Case Study

**Role:** Product Designer + iOS Developer  
**Tools:** Claude (AI), Figma, Figma MCP, Apple Design System, SwiftUI / UIKit  
**Status:** v1 — In Progress

---

## Overview

QuickStop is a convenience store app built around a single premise: give customers their time back. The insight driving the whole project is that convenience stores fail at the one thing in their name — lines, out-of-stock items, awkward checkout. The app targets five distinct user mindsets, each with a different definition of "fast."

This case study documents an end-to-end AI-assisted workflow, from research and strategy through information architecture, interaction design in Figma, and a full port to native iOS in Swift.

---

## The Problem

Current convenience store apps (where they exist at all) are glorified loyalty cards. They don't solve the core friction: uncertainty. Is the item in stock? How long is the line? Will my mobile order be ready, or sitting open on a shelf anyone can grab? The opportunity was to build for *certainty* — and let speed follow naturally from that.

---

## Process

### 1. User Research & Personas

The first step was defining who the app had to serve. Using Claude, five personas were developed from a bottom-up analysis of real convenience store use patterns — not broad demographics, but specific *jobs to be done* at different times of day.

| # | Persona | Archetype | Core need |
|---|---------|-----------|-----------|
| 01 | Marcus Hale, 32, Sales Rep | The Commuter | Order-ahead, 90-second in-and-out |
| 02 | Priya Ramanathan, 28, ER Nurse | The Night Shifter | Curbside pickup, fresh food transparency at 3am |
| 03 | Danny Reyes, 41, Contractor | The Bulk Buyer | Group orders, business receipts, crew presets |
| 04 | Zoe Kapoor, 19, Student | The Impulse Local | Scan-and-go, discovery, three-tap max |
| 05 | Sarah Mitchell, 38, Parent/WFH | The Emergency Errand | Sub-15min delivery, verified real-time stock |

Each persona output included pain points, needs, and a priority weighting across dimensions like Speed, Freshness, Reliability, and Discovery. These became the design decision criteria throughout the project.

**Key insight:** Across all five, the unifying need is *certainty* — certainty that the item is in stock, that the line won't kill them, that the trip will take exactly as long as expected.

---

### 2. Information Architecture

With the personas defined, the IA was worked out iteratively with Claude — proposing structures, stress-testing them against each persona's flow, and revising.

**Initial structure (v0.1):** Five tabs — Home, Shop, Orders, Store, You.

**Key decision — Scan & Go promotion:** Scan & Go was originally nested inside Shop as a mode. It was promoted to a top-level tab because:
- It's a *mode of being in the store*, not a browsing mode
- It has a fundamentally different input model (camera-first vs. browse/search)
- Zoe's "three taps or abandon" constraint is much easier to hit from the tab bar

**To keep the nav at five tabs:** Store (live inventory, hours, locations) was merged into Home's smart header rather than living as its own tab. This pulls the "certainty layer" closer to the first screen every user sees.

**Final nav (v0.3):**

```
[ Home ]  [ Shop ]  [ Scan ]  [ Orders ]  [ You ]
```

| Tab | Purpose | Primary persona |
|-----|---------|-----------------|
| Home | Smart entry — reorder, quick actions, store status | Marcus, Sarah |
| Shop | Browse catalog, Order Ahead + Delivery modes | Zoe, Priya |
| Scan | Camera-first in-store checkout | Zoe, Marcus |
| Orders | Active + historical, all pickup/delivery methods | All |
| You | Profile, payment, loyalty | All |

**Deferred to v2:** Group/crew ordering, business accounts, itemized tax receipts — scoped out to keep v1 shippable.

---

### 3. Shop Taxonomy

The shop section was the most structurally complex — 10 top-level categories, each with subcategories, special filters, and two age-gated categories requiring a separate verification model.

**10 top-level categories:**

1. Hot Food & Pizza
2. Coffee & Hot Drinks
3. Cold Drinks
4. Snacks & Candy
5. Fresh Food
6. Ice Cream & Frozen
7. Beer, Wine & Spirits *(age-gated)*
8. Tobacco & Vaping *(age-gated)*
9. Grocery & Household
10. Health & Beauty

**Age-gated model (v1 — trust-and-confirm):**
- DOB stored at account level (entered once)
- One-time-per-session cart acknowledgement
- Manual visual ID check at handoff by driver or associate
- No in-app ID scanning — deferred to v2 as a drop-in addition to the flow

**Cross-cutting features tied directly to personas:**
- *"The Usual"* — history-driven reorder strip (Marcus)
- *"New This Week"* — discovery strip, excludes age-gated (Zoe)
- *"Need It Now"* — emergency shortcut preset (Sarah)
- *"Running Low?"* — cadence-based reorder prompts

---

### 4. Design System Setup

Before designing screens, the color system was established. The brand palette was extracted from Figma's Apple Design System file via Figma MCP, then exported as a production-ready Swift file.

**Brand colors:**
- `brandPrimary` — Teal `#30C5FF` (light & dark identical)
- `brandAccent1` — Forest `#5C946E`
- `brandAccent12` — Sage `#80C2AF`
- `brandAccent13` — Sky `#A0DDE6`

The output was `DSColors.swift` — a full SwiftUI + UIKit extension covering brand colors, system backgrounds (primary/secondary/tertiary with elevated variants), grouped backgrounds, labels, vibrant labels, fills, separators, and overlays. 70+ tokens total, all with Light/Dark mode values.

This file was generated through an AI-assisted workflow using Figma MCP to extract variable values directly from the Figma file, removing the manual copy-paste step entirely.

---

### 5. Screen Design in Figma

Screens were built in Figma using components from the Apple Design System library, with QuickStop brand tokens applied. The Figma MCP connection allowed Claude to write and execute plugin code directly in the file — creating frames, placing components, setting fills, and wiring up auto-layout — rather than manually building each screen.

**Screens produced:**

- **Shop Landing** — search bar, mode selector (Order Ahead / Delivery), "The Usual" card, 10-category grid with age-gated lock badges
- **Cold Drinks category page** — subcategory chips, featured banner, sectioned product grid with stock indicators
- **Product Detail** — product image, nutrition facts grid (Calories / Sugar / Caffeine / Serving), "Frequently bought together" strip
- **Onboarding flow (6 screens)** — Value prop, Location permission, Category preferences, Sign-in, First order preset, Success + habit prompt

Design language: SF Pro throughout, QuickStop teal for primary actions, iOS system greens/oranges/reds for stock status, `#F2F2F7` grouped backgrounds, 14pt card radius, continuous corners.

---

### 6. iOS Development in Swift

The designs were ported to native iOS using SwiftUI and UIKit, using the `DSColors.swift` token file as the bridge between design and code.

**Implementation highlights:**

- Color tokens from `DSColors.swift` used directly in SwiftUI views via `Color.brandPrimary`, `Color.backgroundSecondary`, etc. — no hardcoded hex values in view code
- UIKit extensions on `UIColor` for components that required UIKit interop
- Asset catalog structure follows the Figma variable group hierarchy (`Brand/Primary`, `Backgrounds/Secondary`, `Labels/Primary`, etc.) — making design-to-code handoff mechanical rather than interpretive
- Light/Dark mode handled entirely at the token level — no conditional appearance checks in view logic

---

## iOS Development Approach

### Project Structure

The Swift project is organised around a strict separation of concerns, using an atomic design hierarchy for UI components and a feature-based structure for product areas.

```
Quickpitstop/
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
  - Stripe 23.32.0
```

### Architecture Decisions

**Atomic Design for Components**

Components are split into three tiers matching the Figma file structure:

- **Atoms** — single-purpose primitives that wrap iOS system controls with design system tokens applied (e.g. `DSButton` applies brand colors and typography; `DSLabel` applies the correct type scale). No business logic.
- **Molecules** — composed from atoms to represent a product concept: `ProductCard` combines `DSLabel`, `PriceLabel`, `StockBadge`, and `DSButton` into a single reusable unit. `CartItemRow` composes quantity, price, and image into a list-ready component.
- **Organisms** — full UI sections assembled from molecules: `ProductGrid` handles layout and state for a list of `ProductCard`s; `PromoBannerCarousel` manages scroll state across multiple `PromoBanner` instances.

This mirrors the Figma component hierarchy directly, making design-to-code handoff straightforward — a molecule in Figma maps to a molecule in Swift.

**Design System Tokens**

All visual decisions are centralised in the `DesignSystem/Tokens/` layer:

- `DSColors` — brand and semantic colors with Light/Dark mode variants, sourced from Figma variables via MCP
- `DSTypography` — type scale matching SF Pro sizes used in Figma
- `DSSpacing` — spacing constants used across padding and layout
- `DSRadius` — corner radius values (14pt cards, 10pt buttons, etc.)
- `DSShadow` — elevation styles for cards and sheets
- `View+DS` — SwiftUI view modifier extensions that apply token combinations in a single call

No hardcoded hex values or magic numbers appear in feature or component code — everything references a token.

**Feature-Based Organisation**

Product areas (Home, Cart, Orders, Search, Account, Auth) each live in their own folder under `Features/`. Each feature owns its views, and state is managed through the shared `ViewModels/` layer. `PreviewMocks` provides fixture data for SwiftUI previews across all features without requiring a live backend.

**Package Dependencies**

- **ConvexMobile 0.7.0** — real-time backend sync for live inventory, order status, and stock levels. Directly addresses the core product promise: certainty about what's in stock and where an order is.
- **Stripe 23.32.0** — payment processing for checkout flows.

### Cursor-Assisted Development

The Swift implementation was built using Cursor with the project structure and `DSColors.swift` token file as persistent context. Key workflows:

- Component scaffolding — Cursor generated the boilerplate for each atom and molecule from a description of its Figma equivalent, with tokens applied from `DSColors` and `DSTypography` automatically
- Token referencing — rather than looking up hex values or sizes, Cursor resolved the correct token for each use case from the existing design system files in context
- Preview generation — `PreviewMocks` stubs were generated alongside each component so SwiftUI previews worked immediately without a backend connection
- Refactoring — when token names changed during design system iteration, Cursor propagated the rename across all component files in a single pass

---

## AI Workflow — What Actually Changed

This project was used as a test of how far an AI-assisted workflow could go end-to-end. The honest summary:

**What AI accelerated significantly:**
- Persona generation and synthesis — hours → under an hour
- IA iteration — proposing, critiquing, and revising structure in the same session
- Shop taxonomy — category naming, subcategory logic, age-gating model, edge cases
- DSColors.swift — extracted directly from Figma rather than transcribed manually
- Figma screen construction — plugin code written and executed via MCP

**What still required human judgment:**
- Deciding *which* structural options were right (e.g. Scan & Go promotion, merging Store into Home)
- Visual taste — verifying designs looked right, not just structurally correct
- Scoping decisions — what goes in v1 vs. v2
- Swift architecture decisions during the native port

**The net effect:** The gap between concept and testable designs compressed substantially. The workflow didn't remove design judgment — it removed the time between having a judgment and seeing it rendered.

---

## Deliverables

| Artifact | Format | Description |
|----------|--------|-------------|
| `personas.html` | HTML | Five user personas with pain points, needs, priority bars |
| `quickstop-ia.md` | Markdown | Full IA v0.3, 5-tab nav structure |
| `quickstop-shop-categories.md` | Markdown | Shop taxonomy v0.4, 10 categories, age-gated model |
| `DSColors.swift` | Swift | Full color token file, SwiftUI + UIKit |
| Figma — Design file | Figma | Shop Landing, Cold Drinks, Product Detail, Onboarding (6 screens) |
| iOS port | Swift | Native implementation using DSColors tokens |

---

## Open Questions (v1)

1. **First-time DOB prompt** — onboarding (less friction later) vs. just-in-time (only when needed)?
2. **Under-21 account behavior** — hide age-gated categories entirely, or show locked state?
3. **Scan & Go geofencing** — require in-store location to activate scanner, or always available?
4. **Home personalization** — how aggressive on day one with no behavior history?

---

## What's Next

- Age-gated checkpoint sheet (the ID-required modal at cart level)
- Orders tab — active order tracking, pickup method screens
- Scan & Go flow — scanner UI, cart drawer, exit & pay
- v2 scoping: crew/group ordering, business accounts, in-app ID verification