import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import WhyNavgrah from "@/app/components/WhyNavgrah";
import Contact from "@/app/components/Contact";
import WhatsAppCta from "./components/WhatsappCTA";

export default function Home() {
   const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Navgrah Production",
    image: "https://www.navgrahproduction.com/logo.jpg",
    url: "https://www.navgrahproduction.com",
    telephone: "+91-9811271910",
    address: {
      "@type": "PostalAddress",
      streetAddress: "The Ornate, Sector-4, Vaishali",
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "201010",
      addressCountry: "IN"
    },
    sameAs: [
      "https://www.instagram.com/navgrahproduction_official"
    ],
    description:
      "Premium wedding and event decor company in Ghaziabad offering theme decoration, DJ setup, vendor and guest management."
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <Hero />
      <Services />
      <WhyNavgrah />
      <WhatsAppCta />
      <Contact />
    </>
  );
}