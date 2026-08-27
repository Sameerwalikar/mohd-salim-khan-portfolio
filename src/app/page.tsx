import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { HeroSection } from "@/components/home/hero-section";
import {
  canonicalUrl,
  buildOpenGraph,
  buildTwitterCard,
  DEFAULT_OG_IMAGE,
} from "@/lib/seo";

const title = "Dr. Mohammed Salim B. Khan | Legal Scholar & Academic";
const description =
  "Official academic portfolio of Dr. Mohammed Salim B. Khan — Assistant Professor (Senior Scale) at Presidency School of Law, Presidency University, Bangalore. 25+ years of legal scholarship, research, patents, and teaching excellence.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl("/") },
  openGraph: buildOpenGraph({ title, description, url: canonicalUrl("/"), image: DEFAULT_OG_IMAGE }),
  twitter: buildTwitterCard({ title, description, image: DEFAULT_OG_IMAGE }),
};
import { CareerImpactSection } from "@/components/home/career-impact-section";
import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { CurrentPositionSection } from "@/components/home/current-position-section";
import { FeaturedAchievementsSection } from "@/components/home/featured-achievements-section";
import { FeaturedIPRSection } from "@/components/home/featured-ipr-section";
import { QuoteSection } from "@/components/home/quote-section";
import { ContactCTASection } from "@/components/home/contact-cta-section";

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <CareerImpactSection />
      <AboutPreviewSection />
      <CurrentPositionSection />
      <FeaturedAchievementsSection />
      <FeaturedIPRSection />
      <QuoteSection />
      <ContactCTASection />
    </PageTransition>
  );
}
