"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Search,
  Award,
  Trophy,
  FileText,
  Lightbulb,
  Scale,
  Users,
  Shield,
  Cpu,
  FileCheck,
  Calendar,
  Layers,
  MapPin,
  HelpCircle
} from "lucide-react";

import {
  journalPapers,
  conferencePresentations,
  workshops
} from "@/data/publications";

import { FadeUp } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { AboutPageHeroBackground } from "@/components/about/about-page-hero-background";

// Specialty areas with their mapped icons & descriptions
const specialties = [
  {
    area: "Intellectual Property Rights",
    detail: "Focus on Patents, Design Grants, and Sports IP laws.",
    icon: Lightbulb
  },
  {
    area: "Constitutional Law",
    detail: "Scholarly research into constitutional structures and amendments.",
    icon: Scale
  },
  {
    area: "Human Rights Law",
    detail: "Advocating for rights of marginalized groups and transgender persons.",
    icon: Users
  },
  {
    area: "Cyber Law & Digital Governance",
    detail: "Exploring cybersecurity legal frameworks and digital banking safety.",
    icon: Shield
  },
  {
    area: "Artificial Intelligence and Law",
    detail: "Legal liability, algorithmic accountability, and AI-generated moral rights.",
    icon: Cpu
  },
  {
    area: "Sports Law, Policy & Governance",
    detail: "Investigating the regulatory and commercial landscapes of Indian sports.",
    icon: Trophy
  },
  {
    area: "Animal Law",
    detail: "Legal issues, ethical standards, and global perspectives in animal welfare.",
    icon: Award
  },
  {
    area: "Criminal Law Reform",
    detail: "Modernizing Indian legal codes including IPC, Cr.PC, and Evidence Act.",
    icon: FileCheck
  }
];

type TabType = "all" | "journals" | "conferences" | "workshops";

export function ResearchPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Derived state: get the active tab directly from URL search params
  const tabParam = searchParams.get("tab") as TabType;
  const activeTab: TabType = ["all", "journals", "conferences", "workshops"].includes(tabParam)
    ? tabParam
    : "all";

  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#publications" || (activeTab && activeTab !== "all")) {
      const element = document.getElementById("publications");
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
    router.push(`/research?${params.toString()}`, { scroll: false });
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

    // 1. Journal Papers
    if (activeTab === "all" || activeTab === "journals") {
      journalPapers.forEach((j) => {
        if (
          matchesSearch(j.title) ||
          matchesSearch(j.journal) ||
          (j.issn && matchesSearch(j.issn))
        ) {
          const matchYear = j.date.match(/\d{4}/);
          const year = matchYear ? matchYear[0] : "";
          items.push({
            id: j.id,
            title: j.title,
            category: "journals",
            year,
            element: (
              <div className="premium-card relative flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_12px_32px_rgba(201,168,106,0.06)]">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                      <FileText className="h-3.5 w-3.5" />
                      Journal Article
                    </span>
                    <span className="rounded-full border border-gold/15 bg-gold/[0.04] px-2.5 py-0.5 text-xs font-semibold text-gold/80">
                      {year || j.date}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-white group-hover:text-gold transition-colors leading-snug">
                    {j.title}
                  </h4>
                  <p className="mt-3 text-sm text-slate-300 font-serif">
                    Journal: <span className="text-slate-200 font-medium">{j.journal}</span>
                  </p>
                  {(j.volume || j.issue) && (
                    <p className="mt-1.5 text-xs text-slate-400">
                      {j.volume && `Vol. ${j.volume}`}
                      {j.volume && j.issue && ", "}
                      {j.issue && `Issue ${j.issue}`}
                    </p>
                  )}
                </div>
                <div className="mt-5 border-t border-gold/10 pt-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    {j.issn && (
                      <span className="font-mono text-xs text-slate-400">{j.issn}</span>
                    )}
                    <div className="flex items-center gap-2">
                      {j.ugcListed && (
                        <span className="rounded-sm border border-amber-500/20 bg-amber-500/[0.06] px-1.5 py-0.2 text-[10px] font-bold text-amber-400 uppercase tracking-wide">
                          UGC CARE II
                        </span>
                      )}
                      {j.sjif && (
                        <span className="rounded-sm border border-slate-600/30 bg-slate-800/40 px-1.5 py-0.2 text-[10px] text-slate-300">
                          {j.sjif}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          });
        }
      });
    }

    // 2. Conferences & Seminars (Paper presentations)
    if (activeTab === "all" || activeTab === "conferences") {
      conferencePresentations.forEach((cp) => {
        if (
          matchesSearch(cp.title) ||
          matchesSearch(cp.event) ||
          matchesSearch(cp.organizer) ||
          (cp.publication && matchesSearch(cp.publication))
        ) {
          const matchYear = cp.date.match(/\d{4}/);
          const year = matchYear ? matchYear[0] : "";
          items.push({
            id: cp.id,
            title: cp.title,
            category: "conferences",
            year,
            element: (
              <div className="premium-card relative flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_12px_32px_rgba(201,168,106,0.06)]">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-2.5 py-0.5 text-xs font-semibold text-violet-300">
                      <Trophy className="h-3.5 w-3.5" />
                      Paper Presentation
                    </span>
                    <span className="rounded-full border border-gold/15 bg-gold/[0.04] px-2.5 py-0.5 text-xs font-semibold text-gold/80">
                      {year || cp.date}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-semibold text-white transition-colors group-hover:text-gold leading-relaxed">
                    &ldquo;{cp.title}&rdquo;
                  </h4>
                  <p className="mt-3 text-xs font-medium text-gold/70 uppercase tracking-wider">
                    Presented at:
                  </p>
                  <p className="mt-1 text-sm text-slate-300 leading-relaxed font-serif">
                    {cp.event}
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Organizer: <span className="text-slate-300">{cp.organizer}</span>
                  </p>
                </div>
                <div className="mt-5 border-t border-gold/10 pt-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                    <Calendar className="h-3.5 w-3.5" />
                    {cp.date}
                  </span>
                  {cp.publication && (
                    <span className="rounded-full border border-slate-700 bg-slate-800/40 px-2 py-0.5 text-[10px] text-slate-300">
                      Pub: {cp.publication}
                    </span>
                  )}
                </div>
              </div>
            )
          });
        }
      });
    }

    // 3. Workshops & FDPs Attended
    if (activeTab === "all" || activeTab === "workshops") {
      workshops.forEach((w) => {
        if (matchesSearch(w.title) || matchesSearch(w.organizer)) {
          const matchYear = w.date.match(/\d{4}/);
          const year = matchYear ? matchYear[0] : "";
          items.push({
            id: w.id,
            title: w.title,
            category: "workshops",
            year,
            element: (
              <div className="premium-card relative flex h-full flex-col justify-between rounded-xl p-5 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_12px_32px_rgba(201,168,106,0.06)]">
                <div>
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-slate-600/30 bg-slate-800/40 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300">
                      <Layers className="h-3 w-3" />
                      Workshop / FDP
                    </span>
                    <span className="rounded-full border border-gold/15 bg-gold/[0.04] px-2.5 py-0.5 text-[10px] font-semibold text-gold/80">
                      {year || w.date}
                    </span>
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-white leading-relaxed">
                    {w.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-400">
                    Organizer: <span className="text-slate-300">{w.organizer}</span>
                  </p>
                </div>
                <div className="mt-4 border-t border-gold/10 pt-2 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {w.date}
                  </span>
                  {w.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-gold/60" />
                      {w.location}
                    </span>
                  )}
                </div>
              </div>
            )
          });
        }
      });
    }

    // Sort items by year descending
    return items.sort((a, b) => {
      const yearA = parseInt(a.year) || 0;
      const yearB = parseInt(b.year) || 0;
      if (yearA !== yearB) return yearB - yearA;
      return a.title.localeCompare(b.title);
    });
  };

  const filteredItems = getFilteredItems();

  return (
    <div ref={sectionRef}>
      {/* ══════ SECTION 1: PAGE HERO ══════ */}
      <section className="relative overflow-hidden bg-navy-900 pt-32 pb-16 md:pt-36 md:pb-20">
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
              <span className="text-gold/80">Research &amp; Scholarship</span>
            </nav>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/70 uppercase">
              Academic Credibility
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
              Research &amp; Scholarship
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300/80 md:text-lg">
              Explore the legal scholarship, peer-reviewed articles, and academic conference research of Prof. Dr. M.S.B. Khan.
            </p>
            <div className="mt-5 h-px w-16 bg-gradient-to-r from-gold/60 to-transparent" />
          </FadeUp>
        </div>
      </section>

      {/* ══════ SECTION 2: SPECIALIZATION AREAS STRIP ══════ */}
      <section className="section-padding bg-navy-900 py-12 md:py-16 border-b border-gold/10">
        <div className="container-academic px-4 md:px-6">
          <FadeUp>
            <p className="text-center text-xs font-medium tracking-[0.25em] text-gold uppercase">
              Areas of Specialization
            </p>
            <h2 className="mt-2 text-center font-serif text-2xl font-medium text-white md:text-3xl">
              Core Legal Research Fields
            </h2>
          </FadeUp>

          {/* Highlight Strip */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeUp key={item.area} delay={index * 0.05}>
                  <div className="group premium-card flex h-full items-start gap-4 rounded-xl p-5 transition-all duration-300 hover:border-gold/35 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.4)]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/15 bg-navy-900 text-gold transition-colors group-hover:bg-gold group-hover:text-navy-900">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-white transition-colors group-hover:text-gold font-medium">
                        {item.area}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-400">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ SECTION 3: DOCTORAL & RESEARCH THESIS ══════ */}
      <section className="section-padding bg-navy-800 relative">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-[#0a182d] to-navy-800" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        </div>

        <div className="container-academic relative z-10 px-4 md:px-6">
          <SectionHeader
            eyebrow="Academic Milestones"
            title="Doctoral &amp; Research Thesis"
            description="Foundational research defining expertise in intellectual property rights, legal design parameters, and sports law."
            className="[&_div]:bg-gold"
          />

          <div className="grid gap-6 md:grid-cols-2">
            {/* Ph.D. Thesis */}
            <FadeUp>
              <div className="group premium-card relative rounded-2xl p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 right-0 -mr-2 -mt-2 h-16 w-16 overflow-hidden rounded-bl-3xl bg-gold/10 text-gold opacity-10 transition-opacity group-hover:opacity-20">
                  <Trophy className="absolute bottom-3 left-3 h-8 w-8" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      Awarded 2024
                    </span>
                    <h3 className="mt-1 font-serif text-xl font-bold text-white md:text-2xl">
                      Ph.D. in Law
                    </h3>
                  </div>
                </div>
                <p className="mt-6 text-xs font-semibold tracking-[0.1em] text-gold uppercase">
                  Thesis Title
                </p>
                <p className="mt-2 font-serif text-lg italic leading-relaxed text-white">
                  &ldquo;A Critical Study on Prospects of Intellectual Property Rights with Special Reference to Indian Sports Sector&rdquo;
                </p>
                <div className="mt-6 border-t border-gold/10 pt-4 text-sm text-slate-400">
                  <p>
                    Institution: <span className="text-slate-300 font-semibold">Shri JJT University, Rajasthan</span>
                  </p>
                  <p className="mt-1">
                    Specialization: <span className="text-slate-300">Intellectual Property Rights &amp; Sports Law</span>
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* M.Phil Thesis */}
            <FadeUp delay={0.1}>
              <div className="group premium-card relative rounded-2xl p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 right-0 -mr-2 -mt-2 h-16 w-16 overflow-hidden rounded-bl-3xl bg-gold/10 text-gold opacity-10 transition-opacity group-hover:opacity-20">
                  <Award className="absolute bottom-3 left-3 h-8 w-8" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      Gold Medallist
                    </span>
                    <h3 className="mt-1 font-serif text-xl font-bold text-white md:text-2xl">
                      M.Phil (Law)
                    </h3>
                  </div>
                </div>
                <p className="mt-6 text-xs font-semibold tracking-[0.1em] text-gold uppercase">
                  Academic Merit
                </p>
                <p className="mt-2 font-serif text-lg leading-relaxed text-slate-300">
                  Graduated with a CGPA of <span className="text-white font-bold">8.73</span> and awarded the prestigious <span className="text-gold font-bold">Gold Medal</span> for academic excellence.
                </p>
                <div className="mt-11 border-t border-gold/10 pt-4 text-sm text-slate-400">
                  <p>
                    Institution: <span className="text-slate-300 font-semibold">Parul Institute of Law, Parul University, Vadodara</span>
                  </p>
                  <p className="mt-1">
                    Graduation Date: <span className="text-slate-300">May 2021</span>
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════ SECTION 4: INTERACTIVE SCHOLARSHIP HUB ══════ */}
      <section id="publications" className="section-padding bg-navy-900 relative scroll-mt-28">
        <div className="container-academic px-4 md:px-6">
          <SectionHeader
            eyebrow="Intellectual Contributions"
            title="Scholarly Archive"
            description="Access the peer-reviewed journal papers, academic conference presentations, and faculty development workshops."
            className="[&_div]:bg-gold"
          />

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
                placeholder="Search by paper title, journal, venue..."
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
              Showing <span className="text-gold font-bold">{filteredItems.length}</span> research items
            </div>
          </div>

          {/* Navigation tabs for categories */}
          <div className="mt-6 flex flex-wrap gap-2 border-b border-gold/5 pb-4">
            {(
              [
                { id: "all", label: "All Scholarly Work" },
                { id: "journals", label: "Journal Papers" },
                { id: "conferences", label: "Conferences" },
                { id: "workshops", label: "Workshops / FDPs" }
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`rounded-lg px-4 py-2 text-xs font-semibold tracking-wide transition-all uppercase ${
                  activeTab === tab.id
                    ? "bg-gold text-navy-900 shadow-[0_4px_16px_rgba(201,168,106,0.25)]"
                    : "border border-gold/10 bg-navy-800 text-slate-400 hover:border-gold/20 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic publications grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
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
