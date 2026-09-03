/**
 * Company facts, taken from the 2026 corporate presentation.
 *
 * These figures appear in several places. Keeping them here means the deck and
 * the site can only ever disagree in one file.
 */

export const TAGLINE = 'Smart Technology. Made Simple.';

export const POSITIONING =
  'AI-driven software, automation and connected hardware for businesses and homes in Mauritius — built, hosted and supported locally.';

export interface Stat {
  value: number;
  /** Start of the count-up. Years look wrong running from zero. */
  from?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 2025, from: 2018, label: 'Founded in Mauritius' },
  { value: 13, suffix: '+', label: 'Active clients' },
  { value: 10, label: 'Products in market' },
  { value: 99.99, decimals: 2, suffix: '%', label: 'Platform uptime' },
];

/** Slide 6 — the five capabilities that combine into one delivery. */
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
    desc: 'Home and building automation, installed and commissioned.',
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

/** Slide 7 — three phases, one team throughout. */
export const PROCESS = [
  {
    step: '01',
    title: 'Discover',
    desc: 'We map what your team actually does before proposing anything — who touches what, and how long each step really takes. Fixed fee, credited in full against the build if you proceed.',
  },
  {
    step: '02',
    title: 'Build',
    desc: 'Designed, built and integrated by the same team that scoped it. Software, AI and hardware under one roof, so nothing is lost between vendors. Fixed fee, never hourly — the incentive to be fast is ours.',
  },
  {
    step: '03',
    title: 'Run',
    desc: 'Support, maintenance and keeping the system current are part of the engagement, not sold back to you afterwards. You own the IP on every custom build.',
  },
] as const;

/** Slide 18 — why clients choose us. */
export const REASONS = [
  {
    step: '01',
    title: 'One team, not three vendors',
    desc: 'Software, AI and hardware under one roof. Nobody gets to point at somebody else when something does not work.',
  },
  {
    step: '02',
    title: 'Local, and staying local',
    desc: 'We are in Mauritius. You can visit us, call us, and hold us to a contract under a law we both operate under.',
  },
  {
    step: '03',
    title: 'We understand the regulation',
    desc: 'MRA VAT annexes, FSC deadlines, RoC returns and how a local partner actually signs off work. That is not something a foreign vendor builds for this market.',
  },
  {
    step: '04',
    title: 'We stay after go-live',
    desc: 'Support, maintenance and the unglamorous work of keeping a system current is in the engagement, not sold back to you afterwards.',
  },
] as const;

/** Slide 11 — the infrastructure everything runs on. */
export const INFRASTRUCTURE = [
  {
    title: 'Certified security',
    desc: 'Hosted on dedicated infrastructure holding ISO/IEC 27001 certification for information security management.',
  },
  {
    title: 'High availability',
    desc: '99.9% network uptime, so the systems your operation depends on do not stop when you need them.',
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

/** Slide 15 — three horizons. */
export const HORIZONS = [
  {
    period: 'Now · 2026',
    title: 'Prove it',
    items: [
      'Launch Otto with the first paying clients',
      'myTag rolled out across hospitality and retail',
      'myPayroll and myPOS into their next accounts',
      'First two case studies with measured numbers',
    ],
  },
  {
    period: 'Next · 2026–27',
    title: 'Widen it',
    items: [
      'Otto into a third regulated segment',
      'Client portals and self-service onboarding',
      'Deeper accounting integrations across the portfolio',
      'Support and success function built out',
    ],
  },
  {
    period: 'Horizon · 2027+',
    title: 'Scale it',
    items: [
      'Products sold beyond the clients we deliver to',
      'Regional expansion beyond Mauritius',
      'Hardware and software sold as one connected offer',
      'Partner and reseller channel',
    ],
  },
] as const;

/** Slide 21 — the people who do the work. */
export const FOUNDERS = [
  {
    name: 'Twahir Nuckcheddy',
    role: 'Co-Founder & CEO',
    bio: 'Information Systems certified, BCS postgraduate diploma. App development, IoT and smart home technology, cloud (AWS), data analysis and modern web — React and Next.js. Eight years building and analysing systems before founding mySmart.',
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
  // This is a taller, stacked mark. Give it enough height for the wordmark
  // beneath the emblem to remain legible alongside the wide partner logos.
  { logo: 'antrick-v1.png', name: 'Antrick Global', showName: false, width: 214, height: 168, heightClass: 'h-24' },
  { logo: 'Chocoshe-v1.png', name: "Choco'She", showName: true, width: 116, height: 96 },
  { logo: 'ACE-v1.png', name: 'Aux Champs Elysées', showName: true, width: 132, height: 96 },
  { logo: 'adonis-v1.png', name: 'Adonis Management Consulting', showName: true, width: 107, height: 96 },
  { logo: 'frotcom-v1.png', name: 'Frotcom Indian Ocean', showName: true, width: 119, height: 96 },
  { logo: 'ninety_six_logo-v1.png', name: 'Ninety-Six', showName: false, width: 435, height: 96, heightClass: 'h-11' },
  { logo: 'AVINYA_logo-v1.png', name: 'Avinya', showName: false, width: 153, height: 96, heightClass: 'h-12' },
];
