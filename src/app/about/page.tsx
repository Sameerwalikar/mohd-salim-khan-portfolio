import type { Metadata } from "next";
import { AboutPageClient } from "@/components/about/about-page-client";
import {
  canonicalUrl,
  buildOpenGraph,
  buildTwitterCard,
  DEFAULT_OG_IMAGE,
} from "@/lib/seo";

const title = "About Dr. Mohammed Salim B. Khan | Legal Scholar";
const description =
  "Learn about Dr. Mohammed Salim B. Khan — his biography, academic qualifications, areas of expertise, mission, and professional profile as a veteran legal scholar and educator with 25+ years of experience.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "about Dr. Mohammed Salim B. Khan",
    "legal scholar biography",
    "law professor profile",
    "Presidency University faculty",
    "academic qualifications law",
  ],
  alternates: { canonical: canonicalUrl("/about") },
  openGraph: buildOpenGraph({ title, description, url: canonicalUrl("/about"), image: DEFAULT_OG_IMAGE }),
  twitter: buildTwitterCard({ title, description, image: DEFAULT_OG_IMAGE }),
};

export default function AboutPage() {
  return <AboutPageClient />;
}
