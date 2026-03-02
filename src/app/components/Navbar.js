"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#whyus' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <>
      <div className={`fixed top-0 w-full z-[100] px-4 sm:px-8 py-4 md:py-6 transition-all duration-500 ${isScrolled ? 'translate-y-0' : 'translate-y-2'}`}>
        <nav 
          className={`mx-auto max-w-7xl transition-all duration-500 ease-in-out flex items-center justify-between px-4 md:px-6 py-3 rounded-2xl border ${
            isScrolled 
            ? "bg-white/80 backdrop-blur-xl border-white/20 shadow-xl" 
            : "bg-white border-transparent shadow-none"
          }`}
        >
          <div className="flex-1 flex items-center">
            <div className="relative group" onClick={() => window.location.href="/"}>
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="/logo.jpg" 
                className="relative cursor-pointer h-10 md:h-12 w-auto object-contain bg-white p-1 rounded-lg" 
                alt="Navgrah Production" 
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1 bg-gray-100/50 p-1.5 rounded-full border border-gray-200/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-600 hover:text-black hover:bg-white rounded-full transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex-1 flex justify-end items-center gap-3 md:gap-6">
            <a
              href="#contact"
              className="hidden lg:block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-pink-600 transition-colors"
            >
              Inquiry
            </a>
            
            <a
              href="tel:+919811271910"
              className="group relative inline-flex items-center justify-center px-4 py-2.5 md:px-6 md:py-3 overflow-hidden font-medium transition-all bg-black rounded-xl hover:bg-white border border-black"
            >
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-pink-500 rounded-xl"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
                <Phone size={14} className="md:hidden" />
                <span className="hidden xs:inline">Start Planning</span>
                <span className="xs:hidden">Call</span>
              </span>
            </a>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col items-end gap-1.5 p-2 z-[110]"
              aria-label="Toggle Menu"
            >
              <div className={`w-6 h-0.5 bg-black transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-4 h-0.5 bg-pink-600 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-black transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </nav>
        
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full -z-10 opacity-30 blur-[100px] pointer-events-none transition-all duration-1000 ${isScrolled ? 'bg-pink-400' : 'bg-transparent'}`}></div>
      </div>

   
      <div className={`fixed inset-0 z-[105] bg-white transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full pt-32 px-10 gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold tracking-tighter text-gray-900 border-b border-gray-100 pb-4"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-bold tracking-tighter text-pink-600 border-b border-gray-100 pb-4"
          >
            Inquiry
          </a>
          
          <div className="mt-auto pb-12">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Contact Us</p>
            <a href="tel:+919811271910" className="text-xl text-black font-medium">+91 98112 71910</a>
          </div>
        </div>
      </div>
    </>
  );
}