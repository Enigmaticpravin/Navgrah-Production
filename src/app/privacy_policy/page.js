import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

const PrivacyPolicy = () => {
  const lastUpdated = "March 2026";

  const policySections = [
    {
      title: "1. Information Collection",
      content: "We collect information you provide directly to us when you book an event, such as your name, email address, phone number, and event details. This helps Navgrah Production tailor our decor to your specific needs."
    },
    {
      title: "2. How We Use Data",
      content: "Your data is used to process bookings, communicate event updates, and improve our services. We may also use your contact info to send occasional promotional offers (unless you opt-out)."
    },
    {
      title: "3. Media & Photography",
      content: "As an event decoration brand, we often photograph our setups. While we focus on the decor, images may occasionally include event attendees. We respect your privacy; please notify us in writing if you wish to restrict the use of event photography for our portfolio."
    },
    {
      title: "4. Third-Party Sharing",
      content: "We do not sell your personal data. We only share information with trusted partners (like payment processors or venue coordinators) strictly necessary to execute your event."
    },
    {
      title: "5. Security",
      content: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure."
    }
  ];

  return (
    <>
     <Navbar/>
     <div className="bg-[#fcfcfc] min-h-screen py-12 px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Branding & Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">Security & Trust</span>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-4 flex items-center justify-center space-x-2 text-gray-500 text-sm">
            <span>Navgrah Production</span>
            <span>•</span>
            <span>Updated {lastUpdated}</span>
          </div>
        </div>

        <div className="space-y-8">
          {policySections.map((section, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-900 rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-white">Your Rights</h2>
          <p className="text-indigo-100 mb-6">
            You have the right to access, correct, or delete your personal data at any time. If you have concerns about how your data is handled, please reach out to our privacy officer.
          </p>
          <a 
            href="mailto:contact@navgrahproduction.com" 
            className="inline-block bg-white text-indigo-900 px-6 py-2 rounded-full font-bold hover:bg-indigo-50 transition-colors"
          >
            Email Privacy Team
          </a>
        </div>

        <footer className="mt-16 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Navgrah Production. All rights reserved.</p>
        </footer>
      </div>
    </div>
    <Contact/>
    </>
   
  );
};

export default PrivacyPolicy;