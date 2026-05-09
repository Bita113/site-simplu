import React from "react";
import { Link, useParams } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const articole = {
  "de-ce-are-nevoie-firma-ta-de-un-site": {
    titlu: "De ce are nevoie firma ta de un site în 2025",
    data: "15 aprilie 2025",
    citire: "3 min",
    continut: [
      {
        tip: "paragraf",
        text: "Imaginează-ți că un potențial client caută pe Google \"instalator Cluj\" sau \"frizerie câini București\". Dacă nu ai un site, nu apari. Simplu.",
      },
      {
        tip: "titlu",
        text: "Realitatea din 2025",
      },
      {
        tip: "paragraf",
        text: "Peste 60% din oameni caută online înainte să sune sau să meargă fizic la o firmă. Dacă nu ești acolo, aleg concurența — chiar dacă tu faci o treabă mai bună.",
      },
      {
        tip: "titlu",
        text: "Ce face un site simplu pentru tine",
      },
      {
        tip: "lista",
        items: [
          "Apari pe Google când cineva caută ce oferi tu",
          "Clienții găsesc numărul tău de telefon imediat",
          "Arăți profesionist față de concurența fără site",
          "Funcționează 24/7, chiar și când dormi",
        ],
      },
      {
        tip: "paragraf",
        text: "Nu ai nevoie de ceva complicat. O pagină clară, cu serviciile tale și un buton de apel, e suficientă pentru a face diferența.",
      },
      {
        tip: "titlu",
        text: "Concluzie",
      },
      {
        tip: "paragraf",
        text: "Un site simplu nu e un lux — e o unealtă de bază pentru orice firmă care vrea să crească. Costul e mic, beneficiile sunt reale și continue.",
      },
    ],
  },
  "cat-costa-un-site-pentru-o-firma-mica": {
    titlu: "Cât costă un site pentru o firmă mică?",
    data: "2 martie 2025",
    citire: "4 min",
    continut: [
      {
        tip: "paragraf",
        text: "Când cauți online prețuri pentru un site, găsești oferte de la 200 lei la 5.000 lei și mai mult. Ce diferență e între ele? Îți explic clar.",
      },
      {
        tip: "titlu",
        text: "Site gratuit sau ieftin (0 – 100 lei/lună)",
      },
      {
        tip: "paragraf",
        text: "Platforme ca Wix sau Squarespace îți permit să faci singur un site. Problema: durează mult, rezultatul arată adesea generic și nu e optimizat pentru Google.",
      },
      {
        tip: "titlu",
        text: "Site personalizat simplu (500 – 1.500 lei)",
      },
      {
        tip: "paragraf",
        text: "Un profesionist îți face o pagină de prezentare personalizată, adaptată exact firmei tale. Design curat, optimizat pentru telefon, gata în câteva zile. Acesta e intervalul în care lucrez.",
      },
      {
        tip: "titlu",
        text: "Site complex (2.000 – 10.000+ lei)",
      },
      {
        tip: "paragraf",
        text: "Magazine online, platforme cu conturi de utilizatori, sisteme de rezervări — toate costă mai mult pentru că sunt mai complexe de construit și întreținut.",
      },
      {
        tip: "titlu",
        text: "Ce ai nevoie de fapt?",
      },
      {
        tip: "paragraf",
        text: "Pentru 90% din firmele mici, o pagină simplă de prezentare e tot ce trebuie. Nu plăti pentru funcționalități pe care nu le vei folosi.",
      },
    ],
  },
  "cum-apar-pe-google-cu-firma-mea": {
    titlu: "Cum să apari pe Google cu firma ta locală",
    data: "18 februarie 2025",
    citire: "5 min",
    continut: [
      {
        tip: "paragraf",
        text: "Există câteva lucruri concrete pe care orice firmă mică le poate face pentru a fi găsită mai ușor pe Google. Nu e magie — e metodă.",
      },
      {
        tip: "titlu",
        text: "1. Google Business Profile (gratuit)",
      },
      {
        tip: "paragraf",
        text: "Înregistrează-ți firma pe Google Maps. E gratuit și e primul lucru pe care Google îl arată când cineva caută o firmă locală. Adaugă poze, program, număr de telefon.",
      },
      {
        tip: "titlu",
        text: "2. Un site cu cuvintele potrivite",
      },
      {
        tip: "paragraf",
        text: "Site-ul tău trebuie să conțină ce faci și unde faci: \"electrician autorizat București\" sau \"coafor câini Cluj\". Google înțelege asta și te arată când cineva caută exact asta.",
      },
      {
        tip: "titlu",
        text: "3. Recenzii de la clienți",
      },
      {
        tip: "paragraf",
        text: "Roagă clienții mulțumiți să lase o recenzie pe Google. Firmele cu recenzii bune apar mai sus și inspiră mai multă încredere.",
      },
      {
        tip: "titlu",
        text: "4. Răbdare",
      },
      {
        tip: "paragraf",
        text: "SEO local nu e instantaneu. În 1–3 luni după ce ai site-ul și profilul Google, vei vedea rezultate concrete.",
      },
    ],
  },
  "site-optimizat-pentru-telefon": {
    titlu: "De ce trebuie site-ul tău să funcționeze perfect pe telefon",
    data: "5 ianuarie 2025",
    citire: "3 min",
    continut: [
      {
        tip: "paragraf",
        text: "Statisticile sunt clare: peste 70% din căutările locale se fac de pe smartphone. Dacă site-ul tău arată prost pe telefon, pierzi cei mai mulți vizitatori.",
      },
      {
        tip: "titlu",
        text: "Ce înseamnă \"optimizat pentru telefon\"",
      },
      {
        tip: "lista",
        items: [
          "Textul se citește fără să dai zoom",
          "Butoanele sunt destul de mari pentru a fi apăsate cu degetul",
          "Site-ul se încarcă repede chiar și pe 4G",
          "Numărul de telefon e un link de apel direct",
        ],
      },
      {
        tip: "titlu",
        text: "Cum penalizează Google site-urile neoptimizate",
      },
      {
        tip: "paragraf",
        text: "Din 2021, Google folosește \"mobile-first indexing\" — adică evaluează site-ul tău în primul rând prin prisma versiunii mobile. Un site prost pe telefon va apărea mai jos în rezultate.",
      },
      {
        tip: "titlu",
        text: "Concluzie",
      },
      {
        tip: "paragraf",
        text: "Orice site pe care îl creez e gândit de la început pentru telefon. Nu e o opțiune — e o cerință de bază în 2025.",
      },
    ],
  },
};

export default function ArticolBlog() {
  const { slug } = useParams();
  const articol = articole[slug];

  if (!articol) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-5" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <div className="text-center">
          <p className="text-[#888] mb-4">Articolul nu a fost găsit.</p>
          <Link to="/blog" className="text-[#8a7d6b] hover:underline">← Înapoi la articole</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');`}</style>

      <nav className="px-5 py-5 border-b border-[#f0ece7]">
        <Link to="/blog" className="text-sm font-medium text-[#8a7d6b] hover:text-[#1a1a1a] transition-colors">
          ← Înapoi la articole
        </Link>
      </nav>

      <article className="max-w-3xl mx-auto px-5 py-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm text-[#8a7d6b]">{articol.data}</span>
          <span className="text-[#ccc]">·</span>
          <span className="text-sm text-[#8a7d6b]">{articol.citire} citire</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-12 tracking-tight leading-tight">
          {articol.titlu}
        </h1>

        <div className="space-y-6 text-[#444] leading-relaxed">
          {articol.continut.map((bloc, i) => {
            if (bloc.tip === "paragraf") {
              return <p key={i} className="text-base">{bloc.text}</p>;
            }
            if (bloc.tip === "titlu") {
              return <h2 key={i} className="text-xl font-semibold text-[#1a1a1a] pt-4">{bloc.text}</h2>;
            }
            if (bloc.tip === "lista") {
              return (
                <ul key={i} className="space-y-2 ml-1">
                  {bloc.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-[#8a7d6b] font-bold mt-0.5 flex-shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>

        <div className="mt-14 p-6 rounded-2xl bg-[#fafafa] border border-[#f0ece7]">
          <p className="text-base font-semibold text-[#1a1a1a] mb-2">Vrei un site pentru firma ta?</p>
          <p className="text-sm text-[#666] mb-5">Scrie-mi și discutăm dacă un site simplu te-ar ajuta. Fără obligații.</p>
          <a
            href="https://wa.me/40726914400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-medium text-sm hover:bg-[#1fb855] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Scrie pe WhatsApp
          </a>
        </div>
      </article>

      <footer className="px-5 py-8 bg-[#111] text-center mt-10">
        <p className="text-sm text-[#666]">© {new Date().getFullYear()} Biță Bogdan · <Link to="/privacy" className="hover:text-[#aaa] transition-colors">Politică de confidențialitate</Link></p>
      </footer>
    </div>
  );
}