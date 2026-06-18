"use client";

import { useEffect, useState } from "react";
import { careerMilestones, academicJourneyOrder } from "@/data/career";
import { cn } from "@/lib/utils";

const milestones = academicJourneyOrder
  .map((id) => careerMilestones.find((m) => m.id === id)!)
  .filter(Boolean);

const years = [...new Set(milestones.map((m) => m.year))].sort(
  (a, b) => Number(b) - Number(a)
);

export function StickyYearNav() {
  const [activeYear, setActiveYear] = useState(years[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    years.forEach((year) => {
      const el = document.getElementById(`year-${year}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveYear(year);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToYear = (year: string) => {
    const el = document.getElementById(`year-${year}`);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-28 hidden h-fit w-48 shrink-0 lg:block">
      <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
        Timeline
      </p>
      <ul className="space-y-1 border-l border-gold/15">
        {years.map((year) => (
          <li key={year}>
            <button
              onClick={() => scrollToYear(year)}
              className={cn(
                "block w-full border-l-2 py-2 pl-4 text-left text-sm transition-colors",
                activeYear === year
                  ? "border-gold font-semibold text-gold"
                  : "border-transparent text-muted hover:border-gold/40 hover:text-foreground"
              )}
            >
              {year}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
