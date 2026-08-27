import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { MissionVisionPageContent } from "@/components/about/mission-vision-page-content";
import { canonicalUrl, buildOpenGraph, buildTwitterCard, DEFAULT_OG_IMAGE } from "@/lib/seo";

const title = "Mission & Vision | Dr. Mohammed Salim B. Khan";
const description =
  "Explore the guiding principles of Dr. Mohammed Salim B. Khan — a mission to advance legal scholarship and a vision to bridge academic research with professional practice in constitutional, IP, and human rights law.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["legal education mission", "academic vision law", "legal scholarship values", "Dr. Mohammed Salim Khan mission"],
  alternates: { canonical: canonicalUrl("/about/mission-vision") },
  openGraph: buildOpenGraph({ title, description, url: canonicalUrl("/about/mission-vision"), image: DEFAULT_OG_IMAGE }),
  twitter: buildTwitterCard({ title, description, image: DEFAULT_OG_IMAGE }),
};

export default function MissionVisionPage() {
  return (
    <PageTransition>
      <MissionVisionPageContent />
    </PageTransition>
  );
}
