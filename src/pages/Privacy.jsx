import React from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3 tracking-tight">Politică de confidențialitate</h1>
        <p className="text-sm text-[#888] mb-12">Ultima actualizare: mai 2026</p>

        <div className="space-y-10 text-[#444] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">1. Cine suntem</h2>
            <p>
              Acest site aparține lui <strong className="text-[#1a1a1a]">Biță Bogdan</strong>, persoană fizică autorizată care oferă servicii de creare website-uri pentru firme mici. Ne puteți contacta la <a href="tel:0726914400" className="text-[#8a7d6b] hover:underline">0726 914 400</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">2. Ce date colectăm</h2>
            <p className="mb-3">Acest site nu colectează date personale în mod automat. Nu folosim formulare de contact care stochează date în baze de date.</p>
            <p>Dacă ne contactați prin WhatsApp sau telefon, datele de contact (număr de telefon, mesaje) sunt procesate exclusiv pentru a răspunde solicitării dvs.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">3. Cookie-uri</h2>
            <p>
              Site-ul poate folosi cookie-uri tehnice necesare funcționării. Nu folosim cookie-uri de urmărire sau publicitate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">4. Drepturile dvs.</h2>
            <p className="mb-3">Conform GDPR, aveți dreptul să:</p>
            <ul className="space-y-2 ml-4">
              {[
                "Accesați datele personale pe care le deținem despre dvs.",
                "Solicitați corectarea sau ștergerea datelor",
                "Vă opuneți prelucrării datelor",
                "Depuneți o plângere la ANSPDCP",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#8a7d6b] mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a1a1a] mb-3">5. Contact</h2>
            <p>
              Pentru orice întrebare legată de confidențialitate, ne puteți contacta la <a href="tel:0726914400" className="text-[#8a7d6b] hover:underline">0726 914 400</a> sau pe <a href="https://wa.me/40726914400" className="text-[#8a7d6b] hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp</a>.
            </p>
          </section>
        </div>
      </div>

      <footer className="px-5 py-8 bg-[#111] text-center mt-20">
        <p className="text-sm text-[#666]">© {new Date().getFullYear()} Biță Bogdan</p>
      </footer>
    </div>
  );
}