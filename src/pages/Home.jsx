import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import CuCineLucrez from "@/components/landing/CuCineLucrez";
import CeFacSection from "@/components/landing/CeFacSection";
import ExempleSection from "@/components/landing/ExempleSection";
import CumLucramSection from "@/components/landing/CumLucramSection";
import PreturiSection from "@/components/landing/PreturiSection";
import ContactSection from "@/components/landing/ContactSection";
import FooterSection from "@/components/landing/FooterSection";

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