const WA = "5571984287772";

export default function Hero() {
  return (
    <header
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ padding: "140px 0 80px" }}
    >
      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 20% 30%, rgba(43,143,212,0.18) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(90,184,240,0.12) 0%, transparent 50%)"
      }} />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(90,184,240,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(90,184,240,0.06) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent)",
      }} />

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-7">
        {/* Text */}
        <div>
          <div
            className="inline-flex items-center gap-2 mb-6 px-[14px] py-2 rounded-full text-neon2 text-[12px] font-semibold uppercase tracking-[1px]"
            style={{ background: "rgba(43,143,212,0.1)", border: "1px solid rgba(90,184,240,0.18)" }}
          >
            <span className="w-[6px] h-[6px] rounded-full bg-whatsapp animate-pulse-dot" style={{ boxShadow: "0 0 8px #25d366" }} />
            Atendimento ativo · Salvador e todo o Brasil
          </div>

          <h1
            className="leading-none mb-6 text-white"
            style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(48px,8vw,92px)", letterSpacing: "1px" }}
          >
            Sua carga<br />
            chega{" "}
            <span style={{
              background: "linear-gradient(135deg,#5ab8f0,#2b8fd4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
            }}>
              no prazo.
            </span>
            <br />Sem desculpa.
          </h1>

          <p className="text-muted text-[17px] max-w-[520px] mb-9" style={{ lineHeight: 1.6 }}>
            Frete, entregas e mudanças em Salvador e em todo o Brasil. Frota própria, equipe treinada e 5 anos cuidando da logística de quem não pode parar.
          </p>

          <div className="flex gap-[14px] flex-wrap">
            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-white font-bold text-[15px] px-7 py-4 rounded-[10px] no-underline transition-all hover:-translate-y-0.5"
              style={{ background: "#25d366", boxShadow: "0 0 30px rgba(37,211,102,0.4)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5-1.3c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
              Pedir orçamento no WhatsApp
            </a>
            <a
              href="#frota"
              className="inline-flex items-center text-white font-bold text-[15px] px-7 py-4 rounded-[10px] no-underline transition-all hover:bg-neon hover:text-white"
              style={{ border: "1.5px solid #2b8fd4", background: "transparent" }}
            >
              Conhecer serviços
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}
