// ============================================================================
// Portfolio data — Moin Noorani, Business Analyst & AI Solutions Lead
// ============================================================================

export type Project = {
  slug: string;
  title: string;
  icon: ProjectIcon;
  domain: string;
  client: string;
  shortDesc: string;
  longDesc: string;
  highlights: string[];
  impact: { label: string; value: string }[];
  tools: string[];
  deliverables: string[];
  accent: "orange" | "coral" | "yellow" | "mint" | "lilac";
};

// Icon key shared between project cards and detail view. Maps to a Lucide
// icon in src/lib/icon-map.tsx.
export type ProjectIcon =
  | "truck"
  | "factory"
  | "boxes"
  | "workflow"
  | "flask"
  | "code-review";

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  summary: string;
  bullets: string[];
  accent: "orange" | "coral" | "yellow";
};

export type SkillGroup = {
  title: string;
  icon: SkillIcon;
  accent: "orange" | "coral" | "yellow";
  skills: string[];
};

export type SkillIcon = "clipboard" | "truck" | "wrench";

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  note?: string;
  accent: "orange" | "coral" | "yellow" | "mint" | "lilac";
};

export type RoadmapPhase = {
  index: string;
  status: "completed" | "current" | "next";
  title: string;
  description: string;
  accent: "mint" | "orange" | "lilac";
};

// ---------------------------------------------------------------------------
// Personal info
// ---------------------------------------------------------------------------

export const personal = {
  name: "Moin Noorani",
  firstName: "Moin",
  role: "Business Analyst & AI Solutions Lead",
  tagline: "I deliver data-driven ERP, analytics & AI workflow solutions.",
  longPitch:
    "Business Analyst delivering data-driven ERP, automation, analytics, and AI workflow solutions across supply chain, procurement, inventory, and manufacturing domains. Reduced inventory reporting time by 40%, supported 10+ ERP rollouts spanning 200+ users, automated KPI pipelines saving 8+ hrs/week, and shipped an AI code review agent that cut review cycle time by 45%.",
  location: "India (Open to Relocate)",
  phone: "+91 70969 92161",
  email: "moinnoorani85@gmail.com",
  linkedin: "https://linkedin.com/in/moinnoorani",
  portfolio: "https://moinnoorani.netlify.app",
  resumePath: "/MoinNoorani_SU.pdf",
};

// Career start date — used to compute the dynamic experience duration shown
// across the portfolio. Renders the actual elapsed time from this date to
// "now", so the site always reflects the correct tenure without manual edits.
// Moin started his first BA role at Codes Technology in October 2024.
export const careerStartDate = new Date("2024-10-01T00:00:00");

// ---------------------------------------------------------------------------
// Marquee tags
// ---------------------------------------------------------------------------

export const marqueeTags = [
  "BRD",
  "SRS",
  "FRS",
  "USE CASES",
  "SQL",
  "POWER BI",
  "PYTHON",
  "BIGQUERY",
  "EXCEL (ADVANCED)",
  "ERP",
  "PROCUREMENT",
  "INVENTORY",
  "DEMAND FORECASTING",
  "WAREHOUSE OPS",
  "LOGISTICS",
  "AGILE / SCRUM",
  "JIRA",
  "CONFLUENCE",
  "DRAW.IO",
  "UAT",
  "PROCESS MAPPING",
  "GAP ANALYSIS",
  "AI CODE REVIEW",
  "LLM WORKFLOWS",
];

// ---------------------------------------------------------------------------
// Skill groups
// ---------------------------------------------------------------------------

export const skillGroups: SkillGroup[] = [
  {
    title: "BA & Requirements",
    icon: "clipboard",
    accent: "orange",
    skills: [
      "BRD, SRS, FRS",
      "Use Cases",
      "User Stories & Acceptance Criteria",
      "Process Mapping",
      "Gap Analysis",
      "UAT — Test Cases & Defect Mgmt",
    ],
  },
  {
    title: "Supply Chain & Domain",
    icon: "truck",
    accent: "coral",
    skills: [
      "Procurement & Supplier Mgmt",
      "Inventory & Order Fulfilment",
      "Demand Forecasting Concepts",
      "Warehouse & Logistics Ops",
      "Manufacturing & Production Planning",
      "ERP End-to-End Rollouts",
    ],
  },
  {
    title: "Tools & Delivery",
    icon: "wrench",
    accent: "yellow",
    skills: [
      "SQL, Python",
      "Power BI, BigQuery",
      "Excel (Advanced)",
      "Jira, Confluence, draw.io",
      "Agile / Scrum, Sprint Planning",
      "Stakeholder & Vendor Management",
    ],
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    slug: "ai-code-review-agent",
    title: "AI Code Review Agent",
    icon: "code-review",
    domain: "AI / DevTools",
    client: "Internal Engineering Team",
    shortDesc:
      "LLM-powered code review agent that auto-reviews pull requests, flags risks, and suggests fixes — cut average review cycle time by 45%.",
    longDesc:
      "Scoped and shipped an AI Code Review Agent that plugs into the engineering team's pull-request workflow. The agent reads each diff, classifies changes by risk and intent, and posts structured review comments covering correctness, security, style, and test coverage. Moin owned requirements engineering end-to-end: ran discovery with engineering leads and QA, authored the BRD and SRS, defined the prompt and review taxonomy, and wrote acceptance criteria for each review category. The agent now handles first-pass reviews on every PR, letting senior engineers focus on architecture and edge cases.",
    highlights: [
      "Scoped an LLM-powered agent that auto-reviews pull requests and posts structured feedback on diffs.",
      "Authored BRD, SRS, and a review taxonomy covering correctness, security, style, and test coverage.",
      "Defined acceptance criteria and evaluation workflows for each review category.",
      "Cut average PR review cycle time by 45% by automating first-pass reviews.",
    ],
    impact: [
      { label: "Cycle time reduction", value: "45%" },
      { label: "Review categories", value: "Correctness · Security · Style · Tests" },
      { label: "Coverage", value: "Every PR" },
    ],
    tools: ["Python", "LLM APIs", "GitHub API", "BRD", "SRS", "Acceptance Criteria"],
    deliverables: [
      "Business Requirements Document (BRD)",
      "Software Requirements Specification (SRS)",
      "Review taxonomy & prompt specification",
      "Acceptance criteria and evaluation runbook for each category",
    ],
    accent: "lilac",
  },
  {
    slug: "fleet-management-system",
    title: "Fleet Management System",
    icon: "truck",
    domain: "Logistics",
    client: "North America",
    shortDesc:
      "Real-time fleet tracking platform with ELD compliance and driver monitoring. Reduced scope ambiguity by 35%.",
    longDesc:
      "Led requirements engineering for a real-time fleet tracking platform serving North American logistics operations. The system needed to comply with Electronic Logging Device (ELD) regulations while giving dispatchers live visibility into driver behaviour, hours-of-service, and vehicle health. Moin ran structured workshops with operations, safety, and engineering stakeholders to convert ambiguous operational needs into a precise, testable backlog.",
    highlights: [
      "Authored user stories, process flows, and wireframes for a real-time tracking and ELD compliance platform.",
      "Ran structured discovery workshops that reduced scope ambiguity by 35%.",
      "Bridged dispatch, safety, and engineering stakeholders across multiple time zones.",
      "Defined acceptance criteria for compliance-critical ELD and hours-of-service modules.",
    ],
    impact: [
      { label: "Scope ambiguity reduction", value: "35%" },
      { label: "Region", value: "North America" },
      { label: "Compliance", value: "ELD" },
    ],
    tools: ["BRD", "User Stories", "Process Flows", "Wireframes", "draw.io", "Jira"],
    deliverables: [
      "Business Requirements Document (BRD)",
      "Process flow diagrams for dispatch & compliance workflows",
      "Wireframes for dispatcher dashboard",
      "User stories with acceptance criteria",
    ],
    accent: "orange",
  },
  {
    slug: "manufacturing-erp",
    title: "Manufacturing ERP",
    icon: "factory",
    domain: "Textile Manufacturing",
    client: "Textile Co.",
    shortDesc:
      "End-to-end ERP covering production planning, procurement, inventory, and supplier management for a 150-user rollout.",
    longDesc:
      "Led business analysis for an end-to-end ERP implementation at a textile manufacturing company. The platform unified production planning, procurement, inventory, and supplier management into a single source of truth. Moin ran cross-functional workshops across production, stores, purchase, and finance to map current-state processes, identify gaps, and design a to-be architecture that would scale to 150 concurrent users across multiple plants.",
    highlights: [
      "Led BA for an ERP rollout covering production planning, procurement, inventory, and supplier management.",
      "Ran cross-functional workshops across production, stores, purchase, and finance teams.",
      "Produced BRD, SRS, and data-flow diagrams for a 150-user multi-plant rollout.",
      "Mapped as-is to to-be processes to drive standardisation across plants.",
    ],
    impact: [
      { label: "End users", value: "150" },
      { label: "Modules", value: "PP · Procurement · Inventory · Suppliers" },
      { label: "Industry", value: "Textile Manufacturing" },
    ],
    tools: ["BRD", "SRS", "Data-Flow Diagrams", "Gap Analysis", "draw.io", "Visio"],
    deliverables: [
      "BRD & SRS for production planning, procurement, inventory, supplier modules",
      "As-is / to-be process maps across plants",
      "Data-flow diagrams for cross-module integration",
      "UAT plan covering 150 users",
    ],
    accent: "coral",
  },
  {
    slug: "channel-management-erp",
    title: "Channel Management ERP",
    icon: "boxes",
    domain: "Distribution",
    client: "Distribution Org.",
    shortDesc:
      "Distribution and order fulfilment ERP covering order processing, inventory allocation, warehouse dispatch, and reporting.",
    longDesc:
      "Gathered and engineered requirements for a distribution and order fulfilment ERP serving a multi-channel distribution organisation. Moin mapped end-to-end flows from order capture through inventory allocation, warehouse dispatch, and reporting. Authored detailed use cases and acceptance criteria that gave engineering and QA an unambiguous spec to build and test against.",
    highlights: [
      "Mapped order processing, inventory allocation, warehouse dispatch, and reporting workflows.",
      "Authored use cases and acceptance criteria for an order-to-cash cycle.",
      "Aligned distribution, warehouse, and finance stakeholders on a single process model.",
      "Defined KPIs and reporting structure for operations leadership.",
    ],
    impact: [
      { label: "Modules", value: "Order · Allocation · Dispatch · Reporting" },
      { label: "Industry", value: "Distribution" },
      { label: "Deliverable", value: "Use Cases + ACs" },
    ],
    tools: ["Use Cases", "Acceptance Criteria", "Process Flows", "KPI Design", "Jira"],
    deliverables: [
      "Use case catalogue for order-to-cash cycle",
      "Acceptance criteria for each use case",
      "Process flow diagrams for warehouse dispatch",
      "KPI & reporting requirements document",
    ],
    accent: "yellow",
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    icon: "workflow",
    domain: "Operations Analytics",
    client: "Internal Ops Team",
    shortDesc:
      "Integrated AI tools with CRM and ERP to automate KPI reporting and supply chain dashboards — saved 8+ hrs/week.",
    longDesc:
      "Designed automated KPI reporting workflows that integrated AI tools with the company's CRM and ERP systems. The goal was to eliminate manual data entry and Excel wrangling for the operations team. Moin worked backwards from the operational KPIs the leadership team needed every Monday morning, then engineered a pipeline that pulled data from CRM/ERP, processed it through AI-powered transformations, and surfaced insights on live dashboards.",
    highlights: [
      "Designed automated KPI reporting workflows integrating AI tools with CRM and ERP.",
      "Eliminated 8+ hrs/week of manual data entry for operations teams.",
      "Built live supply chain dashboards replacing static Excel reports.",
      "Worked backwards from leadership KPIs to define data contracts.",
    ],
    impact: [
      { label: "Hours saved / week", value: "8+" },
      { label: "Integrations", value: "CRM + ERP + AI" },
      { label: "Output", value: "Live Dashboards" },
    ],
    tools: ["Python", "SQL", "Power BI", "CRM API", "ERP API", "AI Tools"],
    deliverables: [
      "Automated KPI reporting pipeline",
      "Live Power BI dashboards for operations",
      "Data contracts between CRM, ERP, and AI layer",
      "Runbook for ops team to maintain the workflow",
    ],
    accent: "mint",
  },
  {
    slug: "lab-management-system",
    title: "Lab Management System",
    icon: "flask",
    domain: "Healthcare / Labs",
    client: "Diagnostics Lab",
    shortDesc:
      "Scoped sample intake, scheduling, result logging, and compliance reporting modules within a 2-week requirements sprint.",
    longDesc:
      "Scoped a Lab Management System covering sample intake, scheduling, result logging, and compliance reporting. The engagement was time-boxed to a 2-week requirements sprint, so Moin leaned heavily on structured elicitation techniques — stakeholder interviews, document analysis, and rapid process mapping — to produce an SRS and process-mapping artefacts that the engineering team could act on without follow-up clarification.",
    highlights: [
      "Scoped sample intake, scheduling, result logging, and compliance reporting modules.",
      "Produced SRS and process-mapping artefacts in a 2-week requirements sprint.",
      "Defined compliance reporting requirements for diagnostic data.",
      "Structured elicitation across lab technicians, pathologists, and admin staff.",
    ],
    impact: [
      { label: "Sprint length", value: "2 weeks" },
      { label: "Modules", value: "Intake · Scheduling · Results · Compliance" },
      { label: "Industry", value: "Diagnostics" },
    ],
    tools: ["SRS", "Process Mapping", "Stakeholder Interviews", "draw.io"],
    deliverables: [
      "Software Requirements Specification (SRS)",
      "Process maps for sample lifecycle",
      "Compliance reporting requirements",
      "Prioritised backlog for engineering",
    ],
    accent: "lilac",
  },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export const experiences: Experience[] = [
  {
    id: "ba-ai-lead",
    role: "Business Analyst & AI Solutions Lead",
    company: "Codes Technology Pvt. Ltd.",
    location: "Surat, India",
    period: "Feb 2026 — Present",
    current: true,
    summary:
      "Leads a 4-person team delivering ERP, automation, and analytics solutions for manufacturing, logistics, and distribution clients across India, USA, Canada, and UAE.",
    bullets: [
      "Lead a team of 4 delivering ERP, automation, and analytics solutions for manufacturing, logistics, and distribution clients across India, USA, Canada, and UAE.",
      "Author BRDs, SRS, user stories with acceptance criteria, and process-flow diagrams (draw.io/Visio); act as liaison between supply chain stakeholders and engineering/QA teams through full SDLC.",
      "Designed automated KPI reporting workflows integrating AI tools with CRM and ERP systems, eliminating 8+ hrs/week of manual data entry for operations teams.",
      "Support UAT: prepare test cases, validate outputs against acceptance criteria; managed 95%+ defect closure rate within sprint cycles.",
    ],
    accent: "orange",
  },
  {
    id: "ba-bd",
    role: "Business Analyst & Business Development Executive",
    company: "Codes Technology Pvt. Ltd.",
    location: "Surat, India",
    period: "Oct 2024 — Feb 2026",
    current: false,
    summary:
      "Owned requirements engineering for 10+ ERP projects (200+ end users) covering procurement, inventory, order management, and production planning.",
    bullets: [
      "Owned requirements engineering for 10+ ERP projects (200+ end users) covering procurement, inventory, order management, and production planning for manufacturing and logistics clients.",
      "Engaged 25+ clients across manufacturing, logistics, and SaaS; mapped as-is to to-be processes using gap analysis, process flows, and data analysis, reducing re-work by 30%.",
      "Built SQL-based reports and Power BI dashboards for inventory, order fulfilment, and supplier KPIs, reducing manual reporting time by 40% for operations managers.",
      "Facilitated Agile ceremonies; maintained Jira sprint boards across cross-functional teams, improving on-time delivery rate to 85%.",
    ],
    accent: "coral",
  },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  field: "Computer Science",
  school: "Veer Narmad South Gujarat University",
  location: "Surat, India",
  period: "Jun 2022 — Feb 2025",
  cgpa: "8.54 / 10.0",
};

// ---------------------------------------------------------------------------
// Certifications & Honours
// ---------------------------------------------------------------------------

export const certifications: Certification[] = [
  {
    title: "Aspire Leaders Program 2025",
    issuer: "Aspire Institute / Harvard Business School",
    date: "2025",
    note: "1 of 6,175 finalists from 36,000+ applicants — top 17%",
    accent: "orange",
  },
  {
    title: "Forward Program",
    issuer: "McKinsey & Company",
    date: "Jul 2025",
    accent: "coral",
  },
  {
    title: "Summer Analytics",
    issuer: "IIT Guwahati",
    date: "Apr 2025",
    note: "Top 25 Percentile",
    accent: "yellow",
  },
  {
    title: "Data Analyst & AI Engineer Certifications",
    issuer: "OneRoadmap",
    date: "May 2025",
    accent: "mint",
  },
  {
    title:
      "Store, Process, and Manage Data on Google Cloud — Command Line Skill Badge",
    issuer: "Google",
    date: "Dec 2025",
    accent: "lilac",
  },
];

// ---------------------------------------------------------------------------
// Roadmap
// ---------------------------------------------------------------------------

export const roadmap: RoadmapPhase[] = [
  {
    index: "01",
    status: "completed",
    title: "Foundation Building",
    description:
      "Built strong foundations in computer science, data analysis, and business systems through a BCA at Veer Narmad South Gujarat University (CGPA 8.54), alongside certifications in analytics, AI engineering, and cloud.",
    accent: "mint",
  },
  {
    index: "02",
    status: "current",
    title: "Delivery & Leadership",
    description:
      "Currently leading a 4-person team at Codes Technology, delivering ERP, automation, and analytics solutions across supply chain, procurement, inventory, and manufacturing for clients in India, USA, Canada, and UAE.",
    accent: "orange",
  },
  {
    index: "03",
    status: "next",
    title: "Scale & Strategy",
    description:
      "Aiming to step into a Senior BA / Product Analyst role at a global product or consulting firm, scaling ERP and analytics programmes end-to-end and driving data strategy across multi-region supply chains.",
    accent: "lilac",
  },
];

// ---------------------------------------------------------------------------
// Stats (for hero / about)
// ---------------------------------------------------------------------------

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "ERP Rollouts Supported", value: "10+" },
  { label: "End Users Covered", value: "200+" },
  { label: "Reporting Time Saved", value: "40%" },
  { label: "Hrs / Week Automated", value: "8+" },
  { label: "Defect Closure Rate", value: "95%+" },
];

// ---------------------------------------------------------------------------
// Quick facts (about page)
// ---------------------------------------------------------------------------

export const quickFacts = [
  { label: "Based in", value: "India (Open to Relocate)" },
  { label: "Current role", value: "BA & AI Solutions Lead @ Codes Technology" },
  { label: "Domain focus", value: "Supply Chain · ERP · Analytics" },
  { label: "Recognition", value: "Top 17% of 36,000+ Aspire Institute applicants" },
  { label: "Education", value: "BCA, VNSGU — CGPA 8.54 / 10" },
  { label: "Working with", value: "Clients in India · USA · Canada · UAE" },
];

export type Expertise = {
  icon: ExpertiseIcon;
  title: string;
  accent: "orange" | "coral" | "yellow" | "mint";
  description: string;
  tags: string[];
};

export type ExpertiseIcon =
  | "chart"
  | "truck"
  | "trending-up"
  | "workflow";

// ---------------------------------------------------------------------------
// Expertise areas (home page)
// ---------------------------------------------------------------------------

export const expertise: Expertise[] = [
  {
    icon: "chart",
    title: "Business Analysis & Requirements",
    accent: "orange",
    description:
      "BRDs, SRS, FRS, user stories with acceptance criteria, and process-flow diagrams. I run structured workshops to turn ambiguous operational needs into a precise, testable backlog.",
    tags: ["BRD", "SRS", "Use Cases", "UAT"],
  },
  {
    icon: "truck",
    title: "Supply Chain & ERP Delivery",
    accent: "coral",
    description:
      "End-to-end ERP rollouts across procurement, inventory, order fulfilment, and production planning. 10+ rollouts spanning 200+ users across manufacturing, logistics, and distribution.",
    tags: ["Procurement", "Inventory", "Logistics", "ERP"],
  },
  {
    icon: "trending-up",
    title: "Analytics & Dashboards",
    accent: "yellow",
    description:
      "SQL-based reports and Power BI dashboards for inventory, order fulfilment, and supplier KPIs. Reduced manual reporting time by 40% for operations managers.",
    tags: ["SQL", "Power BI", "BigQuery", "Excel"],
  },
  {
    icon: "workflow",
    title: "AI Workflow Automation",
    accent: "mint",
    description:
      "Designed automated KPI reporting workflows integrating AI tools with CRM and ERP systems, eliminating 8+ hrs/week of manual data entry for operations teams.",
    tags: ["Python", "CRM/ERP APIs", "AI Tools", "Automation"],
  },
];
