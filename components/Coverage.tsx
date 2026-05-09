const vehicles = [
  {
    title: "Coleta e Entrega de Medicamentos",
    desc: "Transporte seguro e pontual de medicamentos para clínicas, farmácias e pacientes. Agilidade e responsabilidade em cada entrega.",
    tags: ["Farmácias", "Clínicas", "Urgência"],
    img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    alt: "Van para entrega de medicamentos",
  },
  {
    title: "Terminal de Cargas e Aeroporto",
    desc: "Coleta e postagem de volumes em terminais de cargas e aeroportos. Documentação e logística de ponta a ponta.",
    tags: ["Aeroporto", "Terminal de cargas", "Despacho"],
    img: "/caminhao-frete.png",
    alt: "Caminhão para terminal de cargas",
  },
  {
    title: "Coleta e Entrega de Materiais",
    desc: "Transporte de materiais diversos para empresas e pessoas físicas em Salvador, Região Metropolitana e interior da Bahia.",
    tags: ["Materiais diversos", "Empresas", "Pessoa física"],
    img: "/entregas-de-caixa.png",
    alt: "Entrega de materiais diversos",
  },
];

export default function Coverage() {
  return (
    <section id="frota" className="py-[100px] px-7">
      <div className="max-w-[1240px] mx-auto">
        <span className="block text-neon2 text-[12px] font-bold uppercase tracking-[3px] mb-[14px]">Nossos serviços</span>
        <h2 className="text-white mb-[18px]" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(36px,5vw,60px)", letterSpacing: "1px", lineHeight: 1 }}>
          O serviço certo<br />pra cada necessidade.
        </h2>
        <p className="text-muted text-[16px] mb-[50px] max-w-[640px]">
          Atendemos Salvador, Região Metropolitana e interior da Bahia com agilidade e responsabilidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {vehicles.map((v) => (
            <div key={v.title} className="neon-card-lift rounded-[16px] overflow-hidden" style={{ background: "#0c1a2e" }}>
              <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.img}
                  alt={v.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                  className="hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="text-white mb-[6px]" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "24px", letterSpacing: "1.5px" }}>{v.title}</h4>
                <p className="text-muted text-[13.5px] mb-[14px]">{v.desc}</p>
                <div className="flex flex-wrap gap-[6px]">
                  {v.tags.map((t) => (
                    <span key={t} className="text-neon2 text-[11px] font-semibold px-[10px] py-[5px] rounded-[6px]" style={{ background: "rgba(43,143,212,0.12)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
