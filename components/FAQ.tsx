const faqs = [
  {
    q: "Quais regiões vocês atendem?",
    a: "Atendemos Salvador, toda a Região Metropolitana da Bahia e todo o Brasil. Entre em contato para consultar sua região.",
  },
  {
    q: "Como funciona o pedido de orçamento?",
    a: "É só mandar uma mensagem no WhatsApp informando o que será transportado, origem, destino e data desejada. Em poucos minutos retornamos com o valor e os detalhes do serviço.",
  },
  {
    q: "Vocês emitem nota fiscal?",
    a: "Sim. Trabalhamos formalmente e emitimos nota fiscal de serviço para todas as operações que necessitam, especialmente para clientes empresariais.",
  },
  {
    q: "Em quanto tempo a entrega é feita?",
    a: "Entregas urbanas são feitas no mesmo dia ou D+1, dependendo do horário do pedido. Para mudanças e fretes maiores, o prazo é combinado de acordo com a complexidade do serviço.",
  },
  {
    q: "Vocês fornecem ajudantes para mudança?",
    a: "Sim. Disponibilizamos ajudantes treinados para carregamento, descarga, embalagem e até montagem/desmontagem de móveis quando necessário.",
  },
  {
    q: "A carga tem seguro?",
    a: "Trabalhamos com responsabilidade total sobre a carga durante o transporte. Para cargas de alto valor, oferecemos opção de seguro complementar — fale com a gente para detalhes.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-[100px] px-7">
      <div className="max-w-[1240px] mx-auto">
        <span className="block text-neon2 text-[12px] font-bold uppercase tracking-[3px] mb-[14px]">Dúvidas frequentes</span>
        <h2 className="text-white mb-[18px]" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(36px,5vw,60px)", letterSpacing: "1px", lineHeight: 1 }}>
          Antes de pedir<br />seu orçamento.
        </h2>
        <p className="text-muted text-[16px] mb-[50px] max-w-[640px]">
          As perguntas que mais recebemos. Não achou a sua? Manda no WhatsApp.
        </p>

        <div className="max-w-[820px] mx-auto flex flex-col gap-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="rounded-[12px] overflow-hidden group"
              style={{ background: "#0c1a2e", border: "1px solid rgba(90,184,240,0.18)" }}
            >
              <summary
                className="flex justify-between items-center gap-4 px-[26px] py-[22px] cursor-pointer font-semibold text-[16px] text-white list-none"
                style={{ WebkitAppearance: "none" }}
              >
                {f.q}
                <span className="flex-shrink-0 text-neon2 text-[24px] leading-none transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="px-[26px] pb-[22px] text-muted text-[14.5px]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
