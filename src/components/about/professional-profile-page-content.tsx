"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ChevronRight,
  GraduationCap,
  FileText,
  Scale,
  Briefcase,
  Handshake,
  Lightbulb,
  Users,
  BookOpen,
  PenTool,
  Trophy,
  ScrollText,
  BadgeCheck,
} from "lucide-react";
import { profile } from "@/data/profile";
import { FadeUp } from "@/components/shared/fade-up";

/* ─── DATA ─── */

const professionalSnapshot = [
  {
    icon: GraduationCap,
    title: "Academic Leadership",
    summary: "Over 8 years as full-time faculty across Presidency University, Parul University and KLE College of Law. Served as In-Charge Principal (2016 to 2017). Coordinated UG Dissertation, Sports Committee and Internship & Placement.",
  },
  {
    icon: FileText,
    title: "Research & Scholarship",
    summary: "16 published research papers, 9 book chapters in edited volumes, Ph.D. in Law (2024), M.Phil Gold Medalist (2021). Presented papers at national and international conferences across India.",
  },
  {
    icon: Scale,
    title: "Legal Practice",
    summary: "Independent legal practitioner in Mumbai (2014 to 2016 and 2021). Handled cases independently, prepared briefs, client interactions, court case records and office administration.",
  },
  {
    icon: Briefcase,
    title: "Administration",
    summary: "Head of Administration at Reliance Securities Ltd. (2008 to 2014). Made processes ISO compliant, led cost rationalisation, received Management Special Bonus for 5 consecutive years. Admin Department adjudged Best Department 2012 to 2013.",
  },
  {
    icon: Handshake,
    title: "Mediation & Arbitration",
    summary: "Certified Mediator and Arbitrator with 40 hours training from Samvad Mediation Center, Lucknow. Judged as Arbitrator for the Asia-Pacific VIS Pre-Moot 2026.",
  },
  {
    icon: Lightbulb,
    title: "IPR & Innovation",
    summary: "6 published patents spanning AI, IoT, blockchain and renewable energy. 2 design registrations granted (India and UK). Best IPR Holder Award 2024.",
  },
];

const professionalRoles = [
  { title: "Assistant Professor (Senior Scale)", description: "Full-time academic appointment at Presidency School of Law, Presidency University, Bangalore since January 2025." },
  { title: "Researcher", description: "Ph.D. in Law (2024), 16 research papers published in national and international journals across IPR, sports law, human rights and constitutional law." },
  { title: "Author & Editor", description: "7 books edited and published, 9 book chapters contributed to edited volumes including Scopus-indexed IGI Global publications." },
  { title: "Mediator & Arbitrator", description: "Certified through 40 hours mediation training. Arbitrator at Asia-Pacific VIS Pre-Moot 2026 and judge at multiple national moot court competitions." },
  { title: "Legal Practitioner", description: "Independent practice in Mumbai handling cases, drafting, client interactions and court records. L.L.B. from Government Law College, Mumbai." },
  { title: "Academic Administrator", description: "In-Charge Principal of KLE College of Law (2016 to 2017). BCI compliance, admissions, examinations, NAAC IQAC coordination (Criteria 5)." },
  { title: "Institutional Coordinator", description: "Coordinator of Centre for Constitutional Law and Policy, Centre of Excellence in Sports Law Policy and Governance, and Centre for Post Graduate Legal Studies." },
  { title: "Patent Holder", description: "6 patents published and 2 design registrations granted across AI, blockchain, IoT and renewable energy domains." },
];

const leadershipPositions = [
  { title: "Coordinator Sports Committee", institution: "Presidency University, 2025 to Present" },
  { title: "Coordinator UG Dissertation", institution: "Presidency University, 2025 to Present" },
  { title: "Co-Coordinator Internship & Placement", institution: "Presidency University, 2025 to Present" },
  { title: "In-Charge Principal", institution: "KLE College of Law, 2016 to 2017" },
  { title: "Co-Coordinator CPGLS", institution: "Parul University, 2021 to 2024" },
  { title: "Coordinator CCLP", institution: "Parul University, 2021 to 2024" },
  { title: "Coordinator CESLPG", institution: "Parul University, 2021 to 2024" },
  { title: "Head of Administration", institution: "Reliance Securities Ltd., 2008 to 2014" },
];

const certifications = [
  "40 Hours Mediation Training, Samvad Mediation Center, Lucknow",
  "UGC-Stride Online Certificate in Law and Social Transformation, MGM University (2023)",
  "Eight Week Course on Women and Land Rights, Aga Khan / Womanity Foundation (2022)",
  "Patent Law Practices in US, India and China, GNLU / George Washington University (2018)",
  "Public Policy Analysis, National Law School of India University (2018)",
  "Advanced Issues in Competition Law and Economics, NLSIU / EU Delegation (2018)",
  "Advance Criminal Law and Procedure, GNLU (2017)",
  "Corporate Fraud and Economic Offences, NLSIU Bengaluru (2016)",
];

/* ─── COMPONENT ─── */

export function ProfessionalProfilePageContent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <div ref={sectionRef}>
      {/* ══════ SECTION 1: HERO ══════ */}
      <section className="relative overflow-hidden bg-navy-900 pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-[#091422] to-navy-900" />
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.04)_0%,transparent_70%)] blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        </div>

        <div className="container-academic relative z-10 px-4 md:px-6">
          <FadeUp>
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-sm text-slate-400">
              <Link href="/" className="transition-colors hover:text-gold">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <Link href="/about" className="transition-colors hover:text-gold">About</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <span className="text-gold/80">Professional Profile</span>
            </nav>
          </FadeUp>

          <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
            <FadeUp delay={0.1}>
              <div className="relative mx-auto w-48 lg:mx-0 lg:w-56">
                <div className="absolute -inset-2 rounded-xl border border-gold/12" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-gold/15 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                  <Image src={profile.portrait} alt={profile.name} fill className="object-cover object-top" sizes="224px" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-xs font-medium tracking-[0.25em] text-gold/60 uppercase">Professional Profile</p>
              <h1 className="mt-3 font-serif text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-3 text-base text-gold/80 md:text-lg">{profile.currentPosition.title}</p>
              <p className="mt-1 text-sm text-slate-400">
                {profile.currentPosition.institution}, {profile.currentPosition.university}
              </p>
              <p className="mt-1 text-sm text-slate-400">25+ Years of Professional Experience</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Legal Scholar", "Academic Leader", "Researcher", "Mediator", "Author"].map((r) => (
                  <span key={r} className="rounded-full border border-gold/15 bg-gold/[0.05] px-3 py-1 text-xs text-slate-300">{r}</span>
                ))}
              </div>
              <motion.div initial={{ width: 0 }} animate={{ width: 60 }} transition={{ duration: 1, delay: 0.5 }} className="mt-5 h-px bg-gradient-to-r from-gold/60 to-transparent" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════ SECTION 2: PROFESSIONAL SNAPSHOT ══════ */}
      <section className="section-padding bg-navy-800">
        <div className="container-academic px-4 md:px-6">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/60 uppercase">Overview</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-white md:text-4xl">Professional Snapshot</h2>
            <div className="mt-4 h-px w-14 bg-gradient-to-r from-gold/60 to-transparent" />
          </FadeUp>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {professionalSnapshot.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }} className="group rounded-xl border border-gold/[0.1] bg-navy-900/40 p-6 transition-all duration-300 hover:border-gold/25 hover:shadow-[0_10px_30px_rgba(201,168,106,0.06)]">
                  <Icon className="mb-4 h-5 w-5 text-gold/60 transition-colors group-hover:text-gold" />
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.summary}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ SECTION 3: PROFESSIONAL ROLES ══════ */}
      <section className="section-padding bg-navy-900">
        <div className="container-academic px-4 md:px-6">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/60 uppercase">Identities</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-white md:text-4xl">Professional Roles</h2>
            <div className="mt-4 h-px w-14 bg-gradient-to-r from-gold/60 to-transparent" />
          </FadeUp>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {professionalRoles.map((role, index) => (
              <motion.div key={role.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }} className="group rounded-lg border border-gold/[0.08] bg-navy-800/30 p-5 transition-all duration-300 hover:border-gold/20">
                <h3 className="text-base font-semibold text-white">{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SECTION 4: LEADERSHIP PROFILE ══════ */}
      <section className="section-padding bg-navy-800">
        <div className="container-academic px-4 md:px-6">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/60 uppercase">Leadership</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-white md:text-4xl">Leadership Positions</h2>
            <div className="mt-4 h-px w-14 bg-gradient-to-r from-gold/60 to-transparent" />
          </FadeUp>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipPositions.map((pos, index) => (
              <motion.div key={pos.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }} className="group rounded-lg border border-gold/[0.08] bg-navy-900/40 p-5 transition-all duration-300 hover:border-gold/20">
                <Users className="mb-3 h-4 w-4 text-gold/50 transition-colors group-hover:text-gold" />
                <h4 className="text-sm font-semibold text-white">{pos.title}</h4>
                <p className="mt-1.5 text-xs text-slate-400">{pos.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SECTION 5: RESEARCH & INNOVATION ══════ */}
      <section className="section-padding bg-navy-900">
        <div className="container-academic px-4 md:px-6">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/60 uppercase">Scholarship</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-white md:text-4xl">Research & Innovation Profile</h2>
            <div className="mt-4 h-px w-14 bg-gradient-to-r from-gold/60 to-transparent" />
          </FadeUp>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: FileText, value: "16+", label: "Research Papers" },
              { icon: BookOpen, value: "9+", label: "Book Chapters" },
              { icon: ScrollText, value: "7", label: "Edited Books" },
              { icon: Lightbulb, value: "6", label: "Patents" },
              { icon: PenTool, value: "2", label: "Design Registrations" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label} initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }} className="group rounded-xl border border-gold/[0.1] bg-navy-800/30 p-5 text-center transition-all duration-300 hover:border-gold/25">
                  <Icon className="mx-auto mb-3 h-5 w-5 text-gold/60 transition-colors group-hover:text-gold" />
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ SECTION 6: CERTIFICATIONS ══════ */}
      <section className="section-padding bg-navy-800">
        <div className="container-academic px-4 md:px-6">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/60 uppercase">Credentials</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-white md:text-4xl">Professional Certifications</h2>
            <div className="mt-4 h-px w-14 bg-gradient-to-r from-gold/60 to-transparent" />
          </FadeUp>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div key={cert} initial={{ opacity: 0, x: -10 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.3, delay: 0.1 + index * 0.04 }} className="group flex items-start gap-3 rounded-lg border border-gold/[0.06] bg-navy-900/30 px-5 py-4 transition-colors hover:border-gold/15">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold/50 transition-colors group-hover:text-gold" />
                <p className="text-sm text-slate-300/90">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SECTION 7: PHILOSOPHY ══════ */}
      <section className="relative overflow-hidden bg-navy-900 py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.04)_0%,transparent_65%)] blur-[80px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        </div>
        <div className="container-academic relative z-10 px-4 text-center md:px-6">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/60 uppercase">Professional Philosophy</p>
            <div className="mt-8">
              <span className="font-serif text-5xl text-gold/20" aria-hidden="true">&ldquo;</span>
            </div>
            <blockquote className="-mt-4 mx-auto max-w-3xl font-serif text-xl leading-relaxed text-white/90 md:text-2xl md:leading-relaxed">
              {profile.mission}
            </blockquote>
            <div className="mt-4"><span className="font-serif text-5xl text-gold/20" aria-hidden="true">&rdquo;</span></div>
            <div className="mx-auto mt-5 h-px w-10 bg-gold/25" />
            <p className="mt-4 text-sm text-slate-400">Professional Philosophy</p>
          </FadeUp>
        </div>
      </section>

      {/* ══════ SECTION 8: CURRENT RESPONSIBILITIES ══════ */}
      <section className="section-padding bg-navy-800">
        <div className="container-academic px-4 md:px-6">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/60 uppercase">Present</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-white md:text-4xl">Current Responsibilities</h2>
            <div className="mt-4 h-px w-14 bg-gradient-to-r from-gold/60 to-transparent" />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-10 rounded-2xl border border-gold/[0.12] bg-navy-900/40 p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-gold/70">Institution</p>
                  <p className="mt-1 text-lg font-semibold text-white">{profile.currentPosition.institution}</p>
                  <p className="mt-0.5 text-sm text-slate-400">{profile.currentPosition.university}, {profile.currentPosition.location}</p>
                  <p className="mt-4 text-sm font-medium text-gold/70">Designation</p>
                  <p className="mt-1 text-base text-white">{profile.currentPosition.title}</p>
                  <p className="mt-4 text-sm font-medium text-gold/70">Period</p>
                  <p className="mt-1 text-sm text-slate-300">{profile.currentPosition.period}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gold/70">Academic & Leadership Responsibilities</p>
                  <ul className="mt-3 space-y-2.5">
                    {profile.currentPosition.coordinatorRoles.map((role) => (
                      <li key={role} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/50" />
                        {role}
                      </li>
                    ))}
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/50" />
                      Assistant Professor Law (Senior Scale)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
