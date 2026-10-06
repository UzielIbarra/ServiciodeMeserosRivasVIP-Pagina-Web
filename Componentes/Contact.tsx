import Image from "next/image";
import { WHATSAPP_BOOKING_URL } from "../lib/contact";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="grid scroll-mt-[72px] grid-cols-1 items-center gap-8 border-y border-[rgba(250,248,244,0.06)] bg-[#0a0a0a] px-5 py-14 sm:px-8 md:grid-cols-2 md:gap-12 md:px-10 md:py-16"
    >
      <div className="space-y-4">
        <h2 className="font-system-pro text-3xl md:text-[2rem] font-semibold tracking-tight text-sdc-cream">
          ¿Listo para tu evento?
        </h2>
        <p className="font-system-pro text-[14px] md:text-[15px] leading-relaxed text-sdc-muted tracking-wide max-w-md">
          Contáctanos directamente por WhatsApp y cotiza el servicio de meseros para tu evento. Te respondemos a la brevedad.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <a
          href={WHATSAPP_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-system-pro flex items-center gap-4 rounded-xl border border-[rgba(155,171,156,0.28)] bg-[#0a100e]/85 px-5 py-4 transition-colors hover:border-[rgba(155,171,156,0.45)] hover:bg-[#0c1412]/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0bf6a] backdrop-blur-sm"
        >
          <Image
            src="/LOGOWHATSAPP.png"
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0 object-contain"
          />
          <div>
            <strong className="block text-[14px] md:text-[15px] text-sdc-cream font-semibold tracking-wide">
              Contactar por WhatsApp
            </strong>
            <span className="text-[12px] md:text-[13px] text-sdc-muted tracking-wide">
              Respuesta en menos de 24 hrs
            </span>
          </div>
        </a>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="rounded-xl border border-[rgba(250,248,244,0.06)] bg-[#0f0d08] px-2 py-3 text-center sm:px-3 sm:py-4">
            <span className="font-system-pro mb-1 block text-[11px] font-semibold tracking-wide text-sdc-gold-soft sm:text-[14px]">
              Todo Jalisco
            </span>
            <span className="font-system-pro text-[9px] uppercase tracking-[0.06em] text-sdc-subtle sm:text-[11px] sm:tracking-wide">
              Cobertura
            </span>
          </div>
          <div className="rounded-xl border border-[rgba(250,248,244,0.06)] bg-[#0f0d08] px-2 py-3 text-center sm:px-3 sm:py-4">
            <span className="font-system-pro mb-1 block text-[11px] font-semibold tracking-wide text-sdc-gold-soft sm:text-[14px]">
              Eventos
            </span>
            <span className="font-system-pro text-[9px] leading-4 text-sdc-subtle sm:text-[11px] sm:tracking-wide">
              Bodas · Empresas · Banquetes
            </span>
          </div>
          <div className="rounded-xl border border-[rgba(250,248,244,0.06)] bg-[#0f0d08] px-2 py-3 text-center sm:px-3 sm:py-4">
            <span className="font-system-pro mb-1 block text-[11px] font-semibold tracking-wide text-sdc-gold-soft sm:text-[14px]">
              Todo el año
            </span>
            <span className="font-system-pro text-[9px] uppercase tracking-[0.06em] text-sdc-subtle sm:text-[11px] sm:tracking-wide">
              Disponibilidad
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
