import Image from "next/image";

const clientes = [
  {
    nombre: "Profil",
    imagen: "/Profil%20Cliente.jpg",
    descripcion: "Logotipo de Profil",
    panelClassName: "bg-[#050504]",
    imageClassName: "p-3 sm:p-4 invert",
    cardWidth: "w-[min(76vw,260px)] sm:w-[280px]",
    cardHeight: "h-[260px] sm:h-[280px]",
  },
  {
    nombre: "GL Events",
    imagen: "/GL%20events%20cliente.png",
    descripcion: "Logotipo de GL Events",
    panelClassName: "bg-[#050504]",
    imageClassName: "p-8 sm:p-10",
    cardWidth: "w-[min(76vw,260px)] sm:w-[280px]",
    cardHeight: "h-[260px] sm:h-[280px]",
  },
  {
    nombre: "Punto Parrilla Banquetes",
    imagen: "/Punto%20Parrilla%20Cliente.png",
    descripcion: "Banner de Punto Parrilla Banquetes",
    panelClassName: "bg-[#050504]",
    imageClassName: "p-0",
    cardWidth: "w-[min(92vw,520px)] sm:w-[520px]",
    cardHeight: "h-[200px] sm:h-[260px]",
  },
  {
    nombre: "Freightliner",
    imagen: "/FreigtLiner%20cliente.png",
    descripcion: "Logotipo de Freightliner",
    panelClassName: "bg-[#050504]",
    imageClassName: "p-3 sm:p-4",
    cardWidth: "w-[min(76vw,260px)] sm:w-[280px]",
    cardHeight: "h-[260px] sm:h-[280px]",
  },
  {
    nombre: "Geopower",
    imagen: "/Geopower%20Cliente.svg",
    descripcion: "Logotipo de Geopower",
    panelClassName: "bg-white",
    imageClassName: "p-3 sm:p-4",
    cardWidth: "w-[min(76vw,260px)] sm:w-[280px]",
    cardHeight: "h-[260px] sm:h-[280px]",
  },
];

function ClientLogos({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate}
      className="client-marquee-group flex shrink-0 items-stretch gap-4 pr-4"
    >
      {clientes.map((cliente) => (
        <article
          key={cliente.nombre}
          className={`group relative flex ${cliente.cardHeight} ${cliente.cardWidth} shrink-0 flex-col overflow-hidden rounded-lg border border-[#c9a84c]/20 bg-[#0f0d08] p-3 transition-colors duration-300 hover:border-[#c9a84c]/55 sm:p-4`}
        >
          <div
            className={`relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-md border border-[#2a2218] ${cliente.panelClassName}`}
          >
            <Image
              src={cliente.imagen}
              alt={duplicate ? "" : cliente.descripcion}
              fill
              unoptimized={cliente.imagen.endsWith(".svg")}
              sizes={
                cliente.nombre === "Punto Parrilla Banquetes"
                  ? "(max-width: 640px) 92vw, 520px"
                  : "(max-width: 640px) 240px, 248px"
              }
              className={`object-contain ${cliente.imageClassName}`}
            />
          </div>
          <h3 className="flex h-14 items-center justify-center px-2 text-center font-system-pro text-sm font-semibold tracking-wide text-[#f0e8d8] sm:text-base">
            {cliente.nombre}
          </h3>
          <span
            aria-hidden="true"
            className="absolute bottom-3 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-[#c9a84c]/70 to-transparent transition-transform duration-300 group-hover:scale-x-100"
          />
        </article>
      ))}
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      id="clientes"
      aria-label="Nuestros clientes"
      className="scroll-mt-[72px] overflow-hidden border-y border-[#2a2218] bg-[#0b0907] py-16 sm:py-20"
    >
      <div className="mx-auto mb-10 max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-3 font-system-pro text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c9a84c]">
          Confían en nosotros
        </div>
        <h2 className="font-system-pro text-3xl font-semibold tracking-tight text-[#f0e8d8] md:text-4xl">
          Nuestros clientes
        </h2>
        <p className="mt-4 max-w-[520px] font-system-pro text-sm leading-relaxed tracking-wide text-[#a89070] md:text-[15px]">
          Una mirada a los eventos y celebraciones que atendemos con dedicación.
        </p>
      </div>

      <div
        className="client-marquee relative"
        role="region"
        aria-label="Carrusel de logotipos de nuestros clientes"
        tabIndex={0}
      >
        <div className="client-marquee-track flex w-max">
          <ClientLogos />
          <ClientLogos duplicate />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#0b0907] to-transparent sm:w-16"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0b0907] to-transparent sm:w-16"
        />
      </div>
      <p className="mt-6 text-center font-system-pro text-[9px] font-medium uppercase tracking-[0.18em] text-[#7a6a50]">
        <span className="sm:hidden">Desliza para ver todos los clientes</span>
        <span className="hidden sm:inline">
          El carrusel avanza automáticamente y se detiene al pasar el cursor
        </span>
      </p>
    </section>
  );
}
