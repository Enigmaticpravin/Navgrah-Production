"use client";
import { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1625038032515-308ab14d10b9?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587271636175-90d58cdad458?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1741441033511-2e8441b949fb?q=80&w=1373&auto=format&fit=crop"
];

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImg ? "opacity-60 scale-110 animate-ken-burns" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 border border-white/20 rounded-full bg-white/10 backdrop-blur-md">
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
          WE CRAFT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300 italic font-serif">
            Unforgettable
          </span> <br />
          EXPERIENCES
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10 font-light leading-relaxed">
          From grand weddings to boutique celebrations, we turn your 
          vision into a breathtaking reality with bespoke decor.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#contact"
            className="group relative px-10 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:pr-14"
          >
            <span>GET A QUOTE</span>
            <span className="absolute right-5 opacity-0 group-hover:opacity-100 transition-all">→</span>
          </a>

          <a
            href="#services"
            className="px-10 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
          >
            EXPLORE GALLERY
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full flex justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
         <span className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-bold">As Seen In:</span>
         <div className="h-px w-12 bg-white/20"></div>
         <span className="text-white text-xs font-serif italic">WeddingWire</span>
         <span className="text-white text-xs font-serif italic">Zola</span>
         <span className="text-white text-xs font-serif italic">TheKnot</span>
      </div>

      <style jsx>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-ken-burns {
          animation: ken-burns 10s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin 60s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin 60s linear infinite reverse;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}