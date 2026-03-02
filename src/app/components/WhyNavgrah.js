"use client";

const reasons = [
  {
    title: "Precision Execution",
    desc: "We don't just decorate; we engineer environments. On-budget and always on-time.",
    icon: "01",
  },
  {
    title: "Elite Network",
    desc: "Access to the finest vendor ecosystem in the industry for seamless management.",
    icon: "02",
  },
  {
    title: "Proven Legacy",
    desc: "A track record of high-profile events that speak louder than words.",
    icon: "03",
  },
  {
    title: "Radical Transparency",
    desc: "Direct, strong communication channels. No surprises, just perfection.",
    icon: "04",
  },
];

export default function WhyNavgrah() {
  return (
    <section id="why" className="py-2 md:py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-pink-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-26 lg:gap-16 items-start">
          
         <div className="sticky top-24 flex flex-col items-center text-center md:items-start md:text-left">
  <h3 className="text-pink-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 md:mb-6">
    The Navgrah Edge
  </h3>

  <h2 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter leading-[1.1] md:leading-none mb-6 md:mb-8">
    WHY THE <br className="hidden md:block" />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
      ELITE CHOOSE US
    </span>
  </h2>

  <p className="text-gray-400 text-sm md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed mb-8 md:mb-10">
    We blend creative artistry with logistical precision to ensure your event 
    is as stress-free as it is stunning.
  </p>
  
  <div className="flex flex-row justify-center md:justify-start gap-8 md:gap-12 border-t border-white/10 pt-8 md:pt-10 w-full md:w-auto">
    <div>
      <p className="text-2xl md:text-3xl font-black text-white">500+</p>
      <p className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-widest mt-1">Events Managed</p>
    </div>
    <div>
      <p className="text-2xl md:text-3xl font-black text-white">100%</p>
      <p className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-widest mt-1">On-Time Delivery</p>
    </div>
  </div>
</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 lg:mt-0">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="group p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/10 hover:border-pink-500/50 transition-all duration-500"
              >
                <div className="flex md:block items-center gap-4 mb-4 md:mb-0">
                    <div className="text-2xl md:text-4xl font-serif italic text-pink-500/30 group-hover:text-pink-500 transition-colors duration-500 md:mb-4">
                    {reason.icon}
                    </div>
                    <h4 className="text-lg md:text-xl font-bold tracking-tight md:mb-3">
                    {reason.title}
                    </h4>
                </div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}