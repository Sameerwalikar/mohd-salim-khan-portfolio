import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { AreasOfExpertisePageContent } from "@/components/about/areas-of-expertise-page-content";
import { canonicalUrl, buildOpenGraph, buildTwitterCard, DEFAULT_OG_IMAGE } from "@/lib/seo";

const title = "Areas of Expertise | Dr. Mohammed Salim B. Khan";
const description =
  "Dr. Mohammed Salim B. Khan's deep research and teaching expertise spans Constitutional Law, Intellectual Property Rights, Sports Law, Human Rights, Cyber Law, Animal Law, Mediation, and Arbitration.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["constitutional law", "intellectual property rights", "sports law", "human rights law", "cyber law India", "legal expertise law professor"],
  alternates: { canonical: canonicalUrl("/about/areas-of-expertise") },
  openGraph: buildOpenGraph({ title, description, url: canonicalUrl("/about/areas-of-expertise"), image: DEFAULT_OG_IMAGE }),
  twitter: buildTwitterCard({ title, description, image: DEFAULT_OG_IMAGE }),
};

export default function AreasOfExpertisePage() {
  return (
    <PageTransition>
      <AreasOfExpertisePageContent />
    </PageTransition>
  );
}
