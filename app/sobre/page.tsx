import type { Metadata } from "next";
import About from "@/components/About";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "Sobre a ETS Coletas — 5 Anos de Frete em Salvador e Bahia",
  description:
    "Conheça a ETS Coletas e Entregas Rápidas. 5 anos de experiência em frete, coleta e entrega de medicamentos e materiais em Salvador, Região Metropolitana e interior da Bahia. Frota própria, equipe treinada.",
  keywords: [
    "sobre ETS coletas salvador",
    "transportadora 5 anos salvador bahia",
    "empresa de frete salvador",
    "quem somos ETS coletas",
  ],
  alternates: { canonical: "https://etscoletas.com.br/sobre" },
  openGraph: {
    title: "Sobre a ETS Coletas — 5 Anos de Frete em Salvador e Bahia",
    description:
      "5 anos de experiência em frete e entregas em Salvador e interior da Bahia. Frota própria, equipe treinada.",
    url: "https://etscoletas.com.br/sobre",
  },
};

export default function SobrePage() {
  return (
    <>
      <section className="pt-[140px] pb-[60px] px-7" style={{ background: "#060d1a", borderBottom: "1px solid rgba(90,184,240,0.18)" }}>
        <div className="max-w-[1240px] mx-auto">
          <span className="block text-neon2 text-[12px] font-bold uppercase tracking-[3px] mb-[14px]">Quem somos</span>
          <h1 className="text-white" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(42px,6vw,72px)", letterSpacing: "1px", lineHeight: 1 }}>
            Sobre a ETS Coletas
          </h1>
          <p className="text-muted text-[16px] mt-4 max-w-[560px]">
            5 anos cuidando da logística de quem não pode parar. Conheça nossa história e o que nos diferencia em Salvador e no interior da Bahia.
          </p>
        </div>
      </section>
      <About />
      <Process />
    </>
  );
}
