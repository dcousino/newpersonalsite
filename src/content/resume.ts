import type {
  BrandKey,
  EducationEntry,
  ExperienceEntry,
  SkillGroup,
} from "./types";

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Scripts",
    items: ["C#", "TypeScript", "JavaScript", "PowerShell", "Python"],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      "React",
      "Redux",
      ".NET Core",
      "Node.js",
      "Apache Spark",
      "Entity Framework",
    ],
  },
  {
    label: "Platforms & Cloud",
    items: ["Azure", "AWS", "Windows", "Windows Server"],
  },
  {
    label: "Data & Analytics",
    items: ["MSSQL", "SQL DW", "ADLS Gen1/Gen2", "Power BI"],
  },
  {
    label: "DevOps & Tooling",
    items: ["Azure DevOps", "Terraform", "Azure Data Factory", "Git", "Agile"],
  },
];

const brandPalette: Record<BrandKey, string> = {
  microsoft: "#f25022",
  philips: "#0a5ed7",
  ups: "#351c15",
  usmc: "#a6192e",
};

export const experiences: ExperienceEntry[] = [
  {
    company: "Microsoft",
    role: "Senior Software Engineer",
    timeframe: "May 2019 – Present",
    brand: "microsoft",
    highlights: [
      "Built a custom monitoring and alerting platform with Azure Monitor, Functions, .NET Core, Entity Framework, and Databricks dashboards to automate incident response and surface customer impact.",
      "Delivered multiple full-stack React + .NET web apps for metadata curation, dataset discovery, and permission management.",
      "Migrated on-prem SQL Server workloads to Azure, redesigned access models, and optimized ETL pipelines for performance and simplicity.",
      "Architected a reusable permission management solution providing self-service access requests, role-based controls, and end-to-end auditing for data engineering teams.",
    ],
  },
  {
    company: "Philips Patient Care & Analytics",
    role: "Software Engineer",
    timeframe: "Sep 2018 – May 2019",
    brand: "philips",
    highlights: [
      "Led automated CI/CD pipelines with Azure DevOps, Terraform, and PowerShell DSC, reducing deployment friction.",
      "Monitored Azure infrastructure using metrics and logs, cutting roughly $40K in annual cloud spend by automating idle resource cleanup.",
      "Introduced containerized microservices to replace a monolith, boosting scalability and developer velocity.",
      "Built Angular UI components for patient ventilation management and managed Azure DevOps repositories and branching.",
    ],
  },
  {
    company: "United Parcel Service",
    role: "Intermediate Application Developer",
    timeframe: "Feb 2017 – Aug 2018",
    brand: "ups",
    highlights: [
      "Enabled a transition to a blackboard/actor design pattern by developing, testing, and documenting reusable actors.",
      "Stood up and maintained integration environments with robust messaging queues.",
      "Shipped Angular + .NET Core web apps and middleware services supporting secure, multi-protocol integrations.",
    ],
  },
  {
    company: "United States Marine Corps",
    role: "Presidential Helicopter Squadron QA Rep & Production Control",
    timeframe: "Mar 2004 – May 2016",
    brand: "usmc",
    highlights: [
      "Oversaw quality assurance for critical aviation systems and joint oil analysis programs.",
      "Developed data-driven test plans and automated scenarios across embedded devices and support software.",
    ],
  },
];

export const educationHistory: EducationEntry[] = [
  {
    school: "University of Maryland Global Campus",
    credential: "B.S. Application Development and Security",
    year: "Dec 2018",
  },
  {
    school: "Microsoft Software and Systems Academy",
    credential: "Cloud Application Development Program",
    year: "Feb 2016",
  },
];

export const certifications: string[] = [
  "Microsoft Specialist: Developing Microsoft Azure Solutions (2016)",
  "Microsoft Specialist: Programming in C# (2015)",
  "Microsoft Certified Professional (2015)",
  "Microsoft Technical Associate: Software Testing Fundamentals (2015)",
];

export const contactLinks = {
  phone: { label: "Phone", value: "408-483-7029", href: "tel:14084837029" },
  email: {
    label: "Email",
    value: "daniel.cousino27@gmail.com",
    href: "mailto:daniel.cousino27@gmail.com",
  },
  website: {
    label: "Website",
    value: "danielcousino.com",
    href: "https://www.danielcousino.com",
  },
  linkedin: {
    label: "LinkedIn",
    value: "linkedin.com/in/daniel-cousino-8b826410",
    href: "https://www.linkedin.com/in/daniel-cousino-8b826410",
  },
};

export const brandColors = brandPalette;
