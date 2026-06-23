"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  FileText,
  Library,
  Lightbulb,
  Trophy,
} from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { cn } from "@/lib/utils";

const milestones = [
  { icon: GraduationCap, value: "25+", label: "Years Experience" },
  { icon: FileText, value: "16+", label: "Research Papers" },
  { icon: Library, value: "7+", label: "Books Published" },
  { icon: Lightbulb, value: "6+", label: "Patents" },
  { icon: Trophy, value: "20+", label: "Awards" },
];

const biographySections = [
  {
    title: "Introduction",
    content:
      "A distinguished legal academician, researcher, author, mediator and administrator with over 25 years of professional experience spanning legal practice, higher education, corporate leadership and institutional administration.",
  },
  {
    title: "Research Contributions",
    content:
      "16 published research papers in national and international journals, 9 book chapters in edited volumes, and scholarly contributions spanning Constitutional Law, Sports Law, Intellectual Property Rights, Human Rights, Cyber Law and Legal Education.",
  },
  {
    title: "Intellectual Property & Innovation",
    content:
      "7 books edited and published, 6 patents published, and 2 designs granted internationally. A Gold Medalist in M.Phil (Law) and Ph.D. holder with doctoral research focused on Intellectual Property Rights in the Indian Sports Sector.",
  },
  {
    title: "Academic Leadership",
    content:
      "Served as In-Charge Principal, coordinated multiple academic centres, organised national and international conferences, and mentored the next generation of legal professionals across three leading institutions.",
  },
];

export function AboutPreviewSection() {
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-navy-900"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-[#0b1729] to-navy-900" />
        {/* Radial gold glow behind portrait area */}
        <div className="absolute left-[15%] top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.06)_0%,transparent_70%)] blur-[80px]" />
        {/* Subtle particles */}
        <motion.div
          className="absolute left-[10%] top-[30%] h-2 w-2 rounded-full bg-gold/10"
          animate={{ y: [0, -20, 0], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[25%] top-[60%] h-1.5 w-1.5 rounded-full bg-gold/8"
          animate={{ y: [0, -15, 0], opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute right-[20%] top-[25%] h-2.5 w-2.5 rounded-full bg-[#274A78]/15"
          animate={{ y: [0, -25, 0], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        {/* Decorative gold accent lines */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-academic relative z-10 px-4 md:px-6">
        {/* Header */}
        <div className="mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="inline-block h-px w-10 bg-gold/50" />
            <span className="text-xs font-medium tracking-[0.3em] text-gold/70 uppercase">
              Personal Introduction
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 max-w-xl text-base text-slate-300/80 md:text-lg"
          >
            A Life Dedicated to Legal Education, Research and Academic Leadership
          </motion.p>
        </div>

        {/* Split Layout: Portrait + Biography */}
        <div className="grid items-start gap-12 lg:grid-cols-[45%_1fr] lg:gap-16 xl:gap-20">
          {/* Left — Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:sticky lg:top-32"
          >
            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-2xl bg-gold/[0.03] blur-2xl" />

            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-xl border border-gold/15 md:-inset-4" />
            {/* Corner accents */}
            <div className="absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-gold/40 md:-left-4 md:-top-4 md:h-7 md:w-7" />
            <div className="absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-gold/40 md:-bottom-4 md:-right-4 md:h-7 md:w-7" />

            {/* Image container */}
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-xl border border-gold/20 shadow-[0_25px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(201,168,106,0.06)]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={profile.portrait}
                alt={profile.name}
                fill
                className={cn(
                  "object-cover object-top transition-transform duration-700",
                  isHovered && "scale-105"
                )}
                sizes="(max-width: 1024px) 100vw, 450px"
              />

              {/* Default bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />

              {/* Gold border glow on hover */}
              <div
                className={cn(
                  "absolute inset-0 rounded-xl border-2 transition-all duration-500",
                  isHovered
                    ? "border-gold/40 shadow-[inset_0_0_30px_rgba(201,168,106,0.08)]"
                    : "border-transparent"
                )}
              />

              {/* Progressive Blur Overlay */}
              <ProgressiveBlur visible={isHovered}>
                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-medium text-white md:text-xl">
                    Prof. Dr. Mohammed Salim B. Khan
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Legal Scholar",
                      "Researcher",
                      "Author",
                      "Patent Holder",
                      "Academic Leader",
                    ].map((role) => (
                      <span
                        key={role}
                        className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/[0.08] px-3 py-1 text-xs font-medium text-gold backdrop-blur-sm"
                      >
                        <span className="text-gold/60">◆</span>
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </ProgressiveBlur>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 z-30 rounded-lg border border-gold/20 bg-navy-900/90 px-4 py-2.5 shadow-lg backdrop-blur-md md:-bottom-7 md:-right-6"
            >
              <p className="text-xs font-semibold text-gold">Ph.D. in Law</p>
              <p className="text-[10px] text-slate-400">Gold Medalist · M.Phil</p>
            </motion.div>
          </motion.div>

          {/* Right — Biography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Biography sections — storytelling format */}
            <div className="space-y-8">
              {biographySections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.12 }}
                  className="group"
                >
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-white">
                    <span className="inline-block h-1 w-1 rounded-full bg-gold/60" />
                    {section.title}
                  </h3>
                  <p className="pl-3 text-base leading-relaxed text-slate-300/85 md:text-[17px]">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-10"
            >
              <Button asChild variant="secondary" className="btn-glow group gap-2">
                <Link href="/about">
                  Read Full Biography
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Milestone Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:gap-5"
        >
          {milestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1.1 + index * 0.08 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="group relative overflow-hidden rounded-xl border border-gold/[0.15] bg-navy-800/40 p-5 backdrop-blur-md transition-all duration-400 hover:border-gold/40 hover:shadow-[0_15px_40px_rgba(201,168,106,0.12)]"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <Icon className="mb-3 h-5 w-5 text-gold/70 transition-all duration-300 group-hover:rotate-[8deg] group-hover:scale-110 group-hover:text-gold" />
                <p className="text-2xl font-bold leading-none text-white md:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-400">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
