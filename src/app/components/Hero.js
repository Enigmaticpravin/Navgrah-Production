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
      

        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
          WE CRAFT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300 italic font-serif">
            Unforgettable
          </span> <br />
          EXPERIENCES
        </h1>

        <p className="max-w-2xl mx-auto text-sm md:text-xl text-gray-200 mb-10 font-light leading-relaxed">
          From grand weddings to boutique celebrations, we turn your 
          vision into a breathtaking reality with bespoke decor.
        </p>

        <div className="flex flex-row sm:flex-row items-center justify-center gap-6">
          <a
            href="#contact"
            className="group relative py-2 px-5 md:px-10 md:py-4 bg-white text-black text-sm md:text-lg font-bold rounded-full transition-all duration-300 hover:pr-14"
          >
            <span>GET A QUOTE</span>
            <span className="absolute right-5 opacity-0 group-hover:opacity-100 transition-all">→</span>
          </a>

          <a
            href="#services"
            className="md:px-10 py-2 px-5 md:py-4 border border-white/30 text-sm md:text-lg text-white font-bold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
          >
            EXPLORE GALLERY
          </a>
        </div>
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