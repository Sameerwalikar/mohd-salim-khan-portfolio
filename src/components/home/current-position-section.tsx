"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  MapPin,
  Calendar,
  Users,
  BookOpen,
  Handshake,
} from "lucide-react";
import { profile } from "@/data/profile";

const leadershipRoles = [
  {
    icon: Users,
    title: "Coordinator Sports Committee",
    description: "Overseeing sports activities and inter-university coordination",
  },
  {
    icon: BookOpen,
    title: "Coordinator UG Dissertation",
    description: "Guiding undergraduate research and academic writing",
  },
  {
    icon: Handshake,
    title: "Co-Coordinator Internship & Placement",
    description: "Facilitating industry connections and career development",
  },
];

export function CurrentPositionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { currentPosition } = profile;

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-navy-800"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-[#0d1a2e] to-navy-800" />
        <div className="absolute left-[20%] top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.05)_0%,transparent_70%)] blur-[80px]" />
        <motion.div
          className="absolute right-[15%] top-[30%] h-2 w-2 rounded-full bg-gold/10"
          animate={{ y: [0, -15, 0], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[40%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-gold/8"
          animate={{ y: [0, -20, 0], opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        {/* Accent lines */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      </div>

      <div className="container-academic relative z-10 px-4 md:px-6">
        {/* Section Header — Premium */}
        <div className="mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="inline-block h-px w-10 bg-gold/50" />
            <span className="text-xs font-medium tracking-[0.3em] text-gold/70 uppercase">
              Current Appointment
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-serif text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-[2.75rem]"
          >
            Current Position
          </motion.h2>

          {/* Animated divider */}
          <div className="relative mt-5 flex items-center">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 100 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="h-px bg-gradient-to-r from-gold via-gold/60 to-transparent"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 max-w-lg text-base text-slate-300/80"
          >
            Currently contributing to legal education, research and academic leadership.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 xl:gap-16">
          {/* Left — Appointment Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-gold/[0.15] bg-navy-900/50 p-8 backdrop-blur-md transition-all duration-500 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(201,168,106,0.1)] md:p-10"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transition-transform duration-[800ms] group-hover:translate-x-full" />

            {/* Decorative glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/[0.04] blur-3xl" />

            {/* Corner accents */}
            <div className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-gold/25 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-gold/25 rounded-br-2xl" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold/80 transition-all duration-300 group-hover:text-gold group-hover:rotate-[5deg] group-hover:scale-105">
                <Building2 className="h-7 w-7" />
              </div>

              {/* Title — primary focus */}
              <h3 className="font-serif text-2xl font-medium text-white md:text-3xl">
                {currentPosition.title}
              </h3>

              {/* Institution — secondary */}
              <div className="mt-4 space-y-1.5">
                <p className="text-base font-medium text-slate-200">
                  {currentPosition.institution}
                </p>
                <p className="text-sm text-slate-400">
                  {currentPosition.university}
                </p>
              </div>

              {/* Metadata */}
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/[0.05] px-3 py-1.5 text-xs font-medium text-gold/90 backdrop-blur-sm">
                  <MapPin className="h-3 w-3" />
                  {currentPosition.location}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/[0.05] px-3 py-1.5 text-xs font-medium text-gold/90 backdrop-blur-sm">
                  <Calendar className="h-3 w-3" />
                  {currentPosition.period}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — Leadership Roles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="space-y-4"
          >
            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold tracking-wide text-gold/80 uppercase">
              <span className="inline-block h-px w-6 bg-gold/40" />
              Leadership Roles
            </h3>

            {leadershipRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-xl border border-gold/[0.12] bg-navy-900/40 p-5 backdrop-blur-sm transition-all duration-400 hover:border-gold/30 hover:bg-navy-900/60 hover:shadow-[0_10px_30px_rgba(201,168,106,0.08)]"
                >
                  {/* Shine */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <div className="relative z-10 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/15 bg-gold/[0.05] text-gold/70 transition-all duration-300 group-hover:rotate-[8deg] group-hover:scale-110 group-hover:text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white transition-colors duration-300 group-hover:text-gold/90">
                        {role.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
