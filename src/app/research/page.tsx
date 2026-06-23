import { PageTransition } from "@/components/layout/page-transition";
import { ResearchPageContent } from "@/components/research/research-page-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Scholarship | Prof. Dr. M.S.B. Khan",
  description:
    "Explore the scholarly contributions, publications, patents, designs, books, and legal research of Prof. Dr. Mohammed Salim B. Khan.",
};

export default function ResearchPage() {
  return (
    <PageTransition>
      <ResearchPageContent />
    </PageTransition>
  );
}
