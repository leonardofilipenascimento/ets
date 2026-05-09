const services = [
  {
    title: "Frete",
    desc: "Transporte de cargas para empresas e comércio com pontualidade e cuidado em cada etapa.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5ab8f0" strokeWidth="1.8">
        <path d="M3 7h11v10H3z M14 11h4l3 3v3h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" />
      </svg>
    ),
    items: ["Cargas fracionadas e dedicadas", "Coleta e entrega no mesmo dia", "Acompanhamento por WhatsApp", "Emissão de nota fiscal"],
  },
  {
    title: "Entregas",
    desc: "Entregas expressas e programadas para e-commerce, lojas físicas e clientes finais.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5ab8f0" strokeWidth="1.8">
        <path d="M21 16V8l-9-5-9 5v8l9 5z" /><path d="M3 8l9 5 9-5 M12 13v9" />
      </svg>
    ),
    items: ["Entregas no mesmo dia (express)", "Roteirização inteligente", "Confirmação de recebimento", "Atendimento B2B e B2C"],
  },
  {
    title: "Mudanças",
    desc: "Mudanças residenciais e comerciais com equipe treinada e equipamentos adequados.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5ab8f0" strokeWidth="1.8">
        <path d="M3 21V9l9-6 9 6v12 M9 21V12h6v9" />
      </svg>
    ),
    items: ["Embalagem e proteção dos itens", "Desmontagem e montagem", "Carregamento e descarga", "Caminhões de diferentes portes"],
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative py-[100px] px-7"
      style={{ background: "#0c1a2e", borderTop: "1px solid rgba(90,184,240,0.18)", borderBottom: "1px solid rgba(90,184,240,0.18)" }}
    >
      <div className="max-w-[1240px] mx-auto">
        <span className="block text-neon2 text-[12px] font-bold uppercase tracking-[3px] mb-[14px]">Nossos serviços</span>
        <h2 className="text-white mb-[18px]" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(36px,5vw,60px)", letterSpacing: "1px", lineHeight: 1 }}>
          Soluções de logística<br />para quem precisa de agilidade
        </h2>
        <p className="text-muted text-[16px] mb-[50px] max-w-[640px]">
          Atendemos empresas e pessoas físicas em Salvador e toda a região metropolitana com três frentes principais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group neon-card relative rounded-[18px] p-[34px_30px] transition-all duration-300 hover:-translate-y-[6px] overflow-hidden"
              style={{ background: "#112038" }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ background: "linear-gradient(90deg,#2b8fd4,#5ab8f0)" }} />
              <div className="w-[60px] h-[60px] rounded-[14px] flex items-center justify-center mb-[22px]" style={{ background: "linear-gradient(135deg,rgba(43,143,212,0.2),rgba(90,184,240,0.05))", border: "1px solid rgba(90,184,240,0.18)" }}>
                {s.icon}
              </div>
              <h3 className="text-white mb-3" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "30px", letterSpacing: "1.5px" }}>{s.title}</h3>
              <p className="text-muted text-[14.5px] mb-[18px]">{s.desc}</p>
              <ul className="list-none flex flex-col">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-[10px] py-[6px] text-light text-[13.5px]">
                    <span className="flex-shrink-0 w-[14px] h-[2px] bg-neon2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
