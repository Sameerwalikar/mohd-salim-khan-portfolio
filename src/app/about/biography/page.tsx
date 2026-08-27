import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { BiographyPageContent } from "@/components/about/biography-page-content";
import { canonicalUrl, buildOpenGraph, buildTwitterCard, DEFAULT_OG_IMAGE } from "@/lib/seo";

const title = "Biography | Dr. Mohammed Salim B. Khan";
const description =
  "The complete scholarly biography of Dr. Mohammed Salim B. Khan — 25+ years spanning legal practice, corporate leadership, higher education, research, and intellectual property. Legal scholar, author, mediator, and academic leader.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["Dr. Mohammed Salim B. Khan biography", "legal scholar", "law professor career", "academic journey law"],
  alternates: { canonical: canonicalUrl("/about/biography") },
  openGraph: buildOpenGraph({ title, description, url: canonicalUrl("/about/biography"), image: DEFAULT_OG_IMAGE }),
  twitter: buildTwitterCard({ title, description, image: DEFAULT_OG_IMAGE }),
};

export default function BiographyPage() {
  return (
    <PageTransition>
      <BiographyPageContent />
    </PageTransition>
  );
}
