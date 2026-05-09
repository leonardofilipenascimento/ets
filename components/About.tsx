import Image from "next/image";

const values = [
  {
    title: "Confiança",
    desc: "Sua carga rastreada do início ao fim.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5ab8f0" strokeWidth="2"><path d="M12 2l9 4v6c0 5-3.5 9.5-9 10-5.5-.5-9-5-9-10V6z" /><path d="M9 12l2 2 4-4" /></svg>,
  },
  {
    title: "Pontualidade",
    desc: "O prazo combinado é sagrado.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5ab8f0" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  },
  {
    title: "Frota própria",
    desc: "Sem terceirização, sem surpresa.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5ab8f0" strokeWidth="2"><path d="M3 7h11v10H3z M14 11h4l3 3v3h-7z" /></svg>,
  },
  {
    title: "Atendimento",
    desc: "Resposta rápida pelo WhatsApp.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5ab8f0" strokeWidth="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z M8 12l3 3 5-6" /></svg>,
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-[100px] px-7">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[60px] items-center">
        {/* Image + badge */}
        <div className="relative rounded-[20px] overflow-hidden" style={{ aspectRatio: "4/5", border: "1px solid rgba(90,184,240,0.18)" }}>
          <Image
            src="/fiorino-ETS-mudanca.png"
            alt="Fiorino ETS Coletas"
            fill
            className="object-contain"
            sizes="(max-width:1024px) 100vw, 560px"
          />
          <div
            className="absolute bottom-6 left-6 rounded-[14px] px-[22px] py-[14px]"
            style={{ background: "#2b8fd4", boxShadow: "0 0 30px rgba(43,143,212,0.5)" }}
          >
            <strong className="block text-white leading-none" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "36px" }}>5</strong>
            <span className="text-white text-[11px] font-bold tracking-[2px]">ANOS NO MERCADO</span>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="block text-neon2 text-[12px] font-bold uppercase tracking-[3px] mb-[14px]">Sobre a ETS</span>
          <h2 className="text-white mb-[18px]" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(36px,5vw,60px)", letterSpacing: "1px", lineHeight: 1 }}>
            A logística que<br />Salvador confia.
          </h2>
          <p className="text-muted text-[16px] mb-[18px]">
            Há 5 anos a ETS Coletas e Entregas Rápidas conecta empresas e pessoas a um serviço de transporte sério, ágil e sem dor de cabeça. Começamos pequenos — hoje somos referência em Salvador e região metropolitana.
          </p>
          <p className="text-muted text-[16px]">
            Nossa frota é 100% própria, nossos motoristas são treinados e cada coleta é tratada como se fosse a única do dia.
          </p>

          <div className="grid grid-cols-2 gap-[18px] mt-8">
            {values.map((v) => (
              <div key={v.title} className="flex gap-[14px] items-start">
                <div className="flex-shrink-0 w-[42px] h-[42px] rounded-[10px] flex items-center justify-center" style={{ background: "rgba(43,143,212,0.15)" }}>
                  {v.icon}
                </div>
                <div>
                  <h4 className="text-white text-[14px] font-bold mb-1">{v.title}</h4>
                  <p className="text-muted text-[13px]">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
