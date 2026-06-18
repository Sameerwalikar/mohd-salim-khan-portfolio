import { profile } from "@/data/profile";
import { FadeUp } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Building2, Briefcase, MapPin } from "lucide-react";

export function CurrentPositionSection() {
  const { currentPosition } = profile;

  return (
    <section className="section-padding bg-navy-800">
      <div className="container-academic px-4 md:px-6">
        <SectionHeader
          eyebrow="Present Assignment"
          title="Current Position"
          description="Leading legal education and institutional coordination at Presidency School of Law, Presidency University, Bangalore."
          className="[&_div]:bg-gold"
        />

        <FadeUp>
          <div className="premium-card mx-auto max-w-4xl overflow-hidden rounded-2xl md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold">
                    <Building2 className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      {currentPosition.institution}
                    </h3>
                    <p className="text-muted">{currentPosition.university}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-gold/80">
                      <MapPin className="h-3.5 w-3.5" />
                      {currentPosition.location}
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="mb-4">
                  {currentPosition.period}
                </Badge>
                <p className="text-lg font-medium text-foreground">
                  {currentPosition.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Notable Credits: Assistant Professor Law (Senior Scale), Coordinator Sports Committee,
                  Coordinator UG Dissertation, Co-Coordinator Internship and Placement.
                </p>
              </div>

              <div className="rounded-xl border border-gold/10 bg-navy-900/60 p-6 md:min-w-[280px]">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-gold">
                  <Briefcase className="h-4 w-4" />
                  Leadership Roles
                </div>
                <ul className="space-y-3">
                  {currentPosition.coordinatorRoles.map((role) => (
                    <li key={role} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
