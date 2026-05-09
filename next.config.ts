import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Impede que a página seja exibida em iframes (clickjacking)
          { key: "X-Frame-Options", value: "DENY" },
          // Impede o browser de inferir o tipo de arquivo
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Controla informações do referrer enviadas a terceiros
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Habilita proteção XSS em browsers legados
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Permite apenas HTTPS pelos próximos 2 anos
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Restringe permissões do browser (câmera, microfone, etc.)
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Cache longo para imagens otimizadas
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
