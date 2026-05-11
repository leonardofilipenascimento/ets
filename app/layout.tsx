import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://etscoletas.com.br"),
  title: {
    default: "ETS Coletas — Frete, Entregas e Coleta de Medicamentos em Salvador e Bahia",
    template: "%s | ETS Coletas",
  },
  description:
    "Frete, coleta e entrega de medicamentos, materiais e postagem em terminais de cargas em Salvador, Região Metropolitana e interior da Bahia. Frota própria, 5 anos no mercado. Orçamento rápido pelo WhatsApp.",
  keywords: [
    "frete salvador",
    "carreto salvador bahia",
    "coleta e entrega de medicamentos salvador",
    "entrega de medicamentos bahia",
    "frete região metropolitana salvador",
    "coleta terminal de cargas aeroporto salvador",
    "frete interior bahia",
    "transportadora salvador",
    "coleta e entrega salvador",
    "mudança salvador bahia",
    "ETS coletas entregas rápidas",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "ETS Coletas — Frete e Entregas em Salvador e Bahia",
    description:
      "Coleta e entrega de medicamentos, materiais e postagem em terminais de cargas. Salvador, Região Metropolitana e interior da Bahia. 5 anos no mercado.",
    images: [{ url: "/ets-carreto-fretes-salvador-logo.jpg", width: 800, height: 800, alt: "ETS Coletas logo" }],
    locale: "pt_BR",
    type: "website",
    siteName: "ETS Coletas e Entregas Rápidas",
  },
  twitter: {
    card: "summary_large_image",
    title: "ETS Coletas — Frete e Entregas em Salvador e Bahia",
    description:
      "Coleta e entrega de medicamentos, materiais e postagem em terminais de cargas. Salvador, Região Metropolitana e interior da Bahia.",
    images: ["/ets-carreto-fretes-salvador-logo.jpg"],
  },
  alternates: {
    canonical: "https://etscoletas.com.br",
  },
  verification: {
    other: {
      "msvalidate.01": "6DF2584AD4581482BDE91C984DADB512",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ETS Coletas e Entregas Rápidas",
  image: "https://etscoletas.com.br/ets-carreto-fretes-salvador-logo.jpg",
  "@id": "https://etscoletas.com.br",
  url: "https://etscoletas.com.br",
  telephone: "+5571984287772",
  email: "erlanpereiracaminhoneiro@gmail.com",
  taxID: "42.746.715/0001-38",
  foundingDate: "2019",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua 2 de Fevereiro, 71, Edif. Palma, Sala 102",
    addressLocality: "Salvador",
    addressRegion: "BA",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -12.9714,
    longitude: -38.5014,
  },
  areaServed: [
    { "@type": "City", name: "Salvador" },
    { "@type": "AdministrativeArea", name: "Região Metropolitana de Salvador" },
    { "@type": "AdministrativeArea", name: "Interior da Bahia" },
  ],
  description:
    "Coleta e entrega de medicamentos, materiais diversos e postagem em terminais de cargas e aeroportos. Atendemos Salvador, Região Metropolitana e interior da Bahia com frota própria.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Frete e Logística",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coleta e Entrega de Medicamentos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coleta e Postagem em Terminal de Cargas e Aeroporto" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coleta e Entrega de Materiais Diversos" } },
    ],
  },
  priceRange: "$$",
  currenciesAccepted: "BRL",
  paymentAccepted: "Dinheiro, Cartão de Crédito, Cartão de Débito, PIX",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
