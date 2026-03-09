"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site-nav";

const tags = ["Market Research", "User Interviews", "User Personas", "Wireframes", "Hi-Fi Mocks"];

export default function DocHealthServicesUsersPage() {
  return (
    <main className="bg-[#F5F5F5] dark:bg-[#111111] transition-colors duration-300">
      <Navbar />

      <div className="flex pt-[65px] md:pt-[76px]">

        {/* ── Left: all content ── */}
        <div className="flex-1 min-w-0">

          {/* Hero */}
          <div className="px-6 md:pl-[6.6vw] md:pr-[5vw] pt-8 md:pt-14 pb-14">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-widest uppercase text-[#202020]/40 dark:text-white/30 hover:text-[#FF522F] dark:hover:text-[#FF522F] transition-colors mb-8 md:mb-12"
            >
              <ArrowLeft size={13} strokeWidth={2.5} />
              Portfolio
            </Link>

            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white dark:bg-[#1e1e1e] text-[#202020] dark:text-white text-[13px] md:text-[15px] font-medium rounded-2xl px-3.5 py-1.5 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] tracking-[-0.04em] leading-[0.88] mb-8 md:mb-12 transition-colors"
              style={{ fontSize: "clamp(34px, 5.8vw, 94px)" }}
            >
              DOC –{" "}
              <br className="hidden md:block" />
              Health Services:{" "}
              <br className="hidden md:block" />
              The Users
            </h1>

            <div className="flex flex-wrap gap-x-10 gap-y-2">
              <div>
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#202020]/40 dark:text-white/30 mb-0.5 transition-colors">
                  Role
                </p>
                <p className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] text-[15px] transition-colors">
                  Sole Designer
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

          {/* ══ Body ══ */}
          <div className="px-6 md:px-[6.6vw] pb-32">
            <div className="max-w-[760px]">

              {/* The Scope */}
              <Section label="The Scope">
                <BodyText>
                  Built a Health Services platform from the ground up. Patients can choose between
                  different packages, set appointment times, and go for checkups. The aim was to
                  create a seamless experience for providers and patients equally — going through
                  the existing legacy system and redesigning it to address real user pain points.
                </BodyText>
              </Section>

              <Divider />

              {/* My Role */}
              <Section label="My Role">
                <BodyText>
                  As the sole designer responsible for this project, I spearheaded the Health
                  Services users module. While teammates were simultaneously building the Products
                  section of the e-commerce platform, I kept equal attention to how that work
                  would impact the Services module.
                </BodyText>
                <BodyText className="mt-5">
                  I conducted user research for both providers and patients, produced wireframes,
                  user flows, and mockups, and created a design system for wireframes and
                  hi-fidelity mocks. I also supervised development across front and back end.
                </BodyText>
              </Section>

              <Divider />

              {/* Legacy Analysis */}
              <Section label="Legacy System Analysis">
                <BodyText>
                  Since DOC already had an existing system, I collected data points from
                  quantitative analysis via <strong>Hotjar</strong> and{" "}
                  <strong>Google Tag Manager</strong> — studying user behaviour when interacting
                  with the legacy platform. The primary pain points centred on a limited range of
                  services and a poor user interface. Methods used included existing user surveys
                  and post-purchase feedback.
                </BodyText>
              </Section>

              <Divider />

              {/* Market Research */}
              <Section label="Step 1 — Market Research">
                <BodyText className="mb-8 md:mb-10">
                  I analysed leading competitors in the healthcare space to benchmark features and
                  identify gaps DOC could address.
                </BodyText>

                <div className="space-y-8">
                  <CompetitorBlock
                    name="1MG"
                    subtitle="One of the most comprehensive websites in Healthcare & Lab Tests"
                    pros={[
                      "Comprehensive selection of packages by organ, body part, or condition",
                      "Flexibility to add individual tests",
                      "Free doctor consultation & online reports",
                      "Compare packages, book from prescription",
                    ]}
                    cons={[
                      "No questionnaire based on user symptoms",
                      "No recommended tests",
                      "No live chat",
                    ]}
                  >
                    <CaseImage
                      src="/images/Screenshot_2023-03-20_at_6.50.23_AM.png"
                      alt="1MG website screenshot"
                    />
                  </CompetitorBlock>

                  <CompetitorBlock
                    name="Healtopedia"
                    pros={[
                      "Good categorisation by organ (though some return no results)",
                      "Categorisation by conditions & states (mental health, physiotherapy)",
                      "Online chat",
                    ]}
                    cons={[
                      "Some organ categories return no results (e.g. Breast, Lungs)",
                      "Limited package flexibility",
                    ]}
                  >
                    <CaseImage
                      src="/images/Screenshot_2023-03-20_at_6.52.52_AM.png"
                      alt="Healtopedia website screenshot"
                    />
                  </CompetitorBlock>

                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl px-5 py-4 transition-colors">
                    <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#202020]/40 dark:text-white/30 mb-2">
                      Other Providers Reviewed
                    </p>
                    <p className="font-quattrocento font-bold text-[#202020] dark:text-[#BEBEBE] text-[14px] tracking-[-0.03em] transition-colors">
                      BP Healthcare · Sehatq (Indonesia) · Gleneagles Hospital Malaysia · Lifecare
                    </p>
                  </div>
                </div>
              </Section>

              <Divider />

              {/* User Research */}
              <Section label="Step 2 — User Research">
                <BodyText>
                  I reviewed current user data and heatmaps on the legacy website through{" "}
                  <strong>Hotjar</strong> and <strong>Google Tag Manager</strong>. Quantitative
                  data showed our user base ranges from <strong>30–50 years old</strong>, with a
                  60% female and 40% male split.
                </BodyText>
                <BodyText className="mt-5">
                  I then interviewed around <strong>10 users</strong> in that age group to study
                  what they look for when thinking about their healthcare needs. Severely niche
                  concerns were discarded, and 3 user personas were synthesised from the research.
                </BodyText>
              </Section>

              <Divider />

              {/* User Personas */}
              <Section label="Step 3 — User Personas">
                <div className="space-y-4 mt-2">
                  <PersonaCard
                    name="Joya Singh"
                    age="52"
                    job="Arts Teacher"
                    goals="Wants to keep herself and her husband healthy."
                    challenges="Little experience navigating the healthcare system, bad experiences with doctors, easily overwhelmed by the number of tests, on a tight budget."
                    techHabits="Spends a lot of time on Facebook, looks for recommended doctors and clinics there, enjoys YouTube videos, prefers email and text over phone calls."
                  />
                  <PersonaCard
                    name="Walter"
                    age="43"
                    job="Self-Employed"
                    goals="Tries to stay one step ahead, especially in matters of health."
                    challenges="Lots of online experience with symptoms and tests, consults a doctor friend, maintains a separate healthcare budget, keeps a list of nearby specialists — but has very little free time."
                    techHabits="Uses Google extensively for research, reads blogs, makes decisions based on online reviews and suggestions."
                  />
                  <PersonaCard
                    name="Erica"
                    age="30"
                    job="Manager"
                    goals="Get professional medical help easily and be diagnosed early."
                    challenges="Dealing with hypertension and weight management, planning to get pregnant, caring for aging parents, mildly tight budget, very busy schedule."
                    techHabits="Shops online regularly, avid WebMD browser, reads health blogs."
                  />
                </div>
              </Section>

              <Divider />

              {/* Improvements */}
              <Section label="Step 4 — Improvements Based on Personas">
                <ul className="mt-2 space-y-2 list-none">
                  {[
                    "Personalised content",
                    "Clear reasoning of why users should choose DOC for healthcare services",
                    "Flexibility to choose packages — adding or removing additional tests",
                    "Recommendations based on current and past conditions or symptoms",
                    "Better segregation and definition of categories",
                    "Improved chat options",
                    "Reviews of packages, providers, and doctors",
                    "Quality blog content",
                    "Online reports",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#FF522F] shrink-0" />
                      <span
                        className="font-quattrocento font-bold text-[#202020] dark:text-[#BEBEBE] tracking-[-0.03em] leading-relaxed transition-colors"
                        style={{ fontSize: "clamp(14px, 1.1vw, 17px)" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Divider />

              {/* Wireframes */}
              <Section label="Step 5 — Wireframes">
                <div className="space-y-12 mt-2">

                  <div>
                    <ProblemLabel>Category Structure &amp; Sort Feature</ProblemLabel>
                    <BodyText className="mt-3 mb-6">
                      A browse-by-category feature to help users with little knowledge navigate
                      the healthcare landscape. The back end required building a rigorous category
                      structure — every package must fall under a pre-defined category. For
                      packages spanning two categories, a <strong>product tag</strong> feature was
                      introduced so providers can tag a package under multiple categories.
                    </BodyText>
                    <CaseImage
                      src="/images/Screen_Shot_2022-09-25_at_10.28.23_AM.png"
                      alt="Category structure wireframe"
                      caption="Category structure & sort — wireframe"
                    />
                  </div>

                  <div>
                    <ProblemLabel>Home / Search / List &amp; Map View</ProblemLabel>
                    <BodyText className="mt-3 mb-6">
                      Map view was a unique finding from user research — patients wanted to select
                      clinics based on proximity. We added a map view alongside the standard list
                      view.
                    </BodyText>
                    <CaseImage
                      src="/images/Screen_Shot_2022-09-25_at_10.31.01_AM.png"
                      alt="Home, Search, List and Map view wireframes"
                      caption="Home / Search / List & Map view — wireframes"
                    />
                  </div>

                  <div>
                    <ProblemLabel>Product &amp; Cart Page</ProblemLabel>
                    <CaseImage
                      src="/images/Screen_Shot_2022-09-25_at_11.38.25_AM.png"
                      alt="Product and cart page wireframe"
                      caption="Product detail & cart — wireframe"
                      className="mt-3"
                    />
                  </div>

                </div>
              </Section>

              <Divider />

              {/* User Feedback */}
              <Section label="Step 6 — Getting User Feedback">
                <BodyText>
                  I showed the detailed wireframes back to the original interviewees and asked
                  whether the design and experience satisfied their goals. They suggested a couple
                  of minor, logical changes — which I incorporated before moving on to the
                  hi-fidelity version.
                </BodyText>
              </Section>

              <Divider />

              {/* Hi-Fi */}
              <Section label="Step 7 — Hi-Fidelity Prototypes">
                <BodyText className="mb-8">
                  My wireframes closely resembled the final hi-fidelity output. I placed a strong
                  emphasis on building a robust design system — one that benefits junior designers
                  and developers alike. All prototypes were created in Figma.
                </BodyText>
                <div className="space-y-6">
                  <CaseImage
                    src="/images/Screen_Shot_2022-09-25_at_1.40.55_PM.png"
                    alt="Hi-fidelity prototype screen 1"
                    caption="Hi-fi — homepage & browse"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <CaseImage
                      src="/images/Screen_Shot_2022-09-25_at_1.41.28_PM.png"
                      alt="Hi-fidelity prototype screen 2"
                      caption="Hi-fi — package listing"
                    />
                    <CaseImage
                      src="/images/Screen_Shot_2022-09-25_at_1.42.20_PM.png"
                      alt="Hi-fidelity prototype screen 3"
                      caption="Hi-fi — product & cart"
                    />
                  </div>
                </div>
              </Section>

              <Divider />

              {/* The Wait */}
              <Section label="Step 8 — The Wait">
                <BodyText>
                  While developers were building the new app, I suggested to stakeholders that we
                  implement the new experience on the legacy system first — to test the changes
                  and gauge user response before the full build was complete.
                </BodyText>
                <BodyText className="mt-5">
                  Stakeholders agreed, and a limited release was launched. Users could access it
                  through targeted marketing campaigns. The design wasn&apos;t quite at the
                  standard I envisioned for the final product, but it served as a live guide to a
                  completely new user experience.
                </BodyText>
              </Section>

              <Divider />

              {/* Results */}
              <Section label="The Results">
                <BodyText>
                  We implemented Hotjar analytics to collect post-launch data. Based on the
                  results, the <strong>bounce rate and drop-off rate went down
                  significantly</strong> — validating the persona-driven design decisions and the
                  improved information architecture.
                </BodyText>
              </Section>

            </div>
          </div>
        </div>

        {/* ── Right: sticky black panel ── */}
        <div
          className="hidden md:block shrink-0 bg-black dark:bg-[#f0f0f0] sticky top-0 h-screen rounded-bl-3xl transition-colors duration-300"
          style={{ width: "clamp(200px, 26vw, 450px)" }}
        />
      </div>
    </main>
  );
}

// ─── Local layout components ──────────────────────────────────────────────────

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="pt-12 md:pt-16">
      <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#202020]/40 dark:text-white/30 mb-4 md:mb-5 transition-colors">
        {label}
      </p>
      {children}
    </section>
  );
}

function BodyText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`font-quattrocento font-bold text-[#202020] dark:text-[#BEBEBE] tracking-[-0.03em] leading-relaxed transition-colors ${className}`}
      style={{ fontSize: "clamp(15px, 1.2vw, 18px)" }}
    >
      {children}
    </p>
  );
}

function ProblemLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3
      className={`font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] tracking-[-0.03em] leading-tight transition-colors ${className}`}
      style={{ fontSize: "clamp(18px, 1.8vw, 26px)" }}
    >
      {children}
    </h3>
  );
}

function CaseImage({ src, alt, caption, className = "" }: { src: string; alt: string; caption?: string; className?: string }) {
  return (
    <figure className={className}>
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

function CompetitorBlock({
  name,
  subtitle,
  pros,
  cons,
  children,
}: {
  name: string;
  subtitle?: string;
  pros: string[];
  cons: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-black/8 dark:border-white/8 transition-colors">
      {children}
      <div className="bg-white dark:bg-[#1a1a1a] px-5 md:px-6 py-5 transition-colors">
        <p className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] text-[17px] md:text-[19px] tracking-[-0.03em] mb-0.5 transition-colors">
          {name}
        </p>
        {subtitle && (
          <p className="text-[12px] text-[#202020]/40 dark:text-white/30 mb-4 transition-colors">
            {subtitle}
          </p>
        )}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#202020]/40 dark:text-white/30 mb-2">
              Pros
            </p>
            <ul className="space-y-1.5">
              {pros.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[6px] w-1 h-1 rounded-full bg-[#202020]/30 dark:bg-white/30 shrink-0" />
                  <span className="font-quattrocento font-bold text-[#202020] dark:text-[#BEBEBE] text-[13px] tracking-[-0.02em] leading-snug transition-colors">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#202020]/40 dark:text-white/30 mb-2">
              Cons
            </p>
            <ul className="space-y-1.5">
              {cons.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[6px] w-1 h-1 rounded-full bg-[#FF522F]/50 shrink-0" />
                  <span className="font-quattrocento font-bold text-[#202020] dark:text-[#BEBEBE] text-[13px] tracking-[-0.02em] leading-snug transition-colors">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonaCard({
  name,
  age,
  job,
  goals,
  challenges,
  techHabits,
}: {
  name: string;
  age: string;
  job: string;
  goals: string;
  challenges: string;
  techHabits: string;
}) {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl px-5 md:px-6 py-5 md:py-6 transition-colors">
      <div className="flex items-baseline gap-3 mb-4">
        <p className="font-quattrocento font-bold text-[#202020] dark:text-[#EFEFEF] text-[17px] md:text-[19px] tracking-[-0.03em] transition-colors">
          {name}
        </p>
        <span className="text-[12px] text-[#202020]/40 dark:text-white/30 transition-colors">
          {age} · {job}
        </span>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: "Goals", text: goals },
          { label: "Challenges", text: challenges },
          { label: "Tech Habits", text: techHabits },
        ].map(({ label, text }) => (
          <div key={label}>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#202020]/40 dark:text-white/30 mb-1.5 transition-colors">
              {label}
            </p>
            <p className="font-quattrocento font-bold text-[#202020] dark:text-[#BEBEBE] text-[13px] tracking-[-0.02em] leading-snug transition-colors">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <hr
      className="border-none border-t border-black/10 dark:border-white/10 mt-0 transition-colors"
      style={{ borderTopWidth: "1px" }}
    />
  );
}
