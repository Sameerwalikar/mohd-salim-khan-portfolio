export interface IPRItem {
  id: string;
  type: "Patent" | "Design";
  title: string;
  applicationOrDesignNumber: string;
  publicationOrGrantDate: string;
  jurisdiction?: string;
  featured?: boolean;
}

export const iprItems: IPRItem[] = [
  {
    id: "design-plant-analyzer",
    type: "Design",
    title: "AI Based Plant Extract Analyzing Device to Identify Disease",
    applicationOrDesignNumber: "Design Number: 469128-001, Certificate Number 233872",
    publicationOrGrantDate: "21.05.2026",
    jurisdiction: "India",
    featured: true,
  },
  {
    id: "patent-chatbot-education",
    type: "Patent",
    title: "Examining the Challenges and Opportunities of Integrating Chatbot into Educational Setting",
    applicationOrDesignNumber: "Application Number: 202421068112",
    publicationOrGrantDate: "18.10.2024",
    jurisdiction: "India",
    featured: true,
  },
  {
    id: "patent-entrepreneurial",
    type: "Patent",
    title: "Entrepreneurial Training and Factors that Affect the Interest in Entrepreneurial",
    applicationOrDesignNumber: "Application Number: 202421066108",
    publicationOrGrantDate: "04.10.2024",
    jurisdiction: "India",
    featured: true,
  },
  {
    id: "patent-english-ai",
    type: "Patent",
    title: "Methodologies to Evaluate English Language Skills via AI Evaluation Platforms",
    applicationOrDesignNumber: "Application Number: 202341090045",
    publicationOrGrantDate: "19.01.2024",
    jurisdiction: "India",
  },
  {
    id: "design-plant-monitoring-uk",
    type: "Design",
    title: "Plant Monitoring Device",
    applicationOrDesignNumber: "Design Number: 6314789",
    publicationOrGrantDate: "12.12.2023",
    jurisdiction: "United Kingdom",
    featured: true,
  },
  {
    id: "design-iot-payment",
    type: "Design",
    title: "Smart IoT Based Payment Device",
    applicationOrDesignNumber: "Design Number: 381774-001, Certificate Number 137521",
    publicationOrGrantDate: "19.03.2023",
    jurisdiction: "India",
    featured: true,
  },
  {
    id: "patent-renewable-energy",
    type: "Patent",
    title: "IoT and AI Based Renewable Energy Management System for Future Smart City",
    applicationOrDesignNumber: "Application Number: 202241067776",
    publicationOrGrantDate: "23.12.2022",
    jurisdiction: "India",
  },
  {
    id: "patent-risk-banking",
    type: "Patent",
    title: "An Innovative Paradigm in Risk Management in Banking Institutes",
    applicationOrDesignNumber: "Application Number: 202241032666",
    publicationOrGrantDate: "17.06.2022",
    jurisdiction: "India",
  },
  {
    id: "patent-blockchain-iot",
    type: "Patent",
    title: "Blockchain-Enabled Intelligent IoT Architecture with AI",
    applicationOrDesignNumber: "Application Number: 202141038370",
    publicationOrGrantDate: "24.09.2021",
    jurisdiction: "India",
  },
];

export const featuredIPR = iprItems.filter((item) => item.featured);
