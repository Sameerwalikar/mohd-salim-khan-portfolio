import { profile } from "@/data/profile";
import { FadeUp } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function ContactCTASection() {
  return (
    <section id="contact" className="section-padding bg-background-soft">
      <div className="container-academic px-4 md:px-6">
        <SectionHeader
          eyebrow="Connect"
          title="Contact & Collaboration"
          description="For academic collaborations, research inquiries, guest lectures, and institutional engagements."
        />

        <FadeUp>
          <div className="mx-auto grid max-w-4xl gap-8 rounded-2xl border border-border bg-background p-8 shadow-[var(--card-shadow)] md:grid-cols-2 md:p-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-secondary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="animated-underline text-muted hover:text-secondary"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-secondary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Phone</p>
                  <a
                    href={`tel:${profile.phone}`}
                    className="animated-underline text-muted hover:text-secondary"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-secondary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Address</p>
                  <p className="text-sm text-muted">{profile.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-secondary">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Channels</p>
                  <p className="text-sm text-muted">
                    WhatsApp: {profile.socialMedia.whatsapp}
                  </p>
                  <p className="text-sm text-muted">
                    Telegram: {profile.socialMedia.telegram}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-xl bg-primary p-8 text-background">
              <h3 className="font-serif text-2xl font-semibold">
                Engage in Scholarly Dialogue
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-background/70">
                Open to research collaborations, conference invitations, moot court
                judging, expert lectures, and academic administration consultations.
              </p>
              <Button asChild variant="secondary" className="mt-8 w-full">
                <a href={`mailto:${profile.email}`}>Send an Inquiry</a>
              </Button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
