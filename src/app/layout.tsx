import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { AppShell } from "@/components/layout/app-shell";
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

export const metadata: Metadata = {
  title: "Prof. Dr. Mohammed Salim B. Khan | Academic Legacy",
  description:
    "Academic legacy platform of Professor Dr. Mohammed Salim B. Khan — Assistant Professor (Senior Scale), Presidency School of Law, Presidency University. Legal scholar, researcher, mediator, and author.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${inter.variable}`}>
      <body className="antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
