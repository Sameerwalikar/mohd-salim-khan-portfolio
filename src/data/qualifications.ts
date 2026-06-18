export interface Qualification {
  id: string;
  degree: string;
  institution: string;
  year: string;
  distinction?: string;
  details?: string;
}

export const qualifications: Qualification[] = [
  {
    id: "ssc",
    degree: "S.S.C.",
    institution: "D. K. Marathe English School, Mumbai — Mumbai Board",
    year: "March 1992",
  },
  {
    id: "hsc",
    degree: "H.S.C.",
    institution: "N. G. Acharya And D. K. Marathe College, Mumbai — Mumbai Board",
    year: "March 1994",
  },
  {
    id: "dbm",
    degree: "D.B.M.",
    institution: "Prin. L. N. Welingkar Institute, Mumbai",
    year: "August 2000",
    distinction: "First Class",
  },
  {
    id: "ba",
    degree: "B.A. in History & Sociology",
    institution: "ICLES Motilal Jhunjhunwala College, Vashi, Navi Mumbai — Mumbai University",
    year: "May 2000",
    distinction: "First Class",
  },
  {
    id: "llb",
    degree: "L.L.B.",
    institution: "Government Law College, Churchgate, Mumbai — Mumbai University",
    year: "May 2006",
    distinction: "Second Class",
  },
  {
    id: "llm",
    degree: "L.L.M.",
    institution: "Amity Law School, Amity University Mumbai",
    year: "May 2016",
    distinction: "CGPA 6.8",
  },
  {
    id: "pgdat",
    degree: "P.G.D.A.T. (Post Graduate Diploma in Ambedkar Thoughts)",
    institution: "Mumbai University",
    year: "2016",
    distinction: "First Class",
  },
  {
    id: "honorary-phd",
    degree: "PhD (Honorius Causa) — Peace Education",
    institution: "United Nations World Peace University, Washington, U.S.A.",
    year: "",
  },
  {
    id: "mba",
    degree: "M.B.A. (Project Management)",
    institution: "Jaipur National University, Jaipur",
    year: "November 2018",
    distinction: "First Class",
  },
  {
    id: "mphil",
    degree: "M.Phil (Law)",
    institution: "Parul Institute of Law, Parul University, Vadodara",
    year: "May 2021",
    distinction: "Gold Medalist — CGPA 8.73",
  },
  {
    id: "phd",
    degree: "Ph.D. in Law",
    institution: "Shri JJT University, Rajasthan",
    year: "2024",
    details:
      "A Critical Study on Prospects of Intellectual Property Rights with Special Reference to Indian Sports Sector",
  },
  {
    id: "ma",
    degree: "M.A. (Rural Development)",
    institution: "K.B.P. Hinduja College, Affiliated to Mumbai University",
    year: "August 2024",
  },
];
