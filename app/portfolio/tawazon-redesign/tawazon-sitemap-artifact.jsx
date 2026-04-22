import { useState } from "react";

const BRAND = {
  navy: "#0B1F3A",
  teal: "#1A7A6E",
  tealLight: "#E8F5F3",
  gold: "#C8922A",
  goldLight: "#FDF5E8",
  slate: "#4A5568",
  border: "#E2E8F0",
};

const TAG_NEW = { label: "NEW", bg: "#FDF5E8", color: "#C8922A", border: "#E8B84B" };
const TAG_ENH = { label: "ENHANCED", bg: "#EEF2F7", color: "#4A5568", border: "#C5CDD8" };

const SITE_DATA = [
  {
    id: "home", label: "Homepage", url: "/", color: "#0B1F3A", bg: "#E8EDF5", tag: TAG_ENH,
    fixes: ["H1","H3","H8"], desc: "Focused CTA · Search bar · Carousel pause",
    children: [
      {
        id: "industries", label: "Industries", url: "/industries", color: "#1A7A6E", bg: "#E8F5F3", tag: TAG_ENH,
        fixes: ["H4"], desc: "Uniform template across all 8 segments",
        children: [
          { id: "coatings", label: "Coatings", url: "/industries/coatings", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Binders · Pigments · Additives · Extenders",
            children: [
              { id: "c-binders", label: "Binders", url: "/industries/coatings/binders" },
              { id: "c-pigments", label: "Pigments", url: "/industries/coatings/pigments" },
              { id: "c-additives", label: "Additives", url: "/industries/coatings/additives" },
              { id: "c-ext", label: "Specialty Extenders", url: "/industries/coatings/extenders" },
            ]
          },
          { id: "inks", label: "Inks", url: "/industries/inks", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Binders · Pigments · Additives",
            children: [
              { id: "i-bind", label: "Binders", url: "/industries/inks/binders" },
              { id: "i-pig", label: "Pigments", url: "/industries/inks/pigments" },
              { id: "i-add", label: "Additives", url: "/industries/inks/additives" },
            ]
          },
          { id: "construction", label: "Construction Chemicals", url: "/industries/construction", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Binders · Pigments · Additives · Misc",
            children: [
              { id: "cc-b", label: "Binders", url: "/industries/construction/binders" },
              { id: "cc-p", label: "Pigments", url: "/industries/construction/pigments" },
              { id: "cc-a", label: "Additives", url: "/industries/construction/additives" },
              { id: "cc-m", label: "Miscellaneous", url: "/industries/construction/misc" },
            ]
          },
          { id: "plastics", label: "Plastics", url: "/industries/plastics", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "PVC · PET/PC · Polyolefin · Masterbatch · Dosing",
            children: [
              { id: "pl-pvc", label: "PVC", url: "/industries/plastics/pvc" },
              { id: "pl-pet", label: "PET / PC & Eng. Polymers", url: "/industries/plastics/pet-pc" },
              { id: "pl-pol", label: "Polyolefin & Compounds", url: "/industries/plastics/polyolefin" },
              { id: "pl-mas", label: "Masterbatch", url: "/industries/plastics/masterbatch" },
              { id: "pl-dos", label: "Dosing Unit", url: "/industries/plastics/dosing-unit" },
            ]
          },
          { id: "packaging", label: "Packaging", url: "/industries/packaging", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Films · Foil · Adhesives · Inks · Paper",
            children: [
              { id: "pk-f", label: "Films", url: "/industries/packaging/films" },
              { id: "pk-fo", label: "Aluminum Foil", url: "/industries/packaging/foil" },
              { id: "pk-a", label: "Adhesives", url: "/industries/packaging/adhesives" },
              { id: "pk-i", label: "Inks", url: "/industries/packaging/inks" },
              { id: "pk-p", label: "Extrusion Coated Paper", url: "/industries/packaging/paper" },
            ]
          },
          { id: "fiberglass", label: "Fiberglass", url: "/industries/fiberglass", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Tools · Release agents · Cleaning agents · GP Resins",
            children: [
              { id: "fg-t", label: "Tools & Equipment", url: "/industries/fiberglass/tools" },
              { id: "fg-r", label: "Releasing Agents", url: "/industries/fiberglass/releasing-agents" },
              { id: "fg-c", label: "Cleaning Agents", url: "/industries/fiberglass/cleaning-agents" },
              { id: "fg-g", label: "GP Resins / Gelcoat", url: "/industries/fiberglass/gp-resins" },
            ]
          },
          { id: "rubber", label: "Rubber", url: "/industries/rubber", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Pigments · Minerals · Waxes · Additives",
            children: [
              { id: "rb-p", label: "Pigments", url: "/industries/rubber/pigments" },
              { id: "rb-m", label: "Specialty Minerals", url: "/industries/rubber/minerals" },
              { id: "rb-w", label: "Waxes & Processing Aids", url: "/industries/rubber/waxes" },
              { id: "rb-a", label: "Additives", url: "/industries/rubber/additives" },
            ]
          },
          { id: "food", label: "Food Additives", url: "/industries/food-additives", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Sugar reduction · Vitamins · Nutraceuticals · Botanicals",
            children: [
              { id: "fa-s", label: "Sugar Reduction & Fibre", url: "/industries/food-additives/sugar-reduction" },
              { id: "fa-p", label: "Pell™ Low-Sodium Baking", url: "/industries/food-additives/pell" },
              { id: "fa-k", label: "Koda™ Potassium Bicarbonate", url: "/industries/food-additives/koda" },
              { id: "fa-n", label: "Nutraceuticals", url: "/industries/food-additives/nutraceuticals" },
              { id: "fa-b", label: "Botanicals", url: "/industries/food-additives/botanicals" },
              { id: "fa-v", label: "Vitamins & Blends", url: "/industries/food-additives/vitamins" },
              { id: "fa-pr", label: "Vitamin Premixes", url: "/industries/food-additives/premixes" },
              { id: "fa-m", label: "Miscellaneous", url: "/industries/food-additives/misc" },
            ]
          },
        ]
      },
      {
        id: "products", label: "Products", url: "/products", color: "#1A7A6E", bg: "#FDF5E8", tag: TAG_NEW,
        fixes: ["H1","H6","H7"], desc: "Searchable chemical catalog · CAS number lookup",
        children: [
          { id: "ps", label: "Search & Filter", url: "/products/search", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Name · CAS number · segment · supplier · application",
            children: [
              { id: "ps-n", label: "By chemical name", url: "/products?filter=name" },
              { id: "ps-c", label: "By CAS number", url: "/products?filter=cas" },
              { id: "ps-s", label: "By industry segment", url: "/products?filter=segment" },
              { id: "ps-su", label: "By supplier principal", url: "/products?filter=supplier" },
              { id: "ps-a", label: "By application type", url: "/products?filter=application" },
            ]
          },
          { id: "pd", label: "Product Detail Page", url: "/products/[slug]", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "One page per product — specs · TDS · SDS · RFQ",
            children: [
              { id: "pd-sp", label: "Technical specifications", url: "/products/[slug]#specs" },
              { id: "pd-ap", label: "Industry applications", url: "/products/[slug]#applications" },
              { id: "pd-su", label: "Principal supplier card", url: "/products/[slug]#supplier" },
              { id: "pd-td", label: "Download TDS (PDF)", url: "/products/[slug]/tds" },
              { id: "pd-sd", label: "Download SDS (PDF)", url: "/products/[slug]/sds" },
              { id: "pd-co", label: "Request CoA", url: "/products/[slug]/coa" },
              { id: "pd-rf", label: "Segment RFQ form", url: "/products/[slug]#rfq" },
              { id: "pd-re", label: "Related products", url: "/products/[slug]#related" },
            ]
          },
        ]
      },
      {
        id: "resources", label: "Resources", url: "/resources", color: "#1A7A6E", bg: "#FDF5E8", tag: TAG_NEW,
        fixes: ["H5","H10"], desc: "TDS library · SDS library · Application guides · FAQ",
        children: [
          { id: "rt", label: "TDS Library", url: "/resources/tds", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Filter by industry or product · PDF download",
            children: [
              { id: "rt-i", label: "Filter by industry", url: "/resources/tds?filter=industry" },
              { id: "rt-p", label: "Filter by product name", url: "/resources/tds?filter=product" },
              { id: "rt-d", label: "Download PDF", url: "/resources/tds/[id]/download" },
            ]
          },
          { id: "rs", label: "SDS Library", url: "/resources/sds", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Compliant · searchable · downloadable",
            children: [
              { id: "rs-i", label: "Filter by industry", url: "/resources/sds?filter=industry" },
              { id: "rs-p", label: "Filter by product name", url: "/resources/sds?filter=product" },
              { id: "rs-d", label: "Download SDS (compliant)", url: "/resources/sds/[id]/download" },
            ]
          },
          { id: "rg", label: "Application Guides", url: "/resources/guides", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Formulation notes per segment",
            children: [
              { id: "rg-c", label: "Coatings formulation guides", url: "/resources/guides/coatings" },
              { id: "rg-cc", label: "Construction chemical guides", url: "/resources/guides/construction" },
              { id: "rg-f", label: "Food additive compliance", url: "/resources/guides/food" },
              { id: "rg-r", label: "Rubber processing guides", url: "/resources/guides/rubber" },
              { id: "rg-p", label: "Packaging material guides", url: "/resources/guides/packaging" },
            ]
          },
          { id: "rfaq", label: "FAQ", url: "/resources/faq", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "MOQ · lead times · certifications · hazmat",
            children: [
              { id: "rf-m", label: "Minimum order quantities", url: "/resources/faq#moq" },
              { id: "rf-l", label: "Lead times by region", url: "/resources/faq#lead-times" },
              { id: "rf-c", label: "Certifications explained (ISO)", url: "/resources/faq#certifications" },
              { id: "rf-r", label: "Regulatory compliance", url: "/resources/faq#regulatory" },
              { id: "rf-h", label: "Hazmat storage & shipping", url: "/resources/faq#hazmat" },
            ]
          },
        ]
      },
      {
        id: "suppliers", label: "Suppliers", url: "/suppliers", color: "#1A7A6E", bg: "#E8F5F3", tag: TAG_ENH,
        fixes: ["H2","H6"], desc: "Named cards · country · segment · product scope",
        children: [
          { id: "sf", label: "Filter by segment", url: "/suppliers?filter=segment", color: "#2D5A8E", bg: "#EBF0F8", desc: "Coatings · Inks · Construction · etc." },
          { id: "sc", label: "Supplier card / profile", url: "/suppliers/[slug]", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Name · logo · country · products supplied",
            children: [
              { id: "sc-n", label: "Company name + logo", url: "/suppliers/[slug]#name" },
              { id: "sc-c", label: "Country of origin", url: "/suppliers/[slug]#country" },
              { id: "sc-ca", label: "Product categories", url: "/suppliers/[slug]#categories" },
              { id: "sc-p", label: "Products from this principal", url: "/suppliers/[slug]/products" },
            ]
          },
          { id: "sb", label: "Become a Supplier", url: "/suppliers/become-a-supplier", color: "#2D5A8E", bg: "#EBF0F8", desc: "Application form for new principals" },
        ]
      },
      {
        id: "about", label: "About Us", url: "/about", color: "#1A7A6E", bg: "#E8F5F3", tag: TAG_ENH,
        fixes: ["H10"], desc: "MD message · Team · Ghobash Group · Certifications",
        children: [
          { id: "ab-w", label: "Who we are", url: "/about#who-we-are", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "ab-md", label: "MD message", url: "/about#md-message", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "ab-t", label: "Senior management team", url: "/about#team", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "ab-g", label: "Ghobash Group relationship", url: "/about#ghobash", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "ab-m", label: "Global presence map", url: "/about#global-presence", color: "#2D5A8E", bg: "#EBF0F8", desc: "6 subsidiaries — UAE · KSA · Kenya · India · Indonesia · SA" },
          { id: "ab-ce", label: "Certifications", url: "/about/certifications", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "ISO 9001 · 14001 · 45001 — with buyer-facing explanations",
            children: [
              { id: "ce-1", label: "ISO 9001:2015 — Quality", url: "/about/certifications/iso-9001" },
              { id: "ce-2", label: "ISO 14001:2015 — Environmental", url: "/about/certifications/iso-14001" },
              { id: "ce-3", label: "ISO 45001:2018 — Safety", url: "/about/certifications/iso-45001" },
            ]
          },
        ]
      },
      {
        id: "sustainability", label: "Sustainability", url: "/sustainability", color: "#1A7A6E", bg: "#FDF5E8", tag: TAG_NEW,
        fixes: ["H4","H10"], desc: "ESG hub · ISO scope · EcoVadis · BBBEE",
        children: [
          { id: "su-i", label: "ISO certifications & scope", url: "/sustainability/certifications", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "su-e", label: "Environmental responsibility", url: "/sustainability/environment", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "su-es", label: "ESG roadmap", url: "/sustainability/esg-roadmap", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "su-ec", label: "EcoVadis progress", url: "/sustainability/ecovadis", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "su-b", label: "BBBEE — Level 1 (South Africa)", url: "/sustainability/bbbee", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "su-r", label: "Annual sustainability report", url: "/sustainability/annual-report", color: "#2D5A8E", bg: "#EBF0F8" },
        ]
      },
      {
        id: "media", label: "Media", url: "/media", color: "#1A7A6E", bg: "#E8F5F3", tag: TAG_ENH,
        fixes: ["H8","H10"], desc: "Technical blog for B2B · News · Events",
        children: [
          { id: "mb", label: "Technical Blog", url: "/media/blog", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Targets procurement managers · R&D · formulation engineers",
            children: [
              { id: "mb-f", label: "Formulation insights", url: "/media/blog/formulation" },
              { id: "mb-r", label: "Regulatory updates", url: "/media/blog/regulatory" },
              { id: "mb-t", label: "Industry trends", url: "/media/blog/trends" },
              { id: "mb-a", label: "Article page (template)", url: "/media/blog/[slug]" },
            ]
          },
          { id: "mn", label: "News", url: "/media/news", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Press releases · Trade shows",
            children: [
              { id: "mn-p", label: "Press releases", url: "/media/news/press" },
              { id: "mn-e", label: "Trade shows & events", url: "/media/news/events" },
            ]
          },
        ]
      },
      {
        id: "careers", label: "Careers", url: "/careers", color: "#1A7A6E", bg: "#E8F5F3", tag: TAG_ENH,
        desc: "Why Tawazon · Open positions · Apply",
        children: [
          { id: "ca-w", label: "Why Tawazon", url: "/careers#why-tawazon", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "ca-j", label: "Open positions", url: "/careers/jobs", color: "#2D5A8E", bg: "#EBF0F8", desc: "Filter by location / division" },
          { id: "ca-a", label: "Application form", url: "/careers/apply", color: "#2D5A8E", bg: "#EBF0F8" },
        ]
      },
      {
        id: "contact", label: "Contact", url: "/contact", color: "#1A7A6E", bg: "#E8F5F3", tag: TAG_ENH,
        fixes: ["H3","H9"], desc: "Enquiry routing · Regional offices · Validated form",
        children: [
          { id: "ct", label: "Enquiry type selector", url: "/contact#type", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "Routes inquiry to correct team",
            children: [
              { id: "ct-g", label: "General enquiry", url: "/contact?type=general" },
              { id: "ct-p", label: "Product / sample request", url: "/contact?type=product" },
              { id: "ct-s", label: "Become a supplier", url: "/contact?type=supplier" },
              { id: "ct-m", label: "Media / press", url: "/contact?type=media" },
            ]
          },
          { id: "co", label: "Regional offices", url: "/contact#offices", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "6 subsidiaries — email + phone + map",
            children: [
              { id: "co-u", label: "UAE — Dubai (HQ)", url: "/contact#uae" },
              { id: "co-k", label: "Saudi Arabia — Riyadh/Jeddah", url: "/contact#ksa" },
              { id: "co-ke", label: "Kenya — Nairobi", url: "/contact#kenya" },
              { id: "co-i", label: "India — Chennai", url: "/contact#india" },
              { id: "co-id", label: "Indonesia — Jakarta", url: "/contact#indonesia" },
              { id: "co-s", label: "South Africa", url: "/contact#south-africa" },
            ]
          },
        ]
      },
      {
        id: "portal", label: "Customer Portal", url: "/portal", color: "#1A7A6E", bg: "#FDF5E8", tag: TAG_NEW,
        fixes: ["H3","H7"], desc: "Login · RFQ · Order history · Document vault",
        children: [
          { id: "po-l", label: "Login / Register", url: "/portal/login", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "po-r", label: "RFQ submission", url: "/portal/rfq/new", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "po-t", label: "RFQ tracking & status", url: "/portal/rfq", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "po-o", label: "Order history", url: "/portal/orders", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "po-re", label: "Repeat order shortcut", url: "/portal/orders/reorder", color: "#2D5A8E", bg: "#EBF0F8" },
          { id: "po-d", label: "Document vault", url: "/portal/documents", color: "#2D5A8E", bg: "#EBF0F8",
            desc: "TDS · SDS · CoA · Invoices",
            children: [
              { id: "dv-t", label: "TDS files", url: "/portal/documents/tds" },
              { id: "dv-s", label: "SDS files", url: "/portal/documents/sds" },
              { id: "dv-c", label: "CoA files", url: "/portal/documents/coa" },
              { id: "dv-i", label: "Invoices", url: "/portal/documents/invoices" },
            ]
          },
          { id: "po-a", label: "Account manager contact", url: "/portal/account-manager", color: "#2D5A8E", bg: "#EBF0F8" },
        ]
      },
    ]
  }
];

function countPages(nodes) {
  let n = 0;
  nodes.forEach(node => { n++; if (node.children) n += countPages(node.children); });
  return n;
}

function Tag({ t }) {
  if (!t) return null;
  return (
    <span style={{
      fontSize: 9, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase",
      padding: "2px 7px", borderRadius: 4, border: `1px solid ${t.border}`,
      background: t.bg, color: t.color, flexShrink: 0, whiteSpace: "nowrap"
    }}>{t.label}</span>
  );
}

function HBadge({ h }) {
  return (
    <span style={{
      fontSize: 9, fontWeight: 700, padding: "1px 6px", borderRadius: 3,
      background: "#E3F4F1", color: "#1A7A6E", border: "1px solid #96CECC",
      whiteSpace: "nowrap"
    }}>{h}</span>
  );
}

function Node({ node, depth, defaultOpen }) {
  const hasKids = node.children && node.children.length > 0;
  const [open, setOpen] = useState(defaultOpen ?? depth < 2);

  const pad = depth === 0 ? 14 : depth === 1 ? 10 : depth === 2 ? 8 : 6;
  const fz = depth === 0 ? 15 : depth === 1 ? 13 : depth === 2 ? 12 : 11;
  const fw = depth === 0 ? 700 : depth === 1 ? 600 : depth === 2 ? 500 : 400;
  const col = node.color || "#4A5568";
  const bg = node.bg || "#F7F8FA";

  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {/* Vertical lines */}
        {Array.from({ length: depth }).map((_, i) => (
          <div key={i} style={{ width: 20, flexShrink: 0, borderLeft: "1.5px solid #E2E8F0", minHeight: 28, marginTop: -4 }} />
        ))}
        {/* Horizontal stub */}
        {depth > 0 && <div style={{ width: 12, height: 1.5, background: "#E2E8F0", marginTop: 18, flexShrink: 0 }} />}

        {/* Card */}
        <div style={{ flex: 1, minWidth: 0, marginBottom: 5, marginLeft: depth > 0 ? 0 : 0 }}>
          <div
            onClick={() => hasKids && setOpen(o => !o)}
            style={{
              background: bg,
              border: `1px solid ${depth <= 1 ? col + "60" : "#E2E8F0"}`,
              borderLeft: depth <= 1 ? `3px solid ${col}` : `1.5px solid #E2E8F0`,
              borderRadius: 7,
              padding: `${pad}px 12px`,
              cursor: hasKids ? "pointer" : "default",
              transition: "opacity 0.12s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
              {hasKids && (
                <span style={{
                  width: 18, height: 18, borderRadius: 4, background: col + "22",
                  border: `1px solid ${col}44`, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 11, color: col, fontWeight: 700, flexShrink: 0
                }}>
                  {open ? "−" : "+"}
                </span>
              )}
              {!hasKids && <span style={{ width: 7, height: 7, borderRadius: "50%", background: col + "60", flexShrink: 0, marginLeft: 2 }} />}

              <span style={{ fontSize: fz, fontWeight: fw, color: depth === 0 ? col : depth === 1 ? col : "#1A2035", lineHeight: 1.3 }}>
                {node.label}
              </span>

              {node.tag && <Tag t={node.tag} />}
              {(node.fixes || []).map(h => <HBadge key={h} h={h} />)}

              <span style={{
                marginLeft: "auto", fontSize: 10, color: "#94A3B8",
                fontFamily: "monospace", background: "#F1F5F9",
                padding: "1px 6px", borderRadius: 3, flexShrink: 0,
                maxWidth: 240, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"
              }}>
                {node.url}
              </span>

              {hasKids && (
                <span style={{ fontSize: 10, color: "#94A3B8", flexShrink: 0 }}>
                  {node.children.length} {node.children.length === 1 ? "page" : "pages"}
                </span>
              )}
            </div>

            {node.desc && (
              <div style={{ fontSize: 11, color: "#64748B", marginTop: 4, paddingLeft: hasKids ? 24 : 16, lineHeight: 1.45 }}>
                {node.desc}
              </div>
            )}
          </div>

          {hasKids && open && (
            <div style={{ marginLeft: 8 }}>
              {node.children.map(child => (
                <Node key={child.id} node={child} depth={depth + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const phases = [
  {
    label: "Phase 1 · 0–3 months", color: "#C0392B", bg: "#FDF0EE",
    items: ["Resources hub: TDS + SDS library", "Contact page routing + validation", "Site search in header", "Uniform industry page template", "Blog content moderation + pivot"]
  },
  {
    label: "Phase 2 · 3–6 months", color: "#C8922A", bg: "#FDF5E8",
    items: ["Products catalog with CAS search", "Arabic + French language support", "Redesigned Suppliers page", "Sustainability hub launch", "Segment-specific CTAs across site"]
  },
  {
    label: "Phase 3 · 6–12 months", color: "#1A7A6E", bg: "#E8F5F3",
    items: ["Customer portal (RFQ + documents)", "Swahili, Bahasa, Hindi languages", "Application guides per segment", "CoA on-request automation", "EcoVadis certification pursuit"]
  },
];

export default function App() {
  const [expandAll, setExpandAll] = useState(null);
  const total = countPages(SITE_DATA);

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "#F8FAFC", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "#0B1F3A", padding: "24px 28px 20px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#64B5D6", marginBottom: 4, fontWeight: 600 }}>
              Tawazon Chemical Co. LLC
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Proposed site map — redesign
            </div>
            <div style={{ fontSize: 12, color: "#94A8C0", marginTop: 5 }}>
              Full IA · Based on heuristic evaluation · April 21, 2026
            </div>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {[
              { v: total, l: "Total pages" },
              { v: 4, l: "New sections" },
              { v: 6, l: "Enhanced" },
              { v: "8.3", l: "Target UX" },
            ].map(s => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>{s.v}</div>
                <div style={{ fontSize: 9, color: "#94A8C0", textTransform: "uppercase", letterSpacing: "0.07em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global UX bar */}
      <div style={{ background: "#E3F4F1", borderBottom: "1px solid #96CECC", padding: "10px 28px", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#1A7A6E", textTransform: "uppercase", letterSpacing: "0.08em", flexShrink: 0 }}>
          Global UX fixes (all pages)
        </span>
        {["Site search in header", "Language switcher: AR · FR · SW · ID · HI · EN", "Back-to-top button", "Carousel pause/stop (WCAG 2.3.3)", "Custom 404 with navigation", "Inline form validation + error states"].map(item => (
          <span key={item} style={{
            fontSize: 10, color: "#0F6E56", background: "#fff",
            border: "1px solid #96CECC", borderRadius: 4, padding: "2px 8px"
          }}>{item}</span>
        ))}
        <span style={{ marginLeft: "auto", fontSize: 10, color: "#1A7A6E", fontWeight: 600, flexShrink: 0 }}>Fixes H1 · H3 · H7 · H9</span>
      </div>

      {/* Legend + controls */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E2E8F0", padding: "10px 28px", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", flex: 1 }}>
          {[
            { bg: "#E8EDF5", border: "#0B1F3A", l: "L0 Homepage" },
            { bg: "#E8F5F3", border: "#1A7A6E", l: "L1 Primary nav" },
            { bg: "#EBF0F8", border: "#2D5A8E", l: "L2 Section pages" },
            { bg: "#F7F8FA", border: "#94A3B8", l: "L3 Sub-pages" },
            { bg: "#FDF5E8", border: "#C8922A", l: "✦ New section" },
            { bg: "#E3F4F1", border: "#1A7A6E", l: "H# Heuristic fixed" },
          ].map(item => (
            <div key={item.l} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 11, height: 11, borderRadius: 2, background: item.bg, border: `1.5px solid ${item.border}` }} />
              <span style={{ fontSize: 11, color: "#4A5568" }}>{item.l}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setExpandAll(Date.now() + "e")}
            style={{ fontSize: 11, padding: "5px 12px", borderRadius: 5, border: "1px solid #E2E8F0", background: "#fff", cursor: "pointer", color: "#0B1F3A" }}>
            Expand all
          </button>
          <button onClick={() => setExpandAll(Date.now() + "c")}
            style={{ fontSize: 11, padding: "5px 12px", borderRadius: 5, border: "1px solid #E2E8F0", background: "#fff", cursor: "pointer", color: "#0B1F3A" }}>
            Collapse
          </button>
        </div>
      </div>

      {/* Tree */}
      <div style={{ padding: "20px 28px" }} key={expandAll}>
        {SITE_DATA.map(node => <Node key={node.id} node={node} depth={0} />)}
      </div>

      {/* Phase roadmap */}
      <div style={{ padding: "0 28px 32px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
          Implementation roadmap
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {phases.map(p => (
            <div key={p.label} style={{ background: p.bg, border: `1px solid ${p.color}44`, borderRadius: 8, padding: "14px 16px", borderTop: `3px solid ${p.color}` }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: p.color, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>{p.label}</div>
              {p.items.map(item => (
                <div key={item} style={{ display: "flex", gap: 7, marginBottom: 6 }}>
                  <span style={{ color: p.color, fontSize: 11, flexShrink: 0, marginTop: 1 }}>→</span>
                  <span style={{ fontSize: 11, color: "#334155", lineHeight: 1.45 }}>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
