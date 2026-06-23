"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ChevronDown, Scale, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { NavItem } from "@/data/navigation";
import { downloadCV } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

// Reorganized navigation structure reflecting Prof. Dr. M.S.B. Khan's
// academic profile — grouped by scholarly significance, not flat listing.
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    megaMenu: true,
    children: [
      { label: "Biography", href: "/about/biography", description: "Professional narrative and scholarly journey" },
      { label: "Mission & Vision", href: "/about#mission", description: "Guiding principles and academic values" },
      { label: "Academic Qualifications", href: "/about#qualifications", description: "Degrees, diplomas and credentials" },
      { label: "Areas of Expertise", href: "/about#expertise", description: "Legal scholarship and focus areas" },
      { label: "Professional Profile", href: "/about#career-timeline", description: "Career overview and milestones" },
    ],
  },
  {
    label: "Career Journey",
    href: "/academic-journey",
    megaMenu: true,
    children: [
      { label: "Presidency University", href: "/academic-journey#institution-presidency-university", description: "Current assignment — Sr. Scale, Bangalore" },
      { label: "Parul University", href: "/academic-journey#institution-parul-university", description: "Centre leadership & conferences" },
      { label: "KLE College of Law", href: "/academic-journey#institution-kle-college", description: "In-Charge Principal & faculty" },
      { label: "Legal Practice", href: "/academic-journey#institution-independent-practice-2021", description: "Independent legal practitioner" },
      { label: "Corporate Leadership", href: "/academic-journey#institution-reliance-securities", description: "Reliance Securities, Speciality Restaurants & more" },
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

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "#") return false;
  const base = href.split("#")[0];
  return base !== "" && pathname.startsWith(base);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "glass-nav py-3" : "glass-nav-transparent py-5"
      )}
    >
      <nav className="container-academic flex items-center justify-between gap-8 px-6 md:px-8">
        {/* Logo / Brand */}
        <Link href="/" className="group flex shrink-0 items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-navy-800 text-gold transition-all duration-300 group-hover:border-gold/60 group-hover:shadow-[0_0_20px_rgba(201,168,106,0.2)]">
            <Scale className="h-5 w-5" />
          </div>
          <div className="hidden sm:block">
            <p className="text-[14px] font-semibold leading-tight tracking-wide text-foreground">
              Prof. Dr. M.S.B. Khan
            </p>
            <p className="text-[10px] tracking-[0.2em] text-gold/70 uppercase">
              Academic Legacy
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "animated-underline flex items-center gap-1 px-3 py-2.5 text-[13px] font-medium tracking-wide transition-colors",
                  isActive(pathname, item.href)
                    ? "text-gold"
                    : "text-foreground/80 hover:text-gold"
                )}
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      openDropdown === item.label && "rotate-180"
                    )}
                  />
                )}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {item.children && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "absolute left-0 top-full z-50 pt-2",
                      item.megaMenu ? "min-w-[320px]" : "min-w-[220px]"
                    )}
                  >
                    <div className="overflow-hidden rounded-xl border border-gold/15 bg-navy-900/95 shadow-[var(--card-shadow-hover)] backdrop-blur-xl">
                      {item.megaMenu && (
                        <div className="border-b border-gold/10 px-4 py-3">
                          <p className="text-sm font-semibold text-gold">
                            {item.label}
                          </p>
                        </div>
                      )}
                      <div className={cn("py-2", item.megaMenu && "grid gap-0")}>
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="group block px-4 py-3 transition-colors hover:bg-navy-800/80"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <span className="block text-sm font-medium text-foreground group-hover:text-gold">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="mt-0.5 block text-xs text-muted">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Download CV button — Desktop */}
        <div className="hidden shrink-0 xl:block">
          <Button asChild variant="secondary" size="sm" className="btn-glow gap-2">
            <Link href={downloadCV.href}>
              <Download className="h-4 w-4" />
              {downloadCV.label}
            </Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="xl:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6 text-foreground" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-6 flex flex-col gap-1">
              {/* Mobile header */}
              <div className="mb-6 flex items-center gap-3 border-b border-gold/10 pb-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-gold/30">
                  <Image
                    src={profile.portrait}
                    alt={profile.shortName}
                    fill
                    className="object-cover object-top"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">
                    {profile.shortName}
                  </p>
                  <p className="text-xs text-gold/70">Academic Legacy Platform</p>
                </div>
              </div>

              {/* Mobile nav items */}
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className="block border-b border-gold/10 py-3.5 text-[15px] font-medium text-foreground transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                  {item.children && (
                    <div className="ml-3 border-l border-gold/10 pl-4">
                      {item.children.map((child) => (
                        <SheetClose asChild key={child.label}>
                          <Link
                            href={child.href}
                            className="block py-2.5 text-sm text-muted transition-colors hover:text-gold"
                          >
                            {child.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Mobile download CV */}
              <SheetClose asChild>
                <Button asChild variant="secondary" className="mt-6 w-full btn-glow">
                  <Link href={downloadCV.href}>
                    <Download className="h-4 w-4" />
                    {downloadCV.label}
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
