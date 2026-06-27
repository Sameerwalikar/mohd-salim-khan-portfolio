"use client";

import { careerMilestones, academicJourneyOrder, type CareerMilestone } from "@/data/career";
import { FadeUp } from "@/components/shared/fade-up";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StickyYearNav } from "./sticky-year-nav";
import { Building2, Briefcase, Scale, ChevronRight } from "lucide-react";
import { AboutPageHeroBackground } from "@/components/about/about-page-hero-background";
import Link from "next/link";
import { motion } from "framer-motion";

const milestones = academicJourneyOrder
  .map((id) => careerMilestones.find((m) => m.id === id)!)
  .filter(Boolean);

const institutionLabels: Record<string, string> = {
  "presidency-university": "Presidency University",
  "parul-university": "Parul University",
  "independent-practice-2021": "Legal Practice",
  "kle-college": "KLE College of Law",
  "independent-practice-2014": "Legal Practice",
  "reliance-securities": "Reliance Securities",
  "speciality-restaurants": "Speciality Restaurants",
  "samrat-trading": "Samrat Trading",
};

function InstitutionCard({ milestone, index }: { milestone: CareerMilestone; index: number }) {
  const Icon =
    milestone.type === "academic"
      ? Building2
      : milestone.type === "practice"
        ? Scale
        : Briefcase;

  const shortLabel = institutionLabels[milestone.id] ?? milestone.organization;

  return (
    <FadeUp delay={index * 0.04}>
      <div
        id={`institution-${milestone.id}`}
        className="premium-card scroll-mt-28 overflow-hidden rounded-2xl"
      >
        <div className="h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <Accordion type="single" collapsible defaultValue={index === 0 ? milestone.id : undefined}>
          <AccordionItem value={milestone.id} className="border-none">
            <AccordionTrigger className="px-6 py-6 hover:no-underline md:px-8 md:py-7">
              <div className="flex w-full flex-wrap items-start justify-between gap-4 pr-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wider text-gold uppercase">
                      {shortLabel}
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-semibold text-foreground md:text-2xl">
                      {milestone.organization}
                    </h3>
                    <p className="mt-1 text-base font-medium text-gold/90">{milestone.role}</p>
                    <p className="mt-1 text-sm text-muted">{milestone.period}</p>
                  </div>
                </div>
                <Badge variant="secondary">{milestone.year}</Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-8 md:px-8">
              <div className="grid gap-8 border-t border-gold/10 pt-6 md:grid-cols-2">
                <DetailBlock title="Responsibilities" items={milestone.responsibilities} />
                <DetailBlock title="Achievements" items={milestone.achievements} />
                <DetailBlock title="Leadership Roles" items={milestone.notableCredits} />
                <DetailBlock title="Major Contributions" items={milestone.contributions} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </FadeUp>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h4 className="mb-3 text-xs font-semibold tracking-[0.15em] text-gold uppercase">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AcademicJourneyContent() {
  const groupedByYear = milestones.reduce(
    (acc, m) => {
      if (!acc[m.year]) acc[m.year] = [];
      acc[m.year].push(m);
      return acc;
    },
    {} as Record<string, CareerMilestone[]>
  );

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));
  let cardIndex = 0;

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-900 pt-32 pb-16 md:pt-36 md:pb-20">
        <AboutPageHeroBackground />
        <div className="container-academic relative z-10 px-4 md:px-6">
          <FadeUp>
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-slate-400">
              <Link href="/" className="transition-colors hover:text-gold">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <span className="text-gold/80">Career Journey</span>
            </nav>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/60 uppercase">
              Institutional Archive
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
              Career Journey
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300/80 md:text-lg">
              A comprehensive chronicle of professional assignments across academia, legal practice and corporate administration
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

      {/* Content */}
      <section className="section-padding bg-navy-900">
        <div className="container-academic px-4 md:px-6">
          <div className="flex gap-12">
            <StickyYearNav />

            <div className="min-w-0 flex-1 space-y-16">
              {sortedYears.map((year) => (
                <div key={year} id={`year-${year}`} className="scroll-mt-28">
                  <div className="mb-8 flex items-center gap-4">
                    <h3 className="font-serif text-3xl font-medium text-gold">{year}</h3>
                    <div className="h-px flex-1 bg-gold/15" />
                  </div>

                  <div className="space-y-6">
                    {groupedByYear[year].map((milestone) => (
                      <InstitutionCard
                        key={milestone.id}
                        milestone={milestone}
                        index={cardIndex++}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
