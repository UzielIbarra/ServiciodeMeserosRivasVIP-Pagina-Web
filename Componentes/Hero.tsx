import Image from "next/image";
import { WHATSAPP_BOOKING_URL } from "../lib/contact";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center overflow-hidden bg-[#0a0a0a]"
      style={{
        boxSizing: "border-box",
        minHeight: "100svh",
        margin: "2px 2px 0",
        padding: "clamp(4rem, 12vw, 6rem) 0",
        border: "1px solid rgba(250, 248, 244, 0.12)",
        borderRadius: "7px",
      }}
    >

      {/* Se sirve el PNG original para evitar pérdida por conversión u optimización. */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/marmol.png"
          alt=""
          fill
          priority
          sizes="100vw"
          unoptimized
          className="object-cover object-center"
        />
      </div>

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        aria-hidden
      />

      {/* Capas de lectura: oscurece + tinte tinto */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8, 6, 4, 0.58), rgba(8, 6, 4, 0.3) 34%, transparent 56%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(125,31,43,0.14)_0%,transparent_55%)]"
        aria-hidden
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] hidden overflow-hidden lg:block"
      >
        <div className="hero-waiter-backdrop absolute right-[2%] top-[5%] h-[88%] w-[61%]" />
        <div className="hero-waiter-glow absolute right-[5%] top-[11%] h-[76%] w-[54%] rounded-full" />
        <div className="hero-waiter-ground absolute bottom-[2%] right-[4%] h-16 w-[54%] rounded-[50%]" />
        <div
          className="hero-waiter-stage absolute right-[1%] top-1/2 aspect-[2400/1340] w-[min(64vw,1080px)] -translate-y-1/2"
        >
          <Image
            src="/Mesero.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1280px) 64vw, 1080px"
            className="hero-waiter-cutout object-contain object-center"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 7%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 7%, black 92%, transparent 100%)",
            }}
          />
        </div>
      </div>

      <div
        className="relative z-10 mx-auto"
        style={{
          width: "88%",
          transform: "translateY(clamp(0px, 7.8vw, 80px))",
        }}
      >

        <div className="flex flex-col">
          <div
            className="font-system-pro text-[11px] font-semibold tracking-[0.2em] text-sdc-gold/90 uppercase mb-3 animate-fade-up"
            style={{
              animationDelay: "0ms",
              fontSize: "clamp(11px, 0.8vw, 15px)",
              display: "inline-flex",
              alignSelf: "flex-start",
              alignItems: "center",
              border: "1px solid rgba(212, 196, 154, 0.48)",
              borderRadius: "999px",
              backgroundColor: "rgba(5, 5, 5, 0.52)",
              padding: "0.45rem 0.9rem",
              marginBottom: "1.25rem",
              letterSpacing: "0.1em",
            }}
          >
            Servicio de excelencia · Guadalajara
          </div>

          <h1
            className="font-system-pro text-4xl font-semibold tracking-tight text-sdc-cream leading-[1.1] mb-3 animate-fade-up drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]"
            style={{
              animationDelay: "100ms",
              fontSize: "clamp(2.25rem, 4vw, 4.75rem)",
              maxWidth: "900px",
              marginBottom: "1rem",
              lineHeight: 1.06,
            }}
          >
            Elegancia y servicio<br />
            <span className="font-medium">en cada copa</span>
          </h1>

          <p
            className="font-system-pro text-[15px] text-sdc-body/95 leading-[1.6] mb-5 animate-fade-up tracking-wide drop-shadow-[0_1px_10px_rgba(0,0,0,0.8)]"
            style={{
              animationDelay: "200ms",
              maxWidth: "min(600px, max(42vw, 20rem))",
              marginBottom: "1.5rem",
              fontSize: "clamp(14px, 1.1vw, 20px)",
              lineHeight: 1.7,
            }}
          >
            Meseros, barra, coctelería y banquetería de alto nivel para bodas, eventos corporativos y banquetes de alta categoría.
          </p>

          <div
            className="flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: "300ms", gap: "0.75rem" }}
          >
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5"
            >
              <span
                className="font-system-pro inline-flex items-center justify-center bg-sdc-gold text-[#0a0a0a] text-[11px] tracking-[0.12em] uppercase py-2 px-4 rounded-md font-semibold shadow-[0_6px_22px_rgba(0,0,0,0.45)] transition-colors group-hover:bg-[#dcc174]"
                style={{
                  fontSize: "clamp(11px, 0.9vw, 15px)",
                  padding: "0.7rem 1.25rem",
                }}
              >
                Cotizar Evento
              </span>
              <span
                className="relative flex size-[42px] shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-[1.06]"
                style={{ width: "clamp(28px, 2.8vw, 42px)", height: "clamp(28px, 2.8vw, 42px)" }}
              >
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
              className="font-system-pro bg-[#0e0c09]/70 text-sdc-body border border-sdc-gold/35 text-[11px] tracking-[0.12em] uppercase py-2 px-3 rounded-md transition-colors hover:bg-sdc-gold hover:text-[#0a0a0a] hover:border-sdc-gold backdrop-blur-sm"
              style={{
                fontSize: "clamp(11px, 0.9vw, 15px)",
                padding: "0.7rem 1rem",
              }}
            >
              Ver servicios
            </a>
          </div>

          <div
            className="mt-8 flex flex-wrap items-center gap-5 animate-fade-up"
            style={{ animationDelay: "400ms" }}
            aria-label="Experiencia y eventos realizados"
          >
            <div className="flex items-center gap-2.5">
              <span
                className="font-system-pro text-sdc-gold-soft font-semibold leading-none"
                style={{ fontSize: "clamp(1.75rem, 2.5vw, 3rem)" }}
              >
                6
              </span>
              <span className="font-system-pro text-[10px] sm:text-xs uppercase tracking-[0.08em] text-sdc-body/75 leading-tight">
                Años de<br />experiencia
              </span>
            </div>
            <span
              className="h-10 w-px bg-[rgba(250,248,244,0.2)]"
              aria-hidden="true"
            />
            <div className="flex items-center gap-2.5">
              <span
                className="font-system-pro text-sdc-gold-soft font-semibold leading-none"
                style={{ fontSize: "clamp(1.75rem, 2.5vw, 3rem)" }}
              >
                300+
              </span>
              <span className="font-system-pro text-[10px] sm:text-xs uppercase tracking-[0.08em] text-sdc-body/75 leading-tight">
                Eventos<br />realizados
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
