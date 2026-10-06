import Image from "next/image";

const services = [
  {
    name: "Servicio de meseros",
    description:
      "Personal profesional, uniformado y atento para brindar una atención impecable.",
    image: "/Meseros%201.png",
    imageAlt: "Mesero atendiendo una estación de buffet",
    imageFit: "contain",
    imagePosition: "50% 50%",
  },
  {
    name: "Parrillada VIP",
    description:
      "Cortes seleccionados y asados al momento por expertos, con guarniciones para compartir.",
    image: "/Parrillada%20Premium.jpg",
    imageAlt: "Personal de servicio atendiendo un evento de parrillada",
    imageFit: "cover",
    imagePosition: "50% 28%",
  },
  {
    name: "Buffet italiano",
    description:
      "Pastas y especialidades italianas preparadas para disfrutar en tu evento.",
    image: "/Buffet%20Italiano.jpg",
    imageAlt: "Buffet de pastas y especialidades italianas",
    imageFit: "cover",
    imagePosition: "50% 64%",
  },
  {
    name: "Taquiza tradicional",
    description:
      "Guisados mexicanos, tortillas y salsas para compartir con tus invitados.",
    image: "/Taquiza%20Tradicional.jpg",
    imageAlt: "Taquiza con variedad de guisados y salsas",
    imageFit: "cover",
    imagePosition: "50% 58%",
  },
  {
    name: "Coctelería de autor",
    description:
      "Cócteles clásicos y de autor, preparados al momento por bartenders profesionales.",
    image: "/C%C3%B3cteles%20de%20lujo%20bajo%20luz%20dorada.png",
    imageAlt: "Coctelería de autor en una barra iluminada",
    imageFit: "contain",
    imagePosition: "50% 50%",
  },
  {
    name: "Barra de refrescos",
    description:
      "Refrescos y bebidas siempre listos, servidos con cristalería y atención constante.",
    image: "/Refrescos%20.png",
    imageAlt: "Barra de refrescos y bebidas para eventos",
    imageFit: "contain",
    imagePosition: "50% 50%",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative isolate scroll-mt-[72px] overflow-hidden border-y border-[rgba(201,168,76,0.12)] bg-[#080808] px-6 py-16 sm:px-8 md:px-10 md:py-20 lg:px-14 lg:py-24"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="/marmol.png"
          alt=""
          fill
          sizes="100vw"
          unoptimized
          className="object-cover object-center"
          style={{ opacity: 0.14 }}
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-[rgba(5,5,5,0.72)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1640px]">
        <header className="mb-9 max-w-[760px] md:mb-11">
          <div className="font-system-pro mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-sdc-gold-soft">
            Lo que hacemos
          </div>
          <h2 className="font-system-pro mb-3 text-3xl font-medium tracking-tight text-sdc-cream sm:text-4xl md:text-5xl">
            Nuestros servicios
          </h2>
          <p className="font-system-pro max-w-[620px] text-sm leading-relaxed tracking-wide text-sdc-body/75 sm:text-base">
            Coordinamos cada detalle para que tu evento fluya a la perfección,
            con una propuesta gastronómica y de atención de primer nivel.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service) => (
            <article
              key={service.name}
              className="group relative isolate aspect-[1.58/1] min-h-[210px] overflow-hidden rounded-xl border border-[rgba(212,196,154,0.44)] bg-[#0b0a08] shadow-[0_12px_36px_rgba(0,0,0,0.3)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[rgba(212,196,154,0.8)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.48),0_0_22px_rgba(201,168,76,0.1)]"
            >
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                quality={85}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className={`${service.imageFit === "cover" ? "object-cover" : "object-contain"} drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-[1.02]`}
                style={{ objectPosition: service.imagePosition }}
              />
              <div
                className="absolute inset-x-0 bottom-0 h-[48%]"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(7, 6, 5, 0.96) 0%, rgba(7, 6, 5, 0.82) 36%, rgba(7, 6, 5, 0.18) 78%, transparent 100%)",
                }}
                aria-hidden="true"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-end p-4 sm:p-5">
                <div className="min-w-0">
                  <h3 className="font-system-pro mb-1.5 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.04em] text-sdc-cream sm:text-base">
                    <span
                      className="size-1.5 shrink-0 rounded-full bg-sdc-gold-soft shadow-[0_0_8px_rgba(212,196,154,0.55)]"
                      aria-hidden="true"
                    />
                    {service.name}
                  </h3>
                  <p className="font-system-pro max-w-[48ch] text-[11px] leading-[1.45] text-sdc-body/85 sm:text-xs">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
