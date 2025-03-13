// src/app/privacy/page.tsx
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';

export const metadata = {
  title: 'Privacy Policy - mySmart',
  description: 'Privacy policy for mySmart IT & Automation Solutions',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white py-4 px-6 md:px-12 shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="h-8 w-10 relative mr-2">
              <OptimizedImage
                src="/images/logo.webp" 
                alt="mySmart Logo"
                width={40}
                height={40}
                priority={true}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold">
              <span className="text-cyan-500">my</span>
              <span className="text-gray-500">Smart</span>
            </span>
          </Link>
          
          {/* Back to Home button */}
          <Link 
            href="/" 
            className="text-gray-700 hover:text-cyan-600 font-medium flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-cyan-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 pb-4 border-b border-gray-200">Privacy Policy</h1>
          
          <p className="text-gray-900 font-medium">Last updated: March 15, 2025</p>
          
          {/* Table of Contents */}
          <div className="my-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Table of Contents</h2>
            <ol className="list-decimal pl-5 text-gray-900">
              <li className="mb-1"><a href="#introduction" className="text-cyan-600 hover:text-cyan-700">Introduction</a></li>
              <li className="mb-1"><a href="#data-collection" className="text-cyan-600 hover:text-cyan-700">The Data We Collect About You</a></li>
              <li className="mb-1"><a href="#data-usage" className="text-cyan-600 hover:text-cyan-700">How We Use Your Personal Data</a></li>
              <li className="mb-1"><a href="#data-security" className="text-cyan-600 hover:text-cyan-700">Data Security</a></li>
              <li className="mb-1"><a href="#legal-rights" className="text-cyan-600 hover:text-cyan-700">Your Legal Rights</a></li>
              <li className="mb-1"><a href="#contact" className="text-cyan-600 hover:text-cyan-700">Contact Us</a></li>
            </ol>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-900">
            <h2 id="introduction" className="text-2xl font-bold text-slate-800 mt-10 mb-4 pb-2 border-b border-gray-100">1. Introduction</h2>
            <p className="mb-4">At mySmart, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            
            <h2 id="data-collection" className="text-2xl font-bold text-slate-800 mt-10 mb-4 pb-2 border-b border-gray-100">2. The Data We Collect About You</h2>
            <p className="mb-4">Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).</p>
            <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-8 mb-6 text-gray-900">
              <li className="mb-2"><span className="font-semibold">Identity Data</span> includes first name, last name, username or similar identifier.</li>
              <li className="mb-2"><span className="font-semibold">Contact Data</span> includes email address and telephone numbers.</li>
              <li className="mb-2"><span className="font-semibold">Technical Data</span> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li className="mb-2"><span className="font-semibold">Usage Data</span> includes information about how you use our website, products, and services.</li>
            </ul>
            
            <h2 id="data-usage" className="text-2xl font-bold text-slate-800 mt-10 mb-4 pb-2 border-b border-gray-100">3. How We Use Your Personal Data</h2>
            <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-8 mb-6 text-gray-900">
              <li className="mb-2">Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li className="mb-2">Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li className="mb-2">Where we need to comply with a legal obligation.</li>
            </ul>
            <p className="mb-4">Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.</p>
            
            <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500 my-8">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Marketing Communications</h3>
              <p className="text-gray-900 mb-0">You will receive marketing communications from us only if you have requested information from us or purchased services from us and you have not opted out of receiving that marketing.</p>
            </div>
            
            <h2 id="data-security" className="text-2xl font-bold text-slate-800 mt-10 mb-4 pb-2 border-b border-gray-100">4. Data Security</h2>
            <p className="mb-4">We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>
            <p className="mb-4">We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>
            
            <h2 id="legal-rights" className="text-2xl font-bold text-slate-800 mt-10 mb-4 pb-2 border-b border-gray-100">5. Your Legal Rights</h2>
            <p className="mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul className="list-disc pl-8 mb-6 text-gray-900">
              <li className="mb-2"><span className="font-semibold">Request access</span> to your personal data.</li>
              <li className="mb-2"><span className="font-semibold">Request correction</span> of your personal data.</li>
              <li className="mb-2"><span className="font-semibold">Request erasure</span> of your personal data.</li>
              <li className="mb-2"><span className="font-semibold">Object to processing</span> of your personal data.</li>
              <li className="mb-2"><span className="font-semibold">Request restriction</span> of processing your personal data.</li>
              <li className="mb-2"><span className="font-semibold">Request transfer</span> of your personal data.</li>
              <li className="mb-2"><span className="font-semibold">Right to withdraw consent</span>.</li>
            </ul>
            <p className="mb-4">You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your request in these circumstances.</p>
            
            <h2 id="contact" className="text-2xl font-bold text-slate-800 mt-10 mb-4 pb-2 border-b border-gray-100">6. Contact Us</h2>
            <p className="mb-2">If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
            <div className="bg-gray-100 p-4 rounded-lg mb-8 inline-block">
              <p className="mb-0 text-gray-900 font-medium">
                Email: info@mysmart.com<br />
                Or through our Contact form on our website.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white">© 2025 mySmart – Mauritius. All rights reserved</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-cyan-400 hover:text-white transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="/legal" className="text-gray-300 hover:text-white transition-colors">
                Legal Disclaimer
              </Link>
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}