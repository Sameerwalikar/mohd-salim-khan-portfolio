"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Lightbulb, PenTool, ArrowRight, Sparkles, Globe } from "lucide-react";
import { featuredIPR } from "@/data/ipr";
import { Button } from "@/components/ui/button";
import { Academic3DCard, CardIcon, CardBadge, CardTitle, CardContent } from "@/components/ui/academic-3d-card";
import { cn } from "@/lib/utils";

export function FeaturedIPRSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const heroItem = featuredIPR[0];
  const otherItems = featuredIPR.slice(1);

  return (
    <section
      id="featured-ipr"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-navy-800"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-[#0c1a2d] to-navy-800" />
        {/* Gold orb behind hero card */}
        <div className="absolute left-1/2 top-[35%] -translate-x-1/2 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.04)_0%,transparent_70%)] blur-[100px]" />
        {/* Innovation grid pattern */}
        <div className="absolute inset-0 opacity-[0.012] bg-[linear-gradient(rgba(201,168,106,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,106,0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Particles */}
        <motion.div
          className="absolute left-[12%] top-[25%] h-2 w-2 rounded-full bg-gold/10"
          animate={{ y: [0, -18, 0], opacity: [0.04, 0.11, 0.04] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[18%] top-[55%] h-1.5 w-1.5 rounded-full bg-gold/8"
          animate={{ y: [0, -14, 0], opacity: [0.03, 0.09, 0.03] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute left-[55%] bottom-[20%] h-2.5 w-2.5 rounded-full bg-[#274A78]/12"
          animate={{ y: [0, -20, 0], opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        {/* Light streak */}
        <motion.div
          className="absolute top-[20%] left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/8 to-transparent"
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      </div>

      <div className="container-academic relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-14 text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.3em] text-gold/70 uppercase"
          >
            Intellectual Contributions
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-[2.75rem]"
          >
            Patents &amp; Design Innovations
          </motion.h2>

          {/* Animated divider */}
          <div className="relative mx-auto mt-5 flex items-center justify-center">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 120 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"
            />
            <motion.div
              className="absolute h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(201,168,106,0.6)]"
              animate={{ x: [-60, 60, -60] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-5 max-w-2xl text-base text-slate-300/80 md:text-lg"
          >
            A portfolio of intellectual property contributions reflecting innovation across legal education, technology and interdisciplinary research.
          </motion.p>
        </div>

        {/* Hero Innovation Card */}
        {heroItem && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -6 }}
            className="group relative mx-auto mb-8 max-w-3xl overflow-hidden rounded-2xl border border-gold/20 bg-navy-900/50 p-8 backdrop-blur-md transition-all duration-500 hover:border-gold/45 hover:shadow-[0_25px_60px_rgba(201,168,106,0.12)] md:p-10"
          >
            {/* Shine */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-[800ms] group-hover:translate-x-full" />
            {/* Glows */}
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gold/[0.05] blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gold/[0.03] blur-2xl" />
            {/* Corner accents */}
            <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-gold/35 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-gold/35 rounded-br-2xl" />

            <div className="relative z-10 flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:gap-8">
              <div className="mb-5 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.08] text-gold transition-all duration-300 group-hover:rotate-[5deg] group-hover:scale-105 md:mb-0">
                {heroItem.type === "Patent" ? (
                  <Lightbulb className="h-10 w-10" />
                ) : (
                  <PenTool className="h-10 w-10" />
                )}
              </div>

              <div className="flex-1">
                <div className="mb-3 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                  <span className="inline-flex items-center gap-1 rounded-full border border-gold/20 bg-gold/[0.06] px-3 py-1 text-xs font-semibold text-gold backdrop-blur-sm">
                    <Sparkles className="h-3 w-3" />
                    Featured Innovation
                  </span>
                  <span className="rounded-full border border-gold/15 bg-gold/[0.04] px-2.5 py-0.5 text-xs font-medium text-gold/80">
                    {heroItem.type}
                  </span>
                  {heroItem.jurisdiction && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-slate-600/30 bg-slate-800/40 px-2.5 py-0.5 text-xs text-slate-300">
                      <Globe className="h-3 w-3" />
                      {heroItem.jurisdiction}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl font-medium text-white md:text-2xl">
                  {heroItem.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400">
                  {heroItem.applicationOrDesignNumber}
                </p>
                <p className="mt-1 text-sm text-gold/70">
                  Granted: {heroItem.publicationOrGrantDate}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {otherItems.map((item, index) => {
            const isPatent = item.type === "Patent";
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.08, ease: "easeOut" }}
              >
                <Academic3DCard>
                  <div className="group relative overflow-hidden rounded-xl border border-gold/[0.12] bg-navy-900/40 p-6 backdrop-blur-md transition-all duration-500 hover:border-gold/35 hover:shadow-[0_15px_40px_rgba(201,168,106,0.1)]">
                    {/* Shine */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gold/[0.03] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="mb-4 flex items-center justify-between">
                        <CardIcon>
                          <div
                            className={cn(
                              "flex h-10 w-10 items-center justify-center rounded-lg border bg-navy-800/60 transition-all duration-300 group-hover:rotate-[8deg] group-hover:scale-110",
                              isPatent
                                ? "border-gold/20 text-gold/70 group-hover:text-gold"
                                : "border-blue-400/20 text-blue-400/70 group-hover:text-blue-400"
                            )}
                          >
                            {isPatent ? (
                              <Lightbulb className="h-5 w-5" />
                            ) : (
                              <PenTool className="h-5 w-5" />
                            )}
                          </div>
                        </CardIcon>
                        <CardBadge>
                          <div className="flex gap-2">
                            <span
                              className={cn(
                                "rounded-full border px-2.5 py-0.5 text-xs font-medium",
                                isPatent
                                  ? "border-gold/20 bg-gold/[0.06] text-gold/80"
                                  : "border-blue-400/20 bg-blue-400/[0.06] text-blue-300/80"
                              )}
                            >
                              {item.type}
                            </span>
                            {item.jurisdiction && (
                              <span className="inline-flex items-center gap-1 rounded-full border border-slate-600/20 bg-slate-800/30 px-2.5 py-0.5 text-xs text-slate-400">
                                <Globe className="h-2.5 w-2.5" />
                                {item.jurisdiction}
                              </span>
                            )}
                          </div>
                        </CardBadge>
                      </div>

                      <CardTitle>
                        <h4 className="text-base font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-gold/90 md:text-lg">
                          {item.title}
                        </h4>
                      </CardTitle>

                      <CardContent>
                        <p className="mt-3 text-xs text-slate-400">
                          {item.applicationOrDesignNumber}
                        </p>
                        <p className="mt-1 text-xs text-gold/60">
                          {isPatent ? "Published" : "Granted"}: {item.publicationOrGrantDate}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </Academic3DCard>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <Button asChild variant="secondary" className="btn-glow group gap-2">
            <Link href="/about/areas-of-expertise">
              View Complete IPR Portfolio
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
