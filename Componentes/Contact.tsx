import Image from "next/image";
import { WHATSAPP_BOOKING_URL } from "../lib/contact";

export default function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="relative isolate scroll-mt-[72px] overflow-hidden border-y border-[#c9a84c]/15 bg-[#090807] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_83%_12%,rgba(201,168,76,0.12),transparent_38%),linear-gradient(128deg,transparent_48%,rgba(125,31,43,0.055)_100%)]"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="max-w-xl">
          <div className="mb-6 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-[#c9a84c]/80" />
            <p className="font-system-pro text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c9a84c]">
              El primer paso
            </p>
          </div>
          <h2
            id="contacto-titulo"
            className="font-system-pro text-[2.5rem] font-medium leading-[1.03] tracking-[-0.055em] text-[#f0e8d8] sm:text-5xl lg:text-[3.4rem]"
          >
            Tu evento merece
            <span className="mt-1 block font-normal text-[#c9a84c]">
              un servicio a su altura.
            </span>
          </h2>
          <p className="mt-6 max-w-md font-system-pro text-sm leading-7 tracking-[0.015em] text-[#a89070] sm:text-[15px]">
            Cuéntanos qué estás organizando. Te ayudamos a encontrar el servicio
            ideal para recibir a tus invitados como merecen.
          </p>
        </div>

        <div className="border-y border-[#c9a84c]/20">
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-28 items-center gap-4 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0bf6a] sm:gap-6 sm:py-7"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#c9a84c]/30 bg-[#0f0d08] transition-colors duration-300 group-hover:border-[#c9a84c]/65 group-hover:bg-[#17120a] sm:size-14">
              <Image
                src="/LOGOWHATSAPP.png"
                alt=""
                width={40}
                height={40}
                className="size-7 object-contain sm:size-8"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="mb-1 block font-system-pro text-[9px] font-semibold uppercase tracking-[0.22em] text-[#7a6a50]">
                Atención directa
              </span>
              <strong className="block font-system-pro text-base font-medium tracking-[-0.02em] text-[#f0e8d8] sm:text-lg">
                Hablemos de tu evento
              </strong>
              <span className="mt-1 block font-system-pro text-xs tracking-wide text-[#a89070]">
                Respondemos en menos de 24 horas
              </span>
            </span>
            <span
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#c9a84c]/20 text-[#e0bf6a] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#c9a84c]/60 group-hover:bg-[#c9a84c]/10"
            >
              <svg viewBox="0 0 20 20" fill="none" className="size-4">
                <path
                  d="M3.75 10h12.5m-5-5 5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
              </svg>
            </span>
          </a>

          <div className="grid grid-cols-3 border-t border-[#f0e8d8]/[0.08] py-5 sm:py-6">
            <div className="pr-2 sm:pr-4">
              <span aria-hidden="true" className="mb-3 block h-px w-5 bg-[#c9a84c]/60" />
              <span className="block font-system-pro text-xs font-medium tracking-wide text-[#f0e8d8] sm:text-sm">
                Jalisco
              </span>
              <span className="mt-1 block font-system-pro text-[9px] uppercase tracking-[0.12em] text-[#7a6a50] sm:text-[10px]">
                Cobertura
              </span>
            </div>
            <div className="border-x border-[#f0e8d8]/[0.08] px-3 sm:px-5">
              <span aria-hidden="true" className="mb-3 block h-px w-5 bg-[#c9a84c]/60" />
              <span className="block font-system-pro text-xs font-medium tracking-wide text-[#f0e8d8] sm:text-sm">
                Todo el año
              </span>
              <span className="mt-1 block font-system-pro text-[9px] uppercase tracking-[0.12em] text-[#7a6a50] sm:text-[10px]">
                Disponibilidad
              </span>
            </div>
            <div className="pl-3 sm:pl-5">
              <span aria-hidden="true" className="mb-3 block h-px w-5 bg-[#c9a84c]/60" />
              <span className="block font-system-pro text-xs font-medium tracking-wide text-[#f0e8d8] sm:text-sm">
                A tu medida
              </span>
              <span className="mt-1 block font-system-pro text-[9px] uppercase tracking-[0.12em] text-[#7a6a50] sm:text-[10px]">
                Cada ocasión
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
