import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { ProfessionalProfilePageContent } from "@/components/about/professional-profile-page-content";
import { canonicalUrl, buildOpenGraph, buildTwitterCard, DEFAULT_OG_IMAGE } from "@/lib/seo";

const title = "Professional Profile | Dr. Mohammed Salim B. Khan";
const description =
  "Key professional milestones, certifications, career highlights, and administrative contributions of Dr. Mohammed Salim B. Khan — from Presidency University to Parul University and KLE College of Law.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["law professor career", "academic milestones", "Presidency University professor", "Parul University law faculty", "professional achievements law"],
  alternates: { canonical: canonicalUrl("/about/professional-profile") },
  openGraph: buildOpenGraph({ title, description, url: canonicalUrl("/about/professional-profile"), image: DEFAULT_OG_IMAGE }),
  twitter: buildTwitterCard({ title, description, image: DEFAULT_OG_IMAGE }),
};

export default function ProfessionalProfilePage() {
  return (
    <PageTransition>
      <ProfessionalProfilePageContent />
    </PageTransition>
  );
}
