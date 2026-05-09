export default function Footer() {
  return (
    <footer
      className="py-[30px] px-7"
      style={{ background: "#040a14", borderTop: "1px solid rgba(90,184,240,0.18)" }}
    >
      <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row justify-between items-center flex-wrap gap-6">
        <small className="text-muted text-[13px]">
          © 2026 ETS Coletas e Entregas Rápidas · CNPJ 42.746.715/0001-38 · Salvador / BA
        </small>
        <div className="flex gap-6 text-[13px]">
          {[
            { href: "#frota", label: "Serviços" },
            { href: "#sobre", label: "Sobre" },
            { href: "#contato", label: "Contato" },
          ].map((l) => (
            <a key={l.href} href={l.href} className="text-muted hover:text-neon2 transition-colors no-underline">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
