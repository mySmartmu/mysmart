/**
 * The mySmart portfolio, in one place.
 *
 * Copy here is drawn from each product's own documentation rather than written
 * fresh, so the site cannot drift from what the products actually do. Every
 * surface is one of the four brand colours — products do not get their own
 * palettes.
 */

export type Status = 'live' | 'production' | 'launching' | 'building';

export interface StatusMeta {
  label: string;
  /** True for anything a client can buy and use today. */
  inMarket: boolean;
}

export const STATUS: Record<Status, StatusMeta> = {
  live: { label: 'Available now', inMarket: true },
  production: { label: 'In production', inMarket: true },
  launching: { label: 'Launching 2026', inMarket: false },
  building: { label: 'In build', inMarket: false },
};

export interface Platform {
  id: string;
  name: string;
  /** Wordmark lockup in /public/products. */
  logo: string;
  logoWidth: number;
  logoHeight: number;
  /**
   * Display height for the wordmark. These lockups run from 1.1:1 (myOne,
   * stacked) to 5.7:1 (InvoiceIQ, a single line), so one shared height would
   * leave half of them either illegible or overbearing.
   */
  logoClass: string;
  /** Short category line above the name. */
  kicker: string;
  /** One sentence, outcome first. */
  summary: string;
  /** Two or three sentences for the detail card. */
  description: string;
  /** What it actually does, in the client's words. */
  capabilities: string[];
  /** The line it will not cross. Every regulated product has one, and it sells. */
  boundary?: string;
  /** Systems and standards it works against. */
  worksWith: string[];
  /** Who it is sold to. */
  segments: string[];
  status: Status;
  /** Light logos need a dark card. */
  surface: 'light' | 'dark';
  flagship?: boolean;
  href?: string;
  /** Filter bucket on the products page. */
  category: string;
}

export const PLATFORMS: Platform[] = [
  {
    id: 'otto',
    name: 'Otto',
    logo: '/products/otto.png',
    logoWidth: 654,
    logoHeight: 256,
    logoClass: 'h-10',
    kicker: 'AI agent platform',
    summary: 'A workforce of AI agents. Otto prepares; a person approves.',
    description:
      'Otto reads the documents a business already receives, does the preparation its staff currently do by hand, and hands back a checked draft. A person approves it — only then does anything leave the system. Underneath one platform sit many specialist agents, each with a job title you can explain in a sentence.',
    capabilities: [
      'Eighteen specialist agents — the Invoicer, Invoice Processor, Bookkeeper, VAT Preparer, KYC Agent, Compliance Assistant and more',
      'Reads invoices, statements and KYC documents out of email, watched folders and web upload',
      'Recomputes every total in code — no model does the arithmetic',
      'Catches duplicates before they reach the ledger twice, and flags what it is unsure about',
      'Tenant isolation enforced by PostgreSQL row-level security, not application discipline',
      'Append-only audit trail — every figure traces back to its source document',
      'Two-factor authentication for anyone who can approve a record',
    ],
    boundary:
      'Otto never files a return, never makes a payment, never sends an external email without a human pressing send, and never modifies an original document.',
    worksWith: ['Zoho Books', 'Sage', 'Xero', 'QuickBooks', 'Odoo', 'Email intake', 'Excel export'],
    segments: ['Accounting practices', 'Management companies', 'Insurance brokers'],
    status: 'live',
    surface: 'dark',
    flagship: true,
    href: 'https://heyotto.mu',
    category: 'ai',
  },
  {
    id: 'credence',
    name: 'Credence',
    logo: '/products/credence.png',
    logoWidth: 525,
    logoHeight: 256,
    logoClass: 'h-16',
    kicker: 'Client compliance intelligence',
    summary: 'KYC, AML screening and client risk assessment for regulated firms.',
    description:
      'A multi-tenant, white-label compliance platform. Onboard a client, screen them against sanctions, PEP and adverse-media sources, score them against your own board-approved methodology, and generate the CDD report — with a maker-checker workflow so no alert clears on one person’s say-so.',
    capabilities: [
      'Client onboarding with a document vault, per client and per entity',
      'Sanctions, PEP and adverse-media screening, plus company-registry lookups',
      'Customer Risk Assessment scored against your board-approved methodology',
      'CDD report generation for corporate and individual clients',
      'Maker-checker alert workflow — analyst, reviewer and tenant admin roles',
      'Per-tenant white-label branding, plan limits and retention policy',
      'Public REST API with tenant-scoped tokens, plus webhooks',
      'Batch screening and a full audit trail on every decision',
    ],
    boundary:
      'Credence proposes a risk rating and evidences it. The appointed MLRO assigns it — a regulated judgement no system may make on its own.',
    worksWith: ['Dilisense', 'Adverse-media search', 'Company registry lookup', 'Webhooks', 'REST API'],
    segments: ['Management companies', 'Law and accounting firms', 'Financial institutions'],
    status: 'production',
    surface: 'light',
    category: 'compliance',
  },
  {
    id: 'waypoint',
    name: 'Waypoint',
    logo: '/products/waypoint.png',
    logoWidth: 1177,
    logoHeight: 256,
    logoClass: 'h-8',
    kicker: 'Delivery and fleet operations',
    summary: 'Routing that knows what actually fits in the vehicle.',
    description:
      'A delivery platform for fleets moving real volume. Waypoint plans routes around vehicle capacity rather than stop count, tracks every drop live, and gives drivers a mobile app with proof of delivery, an offline queue and a direct line to dispatch.',
    capabilities: [
      'Volume-aware route optimisation — every item carries a volume, every vehicle a capacity gauge',
      'Region intelligence: delivery zones as map polygons, orders auto-tagged on import',
      'Live traffic through the Google Routes API, with dynamic re-routing',
      'Driver app for iOS and Android — route view, navigation hand-off, signature and photo proof of delivery, offline queue',
      'Live GPS tracking with breadcrumb history and a customer tracking page',
      'In-app driver-to-dispatcher chat',
      '3D cargo load planning: validates the load physically fits and produces a loading sequence',
      'Full developer REST API, payment collection and per-route cost and revenue',
    ],
    worksWith: ['Google Routes API', 'WooCommerce and CSV/Excel import', 'Stripe', 'WhatsApp and SMS', 'REST API'],
    segments: ['Distribution and wholesale', 'Retail delivery', 'Warehousing and logistics'],
    status: 'live',
    surface: 'dark',
    category: 'logistics',
  },
  {
    id: 'invoiceiq',
    name: 'InvoiceIQ',
    logo: '/products/invoiceiq.png',
    logoWidth: 1457,
    logoHeight: 256,
    logoClass: 'h-7',
    kicker: 'AI invoice capture',
    summary: 'Stop keying supplier invoices. Forward them instead.',
    description:
      'Upload a batch of supplier invoices, or forward them to your own InvoiceIQ address, and they are read for you — supplier, BRN, VAT, dates and totals — then filed where you can find them again. Built around Mauritian invoices and MUR amounts.',
    capabilities: [
      'Batch upload of PDFs and photos, processed live with the source document beside the result',
      'Structured AI extraction, with private OCR evidence for blurred scans and dense tables',
      'A permanent forwarding address for every user — mail can arrive from any mailbox at all',
      'Vendor and month folders grouped by the date on the invoice, not the upload date',
      'Naming convention editable per organisation, with a live preview',
      'Download a month folder as a renamed ZIP with a matching spreadsheet inside',
      'Excel export, multi-tenant organisations and separation-of-duties roles',
    ],
    worksWith: ['Email forwarding', 'PDF and image upload', 'Excel export', 'S3-compatible storage'],
    segments: ['Finance teams', 'Accounting practices', 'Retail and distribution'],
    status: 'live',
    surface: 'light',
    category: 'finance',
  },
  {
    id: 'myone',
    name: 'myOne',
    logo: '/products/myone.png',
    logoWidth: 285,
    logoHeight: 256,
    logoClass: 'h-16',
    kicker: 'Business operations platform',
    summary: 'One platform for your business — billing on one side, learning on the other.',
    description:
      'myOne is the platform behind myInvoice Pro and myEdu Pro. Invoicing, receipts, expenses, payments and reporting on one side; students, courses, instructors, batches, conferences and certificates on the other — sharing the same customers, invoices and payments underneath.',
    capabilities: [
      'Invoices, receipts, quotations and payment tracking with automatic VAT',
      'Business expense logging, with quarterly and yearly goal setting',
      'Customer records and revenue reporting from one dashboard',
      'Students, instructors, courses and scheduled batches with capacity tracking',
      'Enrolments linked straight through to invoices and payments',
      'Conference management with individual and corporate registration',
      'Certificate issuance from your own templates',
      'Per-company branding — the same platform ships as myInvoice Pro or myEdu Pro',
    ],
    worksWith: ['Website registration forms', 'PDF invoices and certificates', 'Excel reporting'],
    segments: ['Training institutions', 'Professional services', 'Small and mid-sized businesses'],
    status: 'live',
    surface: 'light',
    category: 'business',
  },
];

/** The hardware-and-automation half of the portfolio, which has no wordmark lockup. */
export interface SuiteProduct {
  id: string;
  name: string;
  logo: string;
  kicker: string;
  summary: string;
  capabilities: string[];
  status: Status;
  category: string;
  href?: string;
}

export const SUITE: SuiteProduct[] = [
  {
    id: 'mypayroll',
    name: 'myPayroll',
    logo: '/images/04myPayroll-v1.png',
    kicker: 'Payroll and HR',
    summary: 'Payroll management that takes the month-end out of month-end.',
    capabilities: [
      'Timesheet import and processing',
      'Allowance and deduction calculation',
      'Employee loan management with repayment tracking',
      'Automatic payslip generation',
      'Employee record maintenance',
    ],
    status: 'live',
    category: 'business',
  },
  {
    id: 'mypos',
    name: 'myPOS',
    logo: '/images/02myPOS-v1.png',
    kicker: 'Retail',
    summary: 'Point of sale with inventory management and live sales tracking.',
    capabilities: [
      'In-store sales and checkout',
      'Real-time inventory updates',
      'Website stock synchronisation',
      'Sales and transaction reporting',
      'Multi-location inventory sync',
    ],
    status: 'live',
    category: 'business',
  },
  {
    id: 'mytag',
    name: 'myTag',
    logo: '/images/05myTag-v1.png',
    kicker: 'Digital shelf tags',
    summary: 'E-paper tags for retail and hospitality — pricing updated instantly.',
    capabilities: [
      'Cloud-controlled price tags',
      'Instant shelf-edge updates across the whole store',
      'Ultra-low-power displays with multi-year battery life',
      'Customisable layout design',
      'Integrates with your existing stock system',
    ],
    status: 'live',
    category: 'hardware',
  },
  {
    id: 'automation',
    name: 'Smart Automation',
    logo: '/images/06HomeAutomation-v1.png',
    kicker: 'IoT and smart buildings',
    summary: 'Sensors, devices and cloud platforms integrated into one system.',
    capabilities: [
      'Site assessment and planning',
      'Certified electrical installation, commercial and residential',
      'IoT ecosystem configuration',
      'Automated lighting, security and climate control',
      'One control hub for the whole building',
    ],
    status: 'live',
    category: 'hardware',
  },
  {
    id: 'mycloud',
    name: 'myCloud',
    logo: '',
    kicker: 'Managed cloud storage',
    summary: 'Secure cloud storage with daily backups and 99.9% uptime.',
    capabilities: [
      'Work from anywhere, on any device',
      'Daily automated backups',
      'Data recovery on request',
      'Dedicated local support',
      'Hosted on ISO/IEC 27001 certified infrastructure',
    ],
    status: 'live',
    category: 'infrastructure',
    href: '/mycloud',
  },
];
