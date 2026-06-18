"use client";

import { qualifications } from "@/data/qualifications";
import { FadeUp } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { motion } from "framer-motion";
import { GraduationCap, Medal } from "lucide-react";
import { cn } from "@/lib/utils";

const highlightedIds = new Set(["mphil", "phd", "honorary-phd"]);

export function QualificationsTimeline() {
  return (
    <section id="qualifications" className="section-padding bg-navy-800">
      <div className="container-academic px-4 md:px-6">
        <SectionHeader
          eyebrow="Academic Credentials"
          title="Qualifications Timeline"
          description="A comprehensive educational foundation spanning law, management, rural development, and peace education."
          className="[&_div]:bg-gold"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/20 md:left-1/2 md:-translate-x-px" />

          {qualifications.map((qual, index) => {
            const isHighlighted = highlightedIds.has(qual.id);

            return (
              <FadeUp key={qual.id} delay={index * 0.05}>
                <div
                  className={cn(
                    "relative mb-10 flex items-start gap-6 md:mb-12",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  <div className="hidden flex-1 md:block" />

                  <motion.div
                    className={cn(
                      "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 bg-navy-900 shadow-md",
                      isHighlighted
                        ? "border-gold bg-gold/10 shadow-[0_0_20px_rgba(201,168,106,0.2)]"
                        : "border-gold/30"
                    )}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {isHighlighted ? (
                      <Medal className="h-5 w-5 text-gold" />
                    ) : (
                      <GraduationCap className="h-5 w-5 text-gold/70" />
                    )}
                  </motion.div>

                  <div
                    className={cn(
                      "flex-1 rounded-xl border p-6 shadow-[var(--card-shadow)] transition-all duration-300 hover:shadow-[var(--card-shadow-hover)]",
                      isHighlighted
                        ? "border-gold/30 bg-navy-900/80"
                        : "border-gold/10 bg-navy-900/50",
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    )}
                  >
                    {isHighlighted && (
                      <span className="mb-2 inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-0.5 text-[10px] font-semibold tracking-wider text-gold uppercase">
                        Distinguished
                      </span>
                    )}
                    {qual.year && (
                      <p className="text-sm font-semibold text-gold">{qual.year}</p>
                    )}
                    <h3 className="mt-1 font-serif text-lg font-semibold text-foreground">
                      {qual.degree}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{qual.institution}</p>
                    {qual.distinction && (
                      <p className="mt-2 text-sm font-medium text-gold">{qual.distinction}</p>
                    )}
                    {qual.details && (
                      <p className="mt-2 text-sm italic text-muted">{qual.details}</p>
                    )}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
