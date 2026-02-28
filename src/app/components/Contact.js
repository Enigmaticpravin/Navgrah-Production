"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            
            <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
              <h3 className="text-pink-500 font-bold tracking-[0.3em] uppercase text-xs mb-6">
                Ready to Begin?
              </h3>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-none">
                LET’S TALK <br />
                <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Production.
                </span>
              </h2>
              
              <div className="space-y-8 mt-12">
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Founder, CEO</p>
                  <p className="text-2xl text-white font-light tracking-tight">Tripti Anand</p>
                </div>

                <div className="flex flex-col gap-4">
                  <a 
                    href="tel:+919811271910" 
                    className="flex items-center gap-4 text-gray-300 hover:text-pink-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-pink-500/20 transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <span className="text-lg font-medium">+91 9811271910</span>
                  </a>
                  
                  <a 
                    href="mailto:navgrahdecor@gmail.com" 
                    className="flex items-center gap-4 text-gray-300 hover:text-pink-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-pink-500/20 transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <span className="text-lg font-medium">navgrahdecor@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative p-10 md:p-16 flex flex-col justify-between overflow-hidden">
              <div 
                className="absolute inset-0 opacity-20 grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
                style={{ backgroundImage: "url('/dc5b52af-347f-4c89-9369-3bd89a729a58.jpg')", backgroundSize: 'cover' }}
              ></div>

              <div className="relative z-10">
                <div className="flex flex-col gap-4 mb-10">
                  <a 
                    href="tel:+919811271910" 
                    className="flex items-center gap-4 text-gray-300 hover:text-pink-400 transition-colors group"
                  >
                    <p>Instagram:</p>
                    <Link href="https://www.instagram.com/navgrahproduction_official/" target="_blank" className="flex items-center gap-4 text-gray-300 hover:text-pink-400 transition-colors group">
                     <span className="text-lg font-medium">@navgrahproduction_official</span>
                    </Link>
                   
                  </a>
                  
                  <a 
                    href="mailto:navgrahdecor@gmail.com" 
                    className="flex items-center gap-4 text-gray-300 hover:text-pink-400 transition-colors group"
                  >
                    <p>LinkTree:</p>
                    <Link href="https://linktr.ee/decorbynavgrah" target="_blank" className="flex items-center gap-4 text-gray-300 hover:text-pink-400 transition-colors group">
                      <span className="text-lg font-medium">@decorbynavgrah</span>
                      </Link>
                  </a>
                </div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-4">Our Office</p>
                <p className="text-white text-xl leading-relaxed max-w-xs font-light">
                  The Ornate, Sector-4, <br />
                  Vaishali, Ghaziabad <br />
                  Uttar Pradesh - 201010
                </p>
              </div>

              <div className="relative z-10 mt-12">
                <button 
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                  className="px-8 py-4 bg-white text-black text-xs font-black tracking-widest uppercase rounded-full hover:bg-pink-500 hover:text-white transition-all active:scale-95"
                >
                  Get Directions
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] tracking-[0.3em] uppercase font-bold">
          <p>© 2026 Navgrah Production</p>
          <p>Designed for Excellence</p>
        </div>
      </div>
    </section>
  );
}