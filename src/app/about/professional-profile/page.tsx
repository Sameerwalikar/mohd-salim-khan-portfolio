import { PageTransition } from "@/components/layout/page-transition";
import { ProfessionalProfilePageContent } from "@/components/about/professional-profile-page-content";

export default function ProfessionalProfilePage() {
  return (
    <PageTransition>
      <ProfessionalProfilePageContent />
    </PageTransition>
  );
}
