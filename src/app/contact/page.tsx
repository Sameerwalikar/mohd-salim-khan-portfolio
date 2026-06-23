import { PageTransition } from "@/components/layout/page-transition";
import { ContactPageContent } from "@/components/contact/contact-page-content";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact & Collaboration | Prof. Dr. M.S.B. Khan",
  description:
    "Get in touch with Prof. Dr. Mohammed Salim B. Khan for academic collaborations, research inquiries, advisory roles, guest lectures, and institutional engagements.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <Suspense fallback={<div className="min-h-screen bg-navy-900" />}>
        <ContactPageContent />
      </Suspense>
    </PageTransition>
  );
}
