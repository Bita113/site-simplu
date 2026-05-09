import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export default function About() {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-5 tracking-tight">Despre mine</h1>

        <div className="prose prose-lg max-w-none text-[#444] leading-relaxed space-y-6">
          <p>
            Mă numesc <strong className="text-[#1a1a1a]">Biță Bogdan</strong> și ajut firme mici și meșteșugari să apară pe internet cu un site simplu și clar.
          </p>
          <p>
            Am observat că mulți oameni care fac o treabă bună — instalatori, frizeri, constructori, veterinari — nu au nicio prezență online. Clienții îi caută pe Google și nu îi găsesc. Asta înseamnă că pierd clienți în fiecare zi, fără să știe.
          </p>
          <p>
            Nu fac site-uri complicate, cu magazine online sau sisteme complexe. Fac exact ce au nevoie firmele mici: <strong className="text-[#1a1a1a]">o pagină clară de prezentare</strong>, cu serviciile tale, cu numărul de telefon vizibil și un design care arată bine pe orice telefon.
          </p>

          <div className="p-6 rounded-2xl bg-[#fafafa] border border-[#f0ece7] not-prose">
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-4">Ce mă diferențiază</h2>
            <ul className="space-y-3">
              {[
                "Livrare rapidă — site-ul tău gata în câteva zile",
                "Prețuri corecte, fără abonament lunar ascuns",
                "Site optimizat pentru telefon de la început",
                "Ușor de găsit pe Google",
                "Suport direct pe WhatsApp",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#8a7d6b] font-bold mt-0.5">—</span>
                  <span className="text-[#444]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Dacă vrei să discutăm dacă un site te-ar ajuta, scrie-mi oricând. Nu există nicio obligație.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="https://wa.me/40726914400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1a1a1a] text-white font-medium text-base hover:bg-[#333] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Hai să vorbim
          </a>
        </div>
      </div>

      <footer className="px-5 py-8 bg-[#111] text-center mt-20">
        <p className="text-sm text-[#666]">© {new Date().getFullYear()} Biță Bogdan · <Link to="/privacy" className="hover:text-[#aaa] transition-colors">Politică de confidențialitate</Link></p>
      </footer>
    </div>
  );
}