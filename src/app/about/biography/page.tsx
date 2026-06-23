import { PageTransition } from "@/components/layout/page-transition";
import { BiographyPageContent } from "@/components/about/biography-page-content";

export default function BiographyPage() {
  return (
    <PageTransition>
      <BiographyPageContent />
    </PageTransition>
  );
}
