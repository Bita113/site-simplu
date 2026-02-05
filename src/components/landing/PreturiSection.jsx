import React from "react";

export default function PreturiSection() {
  return (
    <section className="px-5 py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-8 tracking-tight">
          Prețuri
        </h2>
        
        <div className="p-8 sm:p-10 rounded-2xl bg-[#fafafa] border border-[#f0ece7]">
          <p className="text-xl sm:text-2xl font-semibold text-[#1a1a1a] mb-4">
            Prețurile pornesc de la câteva sute de lei, în funcție de ce este nevoie.
          </p>
          <p className="text-base text-[#555] mb-6 leading-relaxed">
            Nu există costuri lunare sau abonamente.
          </p>
          <div className="w-12 h-px bg-[#d4cfc8] mb-6" />
          <p className="text-base text-[#777]">
            Detaliile le discutăm simplu, de la caz la caz.
          </p>
        </div>
      </div>
    </section>
  );
}