export interface Award {
  id: string;
  title: string;
  year: string;
  organization: string;
  description: string;
  featured?: boolean;
}

export const awards: Award[] = [
  {
    id: "best-book-author-2026",
    title: "Best Book Author Award",
    year: "2026",
    organization: "International Golden Iconic Educationalist Awards — International Academic & Research Association (IARA)",
    description: "Awarded on 21st April 2026.",
    featured: true,
  },
  {
    id: "author-of-year-2025",
    title: "Author of the Year Award",
    year: "2025",
    organization: "EDU-Achievement Award and Symposium — EDVISHAN",
    description: "Awarded on 20th July 2025.",
    featured: true,
  },
  {
    id: "best-ipr-2024",
    title: "Best Intellectual Property Rights Holder Award",
    year: "2024",
    organization: "WEA Inspiring Educators of the Year — Wisdom Educare Academy",
    description: "Appreciation and recognition of Excellence in IPR Research, Chennai, Tamil Nadu — 5th September 2024.",
    featured: true,
  },
  {
    id: "ambedkar-2023",
    title: "Baba Saheb Dr. B. R. Ambedkar Excellence Award 2023",
    year: "2023",
    organization: "International Council for Education, Research and Training (ICERT)",
    description: "Excellence in Education and Social Welfare — 14th April 2023, Delhi (NCR).",
  },
  {
    id: "best-faculty-2022",
    title: "Best Faculty Award",
    year: "2022",
    organization: "Nature Science Foundation — National Faculty Award 2022",
    description: "Outstanding performance in teaching — 15th September 2022, Coimbatore.",
    featured: true,
  },
  {
    id: "best-professor-2019",
    title: "Best Professor Award",
    year: "2019",
    organization: "ESN Awards 2019",
    description: "Outstanding performance in teaching — 28th September 2019, Chennai.",
    featured: true,
  },
  {
    id: "nurturer-2018",
    title: "Nurturer of Talent Award",
    year: "2018",
    organization: "Innovation Society, India; Centre for Educational and Social Development — ASIA-ARAB Summits and Awards",
    description: "Providing good leadership and a conducive environment to groom young talents — 30th September 2018, Mumbai.",
  },
  {
    id: "world-peace-2018",
    title: "World Peace Excellence Award",
    year: "2018",
    organization: "World Achievers Foundation, Kolkata",
    description: "Outstanding contribution in Peace and Value Education — 22nd September 2018, Science City Auditorium, Kolkata.",
  },
];

export const featuredAwards = awards.filter((a) => a.featured);
