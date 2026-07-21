import Image from "next/image";

export default function Team() {
  const team = [
    {
      name: "Aaron",
      role: "Mesero",
      img: "/equipo-aaron.jpg",
    },
    {
      name: "Atzin",
      role: "Mesero",
      img: "/equipo-atzin.jpg",
    },
  ];

  return (
    <section id="equipo" className="bg-[#070707] px-10 py-16 scroll-mt-[72px]">
      <div className="font-system-pro text-[10px] font-semibold tracking-[0.28em] text-sdc-gold/90 uppercase mb-3">
        Quiénes te atienden
      </div>
      <h2 className="font-system-pro text-3xl md:text-[2rem] font-semibold tracking-tight text-sdc-cream mb-4">
        Nuestro equipo
      </h2>
      <p className="font-system-pro text-[14px] md:text-[15px] leading-relaxed text-sdc-muted max-w-[520px] mb-12 tracking-wide">
        Meseros capacitados y con experiencia, listos para dar el mejor servicio en tu evento.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
        {team.map((member, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-xl border border-[rgba(250,248,244,0.06)] bg-[#0f0d08] transition-colors duration-300 hover:border-[rgba(201,168,76,0.35)]"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={member.img}
                alt={`${member.name} — mesero de Servicio de Meseros Rivas VIP`}
                fill
                quality={90}
                sizes="(max-width: 640px) 90vw, 320px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" aria-hidden />
            </div>
            <div className="p-5">
              <div className="font-system-pro text-[15px] font-semibold tracking-wide text-sdc-cream">
                {member.name}
              </div>
              <div className="font-system-pro text-[11px] text-sdc-gold-soft tracking-[0.14em] uppercase mt-1">
                {member.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
