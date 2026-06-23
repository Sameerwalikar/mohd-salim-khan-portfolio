"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ChevronRight,
  GraduationCap,
  Scale,
  BookOpen,
  Lightbulb,
  Trophy,
  FileText,
  PenTool,
  Award,
  Users,
  Briefcase,
} from "lucide-react";
import { profile, expertiseAreas } from "@/data/profile";
import { FadeUp } from "@/components/shared/fade-up";
import { cn } from "@/lib/utils";

/* ─── DATA ─── */

const timelineMilestones = [
  {
    period: "January 2025 – Present",
    position: "Assistant Professor (Senior Scale)",
    institution: "Presidency School of Law, Presidency University, Bangalore",
    summary:
      "Leading legal education as Senior Scale faculty. Coordinating Sports Committee, UG Dissertation, and Co-Coordinating Internship & Placement activities.",
  },
  {
    period: "August 2021 – November 2024",
    position: "Assistant Professor Law",
    institution: "Parul Institute of Law, Parul University, Vadodara",
    summary:
      "Co-Coordinator of Centre for Post Graduate Legal Studies. Coordinator of Centre for Constitutional Law and Policy, and Centre of Excellence in Sports Law Policy and Governance. Organised national and international conferences including 'Samvidhan Pe Charcha'.",
  },
  {
    period: "February 2021 – July 2021",
    position: "Independent Legal Practitioner",
    institution: "Mumbai",
    summary:
      "Handled cases independently, prepared briefs, drafted legal documents, interacted with clients and maintained court case records.",
  },
  {
    period: "August 2016 – February 2021",
    position: "Assistant Professor Law & In-Charge Principal",
    institution: "KLE College of Law, Kalamboli, Navi Mumbai",
    summary:
      "Served as In-Charge Principal from August 2016 to November 2017. Organised national events (SPARKLE 2020), moot courts, seminars, and managed BCI compliances, admissions, and examinations.",
  },
  {
    period: "October 2015 – May 2016",
    position: "Visiting Faculty — Business Laws & Foundation Course",
    institution: "KLE Society's Science and Commerce, Kalamboli, Navi Mumbai",
    summary:
      "Conducted lectures for SY B.Com and FY B.Com / FY B.Sc. students. Member of Events Committee.",
  },
  {
    period: "January 2014 – August 2016",
    position: "Independent Legal Practitioner",
    institution: "Mumbai",
    summary:
      "Handled cases independently, maintained court case records, client interactions, and office administration.",
  },
  {
    period: "July 2008 – January 2014",
    position: "Head — Administration",
    institution: "Reliance Securities Ltd., Mumbai",
    summary:
      "Made administration processes ISO compliant. Part of top management Cost Rationalization team. Admin Department adjudged Best Department 2012–13. Received Management Special Bonus for 5 consecutive years.",
  },
  {
    period: "May 2006 – July 2008",
    position: "Assistant Manager — Legal & Admin",
    institution: "Speciality Restaurants Pvt. Ltd., Mumbai",
    summary:
      "Received Management Special Bonus for 2 consecutive years. Promoted to Assistant Manager within 6 months of joining.",
  },
  {
    period: "May 2000 – May 2006",
    position: "Officer — Admin",
    institution: "Samrat Trading, Mumbai",
    summary:
      "Joined as part-time admin assistant, progressed to full-time, and became authorized signatory within 3 years.",
  },
];

const academicCredentials = [
  { icon: Briefcase, value: "25+", label: "Years Experience" },
  { icon: GraduationCap, value: "Ph.D.", label: "in Law (2024)" },
  { icon: Award, value: "Gold Medal", label: "M.Phil (Law)" },
  { icon: Scale, value: "Certified", label: "Mediator & Arbitrator" },
  { icon: FileText, value: "16+", label: "Research Papers" },
  { icon: BookOpen, value: "7", label: "Books Edited" },
  { icon: Lightbulb, value: "6", label: "Patents Published" },
  { icon: PenTool, value: "2", label: "Design Registrations" },
  { icon: Trophy, value: "20+", label: "Awards & Honours" },
];

const recognitionHighlights = [
  {
    title: "Best Book Author Award",
    year: "2026",
    org: "International Academic & Research Association (IARA)",
  },
  {
    title: "Author of the Year Award",
    year: "2025",
    org: "EDVISHAN — EDU Achievement Award and Symposium",
  },
  {
    title: "Best Intellectual Property Rights Holder Award",
    year: "2024",
    org: "Wisdom Educare Academy — WEA Inspiring Educators",
  },
  {
    title: "Best Faculty Award",
    year: "2022",
    org: "Nature Science Foundation — National Faculty Award",
  },
  {
    title: "Best Professor Award",
    year: "2019",
    org: "ESN Awards",
  },
];

/* ─── COMPONENT ─── */

export function BiographyPageContent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <div ref={sectionRef}>
      {/* ══════ SECTION 1: PAGE HERO ══════ */}
      <section className="relative overflow-hidden bg-navy-900 pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-[#091422] to-navy-900" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.04)_0%,transparent_70%)] blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        </div>

        <div className="container-academic relative z-10 px-4 md:px-6">
          {/* Breadcrumb */}
          <FadeUp>
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-1.5 text-sm text-slate-400"
            >
              <Link href="/" className="transition-colors hover:text-gold">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <Link href="/about" className="transition-colors hover:text-gold">
                About
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <span className="text-gold/80">Biography</span>
            </nav>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/70 uppercase">
              Professional Narrative
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
              Biography
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-300/80 md:text-lg">
              Professional Journey, Academic Leadership and Legal Scholarship
            </p>
            <div className="mt-5 h-px w-16 bg-gradient-to-r from-gold/60 to-transparent" />
          </FadeUp>
        </div>
      </section>

      {/* ══════ SECTION 2: PROFESSIONAL PROFILE ══════ */}
      <section className="section-padding bg-navy-900">
        <div className="container-academic px-4 md:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[380px_1fr] lg:gap-16 xl:gap-20">
            {/* Left — Portrait & Identity */}
            <FadeUp className="mx-auto w-full max-w-sm lg:sticky lg:top-32 lg:mx-0">
              <div className="relative">
                <div className="absolute -inset-3 rounded-xl border border-gold/12" />
                <div className="absolute -left-3 -top-3 h-5 w-5 border-l-2 border-t-2 border-gold/30" />
                <div className="absolute -bottom-3 -right-3 h-5 w-5 border-b-2 border-r-2 border-gold/30" />

                <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-gold/15 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                  <Image
                    src={profile.portrait}
                    alt={profile.name}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
                </div>
              </div>

              <div className="mt-6 text-center lg:text-left">
                <h2 className="font-serif text-xl font-medium text-white">
                  {profile.name}
                </h2>
                <p className="mt-1 text-sm text-gold/80">
                  {profile.currentPosition.title}
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
                  {profile.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-gold/15 bg-gold/[0.05] px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Right — Biography Narrative */}
            <FadeUp delay={0.15}>
              <div className="space-y-6 text-base leading-[1.8] text-slate-300/90 md:text-[17px]">
                <p>
                  Mohammed Salim B. Khan is a distinguished legal academician, researcher, author,
                  mediator and administrator with more than 25 years of professional experience
                  spanning legal practice, corporate leadership, higher education, research and
                  intellectual property rights. He is a Certified Mediator and Arbitrator with
                  significant contributions to legal scholarship.
                </p>
                <p>
                  Currently serving as Assistant Professor (Senior Scale) at Presidency School of
                  Law, Presidency University, Bangalore, he has previously held academic leadership
                  positions at Parul University and KLE College of Law, where he also served as
                  In-Charge Principal from August 2016 to November 2017.
                </p>
                <p>
                  His scholarly contributions include 16 published research papers in national and
                  international journals, 9 book chapters in edited volumes, 7 books edited and
                  published, 6 published patents and 2 registered designs. His research interests
                  span Constitutional Law, Sports Law, Intellectual Property Rights, Human Rights,
                  Cyber Law, AI & Law, and Legal Education.
                </p>
                <p>
                  A Gold Medalist in M.Phil (Law) from Parul University (CGPA 8.73) and Ph.D.
                  holder in Law from Shri JJT University, Rajasthan (2024), his doctoral research
                  focused on &ldquo;A Critical Study on Prospects of Intellectual Property Rights
                  with Special Reference to Indian Sports Sector.&rdquo; He has also been awarded
                  an Honorary Doctorate in Peace Education by the United Nations World Peace
                  University, Washington, U.S.A.
                </p>
                <p>
                  Prior to academia, he held the position of Head — Administration at Reliance
                  Securities Ltd., Mumbai (2008–2014), where his department was adjudged the Best
                  Department for 2012–13, and he received Management Special Bonus for 5
                  consecutive years. He also served as Assistant Manager — Legal & Admin at
                  Speciality Restaurants Pvt. Ltd., Mumbai.
                </p>
                <p>
                  Recognized nationally and internationally, he has received more than 20 awards
                  including the Best Book Author Award (2026), Author of the Year Award (2025),
                  Best IPR Holder Award (2024), and the Young Scientist Award (2017). Through
                  teaching, research, mentorship and institutional leadership, he continues to
                  advance legal scholarship and academic excellence.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══════ SECTION 3: PROFESSIONAL TIMELINE ══════ */}
      <section className="section-padding relative bg-navy-800">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        </div>

        <div className="container-academic relative z-10 px-4 md:px-6">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/70 uppercase">
              Career Trajectory
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-white md:text-4xl">
              Professional Timeline
            </h2>
            <div className="mt-4 h-px w-16 bg-gradient-to-r from-gold/60 to-transparent" />
          </FadeUp>

          <div className="mt-12 space-y-0">
            {timelineMilestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }}
                className="group relative border-l border-gold/15 py-6 pl-8 transition-colors hover:border-gold/30"
              >
                {/* Dot */}
                <div className="absolute left-0 top-8 h-2.5 w-2.5 -translate-x-[5.5px] rounded-full border-2 border-gold/40 bg-navy-800 transition-colors group-hover:border-gold group-hover:bg-gold/20" />

                <p className="text-xs font-medium text-gold/70">{item.period}</p>
                <h3 className="mt-1 text-base font-semibold text-white md:text-lg">
                  {item.position}
                </h3>
                <p className="mt-0.5 text-sm text-slate-400">{item.institution}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400/80">
                  {item.summary}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SECTION 4: ACADEMIC PROFILE SNAPSHOT ══════ */}
      <section className="section-padding bg-navy-900">
        <div className="container-academic px-4 md:px-6">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/70 uppercase">
              Academic Profile
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-white md:text-4xl">
              Credentials &amp; Achievements
            </h2>
            <div className="mt-4 h-px w-16 bg-gradient-to-r from-gold/60 to-transparent" />
          </FadeUp>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {academicCredentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeUp key={item.label} delay={0.05 * index}>
                  <div className="group rounded-xl border border-gold/[0.12] bg-navy-800/40 p-5 transition-all duration-300 hover:border-gold/25 hover:shadow-[0_8px_30px_rgba(201,168,106,0.06)]">
                    <Icon className="mb-3 h-5 w-5 text-gold/60 transition-colors group-hover:text-gold" />
                    <p className="text-xl font-bold text-white">{item.value}</p>
                    <p className="mt-1 text-xs text-slate-400">{item.label}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ SECTION 5: AREAS OF SCHOLARSHIP ══════ */}
      <section className="section-padding relative bg-navy-800">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        </div>

        <div className="container-academic relative z-10 px-4 md:px-6">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/70 uppercase">
              Research Focus
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-white md:text-4xl">
              Areas of Scholarship
            </h2>
            <div className="mt-4 h-px w-16 bg-gradient-to-r from-gold/60 to-transparent" />
          </FadeUp>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {expertiseAreas.map((area, index) => (
              <FadeUp key={area} delay={0.04 * index}>
                <div className="group flex items-center gap-3 rounded-lg border border-gold/[0.1] bg-navy-900/50 px-4 py-3.5 transition-all duration-300 hover:border-gold/25 hover:bg-navy-900/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold/50 transition-colors group-hover:bg-gold" />
                  <span className="text-sm text-slate-300 transition-colors group-hover:text-white">
                    {area}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SECTION 6: SCHOLARLY PHILOSOPHY ══════ */}
      <section className="relative overflow-hidden bg-navy-900 py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.04)_0%,transparent_65%)] blur-[80px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        </div>

        <div className="container-academic relative z-10 px-4 text-center md:px-6">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/70 uppercase">
              Guiding Principles
            </p>
            <div className="mt-8">
              <span className="font-serif text-5xl leading-none text-gold/20" aria-hidden="true">
                &ldquo;
              </span>
            </div>
            <blockquote className="-mt-4 mx-auto max-w-3xl font-serif text-xl leading-relaxed text-white/90 md:text-2xl md:leading-relaxed">
              {profile.mission}
            </blockquote>
            <div className="mt-4">
              <span className="font-serif text-5xl leading-none text-gold/20" aria-hidden="true">
                &rdquo;
              </span>
            </div>
            <div className="mt-6 mx-auto h-px w-12 bg-gold/25" />
            <p className="mt-4 text-sm text-slate-400">— Mission Statement</p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-gold/[0.1] bg-navy-800/30 p-6 md:p-8">
              <p className="text-xs font-medium tracking-[0.2em] text-gold/60 uppercase">
                Vision
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-300/85 md:text-[17px]">
                {profile.vision}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════ SECTION 7: RECOGNITION SUMMARY ══════ */}
      <section className="section-padding relative bg-navy-800">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        </div>

        <div className="container-academic relative z-10 px-4 md:px-6">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/70 uppercase">
              Honours &amp; Recognition
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-white md:text-4xl">
              Recognition Summary
            </h2>
            <div className="mt-4 h-px w-16 bg-gradient-to-r from-gold/60 to-transparent" />
          </FadeUp>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recognitionHighlights.map((award, index) => (
              <FadeUp key={award.title} delay={0.06 * index}>
                <div className="group rounded-xl border border-gold/[0.12] bg-navy-900/40 p-6 transition-all duration-300 hover:border-gold/25 hover:shadow-[0_10px_30px_rgba(201,168,106,0.06)]">
                  <div className="mb-3 flex items-center justify-between">
                    <Trophy className="h-5 w-5 text-gold/60 transition-colors group-hover:text-gold" />
                    <span className="text-xs font-medium text-gold/70">
                      {award.year}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {award.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{award.org}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
