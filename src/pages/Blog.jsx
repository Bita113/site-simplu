import React from "react";
import { Link } from "react-router-dom";

const articole = [
  {
    slug: "de-ce-are-nevoie-firma-ta-de-un-site",
    titlu: "De ce are nevoie firma ta de un site în 2025",
    rezumat: "Dacă afacerea ta nu apare pe Google, practic nu exiști pentru jumătate dintre clienții potențiali. Iată de ce un site simplu face diferența.",
    data: "15 aprilie 2025",
    citire: "3 min",
  },
  {
    slug: "cat-costa-un-site-pentru-o-firma-mica",
    titlu: "Cât costă un site pentru o firmă mică?",
    rezumat: "Prețurile variază enorm — de la câteva sute la mii de lei. Îți explic ce primești la fiecare nivel de preț și ce ai nevoie de fapt.",
    data: "2 martie 2025",
    citire: "4 min",
  },
  {
    slug: "cum-apar-pe-google-cu-firma-mea",
    titlu: "Cum să apari pe Google cu firma ta locală",
    rezumat: "Google Maps, site-ul tău, cuvinte cheie locale — pași concreți pe care orice firmă mică îi poate face pentru a fi găsită mai ușor.",
    data: "18 februarie 2025",
    citire: "5 min",
  },
  {
    slug: "site-optimizat-pentru-telefon",
    titlu: "De ce trebuie site-ul tău să funcționeze perfect pe telefon",
    rezumat: "Peste 70% din căutările locale se fac de pe telefon. Un site care arată prost pe mobil pierde clienți înainte să apuci să spui ceva.",
    data: "5 ianuarie 2025",
    citire: "3 min",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');`}</style>

      {/* Nav */}
      <nav className="px-5 py-5 border-b border-[#f0ece7]">
        <Link to="/" className="text-sm font-medium text-[#8a7d6b] hover:text-[#1a1a1a] transition-colors">
          ← Înapoi acasă
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-5 py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-5 tracking-tight">Articole</h1>
        <p className="text-lg text-[#555] leading-relaxed mb-14 max-w-xl">
          Sfaturi practice pentru firmele mici care vor să fie mai vizibile online.
        </p>

        <div className="space-y-6">
          {articole.map((art, i) => (
            <Link
              key={i}
              to={`/blog/${art.slug}`}
              className="block p-6 rounded-2xl bg-[#fafafa] border border-[#f0ece7] hover:border-[#d4cfc8] hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-[#8a7d6b]">{art.data}</span>
                <span className="text-xs text-[#ccc]">·</span>
                <span className="text-xs text-[#8a7d6b]">{art.citire} citire</span>
              </div>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-2 group-hover:text-[#8a7d6b] transition-colors leading-snug">
                {art.titlu}
              </h2>
              <p className="text-sm text-[#666] leading-relaxed">{art.rezumat}</p>
            </Link>
          ))}
        </div>
      </div>

      <footer className="px-5 py-8 bg-[#111] text-center mt-20">
        <p className="text-sm text-[#666]">© {new Date().getFullYear()} Biță Bogdan · <Link to="/privacy" className="hover:text-[#aaa] transition-colors">Politică de confidențialitate</Link></p>
      </footer>
    </div>
  );
}