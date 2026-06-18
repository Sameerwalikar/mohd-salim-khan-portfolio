import { PageTransition } from "@/components/layout/page-transition";
import { AcademicJourneyContent } from "@/components/academic-journey/academic-journey-content";

export default function AcademicJourneyPage() {
  return (
    <PageTransition>
      <AcademicJourneyContent />
    </PageTransition>
  );
}
