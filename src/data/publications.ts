export interface Book {
  id: string;
  title: string;
  publisher: string;
  role: "Authored" | "Edited" | "Contributed";
  date: string;
  isbn: string;
  coEditor?: string;
  location?: string;
  link?: string;
}

export interface BookChapter {
  id: string;
  title: string;
  chapterNo: string;
  bookTitle: string;
  publisher: string;
  date: string;
  isbn: string;
  doi?: string;
  scopusIndexed?: boolean;
  coAuthor?: string;
  location?: string;
}

export interface JournalPaper {
  id: string;
  title: string;
  journal: string;
  volume?: string;
  issue?: string;
  date: string;
  issn?: string;
  sjif?: string;
  ugcListed?: string;
  pageRange?: string;
}

export interface ConferencePresentation {
  id: string;
  title: string;
  event: string;
  organizer: string;
  date: string;
  location?: string;
  publication?: string;
}

export interface WorkshopAttended {
  id: string;
  title: string;
  organizer: string;
  date: string;
  location?: string;
}

export interface EditorialRole {
  id: string;
  role: string;
  journal: string;
  location?: string;
  issn?: string;
}

export interface ProfessionalMembership {
  id: string;
  name: string;
  details?: string;
}

export interface CertifiedRole {
  id: string;
  role: string;
  details: string;
}

export interface EventJudged {
  id: string;
  role: string;
  event: string;
  organizer: string;
  date: string;
}

export interface PressFeature {
  id: string;
  outlet: string;
  title: string;
  date: string;
}

// ─── BOOKS DATA ───
export const books: Book[] = [
  {
    id: "book-const-law",
    title: "Constitutional Laws of India",
    publisher: "A. G. Publishing House",
    role: "Authored",
    date: "June 2023",
    isbn: "978-81-19338-36-8",
    link: "https://www.amazon.in/Constitutional-Laws-India-Mohammed-Salim/dp/8119338367",
  },
  {
    id: "book-cyber-forensics",
    title: "Cyber Forensics: Techniques for Digital Evidence and Crime Investigation",
    publisher: "Vaagai International Publishing House",
    role: "Edited",
    date: "January 2026",
    isbn: "978-81-996906-9-1",
    location: "Coimbatore",
  },
  {
    id: "book-ai-iot",
    title: "Artificial Intelligence in IoT",
    publisher: "B R Publications",
    role: "Edited",
    date: "December 2025",
    isbn: "978-93-47231-57-5",
  },
  {
    id: "book-social-dev",
    title: "Social Development: Challenges and Solutions",
    publisher: "Bharti Publishing",
    role: "Edited",
    date: "March 2025",
    isbn: "978-93-48059-39-0",
  },
  {
    id: "book-ai-modern",
    title: "Artificial Intelligence: A Modern Approach",
    publisher: "B R International",
    role: "Edited",
    date: "October 2024",
    isbn: "978-93-6294-129-9",
  },
  {
    id: "book-animal-laws",
    title: "Changing Perspectives of Animal Laws",
    publisher: "Self-Published / Edited",
    role: "Edited",
    date: "2024", // Indicated in co-editor info
    isbn: "978-93-92926-14-3",
    coEditor: "Dr. Akil Ali Saiyed, Parul University",
  },
  {
    id: "book-human-rights",
    title: "Human Rights Issues and Challenges in Contemporary Society",
    publisher: "Bharti Publication",
    role: "Edited",
    date: "June 2022",
    isbn: "978-93-91681-47-0",
  },
  {
    id: "book-const-dev",
    title: "Recent Trends in Development of Constitutional Law in India",
    publisher: "Research Culture Society and Publication",
    role: "Edited",
    date: "2022",
    isbn: "978-81-937540-5-4",
  },
  {
    id: "book-law-justice",
    title: "Law and Justice",
    publisher: "ESN Publication",
    role: "Contributed",
    date: "2021",
    isbn: "978-93-90781-1",
  },
  {
    id: "book-medical-science",
    title: "Futuristic Trends in Medical Science",
    publisher: "IIP Series, Selfypage Developers Pvt. Ltd.",
    role: "Contributed",
    date: "2024",
    isbn: "978-93-6252-219-1",
    location: "Karnataka",
  },
];

// ─── BOOK CHAPTERS DATA ───
export const bookChapters: BookChapter[] = [
  {
    id: "chapter-digital-resilience",
    title: "A Holistic Model for Digital Resilience: Bridging Cybersecurity, Governance, and Risk Management",
    chapterNo: "3",
    bookTitle: "Building Resilient Digital Ecosystems: Security, Governance, and Transformation",
    publisher: "IGI Global Scientific Publishing",
    date: "March 2026",
    isbn: "9798337399683",
    doi: "10.4018/979-8-3373-9968-3.ch003",
    scopusIndexed: true,
    location: "New Delhi",
  },
  {
    id: "chapter-ai-authorship",
    title: "At the Edge of Authorship: Moral Rights and the Legal Identity of AI Generated Creativity",
    chapterNo: "7",
    bookTitle: "The Convergence of IPR, Artificial Intelligence and Cyber Law: Redefining Legal Frameworks in a Tech-Driven World",
    publisher: "Integrity Education India",
    date: "December 2025",
    isbn: "978-93-4508-01-1",
    location: "New Delhi",
  },
  {
    id: "chapter-blockchain-hr",
    title: "Enhancing Trust and Compliance in HR Through Blockchain",
    chapterNo: "10",
    bookTitle: "Impact of AI and Blockchain Technology in the Growth of Digital HRM Transformation",
    publisher: "BR International",
    date: "December 2025",
    isbn: "978-93-6294-702-4",
    location: "New Delhi",
  },
  {
    id: "chapter-ai-accountability",
    title: "Artificial Intelligence and the Evolving Landscape of Legal Accountability: Ethical, Legal, and Regulatory Issues",
    chapterNo: "3",
    bookTitle: "Modern Perspectives on Artificial Intelligence and Law",
    publisher: "IGI Global Scientific Publishing",
    date: "June 2025",
    isbn: "9798369395769",
    doi: "10.4018/979-8-3693-9576-9.ch003",
    scopusIndexed: true,
    location: "New Delhi",
  },
  {
    id: "chapter-criminal-law",
    title: "The Need for Modernising India's Legal Framework: Replacing the IPC, Cr.PC and Evidence Act",
    chapterNo: "4",
    bookTitle: "Contemporary Perspectives on Criminal Laws Reforms and Innovations in India",
    publisher: "Integrity Education",
    date: "April 2025",
    isbn: "978-93-48787-36-1",
    location: "New Delhi",
  },
  {
    id: "chapter-secularism-dev",
    title: "Secularism a Hindrance to Sustainable Development: The Impact of Religious Practices on Policy and Progress in India",
    chapterNo: "1",
    bookTitle: "Social Development: Challenges and Solutions",
    publisher: "Bharti Publication",
    date: "March 2025",
    isbn: "978-93-48059-39-0",
    location: "New Delhi",
  },
  {
    id: "chapter-human-rights-india-brazil",
    title: "Role of Constitutional Provisions in Addressing Unlawful Killings and Torture: A Comparative Study of India and Brazil",
    chapterNo: "8",
    bookTitle: "Brazil x India: Human Rights, Fundamental Rights and Labor Law",
    publisher: "Tirant Lo Blanch",
    date: "March 2025",
    isbn: "978-93-48059-39-0", // Note: structured resume content has this matching the social development book ISBN, we preserve it.
    location: "Valencia, Brazil",
  },
  {
    id: "chapter-eastern-western",
    title: "Eastern–Western Dispute",
    chapterNo: "6",
    bookTitle: "History of Education in Pre-Independence India",
    publisher: "Swaraj Prakashan",
    date: "January 2025",
    isbn: "978-93-48670-18-2",
    coAuthor: "Simab Hassan",
    location: "New Delhi",
  },
  {
    id: "chapter-minority-diaspora",
    title: "Safeguarding Minority Interests: The Role of Indian Laws in Protecting the Diaspora",
    chapterNo: "17",
    bookTitle: "Indian Diaspora: A Multifaceted Exploration",
    publisher: "Blue Rose Publishers",
    date: "January 2025",
    isbn: "978-93-6783-103-8",
    coAuthor: "Kulsum Mohammed Salim Khan",
    location: "New Delhi",
  },
  {
    id: "chapter-cyber-laws-business",
    title: "Impact of Cyber Laws in Information Security Management to Protect Business and Citizens",
    chapterNo: "Proceedings Chapter",
    bookTitle: "Proceedings of SIGMAA 2023",
    publisher: "Springer",
    date: "December 2024",
    isbn: "978-981-97-6352-8",
    doi: "10.1007/978-981-97-6352-8_43",
  },
  {
    id: "chapter-consumer-protection-digital",
    title: "Consumer Protection (Direct Selling) Rules, 2021: A Step Towards Fixing Accountability of the Direct Selling Companies",
    chapterNo: "5",
    bookTitle: "Consumer Protection Laws in Digital Era",
    publisher: "Satyam Law International",
    date: "January 2023",
    isbn: "978-81-19122-00-4",
    coAuthor: "Ayush Mudgal",
    location: "New Delhi",
  },
  {
    id: "chapter-wildlife-smuggling-asia",
    title: "Illegal Smuggling of Exotic Wildlife in Asia: A Threat to the Ecosystem",
    chapterNo: "16",
    bookTitle: "Contemporary Issues & Challenges in International Law: An Asian Perspective",
    publisher: "Satyam Law International",
    date: "June 2023",
    isbn: "978-81-19119-18-9",
    location: "New Delhi",
  },
  {
    id: "chapter-human-rights-food",
    title: "Emerging Trends of Human Right: Right to Eat Food of Choice and State Intervention",
    chapterNo: "1",
    bookTitle: "Human Rights Issues and Challenges in Contemporary Society",
    publisher: "Bharti Publications",
    date: "March 2022",
    isbn: "978-93-91681-47-0",
    coAuthor: "Upendra Tripathi",
    location: "New Delhi",
  },
  {
    id: "chapter-refugee-citizenship",
    title: "Refugee Problem and Citizenship Law",
    chapterNo: "26",
    bookTitle: "Citizenship in India and Refugees Problem",
    publisher: "Bharti Publication",
    date: "January 2021",
    isbn: "978-93-90818-02-0",
    location: "New Delhi",
  },
  {
    id: "chapter-real-estate-fraud",
    title: "Subvention Scheme of Real Estate: A Tool of Fraud",
    chapterNo: "Conference Proceedings Chapter",
    bookTitle: "International E-Conference on Economic Crimes and Fraud Management Proceedings",
    publisher: "Orange Book Publication",
    date: "October 2020",
    isbn: "978-93-91543-18-1",
  },
  {
    id: "chapter-prisoners-rights",
    title: "Rights of Prisoners: Vis-à-Vis Article 21 of the Indian Constitution",
    chapterNo: "26",
    bookTitle: "Issues and Challenges in Human Rights in Contemporary India: A Multi-Dimensional Approach (Vol. I)",
    publisher: "Mark Publisher",
    date: "2016",
    isbn: "n/a", // not listed, marked as jaipur
    location: "Jaipur",
  },
];

// ─── JOURNAL PAPERS DATA ───
export const journalPapers: JournalPaper[] = [
  {
    id: "journal-e-banking-fraud",
    title: "Legal Perspective of E-Banking Fraud in India",
    journal: "International Journal of Innovative Research in Engineering & Management (IJIREM)",
    volume: "9",
    issue: "2",
    date: "April 2022",
    issn: "2350-0557",
  },
  {
    id: "journal-land-maritime-zones",
    title: "Land and Maritime Zones: Peace in International Law",
    journal: "Research Diary – A National Research Journal of Social Legal and Other Multi-disciplinary Studies",
    date: "December 2021",
    issn: "2454-4183",
  },
  {
    id: "journal-regulating-media-laws",
    title: "Need for Regulating Media Laws in India: Need of the Hour",
    journal: "Vidya Bharati International Interdisciplinary Journal",
    ugcListed: "UGC CARE List Group-II",
    date: "October 2021",
    issn: "2319-4979",
  },
  {
    id: "journal-wildlife-smuggling",
    title: "Recent Trends in Wildlife Smuggling in India",
    journal: "International Journal of Advance and Innovation Research",
    sjif: "SJIF 2018: 7.36",
    date: "Jan-Mar 2021",
    issn: "2394-7780",
  },
  {
    id: "journal-transgender-persons-act",
    title: "The Transgender Persons (Protection of Rights) Act, 2019: A Critical Analysis",
    journal: "Scholarly Research Journal for Interdisciplinary Studies",
    sjif: "SJIF 2019: 6.38",
    date: "2020",
    issn: "2319-4766",
  },
  {
    id: "journal-wildlife-protection-old",
    title: "Wildlife Protection: Old Challenges in New Era",
    journal: "AJANTA: An International Multidisciplinary Quarterly Research Journal (AMIERJ)",
    ugcListed: "UGC Listed Journal No. 40776",
    date: "Oct-Dec 2018",
    issn: "2277-5730",
  },
  {
    id: "journal-real-estate-act",
    title: "The Real Estate (Regulation and Development) Act, 2013: A Comparative Study Between India and Dubai",
    journal: "AJANTA: An International Multidisciplinary Quarterly Research Journal (AMIERJ)",
    ugcListed: "UGC Listed Journal No. 40776",
    date: "2018",
    issn: "2277-5730",
  },
  {
    id: "journal-deonar-dumping",
    title: "Sustainable Development and Deonar Dumping Ground: A Source of Sustainable Living for Rag Pickers",
    journal: "CENTRUM",
    volume: "10",
    issue: "2(II)",
    date: "July 2017",
    issn: "2231-1475",
  },
  {
    id: "journal-hrm-challenges",
    title: "New Human Resource Management Challenges: A Paradigm of HR Managers",
    journal: "P.C.A.C.S. Research Journal",
    date: "April 2016",
    issn: "ISBN 978-81-926311-0-3", // listed in ISBN format in resume
  },
  {
    id: "journal-inclusive-education",
    title: "Inclusive Education in India: A Transition Phase — A Long Journey Ahead",
    journal: "PCERP Seminar Proceedings",
    date: "2016",
    issn: "ISBN 978-81-924684-9-5",
  },
  {
    id: "journal-tata-steel-csr",
    title: "Tata Steel – Pioneer of Corporate Social Responsibility in India",
    journal: "New Man International Journal of Multidisciplinary Studies",
    volume: "3",
    date: "May 2016",
    issn: "2318-1390",
  },
];

// ─── CONFERENCES & SEMINARS DATA ───
export const conferencePresentations: ConferencePresentation[] = [
  {
    id: "conf-trips-sdg",
    title: "Reconceptualising Pharmaceutical Intellectual Property Under TRIPS: Balancing Innovation Incentives with Global Public Health Needs",
    event: "International Conference on TRIPS and Sustainable Development Goals, 2030: Global South Perspectives",
    organizer: "DPIIT-IPR Chair & CIRF, Chanakya National Law University, Patna, Bihar",
    date: "22nd March 2026",
  },
  {
    id: "conf-sex-workers-rights",
    title: "Invisible Citizens: Upholding the Human Rights of Sex Workers in India",
    event: "National Seminar on Challenges in the Promotion and Promotion of Human Rights in India",
    organizer: "Bhupal Nobles' University, Udaipur, Rajasthan",
    date: "27th April 2024",
  },
  {
    id: "conf-data-protection-ecommerce",
    title: "Navigating the Legal Horizon: A Comprehensive Analysis of Data Protection and e-commerce in India",
    event: "One Day National Conference on Envisioning the Future of Commerce: Smart Technology Integration for Adapting to the Changing Business Landscape in the Digital Age",
    organizer: "Faculty of Commerce, Parul University, Vadodara, Gujarat",
    date: "24th February 2024",
  },
  {
    id: "conf-personality-rights-ailtc",
    title: "An Analysis of Provisions related to Personality Rights in Law",
    event: "AILTC National Conference on Legal Reforms in Contemporary Indian Context: A Holistic Approach 2023",
    organizer: "All India Law Teachers Congress and Law Centre-II, Delhi University",
    date: "16th-17th December 2023",
  },
  {
    id: "conf-ipr-sports-sector-g20",
    title: "An Analysis of IPR Laws in Indian Sports Sector",
    event: "International Conference on G20 Issues: Employment, Gender, Education, Skill, Global Health and Social Policies",
    organizer: "Institute of Languages, Shri JJT University, Churu, Rajasthan",
    date: "27th-28th June 2023",
  },
  {
    id: "conf-personality-rights-climate",
    title: "A Critical Analysis of Personality Rights of Sports Person under the Ambit of IPR Legislation in India",
    event: "One Day National Conference on Climate Change: Effective and Innovative Solutions for Achieving Net Zero",
    organizer: "Dharma Samaj College, Aligarh and Shri JJT University, Jhunjhunu, Rajasthan",
    date: "13th October 2023",
  },
  {
    id: "conf-legal-education-symposium",
    title: "Classroom Lawyers: Analysis of the Role of Problem Solving Method in Effective Legal Education",
    event: "ADHIGAM AAYAM An International Symposium on Innovative Learner-Centred Approaches to Teaching and Learning",
    organizer: "IQAC Cell, Parul University, Vadodara, Gujarat",
    date: "28th July 2023",
  },
  {
    id: "conf-consumer-law-protection",
    title: "Consumer Protection (Direct Selling) Rules, 2021: A Step Towards Fixing Accountability of the Direct Selling Companies",
    event: "International Conference on Consumer Law and Protection",
    organizer: "Parul Institute of Law, Parul University, Vadodara, Gujarat",
    date: "15th March 2022",
  },
  {
    id: "conf-maritime-zones-peaces",
    title: "Land and Maritime Zones: Peace in International Law",
    event: "Online National Conference On Education in Globalised Era: New Trends and Modern Approaches",
    organizer: "H.S.N.C Board's Kishanchand Chellaram Law College & Droit Penale Group",
    date: "22nd-23rd October 2021",
    publication: "Research Diary (Dec 2021)",
  },
  {
    id: "conf-regulating-media-symp",
    title: "Need for Regulating Media Laws in India: Need of the Hour",
    event: "One Day International Symposium on the Theme of Research Conclave on Industry 4.0: A Virtual Event 2021",
    organizer: "M.L. Dahanukar College of Commerce, Mumbai",
    date: "4th October 2021",
    publication: "Vidya Bharati International Interdisciplinary Journal",
  },
  {
    id: "conf-wildlife-smuggling-panvel",
    title: "Recent Trends in Wildlife Smuggling in India",
    event: "International Conference on Research and Development in Science, Technology and Management in the Current Era",
    organizer: "Kalsekar College, New Panvel",
    date: "21st February 2021",
    publication: "International Journal of Advance and Innovation Research",
  },
  {
    id: "conf-transgender-rights-kandivali",
    title: "The Transgender Persons (Protection of Rights) Act, 2019: A Critical Analysis",
    event: "One Day National Conference on Constitutionalism",
    organizer: "Kandivali Education Society's Shri Jayantilal H. Patel Law College, Kandivali, Mumbai",
    date: "1st December 2020",
    publication: "Scholarly Research Journal for Interdisciplinary Studies",
  },
  {
    id: "conf-wildlife-protection-kolhapur",
    title: "Wildlife Protection: Old Challenges in New Era",
    event: "2nd International Multidisciplinary Conference",
    organizer: "Devchand College, Arjunnagar, Kagal, Kolhapur",
    date: "30th October 2018",
    publication: "AJANTA (Oct-Dec 2018)",
  },
  {
    id: "conf-real-estate-dimr",
    title: "The Real Estate (Regulation and Development) Act, 2013: A Comparative Study Between India and Dubai — Lesson to be Learned",
    event: "International Multidisciplinary Conference on Convergence of ICT, Education, Business and Start-ups",
    organizer: "Innovation Society India & CESD in association with Dnyansagar Institute of Management and Research, Pune",
    date: "30th September 2018",
    publication: "AJANTA Journal",
  },
  {
    id: "conf-deonar-sustainable-ragpickers",
    title: "Deonar Dumping Ground as Source of Sustainable Business for the Rag Pickers",
    event: "UGC Sponsored One Day National Conference on Recent Trends in Business and Finance",
    organizer: "Pragati College of Arts and Commerce, Dombivli",
    date: "30th January 2018",
    publication: "Arhat Multidisciplinary International Education Research Journal (AMIERJ)",
  },
  {
    id: "conf-deonar-change-management",
    title: "Sustainable Development and Deonar Dumping Ground: A Source of Sustainable Living for Rag Pickers",
    event: "One Day National Conference on Management of Change — Issues and Challenges",
    organizer: "Reena Mehta College of Commerce and Management Studies, Bhayander",
    date: "23rd August 2017",
    publication: "CENTRUM (July 2017)",
  },
  {
    id: "conf-real-estate-nlsui",
    title: "The Real Estate (Regulation and Development) Bill 2013: A Win-Win Strategy",
    event: "Three-day International Conference on Liberalization and Globalization: Changing Legal Paradigm",
    organizer: "National Law School of India University, Bengaluru",
    date: "14th-16th July 2016",
  },
  {
    id: "conf-hrm-pillai",
    title: "New Human Resource Management Challenges: A Paradigm of HR Managers",
    event: "Conference on New Paradigms in Trade, Commerce and Service Sector",
    organizer: "Pillai College of Arts, Commerce & Science, New Panvel",
    date: "25th April 2016",
  },
  {
    id: "conf-inclusive-ed-pillai",
    title: "Inclusive Education in India: A Transition Phase — A Long Journey Ahead",
    event: "National Seminar on Inclusive Education: A System Re-Culturation",
    organizer: "Pillai College of Education and Research, New Panvel",
    date: "7th April 2016",
  },
  {
    id: "conf-tata-steel-csr-pragati",
    title: "Tata Steel — Pioneer of Corporate Social Responsibility in India",
    event: "UGC Sponsored One Day National Conference on Corporate Social Responsibility — Issues & Strategies",
    organizer: "Pragati College of Arts and Commerce, Dombivli",
    date: "17th February 2016",
  },
  {
    id: "conf-zhopadpatti-rajagiri",
    title: "Zhopadpatti Police Panchayat",
    event: "International Social Work Conference on World Peace and Social Work Education",
    organizer: "University of Maryland School of Social Work, USA & Rajagiri College of Social Sciences, Kochi",
    date: "10th-12th January 2005",
  },
  {
    id: "conf-tribal-rights-somaiya",
    title: "Rights of Tribals / Adivasis and Ecological Stability",
    event: "National Conference on Environmental Ethics for Sustainable Development",
    organizer: "K. J. Somaiya College, Mumbai",
    date: "1st-2nd September 2004",
  },
  {
    id: "conf-communal-inequality-sagar",
    title: "Communal Inequality a Threat to Nationalism, National Integration and National Security",
    event: "XXIV All India Conference of Indian Social Science Association",
    organizer: "Department of Sociology, Dr. H. S. Gour University, Sagar (M.P.)",
    date: "23rd-25th February 2004",
  },
  {
    id: "conf-gender-kalyani",
    title: "Gender Differentials in Education",
    event: "Inter University National Seminar on Youth Agenda in New Millennium",
    organizer: "University of Kalyani, West Bengal",
    date: "17th-18th February 2001",
  },
];

export const workshops: WorkshopAttended[] = [
  {
    id: "work-youth-parliament",
    title: "Third National Youth Parliament",
    organizer: "Mumbai University, Fort Campus",
    date: "24th January 2000",
  },
  {
    id: "work-personality-gs",
    title: "Personality Development Workshop for General Secretaries of Colleges",
    organizer: "Mumbai University, Fort Campus",
    date: "6th December 2000",
  },
  {
    id: "work-coins-technique",
    title: "Historic Indian Coins and their Manufacturing Technique",
    organizer: "Indian Institute of Research in Numismatic Studies at ICL College, Vashi",
    date: "3rd August 2001",
  },
  {
    id: "work-volunteers-tiss",
    title: "Training Programme for Volunteers in Social Work",
    organizer: "Tata Institute of Social Sciences (TISS), Deonar, Mumbai",
    date: "16th August - 16th October 2001",
  },
  {
    id: "work-adolescent-tiss",
    title: "Tapping Adolescent Potentials: Building Life Skills",
    organizer: "Tata Institute of Social Sciences (TISS), Deonar, Mumbai",
    date: "17th-20th October 2001",
  },
  {
    id: "work-volunteerism-tiss",
    title: "Responsive Volunteerism: Connecting with Changing Realities",
    organizer: "Tata Institute of Social Sciences (TISS), Deonar, Mumbai",
    date: "26th-28th March 2002",
  },
  {
    id: "work-bioinformatics-sies",
    title: "Bioinformatics and Drug Design",
    organizer: "SIES Institute of Environmental Management, Nerul, Navi Mumbai",
    date: "1st-2nd April 2005",
  },
  {
    id: "work-human-rights-tiss",
    title: "Human Rights Education for University / College Teachers",
    organizer: "Tata Institute of Social Sciences (TISS), Deonar, Mumbai",
    date: "26th-27th September 2005",
  },
  {
    id: "work-lean-six-sigma",
    title: "LEAN, TPS and SIX SIGMA",
    organizer: "Reliance Capital at REMI Institute, JVLR, Mumbai",
    date: "October 2005",
  },
  {
    id: "work-lifelong-learning",
    title: "Lifelong Learning for Sustainable Development and Social Change: Collaboration with Universities and NGOs",
    organizer: "Department of Adult and Continuing Education and Extension, Mumbai University",
    date: "9th February 2016",
  },
  {
    id: "work-methodology-ruparel",
    title: "Research Methodology",
    organizer: "Department of Commerce, The D.G. Ruparel College of Arts, Commerce and Science, Mahim, Mumbai",
    date: "11th-12th February 2016",
  },
  {
    id: "work-questionnaire-khandwala",
    title: "Tools and Techniques for Developing Questionnaire",
    organizer: "IQAC, Nagindas Khandwala College, Malad, Mumbai",
    date: "29th February 2016",
  },
  {
    id: "work-methodology-shetty",
    title: "Research Methodology & Data Analytics in Social Sciences",
    organizer: "IQAC, Bunts Sangha's S. M. Shetty College, Powai, Mumbai",
    date: "29th-30th March 2016",
  },
  {
    id: "work-family-law-nlsui",
    title: "Family Law Teaching and Practice in the Context of Constitutional Mandate of Uniform Civil Code",
    organizer: "IBA-CLE Chair NLSIU Bangalore, MK Nambiyar Academy Kochi & MNLU Mumbai",
    date: "14th-16th April 2016",
  },
  {
    id: "work-joy-research",
    title: "The Joy of Research",
    organizer: "Nirmala Memorial Foundation College, Kandivali, Mumbai",
    date: "17th April 2016",
  },
  {
    id: "work-methodology-ambedkar",
    title: "Research Methodology: Statistical Analysis",
    organizer: "IQAC, Dr. Ambedkar College of Commerce and Economics, Wadala, Mumbai",
    date: "23rd April 2016",
  },
  {
    id: "work-net-set-khandwala",
    title: "Preparation for NET / SET Examination",
    organizer: "IQAC, Nagindas Khandwala College, Malad, Mumbai",
    date: "3rd-5th May 2016",
  },
  {
    id: "work-sexual-harassment-kle",
    title: "Zero Tolerance for Sexual Harassment of Students and Women in Colleges Prevention, Prohibition and Redressal Act, 2013",
    organizer: "Internal Complaints Committee, KLE Society's Science and Commerce College, Kalamboli",
    date: "27th February 2017",
  },
  {
    id: "work-self-defence-kle",
    title: "Self Defence for Girls (District Level Workshop)",
    organizer: "Women Development Cell, KLE Society's Science and Commerce College, Kalamboli",
    date: "31st March 2017",
  },
  {
    id: "work-women-empowerment-mumbai",
    title: "Women Empowerment",
    organizer: "WDC University of Mumbai, Lala Lajpatrai College & Lala Lajpatrai College of Law, Mumbai",
    date: "29th September 2017",
  },
  {
    id: "work-naac-guidelines-kle",
    title: "Latest Refinement in NAAC Guidelines with Accentuation on SSR Writing (July 2017)",
    organizer: "IQAC, KLE Science and Commerce College, Kalamboli, Navi Mumbai",
    date: "13th January 2018",
  },
];

// ─── EDITORIAL ROLES DATA ───
export const editorialRoles: EditorialRole[] = [
  {
    id: "editor-real-estate",
    role: "Editor-in-Chief",
    journal: "National Journal of Real Estate Law",
  },
  {
    id: "editor-ipr",
    role: "Associate Editor-in-Chief",
    journal: "National Journal of Intellectual Property Rights Law",
  },
  {
    id: "editor-environment",
    role: "Associate Editor-in-Chief",
    journal: "National Journal of Environment Law",
  },
  {
    id: "editor-const-law",
    role: "Editorial Board Member",
    journal: "Journal of Constitutional Law and Jurisprudence",
  },
  {
    id: "editor-glacier",
    role: "Nominated Editorial Board Member",
    journal: "Glacier Journal of Scientific Research",
    location: "Ahmedabad",
    issn: "ISSN 2349-8498",
  },
];

// ─── PROFESSIONAL MEMBERSHIPS ───
export const professionalMemberships: ProfessionalMembership[] = [
  {
    id: "member-issa",
    name: "Indian Social Science Association (ISSA)",
    details: "Life Member, Agra",
  },
  {
    id: "member-ailtc",
    name: "All India Law Teachers Congress",
    details: "Life Member, New Delhi",
  },
  {
    id: "member-inba",
    name: "Indian National Bar Association",
    details: "Member, New Delhi",
  },
  {
    id: "member-mtc",
    name: "Management Teachers Consortium – Global (MTC Global)",
    details: "Life Member",
  },
  {
    id: "member-insc",
    name: "Institute of Scholars",
    details: "Life Member (Professional Membership No. InSc20200108)",
  },
];

// ─── CERTIFIED ROLES ───
export const certifiedRoles: CertifiedRole[] = [
  {
    id: "cert-mediator",
    role: "Certified Mediator / Conciliator",
    details: "40-hour training at Samvad Mediation Center, Lucknow",
  },
  {
    id: "cert-arbitrator",
    role: "Certified Arbitrator",
    details: "Professional mediation & arbitration certification",
  },
];

// ─── EVENTS JUDGED ───
export const eventsJudged: EventJudged[] = [
  {
    id: "judge-cci-aub",
    role: "Judge",
    event: "1st CCI–AUB National Moot Court Competition 2026",
    organizer: "Amity University Bangalore",
    date: "30th-31st March 2026",
  },
  {
    id: "judge-vis-premoot",
    role: "Arbitrator",
    event: "Asia-Pacific VIS Pre-Moot 2026",
    organizer: "Vis Moot Organizers",
    date: "March 2026",
  },
  {
    id: "judge-law-mantra",
    role: "Session Chair",
    event: "Two-Day E-International Seminar on 'Protection of Women and Children Rights'",
    organizer: "Law Mantra Trust",
    date: "19th-20th September 2025",
  },
  {
    id: "judge-amity-moot",
    role: "Judge",
    event: "Amity School of Law's Second National Moot Court Competition",
    organizer: "Amity University Maharashtra",
    date: "12th October 2019",
  },
  {
    id: "judge-abdul-kalam",
    role: "Judge",
    event: "1st & 2nd Dr. A.P.J. Abdul Kalam National Legal Essay Competition",
    organizer: "Probono India",
    date: "2017 & 2018",
  },
];

// ─── PRESS COVERAGE ───
export const pressFeatures: PressFeature[] = [
  {
    id: "press-toi",
    outlet: "The Times of India (New Bombay Plus)",
    title: "The Debate King Returns",
    date: "25 Nov 2000",
  },
  {
    id: "press-tct",
    outlet: "The Twin City Times",
    title: "Salim Khan of ICL Shines in USA",
    date: "Nov 2000",
  },
  {
    id: "press-vt",
    outlet: "Vashi Times",
    title: "ICL Student Excels in International Debating",
    date: "Nov 2000",
  },
  {
    id: "press-inb",
    outlet: "In New Bombay",
    title: "ICL Student Wins International Trophy",
    date: "Nov 2000",
  },
];
