"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";
import { featuredAwards } from "@/data/awards";
import { Academic3DCard, CardIcon, CardBadge, CardTitle, CardContent } from "@/components/ui/academic-3d-card";
import { cn } from "@/lib/utils";

export function FeaturedAchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Separate hero award (first/most recent) from the rest
  const heroAward = featuredAwards[0];
  const otherAwards = featuredAwards.slice(1);

  return (
    <section
      id="featured-achievements"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-navy-900"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-[#091422] to-navy-900" />
        {/* Gold orb behind hero card */}
        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.05)_0%,transparent_70%)] blur-[100px]" />
        {/* Particles */}
        <motion.div
          className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-gold/10"
          animate={{ y: [0, -20, 0], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[20%] top-[60%] h-1.5 w-1.5 rounded-full bg-[#274A78]/15"
          animate={{ y: [0, -15, 0], opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute right-[35%] bottom-[15%] h-2.5 w-2.5 rounded-full bg-gold/8"
          animate={{ y: [0, -18, 0], opacity: [0.03, 0.09, 0.03] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        {/* Accent lines */}
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
            Recognition &amp; Honours
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-[2.75rem]"
          >
            Featured Achievements
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
            className="mx-auto mt-5 max-w-xl text-base text-slate-300/80 md:text-lg"
          >
            National and international honours recognizing excellence in teaching, authorship and intellectual property research.
          </motion.p>
        </div>

        {/* Hero Achievement Card */}
        {heroAward && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -6 }}
            className="group relative mx-auto mb-8 max-w-3xl overflow-hidden rounded-2xl border border-gold/25 bg-navy-800/50 p-8 backdrop-blur-md transition-all duration-500 hover:border-gold/50 hover:shadow-[0_25px_60px_rgba(201,168,106,0.15)] md:p-10"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-[800ms] group-hover:translate-x-full" />

            {/* Decorative glows */}
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gold/[0.06] blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gold/[0.04] blur-2xl" />

            {/* Corner accents */}
            <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-gold/40 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-gold/40 rounded-br-2xl" />

            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] via-transparent to-gold/[0.02]"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:gap-8">
              {/* Trophy icon */}
              <div className="mb-5 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.08] text-gold transition-all duration-300 group-hover:rotate-[5deg] group-hover:scale-105 md:mb-0">
                <Trophy className="h-10 w-10" />
              </div>

              <div>
                <p className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/[0.06] px-3 py-1 text-xs font-semibold text-gold backdrop-blur-sm">
                  <Star className="h-3 w-3" />
                  {heroAward.year}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-medium text-white md:text-3xl">
                  {heroAward.title}
                </h3>
                <p className="mt-3 text-base font-medium text-slate-200">
                  {heroAward.organization}
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  {heroAward.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary Awards — Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {otherAwards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.55 + index * 0.1,
                ease: "easeOut",
              }}
              className={cn(
                index === 0 && "lg:col-span-2"
              )}
            >
              <Academic3DCard>
                <div
                  className={cn(
                    "group relative overflow-hidden rounded-xl border border-gold/[0.12] bg-navy-800/40 p-6 backdrop-blur-md transition-all duration-500",
                    "hover:border-gold/40 hover:shadow-[0_15px_40px_rgba(201,168,106,0.1)]"
                  )}
                >
                  {/* Shine */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  {/* Subtle glow */}
                  <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gold/[0.04] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-4 flex items-center justify-between">
                      <CardIcon>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/15 bg-gold/[0.05] text-gold/70 transition-all duration-300 group-hover:rotate-[8deg] group-hover:scale-110 group-hover:text-gold">
                          <Award className="h-5 w-5" />
                        </div>
                      </CardIcon>
                      <CardBadge>
                        <span className="rounded-full border border-gold/15 bg-gold/[0.05] px-2.5 py-0.5 text-xs font-semibold text-gold/80">
                          {award.year}
                        </span>
                      </CardBadge>
                    </div>

                    <CardTitle>
                      <h4 className="text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-gold/90">
                        {award.title}
                      </h4>
                    </CardTitle>

                    <CardContent>
                      <p className="mt-2.5 text-sm font-medium text-slate-300/80">
                        {award.organization}
                      </p>
                      <p className="mt-2 text-xs text-slate-400">
                        {award.description}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Academic3DCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
