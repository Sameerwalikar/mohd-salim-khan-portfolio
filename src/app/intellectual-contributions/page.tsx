import { PageTransition } from "@/components/layout/page-transition";
import { ContributionsPageContent } from "@/components/intellectual-contributions/contributions-page-content";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Intellectual Contributions | Prof. Dr. M.S.B. Khan",
  description:
    "Explore books authored/edited, patents, design grants, editorial leadership, and curriculum achievements of Prof. Dr. Mohammed Salim B. Khan.",
};

export default function IntellectualContributionsPage() {
  return (
    <PageTransition>
      <Suspense fallback={<div className="min-h-screen bg-navy-900" />}>
        <ContributionsPageContent />
      </Suspense>
    </PageTransition>
  );
}
