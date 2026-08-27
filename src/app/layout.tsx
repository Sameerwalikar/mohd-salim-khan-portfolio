import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { AppShell } from "@/components/layout/app-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { profile } from "@/data/profile";
import {
  BASE_URL,
  SITE_NAME,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  buildOpenGraph,
  buildTwitterCard,
  canonicalUrl,
} from "@/lib/seo";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteDescription =
  "Academic legacy platform of Dr. Mohammed Salim B. Khan — Assistant Professor (Senior Scale), Presidency School of Law, Presidency University. Legal scholar, researcher, mediator, and author.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | Dr. Mohammed Salim B. Khan`,
  },
  description: siteDescription,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: canonicalUrl("/"),
  },
  openGraph: buildOpenGraph({
    title: SITE_NAME,
    description: siteDescription,
    url: canonicalUrl("/"),
    image: DEFAULT_OG_IMAGE,
  }),
  twitter: buildTwitterCard({
    title: SITE_NAME,
    description: siteDescription,
    image: DEFAULT_OG_IMAGE,
  }),
  icons: {
    icon: "/images/faculty-portrait.png",
    apple: "/images/faculty-portrait.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/** Person + WebSite JSON-LD — injected once in the root layout. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  honorificPrefix: "Dr.",
  givenName: "Mohammed Salim",
  familyName: "Khan",
  jobTitle: profile.currentPosition.title,
  description: profile.executiveSummary,
  image: `${BASE_URL}${profile.portrait}`,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
    streetAddress: profile.address,
  },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: `${profile.currentPosition.institution}, ${profile.currentPosition.university}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.currentPosition.location,
      addressCountry: "IN",
    },
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Parul Institute of Law, Parul University",
      description: "M.Phil (Law) — Gold Medalist",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Shri JJT University, Rajasthan",
      description: "Ph.D. in Law",
    },
  ],
  knowsAbout: [
    "Constitutional Law",
    "Intellectual Property Rights",
    "Sports Law",
    "Human Rights",
    "Cyber Law",
    "Legal Education",
    "Mediation and Arbitration",
    "Animal Law",
  ],
  url: BASE_URL,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: BASE_URL,
  description: siteDescription,
  author: {
    "@type": "Person",
    name: profile.name,
  },
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${inter.variable}`}>
      <head>
        <JsonLd schema={[personSchema, websiteSchema]} />
      </head>
      <body className="antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
