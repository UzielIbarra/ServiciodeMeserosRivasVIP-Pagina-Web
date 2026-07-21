import Image from "next/image";
import { WHATSAPP_BOOKING_URL } from "../lib/contact";

export default function Hero() {
  return (
    <section className="relative bg-[#0a0a0a] px-6 md:px-20 py-20 md:py-28 border-b border-[#1a1710] overflow-hidden min-h-[min(760px,88svh)] flex items-center">

      {/* Fondo premium basado en CSS (sin imagen, alta calidad en cualquier pantalla) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,#161208_0%,#0a0a0a_55%,#050504_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_15%_18%,rgba(201,168,76,0.12)_0%,transparent_45%),radial-gradient(circle_at_85%_82%,rgba(201,168,76,0.08)_0%,transparent_50%)]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 z-0 pointer-events-none bg-gradient-to-t from-[#0a0a0a] to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center text-center">
        <div
          className="font-system-pro text-[11px] md:text-[12px] font-semibold tracking-[0.26em] text-sdc-gold/90 uppercase mb-5 animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          Servicio de Meseros Rivas VIP · Guadalajara
        </div>

        <h1
          className="font-system-pro text-4xl md:text-6xl font-semibold tracking-tight text-sdc-cream leading-[1.1] mb-6 animate-fade-up drop-shadow-[0_2px_14px_rgba(0,0,0,0.6)]"
          style={{ animationDelay: "100ms" }}
        >
          Tu evento es<br />
          <span className="text-sdc-gold-soft font-medium">nuestra obra</span>
        </h1>

        <p
          className="font-system-pro text-[15px] md:text-[17px] text-sdc-body/95 leading-[1.6] mb-9 max-w-[560px] animate-fade-up tracking-wide"
          style={{ animationDelay: "200ms" }}
        >
          Coordinación de meseros y logística de alto nivel para eventos corporativos, bodas y banquetes de alta categoría.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 sm:gap-5"
          >
            <span className="font-system-pro inline-flex items-center justify-center bg-sdc-gold text-[#0a0a0a] text-[13px] sm:text-[14px] tracking-[0.14em] uppercase py-4 px-8 sm:py-[17px] sm:px-10 rounded-lg font-semibold shadow-[0_6px_22px_rgba(0,0,0,0.38)] transition-colors group-hover:bg-[#dcc174]">
              Cotizar Evento
            </span>
            <span className="relative flex size-[52px] shrink-0 items-center justify-center sm:size-[58px] md:size-[62px] transition-transform duration-300 group-hover:scale-[1.06]">
              <Image
                src="/LOGOWHATSAPP.png"
                alt=""
                width={72}
                height={72}
                className="size-full object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]"
              />
            </span>
          </a>
          <a
            href="#servicios"
            className="font-system-pro bg-[#0e0c09]/75 text-sdc-body border border-sdc-gold/35 text-[14px] md:text-[15px] tracking-[0.14em] uppercase py-3 px-6 rounded-lg transition-colors hover:bg-sdc-gold hover:text-[#0a0a0a] hover:border-sdc-gold backdrop-blur-sm"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
