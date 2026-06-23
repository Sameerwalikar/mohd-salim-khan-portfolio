"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function PinContainer({
  children,
  title,
  href,
  className,
  containerClassName,
  pinPosition = "bottom",
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
  pinPosition?: "bottom" | "right";
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn("relative group/pin z-10 cursor-pointer", containerClassName)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div
          style={{
            transform: hovered
              ? "rotateX(12deg) rotateY(-4deg) translateZ(0px)"
              : "rotateX(0deg) rotateY(0deg) translateZ(0px)",
          }}
          className="transition-all duration-500 ease-out"
        >
          <div className={cn("relative z-20", className)}>{children}</div>
        </div>
      </div>

      <PinPerspective title={title} href={href} hovered={hovered} position={pinPosition} />
    </div>
  );
}

function PinPerspective({
  title,
  href,
  hovered,
  position,
}: {
  title?: string;
  href?: string;
  hovered: boolean;
  position: "bottom" | "right";
}) {
  if (position === "right") {
    return (
      <motion.div
        className="pointer-events-none absolute right-0 top-[55%] z-[60] flex -translate-y-1/2 translate-x-full flex-row items-center opacity-0 transition-opacity duration-500 group-hover/pin:opacity-100"
      >
        {/* Horizontal beam */}
        <div className="flex h-px w-40 items-center">
          <motion.div
            initial={{ width: 0 }}
            animate={hovered ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-gold/50 via-gold/30 to-transparent"
          />
        </div>

        {/* End dot with rings */}
        <div className="relative flex items-center justify-center">
          <motion.div
            animate={hovered ? { scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-4 w-4 rounded-full border border-gold/40 bg-gold/10"
          />
          <motion.div
            animate={hovered ? { scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute h-7 w-7 rounded-full border border-gold/25 bg-gold/5"
          />
          <motion.div
            animate={hovered ? { scale: [1, 1.4, 1], opacity: [0.2, 0.35, 0.2] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute h-10 w-10 rounded-full border border-gold/15"
          />
          <div className="h-2 w-2 rounded-full bg-gold/60" />
        </div>

        {/* Title label */}
        {title && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="ml-6 rounded-full border border-gold/20 bg-navy-900/90 px-4 py-1.5 text-xs font-medium text-gold shadow-[0_0_20px_rgba(201,168,106,0.12)] backdrop-blur-md"
          >
            {title}
          </motion.div>
        )}
      </motion.div>
    );
  }

  // Default bottom position
  return (
    <motion.div
      className="pointer-events-none absolute -bottom-2 left-1/2 z-[60] flex -translate-x-1/2 flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover/pin:opacity-100"
    >
      {title && (
        <div className="relative mt-4 flex items-center justify-center rounded-full border border-gold/20 bg-navy-900/90 px-4 py-1.5 text-xs font-medium text-gold shadow-[0_0_20px_rgba(201,168,106,0.15)] backdrop-blur-md">
          {title}
        </div>
      )}

      <div className="mt-4 flex h-52 w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="relative flex h-full w-full flex-col items-center"
        >
          <div className="absolute inset-x-0 top-0 mx-auto h-full w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />
          <motion.div
            animate={hovered ? { scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 h-5 w-5 rounded-full border border-gold/40 bg-gold/10"
          />
          <motion.div
            animate={hovered ? { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute bottom-0 h-8 w-8 rounded-full border border-gold/25 bg-gold/5"
          />
          <motion.div
            animate={hovered ? { scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute bottom-0 h-12 w-12 rounded-full border border-gold/15"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
