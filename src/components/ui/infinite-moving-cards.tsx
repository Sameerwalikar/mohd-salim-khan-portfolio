"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface InfiniteMovingCardsProps {
  items: {
    roleTitle: string;
    institution: string;
    duration: string;
    description: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getSpeed = useCallback(() => {
    if (speed === "fast") return "40s";
    if (speed === "normal") return "60s";
    return "90s";
  }, [speed]);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    // Duplicate items for seamless loop
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    containerRef.current.style.setProperty("--animation-direction", direction === "left" ? "forwards" : "reverse");
    containerRef.current.style.setProperty("--animation-duration", getSpeed());

    setStart(true);
  }, [direction, getSpeed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 gap-5 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.roleTitle}-${idx}`}
            className="group relative w-[320px] shrink-0 overflow-hidden rounded-xl border border-gold/[0.12] bg-navy-800/50 px-6 py-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/25 hover:shadow-[0_10px_30px_rgba(201,168,106,0.06)] md:w-[380px]"
            style={{ perspective: "800px" }}
          >
            {/* Subtle hover glow */}
            <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/[0.03] blur-2xl opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full border border-gold/20 bg-gold/[0.06] px-3 py-1 text-[11px] font-medium text-gold">
                  {item.duration}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white md:text-lg">
                {item.roleTitle}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-slate-300/80">
                {item.institution}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400/80">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
