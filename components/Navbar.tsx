"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WA = "5571984287772";

const links = [
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{ backdropFilter: "blur(14px)", background: "rgba(6,13,26,0.85)", borderBottom: "1px solid rgba(90,184,240,0.18)" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-7 h-[72px]"
    >
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div className="w-[42px] h-[42px] rounded-[10px] overflow-hidden flex-shrink-0" style={{ background: "linear-gradient(135deg,#5ab8f0,#1a5a8a)" }}>
          <Image src="/ets-carreto-fretes-salvador-logo.jpg" alt="ETS Logo" width={42} height={42} className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-white" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "24px", letterSpacing: "3px" }}>ETS Coletas</span>
          <small style={{ fontFamily: "var(--font-inter)", fontSize: "9px", color: "#5ab8f0", letterSpacing: "2.5px", fontWeight: 700, marginTop: "3px" }}>
            FRETES E MUDANÇAS
          </small>
        </div>
      </Link>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-muted text-[14px] font-medium hover:text-neon2 transition-colors no-underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/${WA}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 text-white text-[13px] font-bold px-5 py-[11px] rounded-lg no-underline transition-all hover:-translate-y-px"
        style={{ background: "#25d366", boxShadow: "0 0 20px rgba(37,211,102,0.3)" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5-1.3c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
        </svg>
        Orçamento
      </a>

      <button
        className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1 cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
      >
        <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {open && (
        <div
          className="md:hidden fixed top-[72px] left-0 right-0 px-6 py-6 flex flex-col gap-5"
          style={{ background: "rgba(6,13,26,0.97)", borderTop: "1px solid rgba(90,184,240,0.18)" }}
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/80 text-[15px] font-medium hover:text-neon2 transition-colors no-underline">
              {l.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${WA}`}
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 text-white text-center px-6 py-3 rounded-lg text-[14px] font-bold no-underline"
            style={{ background: "#25d366" }}
          >
            Orçamento no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
