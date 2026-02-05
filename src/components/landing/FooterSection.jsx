import React from "react";

export default function FooterSection() {
  return (
    <footer className="px-5 py-8 bg-[#111] text-center">
      <p className="text-sm text-[#666]">
        © {new Date().getFullYear()} Biță Bogdan
      </p>
    </footer>
  );
}