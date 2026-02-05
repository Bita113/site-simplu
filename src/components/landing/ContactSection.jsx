import React from "react";
import { MessageCircle, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="px-5 py-20 sm:py-28 bg-[#1a1a1a]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight">
          Contact
        </h2>
        <p className="text-lg text-[#aaa] leading-relaxed mb-10 max-w-xl mx-auto">
          Dacă vrei să vezi exemple sau să discutăm dacă un site te-ar ajuta, scrie-mi.
        </p>
        
        <div className="mb-10">
          <p className="text-white font-semibold text-lg mb-1">Biță Bogdan</p>
          <p className="text-[#aaa] text-base">Telefon / WhatsApp: 0726 914 400</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/40726914400"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-medium text-base hover:bg-[#1fb855] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Scrie pe WhatsApp
          </a>
          <a
            href="tel:0726914400"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-[#444] text-white font-medium text-base hover:border-[#888] transition-colors"
          >
            <Phone className="w-5 h-5" />
            Sună acum
          </a>
        </div>
      </div>
    </section>
  );
}