"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Agrega fotos nuevas en public/galeria-eventos y registra aquí su ruta, texto alternativo y categoría.
const eventPhotos = [
  {
    title: "Atención en cada servicio",
    category: "Servicio en mesa",
    src: "/galeria-eventos/da6d2f67-d428-416a-bd31-5725f728eb3a.jpg",
    alt: "Mesero uniformado presentando una charola de bocadillos",
    position: "center 36%",
  },
  {
    title: "Tradición en la mesa",
    category: "Buffet mexicano",
    src: "/galeria-eventos/1.jpg",
    alt: "Guisados tradicionales servidos durante una celebración",
    position: "center 48%",
  },
  {
    title: "Una mesa lista para celebrar",
    category: "Montaje de eventos",
    src: "/galeria-eventos/2af7b20b-3bf3-4a3f-8f0b-123d15dac4b8.jpg",
    alt: "Montaje de mesas con mantelería y arreglos florales bajo una carpa",
    position: "center 50%",
  },
  {
    title: "Presentes para recibirte",
    category: "Servicio VIP",
    src: "/galeria-eventos/IMG_0317.jpg",
    alt: "Dos meseros uniformados listos para atender un evento",
    position: "center 48%",
  },
  {
    title: "Coctelería preparada al momento",
    category: "Barra de bebidas",
    src: "/galeria-eventos/IMG_2762.jpg",
    alt: "Cóctel servido en una jarra de barro durante un evento",
    position: "center 55%",
  },
  {
    title: "Una barra con carácter",
    category: "Coctelería",
    src: "/galeria-eventos/IMG_2764.jpg",
    alt: "Botellas de tequila sobre una barra junto a una alberca",
    position: "center 50%",
  },
  {
    title: "Un escenario para celebrar",
    category: "Bodas",
    src: "/galeria-eventos/IMG_3018.jpg",
    alt: "Montaje de ceremonia al aire libre con arco floral y letrero Siempre juntos",
    position: "center 42%",
  },
  {
    title: "Servicio en eventos corporativos",
    category: "Eventos empresariales",
    src: "/galeria-eventos/IMG_4140.jpg",
    alt: "Mascota de Geopower durante una feria empresarial",
    position: "center 44%",
  },
  {
    title: "Servicio que se nota",
    category: "Atención a invitados",
    src: "/galeria-eventos/IMG_4280.jpg",
    alt: "Mesero atendiendo una reunión junto a una estación de alimentos",
    position: "center 52%",
  },
  {
    title: "Detalles que hacen la diferencia",
    category: "Barra de bebidas",
    src: "/galeria-eventos/IMG_6480.jpg",
    alt: "Botella de tequila sobre la barra en un salón de eventos",
    position: "center 54%",
  },
  {
    title: "Celebraciones para toda la familia",
    category: "Fiestas infantiles",
    src: "/galeria-eventos/IMG_6824.jpg",
    alt: "Fiesta infantil con decoración de arcoíris y zona de juegos",
    position: "center 47%",
  },
  {
    title: "Guadalajara, sede mundialista",
    category: "Mundial FIFA 2026 · Guadalajara",
    src: "/galeria-eventos/IMG_6826.jpg",
    alt: "Montaje en Guadalajara para la Copa Mundial de la FIFA 2026",
    position: "center 55%",
  },
  {
    title: "Un equipo listo para servir",
    category: "Eventos corporativos",
    src: "/galeria-eventos/IMG_6896.jpg",
    alt: "Mesero uniformado durante un evento de Provejal",
    position: "center 45%",
  },
  {
    title: "Una experiencia para cada invitado",
    category: "Servicio de buffet",
    src: "/galeria-eventos/IMG_7036.jpg",
    alt: "Estación de buffet preparada para recibir a los invitados",
    position: "center 50%",
  },
  {
    title: "Diversión en cada celebración",
    category: "Fiestas infantiles",
    src: "/galeria-eventos/IMG_7244.jpg",
    alt: "Área de mesas y juegos preparada para una fiesta familiar",
    position: "center 47%",
  },
  {
    title: "Una mesa preparada con esmero",
    category: "Montaje de mesas",
    src: "/galeria-eventos/IMG_8289.jpg",
    alt: "Mesa formal montada bajo una carpa para una celebración",
    position: "center 56%",
  },
  {
    title: "Un evento a la altura del Mundial",
    category: "Mundial FIFA 2026 · Guadalajara",
    src: "/galeria-eventos/184C698C-A744-48BD-BE0E-8FD65023D7DE.jpg",
    alt: "Collage de servicio de buffet, asistentes y el estadio durante el Mundial FIFA 2026 en Guadalajara",
    position: "center 48%",
  },
  {
    title: "El ambiente también se sirve",
    category: "Coctelería y ambientación",
    src: "/galeria-eventos/2af7b20b-3bf3-4a3f-8f0b-123d15dac4b8.jpg",
    alt: "Vaso de cristal en una barra iluminada con luz roja",
    position: "center 55%",
  },
  {
    title: "Una celebración inolvidable",
    category: "Montaje de bodas",
    src: "/galeria-eventos/C51A0592-5A92-4F19-806B-C84D24FC217D.png",
    alt: "Montaje de boda al aire libre con mesas, flores y luces colgantes",
    position: "center 52%",
  },
];

function EventPhotoCard({
  photo,
  index,
  className,
}: {
  photo: (typeof eventPhotos)[number];
  index: number;
  className?: string;
}) {
  return (
    <article
      className={`group/card relative isolate aspect-[3/4] overflow-hidden rounded-md border border-[#c9a84c]/20 bg-[#0f0d08] ${className ?? ""}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.04]"
        style={{ objectPosition: photo.position }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#080706]/95 via-[#080706]/15 to-transparent opacity-90 transition-opacity duration-500 group-hover/card:opacity-100"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-6">
        <div>
          <p className="mb-2 font-system-pro text-[9px] font-semibold uppercase tracking-[0.18em] text-[#e0bf6a] sm:tracking-[0.22em]">
            {photo.category}
          </p>
          <h3 className="font-system-pro text-sm font-medium leading-snug tracking-wide text-[#f0e8d8] sm:text-lg">
            {photo.title}
          </h3>
        </div>
        <span
          aria-hidden="true"
          className="mb-0.5 hidden size-8 shrink-0 items-center justify-center rounded-full border border-[#e0bf6a]/35 text-xs text-[#e0bf6a] transition-all duration-300 group-hover/card:border-[#e0bf6a]/70 group-hover/card:bg-[#c9a84c]/10 sm:flex"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </article>
  );
}

export default function EventGallery() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openGallery = () => setIsOpen(true);
    const syncGalleryWithHash = () => {
      if (window.location.hash === "#galeria") {
        openGallery();
      }
    };

    syncGalleryWithHash();
    window.addEventListener("hashchange", syncGalleryWithHash);
    window.addEventListener("open-event-gallery", openGallery);

    return () => {
      window.removeEventListener("hashchange", syncGalleryWithHash);
      window.removeEventListener("open-event-gallery", openGallery);
    };
  }, []);

  return (
    <section
      id="galeria"
      aria-labelledby="galeria-titulo"
      className="scroll-mt-[72px] border-y border-[#c9a84c]/15 bg-[#090807] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-9 flex flex-col gap-6 sm:mb-11 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-[#c9a84c]/80" />
              <p className="font-system-pro text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c9a84c]">
                Momentos Rivas VIP
              </p>
            </div>
            <h2
              id="galeria-titulo"
              className="font-system-pro text-3xl font-medium tracking-tight text-[#f0e8d8] sm:text-4xl lg:text-5xl"
            >
              Cada evento, una experiencia.
            </h2>
            <p className="mt-4 max-w-xl font-system-pro text-sm leading-7 text-[#a89070] sm:text-[15px]">
              Una mirada al cuidado, el sabor y la atención que ponemos en cada
              celebración.
            </p>
          </div>
          <p className="font-system-pro text-[10px] font-medium uppercase tracking-[0.2em] text-[#7a6a50]">
            Servicio · Gastronomía · Celebración
          </p>
        </header>

        {!isOpen && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {eventPhotos.slice(0, 3).map((photo, index) => (
              <EventPhotoCard
                key={photo.title}
                photo={photo}
                index={index}
                className={index > 0 ? "hidden sm:block" : ""}
              />
            ))}
          </div>
        )}

        {isOpen && (
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5">
            {eventPhotos.map((photo, index) => (
              <EventPhotoCard key={photo.title} photo={photo} index={index} />
            ))}
          </div>
        )}

        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="group mx-auto mt-7 flex min-h-14 w-full max-w-md items-center justify-between gap-4 rounded-sm border border-[#c9a84c]/65 bg-[linear-gradient(110deg,rgba(201,168,76,0.16),rgba(15,13,8,0.92)_65%)] px-5 py-3 shadow-[0_0_22px_rgba(201,168,76,0.12)] transition-all duration-300 hover:border-[#e0bf6a] hover:shadow-[0_0_30px_rgba(201,168,76,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0bf6a] sm:px-6"
        >
          <span className="text-left">
            <span className="block font-system-pro text-xs font-semibold uppercase tracking-[0.16em] text-[#e0bf6a] sm:text-sm">
              {isOpen ? "Mostrar menos" : "Entrar a la galería"}
            </span>
            <span className="mt-1 block font-system-pro text-[9px] uppercase tracking-[0.14em] text-[#a89070]">
              {isOpen
                ? "Volver a los momentos destacados"
                : `${eventPhotos.length} momentos · Eventos Rivas VIP`}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#c9a84c]/40 text-[#e0bf6a] transition-all duration-300 group-hover:border-[#e0bf6a]/80 group-hover:bg-[#c9a84c]/10"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : "group-hover:translate-y-0.5"}`}
            >
              <path
                d="M10 15V5m-5 5 5-5 5 5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
