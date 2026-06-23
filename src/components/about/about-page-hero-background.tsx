"use client";

import { AcademicStarsBackground, AcademicShootingStars } from "@/components/ui/academic-stars";

/**
 * Reusable hero background for all About subpages.
 * Renders gold stars + subtle shooting stars behind the hero region only.
 */
export function AboutPageHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-[#091422] to-navy-900" />
      <AcademicStarsBackground starDensity={0.00012} />
      <AcademicShootingStars minDelay={6000} maxDelay={11000} />
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.04)_0%,transparent_70%)] blur-[100px]" />
      {/* Text readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-transparent to-navy-900/60" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
    </div>
  );
}
