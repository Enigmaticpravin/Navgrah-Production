import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import WhyNavgrah from "@/app/components/WhyNavgrah";
import Contact from "@/app/components/Contact";
import WhatsAppCta from "./components/WhatsappCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyNavgrah />
      <WhatsAppCta />
      <Contact />
    </>
  );
}