/**
 * Company facts, taken from the 2026 corporate presentation.
 *
 * SOURCE OF TRUTH: CorporatePresentation_mySmart_2026_updated, 19 slides,
 * 3 September 2026. An earlier 22-slide draft shares that file name and reads
 * very differently — it is an internal cut carrying commercial terms (fixed
 * fee, IP ownership, "we generalise on the second sale") and named regulators.
 * None of that is client-facing. If this file is ever refreshed, check the
 * slide count first: 19 is the approved deck, 22 is the draft.
 *
 * These figures and phrases appear in several places, so they live here and
 * the deck and the site can only ever disagree in one file.
 */

export const TAGLINE = 'Smart Technology. Made Simple.';

export const POSITIONING =
  'AI-driven software, automation and connected hardware for businesses and homes in Mauritius — built, hosted and supported locally.';

/** Slide 3 — who we are. */
export const WHO_WE_ARE =
  'A Mauritian technology company that builds the software, the hardware and the automation in between — and stays to support it.';

/** Slide 4 — mySmart at a glance. */
export const AT_A_GLANCE =
  'We design and deliver technology that simplifies how businesses operate, from custom applications and AI integration to automation, infrastructure and hardware. Our focus is on replacing fragmented and manual processes with practical, connected solutions.';

export interface Stat {
  value: number;
  /** Start of the count-up. Years look wrong running from zero. */
  from?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

/**
 * Slide 4. The deck carries three figures; there is no founding-year tile.
 *
 * "Products in market" is 10 rather than the deck's 7, on the client's
 * explicit instruction that the whole portfolio is now shipping.
 */
export const STATS: Stat[] = [
  { value: 13, suffix: '+', label: 'Active clients' },
  { value: 10, label: 'Products in market' },
  { value: 99.99, decimals: 2, suffix: '%', label: 'Platform uptime' },
];

/** Slide 5 — what we do. */
export const SERVICES_LEAD =
  'We provide five main services and combine them when needed to build the right solution for your business.';

export const CAPABILITIES = [
  {
    title: 'Custom software',
    desc: 'Business systems built to your process, not the other way round.',
    icon: 'code',
  },
  {
    title: 'AI integration',
    desc: 'Extraction, classification and assistance wired into real workflows.',
    icon: 'sparkles',
  },
  {
    title: 'Smart automation',
    desc: 'Home and building automation, installed and set up.',
    icon: 'zap',
  },
  {
    title: 'Infrastructure',
    desc: 'Servers, cloud, security and the uptime that carries all of it.',
    icon: 'server',
  },
  {
    title: 'Web and digital',
    desc: 'Sites, portals and the integrations that keep them fed.',
    icon: 'globe',
  },
] as const;

/** Slide 6 — how we work. */
export const PROCESS_LEAD =
  'From understanding your needs to building and supporting the final solution, you work with the same team throughout.';

export const PROCESS = [
  {
    step: '01',
    title: 'Understand',
    desc: 'We take the time to understand your business, your current processes and the challenges you want to solve. This helps us define what the solution really needs before development starts.',
  },
  {
    step: '02',
    title: 'Build',
    desc: 'We design, develop and test the solution around your requirements. Depending on the project, this can include custom software, AI integration, automation and hardware.',
  },
  {
    step: '03',
    title: 'Support',
    desc: 'Once the solution is live, we stay involved with support, maintenance, updates and future improvements, so the system continues to work well as your business evolves.',
  },
] as const;

/** Slide 8 — products and platforms. */
export const PRODUCTS_LEAD =
  'These are some of the main products and solutions we offer, each built to solve real business needs.';

export const PRODUCTS_FOOTNOTE =
  'Many of our products began as custom solutions built to meet real client needs.';

/** Slide 10 — secure enterprise infrastructure. */
export const INFRASTRUCTURE_LEAD =
  'Our systems are hosted on secure, reliable infrastructure designed to protect your data and keep your applications available.';

export const INFRASTRUCTURE = [
  {
    title: 'Certified security',
    desc: 'Hosted on dedicated infrastructure holding ISO/IEC 27001 certification for information security management.',
  },
  {
    title: 'High availability',
    desc: '99.99% network uptime, so the systems your operation depends on do not stop when you need them.',
  },
  {
    title: 'Advanced data protection',
    desc: 'Enterprise-grade DDoS protection, encrypted data in transit, and strict adherence to global privacy standards.',
  },
  {
    title: 'High-performance compute',
    desc: 'Purpose-built hardware for demanding AI workloads, real-time processing and rapid scaling.',
  },
] as const;

export const CERTIFICATIONS = ['ISO/IEC 27001:2022', 'BSI C5:2020 Testat', 'PCI DSS Compliance'] as const;

/** Slides 13 and 14 — where we are going. */
export const FUTURE_LEAD =
  'We are continuing to improve our products, expand our services and build solutions that can support more businesses in Mauritius and across the region.';

export const FUTURE_BODY =
  'We continue to improve our products and services as the needs of our clients change and new technology becomes available.';

/** Slide 15 — why clients choose us. */
export const REASONS_LEAD =
  'We keep things simple: one local team, practical solutions and ongoing support.';

export const REASONS = [
  {
    step: '01',
    title: 'One team',
    desc: 'Software, AI, infrastructure and hardware are handled by the same team, so your project stays coordinated from start to finish.',
  },
  {
    step: '02',
    title: 'Based in Mauritius',
    desc: 'We are locally based, easy to reach and available to meet, support and work directly with your team.',
  },
  {
    step: '03',
    title: 'Local business knowledge',
    desc: 'We understand how businesses operate in Mauritius and can build solutions around local requirements and processes.',
  },
  {
    step: '04',
    title: 'Ongoing support',
    desc: 'Our work does not stop at launch. We continue to provide support, maintenance, updates and improvements as your needs change.',
  },
] as const;

/** Slide 17 — trusted by. */
export const CLIENTS_LEAD =
  'We are proud to serve clients across multiple sectors, delivering tailored solutions that drive efficiency and growth.';

/** Slide 18 — our leadership. */
export const FOUNDERS = [
  {
    name: 'Twahir Nuckcheddy',
    role: 'Co-Founder & CEO',
    bio: 'Information Systems certified, BCS postgraduate diploma. App development, IoT and smart home technology, cloud (AWS), data analysis and modern web, React and Next.js. Eight years building and analysing systems before founding mySmart.',
    phone: '+230 58 53 57 57',
    email: 'twahir.n@mysmart.mu',
  },
  {
    name: 'Ibraheem Nuckcheddy',
    role: 'Co-Founder & CTO',
    bio: 'NCC Level 4 and 5 Diploma in Computing. Server infrastructure, cloud migration, database administration and enterprise data security. Seven years running production infrastructure and security before founding mySmart.',
    phone: '+230 57 45 27 85',
    email: 'ibraheem.n@mysmart.mu',
  },
] as const;

/** Sectors we have delivered into. Slide 4. */
export const SECTORS = [
  'Hospitality',
  'Retail',
  'Training institutions',
  'Accounting',
  'Logistics',
  'IT services',
  'Home services',
  'Industrial',
] as const;

export interface ClientLogo {
  logo: string;
  name: string;
  showName: boolean;
  width: number;
  height: number;
  heightClass?: string;
}

/** Trusted partners, as shown in the home-page marquee. */
export const CLIENTS: ClientLogo[] = [
  { logo: 'Sensoria-v1.png', name: 'Sensoria', showName: false, width: 230, height: 68 },
  { logo: 'acropolis-v1.png', name: 'Acropolis Training Institution', showName: true, width: 96, height: 96 },
  { logo: 'Toolmaster-v1.png', name: 'Toolmaster', showName: false, width: 202, height: 96 },
  { logo: 'pooltec-v1.png', name: 'Pooltec', showName: false, width: 133, height: 96 },
  { logo: 'speedlink-v1.png', name: 'SpeedLink', showName: true, width: 83, height: 91 },
  { logo: 'RAIS-v1.png', name: 'Rais Enterprises', showName: true, width: 146, height: 96 },
  { logo: 'antrick-v1.png', name: 'Antrick Global', showName: false, width: 214, height: 168, heightClass: 'h-14' },
  { logo: 'Chocoshe-v1.png', name: "Choco'She", showName: true, width: 116, height: 96 },
  { logo: 'ACE-v1.png', name: 'Aux Champs Elysées', showName: true, width: 132, height: 96 },
  { logo: 'adonis-v1.png', name: 'Adonis Management Consulting', showName: true, width: 107, height: 96 },
  { logo: 'frotcom-v1.png', name: 'Frotcom Indian Ocean', showName: true, width: 119, height: 96 },
  { logo: 'ninety_six_logo-v1.png', name: 'Ninety-Six', showName: false, width: 435, height: 96, heightClass: 'h-11' },
  { logo: 'AVINYA_logo-v1.png', name: 'Avinya', showName: false, width: 153, height: 96, heightClass: 'h-12' },
];
