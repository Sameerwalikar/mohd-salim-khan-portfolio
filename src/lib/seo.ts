/**
 * Centralised SEO constants for the Dr. Mohammed Salim B. Khan portfolio.
 * All metadata is derived from the canonical profile data in @/data/profile.
 * Import from here instead of hard-coding strings in individual pages.
 */

import { profile } from "@/data/profile";

export const BASE_URL = "https://salimbkhan.in";

export const DEFAULT_OG_IMAGE = `${BASE_URL}/images/faculty-portrait.png`;

export const SITE_NAME = "Dr. Mohammed Salim B. Khan | Academic Legacy";

export const DEFAULT_KEYWORDS = [
  "Dr. Mohammed Salim B. Khan",
  "legal scholar",
  "law professor",
  "Presidency University",
  "Presidency School of Law",
  "Bangalore",
  "intellectual property rights",
  "sports law",
  "constitutional law",
  "human rights",
  "cyber law",
  "legal education",
  "mediator",
  "arbitrator",
  "academic portfolio",
  "Indian law professor",
];

/** Build a canonical URL for a given pathname (no trailing slash). */
export function canonicalUrl(path: string = ""): string {
  const clean = path === "/" || path === "" ? "" : `/${path.replace(/^\//, "")}`;
  return `${BASE_URL}${clean}`;
}

/** Shared Open Graph / Twitter base — merge per-page overrides on top. */
export function buildOpenGraph({
  title,
  description,
  url,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    title,
    description,
    url,
    siteName: SITE_NAME,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: `${profile.name} — Legal Scholar & Academic`,
      },
    ],
    locale: "en_IN",
    type: "profile" as const,
  };
}

export function buildTwitterCard({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  image?: string;
}) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: [image],
    creator: "@MSBKhan",
  };
}
