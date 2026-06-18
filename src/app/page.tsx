import { PageTransition } from "@/components/layout/page-transition";
import { HeroSection } from "@/components/home/hero-section";
import { CareerImpactSection } from "@/components/home/career-impact-section";
import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { CurrentPositionSection } from "@/components/home/current-position-section";
import { FeaturedAchievementsSection } from "@/components/home/featured-achievements-section";
import { FeaturedIPRSection } from "@/components/home/featured-ipr-section";
import { QuoteSection } from "@/components/home/quote-section";

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
    </PageTransition>
  );
}
