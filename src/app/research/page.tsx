import { PageTransition } from "@/components/layout/page-transition";
import { ResearchPageContent } from "@/components/research/research-page-content";
import type { Metadata } from "next";
import { canonicalUrl, buildOpenGraph, buildTwitterCard, DEFAULT_OG_IMAGE } from "@/lib/seo";

const title = "Research & Scholarship | Dr. Mohammed Salim B. Khan";
const description =
  "Explore the scholarly contributions of Dr. Mohammed Salim B. Khan — 16+ peer-reviewed research papers, 9 book chapters, 6 published patents, 2 registered designs, spanning IPR, sports law, constitutional law, and cyber law.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["legal research India", "IPR research papers", "sports law publications", "constitutional law scholarship", "Dr. Mohammed Salim Khan publications"],
  alternates: { canonical: canonicalUrl("/research") },
  openGraph: buildOpenGraph({ title, description, url: canonicalUrl("/research"), image: DEFAULT_OG_IMAGE }),
  twitter: buildTwitterCard({ title, description, image: DEFAULT_OG_IMAGE }),
};

export default function ResearchPage() {
  return (
    <PageTransition>
      <ResearchPageContent />
    </PageTransition>
  );
}
