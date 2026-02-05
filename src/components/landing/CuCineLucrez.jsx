import React from "react";
import { Scissors, Zap, Heart, Stethoscope, Wrench } from "lucide-react";

const domenii = [
  { icon: Zap, label: "Electricieni" },
  { icon: Scissors, label: "Frizerii" },
  { icon: Heart, label: "Beauty / Nails" },
  { icon: Stethoscope, label: "Cabinete și servicii medicale" },
  { icon: Wrench, label: "Servicii locale și activități independente" },
];

export default function CuCineLucrez() {
  return (
    <section className="px-5 py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-5 tracking-tight">
          Cu cine lucrez
        </h2>
        <p className="text-lg text-[#555] leading-relaxed mb-12 max-w-2xl">
          Lucrez cu firme mici și servicii locale care vor o prezență online clară, fără site-uri complicate sau costuri inutile.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {domenii.map((d, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#fafafa] border border-[#f0ece7]"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#f0ece7] flex items-center justify-center">
                <d.icon className="w-5 h-5 text-[#8a7d6b]" />
              </div>
              <span className="text-base font-medium text-[#333]">{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}