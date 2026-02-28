"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-[100] px-4 sm:px-8 py-6 transition-all duration-500">
      <nav 
        className={`mx-auto max-w-7xl transition-all duration-500 ease-in-out flex items-center justify-between px-6 py-3 rounded-2xl border ${
          isScrolled 
          ? "bg-white/70 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_0_rgba(255,182,193,0.2)]" 
          : "bg-white border-transparent shadow-none"
        }`}
      >
        <div className="flex-1 flex items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="/logo.jpg" 
              className="relative cursor-pointer h-10 md:h-12 w-auto object-contain bg-white p-1 rounded-lg" 
              alt="Navgrah Production" 
              onClick={() => window.location.href="/"}
            />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-2 bg-gray-100/50 p-1.5 rounded-full border border-gray-200/50">
          {['Services', 'Why Us', 'Gallery'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="px-5 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-600 hover:text-black hover:bg-white rounded-full transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex-1 flex justify-end items-center gap-6">
           <a
            href="#contact"
            className="hidden lg:block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-pink-600 transition-colors"
          >
            Inquiry
          </a>
          
          <a
            href="tel:+919811271910"
            className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-black rounded-xl hover:bg-white"
          >
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-pink-500 rounded-xl"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-[10px] font-black tracking-widest uppercase">
              Start Planning
            </span>
          </a>

          <button className="md:hidden flex flex-col gap-1.5 p-2">
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-4 h-0.5 bg-pink-600 ml-auto"></div>
          </button>
        </div>
      </nav>
      
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full -z-10 opacity-30 blur-[100px] pointer-events-none transition-all duration-1000 ${isScrolled ? 'bg-pink-400' : 'bg-transparent'}`}></div>
    </div>
  );
}