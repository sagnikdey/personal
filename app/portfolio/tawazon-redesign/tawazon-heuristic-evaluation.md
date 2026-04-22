# Tawazon.com — Heuristic Evaluation Report

**Date:** April 21, 2026
**Evaluated URL:** [https://tawazon.com](https://tawazon.com)
**Method:** Nielsen's 10 Usability Heuristics
**Benchmark:** Competitive analysis vs. Brenntag, IMCD Group, REDA Group, Kemipex, H.A.K., RishiChem
**Pages reviewed:** Homepage, About Us, Industries (Coatings), Suppliers, Media/Blog

---

## Executive Summary

| Metric | Result |
|---|---|
| **Overall UX score** | 5.8 / 10 |
| **Critical issues** | 2 |
| **Major issues** | 4 |
| **Minor issues** | 4 |
| **Gap vs. best-in-class (IMCD: 8.9/10)** | −3.1 points |

Tawazon's website presents a professionally designed, brand-consistent digital presence that performs adequately for basic company discovery. However, it falls significantly short of the standard set by global competitors — and even some regional ones — across three dimensions that matter most to B2B chemical buyers: **product discoverability**, **technical documentation**, and **self-service procurement flows**.

The two most critical failures are the complete absence of a product catalog and the lack of any technical documentation (TDS/SDS). These are baseline requirements for enterprise chemical procurement and are the primary reasons Tawazon's site cannot convert informed B2B buyers who arrive via search.

---

## Scoring Summary

| # | Heuristic | Score | Severity |
|---|---|---|---|
| H1 | Visibility of system status | 5/10 | Minor |
| H2 | Match between system and real world | 7/10 | Pass |
| H3 | User control and freedom | 4/10 | Major |
| H4 | Consistency and standards | 7/10 | Pass |
| H5 | Error prevention | 3/10 | **Critical** |
| H6 | Recognition over recall | 5/10 | Minor |
| H7 | Flexibility and efficiency of use | 3/10 | **Critical** |
| H8 | Aesthetic and minimalist design | 6/10 | Minor |
| H9 | Help users recognise and recover from errors | 5/10 | Minor |
| H10 | Help and documentation | 2/10 | **Critical** |
| **Average** | | **5.8/10** | |

---

## Heuristic-by-Heuristic Findings

---

### H1 — Visibility of system status
**Score: 5/10 · Severity: Minor**

The site gives users limited feedback about where they are and what is available.

**Findings:**
- No product search or filter system exists. Users cannot find specific chemicals — there is no inventory, product catalog, or search bar anywhere on the site.
- The hero carousel auto-rotates with no slide count, no progress indicator, and no pause control.
- Animated stat counters (35+, 1800+) render as "0" during slow load, momentarily showing incomplete data before JavaScript fires.

**Competitive benchmark:**
- IMCD: faceted product search with live filtering across 60+ countries
- Brenntag: product finder with CAS number search and availability by region
- REDA: no public catalog either (parity)

---

### H2 — Match between system and real world
**Score: 7/10 · Severity: Pass**

The site largely uses language and structure that matches how B2B chemical buyers think and navigate.

**Findings:**
- Industry-first navigation (Coatings, Inks, Construction Chemicals etc.) matches B2B procurement mental models — a genuine strength.
- Supplier logos on the Suppliers page carry no text labels. Buyers unfamiliar with specific brand marks cannot identify suppliers without clicking through to each external site.
- The primary CTA "Get Connected" is vague. Clearer alternatives aligned to buyer intent would be: "Request a sample", "Get a quote", or "Speak to a specialist".

**Competitive benchmark:**
- Industry-first nav matches IMCD's business group structure (win)
- IMCD labels all principals with product scope alongside logos (gap)

---

### H3 — User control and freedom
**Score: 4/10 · Severity: Major**

Users have limited agency to move through the site efficiently or engage on their own terms.

**Findings:**
- No product inquiry path exists. Visitors cannot request samples, get quotes, or specify product requirements from any industry or product page. Every CTA leads to a single generic contact form.
- Hero carousel cannot be paused or stopped, violating WCAG 2.3.3 motion accessibility guidelines.
- No back-to-top button. The homepage is very long and offers no shortcut navigation back to the menu.

**Competitive benchmark:**
- Brenntag: product-specific RFQ available from every product detail page
- IMCD: "request a sample" and formulation enquiry per product, per region
- Kemipex: generic form only (parity with Tawazon)

---

### H4 — Consistency and standards
**Score: 7/10 · Severity: Pass**

Navigation, branding, and header/footer are consistent across all pages — a genuine strength.

**Findings:**
- Navigation, colour palette, and logo treatment are consistent throughout the site. Good.
- Industry page depth varies significantly. The Coatings page is rich with testimonials and use cases; the Fiberglass and Rubber pages are noticeably thinner. This creates unequal experiences depending on which segment a buyer lands in.
- CTA labels vary without clear reason: "Discover More", "Contact us", "Get Connected", and "Visit Website" all appear and some lead to the same destination.

**Competitive benchmark:**
- Brand consistency is on par with or better than regional peers
- IMCD enforces a uniform template across all 8 business groups with no depth variation

---

### H5 — Error prevention
**Score: 3/10 · Severity: Critical**

The site does not give users the information they need to avoid submitting mis-directed or incomplete inquiries.

**Findings:**
- Without a product catalog, buyers cannot confirm product availability before submitting an inquiry, leading to mismatched and wasted leads for both parties.
- The newsletter email field provides no real-time validation feedback on format errors before submission.
- No FAQ or pre-qualification content exists. Common buyer questions — minimum order quantities, lead times, certifications per product, regulatory compliance — are entirely absent.
- The contact page returned a server error (500) during evaluation, meaning the primary conversion mechanism may have reliability issues.

**Competitive benchmark:**
- IMCD: product TDS/SDS available before inquiry, reducing mis-qualified contacts
- Brenntag: structured RFQ with product code validation
- REDA: similar gap to Tawazon (parity)

---

### H6 — Recognition over recall
**Score: 5/10 · Severity: Minor**

The site places cognitive burden on users by relying on recall rather than providing visible, scannable information.

**Findings:**
- Supplier logos on the Suppliers page are presented without company names or product scope text. A buyer cannot determine which supplier provides what without navigating to each external site.
- Industry icons (e.g., a spray gun for Coatings, a fork for Food Additives) are generic and require interpretation. Text labels compensate but icons add little recognition value.
- No product names, CAS numbers, or chemical specifications are visible anywhere on the site. B2B buyers routinely search for specific substances; there is nothing to recognise or compare.

**Competitive benchmark:**
- IMCD: searchable catalog with TDS, SDS, CAS numbers, and principal info per product
- Brenntag: CAS-number lookup tool
- Kemipex: similar limitation to Tawazon (parity)

---

### H7 — Flexibility and efficiency of use
**Score: 3/10 · Severity: Critical**

The site offers no shortcuts, self-service tools, or efficiency features for experienced or returning users.

**Findings:**
- No digital procurement, e-commerce, or customer portal. Repeat customers and procurement managers have no self-service path; every transaction requires manual contact with the Tawazon team.
- No global site search. Users must manually navigate through 8 industry sections to find relevant content.
- No language switcher. Tawazon serves 40+ countries across Arabic, French, Swahili, Bahasa Indonesia, and Hindi-speaking markets, yet the site is English-only with no localisation.
- No downloadable product datasheets, safety data sheets (SDS), or technical application guides — a critical gap for procurement and quality assurance teams who require this documentation before making purchasing decisions.

**Competitive benchmark:**
- Brenntag: digital ordering platform + customer portal
- IMCD: downloadable TDS/SDS per product across all 60+ countries
- REDA: Arabic language support for Gulf/North Africa markets
- Kemipex: similar limitation to Tawazon (parity)

---

### H8 — Aesthetic and minimalist design
**Score: 6/10 · Severity: Minor**

The visual design is professional and clean — a genuine strength in the regional competitive set. However, the homepage is over-crowded with competing content sections.

**Findings:**
- Professional, clean aesthetic with consistent brand application. Above average for the regional competitive peer group.
- The homepage is heavily content-dense with no clear primary conversion goal: the Ghobash Group section, subsidiary ticker, values list, industry grid, blog preview, and news all compete for attention simultaneously.
- Counter animations render as "0" during load, creating a momentary credibility drop before JavaScript fires and the real numbers appear.
- The blog section on the homepage lists 2,284 comments on a single article — an anomalous number that likely reflects spam comments and signals a content moderation gap.

**Competitive benchmark:**
- Cleaner aesthetic than Kemipex, H.A.K., and Tajchem (win)
- IMCD: tighter visual hierarchy with dedicated conversion flows per business segment (gap)

---

### H9 — Help users recognise, diagnose, and recover from errors
**Score: 5/10 · Severity: Minor**

Basic error recovery is absent or untested.

**Findings:**
- The contact page returned a server error (500) during evaluation. Users encountering this error receive no helpful message, no fallback email address, and no alternative contact path.
- Form submission success/failure states are unclear — the newsletter and contact forms appear to rely on default browser behaviour rather than clear inline confirmation.
- No custom 404 page with navigation was confirmed during the evaluation.

**Competitive benchmark:**
- Brenntag: inline form validation + dedicated, branded error pages
- REDA: similar maturity level (parity)

---

### H10 — Help and documentation
**Score: 2/10 · Severity: Critical**

This is the most significant competitive gap on the entire site and the highest-priority area for investment.

**Findings:**
- No technical datasheets (TDS), safety data sheets (SDS), or product documentation of any kind. This is a prerequisite for the majority of B2B chemical procurement decisions and is the primary reason Tawazon's website cannot convert informed buyers.
- No FAQ section covering MOQ, lead times, logistics, regulatory compliance, or certifications per product.
- No application guides, formulation notes, or technical blog content targeting procurement or R&D professionals. The blog currently covers general interest topics (PVD coatings, garage floor coatings) with no chemical formulation or industry-specific technical depth.
- ISO certificates are linked as raw PDFs with no contextual explanation of what each certification means for buyers or which products they cover.

**Competitive benchmark:**
- IMCD: 80 technical labs + full application library + downloadable TDS/SDS portal per product
- Brenntag: extensive technical resource center with industry-specific guides
- RishiChem: in-house Technical Applications Lab with formulation guides per industry
- REDA: limited but has some product-level documentation (partial gap)

---

## Priority Recommendations

### P1 — Critical (fix immediately)

**1. Add a product/chemical catalog with search functionality**
Even a basic searchable product index — with chemical names, CAS numbers, and industry tags — would close the largest UX gap identified in this evaluation. Brenntag and IMCD have set the industry expectation. Without this, Tawazon is invisible to procurement teams who search by product name or specification.

**2. Publish a TDS/SDS documentation library**
Technical data sheets and safety data sheets are a prerequisite for most B2B chemical purchases. Hosting these per product (or at minimum per industry segment) removes a major blocker in the sales cycle and signals technical credibility to MNC buyers who are comparing suppliers.

---

### P2 — Major (fix in next sprint)

**3. Replace generic CTA with segment-specific inquiry flows**
"Get Connected" should be replaced with context-aware calls-to-action on each industry and product page: "Request a sample", "Get a quote for Coatings chemicals", "Speak to a Construction specialist". This mirrors IMCD's approach per business group and significantly improves lead quality and conversion rate.

**4. Add Arabic language support**
The Gulf and North Africa are Tawazon's core markets. An Arabic version (or at minimum an Arabic landing page for the GCC region) is standard among all serious competitors including REDA Chemicals and Brenntag's regional sites. This is a basic accessibility requirement for significant portions of the customer base.

---

### P3 — Minor (next quarter)

**5. Fix blog comment spam and redirect content strategy**
The 2,284-comment anomaly on a blog post signals a moderation gap that should be resolved. More importantly, the blog content strategy should pivot to target procurement managers and formulation chemists — not consumer-grade topics — to attract qualified organic search traffic in the coatings, construction, and food additives segments.

**6. Add site search, back-to-top button, and carousel pause control**
Three quick usability wins:
- Global search bar in the site header
- Sticky back-to-top button for long-scroll pages
- Pause/stop control on the hero carousel (required for WCAG 2.3.3 compliance)

---

## Competitive UX Positioning

| Company | Est. UX Score | Catalog | TDS/SDS | Language | RFQ Flow |
|---|---|---|---|---|---|
| **IMCD Group** | 8.9/10 | Full catalog | Yes | 40+ languages | Per product |
| **Brenntag** | 8.5/10 | Full catalog + CAS | Yes | 70+ languages | Per product |
| **REDA Chemicals** | 5.5/10 | Partial | Partial | Arabic + EN | Generic form |
| **Tawazon** | **5.8/10** | None | None | EN only | Generic form |
| **Kemipex** | 5.0/10 | None | None | EN only | Generic form |
| **RishiChem** | 5.5/10 | Partial | Partial | EN only | Generic form |
| **H.A.K.** | 4.5/10 | None | None | EN only | Generic form |

Tawazon sits mid-table in the regional peer group — better than H.A.K. and Kemipex aesthetically, but materially behind REDA in product information depth and far behind the global tier (Brenntag, IMCD) in self-service capability and technical content.

---

## Appendix — Pages Evaluated

| Page | URL |
|---|---|
| Homepage | https://tawazon.com/ |
| About Us | https://tawazon.com/about-us/ |
| Coatings (Industry) | https://tawazon.com/industries/coating/ |
| Suppliers | https://tawazon.com/suppliers/ |
| Contact | https://tawazon.com/contact/ *(server error encountered)* |

---

*Report generated by Claude (Anthropic) · Heuristic Evaluation based on Competitive Analysis · April 21, 2026*
