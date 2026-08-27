import { PageTransition } from "@/components/layout/page-transition";
import { RecognitionPageContent } from "@/components/recognition/recognition-page-content";
import type { Metadata } from "next";
import { Suspense } from "react";
import { canonicalUrl, buildOpenGraph, buildTwitterCard, DEFAULT_OG_IMAGE } from "@/lib/seo";

const title = "Honours & Recognition | Dr. Mohammed Salim B. Khan";
const description =
  "20+ national and international awards, professional life memberships, editorial roles, and debate honours received by Dr. Mohammed Salim B. Khan — including Best Faculty, Best Author, and IPR excellence awards.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["law faculty awards India", "best professor award", "IPR excellence award", "academic recognition legal scholar"],
  alternates: { canonical: canonicalUrl("/recognition") },
  openGraph: buildOpenGraph({ title, description, url: canonicalUrl("/recognition"), image: DEFAULT_OG_IMAGE }),
  twitter: buildTwitterCard({ title, description, image: DEFAULT_OG_IMAGE }),
};

export default function RecognitionPage() {
  return (
    <PageTransition>
      <Suspense fallback={<div className="min-h-screen bg-navy-900" />}>
        <RecognitionPageContent />
      </Suspense>
    </PageTransition>
  );
}
