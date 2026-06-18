import { featuredAwards } from "@/data/awards";
import { FadeUp } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

export function FeaturedAchievementsSection() {
  return (
    <section id="featured-achievements" className="section-padding bg-navy-900">
      <div className="container-academic px-4 md:px-6">
        <SectionHeader
          eyebrow="Recognition"
          title="Featured Achievements"
          description="National and international honours recognizing excellence in teaching, authorship, and intellectual property research."
          className="[&_div]:bg-gold"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredAwards.map((award, index) => (
            <FadeUp key={award.id} delay={index * 0.08}>
              <Card className="h-full border-gold/15">
                <CardHeader className="pb-3">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-gold/10">
                    <Award className="h-5 w-5 text-gold" />
                  </div>
                  <p className="text-sm font-semibold text-gold">{award.year}</p>
                  <CardTitle className="text-lg leading-snug">{award.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-foreground">{award.organization}</p>
                  <p className="mt-2 text-sm text-muted">{award.description}</p>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
