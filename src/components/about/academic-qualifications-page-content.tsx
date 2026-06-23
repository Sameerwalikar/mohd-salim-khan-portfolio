"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, GraduationCap } from "lucide-react";
import { PinContainer } from "@/components/ui/3d-pin";
import { AboutPageHeroBackground } from "@/components/about/about-page-hero-background";
import { FadeUp } from "@/components/shared/fade-up";

const qualifications = [
  {
    degree: "Ph.D. in Law",
    institution: "Shri JJT University, Rajasthan",
    year: "2024",
    distinction: "A Critical Study on Prospects of Intellectual Property Rights with Special Reference to Indian Sports Sector",
  },
  {
    degree: "M.A. (Rural Development)",
    institution: "K.B.P. Hinduja College, Affiliated to Mumbai University",
    year: "2024",
    distinction: "",
  },
  {
    degree: "M.Phil (Law)",
    institution: "Parul Institute of Law, Parul University, Vadodara",
    year: "2021",
    distinction: "Gold Medalist | CGPA 8.73",
  },
  {
    degree: "M.B.A. (Project Management)",
    institution: "Jaipur National University, Jaipur",
    year: "2018",
    distinction: "First Class",
  },
  {
    degree: "Ph.D. (Honoris Causa) Peace Education",
    institution: "United Nations World Peace University, Washington, U.S.A.",
    year: "",
    distinction: "Honorary Doctorate",
  },
  {
    degree: "P.G.D.A.T. (Post Graduate Diploma in Ambedkar Thoughts)",
    institution: "Mumbai University",
    year: "2016",
    distinction: "First Class",
  },
  {
    degree: "L.L.M.",
    institution: "Amity Law School, Amity University, Mumbai",
    year: "2016",
    distinction: "CGPA 6.8",
  },
  {
    degree: "L.L.B.",
    institution: "Government Law College, Churchgate, Mumbai University",
    year: "2006",
    distinction: "Second Class",
  },
  {
    degree: "D.B.M. (Diploma in Business Management)",
    institution: "Prin. L. N. Welingkar Institute, Mumbai",
    year: "2000",
    distinction: "First Class",
  },
  {
    degree: "B.A. in History & Sociology",
    institution: "ICLES Motilal Jhunjhunwala College, Vashi, Mumbai University",
    year: "2000",
    distinction: "First Class",
  },
  {
    degree: "H.S.C.",
    institution: "N. G. Acharya and D. K. Marathe College, Mumbai Board",
    year: "1994",
    distinction: "",
  },
  {
    degree: "S.S.C.",
    institution: "D. K. Marathe English School, Mumbai Board",
    year: "1992",
    distinction: "",
  },
];

export function AcademicQualificationsPageContent() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 pt-32 pb-16 md:pt-36 md:pb-20">
        <AboutPageHeroBackground />

        <div className="container-academic relative z-10 px-4 md:px-6">
          <FadeUp>
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-slate-400">
              <Link href="/" className="transition-colors hover:text-gold">Home</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <Link href="/about" className="transition-colors hover:text-gold">About</Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <span className="text-gold/80">Academic Qualifications</span>
            </nav>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/60 uppercase">Academic Journey</p>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
              Academic Qualifications
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-300/80 md:text-lg">
              A comprehensive academic journey spanning three decades of continuous learning
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

      {/* Qualifications — Single Column, Bigger Cards, Right-Side Pin */}
      <section className="section-padding bg-navy-900">
        <div className="container-academic px-4 md:px-6">
          <div className="mx-auto flex max-w-3xl flex-col gap-12">
            {qualifications.map((qual, index) => (
              <motion.div
                key={qual.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <PinContainer title={qual.year || "Awarded"} pinPosition="right">
                  <div className="flex min-h-[180px] w-full min-w-[320px] flex-col justify-between rounded-xl border border-gold/[0.12] bg-navy-800/60 p-8 backdrop-blur-sm sm:min-w-[500px] md:min-w-[600px] lg:min-w-[680px]">
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <GraduationCap className="h-5 w-5 text-gold/70" />
                        {qual.distinction && (
                          <span className="rounded-full border border-gold/20 bg-gold/[0.06] px-3 py-1 text-xs font-medium text-gold">
                            {qual.distinction}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">
                        {qual.degree}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                        {qual.institution}
                      </p>
                    </div>
                    {qual.year && (
                      <p className="mt-5 text-sm font-medium text-gold/60">{qual.year}</p>
                    )}
                  </div>
                </PinContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
