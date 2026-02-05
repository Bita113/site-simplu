import React from "react";
import { FileText, Palette, Phone, Smartphone, Search } from "lucide-react";

const features = [
  { icon: FileText, text: "O pagină clară de prezentare" },
  { icon: Palette, text: "Design curat și modern" },
  { icon: Phone, text: "Buton de apel și WhatsApp" },
  { icon: Smartphone, text: "Optimizat pentru telefon" },
  { icon: Search, text: "Ușor de găsit pe Google" },
];

export default function CeFacSection() {
  return (
    <section className="px-5 py-20 sm:py-28 bg-[#fafafa]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-5 tracking-tight">
          Ce fac mai exact
        </h2>
        <p className="text-lg text-[#555] leading-relaxed mb-12 max-w-2xl">
          Fac site-uri de prezentare simple, de o singură pagină, unde clienții pot vedea rapid ce servicii oferiți și cum pot lua legătura cu dvs.
        </p>
        
        <div className="mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#8a7d6b] mb-6">
            Ce include un site
          </h3>
          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white border border-[#e8e4df] flex items-center justify-center">
                  <f.icon className="w-4 h-4 text-[#8a7d6b]" />
                </div>
                <span className="text-base text-[#333]">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-6 rounded-2xl bg-white border border-[#e8e4df]">
          <p className="text-base text-[#555] leading-relaxed">
            Nu fac site-uri complicate. Fac pagini simple, ușor de folosit, care ajută firmele mici să fie mai vizibile.
          </p>
        </div>
      </div>
    </section>
  );
}