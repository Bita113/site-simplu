import React from "react";
import { ExternalLink } from "lucide-react";

const exemple = [
  {
    titlu: "Frizerie canină și felină",
    link: "https://bubu-pet-care.base44.app",
    emoji: "🐾",
  },
  {
    titlu: "Electrician autorizat",
    link: "https://stalwart-electro-pro-fix.base44.app",
    emoji: "⚡",
  },
  {
    titlu: "Cabinet medical",
    link: "https://moonveterinary.ro",
    emoji: "🏥",
  },
  {
    titlu: "Defrisari forestiere",
    link: "https://eco-clean-land.base44.app",
    emoji: "🌲",
  },
  {
    titlu: "Barbershop",
    link: "https://judicious-elegance-style-pro.base44.app",
    emoji: "💈",
  },
  {
    titlu: "Renovari si Constructii",
    link: "https://renovri-premium-pro.base44.app",
    emoji: "🏗️",
  },
];

export default function ExempleSection() {
  return (
    <section id="exemple" className="px-5 py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-5 tracking-tight">
          Exemple de site-uri
        </h2>
        <p className="text-lg text-[#555] leading-relaxed mb-12 max-w-2xl">
          Mai jos sunt câteva exemple de site-uri demo, care pot fi adaptate exact pe nevoile fiecărei firme.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {exemple.map((ex, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-[#fafafa] border border-[#f0ece7] hover:border-[#d4cfc8] transition-all hover:shadow-sm"
            >
              <div className="text-3xl mb-4">{ex.emoji}</div>
              <h3 className="text-base font-semibold text-[#1a1a1a] mb-5 leading-snug">
                {ex.titlu}
              </h3>
              <a
                href={ex.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#6b5e4f] hover:text-[#1a1a1a] transition-colors"
              >
                Vezi site
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}