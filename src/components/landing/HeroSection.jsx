import React from "react";
import { MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-5 py-20 bg-white overflow-hidden">
      {/* Orange blob background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#EA580C] opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#FB923C] opacity-25 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#FED7AA] opacity-40 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[#FFF7ED] border border-[#FED7AA] text-sm text-[#EA580C] font-medium tracking-wide">
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
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#EA580C] text-white font-medium text-base hover:bg-[#C2410C] transition-colors shadow-md"
          >
            Vezi exemple
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#EA580C] text-[#EA580C] font-medium text-base hover:bg-[#FFF7ED] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Contactează-mă
          </a>
        </div>
      </div>
    </section>
  );
}