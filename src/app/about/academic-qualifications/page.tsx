import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { AcademicQualificationsPageContent } from "@/components/about/academic-qualifications-page-content";
import { canonicalUrl, buildOpenGraph, buildTwitterCard, DEFAULT_OG_IMAGE } from "@/lib/seo";

const title = "Academic Qualifications | Dr. Mohammed Salim B. Khan";
const description =
  "Comprehensive academic credentials of Dr. Mohammed Salim B. Khan including Ph.D. in Law (Gold Medal M.Phil), LL.M., LL.B., MBA, and multidisciplinary postgraduate qualifications from recognised Indian and international universities.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["PhD in Law", "M.Phil Gold Medalist", "LL.M", "academic qualifications law professor", "Dr. Mohammed Salim B. Khan education"],
  alternates: { canonical: canonicalUrl("/about/academic-qualifications") },
  openGraph: buildOpenGraph({ title, description, url: canonicalUrl("/about/academic-qualifications"), image: DEFAULT_OG_IMAGE }),
  twitter: buildTwitterCard({ title, description, image: DEFAULT_OG_IMAGE }),
};

export default function AcademicQualificationsPage() {
  return (
    <PageTransition>
      <AcademicQualificationsPageContent />
    </PageTransition>
  );
}
