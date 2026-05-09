import React from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-5 tracking-tight">Contact</h1>
        <p className="text-lg text-[#555] leading-relaxed mb-12 max-w-xl">
          Dacă vrei să discutăm despre un site pentru afacerea ta, scrie-mi pe WhatsApp sau sună direct. Răspund de obicei în câteva ore.
        </p>

        <div className="space-y-5 mb-12">
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#fafafa] border border-[#f0ece7]">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#e8e4df] flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-[#8a7d6b]" />
            </div>
            <div>
              <p className="text-sm text-[#888] mb-0.5">Telefon / WhatsApp</p>
              <a href="tel:0726914400" className="text-base font-semibold text-[#1a1a1a] hover:text-[#8a7d6b] transition-colors">
                0726 914 400
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#fafafa] border border-[#f0ece7]">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#e8e4df] flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-4 h-4 text-[#8a7d6b]" />
            </div>
            <div>
              <p className="text-sm text-[#888] mb-0.5">WhatsApp direct</p>
              <a href="https://wa.me/40726914400" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-[#1a1a1a] hover:text-[#8a7d6b] transition-colors">
                Deschide conversația
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/40726914400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-medium text-base hover:bg-[#1fb855] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Scrie pe WhatsApp
          </a>
          <a
            href="tel:0726914400"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-[#e8e4df] text-[#1a1a1a] font-medium text-base hover:border-[#8a7d6b] transition-colors"
          >
            <Phone className="w-5 h-5" />
            Sună acum
          </a>
        </div>
      </div>

      <footer className="px-5 py-8 bg-[#111] text-center mt-20">
        <p className="text-sm text-[#666]">© {new Date().getFullYear()} Biță Bogdan · <Link to="/privacy" className="hover:text-[#aaa] transition-colors">Politică de confidențialitate</Link></p>
      </footer>
    </div>
  );
}