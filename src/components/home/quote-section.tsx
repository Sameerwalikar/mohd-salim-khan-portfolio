"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

export function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-navy-900 py-20 md:py-28 lg:py-32"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/40 via-navy-900 to-[#050c17]" />
        {/* Spotlight glow behind quote */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.05)_0%,transparent_65%)] blur-[80px]" />
        {/* Ambient light beams */}
        <motion.div
          className="absolute left-[22%] top-0 h-full w-px bg-gradient-to-b from-gold/[0.05] via-transparent to-transparent"
          animate={{ opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[28%] top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/[0.04] to-transparent"
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        {/* Floating particles */}
        <motion.div
          className="absolute left-[30%] top-[20%] h-1.5 w-1.5 rounded-full bg-gold/8"
          animate={{ y: [0, -12, 0], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[32%] bottom-[28%] h-2 w-2 rounded-full bg-gold/6"
          animate={{ y: [0, -10, 0], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      </div>

      <motion.div
        style={{ y: parallaxY }}
        className="container-academic relative z-10 px-4 text-center md:px-6"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-[0.3em] text-gold/70 uppercase"
        >
          Scholarly Philosophy
        </motion.p>

        {/* Animated divider */}
        <div className="relative mx-auto mt-4 flex items-center justify-center">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </div>

        {/* Large Quotation Mark — Opening */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <span
            className="font-serif text-7xl leading-none text-gold/20 md:text-8xl"
            aria-hidden="true"
          >
            &ldquo;
          </span>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto -mt-8 max-w-[850px] font-serif text-[1.5rem] leading-relaxed text-white/90 md:text-[1.75rem] md:leading-relaxed lg:text-[2rem] lg:leading-[1.6]"
        >
          {profile.headline}
        </motion.blockquote>

        {/* Closing quotation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4"
        >
          <span
            className="font-serif text-7xl leading-none text-gold/20 md:text-8xl"
            aria-hidden="true"
          >
            &rdquo;
          </span>
        </motion.div>

        {/* Signature & Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6"
        >
          <div className="mx-auto h-px w-12 bg-gold/25" />
          <p className="mt-5 text-base font-medium text-gold/80 md:text-lg">
            — {profile.shortName}
          </p>
          <p className="mt-1.5 text-xs tracking-wider text-slate-400/80">
            Legal Scholar &bull; Researcher &bull; Author &bull; Patent Holder
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-10"
        >
          <Button asChild variant="secondary" className="btn-glow group gap-2">
            <Link href="/about/mission-vision">
              Explore Academic Vision
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
