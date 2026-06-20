// Data extracted strictly from ● Knowledge Work Evals June 2026.md
const domains = [
  {name: "Administrative", workflows: "Executive operations, board prep, multi-zone scheduling, expense and policy admin, records and vendor management", deliverable: "Board package; executive calendar; procedural policy", horizon: "Hours to 1 wk", hKey: "hours"},
  {name: "Customer Support & Success", workflows: "Escalation playbooks, QBR prep, churn and renewal analysis, support dashboards", deliverable: "QBR deck; churn analysis; escalation playbook", horizon: "Days to 2 wks", hKey: "days"},
  {name: "Executive Leadership", workflows: "Strategy memos, OKR cascades, board pre-reads, capital allocation, org design, investor updates", deliverable: "Strategy memo; board pre-read; Objective and key results model", horizon: "1 to 4 wks", hKey: "weeks"},
  {name: "Facilities & Real Estate", workflows: "Lease vs buy analysis, relocation and space planning, workplace strategy, facilities budgets, vendor RFPs", deliverable: "Lease vs buy model; space plan; facilities budget", horizon: "1 to 3 wks", hKey: "weeks"},
  {name: "Human Resources & Talent", workflows: "Compensation banding, workforce planning, performance design, benefits modeling, org redesign", deliverable: "Comp band model; workforce plan", horizon: "1 to 4 wks", hKey: "weeks"},
  {name: "Management Consulting", workflows: "Market-entry assessments, commercial due diligence, operating-model redesign, cost and growth strategy", deliverable: "Market-entry deck; due-diligence memo", horizon: "2 to 6 wks", hKey: "weeks"},
  {name: "Marketing & Communications", workflows: "GTM plans, positioning, campaign calendars, media-mix modeling, crisis comms", deliverable: "GTM plan; CAC/LTV model; crisis-comms plan", horizon: "1 to 4 wks", hKey: "weeks"},
  {name: "Operations", workflows: "Process mapping and redesign, S&OP, capacity planning, KPI dashboards, SLA design", deliverable: "Process map; ops review pack; capacity model", horizon: "1 to 3 wks", hKey: "weeks"},
  {name: "Sales & Business Development", workflows: "Territory and quota design, comp plans, pipeline and forecast models, deal desk, partner programs", deliverable: "Territory/quota model; comp plan; partner case", horizon: "1 to 3 wks", hKey: "weeks"},
  {name: "Supply Chain, Procurement & Logistics", workflows: "Sourcing RFPs and should-cost, network design, S&OP, inventory optimization, logistics modeling", deliverable: "RFP scoring model; network scenarios", horizon: "2 to 5 wks", hKey: "weeks"},
  {name: "Entrepreneurship", workflows: "Business plans, fundraising decks and models, unit economics, pricing, GTM for new ventures", deliverable: "Deck + model + cap table; business plan", horizon: "1 to 4 wks", hKey: "weeks"},
  {name: "Experience Design", workflows: "Journey mapping, research synthesis, service blueprinting, design systems, usability work", deliverable: "Journey map; service blueprint; wireframe flow", horizon: "1 to 3 wks", hKey: "weeks"}
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
  "Matias Goya": "assets/matti.jpeg",
  "Juan José Torregiani": "assets/juan.png",
  "Josh Giles": "assets/josh.png"
};
