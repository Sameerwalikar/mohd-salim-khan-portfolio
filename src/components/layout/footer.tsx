"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Scale, ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

const reflectionsQuotes = [
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela"
  },
  {
    text: "Cultivation of mind should be the ultimate aim of human existence.",
    author: "Dr. B. R. Ambedkar"
  },
  {
    text: "The law of love will be best understood and learned through little children.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Law is mind without reason.",
    author: "Aristotle"
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates"
  },
  {
    text: "The only source of knowledge is experience.",
    author: "Albert Einstein"
  },
  {
    text: "Education breeds confidence. Confidence breeds hope. Hope breeds peace.",
    author: "Confucius"
  }
];

function QuoteRotator() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % reflectionsQuotes.length);
        setVisible(true);
      }, 500); // match fade out duration
    }, 15000); // 15 seconds

    return () => clearInterval(timer);
  }, []);

  const quote = reflectionsQuotes[index];

  return (
    <div className="min-h-[120px] flex flex-col justify-start">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        <p className="font-serif text-sm leading-relaxed text-slate-300 italic">
          &ldquo;{quote.text}&rdquo;
        </p>
        <p className="text-xs font-medium text-gold/80 tracking-wide">— {quote.author}</p>
      </motion.div>
    </div>
  );
}


const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Career Journey", href: "/academic-journey" },
  { label: "Research & Scholarship", href: "/research" },
  { label: "Intellectual Contributions", href: "/intellectual-contributions" },
  { label: "Recognition", href: "/recognition" },
  { label: "Contact", href: "/contact" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#040a14]">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-16 w-[500px] bg-[radial-gradient(ellipse,rgba(201,168,106,0.05)_0%,transparent_70%)] blur-2xl" />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050c17] to-[#030810]" />
        <motion.div
          className="absolute left-[18%] top-[35%] h-1.5 w-1.5 rounded-full bg-gold/6"
          animate={{ y: [0, -8, 0], opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[22%] top-[55%] h-1 w-1 rounded-full bg-gold/5"
          animate={{ y: [0, -6, 0], opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="container-academic relative z-10 px-4 py-16 md:px-6 md:py-20">
        {/* 3-Column Grid */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Column 1 — Brand & Legacy Statement */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 bg-navy-800/80 text-gold">
                <Scale className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Prof. Dr. M.S.B. Khan
                </p>
                <p className="text-[10px] tracking-[0.15em] text-gold/50 uppercase">
                  Academic Legacy Platform
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400/90">
              Dedicated to advancing legal scholarship, intellectual property
              research, academic leadership and legal education.
            </p>
            {/* Subtle gold accent */}
            <div className="mt-5 h-px w-12 bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h4 className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold/60 uppercase">
              <span className="inline-block h-px w-4 bg-gold/25" />
              Explore
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Academic Reflections */}
          <div>
            <h4 className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold/60 uppercase">
              <span className="inline-block h-px w-4 bg-gold/25" />
              Academic Reflections
            </h4>
            <QuoteRotator />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-gold/8 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-xs text-slate-500">
                &copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.
              </p>
              <p className="mt-1 text-[11px] text-slate-600">
                Academic Legacy Platform &bull; Designed with excellence and purpose.
              </p>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 rounded-full border border-gold/15 bg-navy-800/50 px-4 py-2 text-xs font-medium text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-gold/35 hover:text-gold hover:shadow-[0_0_20px_rgba(201,168,106,0.1)]"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
