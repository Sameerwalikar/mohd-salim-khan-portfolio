"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { loadingQuotes, profile } from "@/data/profile";

interface LoadingScreenProps {
  onComplete: () => void;
}

const BOOK_COUNT = 5;

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"books" | "initials" | "fade">("books");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [stackedBooks, setStackedBooks] = useState(0);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % loadingQuotes.length);
    }, 900);
    return () => clearInterval(quoteTimer);
  }, []);

  useEffect(() => {
    if (stackedBooks < BOOK_COUNT) {
      const timer = setTimeout(() => setStackedBooks((prev) => prev + 1), 400);
      return () => clearTimeout(timer);
    }
    const initialsTimer = setTimeout(() => setPhase("initials"), 300);
    return () => clearTimeout(initialsTimer);
  }, [stackedBooks]);

  useEffect(() => {
    if (phase === "initials") {
      const fadeTimer = setTimeout(() => setPhase("fade"), 1200);
      return () => clearTimeout(fadeTimer);
    }
    if (phase === "fade") {
      const completeTimer = setTimeout(onComplete, 600);
      return () => clearTimeout(completeTimer);
    }
  }, [phase, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "fade" ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle absolute h-1 w-1 rounded-full bg-gold"
          style={{
            left: `${10 + (i * 4.5) % 80}%`,
            top: `${15 + (i * 7) % 70}%`,
            animationDelay: `${i * 0.2}s`,
            opacity: 0.4,
          }}
        />
      ))}

      <div className="relative flex flex-col items-center">
        <AnimatePresence mode="wait">
          {phase === "books" && (
            <motion.div
              key="books"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-8 h-32 w-24">
                {Array.from({ length: stackedBooks }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: -40, rotate: -5 }}
                    animate={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 2 }}
                    className="absolute flex h-8 w-24 items-center justify-center rounded-sm border border-gold/30 bg-navy-800 shadow-lg"
                    style={{ bottom: `${i * 22}px`, zIndex: i }}
                  >
                    <BookOpen className="h-4 w-4 text-gold/70" />
                  </motion.div>
                ))}
              </div>

              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-md px-6 text-center font-serif text-lg italic text-gold-light md:text-xl"
              >
                &ldquo;{loadingQuotes[quoteIndex]}&rdquo;
              </motion.p>
            </motion.div>
          )}

          {phase === "initials" && (
            <motion.div
              key="initials"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 0.75 }}
              className="flex flex-col items-center"
            >
              <h1 className="glow-text font-serif text-6xl font-bold tracking-[0.3em] text-gold md:text-8xl">
                {profile.initials}
              </h1>
              <p className="mt-4 text-2xl tracking-widest text-gold/70 uppercase">
                Academic Legacy
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
