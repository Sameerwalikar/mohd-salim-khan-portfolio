"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  User,
  Compass,
  GraduationCap,
  Scale,
  Briefcase,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PageTransition } from "@/components/layout/page-transition";
import { AboutPageHeroBackground } from "@/components/about/about-page-hero-background";
import { FadeUp } from "@/components/shared/fade-up";
import { profile } from "@/data/profile";

const sections = [
  {
    title: "Biography",
    href: "/about/biography",
    description: "The scholarly journey, narrative and academic leadership of a legal practitioner and educator with 25+ years of experience.",
    icon: User,
    cta: "Read Narrative",
    accent: "Scholarship & Leadership",
  },
  {
    title: "Mission & Vision",
    href: "/about/mission-vision",
    description: "Guiding principles, commitment to social justice, research excellence, and dedication to inspiring future legal minds.",
    icon: Compass,
    cta: "Explore Guiding Principles",
    accent: "Core Values",
  },
  {
    title: "Academic Qualifications",
    href: "/about/academic-qualifications",
    description: "Comprehensive educational credentials including Ph.D. in Law, Gold Medal M.Phil, LL.M., LL.B., and multidisciplinary diplomas.",
    icon: GraduationCap,
    cta: "View Qualifications",
    accent: "Three Decades of Education",
  },
  {
    title: "Areas of Expertise",
    href: "/about/areas-of-expertise",
    description: "Deep research and teaching focus in Constitutional Law, Sports Law, Intellectual Property Rights, Cyber Law, and ADR.",
    icon: Scale,
    cta: "Explore Expertise",
    accent: "Legal Specializations",
  },
  {
    title: "Professional Profile",
    href: "/about/professional-profile",
    description: "Key professional highlights, certifications, career milestones, and administrative contributions in legal academia.",
    icon: Briefcase,
    cta: "View Career Profile",
    accent: "Milestones & Achievements",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-navy-900 text-slate-100">
        {/* ══════ HERO SECTION ══════ */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-36 md:pb-20">
          <AboutPageHeroBackground />

          <div className="container-academic relative z-10 px-4 md:px-6">
            {/* Breadcrumb */}
            <FadeUp>
              <nav
                aria-label="Breadcrumb"
                className="mb-6 flex items-center gap-1.5 text-sm text-slate-400"
              >
                <Link href="/" className="transition-colors hover:text-gold">
                  Home
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
                <span className="text-gold/80">About</span>
              </nav>
            </FadeUp>

            <div className="grid gap-8 lg:grid-cols-[1fr_450px] lg:items-end">
              <FadeUp delay={0.1}>
                <p className="text-xs font-medium tracking-[0.25em] text-gold/70 uppercase">
                  Academic Legacy
                </p>
                <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
                  About the Professor
                </h1>
                <p className="mt-4 max-w-xl text-base text-slate-300/80 md:text-lg">
                  Unveiling the career, guiding values, and scholastic contributions of a veteran legal expert.
                </p>
                <div className="mt-6 h-px w-20 bg-gradient-to-r from-gold/60 to-transparent" />
              </FadeUp>

              {/* Executive Summary Quote Callout */}
              <FadeUp delay={0.2} className="relative">
                <div className="rounded-xl border border-gold/15 bg-navy-800/40 p-6 backdrop-blur-sm lg:p-7">
                  <div className="absolute -top-3 left-6 flex h-6 items-center gap-1.5 rounded-full border border-gold/25 bg-navy-900 px-3 text-[10px] font-medium tracking-wider text-gold uppercase">
                    <Sparkles className="h-3 w-3" />
                    Executive Summary
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300/90 italic">
                    &ldquo;{profile.executiveSummary}&rdquo;
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ══════ GATEWAY CARDS GRID ══════ */}
        <section className="section-padding relative z-10 bg-navy-900">
          <div className="container-academic px-4 md:px-6">
            <FadeUp>
              <h2 className="font-serif text-2xl font-medium text-white md:text-3xl">
                Explore the Sections
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-xl">
                Navigate to specialized profiles detailing various chapters of the professor&apos;s professional narrative.
              </p>
            </FadeUp>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <FadeUp key={section.title} delay={0.05 * (index + 1)}>
                    <Link href={section.href} className="group block h-full">
                      <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative h-full flex flex-col justify-between rounded-xl border border-gold/[0.12] bg-navy-800/40 p-8 transition-all duration-300 hover:border-gold/30 hover:bg-navy-800/60 hover:shadow-[0_15px_45px_rgba(201,168,106,0.06)]"
                      >
                        <div>
                          {/* Accent and Icon */}
                          <div className="flex items-center justify-between mb-6">
                            <span className="text-[10px] font-medium tracking-wider text-gold/60 uppercase">
                              {section.accent}
                            </span>
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/15 bg-navy-900/60 text-gold transition-colors duration-300 group-hover:border-gold/35 group-hover:bg-gold/[0.04]">
                              <Icon className="h-5 w-5" />
                            </div>
                          </div>

                          {/* Section Title */}
                          <h3 className="font-serif text-xl font-medium text-white transition-colors duration-300 group-hover:text-gold">
                            {section.title}
                          </h3>

                          {/* Description */}
                          <p className="mt-3 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                            {section.description}
                          </p>
                        </div>

                        {/* CTA Link Button */}
                        <div className="mt-8 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-gold uppercase">
                          <span>{section.cta}</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </motion.div>
                    </Link>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
