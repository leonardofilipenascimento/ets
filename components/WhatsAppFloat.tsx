const WA = "5571984287772";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WA}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-[90] w-[60px] h-[60px] rounded-full flex items-center justify-center no-underline transition-transform hover:scale-110 animate-wpp-pulse"
      style={{ background: "#25d366" }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5-1.3c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.5 12.4c-.3.7-1.4 1.3-2 1.4-.6.1-1.1.3-3.8-.8-3.2-1.3-5.2-4.5-5.4-4.7-.2-.2-1.3-1.6-1.3-3.1s.8-2.2 1.1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4-.1.7.5.3.6 1 2.2 1 2.3.1.1.1.3 0 .5-.1.2-.2.3-.3.5-.1.2-.3.4-.4.5-.1.1-.3.3-.1.6.2.2.7 1.2 1.6 1.9 1.1.9 2 1.3 2.3 1.4.3.1.4.1.6-.1.2-.2.7-.8.9-1.1.2-.2.4-.2.7-.1.3.1 1.7.8 2 .9.3.1.5.2.6.3.1.1.1.7-.1 1.4z" />
      </svg>
    </a>
  );
}
