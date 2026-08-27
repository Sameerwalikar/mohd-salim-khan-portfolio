import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { AcademicJourneyContent } from "@/components/academic-journey/academic-journey-content";
import { canonicalUrl, buildOpenGraph, buildTwitterCard, DEFAULT_OG_IMAGE } from "@/lib/seo";

const title = "Academic Journey | Dr. Mohammed Salim B. Khan";
const description =
  "A chronological account of Dr. Mohammed Salim B. Khan's academic journey — from early education and law practice to teaching, research, publishing, and institutional leadership across three decades.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["academic career timeline", "law professor journey", "legal education career India", "Dr. Mohammed Salim Khan timeline"],
  alternates: { canonical: canonicalUrl("/academic-journey") },
  openGraph: buildOpenGraph({ title, description, url: canonicalUrl("/academic-journey"), image: DEFAULT_OG_IMAGE }),
  twitter: buildTwitterCard({ title, description, image: DEFAULT_OG_IMAGE }),
};

export default function AcademicJourneyPage() {
  return (
    <PageTransition>
      <AcademicJourneyContent />
    </PageTransition>
  );
}
