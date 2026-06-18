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
    label: "Research",
    href: "#",
    megaMenu: true,
    children: [
      { label: "Research Papers", href: "#", description: "Coming soon" },
      { label: "Expertise Areas", href: "/about#expertise", description: "Scholarly focus areas" },
    ],
  },
  {
    label: "Publications",
    href: "#",
    megaMenu: true,
    children: [
      { label: "Books", href: "#", description: "Coming soon" },
      { label: "Book Chapters", href: "#", description: "Coming soon" },
    ],
  },
  { label: "Books", href: "#" },
  { label: "Patents & IPR", href: "#" },
  { label: "Awards", href: "#" },
  { label: "Events", href: "#" },
  { label: "Certifications", href: "#" },
  { label: "Media", href: "#" },
  { label: "Contact", href: "#" },
];

export const downloadCV = {
  label: "Download CV",
  href: "#",
};
