const WA = "5571984287772";

export default function Strip() {
  return (
    <section
      className="relative py-[70px] px-7 text-center overflow-hidden"
      style={{ background: "linear-gradient(135deg,#1a5a8a,#2b8fd4)" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15), transparent 50%)" }} />
      <div className="relative max-w-[1240px] mx-auto">
        <h2 className="text-white mb-[14px]" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(36px,5vw,56px)", letterSpacing: "2px" }}>
          Bora resolver sua logística?
        </h2>
        <p className="text-white/90 text-[17px] mb-[30px]">
          Manda uma mensagem agora e receba seu orçamento em minutos.
        </p>
        <a
          href={`https://wa.me/${WA}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn-white inline-flex items-center gap-2.5 font-bold text-[15px] px-7 py-4 rounded-[10px] bg-white no-underline transition-all"
          style={{ color: "#1a5a8a" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#1a5a8a">
            <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5-1.3c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
          Falar no WhatsApp · (71) 9 8428-7772
        </a>
      </div>
    </section>
  );
}
