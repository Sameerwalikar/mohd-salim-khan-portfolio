export interface CareerMilestone {
  id: string;
  year: string;
  organization: string;
  role: string;
  period: string;
  type: "academic" | "corporate" | "practice";
  responsibilities: string[];
  achievements: string[];
  contributions: string[];
  notableCredits: string[];
}

export const careerMilestones: CareerMilestone[] = [
  {
    id: "presidency-university",
    year: "2025",
    organization: "Presidency School of Law, Presidency University",
    role: "Assistant Professor (Senior Scale) — Law",
    period: "January 2025 – Present",
    type: "academic",
    responsibilities: [
      "Teaching law at Presidency School of Law, Presidency University, Bangalore",
      "Coordinating Sports Committee activities",
      "Coordinating Undergraduate Dissertation programmes",
      "Co-Coordinating Internship and Placement initiatives",
    ],
    achievements: [
      "Appointed Assistant Professor (Senior Scale) at Presidency University from 15/01/2025",
    ],
    contributions: [
      "Advancing legal scholarship and academic leadership at Presidency School of Law",
      "Supporting student dissertation, internship, and placement frameworks",
      "Contributing to sports committee coordination within the law school",
    ],
    notableCredits: [
      "Assistant Professor Law (Senior Scale)",
      "Coordinator Sports Committee",
      "Coordinator UG Dissertation",
      "Co-Coordinator Internship and Placement",
    ],
  },
  {
    id: "parul-university",
    year: "2021",
    organization: "Parul Institute of Law, Parul University",
    role: "Assistant Professor — Law",
    period: "August 2021 – November 2024",
    type: "academic",
    responsibilities: [
      "Assistant Professor of Law at Parul Institute of Law",
      "Co-Coordinator, Centre for Post Graduate Legal Studies (CPGLS)",
      "Coordinator, Centre for Constitutional Law and Policy (CCLP)",
      "Coordinator, Centre of Excellence in Sports Law Policy and Governance (CESLPG)",
      "In-Charge Criteria 5, IQAC (NAAC)",
      "Member of Disciplinary Committee, Moot Court Committee, Legal Aid, Pro Bono Club, Sports Committee, Legal Aid Committee, Armed Force Motivation Cell, G20 Cell",
      "Institute Representative for Disciplinary Task Force",
    ],
    achievements: [
      "Organised National Seminar on 'Assessing 75 Years of Human Rights in India'",
      "Organised International Conference on 'Changing Landscapes in Animal Law'",
      "Organised International Conference on 'The Multimodal Conundrums of Sports Law: Towards a Lively Pitch in India'",
      "Conducted Certificate Course on Constitutional Law and Contemporary Developments",
      "Conducted 'Legal Start Up' credit course for Management Students",
      "Conducted Webinars, Seminars, Debate, Elocution, National Client Counselling Competition, National Moot Court",
      "Organised 'Samvidhan Pe Charcha' — 3-day national event with eminent speakers from across India",
      "Organised Samvidhaan Pe Charcha National Moot Court Competition (12–16 September 2024)",
    ],
    contributions: [
      "Led multiple centres of excellence in constitutional law and sports law policy",
      "Strengthened institutional research culture through national and international conferences",
      "Mentored students through moot courts, debates, and legal aid initiatives",
    ],
    notableCredits: [
      "Co-Coordinator (CPGLS) Centre for Post Graduate Legal Studies",
      "Coordinator (CCLP) Centre for Constitutional Law and Policy",
      "Coordinator (CESLPG) Centre of Excellence in Sports Law Policy and Governance",
      "In-Charge Criteria 5, IQAC (NAAC)",
    ],
  },
  {
    id: "independent-practice-2021",
    year: "2021",
    organization: "Independent Legal Practitioner — Mumbai",
    role: "Independent Legal Practitioner",
    period: "February 2021 – July 2021",
    type: "practice",
    responsibilities: [
      "Handled cases independently",
      "Drafting legal documents and preparing case briefs",
      "Client interaction and consultation",
      "Maintaining court case records and follow-ups",
    ],
    achievements: [
      "Successfully managed independent legal practice during transition period",
    ],
    contributions: [
      "Applied academic legal expertise to practical litigation and advisory work",
    ],
    notableCredits: [
      "Handled Cases Independently",
      "Drafting and Client Interaction",
      "Court Case Records and Follow-ups",
    ],
  },
  {
    id: "kle-college",
    year: "2016",
    organization: "KLE College of Law, Kalamboli, Navi Mumbai",
    role: "Assistant Professor — Law",
    period: "August 2016 – February 2021",
    type: "academic",
    responsibilities: [
      "In-Charge Principal of KLE Society's KLE College of Law, Kalamboli (22/08/2016 – 05/11/2017)",
      "BCI Registration and Compliances",
      "University and Department of Higher Education Compliances, AISHE Compliance",
      "Compliance for Admission Review Committee, Fee Regulatory Committee and CET Cell",
      "Coordination with administration for Admissions, Counselling, Discipline",
      "Time Table Coordinator, Disciplinary Committee In-Charge",
      "In-Charge of Examination, Paper Settings and Corrections",
      "Visiting Faculty — Business Laws & Foundation Course at KLE Society's Science and Commerce (October 2015 – May 2016)",
    ],
    achievements: [
      "Arranged Debate, Elocution, National Client Counselling Competition, National Seminar, National Moot Court",
      "Organised week-long college event SPARKLE 2020",
      "Organised Annual Event and Convocation Ceremony",
      "Organised 1st National Law Fest SPARKLE 2019 with National Debate, Seminar, and Moot Court Competition",
    ],
    contributions: [
      "Led institutional administration as In-Charge Principal",
      "Ensured regulatory compliance with BCI and university requirements",
      "Built student engagement through national-level academic competitions",
    ],
    notableCredits: [
      "In-Charge Principal — KLE College of Law, Kalamboli",
      "BCI and University Compliances",
      "Examination and Paper Setting In-Charge",
      "Member Events Committee (Visiting Faculty)",
    ],
  },
  {
    id: "independent-practice-2014",
    year: "2014",
    organization: "Independent Legal Practitioner — Mumbai",
    role: "Independent Legal Practitioner",
    period: "January 2014 – August 2016",
    type: "practice",
    responsibilities: [
      "Handled cases independently with drafting and client interaction",
      "Preparing briefs for cases",
      "Maintaining court case records and follow-ups",
      "Office administration",
    ],
    achievements: [
      "Established independent legal practice after corporate career",
    ],
    contributions: [
      "Bridged corporate administration experience with legal practice",
    ],
    notableCredits: [
      "Independent Case Handling",
      "Drafting and Brief Preparation",
      "Office Administration",
    ],
  },
  {
    id: "reliance-securities",
    year: "2008",
    organization: "Reliance Securities Ltd., Mumbai",
    role: "Head — Administration",
    period: "July 2008 – January 2014",
    type: "corporate",
    responsibilities: [
      "Led administration department operations at pan-India level",
      "Part of core team formed by Top Management for Cost Rationalization",
      "ISO compliance for Travel, Telephony, and AMC processes",
      "Vendor payment management with in-house IT Team",
      "Branch asset tagging and office administration",
    ],
    achievements: [
      "Administration department adjudged Best Department for 2012–13",
      "Created online complaint tracker with in-house IT Team",
      "Vendor payments made online with IT Team support",
      "Successfully completed ISO training for self and 4 Zonal Admin Managers",
      "Acknowledged by Management's Special Bonus for 5 consecutive years",
      "Promoted to Administration Head",
      "Successfully completed Branch Asset Tagging within management timeframe",
    ],
    contributions: [
      "Made administration department ISO compliant",
      "Implemented cost rationalization strategies",
      "Developed digital systems for vendor payments and complaint tracking",
    ],
    notableCredits: [
      "Administration Department — ISO Compliant",
      "Best Department Award 2012–13",
      "5 Consecutive Years Management Special Bonus",
      "Promoted to Administration Head",
    ],
  },
  {
    id: "speciality-restaurants",
    year: "2006",
    organization: "Speciality Restaurants Pvt. Ltd., Mumbai",
    role: "Assistant Manager — Legal & Admin",
    period: "May 2006 – July 2008",
    type: "corporate",
    responsibilities: [
      "Legal and administrative functions for restaurant operations",
      "Office and branch support administration",
    ],
    achievements: [
      "Acknowledged by Management's Special Bonus for 2 consecutive years",
      "Promoted to Assistant Manager within 6 months of joining",
    ],
    contributions: [
      "Combined legal knowledge with administrative management in corporate setting",
    ],
    notableCredits: [
      "Promoted to Assistant Manager in 6 months",
      "2 Consecutive Years Management Special Bonus",
    ],
  },
  {
    id: "samrat-trading",
    year: "2000",
    organization: "Samrat Trading, Mumbai",
    role: "Officer — Admin",
    period: "May 2000 – May 2006",
    type: "corporate",
    responsibilities: [
      "Administrative operations and office management",
      "Branch support functions",
      "Procurement strategies and purchase schedules from vendors",
      "New business set up, office set up, closure and winding up at Pan India level",
    ],
    achievements: [
      "Joined as part-time admin assistant, transitioned to full-time from second year",
      "Made authorized signatory by end of 3rd year",
    ],
    contributions: [
      "Built foundational administrative expertise over 6 years",
      "Developed procurement and pan-India office management capabilities",
    ],
    notableCredits: [
      "Authorized Signatory by 3rd Year",
      "Part-time to Full-time Career Progression",
      "Pan India Office Operations",
    ],
  },
];

export const academicJourneyOrder = [
  "presidency-university",
  "parul-university",
  "independent-practice-2021",
  "kle-college",
  "independent-practice-2014",
  "reliance-securities",
  "speciality-restaurants",
  "samrat-trading",
] as const;

export const timelineYears = ["2025", "2021", "2016", "2014", "2008", "2006", "2000"] as const;

export const getMilestoneById = (id: string) =>
  careerMilestones.find((m) => m.id === id);

export const getMilestonesByYear = (year: string) =>
  careerMilestones.filter((m) => m.year === year);
