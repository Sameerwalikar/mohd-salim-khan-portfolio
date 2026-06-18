import Image from "next/image";
import { profile, expertiseAreas } from "@/data/profile";
import { FadeUp } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Award } from "lucide-react";

export function BiographySection() {
  return (
    <section id="biography" className="section-padding bg-navy-900 pt-32">
      <div className="container-academic px-4 md:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[340px_1fr] lg:gap-16">
          <FadeUp>
            <div className="image-zoom sticky top-28 mx-auto max-w-xs lg:mx-0">
              <div className="absolute -inset-3 rounded-sm border border-gold/15" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-[var(--card-shadow-hover)]">
                <Image
                  src={profile.portrait}
                  alt={profile.name}
                  fill
                  className="object-cover object-top"
                  sizes="340px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
              </div>
              <p className="mt-4 text-center font-serif text-sm text-gold">
                {profile.currentPosition.title}
              </p>
              <p className="text-center text-xs text-muted">
                {profile.currentPosition.university}, Bangalore
              </p>
            </div>
          </FadeUp>

          <div>
            <SectionHeader
              eyebrow="Professional Narrative"
              title="Biography"
              description="The scholarly journey of a legal educator, researcher, and institutional leader."
              align="left"
              className="[&_div]:bg-gold"
            />
            <FadeUp>
              <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
                {profile.biography.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MissionVisionSection() {
  const items = [
    { icon: Target, title: "Mission", content: profile.mission, type: "text" as const },
    { icon: Eye, title: "Vision", content: profile.vision, type: "text" as const },
    { icon: Heart, title: "Values", content: profile.values, type: "list" as const },
  ];

  return (
    <section id="mission" className="section-padding bg-navy-800">
      <div className="container-academic px-4 md:px-6">
        <SectionHeader
          eyebrow="Guiding Principles"
          title="Mission, Vision & Values"
          className="[&_div]:bg-gold"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.1}>
              <div className="premium-card h-full rounded-2xl p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                {item.type === "text" ? (
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.content as string}
                  </p>
                ) : (
                  <ul className="mt-4 space-y-2">
                    {(item.content as readonly string[]).map((value) => (
                      <li key={value} className="flex items-center gap-2 text-sm text-muted">
                        <span className="h-1 w-1 rounded-full bg-gold" />
                        {value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-padding bg-navy-900">
      <div className="container-academic px-4 md:px-6">
        <SectionHeader
          eyebrow="Areas of Scholarship"
          title="Professional Expertise"
          description="Interdisciplinary legal scholarship spanning constitutional law, sports law, intellectual property, human rights, and emerging technology."
          className="[&_div]:bg-gold"
        />
        <FadeUp>
          <div className="flex flex-wrap justify-center gap-3">
            {expertiseAreas.map((area) => (
              <Badge key={area} variant="secondary" className="px-5 py-2.5 text-sm">
                {area}
              </Badge>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="premium-card mx-auto mt-12 max-w-3xl rounded-2xl p-8">
            <h3 className="flex items-center justify-center gap-2 font-serif text-lg font-semibold text-gold">
              <Award className="h-5 w-5" />
              Highlighted Academic Distinctions
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {profile.highlightedQualifications.map((qual) => (
                <div
                  key={qual.degree}
                  className="rounded-xl border border-gold/15 bg-navy-900/50 p-5 text-center"
                >
                  <p className="font-serif text-base font-semibold text-foreground">{qual.degree}</p>
                  <p className="mt-2 text-sm font-medium text-gold">{qual.distinction}</p>
                  {qual.year && (
                    <p className="mt-1 text-xs text-muted">{qual.year}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
