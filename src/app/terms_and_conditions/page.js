import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'booking', title: '2. Booking & Payments' },
  { id: 'cancellation', title: '3. Cancellation Policy' },
  { id: 'damages', title: '4. Damages & Liability' },
  { id: 'intellectual-property', title: '5. Intellectual Property' },
];

const TermsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pt-40 bg-gray-50 text-gray-900 font-sans selection:bg-gold-200">
      <header className="bg-white border-b border-gray-200 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Your boss, please review the legal framework governing our event decoration services at <span className="font-semibold text-indigo-600">Navgrah Production</span>.
        </p>
        <p className="text-sm text-gray-400 mt-2">Last Updated: March 2026</p>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar Navigation - Sticky */}
        <aside className="md:w-1/4">
          <nav className="sticky top-8 space-y-1">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 px-3">Table of Contents</p>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="md:w-3/4 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          
          <section id="introduction" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Introduction</h2>
            <p className="leading-relaxed text-gray-600">
              Welcome to Navgrah Production. By engaging our services for event decoration, you agree to be bound by the following terms. These terms ensure that we provide the highest quality of service for your special occasions.
            </p>
          </section>

          <section id="booking" className="mb-12 scroll-mt-8 border-t pt-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Booking & Payments</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              <li>A non-refundable deposit of 30% is required to secure your event date.</li>
              <li>Final payment must be cleared at least 7 business days before the event date.</li>
              <li>We accept bank transfers, UPI, and major credit cards.</li>
            </ul>
          </section>

          <section id="cancellation" className="mb-12 scroll-mt-8 border-t pt-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Cancellation Policy</h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-4">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> Cancellations made within 48 hours of the event will result in 100% forfeiture of the total booking amount.
              </p>
            </div>
            <p className="text-gray-600">
              Cancellations requested 15 days prior to the event may be eligible for a partial refund of the amount exceeding the deposit.
            </p>
          </section>

          <section id="damages" className="mb-12 scroll-mt-8 border-t pt-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Damages & Liability</h2>
            <p className="text-gray-600">
              Any damage to Navgrah Production’s property (props, floral stands, lighting, etc.) during the event caused by guests or venue staff will be the financial responsibility of the client.
            </p>
          </section>

          <section id="intellectual-property" className="mb-12 scroll-mt-8 border-t pt-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Intellectual Property</h2>
            <p className="text-gray-600">
              Navgrah Production reserves the right to use photographs and videos of the decor for promotional purposes on social media and our website, unless explicitly opted out by the client in writing.
            </p>
          </section>

          {/* Contact Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 italic">Questions about these terms?</p>
            <button className="mt-4 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg">
              Contact Navgrah Team
            </button>
          </footer>
        </main>
      </div>
    </div>
    <Contact/>
    </>
  );
};

export default TermsPage;