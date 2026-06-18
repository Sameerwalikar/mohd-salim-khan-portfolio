import { PageTransition } from "@/components/layout/page-transition";
import {
  BiographySection,
  MissionVisionSection,
  ExpertiseSection,
} from "@/components/about/biography-section";
import { QualificationsTimeline } from "@/components/about/qualifications-timeline";
import { CareerTimelineSection } from "@/components/about/career-timeline-section";

export default function AboutPage() {
  return (
    <PageTransition>
      <BiographySection />
      <MissionVisionSection />
      <QualificationsTimeline />
      <ExpertiseSection />
      <CareerTimelineSection />
    </PageTransition>
  );
}
