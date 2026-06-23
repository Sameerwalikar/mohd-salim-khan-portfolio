"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/shared/fade-up";

const expertiseBadges = [
  { label: "Legal Scholar", icon: "◆" },
  { label: "Researcher", icon: "◆" },
  { label: "Author", icon: "◆" },
  { label: "Patent Holder", icon: "◆" },
  { label: "Academic Leader", icon: "◆" },
  { label: "Mediator", icon: "◆" },
] as const;

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.6]);
  const portraitY = useTransform(scrollY, [0, 600], [0, -30]);

  return (
    <section className="relative min-h-screen overflow-hidden hero-library-bg pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Ambient Background Layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/faculty-portrait.png')] bg-cover bg-center opacity-[0.04] blur-md" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-900/70 to-navy-800/80" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gold/[0.03] blur-[120px]" />
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gold/[0.02] blur-[80px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      {/* Main Content Grid */}
      <div className="container-academic relative grid items-center gap-16 px-4 md:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12 xl:gap-20">
        {/* Left — Content */}
        <motion.div style={{ y, opacity }} className="max-w-2xl">
          {/* Title Prefix */}
          <FadeUp delay={0.05}>
            <div className="mb-6 flex items-center gap-2">
              <span className="inline-block h-px w-8 bg-gold/50" />
              <span className="text-xs font-medium tracking-[0.3em] text-gold/70 uppercase">
                Academic Legacy
              </span>
            </div>
          </FadeUp>

          {/* Name */}
          <FadeUp delay={0.1}>
            <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem]">
              Prof. Dr. Mohammed
              <br />
              <span className="text-gold">Salim B. Khan</span>
            </h1>
          </FadeUp>

          {/* Position — without employer prominence */}
          <FadeUp delay={0.15}>
            <p className="mt-5 text-lg font-medium text-foreground/90 md:text-xl">
              Assistant Professor (Senior Scale)
            </p>
            <p className="mt-1 text-sm text-muted/80">
              Legal Scholar &bull; Researcher &bull; Author &bull; Certified Mediator &amp; Arbitrator
            </p>
          </FadeUp>

          {/* Headline Quote */}
          <FadeUp delay={0.2}>
            <blockquote className="mt-8 border-l-2 border-gold/30 pl-5">
              <p className="max-w-lg font-serif text-xl italic leading-relaxed text-foreground/80 md:text-2xl">
                &ldquo;Advancing Legal Education Through Research, Innovation and Leadership&rdquo;
              </p>
            </blockquote>
          </FadeUp>

          {/* Expertise Badges — Premium */}
          <FadeUp delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {expertiseBadges.map((badge) => (
                <motion.span
                  key={badge.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="group relative inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/[0.05] px-4 py-2 text-sm font-medium text-foreground/90 backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-gold/[0.1] hover:text-gold hover:shadow-[0_0_20px_rgba(201,168,106,0.12)]"
                >
                  <span className="text-gold/70 transition-colors duration-300 group-hover:text-gold">
                    {badge.icon}
                  </span>
                  {badge.label}
                </motion.span>
              ))}
            </div>
          </FadeUp>

          {/* Experience Summary Line */}
          <FadeUp delay={0.3}>
            <p className="mt-8 text-sm leading-relaxed text-muted md:text-base">
              25+ years of experience spanning legal academia, research,
              corporate leadership and institutional administration.
              <span className="text-foreground/70"> 16 research papers &bull; 7 books &bull; 6 patents &bull; 20+ awards.</span>
            </p>
          </FadeUp>

          {/* CTA Buttons */}
          <FadeUp delay={0.35}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild variant="secondary" className="btn-glow group gap-2 px-7 py-3 text-sm">
                <Link href="/about">
                  <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  Explore Legacy
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-gold/20 bg-transparent px-7 py-3 text-sm text-foreground/90 backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-gold/[0.08] hover:text-gold hover:shadow-[0_0_24px_rgba(201,168,106,0.08)]"
              >
                <Link href="/academic-journey">Academic Journey</Link>
              </Button>
            </div>
          </FadeUp>
        </motion.div>

        {/* Right — Portrait */}
        <FadeUp delay={0.15} className="flex justify-center lg:justify-end">
          <motion.div
            style={{ y: portraitY }}
            className="relative"
          >
            {/* Outer Glow */}
            <div className="absolute -inset-6 rounded-sm bg-gold/[0.04] blur-2xl" />

            {/* Decorative Frame — Outer */}
            <div className="absolute -inset-4 rounded-sm border border-gold/15 md:-inset-5" />
            <div className="absolute -right-2 -top-2 h-full w-full rounded-sm border border-gold/10 md:-right-3 md:-top-3" />

            {/* Corner Accents */}
            <div className="absolute -left-4 -top-4 h-6 w-6 border-l-2 border-t-2 border-gold/40 md:-left-5 md:-top-5 md:h-8 md:w-8" />
            <div className="absolute -bottom-4 -right-4 h-6 w-6 border-b-2 border-r-2 border-gold/40 md:-bottom-5 md:-right-5 md:h-8 md:w-8" />

            {/* Main Image Container — 30-40% larger */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className="relative aspect-[3/4] w-[320px] overflow-hidden rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(201,168,106,0.08)] sm:w-[360px] md:w-[420px] lg:w-[460px] xl:w-[500px]"
            >
              {/* Gold Border Inset */}
              <div className="absolute inset-0 z-10 rounded-sm border border-gold/20" />

              <Image
                src={profile.portrait}
                alt={profile.name}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 640px) 320px, (max-width: 768px) 360px, (max-width: 1024px) 420px, (max-width: 1280px) 460px, 500px"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] via-transparent to-transparent" />

              {/* Bottom Label Bar */}
              <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-gold/15 bg-navy-900/85 px-6 py-4 backdrop-blur-md">
                <p className="text-center text-[11px] font-medium tracking-[0.3em] text-gold/80 uppercase">
                  Legal Scholar &bull; Researcher &bull; Author
                </p>
              </div>
            </motion.div>

            {/* Floating Accent Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 left-4 z-30 rounded-lg border border-gold/20 bg-navy-900/90 px-4 py-2.5 shadow-lg backdrop-blur-md md:-bottom-12 md:left-6"
            >
              <p className="text-xs font-semibold text-gold">25+ Years</p>
              <p className="text-[10px] text-muted">Academic Excellence</p>
            </motion.div>

            {/* Top-right Floating Badge */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -right-3 -top-3 z-30 rounded-lg border border-gold/20 bg-navy-900/90 px-3 py-2 shadow-lg backdrop-blur-md md:-right-6 md:-top-4"
            >
              <p className="text-xs font-semibold text-gold">Ph.D. in Law</p>
              <p className="text-[10px] text-muted">Gold Medalist</p>
            </motion.div>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}
