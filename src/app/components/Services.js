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
    <section id="services" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-6">
          <div className="max-w-2xl">
            <h3 className="text-pink-600 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-3 md:mb-4">
              Our Expertise
            </h3>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-black leading-[1.1]">
              CRAFTING THE <span className="italic font-serif text-gray-400">Extraordinary</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed border-l-2 border-pink-100 pl-4 md:border-none md:pl-0">
            Every detail is meticulously planned to ensure your celebration is 
            nothing short of a masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gray-100 h-[300px] md:h-[400px] cursor-pointer ${service.size}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 md:group-hover:scale-110"
                style={{ backgroundImage: `url('${service.img}')` }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 md:via-black/20 to-transparent transition-opacity duration-500 md:group-hover:opacity-80" />

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end transform transition-all duration-500 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                <div className="h-0.5 w-10 md:w-0 bg-pink-500 mb-3 md:mb-4 transition-all duration-500 md:group-hover:w-12"></div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-xs md:text-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2 md:line-clamp-none">
                  {service.desc}
                </p>

                <div className="mt-4 md:mt-6 flex items-center text-white text-[10px] font-bold tracking-[0.2em] uppercase opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all delay-200">
                  View Portfolio <span className="ml-2">→</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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