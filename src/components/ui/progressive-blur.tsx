"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressiveBlurProps {
  visible: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * ProgressiveBlur — a layered blur gradient that rises from the bottom.
 * Used for premium portrait overlays on hover.
 */
export function ProgressiveBlur({
  visible,
  className,
  children,
}: ProgressiveBlurProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn("absolute inset-0 z-20 flex flex-col justify-end", className)}
        >
          {/* Progressive blur layers — bottom to top */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-transparent backdrop-blur-[1px]" />
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-transparent backdrop-blur-[2px]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-900/70 to-transparent backdrop-blur-[4px]" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-900/60 to-transparent backdrop-blur-[6px]" />

          {/* Content overlay */}
          <div className="relative z-10 p-6 md:p-8">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
