import Link from "next/link";
import { Scale, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-navy-900">
      <div className="container-academic section-padding !py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-navy-800 text-gold">
                <Scale className="h-5 w-5" />
              </div>
              <div>
                <p className="font-serif font-semibold text-foreground">Prof. Dr. M.S.B. Khan</p>
                <p className="text-xs text-gold/70">Academic Legacy Platform</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              Advancing Legal Scholarship, Research and Academic Leadership at Presidency
              University, Bangalore.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-sm font-semibold tracking-wider text-gold uppercase">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/" className="animated-underline hover:text-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="animated-underline hover:text-gold">
                  About
                </Link>
              </li>
              <li>
                <Link href="/academic-journey" className="animated-underline hover:text-gold">
                  Academic Journey
                </Link>
              </li>
              <li>
                <Link href="/about#qualifications" className="animated-underline hover:text-gold">
                  Qualifications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-sm font-semibold tracking-wider text-gold uppercase">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <a href={`mailto:${profile.email}`} className="animated-underline hover:text-gold">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href={`tel:${profile.phone}`} className="animated-underline hover:text-gold">
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gold/10 pt-6 text-center text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
