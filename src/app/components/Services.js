"use client";

const services = [
  {
    title: "Wedding Decor Experts",
    desc: "Transforming venues into ethereal dreamscapes with floral excellence.",
    img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=1472&auto=format&fit=crop", 
    size: "md:col-span-2",
  },
  {
    title: "Theme Decoration",
    desc: "From Royal Rajwada to Modern Minimalist themes.",
    img: "https://images.unsplash.com/photo-1708606811579-23b18fc48007?q=80&w=1471&auto=format&fit=crop",
    size: "md:col-span-1",
  },
  {
    title: "DJ & Sound Setup",
    desc: "Immersive audio experiences with state-of-the-art tech.",
    img: "https://images.unsplash.com/photo-1766650581125-e16353159904?q=80&w=1470&auto=format&fit=crop",
    size: "md:col-span-1",
  },
  {
    title: "Special Event Decor",
    desc: "Corporate galas, anniversaries, and luxury private parties.",
    img: "https://images.unsplash.com/photo-1744805624954-a6686543c3ff?q=80&w=687&auto=format&fit=crop",
    size: "md:col-span-2",
  },
  {
    title: "Guest Management",
    desc: "Seamless hospitality and coordination for your loved ones.",
    img: "https://plus.unsplash.com/premium_photo-1726718465660-9135cc91d31e?q=80&w=1451&auto=format&fit=crop",
    size: "md:col-span-1",
  },
  {
    title: "Vendor Management",
    desc: "Handpicked elite vendors curated for your specific needs.",
    img: "https://plus.unsplash.com/premium_photo-1664702602930-0755001218d6?q=80&w=1470&auto=format&fit=crop",
    size: "md:col-span-2",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-pink-600 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Our Expertise
            </h3>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black">
              CRAFTING THE <span className="italic font-serif text-gray-400">Extraordinary</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Every detail is meticulously planned to ensure your celebration is 
            nothing short of a masterpiece.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gray-100 h-[400px] cursor-pointer ${service.size}`}
            >
              {/* Background Image with Zoom on Hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${service.img}')` }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="h-0.5 w-0 bg-pink-500 mb-4 transition-all duration-500 group-hover:w-12"></div>
                
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {service.desc}
                </p>

                <div className="mt-6 flex items-center text-white text-[10px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all delay-200">
                  View Portfolio <span className="ml-2">→</span>
                </div>
              </div>

              {/* Glassmorphism Badge (Optional Corner Element) */}
              <div className="absolute top-6 right-6 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}