import { WHATSAPP_BOOKING_URL } from "../lib/contact";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-[#c9a84c]/20 bg-[#070605]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_0%,rgba(201,168,76,0.09),transparent_48%)]"
      />
      <div className="mx-auto flex max-w-7xl flex-col gap-9 px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="max-w-xl">
          <div className="mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-[#c9a84c]/80" />
            <p className="font-system-pro text-[9px] font-semibold uppercase tracking-[0.3em] text-[#c9a84c] sm:text-[10px]">
              Servicio de excelencia · Guadalajara
            </p>
          </div>
          <h2 className="font-system-pro text-[1.65rem] font-medium leading-tight tracking-[-0.045em] text-[#f0e8d8] sm:text-3xl">
            Cada detalle cuenta.
            <span className="mt-1 block font-normal tracking-[-0.02em] text-[#a89070]">
              Hagamos memorable tu evento.
            </span>
          </h2>
        </div>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between lg:justify-end lg:gap-8">
          <div>
            <p className="font-system-pro text-xs font-medium tracking-wide text-[#f0e8d8]">
              Servicio de Meseros Rivas VIP
            </p>
            <p className="mt-1 font-system-pro text-[11px] tracking-wide text-[#7a6a50]">
              Guadalajara, Jalisco · México
            </p>
          </div>
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-4 border border-[#c9a84c]/40 px-5 py-3 font-system-pro text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e0bf6a] transition-colors hover:border-[#e0bf6a] hover:bg-[#c9a84c]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0bf6a]"
          >
            <span>Platiquemos de tu evento</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              className="size-3 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M2.5 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-[#f0e8d8]/[0.07] px-6 py-4 font-system-pro text-[9px] uppercase tracking-[0.16em] text-[#5a4e38] sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <span>Atención, hospitalidad y detalle</span>
        <span>Todo Jalisco</span>
      </div>
    </footer>
  );
}
