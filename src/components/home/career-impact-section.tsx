"use client";

import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  FileText,
  BookOpen,
  Library,
  Lightbulb,
  PenTool,
  Presentation,
  Trophy,
} from "lucide-react";
import { careerImpact } from "@/data/profile";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { cn } from "@/lib/utils";

// Map icons to each stat by index
const statIcons = [
  GraduationCap, // Years Experience
  FileText,      // Research Papers
  BookOpen,      // Book Chapters
  Library,       // Books Published
  Lightbulb,     // Patents Published
  PenTool,       // Design Registrations
  Presentation,  // Conferences & FDPs
  Trophy,        // Awards & Recognition
];

// Particle generation — stable across renders
function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    duration: 6 + Math.random() * 6,
    delay: Math.random() * 4,
    opacity: 0.05 + Math.random() * 0.1,
    color: Math.random() > 0.6 ? "#274A78" : "#C9A86A",
  }));
}

export function CareerImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const particles = useMemo(() => generateParticles(24), []);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-navy-900"
    >
      {/* ═══ LAYER 1: Deep navy gradient base ═══ */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-900 via-[#0a1628] to-navy-900" />

      {/* ═══ LAYER 2: Floating particles ═══ */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              opacity: 0,
            }}
            animate={{
              y: [0, -30, 10, -20, 0],
              x: [0, 10, -10, 5, 0],
              opacity: [0, p.opacity, p.opacity, p.opacity, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ═══ LAYER 3: Spotlight beams ═══ */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-20 -left-20 h-[500px] w-[300px] rounded-full bg-gold/[0.04] blur-[120px]"
          animate={{ x: [0, 40, 0], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[400px] rounded-full bg-gold/[0.03] blur-[150px]"
          animate={{ y: [0, -20, 0], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute -top-10 -right-20 h-[400px] w-[250px] rounded-full bg-blue-400/[0.03] blur-[120px]"
          animate={{ x: [0, -30, 0], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      {/* ═══ LAYER 4: Gold orbs behind featured cards ═══ */}
      <div className="pointer-events-none absolute inset-0">
        {/* Behind Years Experience card — top-left area */}
        <div className="absolute left-[10%] top-[35%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.1)_0%,transparent_70%)] blur-[100px]" />
        {/* Behind Awards card — bottom-right area */}
        <div className="absolute right-[10%] bottom-[20%] h-[250px] w-[250px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.08)_0%,transparent_70%)] blur-[100px]" />
      </div>

      {/* ═══ LAYER 5: Academic accent lines ═══ */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-[20%] left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/10 to-transparent"
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/8 to-transparent"
          animate={{ opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      {/* ═══ CONTENT ═══ */}
      <div className="container-academic relative z-10 px-4 md:px-6">
        {/* ─── Header ─── */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.3em] text-gold/70 uppercase"
          >
            Scholarly Impact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white md:text-5xl"
          >
            Career Impact
          </motion.h2>

          {/* Animated Divider */}
          <div className="relative mx-auto mt-5 flex items-center justify-center">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 120 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"
            />
            {/* Traveling dot */}
            <motion.div
              className="absolute h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(201,168,106,0.6)]"
              animate={{ x: [-60, 60, -60] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 text-base leading-relaxed text-slate-300/80 md:text-lg"
          >
            A distinguished record of legal scholarship, research excellence, intellectual
            property innovation and academic leadership.
          </motion.p>
        </div>

        {/* ─── Bento Grid ─── */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-4 md:grid-rows-[auto_auto_auto] lg:gap-5">
          {careerImpact.map((stat, index) => {
            const Icon = statIcons[index] ?? GraduationCap;
            const isFeatured = index === 0;
            const isLarge = index === 7; // Awards card

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-gold/[0.15] bg-navy-800/40 p-6 backdrop-blur-md transition-all duration-500",
                  "hover:border-gold/50 hover:shadow-[0_20px_60px_rgba(201,168,106,0.15)]",
                  isFeatured && "md:col-span-2 md:row-span-2 p-8 lg:p-10",
                  isLarge && "md:col-span-2"
                )}
              >
                {/* Card shine effect on hover */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-[800ms] group-hover:translate-x-full" />

                {/* Decorative glow for featured */}
                {isFeatured && (
                  <>
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/[0.06] blur-3xl" />
                    <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-gold/[0.04] blur-2xl" />
                    {/* Corner accent */}
                    <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-gold/30 rounded-tl-2xl" />
                    <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-gold/30 rounded-br-2xl" />
                    {/* Animated subtle gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] via-transparent to-gold/[0.02]"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </>
                )}

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={cn(
                      "mb-4 inline-flex items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold/80 transition-all duration-300 group-hover:rotate-[8deg] group-hover:scale-[1.08] group-hover:text-gold",
                      isFeatured ? "h-14 w-14" : "h-11 w-11"
                    )}
                  >
                    <Icon className={cn(isFeatured ? "h-7 w-7" : "h-5 w-5")} />
                  </motion.div>

                  {/* Number */}
                  <motion.p
                    className={cn(
                      "font-serif font-bold leading-none",
                      "bg-gradient-to-br from-gold via-[#e0c97d] to-gold/80 bg-clip-text text-transparent",
                      "drop-shadow-[0_0_12px_rgba(201,168,106,0.2)]",
                      isFeatured
                        ? "text-6xl md:text-7xl lg:text-8xl"
                        : "text-4xl md:text-5xl"
                    )}
                    whileInView={{ scale: [0.95, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  >
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </motion.p>

                  {/* Label */}
                  <p
                    className={cn(
                      "mt-3 font-medium uppercase tracking-wider text-slate-300/90",
                      isFeatured ? "text-sm md:text-base" : "text-xs md:text-sm"
                    )}
                  >
                    {stat.label}
                  </p>

                  {/* Featured description */}
                  {isFeatured && (
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400 md:text-base">
                      More than two decades of contributions across legal education, academic
                      leadership, research, publications, intellectual property and
                      institutional development.
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
