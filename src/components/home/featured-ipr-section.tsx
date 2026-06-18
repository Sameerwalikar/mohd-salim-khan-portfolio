import { featuredIPR } from "@/data/ipr";
import { FadeUp } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Palette } from "lucide-react";

export function FeaturedIPRSection() {
  return (
    <section id="featured-ipr" className="section-padding bg-navy-800">
      <div className="container-academic px-4 md:px-6">
        <SectionHeader
          eyebrow="Innovation"
          title="Featured Intellectual Property"
          description="Published patents and granted design registrations reflecting interdisciplinary research at the intersection of law, technology, and education."
          className="[&_div]:bg-gold"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featuredIPR.map((item, index) => (
            <FadeUp key={item.id} delay={index * 0.08}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold">
                      {item.type === "Patent" ? (
                        <Lightbulb className="h-5 w-5" />
                      ) : (
                        <Palette className="h-5 w-5" />
                      )}
                    </div>
                    <Badge variant={item.type === "Patent" ? "default" : "secondary"}>
                      {item.type}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4 text-base leading-snug md:text-lg">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted">{item.applicationOrDesignNumber}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="outline">{item.publicationOrGrantDate}</Badge>
                    {item.jurisdiction && <Badge variant="outline">{item.jurisdiction}</Badge>}
                  </div>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
