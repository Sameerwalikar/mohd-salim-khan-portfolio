import { PageTransition } from "@/components/layout/page-transition";
import { RecognitionPageContent } from "@/components/recognition/recognition-page-content";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Honours & Recognition | Prof. Dr. M.S.B. Khan",
  description:
    "Explore the national and international awards, professional life memberships, certified training roles, and debate honors of Prof. Dr. Mohammed Salim B. Khan.",
};

export default function RecognitionPage() {
  return (
    <PageTransition>
      <Suspense fallback={<div className="min-h-screen bg-navy-900" />}>
        <RecognitionPageContent />
      </Suspense>
    </PageTransition>
  );
}
