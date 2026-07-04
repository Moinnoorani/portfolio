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
  | "code-review"
  | "sparkles"
  | "file-text"
  | "bot"
  | "globe";

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
// Web3Forms access key — used by the contact form to actually send emails.
// Get yours free at https://web3forms.com (just enter your email, they mail
// you a key). Replace the placeholder below with your key, or set the
// NEXT_PUBLIC_WEB3FORMS_KEY env var to override at runtime.
// Until a real key is set, the form runs in "demo mode" (simulated success).
export const web3formsAccessKey =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";

// ---------------------------------------------------------------------------
// Testimonial — shown on the Home page for social proof.
// ---------------------------------------------------------------------------

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
};

export const testimonial: Testimonial = {
  quote:
    "Moin brings a rare mix of business understanding and technical thinking. In conversations with clients he quickly identifies the real problem behind the requirement and turns it into a clear direction for the team to build on. He's proactive, dependable, and someone who naturally takes ownership when working through complex problems.",
  name: "Makhdum Chamadiya",
  title: "CEO & CTO",
  company: "Codes Technology",
  relationship: "Managed Moin directly",
};

// ---------------------------------------------------------------------------
// Writing / Posts — curated LinkedIn articles.
// Only posts tagged with tech-related categories appear on the site.
// Non-tech posts (hiring, personal, non-tech articles) are excluded by
// simply not being added here. To add a new post, append to the array.
// ---------------------------------------------------------------------------

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  dateLabel: string;
  dateSort: string; // ISO date for sorting
  url: string; // LinkedIn post URL
  readTime?: string;
};

export type PostCategory =
  | "Business Analysis"
  | "AI Industry"
  | "Agents"
  | "Engineering"
  | "Tools"
  | "Process";

export const posts: Post[] = [
  {
    slug: "oauth-2-explained",
    title: "OAuth 2.0, explained as a handshake between app, service, and user",
    excerpt:
      "A plain-English walkthrough of OAuth 2.0 — what the four-step handshake actually does, where refresh tokens fit in, and why scopes are the unsung heroes of secure integrations.",
    category: "Engineering",
    dateLabel: "1 yr ago",
    dateSort: "2025-07-15",
    url: "https://www.linkedin.com/in/moinnoorani",
    readTime: "6 min",
  },
  {
    slug: "gpt-5-shiny-toy-to-core-infra",
    title: "GPT-5: when AI moves from shiny toy to core infrastructure",
    excerpt:
      "What changes when a model stops being a demo and starts being infrastructure. Reliability, evals, fallbacks, and the boring engineering that decides whether your AI feature ships or stalls.",
    category: "AI Industry",
    dateLabel: "8 mo ago",
    dateSort: "2025-11-04",
    url: "https://www.linkedin.com/in/moinnoorani",
    readTime: "5 min",
  },
  {
    slug: "from-llm-chat-to-shipped-agent",
    title: "From chatting with an LLM to shipping an AI agent",
    excerpt:
      "The gap between a working chat prompt and a shipped agent is enormous. A practical map of the layers you actually need: memory, tools, guardrails, eval, and the feedback loop that keeps it honest.",
    category: "Agents",
    dateLabel: "4 mo ago",
    dateSort: "2026-03-10",
    url: "https://www.linkedin.com/in/moinnoorani",
    readTime: "7 min",
  },
  {
    slug: "seven-ai-releases-this-week",
    title: "Seven AI releases shipped this week, and what they actually change",
    excerpt:
      "A weekly roundup of the AI releases that crossed my desk — what shipped, who it's for, and whether it actually moves the needle for teams building real products or just adds to the noise.",
    category: "AI Industry",
    dateLabel: "1 mo ago",
    dateSort: "2026-06-05",
    url: "https://www.linkedin.com/in/moinnoorani",
    readTime: "4 min",
  },
  {
    slug: "ba-uses-jira-day-to-day",
    title: "How a BA uses Jira day to day: where clarity lives",
    excerpt:
      "Jira isn't project management theatre — for a BA it's where requirements meet reality. How I structure epics, stories, and acceptance criteria so the dev can build and the client can validate.",
    category: "Business Analysis",
    dateLabel: "3 mo ago",
    dateSort: "2026-04-12",
    url: "https://www.linkedin.com/in/moinnoorani",
    readTime: "5 min",
  },
  {
    slug: "why-requirements-fail",
    title: "Why requirements fail even when the Jira ticket looks perfect",
    excerpt:
      "The ticket is clean, the acceptance criteria are written, the sprint starts — and six weeks later the client says 'this isn't what I asked for.' Where the breakdown actually happens, and how to prevent it.",
    category: "Business Analysis",
    dateLabel: "3 mo ago",
    dateSort: "2026-04-22",
    url: "https://www.linkedin.com/in/moinnoorani",
    readTime: "6 min",
  },
];

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
  {
    title: "AI Stack",
    icon: "wrench",
    accent: "mint",
    skills: [
      "Python, OpenAI, Claude",
      "LangChain, Azure AI",
      "n8n, Make, Zapier, Power Automate",
      "Pinecone, FastAPI, Docker",
      "PostgreSQL, Next.js, TypeScript",
      "GitHub, GCP",
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
  {
    slug: "ai-workflow-automation-suite",
    title: "AI Workflow Automation Suite",
    icon: "sparkles",
    domain: "AI / Internal Ops",
    client: "Internal Operations · 2026",
    shortDesc:
      "AI-powered workflows that automate research, reporting, and internal operations by integrating generative AI with CRM systems and spreadsheets.",
    longDesc:
      "Designed and deployed a suite of AI-powered workflows that automate research, reporting, and internal operations at Codes Technology. The suite integrates generative AI (Claude, ChatGPT) with the company's CRM and spreadsheets via Make, replacing manual data wrangling with reliable, repeatable pipelines. Moin owned the discovery, requirements, and rollout — including the prompt templates and the human-in-the-loop checkpoints that keep the output trustworthy.",
    highlights: [
      "Designed AI-powered workflows automating research, reporting, and internal operations.",
      "Integrated generative AI (Claude, ChatGPT) with CRM systems and spreadsheets via Make.",
      "Authored prompt templates tuned for consistent, brand-safe output across use cases.",
      "Built human-in-the-loop checkpoints so output stays trustworthy end-to-end.",
    ],
    impact: [
      { label: "Hours saved / week", value: "8+" },
      { label: "Integrations", value: "CRM + Sheets + LLMs" },
      { label: "Type", value: "Internal Ops" },
    ],
    tools: ["Claude", "ChatGPT", "Make", "Google Sheets API", "Internal Ops"],
    deliverables: [
      "Workflow design & process maps",
      "Prompt template library",
      "Integration spec (CRM ↔ LLM ↔ Sheets)",
      "Human-in-the-loop review runbook",
    ],
    accent: "orange",
  },
  {
    slug: "ai-content-deck-pipeline",
    title: "AI Content & Deck Generation Pipeline",
    icon: "file-text",
    domain: "AI / Client Delivery",
    client: "Client Delivery · 2025",
    shortDesc:
      "Repeatable pipeline that produces presentations, documents, and reports via generative AI — backed by a library of prompt templates for consistent, brand-safe output.",
    longDesc:
      "Built a repeatable pipeline that produces presentations, documents, and reports via generative AI, backed by a library of prompt templates tuned for consistent, brand-safe output. The pipeline turned what used to be a 2-day manual deck-building exercise into a 30-minute guided workflow. Moin scoped the requirements with the delivery team, defined the template structure, and wrote the acceptance criteria that ensured every generated artifact met the firm's quality bar.",
    highlights: [
      "Built a repeatable pipeline for AI-generated presentations, documents, and reports.",
      "Curated a library of prompt templates tuned for consistent, brand-safe output.",
      "Reduced manual deck-building time from ~2 days to ~30 minutes per engagement.",
      "Defined acceptance criteria for generated artifacts to meet the firm's quality bar.",
    ],
    impact: [
      { label: "Time per deck", value: "2 days → 30 min" },
      { label: "Output", value: "Decks · Docs · Reports" },
      { label: "Type", value: "Client Delivery" },
    ],
    tools: ["Prompt Engineering", "GenAI", "Template Systems", "Client Delivery"],
    deliverables: [
      "Pipeline spec & acceptance criteria",
      "Prompt template library (decks, docs, reports)",
      "Brand-safety guardrails for generated output",
      "Operator runbook for client delivery team",
    ],
    accent: "coral",
  },
  {
    slug: "autonomous-ai-agents-evaluation",
    title: "Autonomous AI Agents Evaluation",
    icon: "bot",
    domain: "AI / R&D",
    client: "R&D · 2025",
    shortDesc:
      "Agentic systems for automated research, summarisation, and multi-step task execution. Benchmarked emerging tools against real internal use-cases to decide what ships.",
    longDesc:
      "An R&D engagement exploring agentic systems for automated research, summarisation, and multi-step task execution. The goal wasn't to ship a product — it was to learn which emerging tools (LangChain, autonomous agent frameworks) actually hold up against real internal use-cases. Moin ran the evaluation: defined the use-cases, designed the benchmark, scored each tool against reproducible criteria, and produced a recommendation memo that the engineering team still uses to decide what to bet on.",
    highlights: [
      "Experimented with agentic systems for automated research and summarisation.",
      "Benchmarked emerging tools (LangChain, autonomous agents) against real use-cases.",
      "Designed reproducible evaluation criteria across multi-step task scenarios.",
      "Produced a recommendation memo that engineering still uses to pick tools.",
    ],
    impact: [
      { label: "Type", value: "R&D" },
      { label: "Frameworks", value: "LangChain · Autonomous Agents" },
      { label: "Outcome", value: "Internal recommendation memo" },
    ],
    tools: ["LangChain", "Autonomous Agents", "Evaluation"],
    deliverables: [
      "Use-case catalogue for agentic systems",
      "Reproducible benchmark & scoring rubric",
      "Tool-by-tool evaluation report",
      "Internal recommendation memo",
    ],
    accent: "lilac",
  },
  {
    slug: "global-client-engagement-presales",
    title: "Global Client Engagement (Pre-sales)",
    icon: "globe",
    domain: "Business Development",
    client: "Revenue · 2024–2026",
    shortDesc:
      "End-to-end pre-sales for custom software engagements across four markets (IN · US · CA · UAE): discovery, scoping, proposals, and closing with enterprise clients.",
    longDesc:
      "Ran end-to-end pre-sales for custom software engagements across four markets — India, USA, Canada, and UAE. The role spanned discovery calls, scoping workshops, proposal writing, and closing with enterprise clients. Moin's job was to translate a fuzzy client conversation into a scoped, buildable proposal — and to be honest with the client when their ask didn't match their budget or timeline. The engagement covered 25+ clients and was the bridge between business strategy and technology execution.",
    highlights: [
      "Ran pre-sales for custom software engagements across India, USA, Canada, and UAE.",
      "Owned the full cycle: discovery, scoping, proposals, and closing with enterprise clients.",
      "Engaged 25+ clients across manufacturing, logistics, and SaaS verticals.",
      "Scoped honestly — told clients when their ask didn't match budget or timeline.",
    ],
    impact: [
      { label: "Markets", value: "IN · US · CA · UAE" },
      { label: "Clients engaged", value: "25+" },
      { label: "Type", value: "Revenue / Pre-sales" },
    ],
    tools: ["Discovery", "Scoping", "Proposals", "CRM", "Revenue"],
    deliverables: [
      "Discovery & scoping playbook",
      "Proposal template library",
      "Client engagement CRM records",
      "Win/loss analysis for closed deals",
    ],
    accent: "yellow",
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
  {
    title: "ISRO / Bharatiya Antariksh Hackathon",
    issuer: "Indian Space Research Organisation",
    date: "2025",
    note: "Submitted proposal for ISRO's national space-tech hackathon — systems design & implementation",
    accent: "orange",
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
