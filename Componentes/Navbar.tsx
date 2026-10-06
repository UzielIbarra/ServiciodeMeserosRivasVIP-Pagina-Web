import Image from "next/image";
import { WHATSAPP_BOOKING_URL } from "../lib/contact";

export default function Navbar() {
  return (
    <nav className="fixed top-3 left-[3%] right-[3%] z-50 grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-3 rounded-xl border border-[rgba(250,248,244,0.22)] bg-[#0a0a0a]/55 px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 backdrop-blur-xl backdrop-saturate-150 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
      <a
        href="#inicio"
        aria-label="Servicio de Meseros Rivas VIP, volver al inicio"
        className="group flex items-center min-w-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0bf6a]"
      >
        <Image
          src="/logo.png"
          alt=""
          width={56}
          height={56}
          quality={100}
          className="object-cover rounded-full border border-[rgba(201,168,76,0.35)] shadow-[0_0_14px_rgba(201,168,76,0.18)] shrink-0 transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(201,168,76,0.35)]"
          style={{ width: 32, height: 32 }}
        />

        <div className="w-px h-8 bg-[rgba(250,248,244,0.08)] mx-3 sm:mx-4 md:mx-4 lg:mx-5 shrink-0" />

        <div className="font-system-pro flex flex-col justify-center leading-tight min-w-0 gap-0.5">
          <span className="text-[11px] sm:text-xs font-medium tracking-[0.16em] uppercase text-sdc-cream transition-colors group-hover:text-[#e0bf6a]">
            Servicio de Meseros
          </span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-sdc-gold-soft">
            Rivas VIP
          </span>
        </div>
      </a>

      <div className="hidden md:flex justify-center items-center gap-x-7 lg:gap-x-10 font-system-pro md:px-6">
        <a
          href="#servicios"
          className="rounded-sm text-xs font-medium tracking-[0.08em] text-sdc-body transition-colors duration-300 whitespace-nowrap hover:text-sdc-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0bf6a] lg:text-sm"
        >
          Servicio
        </a>
        <a
          href="#nosotros"
          className="rounded-sm text-xs font-medium tracking-[0.08em] text-sdc-body transition-colors duration-300 whitespace-nowrap hover:text-sdc-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0bf6a] lg:text-sm"
        >
          Sobre nosotros
        </a>
        <a
          href="#resenas"
          className="rounded-sm text-xs font-medium tracking-[0.08em] text-sdc-body transition-colors duration-300 whitespace-nowrap hover:text-sdc-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0bf6a] lg:text-sm"
        >
          Reseñas
        </a>
      </div>

      <a
        href={WHATSAPP_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-system-pro justify-self-end md:justify-self-auto shrink-0 bg-sdc-gold text-[#0a0a0a] text-[10px] md:text-xs tracking-[0.1em] uppercase py-2 px-4 md:px-5 rounded-md font-semibold transition-colors duration-300 hover:bg-[#dcc174] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0bf6a] shadow-[0_6px_20px_rgba(201,168,76,0.22)]"
      >
        Contacto
      </a>
    </nav>
  );
}
