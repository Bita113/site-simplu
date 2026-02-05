import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-5 py-20 bg-[#fafafa]">
      {/* Subtle geometric accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#e8e4df]/40 to-transparent rounded-full -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-[#e8e4df]/30 to-transparent rounded-full translate-y-1/3 -translate-x-1/3" />
      
      <div className="relative max-w-2xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[#f0ece7] text-sm text-[#6b5e4f] font-medium tracking-wide">
          Biță Bogdan
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-[#1a1a1a] mb-6">
          Site-uri simple pentru firme mici
        </h1>
        
        <p className="text-lg sm:text-xl text-[#555] leading-relaxed max-w-xl mx-auto mb-10 font-normal">
          Fac pagini web de prezentare pentru firme locale, gândite să ajute clienții să vă găsească mai ușor și să vă contacteze rapid.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#exemple"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1a1a1a] text-white font-medium text-base hover:bg-[#333] transition-colors"
          >
            Vezi exemple
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#d4cfc8] text-[#1a1a1a] font-medium text-base hover:border-[#1a1a1a] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Contactează-mă
          </a>
        </div>
      </div>
    </section>
  );
}