import React from 'react';

const Legal: React.FC = () => {
  const sections = [
    {
      id: 'terms',
      title: 'Terms of Service',
      content: (
        <div className="space-y-4">
          <p>
            <strong>1. Acceptance of Terms</strong><br />
            By accessing and using mySmart Ltd's platform, hardware (Electronic Shelf Labels), and associated API services, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          <p>
            <strong>2. SaaS License & Access</strong><br />
            mySmart Ltd grants you a limited, non-exclusive, non-transferable, and revocable license to use our software products (myPayroll, myPOS, myEdu Pro, myInvoice Pro) strictly for your internal business operations.
          </p>
          <p>
            <strong>3. Hardware Warranty (ESL)</strong><br />
            Our Electronic Shelf Label hardware is covered by a standard 24-month limited warranty against manufacturing defects. Battery life estimates (5-year) are based on standard operating conditions (2 updates/day at 25°C).
          </p>
        </div>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      content: (
        <div className="space-y-4">
          <p>
            <strong>1. Data Collection</strong><br />
            We collect data essential for the operation of our services, including but not limited to: User account information, transaction logs (myPOS), and employee records (myPayroll).
          </p>
          <p>
            <strong>2. Data Usage & AI</strong><br />
            Anonymized data may be used to train our internal AI models to improve anomaly detection and system efficiency. We do not sell your proprietary business data to third parties.
          </p>
          <p>
            <strong>3. GDPR & Compliance</strong><br />
            mySmart Ltd acts as a Data Processor. We comply with GDPR requirements regarding data portability, the right to be forgotten, and secure data storage within certified data centers.
          </p>
        </div>
      )
    },
    {
      id: 'sla',
      title: 'Service Level Agreement (SLA)',
      content: (
        <div className="space-y-4">
          <p>
            <strong>1. Uptime Commitment</strong><br />
            We guarantee a 99.9% monthly uptime for our Cloud Services. Downtime does not include scheduled maintenance windows notified 48 hours in advance.
          </p>
          <p>
            <strong>2. Support Response Times</strong><br />
            <ul>
              <li>Critical (System Down): &lt; 1 Hour</li>
              <li>High (Feature Unavailable): &lt; 4 Hours</li>
              <li>Normal (General Question): &lt; 24 Hours</li>
            </ul>
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="mb-12 border-b border-smart-gray/20 pb-8">
        <h1 className="text-4xl font-bold text-smart-dark mb-4">Legal & Compliance</h1>
        <p className="text-smart-gray">
          Transparency is the core of our business. Below you will find our governing policies for Software, Hardware, and Data usage.
        </p>
        <p className="text-xs text-smart-gray mt-4 font-mono">Last Updated: January 1, 2026</p>
      </div>

      <div className="space-y-16">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-smart-dark mb-6">{section.title}</h2>
            <div className="prose prose-lg text-smart-gray/80">
              {section.content}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-20 p-6 bg-smart-blue/5 rounded-xl border border-smart-blue/20">
        <h3 className="text-lg font-bold text-smart-dark mb-2">Have specific compliance requirements?</h3>
        <p className="text-smart-gray text-sm mb-4">
          For enterprise contracts requiring custom SLAs or on-premise deployment, please contact our legal team directly.
        </p>
        <a href="mailto:legal@mysmart.ltd" className="text-smart-dark font-semibold underline hover:text-smart-blue transition-colors">
          Contact Legal Department
        </a>
      </div>
    </div>
  );
};

export default Legal;
