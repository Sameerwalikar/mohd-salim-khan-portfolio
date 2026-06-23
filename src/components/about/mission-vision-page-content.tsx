"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ChevronRight,
  Compass,
  Telescope,
  Gem,
  Crown,
  Flame,
  ScrollText,
  Feather,
  BookMarked,
  Landmark,
  BadgeCheck,
} from "lucide-react";
import { profile } from "@/data/profile";
import { FadeUp } from "@/components/shared/fade-up";

/* ─── DATA ─── */

const coreValues = [
  {
    icon: Gem,
    title: "Scholarly Integrity",
    description:
      "Grounded in 25 years of legal practice and academia, maintaining rigorous standards in research methodology, academic publishing and intellectual property documentation, evidenced by 16 peer-reviewed research papers and doctoral work on IPR in the Indian Sports Sector.",
  },
  {
    icon: Crown,
    title: "Academic Leadership",
    description:
      "Demonstrated through In-Charge Principal tenure at KLE College of Law (2016 to 2017), coordination of multiple academic centres at Parul University, and current leadership roles at Presidency University including Sports Committee and UG Dissertation coordination.",
  },
  {
    icon: Flame,
    title: "Research Excellence",
    description:
      "Sustained through doctoral research on Intellectual Property Rights in the Indian Sports Sector (2024), 6 published patents, 2 design registrations, and participation in over 100 conferences, workshops and faculty development programmes.",
  },
  {
    icon: Landmark,
    title: "Social Justice",
    description:
      "Reflected in research on human rights, transgender rights, prisoners' rights, refugee law, and gender differentials in education. A commitment that began with NSS volunteering (1998 to 2000) and continued through legal aid committees and pro bono work.",
  },
  {
    icon: Feather,
    title: "Innovation in Legal Education",
    description:
      "Pursued through certificate courses in Constitutional Law, legal start-ups for management students, the Samvidhan Pe Charcha national event, and an ongoing focus on integrating AI, technology and modern pedagogy into legal teaching.",
  },
  {
    icon: BadgeCheck,
    title: "Institutional Accountability",
    description:
      "Practiced through NAAC IQAC coordination (Criteria 5), BCI compliance management, University registrations, AISHE reporting, and ensuring administrative transparency across three institutions over eight years.",
  },
];

const purposeTimeline = [
  {
    period: "2000 to 2006",
    title: "Foundation in Administration & Social Awareness",
    description:
      "Developed organisational and leadership skills at Samrat Trading while completing a B.A. in History & Sociology and L.L.B. from Government Law College, Mumbai. Active NSS participation and volunteering at TISS shaped early commitment to social justice.",
  },
  {
    period: "2006 to 2014",
    title: "Corporate Leadership & Legal Practice",
    description:
      "Corporate administration at Speciality Restaurants and Reliance Securities provided exposure to governance, compliance and institutional development. Legal practice in parallel kept scholarship grounded in real-world application.",
  },
  {
    period: "2014 to 2016",
    title: "Transition to Legal Education",
    description:
      "The decision to pursue an L.L.M. at Amity University (2016) and begin teaching as Visiting Faculty at KLE Society's College marked a deliberate shift toward academic contribution and the development of an educational philosophy rooted in professional experience.",
  },
  {
    period: "2016 to 2021",
    title: "Academic Leadership at KLE College of Law",
    description:
      "Appointment as In-Charge Principal and Assistant Professor demanded building institutional systems from admissions to compliance and examinations, crystallising a philosophy of accessible, accountable legal education.",
  },
  {
    period: "2021 to 2024",
    title: "Research Maturity at Parul University",
    description:
      "The Gold Medal M.Phil (2021), Ph.D. completion (2024), and establishment of research centres in Constitutional Law and Policy, and Sports Law Policy and Governance, represented the full integration of mission and scholarship.",
  },
  {
    period: "2025 to Present",
    title: "Continued Scholarship at Presidency University",
    description:
      "Current appointment as Assistant Professor (Senior Scale) at Presidency School of Law, Bangalore, brings two decades of accumulated experience into focused mentorship, research supervision and institutional coordination.",
  },
];

/* ─── SCROLL REVEAL COMPONENT ─── */

function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── COMPONENT ─── */

export function MissionVisionPageContent() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <div ref={sectionRef}>
      {/* ══════ SECTION 1: PAGE HERO ══════ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-navy-900 pt-32 pb-20 md:pt-40 md:pb-28"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-[#091422] to-navy-900" />
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.05)_0%,transparent_60%)] blur-[100px]" />
          <motion.div
            className="absolute right-[15%] top-[20%] h-2 w-2 rounded-full bg-gold/8"
            animate={{ y: [0, -15, 0], opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[20%] bottom-[30%] h-1.5 w-1.5 rounded-full bg-gold/6"
            animate={{ y: [0, -10, 0], opacity: [0.02, 0.06, 0.02] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="container-academic relative z-10 px-4 md:px-6"
        >
          {/* Breadcrumb */}
          <FadeUp>
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex items-center gap-1.5 text-sm text-slate-400"
            >
              <Link href="/" className="transition-colors hover:text-gold">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <Link href="/about" className="transition-colors hover:text-gold">About</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <span className="text-gold/80">Mission &amp; Vision</span>
            </nav>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="max-w-3xl">
              <p className="text-xs font-medium tracking-[0.25em] text-gold/60 uppercase">
                Guiding Principles
              </p>
              <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
                Mission &amp; Vision
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300/80 md:text-xl">
                Guiding Principles for Legal Education, Research and Academic Leadership
              </p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="mt-6 h-px bg-gradient-to-r from-gold/70 to-transparent"
              />
            </div>
          </FadeUp>
        </motion.div>
      </section>

      {/* ══════ SECTION 2: MISSION ══════ */}
      <section className="section-padding bg-navy-900">
        <div className="container-academic px-4 md:px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl">
              {/* Section label */}
              <div className="mb-10 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/15 bg-gradient-to-br from-gold/[0.08] to-transparent">
                  <Compass className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] text-gold/60 uppercase">
                    Mission
                  </p>
                  <h2 className="font-serif text-2xl font-medium text-white md:text-3xl">
                    Purpose &amp; Direction
                  </h2>
                </div>
              </div>

              {/* Quote block */}
              <div className="relative rounded-2xl border border-gold/[0.12] bg-navy-800/30 p-8 md:p-10">
                <div className="absolute -left-1 top-6 h-16 w-1 rounded-full bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />
                <p className="font-serif text-xl leading-relaxed text-white/90 md:text-2xl md:leading-[1.7]">
                  &ldquo;{profile.mission}&rdquo;
                </p>
              </div>

              {/* Supporting narrative */}
              <div className="mt-10 space-y-6 text-base leading-[1.85] text-slate-300/85 md:text-[17px]">
                <p>
                  Since entering legal education as a full-time academic in 2016, Prof. Dr. Mohammed
                  Salim B. Khan has consistently focused on bridging the gap between theoretical
                  legal scholarship and practical professional competence. His appointment as
                  In-Charge Principal at KLE College of Law (August 2016 to November 2017) required
                  building institutional capacity from the ground up including admissions, BCI compliance,
                  examination systems, and student discipline. This crystallised an approach to academic
                  leadership grounded in accountability and service.
                </p>
                <p>
                  This mission extends to research culture. With 16 published papers across national
                  and international journals, his scholarship addresses contemporary legal challenges
                  from transgender rights and wildlife protection to e-banking fraud and real estate
                  regulation. Each publication reflects a commitment to using legal research as a tool
                  for social understanding and policy development.
                </p>
                <p>
                  The establishment of the Centre for Constitutional Law and Policy (CCLP) and the
                  Centre of Excellence in Sports Law Policy and Governance (CESLPG) at Parul
                  University demonstrates an institutional approach to mission fulfilment, creating
                  structures that outlast individual tenure and serve successive cohorts of students
                  and researchers.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ SECTION 3: VISION ══════ */}
      <section className="section-padding relative bg-navy-800">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.03)_0%,transparent_70%)] blur-[80px]" />
        </div>

        <div className="container-academic relative z-10 px-4 md:px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/15 bg-gradient-to-br from-gold/[0.08] to-transparent">
                  <Telescope className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] text-gold/60 uppercase">
                    Vision
                  </p>
                  <h2 className="font-serif text-2xl font-medium text-white md:text-3xl">
                    Long-Term Academic Contribution
                  </h2>
                </div>
              </div>

              <div className="relative rounded-2xl border border-gold/[0.12] bg-navy-900/30 p-8 md:p-10">
                <div className="absolute -left-1 top-6 h-16 w-1 rounded-full bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />
                <p className="font-serif text-xl leading-relaxed text-white/90 md:text-2xl md:leading-[1.7]">
                  &ldquo;{profile.vision}&rdquo;
                </p>
              </div>

              <div className="mt-10 space-y-6 text-base leading-[1.85] text-slate-300/85 md:text-[17px]">
                <p>
                  The doctoral research on &ldquo;A Critical Study on Prospects of Intellectual
                  Property Rights with Special Reference to Indian Sports Sector&rdquo; (Shri JJT
                  University, 2024) reflects a vision of legal scholarship that operates at the
                  intersection of emerging disciplines. Sports Law, largely underdeveloped in Indian
                  legal academia, represents the kind of frontier area where sustained academic focus
                  can shape policy and professional practice.
                </p>
                <p>
                  This interdisciplinary vision is further evidenced by 6 published patents spanning
                  AI in education, blockchain-enabled IoT architecture, renewable energy management,
                  and risk management in banking. Each represents a deliberate engagement with
                  technology-driven legal challenges that will define the next generation of legal
                  practice.
                </p>
                <p>
                  Internationally, the Honorary Doctorate in Peace Education from the United Nations
                  World Peace University (Washington, U.S.A.), the Second Place at the International
                  Students Debating Association in Miami (2000), and chapter contributions in
                  Scopus-indexed publications by IGI Global reflect a vision of Indian legal
                  scholarship engaging meaningfully with global academic discourse.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ SECTION 4: CORE VALUES ══════ */}
      <section className="section-padding bg-navy-900">
        <div className="container-academic px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-xs font-medium tracking-[0.25em] text-gold/60 uppercase">
                Foundation
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-white md:text-4xl">
                Core Values
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="mt-4 h-px bg-gradient-to-r from-gold/60 to-transparent"
              />
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={index * 0.08}>
                  <div className="group h-full rounded-xl border border-gold/[0.1] bg-navy-800/30 p-6 transition-all duration-400 hover:border-gold/25 hover:bg-navy-800/50 hover:shadow-[0_12px_35px_rgba(201,168,106,0.06)]">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gold/15 bg-gold/[0.04] transition-all duration-300 group-hover:border-gold/30 group-hover:bg-gold/[0.08]">
                      <Icon className="h-5 w-5 text-gold/70 transition-colors group-hover:text-gold" />
                    </div>
                    <h3 className="text-base font-semibold text-white">{value.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ SECTION 5: EDUCATIONAL PHILOSOPHY ══════ */}
      <section className="section-padding relative bg-navy-800">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        </div>

        <div className="container-academic relative z-10 px-4 md:px-6">
          <ScrollReveal>
            <div className="mb-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/15 bg-gradient-to-br from-gold/[0.08] to-transparent">
                <BookMarked className="h-6 w-6 text-gold" />
              </div>
              <div>
                <p className="text-xs font-medium tracking-[0.2em] text-gold/60 uppercase">
                  Teaching Philosophy
                </p>
                <h2 className="font-serif text-2xl font-medium text-white md:text-3xl">
                  Educational Philosophy
                </h2>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <ScrollReveal delay={0.1}>
              <div className="space-y-6 text-base leading-[1.85] text-slate-300/85 md:text-[17px]">
                <p>
                  Legal education, in this philosophy, is not merely the transmission of doctrinal
                  knowledge but the cultivation of analytical thinking, ethical reasoning and
                  professional competence. A flair for research and teaching, combined with the
                  disposition of a self-starter, motivator and public speaker, informs a pedagogical
                  approach centred on student engagement rather than passive instruction.
                </p>
                <p>
                  The organisation of National Moot Court Competitions, National Client Counselling
                  Competitions, debates, elocutions and the flagship Samvidhan Pe Charcha event at
                  Parul University (September 2024) reflects a belief that legal skills are developed
                  through practice, competition and discourse rather than lectures alone.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6 text-base leading-[1.85] text-slate-300/85 md:text-[17px]">
                <p>
                  The Certificate Course in Constitutional Law and Contemporary Developments and the
                  Legal Start Up credit course developed for management students demonstrate a
                  commitment to curriculum innovation that bridges traditional legal education with
                  professional and interdisciplinary application.
                </p>
                <p>
                  As Coordinator of UG Dissertation at Presidency University, mentorship of
                  undergraduate research represents the current expression of this philosophy,
                  guiding students toward independent scholarly inquiry while maintaining the
                  institutional standards that ensure academic rigour.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Philosophy pillars */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {[
                { icon: ScrollText, label: "Student-Centred Learning" },
                { icon: Flame, label: "Research Orientation" },
                { icon: Crown, label: "Mentorship & Guidance" },
                { icon: Landmark, label: "Institutional Development" },
              ].map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.label}
                    className="group flex items-center gap-3 rounded-lg border border-gold/[0.08] bg-navy-900/40 px-4 py-3.5 transition-all duration-300 hover:border-gold/20 hover:bg-navy-900/60"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-gold/50 transition-colors group-hover:text-gold" />
                    <span className="text-sm text-slate-300">{pillar.label}</span>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ SECTION 6: PURPOSE THROUGH TIME ══════ */}
      <section className="section-padding bg-navy-900">
        <div className="container-academic px-4 md:px-6">
          <ScrollReveal>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/60 uppercase">
              Evolution
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-white md:text-4xl">
              Purpose Through Time
            </h2>
            <p className="mt-3 max-w-xl text-base text-slate-400">
              How professional experience shaped an enduring academic philosophy.
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mt-4 h-px bg-gradient-to-r from-gold/60 to-transparent"
            />
          </ScrollReveal>

          <div className="mt-14 space-y-0">
            {purposeTimeline.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.06}>
                <div className="group relative border-l border-gold/12 py-7 pl-8 transition-colors hover:border-gold/30">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-9 h-3 w-3 -translate-x-[6.5px] rounded-full border-2 border-gold/30 bg-navy-900 transition-all duration-300 group-hover:border-gold group-hover:bg-gold/20 group-hover:shadow-[0_0_10px_rgba(201,168,106,0.3)]" />

                  <p className="text-xs font-medium tracking-wide text-gold/60">{item.period}</p>
                  <h3 className="mt-1.5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SECTION 7: LEGACY STATEMENT ══════ */}
      <section className="relative overflow-hidden bg-navy-800 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.04)_0%,transparent_60%)] blur-[80px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
          <motion.div
            className="absolute left-[25%] top-[20%] h-1.5 w-1.5 rounded-full bg-gold/6"
            animate={{ y: [0, -12, 0], opacity: [0.02, 0.06, 0.02] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container-academic relative z-10 px-4 md:px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/15 bg-gradient-to-br from-gold/[0.08] to-transparent">
                <Feather className="h-6 w-6 text-gold" />
              </div>
              <h2 className="font-serif text-3xl font-medium tracking-tight text-white md:text-4xl">
                Legacy &amp; Future Direction
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="mx-auto mt-5 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-[1.85] text-slate-300/85 md:text-[17px]">
              <p>
                With over 25 years of professional experience spanning administrative leadership at
                Reliance Securities, In-Charge Principal tenure at KLE College of Law, doctoral
                research on IPR in Indian sports, and the current senior-scale academic appointment
                at Presidency University, the trajectory points toward a sustained contribution to
                Indian legal education at both institutional and scholarly levels.
              </p>
              <p>
                The immediate future involves deepening research in Sports Law, Intellectual
                Property Rights and AI & Law. These are areas where Indian legal scholarship remains
                nascent and where dedicated academic focus can influence policy frameworks and
                professional practice. The 6 patents and 2 design registrations already published
                represent a foundation for continued innovation at the intersection of law and
                technology.
              </p>
              <p>
                The broader aspiration is to contribute to a generation of legal professionals who
                combine doctrinal expertise with research capability, ethical reasoning and practical
                competence. Students mentored not just through classroom instruction but through moot
                courts, client counselling competitions, dissertation supervision and exposure to
                constitutional discourse through events like Samvidhan Pe Charcha.
              </p>
              <p className="text-slate-300/70 italic">
                This is not a legacy measured in awards or publications alone, but in institutional
                systems established, research centres created, students guided, and the cumulative
                impact of principled academic leadership sustained over decades.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
