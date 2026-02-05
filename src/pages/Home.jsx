import React from "react";
import HeroSection from "@/components/landing/HeroSection.jsx";
import CuCineLucrez from "@/components/landing/CuCineLucrez.jsx";
import CeFacSection from "@/components/landing/CeFacSection.jsx";
import ExempleSection from "@/components/landing/ExempleSection.jsx";
import CumLucramSection from "@/components/landing/CumLucramSection.jsx";
import PreturiSection from "@/components/landing/PreturiSection.jsx";
import ContactSection from "@/components/landing/ContactSection.jsx";
import FooterSection from "@/components/landing/FooterSection.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>
      <HeroSection />
      <CuCineLucrez />
      <CeFacSection />
      <ExempleSection />
      <CumLucramSection />
      <PreturiSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}