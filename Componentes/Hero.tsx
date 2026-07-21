import Image from "next/image";
import { WHATSAPP_BOOKING_URL } from "../lib/contact";

export default function Hero() {
  return (
    <section className="relative bg-[#0a0a0a] px-6 md:px-16 lg:px-20 py-16 md:py-24 border-b border-[#1a1710] overflow-hidden min-h-[min(880px,92svh)] flex items-center">

      {/* Fondo de mármol negro/dorado */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fondo.jpg"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Capas de lectura: oscurece + tinte tinto */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-[#080604]/94 via-[#080604]/78 md:via-[#080604]/55 to-transparent md:to-[58%]"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(125,31,43,0.28)_0%,transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── Columna Izquierda ── */}
        <div className="flex flex-col">
          <div
            className="font-system-pro text-[11px] md:text-[12px] font-semibold tracking-[0.26em] text-sdc-gold/90 uppercase mb-5 animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            Servicio de Meseros Rivas VIP · Guadalajara
          </div>

          <h1
            className="font-system-pro text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-sdc-cream leading-[1.1] mb-5 animate-fade-up drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]"
            style={{ animationDelay: "100ms" }}
          >
            Elegancia y servicio<br />
            <span className="text-sdc-gold-soft font-medium">en cada copa</span>
          </h1>

          <p
            className="font-system-pro text-[15px] md:text-[17px] text-sdc-body/95 leading-[1.6] mb-8 max-w-[480px] animate-fade-up tracking-wide drop-shadow-[0_1px_10px_rgba(0,0,0,0.8)]"
            style={{ animationDelay: "200ms" }}
          >
            Meseros, barra, coctelería y banquetería de alto nivel para bodas, eventos corporativos y banquetes de alta categoría.
          </p>

          <div
            className="flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 sm:gap-5"
            >
              <span className="font-system-pro inline-flex items-center justify-center bg-sdc-gold text-[#0a0a0a] text-[13px] sm:text-[14px] tracking-[0.14em] uppercase py-4 px-8 sm:py-[17px] sm:px-10 rounded-lg font-semibold shadow-[0_6px_22px_rgba(0,0,0,0.45)] transition-colors group-hover:bg-[#dcc174]">
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
              className="font-system-pro bg-[#0e0c09]/70 text-sdc-body border border-sdc-gold/35 text-[14px] md:text-[15px] tracking-[0.14em] uppercase py-3 px-6 rounded-lg transition-colors hover:bg-sdc-gold hover:text-[#0a0a0a] hover:border-sdc-gold backdrop-blur-sm"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* ── Columna derecha: imagen de marca ── */}
        <div
          className="flex justify-center md:justify-end animate-fade-up"
          style={{ animationDelay: "220ms" }}
        >
          <div className="relative w-full max-w-[420px] md:max-w-[460px] aspect-square rounded-2xl overflow-hidden border border-[rgba(201,168,76,0.4)] shadow-[0_0_40px_rgba(0,0,0,0.55),0_0_60px_rgba(125,31,43,0.25)]">
            <Image
              src="/marca.jpg"
              alt="Servicio de Meseros Rivas VIP — montaje de mesa elegante"
              fill
              priority
              quality={92}
              sizes="(max-width: 768px) 90vw, 460px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
