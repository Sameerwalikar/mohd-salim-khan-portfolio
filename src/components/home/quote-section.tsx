import Link from "next/link";
import { profile } from "@/data/profile";
import { FadeUp } from "@/components/shared/fade-up";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,106,0.08)_0%,transparent_70%)]" />
      <div className="container-academic relative px-4 text-center md:px-6">
        <FadeUp>
          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-gold uppercase">
            Scholarly Philosophy
          </p>
          <blockquote className="mx-auto max-w-4xl font-serif text-2xl leading-relaxed text-foreground md:text-3xl lg:text-4xl">
            &ldquo;{profile.mission}&rdquo;
          </blockquote>
          <div className="mx-auto mt-8 h-px w-24 bg-gold" />
          <p className="mt-6 font-medium text-gold-light">— {profile.shortName}</p>
          <Button asChild variant="secondary" className="mt-10 btn-glow">
            <Link href="/about#mission">
              Discover Mission & Vision
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
