export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  megaMenu?: boolean;
}

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    megaMenu: true,
    children: [
      { label: "Biography", href: "/about#biography", description: "Professional narrative and scholarly journey" },
      { label: "Mission & Vision", href: "/about#mission", description: "Guiding principles and academic values" },
      { label: "Qualifications", href: "/about#qualifications", description: "Academic credentials and degrees" },
      { label: "Expertise", href: "/about#expertise", description: "Areas of legal scholarship" },
      { label: "Career Timeline", href: "/about#career-timeline", description: "Professional chronology" },
    ],
  },
  {
    label: "Academic Journey",
    href: "/academic-journey",
    megaMenu: true,
    children: [
      { label: "Presidency University", href: "/academic-journey#institution-presidency-university", description: "Current academic assignment" },
      { label: "Parul University", href: "/academic-journey#institution-parul-university", description: "Centre leadership & conferences" },
      { label: "KLE College of Law", href: "/academic-journey#institution-kle-college", description: "In-Charge Principal tenure" },
      { label: "Legal Practice", href: "/academic-journey#institution-independent-practice-2021", description: "Independent legal practitioner" },
      { label: "Corporate Career", href: "/academic-journey#institution-reliance-securities", description: "Reliance, Speciality & Samrat Trading" },
    ],
  },
  {
    label: "Research & Scholarship",
    href: "/research",
    megaMenu: true,
    children: [
      { label: "Research Papers", href: "/research?tab=journals#publications", description: "16 papers in national & international journals" },
      { label: "Conferences", href: "/research?tab=conferences#publications", description: "Papers presented at academic conferences" },
      { label: "FDPs & Workshops", href: "/research?tab=workshops#publications", description: "Faculty development programmes attended" },
    ],
  },
  {
    label: "Intellectual Contributions",
    href: "/intellectual-contributions",
    megaMenu: true,
    children: [
      { label: "Books", href: "/intellectual-contributions?tab=books#contributions", description: "7 edited & authored books" },
      { label: "Book Chapters", href: "/intellectual-contributions?tab=chapters#contributions", description: "9 chapters in edited volumes" },
      { label: "Patents & IPR", href: "/intellectual-contributions?tab=ipr#contributions", description: "6 patents published" },
      { label: "Design Registrations", href: "/intellectual-contributions?tab=ipr#contributions", description: "2 designs granted (India & UK)" },
    ],
  },
  {
    label: "Recognition",
    href: "/recognition",
    megaMenu: true,
    children: [
      { label: "Awards", href: "/recognition?tab=awards#honours", description: "National & international honours" },
      { label: "Certifications", href: "/recognition?tab=certifications#honours", description: "Certified mediator & arbitrator roles" },
      { label: "Academic Achievements", href: "/recognition?tab=debate#honours", description: "Gold Medal, rankings & distinctions" },
      { label: "Media", href: "/recognition?tab=media#honours", description: "Newspaper features & press coverage" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const downloadCV = {
  label: "Download CV",
  href: "#",
};
