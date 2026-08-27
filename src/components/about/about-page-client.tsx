"use client";

import Link from "next/link";
import Image from "next/image";
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

export function AboutPageClient() {
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
                className="mb-8 flex items-center gap-1.5 text-sm text-slate-400"
              >
                <Link href="/" className="transition-colors hover:text-gold">
                  Home
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
                <span className="text-gold/80">About</span>
              </nav>
            </FadeUp>

            <div className="grid gap-12 lg:grid-cols-[1fr_320px] items-center">
              {/* Left Column - Heading & Intro */}
              <FadeUp delay={0.1} className="order-2 lg:order-1">
                <p className="text-xs font-medium tracking-[0.25em] text-gold/70 uppercase">
                  Academic Legacy
                </p>
                <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
                  About the Professor
                </h1>
                <p className="mt-4 max-w-xl text-base text-slate-300/80 md:text-lg leading-relaxed">
                  Unveiling the career, guiding values, and scholastic contributions of a veteran legal expert. Discover a journey spanning three decades of educational leadership and legal practitioner experience.
                </p>
                <div className="mt-6 h-px w-20 bg-gradient-to-r from-gold/60 to-transparent" />
              </FadeUp>

              {/* Right Column - Portrait visual anchor */}
              <FadeUp delay={0.2} className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="group relative w-56 sm:w-64 lg:w-72"
                >
                  {/* Outer glow on hover */}
                  <div className="absolute -inset-4 rounded-xl bg-gold/[0.02] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                  {/* Frame */}
                  <div className="absolute -inset-3 rounded-xl border border-gold/10 transition-colors duration-300 group-hover:border-gold/25" />
                  {/* Corner accents */}
                  <div className="absolute -left-3 -top-3 h-5 w-5 border-l-2 border-t-2 border-gold/25 transition-colors duration-300 group-hover:border-gold/50" />
                  <div className="absolute -bottom-3 -right-3 h-5 w-5 border-b-2 border-r-2 border-gold/25 transition-colors duration-300 group-hover:border-gold/50" />
                  
                  {/* Image wrapper */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-gold/15 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:border-gold/30 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(201,168,106,0.06)]">
                    <Image
                      src={profile.portrait}
                      alt={`Portrait of ${profile.name}`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-w-1024px) 256px, 288px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
                    {/* Gold inset border on hover */}
                    <div className="absolute inset-0 rounded-lg border border-transparent transition-colors duration-300 group-hover:border-gold/15" />
                  </div>

                  {/* Floating Information Overlay Badges */}
                  <div className="absolute -bottom-2 -left-2 z-20 rounded-lg border border-gold/20 bg-navy-900/90 px-3.5 py-2 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                    <p className="text-[10px] font-semibold tracking-wider text-gold uppercase">Experience</p>
                    <p className="text-xs font-bold text-white">25+ Years</p>
                  </div>

                  <div className="absolute -top-2 -right-2 z-20 rounded-lg border border-gold/20 bg-navy-900/90 px-3 py-1.5 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                    <p className="text-[9px] font-semibold tracking-wider text-gold/80 uppercase">Legal Scholar &amp; Author</p>
                  </div>
                </motion.div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ══════ SECTION: EXECUTIVE SUMMARY ══════ */}
        <section className="relative z-10 bg-navy-800/40 py-12 border-y border-gold/10">
          <div className="container-academic px-4 md:px-6">
            <FadeUp>
              <div className="mx-auto max-w-4xl text-center">
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-navy-900 px-3 py-1 text-[10px] font-medium tracking-wider text-gold uppercase">
                  <Sparkles className="h-3 w-3" />
                  Executive Summary
                </div>
                <blockquote className="font-serif text-lg md:text-xl leading-relaxed text-slate-200 italic">
                  &ldquo;{profile.executiveSummary}&rdquo;
                </blockquote>
              </div>
            </FadeUp>
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
