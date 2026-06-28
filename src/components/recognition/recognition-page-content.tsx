"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Search,
  Trophy,
  Star,
  Users,
  Scale,
  HelpCircle,
  Gavel,
  Volume2,
  MapPin
} from "lucide-react";

import { awards } from "@/data/awards";
import {
  professionalMemberships,
  certifiedRoles,
  eventsJudged,
  pressFeatures
} from "@/data/publications";

import { FadeUp } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { AboutPageHeroBackground } from "@/components/about/about-page-hero-background";

interface DebateHonor {
  id: string;
  title: string;
  year: string;
  details: string;
  location?: string;
}

const earlyDebateHonors: DebateHonor[] = [
  {
    id: "debate-miami-2000",
    title: "2nd Place",
    year: "Oct 2000",
    details: "International Students Debating Association",
    location: "Miami, USA"
  },
  {
    id: "debate-seoul-1999",
    title: "Consolation Prize (4th Place)",
    year: "Oct 1999",
    details: "International Students Debating Association",
    location: "Seoul, Korea"
  },
  {
    id: "debate-icl-rank",
    title: "First Rank",
    year: "2000",
    details: "FYBA & SYBA, ICL College"
  },
  {
    id: "debate-mumbai-merit",
    title: "Certificate of Merit",
    year: "2000-2001",
    details: "University of Mumbai, for outstanding performance"
  },
  {
    id: "debate-nss-volunteer",
    title: "Best NSS Volunteer of the College",
    year: "2000-2001",
    details: "ICES Motilal Jhunjhunwala College (ICL College), Vashi"
  }
];

type TabType = "all" | "awards" | "debate" | "memberships" | "certifications" | "judging" | "media";

export function RecognitionPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Derived state: get the active tab directly from URL search params
  const tabParam = searchParams.get("tab") as TabType;
  const activeTab: TabType = [
    "all",
    "awards",
    "debate",
    "memberships",
    "certifications",
    "judging",
    "media"
  ].includes(tabParam)
    ? tabParam
    : "all";

  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#honours" || (activeTab && activeTab !== "all")) {
      const element = document.getElementById("honours");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [activeTab]);

  const handleTabChange = (tab: TabType) => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", tab);
    router.push(`/recognition?${params.toString()}`, { scroll: false });
  };

  // Filter logic helper
  const matchesSearch = (text: string) =>
    text.toLowerCase().includes(searchQuery.toLowerCase());

  // Aggregate item type matching
  const getFilteredItems = () => {
    const items: Array<{
      id: string;
      title: string;
      category: TabType;
      year: string;
      element: React.ReactNode;
    }> = [];

    // 1. Major Awards
    if (activeTab === "all" || activeTab === "awards") {
      awards.forEach((a) => {
        if (matchesSearch(a.title) || matchesSearch(a.organization) || matchesSearch(a.description)) {
          items.push({
            id: a.id,
            title: a.title,
            category: "awards",
            year: a.year,
            element: (
              <div className="academic-card relative flex h-full flex-col justify-between rounded-xl p-6">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      Trophy
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {a.year}
                    </span>
                  </div>

                  <div className="flex gap-4">
                    {/* Circular Icon Container: Navy fill, thin border, gold icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                      <Trophy className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-medium text-white group-hover:text-gold transition-colors leading-snug">
                        <span className="card-title-underline">{a.title}</span>
                      </h4>
                      <p className="mt-1 text-sm text-slate-300">
                        {a.organization}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-slate-400">
                    {a.description}
                  </p>
                </div>
                <div className="mt-auto pt-3 border-t border-gold/10 min-h-[44px] flex items-center justify-between text-xs text-slate-400">
                  <span>Award &amp; Honour</span>
                </div>
              </div>
            )
          });
        }
      });
    }

    // 2. Early Debate & Academic Honors
    if (activeTab === "all" || activeTab === "debate") {
      earlyDebateHonors.forEach((d) => {
        if (matchesSearch(d.title) || matchesSearch(d.details) || (d.location && matchesSearch(d.location))) {
          items.push({
            id: d.id,
            title: d.title,
            category: "debate",
            year: d.year,
            element: (
              <div className="academic-card relative flex h-full flex-col justify-between rounded-xl p-6">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      Debate Honor
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {d.year}
                    </span>
                  </div>

                  <div className="flex gap-4">
                    {/* Circular Icon Container */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                      <Star className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-white transition-colors leading-snug">
                        <span className="card-title-underline">{d.title}</span>
                      </h4>
                      <p className="mt-1 text-sm text-slate-300 leading-relaxed font-serif">
                        {d.details}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-3 border-t border-gold/10 min-h-[44px] flex items-center justify-between text-xs text-slate-400">
                  {d.location ? (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-gold/60" />
                      {d.location}
                    </span>
                  ) : (
                    <span>Academic Merit</span>
                  )}
                </div>
              </div>
            )
          });
        }
      });
    }

    // 3. Professional Memberships
    if (activeTab === "all" || activeTab === "memberships") {
      professionalMemberships.forEach((m) => {
        if (matchesSearch(m.name) || (m.details && matchesSearch(m.details))) {
          items.push({
            id: m.id,
            title: m.name,
            category: "memberships",
            year: "",
            element: (
              <div className="academic-card relative flex h-full flex-col justify-between rounded-xl p-6">
                <div>
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      Association
                    </span>
                  </div>

                  <div className="flex gap-4">
                    {/* Circular Icon Container */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-white transition-colors leading-snug">
                        <span className="card-title-underline">{m.name}</span>
                      </h4>
                      {m.details && (
                        <p className="mt-2 text-xs text-slate-400 font-serif">
                          {m.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-3 border-t border-gold/10 min-h-[44px] flex items-center justify-between text-xs text-slate-400">
                  <span>Life / Professional Member</span>
                </div>
              </div>
            )
          });
        }
      });
    }

    // 4. Certified ADR Roles
    if (activeTab === "all" || activeTab === "certifications") {
      certifiedRoles.forEach((cr) => {
        if (matchesSearch(cr.role) || matchesSearch(cr.details)) {
          items.push({
            id: cr.id,
            title: cr.role,
            category: "certifications",
            year: "",
            element: (
              <div className="academic-card relative flex h-full flex-col justify-between rounded-xl p-6">
                <div>
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      Certification
                    </span>
                  </div>

                  <div className="flex gap-4">
                    {/* Circular Icon Container */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                      <Scale className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-medium text-white transition-colors">
                        <span className="card-title-underline">{cr.role}</span>
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {cr.details}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-3 border-t border-gold/10 min-h-[44px] flex items-center justify-between text-xs text-slate-400">
                  <span>Certified ADR Professional</span>
                </div>
              </div>
            )
          });
        }
      });
    }

    // 5. Events Judged / Keynote Addresses
    if (activeTab === "all" || activeTab === "judging") {
      eventsJudged.forEach((ej) => {
        if (matchesSearch(ej.event) || matchesSearch(ej.role) || matchesSearch(ej.organizer)) {
          items.push({
            id: ej.id,
            title: ej.event,
            category: "judging",
            year: ej.date,
            element: (
              <div className="academic-card relative flex h-full flex-col justify-between rounded-xl p-6">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      Academic Judging
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {ej.date}
                    </span>
                  </div>

                  <div className="flex gap-4">
                    {/* Circular Icon Container */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                      <Gavel className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-white leading-relaxed">
                        <span className="card-title-underline">{ej.event}</span>
                      </h4>
                      <p className="mt-2 text-sm text-slate-300">
                        Role: <span className="text-gold font-medium">{ej.role}</span>
                      </p>
                      <p className="mt-0.5 text-xs text-slate-400">
                        Organizer: {ej.organizer}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-3 border-t border-gold/10 min-h-[44px] flex items-center justify-between text-xs text-slate-400">
                  <span>Academic Evaluation</span>
                </div>
              </div>
            )
          });
        }
      });
    }

    // 6. Media mentions
    if (activeTab === "all" || activeTab === "media") {
      pressFeatures.forEach((pf) => {
        if (matchesSearch(pf.title) || matchesSearch(pf.outlet)) {
          items.push({
            id: pf.id,
            title: pf.title,
            category: "media",
            year: pf.date,
            element: (
              <div className="academic-card relative flex h-full flex-col justify-between rounded-xl p-6">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      Press Mention
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {pf.date}
                    </span>
                  </div>

                  <div className="flex gap-4">
                    {/* Circular Icon Container */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                      <Volume2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-white leading-relaxed italic">
                        &ldquo;<span className="card-title-underline">{pf.title}</span>&rdquo;
                      </h4>
                      <p className="mt-2 text-sm text-slate-300">
                        Outlet: <span className="text-slate-200 font-medium font-serif">{pf.outlet}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-3 border-t border-gold/10 min-h-[44px] flex items-center justify-between text-xs text-slate-400">
                  <span>Press Mention &amp; Features</span>
                </div>
              </div>
            )
          });
        }
      });
    }

    // Sort items chronologically (awards & debate have years, sort them descending; empty ones go to end)
    return items.sort((a, b) => {
      if (!a.year && !b.year) return 0;
      if (!a.year) return 1;
      if (!b.year) return -1;
      
      const yearA = a.year.match(/\d{4}/);
      const yearB = b.year.match(/\d{4}/);
      const numA = yearA ? parseInt(yearA[0]) : 0;
      const numB = yearB ? parseInt(yearB[0]) : 0;
      
      if (numA !== numB) return numB - numA;
      return a.title.localeCompare(b.title);
    });
  };

  const filteredItems = getFilteredItems();

  return (
    <div ref={sectionRef}>
      {/* ══════ SECTION 1: PAGE HERO ══════ */}
      <section className="relative overflow-hidden bg-navy-900 pt-32  md:pt-36 ">
        <AboutPageHeroBackground />

        <div className="container-academic relative z-10 px-4 md:px-6">
          {/* Breadcrumb */}
          <FadeUp>
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-1.5 text-sm text-slate-400"
            >
              <Link href="/" className="transition-colors hover:text-gold">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <span className="text-gold/80">Honours &amp; Recognition</span>
            </nav>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/70 uppercase">
              Academic Honours
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
              Recognition
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300/80 md:text-lg">
              National and international awards, professional life memberships, certified training milestones, and media coverage celebrating a distinguished career.
            </p>
            <div className="mt-5 h-px w-16 bg-gradient-to-r from-gold/60 to-transparent" />
          </FadeUp>
        </div>
      </section>

      {/* ══════ SECTION 2: INTERACTIVE RECOGNITION HUB ══════ */}
      <section id="honours" className="section-padding bg-navy-900 relative scroll-mt-28">
        <div className="container-academic px-4 md:px-6">
         

          {/* Search and Filters Strip */}
          <div className="mt-8 flex flex-col items-stretch justify-between gap-4 border-b border-gold/10 pb-6 md:flex-row md:items-center">
            {/* Search Input */}
            <div className="relative max-w-md flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <Search className="h-4 w-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search awards, orgs, debater titles..."
                className="w-full rounded-lg border border-gold/15 bg-navy-800 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-400 outline-none transition-colors focus:border-gold"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total count */}
            <div className="text-sm text-slate-400">
              Showing <span className="text-gold font-bold">{filteredItems.length}</span> recognitions
            </div>
          </div>

          {/* Navigation tabs for categories */}
          <div className="mt-6 flex flex-wrap gap-2 border-b border-gold/5 pb-4">
            {(
              [
                { id: "all", label: "All Items" },
                { id: "awards", label: "Major Awards" },
                { id: "debate", label: "Debate & Academic" },
                { id: "memberships", label: "Memberships" },
                { id: "certifications", label: "Certifications" },
                { id: "judging", label: "Judging & Talks" },
                { id: "media", label: "Media" }
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`rounded-lg px-4 py-2 text-xs font-semibold tracking-wide transition-all uppercase ${
                  activeTab === tab.id
                    ? "bg-gold text-navy-900 shadow-[0_4px_16px_rgba(201,168,106,0.25)]"
                    : "border border-gold/20 bg-navy-700 text-slate-300 hover:border-gold/40 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic publications grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    type: "tween",
                    ease: "easeOut",
                    duration: 0.3,
                    delay: index * 0.05,
                    layout: { type: "spring", stiffness: 300, damping: 30 }
                  }}
                >
                  {item.element}
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredItems.length === 0 && (
              <div className="col-span-full py-16 text-center text-slate-400">
                <HelpCircle className="mx-auto h-12 w-12 text-slate-500 opacity-60" />
                <h3 className="mt-4 text-base font-semibold text-white">No results found</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Try adjusting your search criteria or switching filter tabs.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
