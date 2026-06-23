"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Search,
  Award,
  BookOpen,
  Book,
  Lightbulb,
  PenTool,
  Scale,
  Users,
  Globe,
  ExternalLink,
  HelpCircle,
  Briefcase,
  FolderHeart,
  Gavel,
  FileCheck
} from "lucide-react";

import { iprItems } from "@/data/ipr";
import {
  books,
  bookChapters,
  editorialRoles,
  professionalMemberships,
  certifiedRoles,
  eventsJudged,
  pressFeatures
} from "@/data/publications";

import { FadeUp } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";

// Course curriculum data directly from resume credits
interface CourseCurriculum {
  id: string;
  title: string;
  type: string;
  institution: string;
  details: string;
  year: string;
}

const coursesDesigned: CourseCurriculum[] = [
  {
    id: "course-const-law",
    title: "Constitutional Law and Contemporary Developments",
    type: "Certificate Course",
    institution: "Parul Institute of Law, Parul University",
    details: "Designed and conducted a specialized certification program focusing on modern developments, judicial review, and amendments.",
    year: "2021–2024"
  },
  {
    id: "course-legal-startup",
    title: "Legal Start Up",
    type: "Credit Course",
    institution: "Parul University",
    details: "Designed and conducted a unique credit course tailored for Management Students, focusing on corporate compliance, start-up regulations, and IP assets.",
    year: "2021–2024"
  }
];

type TabType = "all" | "books" | "chapters" | "ipr" | "editorial" | "curriculum" | "professional";

export function ContributionsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Derived state: get the active tab directly from URL search params
  const tabParam = searchParams.get("tab") as TabType;
  const activeTab: TabType = [
    "all",
    "books",
    "chapters",
    "ipr",
    "editorial",
    "curriculum",
    "professional"
  ].includes(tabParam)
    ? tabParam
    : "all";

  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#contributions" || (activeTab && activeTab !== "all")) {
      const element = document.getElementById("contributions");
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
    router.push(`/intellectual-contributions?${params.toString()}`, { scroll: false });
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

    // 1. Books
    if (activeTab === "all" || activeTab === "books") {
      books.forEach((b) => {
        if (
          matchesSearch(b.title) ||
          matchesSearch(b.publisher) ||
          matchesSearch(b.isbn) ||
          matchesSearch(b.role)
        ) {
          const matchYear = b.date.match(/\d{4}/);
          const year = matchYear ? matchYear[0] : "";
          items.push({
            id: b.id,
            title: b.title,
            category: "books",
            year,
            element: (
              <div className="premium-card relative flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_12px_32px_rgba(201,168,106,0.06)]">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      <Book className="h-3 w-3" />
                      Book — {b.role}
                    </span>
                    <span className="rounded-full border border-gold/15 bg-gold/[0.04] px-2.5 py-0.5 text-xs font-semibold text-gold/80">
                      {year || b.date}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-white group-hover:text-gold transition-colors leading-snug">
                    {b.title}
                  </h4>
                  {b.coEditor && (
                    <p className="mt-2 text-xs text-slate-400">
                      Co-Editor: <span className="text-slate-300 font-serif">{b.coEditor}</span>
                    </p>
                  )}
                  <p className="mt-3 text-sm text-slate-300">
                    Publisher: <span className="text-slate-200 font-medium">{b.publisher}</span>
                    {b.location && ` (${b.location})`}
                  </p>
                </div>
                <div className="mt-5 border-t border-gold/10 pt-3">
                  <p className="font-mono text-xs text-slate-400">ISBN: {b.isbn}</p>
                </div>
              </div>
            )
          });
        }
      });
    }

    // 2. Book Chapters
    if (activeTab === "all" || activeTab === "chapters") {
      bookChapters.forEach((c) => {
        if (
          matchesSearch(c.title) ||
          matchesSearch(c.bookTitle) ||
          matchesSearch(c.publisher) ||
          matchesSearch(c.isbn) ||
          (c.coAuthor && matchesSearch(c.coAuthor))
        ) {
          const matchYear = c.date.match(/\d{4}/);
          const year = matchYear ? matchYear[0] : "";
          items.push({
            id: c.id,
            title: c.title,
            category: "chapters",
            year,
            element: (
              <div className="premium-card relative flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_12px_32px_rgba(201,168,106,0.06)]">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      <BookOpen className="h-3 w-3" />
                      Book Chapter {c.chapterNo !== "Proceedings Chapter" && `(Ch. ${c.chapterNo})`}
                    </span>
                    <span className="rounded-full border border-gold/15 bg-gold/[0.04] px-2.5 py-0.5 text-xs font-semibold text-gold/80">
                      {year || c.date}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-white group-hover:text-gold transition-colors leading-snug">
                    {c.title}
                  </h4>
                  <p className="mt-3 text-sm text-slate-400">
                    From: <span className="italic text-slate-200 font-medium font-serif">{c.bookTitle}</span>
                  </p>
                  {c.coAuthor && (
                    <p className="mt-1 text-xs text-slate-400">
                      Co-Author: <span className="text-slate-300">{c.coAuthor}</span>
                    </p>
                  )}
                  <p className="mt-2 text-sm text-slate-300">
                    Publisher: <span className="text-slate-200">{c.publisher}</span>
                    {c.location && ` (${c.location})`}
                  </p>
                </div>
                <div className="mt-5 border-t border-gold/10 pt-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs text-slate-400 font-semibold">ISBN: {c.isbn}</span>
                    <div className="flex items-center gap-2">
                      {c.scopusIndexed && (
                        <span className="rounded-sm border border-emerald-500/20 bg-emerald-500/[0.06] px-1.5 py-0.2 text-[10px] font-bold text-emerald-400 uppercase tracking-wide">
                          Scopus
                        </span>
                      )}
                      {c.doi && c.doi !== "n/a" && (
                        <a
                          href={`https://doi.org/${c.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 text-xs text-gold/80 hover:text-gold"
                        >
                          DOI
                          <ExternalLink className="h-2.5 w-2.5" />
                        </a>
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

    // 3. Patents & Designs
    if (activeTab === "all" || activeTab === "ipr") {
      iprItems.forEach((ip) => {
        if (
          matchesSearch(ip.title) ||
          matchesSearch(ip.applicationOrDesignNumber) ||
          (ip.jurisdiction && matchesSearch(ip.jurisdiction))
        ) {
          const matchYear = ip.publicationOrGrantDate.match(/\d{4}/);
          const year = matchYear ? matchYear[0] : "";
          const isPatent = ip.type === "Patent";
          items.push({
            id: ip.id,
            title: ip.title,
            category: "ipr",
            year,
            element: (
              <div className="premium-card relative flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_12px_32px_rgba(201,168,106,0.06)]">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold`}
                    >
                      {isPatent ? <Lightbulb className="h-3 w-3" /> : <PenTool className="h-3 w-3" />}
                      {isPatent ? "Patent" : "Design Grant"}
                    </span>
                    <span className="rounded-full border border-gold/15 bg-gold/[0.04] px-2.5 py-0.5 text-xs font-semibold text-gold/80">
                      {year || ip.publicationOrGrantDate}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-white group-hover:text-gold transition-colors leading-snug">
                    {ip.title}
                  </h4>
                  <p className="mt-3 text-xs text-slate-400">
                    Number: <span className="font-mono text-slate-300">{ip.applicationOrDesignNumber}</span>
                  </p>
                </div>
                <div className="mt-5 border-t border-gold/10 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-300">
                      Status: <span className="text-gold font-medium">{isPatent ? "Published" : "Granted"}</span>
                    </span>
                    {ip.jurisdiction && (
                      <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                        <Globe className="h-3 w-3" />
                        {ip.jurisdiction}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          });
        }
      });
    }

    // 4. Editorial Roles
    if (activeTab === "all" || activeTab === "editorial") {
      editorialRoles.forEach((er) => {
        if (matchesSearch(er.role) || matchesSearch(er.journal)) {
          items.push({
            id: er.id,
            title: er.journal,
            category: "editorial",
            year: "",
            element: (
              <div className="premium-card relative flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_12px_32px_rgba(201,168,106,0.06)]">
                <div>
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      <FolderHeart className="h-3 w-3" />
                      Editorial Role
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-white transition-colors">
                    {er.journal}
                  </h4>
                  <p className="mt-3 text-sm text-slate-300 font-semibold">
                    Role: <span className="text-gold">{er.role}</span>
                  </p>
                  {er.location && (
                    <p className="mt-1 text-xs text-slate-400">
                      Location: <span className="text-slate-300">{er.location}</span>
                    </p>
                  )}
                </div>
                {er.issn && (
                  <div className="mt-5 border-t border-gold/10 pt-3">
                    <p className="font-mono text-xs text-slate-500">{er.issn}</p>
                  </div>
                )}
              </div>
            )
          });
        }
      });
    }

    // 5. Curriculum & ADR
    if (activeTab === "all" || activeTab === "curriculum") {
      // Courses Designed
      coursesDesigned.forEach((cd) => {
        if (matchesSearch(cd.title) || matchesSearch(cd.institution) || matchesSearch(cd.details)) {
          items.push({
            id: cd.id,
            title: cd.title,
            category: "curriculum",
            year: "",
            element: (
              <div className="premium-card relative flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_12px_32px_rgba(201,168,106,0.06)]">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      <Briefcase className="h-3 w-3" />
                      {cd.type}
                    </span>
                    <span className="rounded-full border border-gold/15 bg-gold/[0.04] px-2.5 py-0.5 text-xs font-semibold text-gold/80">
                      {cd.year}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-white group-hover:text-gold transition-colors leading-snug">
                    {cd.title}
                  </h4>
                  <p className="mt-2 text-xs text-gold/80">
                    Institution: <span className="text-slate-300 font-serif">{cd.institution}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {cd.details}
                  </p>
                </div>
                <div className="mt-5 border-t border-gold/10 pt-3 flex items-center gap-1.5 text-xs text-slate-400">
                  <FileCheck className="h-4 w-4 text-emerald-400" />
                  Course Designed &amp; Conducted
                </div>
              </div>
            )
          });
        }
      });

      // Certified ADR Roles
      certifiedRoles.forEach((cr) => {
        if (matchesSearch(cr.role) || matchesSearch(cr.details)) {
          items.push({
            id: cr.id,
            title: cr.role,
            category: "curriculum",
            year: "",
            element: (
              <div className="premium-card relative flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_12px_32px_rgba(201,168,106,0.06)]">
                <div>
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      <Scale className="h-3 w-3" />
                      ADR Credentials
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-white transition-colors">
                    {cr.role}
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {cr.details}
                  </p>
                </div>
                <div className="mt-5 border-t border-gold/10 pt-3 flex items-center gap-1.5 text-xs text-slate-400">
                  <Award className="h-4 w-4 text-gold/60" />
                  Certified Practitioner
                </div>
              </div>
            )
          });
        }
      });
    }

    // 6. Professional Engagement (Memberships, Judgings, Press)
    if (activeTab === "all" || activeTab === "professional") {
      // Events Judged
      eventsJudged.forEach((ej) => {
        if (matchesSearch(ej.event) || matchesSearch(ej.role) || matchesSearch(ej.organizer)) {
          items.push({
            id: ej.id,
            title: ej.event,
            category: "professional",
            year: "",
            element: (
              <div className="premium-card relative flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_12px_32px_rgba(201,168,106,0.06)]">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      <Gavel className="h-3 w-3" />
                      Judging
                    </span>
                    <span className="rounded-full border border-gold/15 bg-gold/[0.04] px-2.5 py-0.5 text-xs font-semibold text-gold/80">
                      {ej.date}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-semibold text-white leading-relaxed">
                    {ej.event}
                  </h4>
                  <p className="mt-3 text-sm text-slate-300">
                    Role: <span className="text-gold font-medium">{ej.role}</span>
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Organizer: <span className="text-slate-300">{ej.organizer}</span>
                  </p>
                </div>
                <div className="mt-5 border-t border-gold/10 pt-3 text-xs text-slate-400 flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  Invited Evaluator
                </div>
              </div>
            )
          });
        }
      });

      // Memberships
      professionalMemberships.forEach((m) => {
        if (matchesSearch(m.name) || (m.details && matchesSearch(m.details))) {
          items.push({
            id: m.id,
            title: m.name,
            category: "professional",
            year: "",
            element: (
              <div className="premium-card relative flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_12px_32px_rgba(201,168,106,0.06)]">
                <div>
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      <Users className="h-3 w-3" />
                      Membership
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">
                    {m.name}
                  </h4>
                  {m.details && (
                    <p className="mt-3 text-sm text-slate-400 font-serif">
                      {m.details}
                    </p>
                  )}
                </div>
                <div className="mt-5 border-t border-gold/10 pt-3 text-xs text-slate-400 flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-gold/60" />
                  Life / Professional Member
                </div>
              </div>
            )
          });
        }
      });

      // Press Features
      pressFeatures.forEach((pf) => {
        if (matchesSearch(pf.title) || matchesSearch(pf.outlet)) {
          items.push({
            id: pf.id,
            title: pf.title,
            category: "professional",
            year: "",
            element: (
              <div className="premium-card relative flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_12px_32px_rgba(201,168,106,0.06)]">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">
                      <Globe className="h-3 w-3" />
                      Featured in Press
                    </span>
                    <span className="rounded-full border border-gold/15 bg-gold/[0.04] px-2.5 py-0.5 text-xs font-semibold text-gold/80">
                      {pf.date}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-semibold text-white leading-relaxed italic">
                    &ldquo;{pf.title}&rdquo;
                  </h4>
                  <p className="mt-3 text-sm text-slate-300">
                    Outlet: <span className="text-slate-200 font-medium">{pf.outlet}</span>
                  </p>
                </div>
                <div className="mt-5 border-t border-gold/10 pt-3 text-xs text-slate-400 flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  Media Recognition
                </div>
              </div>
            )
          });
        }
      });
    }

    return items;
  };

  const filteredItems = getFilteredItems();

  return (
    <div ref={sectionRef}>
      {/* ══════ SECTION 1: PAGE HERO ══════ */}
      <section className="relative overflow-hidden bg-navy-900 pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-[#091422] to-navy-900" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.04)_0%,transparent_70%)] blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        </div>

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
              <span className="text-gold/80">Intellectual Contributions</span>
            </nav>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/70 uppercase">
              Public &amp; Professional Service
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
              Intellectual Contributions
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300/80 md:text-lg">
              Broader public and professional intellectual work: authored and edited textbooks, patent publications, design grants, editorial leadership, and credit courses.
            </p>
            <div className="mt-5 h-px w-16 bg-gradient-to-r from-gold/60 to-transparent" />
          </FadeUp>
        </div>
      </section>

      {/* ══════ SECTION 2: INTERACTIVE CONTRIBUTIONS HUB ══════ */}
      <section id="contributions" className="section-padding bg-navy-900 relative scroll-mt-28">
        <div className="container-academic px-4 md:px-6">
          <SectionHeader
            eyebrow="Portfolio of Innovations"
            title="Intellectual Outputs"
            description="Explore IPR registries, editorial leadership seats, published textbooks, and credit course curricula."
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
                placeholder="Search books, patents, designs, editors..."
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
              Showing <span className="text-gold font-bold">{filteredItems.length}</span> contributions
            </div>
          </div>

          {/* Navigation tabs for categories */}
          <div className="mt-6 flex flex-wrap gap-2 border-b border-gold/5 pb-4">
            {(
              [
                { id: "all", label: "All Items" },
                { id: "books", label: "Books & Volumes" },
                { id: "chapters", label: "Book Chapters" },
                { id: "ipr", label: "Patents & Designs" },
                { id: "editorial", label: "Editorial Boards" },
                { id: "curriculum", label: "Courses & ADR" },
                { id: "professional", label: "Engagement & Press" }
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

          {/* Dynamic contributions grid */}
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

// Re-importing simple custom check icon to replace lucide unused warn checkcircle
function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
