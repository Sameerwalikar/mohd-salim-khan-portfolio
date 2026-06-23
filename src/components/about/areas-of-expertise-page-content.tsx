"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Scale,
  Lightbulb,
  Trophy,
  Heart,
  Shield,
  PawPrint,
  Cpu,
  Gavel,
  BookOpen,
  Handshake,
} from "lucide-react";
import { AcademicStarsBackground, AcademicShootingStars } from "@/components/ui/academic-stars";
import { FadeUp } from "@/components/shared/fade-up";

const expertiseAreas = [
  {
    title: "Constitutional Law",
    icon: Scale,
    description:
      "Research on fundamental rights, constitutional morality, and legal frameworks. Conducted certificate courses on Constitutional Law and Contemporary Developments. Organised the flagship Samvidhan Pe Charcha national event.",
    keywords: ["Fundamental Rights", "Constitutional Morality", "Judicial Review", "Samvidhan Pe Charcha"],
  },
  {
    title: "Intellectual Property Rights",
    icon: Lightbulb,
    description:
      "Ph.D. research on IPR in the Indian Sports Sector. 6 published patents and 2 granted design registrations across AI, IoT, blockchain and renewable energy domains. Best IPR Holder Award 2024.",
    keywords: ["Patents", "Design Registration", "Sports Sector IPR", "Innovation"],
  },
  {
    title: "Sports Law",
    icon: Trophy,
    description:
      "Coordinator of Centre of Excellence in Sports Law Policy and Governance (CESLPG) at Parul University. Research on personality rights and IPR legislation for sportspersons in India.",
    keywords: ["Sports Governance", "Personality Rights", "Policy", "CESLPG"],
  },
  {
    title: "Human Rights",
    icon: Heart,
    description:
      "Published research on prisoners' rights, transgender rights, refugee law, sex workers' rights, and the right to food. Organised national seminar on Assessing 75 Years of Human Rights in India.",
    keywords: ["Prisoners' Rights", "Transgender Rights", "Refugee Law", "Article 21"],
  },
  {
    title: "Cyber Law",
    icon: Shield,
    description:
      "Research on e-banking fraud, data protection, e-commerce regulation, and the impact of cyber laws on information security management for protecting businesses and citizens.",
    keywords: ["Data Protection", "E-Banking Fraud", "Digital Privacy", "IT Act"],
  },
  {
    title: "Animal Law",
    icon: PawPrint,
    description:
      "Organised international conference on Changing Landscapes in Animal Law at Parul University. Research on illegal smuggling of exotic wildlife in Asia as a threat to the ecosystem.",
    keywords: ["Wildlife Protection", "Ecosystem Threats", "Animal Welfare", "Exotic Species"],
  },
  {
    title: "AI & Law",
    icon: Cpu,
    description:
      "Research on AI in judicial systems, chatbot integration in educational settings, and the ethical, legal and regulatory issues of artificial intelligence. Patent on AI-based evaluation platforms.",
    keywords: ["AI Ethics", "Legal Accountability", "Judicial Technology", "AI Evaluation"],
  },
  {
    title: "Criminal Law",
    icon: Gavel,
    description:
      "Certificate programme in Advanced Criminal Law and Procedure from Gujarat National Law University. Research on modernising India's legal framework replacing the IPC, CrPC and Evidence Act.",
    keywords: ["Criminal Reforms", "Forensic Science", "BNS", "Criminal Justice"],
  },
  {
    title: "Legal Education",
    icon: BookOpen,
    description:
      "Over 8 years of full-time law teaching across three institutions. Organised moot courts, client counselling competitions, national law festivals and the Legal Start Up credit course for management students.",
    keywords: ["Pedagogy", "Moot Court", "Clinical Education", "NEP 2020"],
  },
  {
    title: "Mediation & Arbitration",
    icon: Handshake,
    description:
      "Certified Mediator and Arbitrator with 40 hours mediation training from Samvad Mediation Center, Lucknow. Judged as Arbitrator for the Asia-Pacific VIS Pre-Moot 2026.",
    keywords: ["ADR", "Conciliation", "Dispute Resolution", "VIS Moot"],
  },
];

export function AreasOfExpertisePageContent() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-[#091422] to-navy-900" />
          <AcademicStarsBackground starDensity={0.0001} />
          <AcademicShootingStars minDelay={6000} maxDelay={12000} />
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.04)_0%,transparent_70%)] blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        </div>

        <div className="container-academic relative z-10 px-4 md:px-6">
          <FadeUp>
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-slate-400">
              <Link href="/" className="transition-colors hover:text-gold">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <Link href="/about" className="transition-colors hover:text-gold">About</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <span className="text-gold/80">Areas of Expertise</span>
            </nav>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/60 uppercase">Research & Teaching Focus</p>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
              Areas of Expertise
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300/80 md:text-lg">
              Interdisciplinary legal scholarship spanning constitutional law, intellectual property, sports law, technology and human rights
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="mt-5 h-px bg-gradient-to-r from-gold/70 to-transparent"
            />
          </FadeUp>
        </div>
      </section>

      {/* Expertise Grid — 2 per row, bigger cards, hover scale, background icons */}
      <section className="section-padding bg-navy-900">
        <div className="container-academic px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  whileHover={{ scale: 1.03 }}
                  className="group relative overflow-hidden rounded-2xl border border-gold/[0.12] bg-navy-800/50 p-8 backdrop-blur-sm transition-all duration-400 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(201,168,106,0.1)] md:p-10"
                >
                  {/* Background icon watermark */}
                  <div className="pointer-events-none absolute -right-6 -bottom-6 opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.08]">
                    <Icon className="h-40 w-40 text-gold md:h-52 md:w-52" />
                  </div>

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/[0.03] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="mb-4 text-xl font-semibold text-white md:text-2xl">
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base leading-relaxed text-slate-300/85 md:text-[17px] md:leading-[1.8]">
                      {area.description}
                    </p>

                    {/* Keywords */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {area.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="rounded-full border border-gold/15 bg-gold/[0.04] px-3 py-1 text-xs font-medium text-gold/70 transition-colors group-hover:border-gold/25 group-hover:text-gold/90"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
