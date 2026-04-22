import { useState } from "react";

const BRAND = {
  navy: "#0B1F3A",
  teal: "#1A7A6E",
  tealLight: "#E8F5F3",
  tealMid: "#2BA898",
  gold: "#C8922A",
  goldLight: "#FDF5E8",
  red: "#C0392B",
  redLight: "#FDF0EE",
  slate: "#4A5568",
  silver: "#F7F8FA",
  border: "#E2E8F0",
  new: "#1A7A6E",
  enhanced: "#C8922A",
  existing: "#4A5568",
};

const LEGEND = [
  { color: BRAND.navy, label: "L0 — Homepage", bg: "#E8EDF5" },
  { color: BRAND.teal, label: "L1 — Primary nav", bg: BRAND.tealLight },
  { color: BRAND.slate, label: "L2 — Section pages", bg: "#EEF2F7" },
  { color: "#2D5A8E", label: "L3 — Sub-pages / templates", bg: "#EBF0F8" },
  { color: BRAND.gold, label: "✦ New section", bg: BRAND.goldLight },
];

const TAG_NEW = { label: "NEW", bg: BRAND.goldLight, color: BRAND.gold, border: "#E8B84B" };
const TAG_ENH = { label: "ENHANCED", bg: "#EEF2F7", color: BRAND.slate, border: "#C5CDD8" };
const TAG_FIX = (h) => ({ label: h, bg: "#E8F5F3", color: BRAND.teal, border: "#9ECEC9" });

const SITE = [
  {
    id: "home",
    label: "Homepage",
    url: "/",
    color: BRAND.navy,
    bg: "#E8EDF5",
    tag: TAG_ENH,
    fixes: ["H1", "H3", "H8"],
    desc: "Focused CTA · Search bar · Carousel pause",
    children: [
      {
        id: "industries",
        label: "Industries",
        url: "/industries",
        color: BRAND.teal,
        bg: BRAND.tealLight,
        tag: TAG_ENH,
        fixes: ["H4"],
        desc: "Uniform template across all 8 segments",
        children: [
          {
            id: "coatings", label: "Coatings", url: "/industries/coatings", color: BRAND.slate, bg: "#EEF2F7",
            desc: "Binders · Pigments · Additives · Extenders",
            children: [
              { id: "c-binders", label: "Binders", url: "/industries/coatings/binders" },
              { id: "c-pigments", label: "Pigments", url: "/industries/coatings/pigments" },
              { id: "c-additives", label: "Additives", url: "/industries/coatings/additives" },
              { id: "c-extenders", label: "Specialty Extenders", url: "/industries/coatings/extenders" },
            ]
          },
          {
            id: "inks", label: "Inks", url: "/industries/inks", color: BRAND.slate, bg: "#EEF2F7",
            desc: "Binders · Pigments · Additives",
            children: [
              { id: "i-binders", label: "Binders", url: "/industries/inks/binders" },
              { id: "i-pigments", label: "Pigments", url: "/industries/inks/pigments" },
              { id: "i-additives", label: "Additives", url: "/industries/inks/additives" },
            ]
          },
          {
            id: "construction", label: "Construction Chemicals", url: "/industries/construction", color: BRAND.slate, bg: "#EEF2F7",
            desc: "Binders · Pigments · Additives · Misc",
            children: [
              { id: "cc-binders", label: "Binders", url: "/industries/construction/binders" },
              { id: "cc-pigments", label: "Pigments", url: "/industries/construction/pigments" },
              { id: "cc-additives", label: "Additives", url: "/industries/construction/additives" },
              { id: "cc-misc", label: "Miscellaneous", url: "/industries/construction/misc" },
            ]
          },
          {
            id: "plastics", label: "Plastics", url: "/industries/plastics", color: BRAND.slate, bg: "#EEF2F7",
            desc: "PVC · PET/PC · Polyolefin · Masterbatch",
            children: [
              { id: "pl-pvc", label: "PVC", url: "/industries/plastics/pvc" },
              { id: "pl-pet", label: "PET / PC & Eng. Polymers", url: "/industries/plastics/pet-pc" },
              { id: "pl-poly", label: "Polyolefin & Compounds", url: "/industries/plastics/polyolefin" },
              { id: "pl-master", label: "Masterbatch", url: "/industries/plastics/masterbatch" },
              { id: "pl-dosing", label: "Dosing Unit", url: "/industries/plastics/dosing-unit" },
            ]
          },
          {
            id: "packaging", label: "Packaging", url: "/industries/packaging", color: BRAND.slate, bg: "#EEF2F7",
            desc: "Films · Foil · Adhesives · Inks · Paper",
            children: [
              { id: "pk-films", label: "Films", url: "/industries/packaging/films" },
              { id: "pk-foil", label: "Aluminum Foil", url: "/industries/packaging/aluminum-foil" },
              { id: "pk-adhesives", label: "Adhesives", url: "/industries/packaging/adhesives" },
              { id: "pk-inks", label: "Inks", url: "/industries/packaging/inks" },
              { id: "pk-paper", label: "Extrusion Coated Paper", url: "/industries/packaging/extrusion-paper" },
            ]
          },
          {
            id: "fiberglass", label: "Fiberglass", url: "/industries/fiberglass", color: BRAND.slate, bg: "#EEF2F7",
            desc: "Tools · Resins · Gel coat · Release agents",
            children: [
              { id: "fg-tools", label: "Tools & Equipment", url: "/industries/fiberglass/tools" },
              { id: "fg-release", label: "Releasing Agents", url: "/industries/fiberglass/releasing-agents" },
              { id: "fg-clean", label: "Cleaning Agents", url: "/industries/fiberglass/cleaning-agents" },
              { id: "fg-resins", label: "GP Resins / Gelcoat", url: "/industries/fiberglass/gp-resins" },
            ]
          },
          {
            id: "rubber", label: "Rubber", url: "/industries/rubber", color: BRAND.slate, bg: "#EEF2F7",
            desc: "Pigments · Minerals · Waxes · Additives",
            children: [
              { id: "rb-pigments", label: "Pigments", url: "/industries/rubber/pigments" },
              { id: "rb-minerals", label: "Specialty Minerals", url: "/industries/rubber/minerals" },
              { id: "rb-waxes", label: "Waxes & Processing Aids", url: "/industries/rubber/waxes" },
              { id: "rb-additives", label: "Additives", url: "/industries/rubber/additives" },
            ]
          },
          {
            id: "food", label: "Food Additives", url: "/industries/food-additives", color: BRAND.slate, bg: "#EEF2F7",
            desc: "Sugar reduction · Vitamins · Nutraceuticals",
            children: [
              { id: "fa-sugar", label: "Sugar Reduction & Fibre", url: "/industries/food-additives/sugar-reduction" },
              { id: "fa-pell", label: "Pell™ Low-Sodium Baking", url: "/industries/food-additives/pell-baking" },
              { id: "fa-koda", label: "Koda™ Potassium Bicarbonate", url: "/industries/food-additives/koda" },
              { id: "fa-nutra", label: "Nutraceuticals", url: "/industries/food-additives/nutraceuticals" },
              { id: "fa-botanicals", label: "Botanicals", url: "/industries/food-additives/botanicals" },
              { id: "fa-vitamins", label: "Vitamins & Blends", url: "/industries/food-additives/vitamins" },
              { id: "fa-premix", label: "Vitamin Premixes", url: "/industries/food-additives/premixes" },
              { id: "fa-misc", label: "Miscellaneous", url: "/industries/food-additives/misc" },
            ]
          },
        ]
      },
      {
        id: "products",
        label: "Products",
        url: "/products",
        color: BRAND.teal,
        bg: BRAND.goldLight,
        tag: TAG_NEW,
        fixes: ["H1", "H6", "H7"],
        desc: "Searchable chemical catalog · CAS number lookup",
        children: [
          {
            id: "prod-search", label: "Search & Filter", url: "/products/search", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "By name · CAS number · segment · supplier",
            children: [
              { id: "ps-name", label: "By chemical name", url: "/products/search?filter=name" },
              { id: "ps-cas", label: "By CAS number", url: "/products/search?filter=cas" },
              { id: "ps-seg", label: "By industry segment", url: "/products/search?filter=segment" },
              { id: "ps-sup", label: "By supplier principal", url: "/products/search?filter=supplier" },
              { id: "ps-app", label: "By application type", url: "/products/search?filter=application" },
            ]
          },
          {
            id: "prod-detail", label: "Product Detail Page", url: "/products/[slug]", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "One page per product — TDS · SDS · RFQ",
            children: [
              { id: "pd-spec", label: "Technical specifications", url: "/products/[slug]#specs" },
              { id: "pd-apps", label: "Industry applications", url: "/products/[slug]#applications" },
              { id: "pd-supplier", label: "Principal supplier card", url: "/products/[slug]#supplier" },
              { id: "pd-tds", label: "Download TDS (PDF)", url: "/products/[slug]/tds" },
              { id: "pd-sds", label: "Download SDS (PDF)", url: "/products/[slug]/sds" },
              { id: "pd-coa", label: "Request CoA", url: "/products/[slug]/coa" },
              { id: "pd-rfq", label: "Segment RFQ form", url: "/products/[slug]#rfq" },
            ]
          },
        ]
      },
      {
        id: "resources",
        label: "Resources",
        url: "/resources",
        color: BRAND.teal,
        bg: BRAND.goldLight,
        tag: TAG_NEW,
        fixes: ["H5", "H10"],
        desc: "TDS · SDS · Application guides · FAQ",
        children: [
          {
            id: "res-tds", label: "TDS Library", url: "/resources/tds", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Filter by industry or product · PDF download",
            children: [
              { id: "tds-ind", label: "Filter by industry", url: "/resources/tds?filter=industry" },
              { id: "tds-prod", label: "Filter by product name", url: "/resources/tds?filter=product" },
              { id: "tds-dl", label: "Download PDF", url: "/resources/tds/[id]/download" },
            ]
          },
          {
            id: "res-sds", label: "SDS Library", url: "/resources/sds", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Compliant · searchable · downloadable",
            children: [
              { id: "sds-ind", label: "Filter by industry", url: "/resources/sds?filter=industry" },
              { id: "sds-prod", label: "Filter by product name", url: "/resources/sds?filter=product" },
              { id: "sds-dl", label: "Download PDF (compliant)", url: "/resources/sds/[id]/download" },
            ]
          },
          {
            id: "res-guides", label: "Application Guides", url: "/resources/guides", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Formulation notes per segment",
            children: [
              { id: "g-coat", label: "Coatings formulation guides", url: "/resources/guides/coatings" },
              { id: "g-const", label: "Construction chemical guides", url: "/resources/guides/construction" },
              { id: "g-food", label: "Food additive compliance", url: "/resources/guides/food-additives" },
              { id: "g-rubber", label: "Rubber processing guides", url: "/resources/guides/rubber" },
              { id: "g-pack", label: "Packaging material guides", url: "/resources/guides/packaging" },
            ]
          },
          {
            id: "res-faq", label: "FAQ", url: "/resources/faq", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "MOQ · lead times · certifications · compliance",
            children: [
              { id: "faq-moq", label: "Minimum order quantities", url: "/resources/faq#moq" },
              { id: "faq-lead", label: "Lead times by region", url: "/resources/faq#lead-times" },
              { id: "faq-cert", label: "Certifications explained", url: "/resources/faq#certifications" },
              { id: "faq-reg", label: "Regulatory compliance", url: "/resources/faq#regulatory" },
              { id: "faq-haz", label: "Hazmat storage & shipping", url: "/resources/faq#hazmat" },
            ]
          },
        ]
      },
      {
        id: "suppliers",
        label: "Suppliers",
        url: "/suppliers",
        color: BRAND.teal,
        bg: BRAND.tealLight,
        tag: TAG_ENH,
        fixes: ["H2", "H6"],
        desc: "Named cards · country · segment · product scope",
        children: [
          { id: "sup-filter", label: "Filter by segment", url: "/suppliers?filter=segment", color: "#2D5A8E", bg: "#EBF0F8", desc: "Coatings · Inks · Construction · etc." },
          {
            id: "sup-card", label: "Supplier card", url: "/suppliers/[slug]", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Name · logo · country · product scope",
            children: [
              { id: "sc-name", label: "Company name + logo", url: "/suppliers/[slug]#name" },
              { id: "sc-country", label: "Country of origin", url: "/suppliers/[slug]#country" },
              { id: "sc-cats", label: "Product categories", url: "/suppliers/[slug]#categories" },
              { id: "sc-prods", label: "Products from this principal", url: "/suppliers/[slug]/products" },
            ]
          },
          { id: "sup-become", label: "Become a Supplier", url: "/suppliers/become-a-supplier", color: "#2D5A8E", bg: "#EBF0F8", desc: "Application form for new principals" },
        ]
      },
      {
        id: "about",
        label: "About Us",
        url: "/about",
        color: BRAND.teal,
        bg: BRAND.tealLight,
        tag: TAG_ENH,
        fixes: ["H10"],
        desc: "MD message · Team · Ghobash · Certifications",
        children: [
          { id: "ab-who", label: "Who we are", url: "/about#who-we-are", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "ab-md", label: "MD message", url: "/about#md-message", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "ab-team", label: "Senior management team", url: "/about#team", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "ab-ghobash", label: "Ghobash Group", url: "/about#ghobash-group", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "ab-map", label: "Global presence map", url: "/about#global-presence", color: "#2D5A8E", bg: "#EBF0F8", desc: "6 subsidiaries" },
          {
            id: "ab-cert", label: "Certifications", url: "/about/certifications", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "ISO 9001 · 14001 · 45001 with explanations",
            children: [
              { id: "cert-9001", label: "ISO 9001:2015", url: "/about/certifications/iso-9001" },
              { id: "cert-14001", label: "ISO 14001:2015", url: "/about/certifications/iso-14001" },
              { id: "cert-45001", label: "ISO 45001:2018", url: "/about/certifications/iso-45001" },
            ]
          },
        ]
      },
      {
        id: "sustainability",
        label: "Sustainability",
        url: "/sustainability",
        color: BRAND.teal,
        bg: BRAND.goldLight,
        tag: TAG_NEW,
        fixes: ["H4", "H10"],
        desc: "ESG hub · EcoVadis roadmap · BBBEE",
        children: [
          { id: "sus-iso", label: "ISO certifications & scope", url: "/sustainability/certifications", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "sus-env", label: "Environmental responsibility", url: "/sustainability/environment", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "sus-esg", label: "ESG roadmap", url: "/sustainability/esg-roadmap", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "sus-eco", label: "EcoVadis progress", url: "/sustainability/ecovadis", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "sus-bbbee", label: "BBBEE (South Africa)", url: "/sustainability/bbbee", color: "#2D5A8E", bg: "#EBF0F8", desc: "Level 1 partnership" },
          { id: "sus-report", label: "Annual sustainability report", url: "/sustainability/annual-report", color: "#2D5A8E", bg: "#EBF0F8" },
        ]
      },
      {
        id: "media",
        label: "Media",
        url: "/media",
        color: BRAND.teal,
        bg: BRAND.tealLight,
        tag: TAG_ENH,
        fixes: ["H8", "H10"],
        desc: "Technical blog · News · Events",
        children: [
          {
            id: "med-blog", label: "Technical Blog", url: "/media/blog", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "For procurement & R&D professionals",
            children: [
              { id: "blog-form", label: "Formulation insights", url: "/media/blog/category/formulation" },
              { id: "blog-reg", label: "Regulatory updates", url: "/media/blog/category/regulatory" },
              { id: "blog-trend", label: "Industry trends", url: "/media/blog/category/trends" },
              { id: "blog-post", label: "Article (template)", url: "/media/blog/[slug]" },
            ]
          },
          {
            id: "med-news", label: "News", url: "/media/news", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Press releases · Trade show presence",
            children: [
              { id: "news-press", label: "Press releases", url: "/media/news/press" },
              { id: "news-events", label: "Trade shows & events", url: "/media/news/events" },
            ]
          },
        ]
      },
      {
        id: "careers",
        label: "Careers",
        url: "/careers",
        color: BRAND.teal,
        bg: BRAND.tealLight,
        tag: TAG_ENH,
        desc: "Why Tawazon · Open roles · Apply",
        children: [
          { id: "car-why", label: "Why Tawazon", url: "/careers#why-tawazon", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "car-jobs", label: "Open positions", url: "/careers/jobs", color: "#2D5A8E", bg: "#EBF0F8", desc: "Filter by location / division" },
          { id: "car-apply", label: "Application form", url: "/careers/apply", color: "#2D5A8E", bg: "#EBF0F8" },
        ]
      },
      {
        id: "contact",
        label: "Contact",
        url: "/contact",
        color: BRAND.teal,
        bg: BRAND.tealLight,
        tag: TAG_ENH,
        fixes: ["H3", "H9"],
        desc: "Enquiry routing · Regional offices · Validated form",
        children: [
          {
            id: "con-type", label: "Enquiry type selector", url: "/contact#type", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Routes to right team",
            children: [
              { id: "ct-general", label: "General enquiry", url: "/contact?type=general" },
              { id: "ct-product", label: "Product / sample request", url: "/contact?type=product" },
              { id: "ct-supplier", label: "Become a supplier", url: "/contact?type=supplier" },
              { id: "ct-media", label: "Media / press", url: "/contact?type=media" },
            ]
          },
          {
            id: "con-offices", label: "Regional offices", url: "/contact#offices", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "6 subsidiary offices",
            children: [
              { id: "off-uae", label: "UAE — Dubai (HQ)", url: "/contact#uae" },
              { id: "off-ksa", label: "Saudi Arabia — Riyadh/Jeddah", url: "/contact#ksa" },
              { id: "off-kenya", label: "Kenya — Nairobi", url: "/contact#kenya" },
              { id: "off-india", label: "India — Chennai", url: "/contact#india" },
              { id: "off-id", label: "Indonesia — Jakarta", url: "/contact#indonesia" },
              { id: "off-sa", label: "South Africa", url: "/contact#south-africa" },
            ]
          },
        ]
      },
      {
        id: "portal",
        label: "Customer Portal",
        url: "/portal",
        color: BRAND.teal,
        bg: BRAND.goldLight,
        tag: TAG_NEW,
        fixes: ["H3", "H7"],
        desc: "Login · RFQ tracking · Order history · Documents",
        children: [
          { id: "por-login", label: "Login / register", url: "/portal/login", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "por-rfq", label: "RFQ submission", url: "/portal/rfq/new", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "por-track", label: "RFQ tracking & status", url: "/portal/rfq", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "por-orders", label: "Order history", url: "/portal/orders", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "por-repeat", label: "Repeat order shortcut", url: "/portal/orders/reorder", color: "#2D5A8E", bg: "#EBF0F8" },
          {
            id: "por-docs", label: "Document vault", url: "/portal/documents", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "TDS · SDS · CoA · Invoices",
            children: [
              { id: "doc-tds", label: "TDS files", url: "/portal/documents/tds" },
              { id: "doc-sds", label: "SDS files", url: "/portal/documents/sds" },
              { id: "doc-coa", label: "CoA files", url: "/portal/documents/coa" },
              { id: "doc-inv", label: "Invoices", url: "/portal/documents/invoices" },
            ]
          },
          { id: "por-am", label: "Account manager contact", url: "/portal/account-manager", color: "#2D5A8E", bg: "#EBF0F8" },
        ]
      },
    ]
  }
];

function Tag({ t }) {
  if (!t) return null;
  return (
    <span style={{
      fontSize: 9, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
      padding: "2px 6px", borderRadius: 4, border: `1px solid ${t.border}`,
      background: t.bg, color: t.color, marginLeft: 6, flexShrink: 0, whiteSpace: "nowrap"
    }}>{t.label}</span>
  );
}

function FixBadge({ h }) {
  return (
    <span style={{
      fontSize: 9, fontWeight: 600, padding: "1px 5px", borderRadius: 3,
      background: "#E8F5F3", color: "#1A7A6E", border: "1px solid #9ECEC9",
      marginRight: 3, whiteSpace: "nowrap"
    }}>{h}</span>
  );
}

function Node({ node, depth = 0, isLast = false }) {
  const [open, setOpen] = useState(depth < 2);
  const hasChildren = node.children && node.children.length > 0;
  const isL0 = depth === 0;
  const isL1 = depth === 1;
  const isL2 = depth === 2;

  const indent = depth * 24;
  const nodeColor = node.color || BRAND.slate;
  const nodeBg = node.bg || "#F7F8FA";

  return (
    <div style={{ marginLeft: depth === 0 ? 0 : 0 }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 0, marginBottom: 4 }}>
        {/* Indent + connector lines */}
        {depth > 0 && (
          <div style={{ display: "flex", flexShrink: 0 }}>
            {Array.from({ length: depth }).map((_, i) => (
              <div key={i} style={{
                width: 24, borderLeft: i === depth - 1 ? `1.5px solid ${BRAND.border}` : "1.5px solid transparent",
                borderBottom: i === depth - 1 ? `1.5px solid ${BRAND.border}` : "none",
                height: 22, marginTop: -8, flexShrink: 0, alignSelf: "flex-start"
              }} />
            ))}
          </div>
        )}

        {/* Node box */}
        <div
          onClick={() => hasChildren && setOpen(o => !o)}
          style={{
            flex: 1, minWidth: 0,
            background: nodeBg,
            border: `1px solid ${isL0 ? nodeColor : isL1 ? nodeColor + "55" : BRAND.border}`,
            borderRadius: 8,
            padding: isL0 ? "12px 16px" : isL1 ? "9px 14px" : isL2 ? "7px 12px" : "5px 10px",
            cursor: hasChildren ? "pointer" : "default",
            transition: "box-shadow 0.15s, border-color 0.15s",
            boxShadow: isL0 ? "0 2px 8px rgba(11,31,58,0.08)" : "none",
          }}
          onMouseEnter={e => { if (hasChildren) e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = isL0 ? "0 2px 8px rgba(11,31,58,0.08)" : "none"; }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            {/* Toggle indicator */}
            {hasChildren && (
              <span style={{
                width: 16, height: 16, borderRadius: 4, background: nodeColor + "18",
                border: `1px solid ${nodeColor}44`, display: "flex", alignItems: "center",
                justifyContent: "center", flexShrink: 0, fontSize: 10, color: nodeColor, fontWeight: 700
              }}>
                {open ? "−" : "+"}
              </span>
            )}
            {!hasChildren && (
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: nodeColor + "55", flexShrink: 0 }} />
            )}

            {/* Label */}
            <span style={{
              fontSize: isL0 ? 16 : isL1 ? 14 : isL2 ? 13 : 12,
              fontWeight: isL0 ? 700 : isL1 ? 600 : isL2 ? 500 : 400,
              color: isL0 ? nodeColor : isL1 ? nodeColor : BRAND.navy,
              letterSpacing: isL0 ? "-0.01em" : "normal",
              lineHeight: 1.3
            }}>
              {node.label}
            </span>

            {/* Tag */}
            {node.tag && <Tag t={node.tag} />}

            {/* Heuristic fix badges */}
            {node.fixes && node.fixes.map(h => <FixBadge key={h} h={h} />)}

            {/* URL chip */}
            <span style={{
              fontSize: 10, color: "#94A3B8", fontFamily: "monospace",
              background: "#F1F5F9", padding: "1px 6px", borderRadius: 4,
              marginLeft: "auto", flexShrink: 0, whiteSpace: "nowrap", maxWidth: 200,
              overflow: "hidden", textOverflow: "ellipsis"
            }}>
              {node.url}
            </span>
          </div>

          {/* Description */}
          {node.desc && (
            <div style={{
              fontSize: 11, color: BRAND.slate, marginTop: 4,
              paddingLeft: hasChildren ? 24 : 16, lineHeight: 1.4
            }}>
              {node.desc}
            </div>
          )}
        </div>
      </div>

      {/* Children */}
      {hasChildren && open && (
        <div style={{ marginLeft: indent === 0 ? 16 : 0 }}>
          {node.children.map((child, i) => (
            <Node key={child.id} node={child} depth={depth + 1} isLast={i === node.children.length - 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SiteMap() {
  const [expandAll, setExpandAll] = useState(false);

  const totalPages = (() => {
    let count = 0;
    const walk = (nodes) => nodes.forEach(n => { count++; if (n.children) walk(n.children); });
    walk(SITE);
    return count;
  })();

  const newPages = 4;
  const enhancedPages = 6;

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      background: "#FAFBFC",
      minHeight: "100vh",
      padding: "0 0 40px"
    }}>
      {/* Header */}
      <div style={{
        background: BRAND.navy,
        padding: "28px 32px 24px",
        marginBottom: 0,
      }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64B5D6", marginBottom: 6, fontWeight: 500 }}>
              Tawazon Chemical Co. LLC
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 700, color: "#fff", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Proposed site map — redesign
            </h1>
            <p style={{ fontSize: 13, color: "#94A8C0", margin: "6px 0 0", lineHeight: 1.5 }}>
              Full IA based on heuristic evaluation · April 21, 2026
            </p>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {[
              { val: totalPages, label: "Total pages" },
              { val: newPages, label: "New sections" },
              { val: enhancedPages, label: "Enhanced" },
              { val: "8.3", label: "Target UX score" },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#fff" }}>{s.val}</div>
                <div style={{ fontSize: 10, color: "#94A8C0", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend + controls */}
      <div style={{
        background: "#fff", borderBottom: `1px solid ${BRAND.border}`,
        padding: "14px 32px", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap"
      }}>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", flex: 1 }}>
          {LEGEND.map(l => (
            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 12, height: 12, borderRadius: 3, background: l.bg, border: `1.5px solid ${l.color}` }} />
              <span style={{ fontSize: 11, color: BRAND.slate }}>{l.label}</span>
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: BRAND.goldLight, border: `1.5px solid ${BRAND.gold}` }} />
            <span style={{ fontSize: 11, color: BRAND.slate }}>✦ New section</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 9, fontWeight: 700, padding: "1px 5px", borderRadius: 3, background: "#E8F5F3", color: "#1A7A6E", border: "1px solid #9ECEC9" }}>H1</span>
            <span style={{ fontSize: 11, color: BRAND.slate }}>Heuristic fixed</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setExpandAll(true)}
            style={{ fontSize: 12, padding: "6px 14px", borderRadius: 6, border: `1px solid ${BRAND.border}`, background: "#fff", cursor: "pointer", color: BRAND.navy }}
          >
            Expand all
          </button>
          <button
            onClick={() => setExpandAll(false)}
            style={{ fontSize: 12, padding: "6px 14px", borderRadius: 6, border: `1px solid ${BRAND.border}`, background: "#fff", cursor: "pointer", color: BRAND.navy }}
          >
            Collapse all
          </button>
        </div>
      </div>

      {/* Global UX bar */}
      <div style={{
        background: "#E8F5F3", borderBottom: `1px solid #9ECEC9`,
        padding: "10px 32px", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap"
      }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: BRAND.teal, textTransform: "uppercase", letterSpacing: "0.07em" }}>Global UX (all pages)</span>
        {[
          "Site search in header",
          "Language switcher: AR · FR · SW · ID · HI · EN",
          "Back-to-top button",
          "Carousel pause/stop control (WCAG 2.3.3)",
          "Custom 404 with navigation",
          "Inline form validation",
        ].map(item => (
          <span key={item} style={{
            fontSize: 11, color: "#0F6E56", background: "#fff",
            border: "1px solid #9ECEC9", borderRadius: 4, padding: "2px 8px"
          }}>
            {item}
          </span>
        ))}
        <span style={{ marginLeft: "auto", fontSize: 10, color: BRAND.teal, fontWeight: 500 }}>Fixes H1 · H3 · H7 · H9</span>
      </div>

      {/* Tree */}
      <div style={{ padding: "24px 32px" }} key={expandAll}>
        {SITE.map(node => (
          <ExpandController key={node.id} node={node} expandAll={expandAll} />
        ))}
      </div>

      {/* Footer */}
      <div style={{ padding: "0 32px" }}>
        <div style={{
          background: "#fff", border: `1px solid ${BRAND.border}`, borderRadius: 10,
          padding: "16px 20px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16
        }}>
          {[
            { phase: "Phase 1 — 0–3 months", color: BRAND.red, bg: "#FDF0EE", items: ["Resources hub: TDS + SDS library", "Redesigned Contact with routing", "Site search in header", "Uniform industry page template", "Blog content moderation + pivot"] },
            { phase: "Phase 2 — 3–6 months", color: BRAND.gold, bg: BRAND.goldLight, items: ["Products catalog with CAS search", "Arabic + French language support", "Redesigned Suppliers page", "Sustainability hub", "Segment-specific CTAs"] },
            { phase: "Phase 3 — 6–12 months", color: BRAND.teal, bg: BRAND.tealLight, items: ["Customer portal (RFQ + docs)", "Swahili, Bahasa, Hindi languages", "Application guides per segment", "CoA on-request automation", "EcoVadis certification pursuit"] },
          ].map(p => (
            <div key={p.phase}>
              <div style={{ fontSize: 11, fontWeight: 600, color: p.color, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>{p.phase}</div>
              {p.items.map(item => (
                <div key={item} style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                  <span style={{ color: p.color, fontSize: 12, flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 11, color: BRAND.slate, lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExpandController({ node, expandAll }) {
  return <Node node={node} depth={0} />;
}
