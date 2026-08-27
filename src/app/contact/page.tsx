import { PageTransition } from "@/components/layout/page-transition";
import { ContactPageContent } from "@/components/contact/contact-page-content";
import type { Metadata } from "next";
import { Suspense } from "react";
import { canonicalUrl, buildOpenGraph, buildTwitterCard, DEFAULT_OG_IMAGE } from "@/lib/seo";

const title = "Contact & Collaboration | Dr. Mohammed Salim B. Khan";
const description =
  "Contact Dr. Mohammed Salim B. Khan for academic collaborations, research partnerships, guest lectures, advisory roles, moot court judging, and institutional engagements.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["contact law professor", "academic collaboration India", "guest lecture law", "research partnership legal scholar"],
  alternates: { canonical: canonicalUrl("/contact") },
  openGraph: buildOpenGraph({ title, description, url: canonicalUrl("/contact"), image: DEFAULT_OG_IMAGE }),
  twitter: buildTwitterCard({ title, description, image: DEFAULT_OG_IMAGE }),
};

export default function ContactPage() {
  return (
    <PageTransition>
      <Suspense fallback={<div className="min-h-screen bg-navy-900" />}>
        <ContactPageContent />
      </Suspense>
    </PageTransition>
  );
}
