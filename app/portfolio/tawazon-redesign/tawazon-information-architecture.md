# Tawazon.com — Information Architecture

**Date:** April 21, 2026
**Based on:** Heuristic Evaluation (Nielsen's 10 Heuristics) + Competitive Analysis
**Scope:** Full site restructure addressing all critical and major heuristic gaps
**Source evaluation score:** 5.8/10 → **Target score: 8.0+/10**

---

## 1. IA Design Principles

The proposed IA is grounded in three findings from the heuristic evaluation:

1. **Buyers arrive with a product in mind, not a company in mind.** The current IA is brand-first (About, Ghobash Group) and service-second. The new IA must be product-first and segment-specific — matching how B2B procurement actually works.

2. **Documentation is the primary conversion blocker.** The absence of TDS, SDS, and product specifications means the site cannot complete the evaluation phase of any B2B purchase cycle. This must be a top-level navigation destination, not buried in contact forms.

3. **Self-service scales; manual contact does not.** Every path currently terminates at a generic contact form. The redesigned IA introduces self-service layers (product search, RFQ flows, customer portal) that allow procurement teams to qualify, evaluate, and request products without requiring a sales call.

---

## 2. Current-State IA (As-Is)

### Site map — existing structure

```
tawazon.com (Homepage)
├── About us
│   ├── MD message
│   ├── Team
│   └── Certifications (ISO PDFs — raw links)
├── Industries
│   ├── Coatings
│   │   ├── Binders
│   │   ├── Pigments
│   │   ├── Additives
│   │   └── Specialty extenders
│   ├── Inks
│   │   ├── Binders
│   │   ├── Pigments
│   │   └── Additives
│   ├── Construction Chemicals
│   │   ├── Binders
│   │   ├── Pigments
│   │   ├── Additives
│   │   └── Miscellaneous
│   ├── Plastics
│   │   ├── PVC
│   │   ├── PET/PC and Engineering Polymers
│   │   ├── Polyolefin and Compounds
│   │   ├── Masterbatch
│   │   └── Dosing Unit
│   ├── Packaging
│   │   ├── Films
│   │   ├── Aluminum Foil
│   │   ├── Adhesives
│   │   ├── Inks
│   │   └── Extrusion Coated Paper
│   ├── Fiberglass
│   │   ├── Tools & Equipment
│   │   ├── Releasing Agents
│   │   ├── Cleaning Agents
│   │   └── GP Resins / Gelcoat
│   ├── Rubber
│   │   ├── Pigments
│   │   ├── Specialty Minerals
│   │   ├── Waxes & Processing Aids
│   │   └── Additives
│   └── Food Additives
│       ├── Sugar reduction & fiber
│       ├── Low-sodium baking (Pell™)
│       ├── Potassium bicarbonate (Koda™)
│       ├── Nutraceuticals
│       ├── Botanicals
│       ├── Vitamins & vitamin blends
│       ├── Vitamin premixes
│       └── Miscellaneous
├── Suppliers
│   └── Logo grid (by segment — no text labels)
├── Media
│   ├── News
│   └── Blogs (general interest topics)
├── Careers
│   └── Job listings
└── Contact
    └── Generic enquiry form
```

### Current-state heuristic gaps per section

| Section | Heuristic violated | Issue |
|---|---|---|
| Homepage | H1, H8 | No search; animated counters show "0" on load; dense competing sections |
| Industries | H3, H6 | All CTAs lead to same generic form; no TDS/SDS linked; page depth varies by segment |
| Suppliers | H6, H2 | Logo-only grid; no company names, product scope, or segment tags |
| Media / Blog | H8, H10 | Consumer-grade topics; 2,284 spam comments visible; no technical content |
| Contact | H5, H9 | Server error encountered during evaluation; no fallback or validation |
| Global | H7, H10 | No site search; English-only for 40+ country audience; zero product documentation |

---

## 3. Proposed IA (To-Be)

### Design decisions

Every structural change traces directly to a heuristic finding:

| Change | Heuristic fixed | Rationale |
|---|---|---|
| Add Products section with CAS/name search | H1, H6, H7 | B2B buyers search by chemical name/CAS number — without this, the site is invisible to them |
| Add Resources section (TDS, SDS, guides, FAQ) | H5, H10 | Documentation is a prerequisite for any regulated-sector purchase |
| Redesign industry pages with uniform template + RFQ | H3, H4 | Every segment should have same depth; context-specific CTAs convert better |
| Rename + redesign Suppliers page | H2, H6 | Supplier cards need names, flags, and product scope — not just logos |
| Add Customer Portal (login, RFQ tracker, order history) | H3, H7 | Self-service path for repeat buyers eliminates friction |
| Add language switcher (AR, FR, SW, ID, HI) | H7 | Serving 40+ countries in English-only is a critical accessibility and conversion gap |
| Add site search, back-to-top, carousel pause | H1, H3 | Quick wins for navigation efficiency and accessibility (WCAG 2.3.3) |
| Add Sustainability hub | H4, H10 | ISO certifications and ESG positioning need a dedicated, credible home |
| Redesign CTAs: segment-specific language | H2, H3 | "Get a quote for Coatings" converts better than "Get Connected" |
| Fix Media: technical editorial strategy | H8, H10 | Blog should target procurement/R&D audience, not consumer readers |

### Proposed site map — full structure

```
tawazon.com (Homepage)
│  [Fixes: H8] Focused primary CTA — segment selector → inquiry flow
│  [Fixes: H1] Search bar prominent in hero
│  [Fixes: H3] Carousel with pause/progress controls
│
├── Industries  (enhanced)
│   ├── [Uniform template across all 8 segments — fixes H4]
│   ├── Coatings
│   │   ├── Overview + applications
│   │   ├── Products in this segment → links to /products
│   │   ├── Principals (named, with scope)
│   │   ├── Technical resources → links to /resources
│   │   ├── Testimonials
│   │   └── Segment-specific RFQ: "Get a quote for Coatings"
│   ├── Inks [same template]
│   ├── Construction Chemicals [same template]
│   ├── Plastics [same template]
│   ├── Packaging [same template]
│   ├── Fiberglass [same template]
│   ├── Rubber [same template]
│   └── Food Additives [same template]
│
├── Products  ✦ NEW — fixes H1, H6, H7
│   ├── Search & filter
│   │   ├── By chemical name or CAS number
│   │   ├── By industry segment
│   │   ├── By supplier principal
│   │   └── By application type
│   └── Product detail page (one per product)
│       ├── Description & key properties
│       ├── Technical specifications
│       ├── Industry applications
│       ├── Linked supplier principal
│       ├── Downloads: TDS · SDS · CoA
│       └── Segment RFQ: "Request a sample / quote"
│
├── Resources  ✦ NEW — fixes H5, H10
│   ├── TDS library
│   │   ├── Filter by industry
│   │   ├── Filter by product name
│   │   └── Download PDF
│   ├── SDS library
│   │   ├── Filter by industry
│   │   ├── Filter by product name
│   │   └── Download PDF (compliant)
│   ├── Application guides
│   │   ├── Coatings formulation guides
│   │   ├── Construction chemical guides
│   │   ├── Food additive compliance guides
│   │   └── [per segment as published]
│   └── FAQ
│       ├── Minimum order quantities
│       ├── Lead times by region
│       ├── Certifications explained (ISO 9001/14001/45001)
│       ├── Regulatory compliance (GCC, Africa, India)
│       └── Hazmat storage & shipping
│
├── Suppliers  (redesigned) — fixes H2, H6
│   ├── Supplier overview with filter by segment
│   └── Supplier cards (each includes):
│       ├── Company name + logo
│       ├── Country of origin
│       ├── Product categories supplied
│       └── Link to products from this principal
│
├── About us  (enhanced)
│   ├── Who we are
│   ├── MD message
│   ├── Senior management team
│   ├── Ghobash Group relationship
│   ├── Global presence map (6 subsidiaries)
│   └── Certifications (ISO 9001 · 14001 · 45001 — with explanations)
│
├── Sustainability  ✦ NEW — fixes H4, H10
│   ├── ISO certifications (with explanations of scope)
│   ├── Environmental responsibility statement
│   ├── ESG roadmap
│   ├── EcoVadis certification progress
│   └── BBBEE (South Africa) — Level 1 partnership
│
├── Media  (refocused)
│   ├── News (press releases, trade show presence)
│   ├── Technical blog  [fixes H8, H10]
│   │   ├── Formulation insights (for R&D / technical buyers)
│   │   ├── Regulatory updates (MENA, Africa, SE Asia)
│   │   ├── Industry trends (coatings, food additives, packaging)
│   │   └── [Comment moderation enforced — spam purged]
│   └── Events & exhibitions
│
├── Careers
│   ├── Why Tawazon
│   ├── Open positions (by location / division)
│   └── Application form
│
├── Contact  (redesigned — fixes H3, H9)
│   ├── Enquiry type selector:
│   │   ├── General enquiry
│   │   ├── Product / sample request
│   │   ├── Become a supplier
│   │   └── Media / press
│   ├── Regional office directory (UAE · KSA · Kenya · India · Indonesia · South Africa)
│   ├── Email + phone per office
│   └── [Inline validation · Success/error states — fixes H9]
│
└── Customer Portal  ✦ NEW — fixes H3, H7
    ├── Login / register
    ├── RFQ submission
    ├── RFQ tracking & status
    ├── Order history
    ├── Repeat order shortcut
    ├── Document vault (TDS, SDS, CoA, invoices)
    └── Assigned account manager contact
```

---

## 4. Global UX Changes (Site-Wide)

These structural changes apply across all pages and are not tied to a single section:

### Navigation bar (enhanced)
```
[Logo]  Industries ▾  Products  Resources  Suppliers  About  Sustainability  Media
                                                       [Search 🔍]  [AR | EN ▾]  [Portal / Login]
```

Key changes from current nav:
- Products and Resources promoted to top-level nav (currently absent entirely)
- Language switcher added: Arabic (primary for Gulf/MENA), French, Swahili, Bahasa Indonesia, Hindi, English
- Customer Portal / Login in top-right
- Site search icon always visible

### Footer (enhanced)
```
Column 1: Company          Column 2: Industries       Column 3: Resources         Column 4: Connect
About Us                   Coatings                   TDS Library                 [UAE office]
Sustainability             Inks                       SDS Library                 [KSA office]
Certifications             Construction               Application Guides          [Kenya office]
Careers                    Plastics                   FAQ                         [India office]
Media                      Packaging                                              [Indonesia office]
Contact                    Fiberglass                 Column 5: Suppliers         [South Africa office]
                           Rubber                     Supplier directory
                           Food Additives             Become a supplier           Newsletter sign-up
                                                                                  Social: LinkedIn
```

---

## 5. Industry Page Template (Standardised)

Each of the 8 industry pages should follow this template — currently only Coatings has full depth; this brings all segments to parity (fixes H4):

```
[Industry name] — [tagline]
│
├── Hero: overview paragraph + segment-specific CTA
│   └── CTA: "Get a quote for [Industry]" or "Request a [Industry] sample"
│
├── Product categories (expandable)
│   └── Links to /products filtered by this segment
│
├── Key applications (use-case descriptions, 3–5)
│
├── Principals / suppliers for this segment
│   └── Named supplier cards with product scope
│
├── Technical resources
│   ├── Featured TDS for this segment
│   └── Link to full /resources library filtered by segment
│
├── Testimonials (3+ per segment — currently missing in Fiberglass/Rubber)
│
└── Segment RFQ form
    ├── Name, company, country
    ├── Product of interest (pre-filled with segment)
    ├── Quantity / timeline
    └── Attach specification (optional)
```

---

## 6. Product Detail Page Template (New)

Every product in the new /products catalog should use this template:

```
[Product name]  |  [CAS number]  |  [Segment tags]
│
├── Description (2–3 sentences: what it is, what it does)
│
├── Key properties table
│   ├── Chemical family
│   ├── Physical form
│   ├── Key performance attributes
│   └── Typical applications
│
├── Industry applications (icons + one-line descriptions)
│
├── Principal supplier (named card with logo)
│
├── Downloads
│   ├── Technical Data Sheet (TDS) — PDF
│   ├── Safety Data Sheet (SDS) — PDF
│   └── Certificate of Analysis (CoA) — PDF (on request)
│
├── Related products
│
└── Enquiry / RFQ (inline)
    ├── Pre-filled: product name
    ├── Quantity needed
    ├── Target application
    └── Submit → tracked in Customer Portal
```

---

## 7. Content Strategy Changes (Fixes H8, H10)

### Blog / Media pivot

| Current content type | Proposed content type |
|---|---|
| "What is PVD Coating?" (consumer) | "Formulating water-based coatings: binder selection guide" |
| "Garage floor coatings" (consumer) | "Regulatory update: food additive compliance in GCC markets" |
| General industry events | Tawazon-authored formulation notes per segment |
| (2,284 spam comments visible) | Comment moderation enabled; spam cleared |

Target audience: procurement managers, R&D chemists, formulation engineers, quality assurance teams.

### Certification page content

ISO certificates should not be raw PDF links. Each certification should have:
- What the standard covers
- What it means for buyers (quality assurance, environmental, occupational safety)
- When the certification was last renewed
- Download link to the certificate PDF

---

## 8. IA Change Summary by Heuristic

| Heuristic | Score (before) | Score (after) | Primary IA change |
|---|---|---|---|
| H1 Visibility of system status | 5/10 | 8/10 | Site search + product catalog + carousel controls |
| H2 Real-world match | 7/10 | 9/10 | Segment-specific CTAs + named supplier cards |
| H3 User control and freedom | 4/10 | 8/10 | Customer portal + per-segment RFQ + back-to-top |
| H4 Consistency and standards | 7/10 | 9/10 | Uniform industry page template across all 8 segments |
| H5 Error prevention | 3/10 | 8/10 | Product catalog reduces mis-qualified inquiries; form validation |
| H6 Recognition over recall | 5/10 | 8/10 | CAS search + named suppliers + product specs visible |
| H7 Flexibility and efficiency | 3/10 | 8/10 | Customer portal + language switcher + site search |
| H8 Aesthetic and minimalist | 6/10 | 8/10 | Focused homepage CTA + refined blog + content hierarchy |
| H9 Error recovery | 5/10 | 8/10 | Custom 404 + inline form validation + fallback contacts |
| H10 Help and documentation | 2/10 | 9/10 | Resources hub: TDS + SDS + FAQ + application guides |
| **Average** | **5.8/10** | **8.3/10** | |

---

## 9. Implementation Priorities

### Phase 1 — Critical (0–3 months)
1. Build /resources section: TDS and SDS library (even with 20 starter products)
2. Redesign contact page: enquiry type selector + inline validation + fallback contacts
3. Add site search (header-level global search)
4. Standardise industry page template across all 8 segments
5. Fix blog comment spam; redirect editorial to technical topics

### Phase 2 — Major (3–6 months)
1. Build /products catalog: searchable index with CAS numbers, industry tags, and product detail pages
2. Add language support: Arabic (priority for GCC/North Africa), French (West Africa)
3. Redesign Suppliers page: named cards with country + segment + scope
4. Add Sustainability hub: ISO explanations, ESG statement, EcoVadis roadmap
5. Deploy segment-specific CTAs across all industry pages

### Phase 3 — Enhance (6–12 months)
1. Build Customer Portal: RFQ tracker, order history, document vault
2. Add remaining language packs: Swahili, Bahasa Indonesia, Hindi
3. Develop application guides per industry segment
4. Integrate product documentation with portal (CoA on request, auto-delivery)
5. Pursue EcoVadis certification and publish annual sustainability report

---

## 10. Competitive IA Benchmark

| Feature | Tawazon (current) | Tawazon (proposed) | REDA | IMCD |
|---|---|---|---|---|
| Product catalog | None | Full + CAS search | Partial | Full |
| TDS/SDS library | None | Full | Partial | Full |
| Language support | EN only | AR, FR, SW, ID, HI, EN | AR + EN | 40+ languages |
| Customer portal | None | RFQ tracker + history | None | Yes |
| Segment-specific RFQ | None | Yes (per page) | Generic | Yes |
| FAQ | None | Yes | None | Yes |
| Sustainability hub | Inline only | Dedicated section | None | Dedicated |
| Blog — technical | No | Yes | No | Yes |

---

*Document generated by Claude (Anthropic) · Information Architecture based on Heuristic Evaluation · April 21, 2026*
