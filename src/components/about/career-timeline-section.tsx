"use client";

import { careerMilestones } from "@/data/career";
import { FadeUp } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const timelineOrder = ["2025", "2021", "2016", "2014", "2008", "2006", "2000"];

export function CareerTimelineSection() {
  const orderedMilestones = timelineOrder
    .map((year) => careerMilestones.filter((m) => m.year === year))
    .flat();

  return (
    <section id="career-timeline" className="section-padding bg-navy-800">
      <div className="container-academic px-4 md:px-6">
        <SectionHeader
          eyebrow="Professional Chronology"
          title="Career Timeline"
          description="From corporate administration to independent legal practice and distinguished academic leadership."
          className="[&_div]:bg-gold"
        />

        <FadeUp>
          <Accordion type="single" collapsible className="mx-auto max-w-4xl space-y-3">
            {orderedMilestones.map((milestone) => (
              <AccordionItem
                key={milestone.id}
                value={milestone.id}
                className="premium-card overflow-hidden rounded-xl border-gold/10 px-0"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline">
                  <div className="flex flex-col gap-2 text-left sm:flex-row sm:items-center sm:gap-4">
                    <Badge variant="secondary">{milestone.year}</Badge>
                    <span className="font-serif text-lg text-foreground">
                      {milestone.organization}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-6 border-t border-gold/10 pt-4">
                    <div>
                      <p className="text-sm font-semibold text-gold">{milestone.role}</p>
                      <p className="text-sm text-muted">{milestone.period}</p>
                    </div>

                    {milestone.responsibilities.length > 0 && (
                      <TimelineBlock title="Responsibilities" items={milestone.responsibilities} />
                    )}
                    {milestone.achievements.length > 0 && (
                      <TimelineBlock title="Achievements" items={milestone.achievements} />
                    )}
                    {milestone.notableCredits.length > 0 && (
                      <TimelineBlock title="Leadership Roles" items={milestone.notableCredits} />
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
}

function TimelineBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-2 text-xs font-semibold tracking-[0.15em] text-gold uppercase">
        {title}
      </h4>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
