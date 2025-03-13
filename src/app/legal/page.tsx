// src/app/legal/page.tsx
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';

export const metadata = {
  title: 'Legal Disclaimer - mySmart',
  description: 'Legal disclaimer for mySmart IT & Automation Solutions',
};

export default function LegalDisclaimer() {
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
            <span className="text-gray-900 font-medium">Legal Disclaimer</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 pb-4 border-b border-gray-200">Legal Disclaimer</h1>
          
          <p className="text-gray-900 font-medium">Last updated: March 15, 2025</p>
          
          {/* Table of Contents */}
          <div className="my-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Table of Contents</h2>
            <ol className="list-decimal pl-5 text-gray-900">
              <li className="mb-1"><a href="#info" className="text-cyan-600 hover:text-cyan-700">Website Information</a></li>
              <li className="mb-1"><a href="#external-links" className="text-cyan-600 hover:text-cyan-700">External Links Disclaimer</a></li>
              <li className="mb-1"><a href="#professional" className="text-cyan-600 hover:text-cyan-700">Professional Disclaimer</a></li>
              <li className="mb-1"><a href="#testimonials" className="text-cyan-600 hover:text-cyan-700">Testimonials Disclaimer</a></li>
              <li className="mb-1"><a href="#errors" className="text-cyan-600 hover:text-cyan-700">Errors And Omissions Disclaimer</a></li>
              <li className="mb-1"><a href="#risk" className="text-cyan-600 hover:text-cyan-700">&quot;Use At Your Own Risk&quot; Disclaimer</a></li>
              <li className="mb-1"><a href="#contact" className="text-cyan-600 hover:text-cyan-700">Contact Us</a></li>
            </ol>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-900">
            <h2 id="info" className="text-2xl font-bold text-slate-800 mt-10 mb-4 pb-2 border-b border-gray-100">1. Website Information</h2>
            <p className="mb-4">The information provided by mySmart (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) on our website (the &ldquo;Site&rdquo;) is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
            <p className="mb-4">Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided on the Site. Your use of the Site and your reliance on any information on the Site is solely at your own risk.</p>
            
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 my-8">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Important Notice</h3>
              <p className="text-gray-900 mb-0">Our Site is intended to provide general information and is not a substitute for professional advice. We strongly recommend consulting with appropriate professionals for specific advice related to your individual needs.</p>
            </div>
            
            <h2 id="external-links" className="text-2xl font-bold text-slate-800 mt-10 mb-4 pb-2 border-b border-gray-100">2. External Links Disclaimer</h2>
            <p className="mb-4">The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
            <p className="mb-4">We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.</p>
            
            <h2 id="professional" className="text-2xl font-bold text-slate-800 mt-10 mb-4 pb-2 border-b border-gray-100">3. Professional Disclaimer</h2>
            <p className="mb-4">The Site cannot and does not contain IT or technical advice. The IT and technical information is provided for general informational and educational purposes only and is not a substitute for professional advice.</p>
            <p className="mb-4">Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of IT or technical advice. The use or reliance of any information contained on the Site is solely at your own risk.</p>
            
            <h2 id="testimonials" className="text-2xl font-bold text-slate-800 mt-10 mb-4 pb-2 border-b border-gray-100">4. Testimonials Disclaimer</h2>
            <p className="mb-4">The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences.</p>
            <p className="mb-4">Your individual results may vary. The testimonials on the Site are submitted in various forms such as text, audio and/or video, and are reviewed by us before being posted. They appear on the Site verbatim as given by the users, except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of brevity where the full testimonial contained extraneous information not relevant to the general public.</p>
            <p className="mb-4">The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions.</p>
            
            <h2 id="errors" className="text-2xl font-bold text-slate-800 mt-10 mb-4 pb-2 border-b border-gray-100">5. Errors And Omissions Disclaimer</h2>
            <p className="mb-4">While we have made every attempt to ensure that the information contained on the Site has been obtained from reliable sources, mySmart is not responsible for any errors or omissions or for the results obtained from the use of this information. All information on the Site is provided &ldquo;as is,&rdquo; with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied.</p>
            <p className="mb-4">In no event will mySmart, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information on the Site or for any consequential, special or similar damages, even if advised of the possibility of such damages.</p>
            
            <h2 id="risk" className="text-2xl font-bold text-slate-800 mt-10 mb-4 pb-2 border-b border-gray-100">6. &quot;Use At Your Own Risk&quot; Disclaimer</h2>
            <p className="mb-4">All information on the Site is provided &ldquo;as is,&rdquo; with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.</p>
            <p className="mb-4">mySmart will not be liable to you or anyone else for any decision made or action taken in reliance on the information on the Site or for any consequential, special or similar damages, even if advised of the possibility of such damages.</p>
            
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 my-8">
              <h3 className="text-lg font-bold text-slate-800 mb-2">Limitation of Liability</h3>
              <p className="text-gray-900 mb-0">To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will limit or exclude our or your liability for death or personal injury, fraud or fraudulent misrepresentation.</p>
            </div>
            
            <h2 id="contact" className="text-2xl font-bold text-slate-800 mt-10 mb-4 pb-2 border-b border-gray-100">7. Contact Us</h2>
            <p className="mb-2">If you have any questions about this disclaimer, please contact us at:</p>
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
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal" className="text-cyan-400 hover:text-white transition-colors font-medium">
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
