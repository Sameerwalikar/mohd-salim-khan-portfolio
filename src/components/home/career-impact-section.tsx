"use client";

import { motion } from "framer-motion";
import { careerImpact } from "@/data/profile";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { FadeUp } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";

export function CareerImpactSection() {
  return (
    <section className="section-padding relative bg-navy-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,106,0.08)_0%,transparent_70%)]" />

      <div className="container-academic relative px-4 md:px-6">
        <SectionHeader
          eyebrow="Scholarly Impact"
          title="Career Impact"
          description="A distinguished record of academic scholarship, intellectual property innovation, and institutional leadership spanning over two decades."
          className="
            text-center
            [&_h2]:text-white
            [&_p]:text-slate-300
          "
        />

        <FadeUp delay={0.1}>
          <motion.div
            className="mx-auto mt-12 grid gap-5 md:grid-cols-4 md:grid-rows-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {careerImpact.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={cn(
                  `
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gold/20
                  bg-gradient-to-br
                  from-[#d8bb85]
                  via-[#cfb070]
                  to-[#c9a86a]
                  p-6
                  text-black
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:shadow-[0_20px_50px_rgba(201,168,106,0.35)]
                  `,
                  index === 0 && "md:col-span-2 md:row-span-2"
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
              >
                {/* Shine Animation */}
                <div
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    transition-transform
                    duration-1000
                    group-hover:translate-x-full
                  "
                />

                {/* Decorative Glow */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

                <div className="relative z-10">
                  <p
                    className={cn(
                      "font-serif font-bold",
                      index === 0
                        ? "text-6xl md:text-7xl"
                        : "text-4xl md:text-5xl"
                    )}
                  >
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </p>

                  <p
                    className={cn(
                      "mt-3 font-semibold uppercase tracking-wider",
                      index === 0
                        ? "text-base md:text-lg"
                        : "text-sm md:text-base"
                    )}
                  >
                    {stat.label}
                  </p>

                  {index === 0 && (
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-black/70 md:text-base">
                      More than two decades of contributions across legal
                      education, academic leadership, research, publications,
                      intellectual property and institutional development.
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}