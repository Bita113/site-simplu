import React from "react";

const pasi = [
  { nr: "01", text: "Discutăm ce ai nevoie" },
  { nr: "02", text: "Creez site-ul" },
  { nr: "03", text: "Îl publicăm și îl poți folosi imediat" },
];

export default function CumLucramSection() {
  return (
    <section className="px-5 py-20 sm:py-28 bg-[#fafafa]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-12 tracking-tight">
          Cum lucrăm
        </h2>

        <div className="space-y-0 mb-10">
          {pasi.map((pas, i) => (
            <div key={i} className="flex items-start gap-5">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-sm font-bold shadow-md">
                  {pas.nr}
                </div>
                {i < pasi.length - 1 && (
                  <div className="w-0.5 h-10 bg-[#FED7AA] mt-1" />
                )}
              </div>
              <div className="pt-3 pb-4">
                <p className="text-lg font-medium text-[#1a1a1a]">{pas.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-base text-[#555] leading-relaxed">
          Totul este simplu și rapid, fără pași inutili.
        </p>
      </div>
    </section>
  );
}