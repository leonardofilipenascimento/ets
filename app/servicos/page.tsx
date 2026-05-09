import type { Metadata } from "next";
import Coverage from "@/components/Coverage";

export const metadata: Metadata = {
  title: "Serviços de Frete e Entregas em Salvador e Bahia",
  description:
    "Coleta e entrega de medicamentos, postagem em terminais de cargas e aeroportos, e transporte de materiais diversos em Salvador, Região Metropolitana e interior da Bahia. Solicite orçamento pelo WhatsApp.",
  keywords: [
    "coleta entrega medicamentos salvador",
    "postagem terminal de cargas aeroporto salvador",
    "frete materiais salvador bahia",
    "serviços de frete salvador",
  ],
  alternates: { canonical: "https://etscoletas.com.br/servicos" },
  openGraph: {
    title: "Serviços — ETS Coletas | Frete e Entregas em Salvador e Bahia",
    description:
      "Coleta de medicamentos, postagem em terminais de cargas e entrega de materiais. Salvador, Região Metropolitana e interior da Bahia.",
    url: "https://etscoletas.com.br/servicos",
  },
};

export default function ServicosPage() {
  return (
    <>
      <section className="pt-[140px] pb-[60px] px-7" style={{ background: "#060d1a", borderBottom: "1px solid rgba(90,184,240,0.18)" }}>
        <div className="max-w-[1240px] mx-auto">
          <span className="block text-neon2 text-[12px] font-bold uppercase tracking-[3px] mb-[14px]">O que fazemos</span>
          <h1 className="text-white" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(42px,6vw,72px)", letterSpacing: "1px", lineHeight: 1 }}>
            Nossos Serviços
          </h1>
          <p className="text-muted text-[16px] mt-4 max-w-[560px]">
            Coleta e entrega de medicamentos, postagem em terminais de cargas e aeroportos, e transporte de materiais em Salvador, Região Metropolitana e interior da Bahia.
          </p>
        </div>
      </section>
      <Coverage />
    </>
  );
}
