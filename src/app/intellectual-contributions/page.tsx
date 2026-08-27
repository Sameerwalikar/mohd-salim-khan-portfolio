import { PageTransition } from "@/components/layout/page-transition";
import { ContributionsPageContent } from "@/components/intellectual-contributions/contributions-page-content";
import type { Metadata } from "next";
import { Suspense } from "react";
import { canonicalUrl, buildOpenGraph, buildTwitterCard, DEFAULT_OG_IMAGE } from "@/lib/seo";

const title = "Intellectual Contributions | Dr. Mohammed Salim B. Khan";
const description =
  "Books authored and edited, patents published, design registrations, editorial board memberships, and curriculum innovations by Dr. Mohammed Salim B. Khan — a prolific legal author and IPR innovator.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["law books India", "legal author", "patent holder India", "IPR innovations", "Dr. Mohammed Salim Khan books"],
  alternates: { canonical: canonicalUrl("/intellectual-contributions") },
  openGraph: buildOpenGraph({ title, description, url: canonicalUrl("/intellectual-contributions"), image: DEFAULT_OG_IMAGE }),
  twitter: buildTwitterCard({ title, description, image: DEFAULT_OG_IMAGE }),
};

export default function IntellectualContributionsPage() {
  return (
    <PageTransition>
      <Suspense fallback={<div className="min-h-screen bg-navy-900" />}>
        <ContributionsPageContent />
      </Suspense>
    </PageTransition>
  );
}
//hello
