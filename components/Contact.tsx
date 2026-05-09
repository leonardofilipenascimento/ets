const WA = "5571984287772";

const cards = [
  {
    label: "WhatsApp",
    value: "(71) 9 8428-7772",
    href: `https://wa.me/${WA}`,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#25d366"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5-1.3c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" /></svg>,
  },
  {
    label: "Telefone",
    value: "(71) 9 8428-7772",
    href: "tel:+5571984287772",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5ab8f0" strokeWidth="2"><path d="M22 16.92V20a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3.08a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>,
  },
  {
    label: "E-mail",
    value: "erlanpereiracaminhoneiro@gmail.com",
    href: "mailto:erlanpereiracaminhoneiro@gmail.com",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5ab8f0" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" /></svg>,
  },
  {
    label: "Endereço",
    value: "Rua 2 de Fevereiro, 71 · Edif. Palma, Sala 102 · Salvador / BA",
    href: null,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5ab8f0" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  },
];

const social = [
  { label: "Instagram", href: "#", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r="1" fill="currentColor" /></svg> },
  { label: "Facebook", href: "#", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg> },
  { label: "WhatsApp", href: `https://wa.me/${WA}`, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5-1.3c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" /></svg> },
];

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-[100px] px-7"
      style={{ background: "#0c1a2e", borderTop: "1px solid rgba(90,184,240,0.18)" }}
    >
      <div className="max-w-[1240px] mx-auto">
        <span className="block text-neon2 text-[12px] font-bold uppercase tracking-[3px] mb-[14px]">Fale com a gente</span>
        <h2 className="text-white mb-[18px]" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(36px,5vw,60px)", letterSpacing: "1px", lineHeight: 1 }}>
          Pronto pra<br />começar?
        </h2>
        <p className="text-muted text-[16px] mb-[50px] max-w-[640px]">
          A forma mais rápida é pelo WhatsApp. Mas se preferir, ligue ou mande um e-mail.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">
          <div>
            {cards.map((c) => {
              const inner = (
                <>
                  <div className="flex-shrink-0 w-12 h-12 rounded-[12px] flex items-center justify-center" style={{ background: "rgba(43,143,212,0.15)" }}>
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="text-muted text-[13px] font-semibold uppercase tracking-[1px] mb-1">{c.label}</h4>
                    <p className="text-white text-[17px] font-semibold">{c.value}</p>
                  </div>
                </>
              );

              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  className="neon-card flex gap-[18px] items-start px-6 py-6 rounded-[14px] mb-[14px] no-underline"
                  style={{ background: "#112038" }}
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={c.label}
                  className="neon-card flex gap-[18px] items-start px-6 py-6 rounded-[14px] mb-[14px]"
                  style={{ background: "#112038" }}
                >
                  {inner}
                </div>
              );
            })}

            <div className="flex gap-[10px] mt-6">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="social-btn w-[46px] h-[46px] rounded-[12px] flex items-center justify-center no-underline"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[18px] overflow-hidden" style={{ aspectRatio: "1/1", border: "1px solid rgba(90,184,240,0.18)", background: "#112038" }}>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-38.55%2C-13.0%2C-38.40%2C-12.90&layer=mapnik"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) brightness(0.9)" }}
              loading="lazy"
              title="Mapa Salvador Bahia"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
