const reasons = [
  { num: "01", title: "Frota própria", desc: "Caminhões e veículos do nosso pátio. Sem repasse pra terceiro, sem desculpa de atraso." },
  { num: "02", title: "5 anos de mercado", desc: "Experiência consolidada em coletas, fretes e mudanças em Salvador e região." },
  { num: "03", title: "Equipe treinada", desc: "Motoristas e ajudantes capacitados para cuidar da sua carga como se fosse nossa." },
  { num: "04", title: "Orçamento rápido", desc: "Resposta em minutos pelo WhatsApp. Sem burocracia, sem enrolação." },
];

export default function Process() {
  return (
    <section
      id="porque"
      className="py-[100px] px-7"
      style={{ background: "#0c1a2e", borderTop: "1px solid rgba(90,184,240,0.18)", borderBottom: "1px solid rgba(90,184,240,0.18)" }}
    >
      <div className="max-w-[1240px] mx-auto">
        <span className="block text-neon2 text-[12px] font-bold uppercase tracking-[3px] mb-[14px]">Por que escolher a ETS</span>
        <h2 className="text-white mb-[18px]" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(36px,5vw,60px)", letterSpacing: "1px", lineHeight: 1 }}>
          Quatro motivos<br />que fazem a diferença.
        </h2>
        <p className="text-muted text-[16px] mb-[50px] max-w-[640px]">
          Não é só sobre transportar — é sobre entregar tranquilidade junto com a carga.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <div
              key={r.num}
              className="neon-card-lift rounded-[16px] px-[26px] py-8"
              style={{ background: "#112038" }}
            >
              <div className="text-neon2 mb-4 leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "40px", letterSpacing: "2px" }}>{r.num}</div>
              <h4 className="text-white mb-[10px]" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "24px", letterSpacing: "1px" }}>{r.title}</h4>
              <p className="text-muted text-[14px]">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
