// Domain content aligned to SMBval overview + task-creation template (SMB functional areas).
const domains = [
  {
    name: "Finance & Accounting",
    focus: "AP, books, cash discipline",
    workflows: "Invoice processing, payment routing, policy conflicts, reconciliation across email and sheets",
    tools: "Email, spreadsheets, accounting exports, policy docs",
    judgment: "Correct amounts, rejected bad invoices, policy conflicts, who to pay and when"
  },
  {
    name: "Operations",
    focus: "Day-to-day running of the business",
    workflows: "Inventory and reorder decisions, supplier outreach, team notes, opening/closing routines",
    tools: "POS exports, Sheets, email/portals, Slack or text",
    judgment: "Quantities, weekend prep, 86’d items, what to communicate to the team"
  },
  {
    name: "Sales & Business Development",
    focus: "Pipeline and customer commitments",
    workflows: "Follow-ups from CRM and inbox, quote adjustments, handoffs to ops or finance",
    tools: "CRM, email, spreadsheets, shared docs",
    judgment: "Priority accounts, conflicting promises, accurate next steps and records"
  },
  {
    name: "Human Resources",
    focus: "People ops for small teams",
    workflows: "Scheduling notes, onboarding checklists, policy questions, time-off and coverage",
    tools: "Email, chat, shared sheets/docs, policy files",
    judgment: "Fair application of policy, what not to promise, clean records"
  },
  {
    name: "Retail & Hospitality",
    focus: "Front-line SMB operators",
    workflows: "Morning ops: sales review, reviews, inventory, supplier orders, team updates (e.g. café)",
    tools: "POS, online ordering, Sheets, email, Slack/text",
    judgment: "Trends, reorder timing, guest feedback, promos and stockouts"
  },
  {
    name: "Customer Support",
    focus: "Tickets that touch money and reputation",
    workflows: "Escalations from inbox and chat, refunds or credits, updates to CRM and team",
    tools: "Email, chat, CRM, order/ledger sheets",
    judgment: "When to refund, policy exceptions, tone and accurate status updates"
  }
];

const team = [
  {name: "Adam Moss", sub: "SMB Owner/Operator", exp: "SMB Consultant, Entrepreneur, Operations Director, Real Estate experience."},
  {name: "Trevor Dixon", sub: "Finance - CFA Charterholder", exp: "8+ years of Private Wealth Management, Investment Analytics, Client Acquisition, and Real Estate experience"},
  {name: "Joni Genovesi", sub: "HR & Operation", exp: "Expert in People-Centered Solutions & Organizational Support."},
  {name: "Samir Chahine", sub: "Market Research", exp: "PMP certified Project Manager for 5 years in the market research industry"},
  {name: "Yanne Isiodu", sub: "", exp: ""},
  {name: "Jeff Sudmeier", sub: "Real Estate", exp: "Real estate asset management with CPM and ARM certifications, and a licensed Realtor."},
  {name: "Daniel Blakely", sub: "Digital and growth marketer and consultant", exp: "2+ years combining client (B2B SaaS, SMB, and professional services) and agency (strategy, paid media, retail) sides."},
  {name: "Daniel Gordiychuk", sub: "Admin & Ops", exp: ""},
  {name: "Charles Ha", sub: "Finance", exp: ""},
  {name: "Chan Park", sub: "Entrepreneurship, Operations, Sales & BD, Strategy", exp: "B2B sales & account management (10+ yrs across consumer goods, retail & wholesale distribution), GM/Operations Director of hospitality venue, multiple entrepreneurial ventures. 20+ yrs of combined experience."},
  {name: "Matias Goya", sub: "Blockchain and Education", exp: "Blockchain professor at ITBA, Latam payments & crypto consultant, Operational Risk manager at JP Morgan."},
  {name: "Juan José Torregiani", sub: "Finance / Consulting", exp: "Strategy Consulting at Lederman consulting & Operations instructor for UTDT's DOT (Direction of operations & technology) course."},
  {name: "Josh Giles", sub: "Operations & Analytics", exp: "10+ Years Experience across Operations, Analytics, and Disaster Relief delivering results from conflict zones to corporations"}
];

const teamImages = {
  "Adam Moss": "assets/adam.png",
  "Trevor Dixon": "assets/trevor.jpeg",
  "Joni Genovesi": "assets/joni.png",
  "Samir Chahine": "assets/samir.jpeg",
  "Jeff Sudmeier": "assets/jeff.png",
  "Daniel Blakely": "assets/daniel.jpeg",
  "Daniel Gordiychuk": "assets/danielG.jpeg",
  "Charles Ha": "assets/charles.jpeg",
  "Chan Park": "assets/chan.jpeg",
  "Matias Goya": "assets/matias.jpeg",
  "Juan José Torregiani": "assets/juan.png",
  "Josh Giles": "assets/josh.png"
};
