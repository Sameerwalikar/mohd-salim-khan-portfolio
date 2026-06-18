"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/shared/fade-up";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.5]);

  return (
    <section className="relative min-h-screen overflow-hidden hero-library-bg pt-28 pb-20 md:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/faculty-portrait.png')] bg-cover bg-center opacity-[0.07] blur-sm" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-navy-800/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="container-academic relative grid items-center gap-12 px-4 md:px-6 lg:grid-cols-[1fr_auto] lg:gap-8 xl:gap-16">
        <motion.div style={{ y, opacity }} className="max-w-2xl">
        

          <FadeUp delay={0.1}>
            <h1 className="font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
              {profile.name}
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="mt-4 text-lg font-medium text-gold md:text-xl">
              {profile.currentPosition.title}
            </p>
            <p className="mt-1 text-base text-muted">
              {profile.currentPosition.institution}, {profile.currentPosition.university}
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
              {profile.executiveSummary.split(".")[0]}.
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {profile.roles.map((role) => (
                <Badge key={role} variant="outline" className="border-gold/25 px-4 py-1.5 text-sm text-foreground/90 hover:bg-gold/10 hover:text-gold transition-colors duration-300">
                  {role}
                </Badge>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="mt-8 max-w-xl font-serif text-xl italic leading-relaxed text-gold/90 md:text-2xl">
              &ldquo;{profile.headline}&rdquo;
            </p>
          </FadeUp>

          <FadeUp delay={0.35}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="secondary" className="btn-glow">
                <Link href="/about">
                  Explore Legacy
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-gold/25 px-4 py-1.5 text-sm text-foreground/90 hover:bg-gold/10 hover:text-gold transition-colors duration-300">
                <Link href="/academic-journey">Academic Journey</Link>
              </Button>
            </div>
          </FadeUp>
        </motion.div>

        <FadeUp delay={0.2} className="flex justify-center lg:justify-end">
          <div className="image-zoom relative">
            <div className="absolute -inset-3 rounded-sm border border-gold/20 md:-inset-4" />
            <div className="absolute -right-2 -top-2 h-full w-full rounded-sm border border-gold/10 md:-right-3 md:-top-3" />
            <div className="relative aspect-[3/4] w-[280px] overflow-hidden rounded-sm shadow-[var(--card-shadow-hover)] md:w-[340px] lg:w-[380px] xl:w-[420px]">
              <Image
                src={profile.portrait}
                alt={profile.name}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 border-t border-gold/20 bg-navy-900/80 px-6 py-4 backdrop-blur-sm">
                <p className="text-center text-xs tracking-[0.25em] text-gold uppercase">
                LEGAL SCHOLAR • RESEARCHER • AUTHOR
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
