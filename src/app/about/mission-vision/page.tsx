import { PageTransition } from "@/components/layout/page-transition";
import { MissionVisionPageContent } from "@/components/about/mission-vision-page-content";

export default function MissionVisionPage() {
  return (
    <PageTransition>
      <MissionVisionPageContent />
    </PageTransition>
  );
}
