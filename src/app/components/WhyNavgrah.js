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
    <section id="why" className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pink-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Branding Message */}
          <div>
            <h3 className="text-pink-500 font-bold tracking-[0.4em] uppercase text-xs mb-6">
              The Navgrah Edge
            </h3>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              WHY THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                ELITE CHOOSE US
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-10">
              We blend creative artistry with logistical precision to ensure your event 
              is as stress-free as it is stunning.
            </p>
            
            {/* Quick Stats */}
            <div className="flex gap-12 border-t border-white/10 pt-10">
              <div>
                <p className="text-3xl font-black text-white">500+</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Events Managed</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">100%</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">On-Time Delivery</p>
              </div>
            </div>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-500/50 transition-all duration-500"
              >
                <div className="text-4xl font-serif italic text-pink-500/20 group-hover:text-pink-500 transition-colors duration-500 mb-4">
                  {reason.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 tracking-tight">
                  {reason.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
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