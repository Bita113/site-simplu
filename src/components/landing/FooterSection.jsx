import React from "react";
import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="px-5 py-8 bg-[#111] text-center">
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-3">
        <Link to="/about" className="text-sm text-[#666] hover:text-[#EA580C] transition-colors">Despre</Link>
        <Link to="/blog" className="text-sm text-[#666] hover:text-[#EA580C] transition-colors">Articole</Link>
        <Link to="/contact" className="text-sm text-[#666] hover:text-[#EA580C] transition-colors">Contact</Link>
        <Link to="/privacy" className="text-sm text-[#666] hover:text-[#EA580C] transition-colors">Confidențialitate</Link>
      </div>
      <p className="text-sm text-[#555]">
        © {new Date().getFullYear()} Biță Bogdan
      </p>
    </footer>
  );
}