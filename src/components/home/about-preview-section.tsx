import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";

export function AboutPreviewSection() {
  return (
    <section className="section-padding bg-navy-900">
      <div className="container-academic px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp className="order-2 lg:order-1">
            <div className="image-zoom relative mx-auto max-w-sm lg:mx-0">
              <div className="absolute -inset-3 rounded-sm border border-gold/15" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[var(--card-shadow-hover)]">
                <Image
                  src={profile.portrait}
                  alt={profile.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              </div>
            </div>
          </FadeUp>

          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Professional Introduction"
              title="About the Professor"
              align="left"
              className="[&_div]:bg-gold"
            />
            <FadeUp delay={0.1}>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                {profile.executiveSummary}
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="mt-6 flex flex-wrap gap-2">
                {profile.roles.map((role) => (
                  <Badge key={role} variant="secondary" className="px-4 py-1.5">
                    {role}
                  </Badge>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="premium-card mt-8 rounded-xl p-6 md:p-8">
                <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-gold">
                  <Award className="h-5 w-5" />
                  Distinguished Credentials
                </h3>
                <ul className="mt-5 space-y-4">
                  {profile.highlightedQualifications.map((item) => (
                    <li key={item.degree} className="border-l-2 border-gold/30 pl-4">
                      <p className="font-medium text-foreground">{item.degree}</p>
                      <p className="text-sm text-gold">{item.distinction}</p>
                      <p className="mt-1 text-xs text-muted">
                        {item.institution}
                        {item.year ? ` · ${item.year}` : ""}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <Button asChild variant="secondary" className="mt-8 btn-glow">
                <Link href="/about">
                  Read Full Biography
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
