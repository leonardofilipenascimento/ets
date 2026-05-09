import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contato — Solicite Orçamento de Frete em Salvador",
  description:
    "Entre em contato com a ETS Coletas para orçamento de frete, coleta e entrega de medicamentos ou materiais em Salvador e Bahia. Resposta rápida pelo WhatsApp (71) 9 8428-7772.",
  keywords: [
    "contato ETS coletas salvador",
    "orçamento frete salvador",
    "whatsapp frete salvador bahia",
    "solicitar frete salvador",
  ],
  alternates: { canonical: "https://etscoletas.com.br/contato" },
  openGraph: {
    title: "Contato — ETS Coletas | Orçamento de Frete em Salvador",
    description:
      "Solicite orçamento de frete, coleta e entrega em Salvador e Bahia. Resposta rápida pelo WhatsApp.",
    url: "https://etscoletas.com.br/contato",
  },
};

export default function ContatoPage() {
  return (
    <>
      <section className="pt-[140px] pb-[60px] px-7" style={{ background: "#060d1a", borderBottom: "1px solid rgba(90,184,240,0.18)" }}>
        <div className="max-w-[1240px] mx-auto">
          <span className="block text-neon2 text-[12px] font-bold uppercase tracking-[3px] mb-[14px]">Fale conosco</span>
          <h1 className="text-white" style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(42px,6vw,72px)", letterSpacing: "1px", lineHeight: 1 }}>
            Contato
          </h1>
          <p className="text-muted text-[16px] mt-4 max-w-[560px]">
            Solicite seu orçamento ou tire suas dúvidas. Respondemos rápido pelo WhatsApp.
          </p>
        </div>
      </section>
      <FAQ />
      <Contact />
    </>
  );
}
