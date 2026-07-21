export default function Services() {
  const services = [
    {
      name: "Servicio de meseros",
      desc: "Personal profesional y uniformado que atiende a tus invitados con protocolo de primer nivel.",
    },
    {
      name: "Servicio de barra",
      desc: "Bartenders y barra montada para que las bebidas nunca falten en tu evento.",
    },
    {
      name: "Coctelería",
      desc: "Cócteles de autor y clásicos preparados al momento para sorprender a tus invitados.",
    },
    {
      name: "Banquetera",
      desc: "Coordinación completa de banquete: montaje, servicio de mesa y logística integral.",
    },
    {
      name: "Buffets por tiempos",
      desc: "Servicio de buffet organizado por tiempos, fluido y cuidado en cada detalle.",
    },
    {
      name: "Montaje y protocolo",
      desc: "Montaje de mesas, mise en place y protocolo de servicio para eventos formales.",
    },
  ];

  return (
    <section id="servicios" className="bg-[#070707] px-10 py-16 scroll-mt-[72px]">
      <div className="font-system-pro text-[10px] font-semibold tracking-[0.28em] text-sdc-gold/90 uppercase mb-3">
        Lo que hacemos
      </div>
      <h2 className="font-system-pro text-3xl md:text-[2rem] font-semibold tracking-tight text-sdc-cream mb-4">
        Nuestros servicios
      </h2>
      <p className="font-system-pro text-[14px] md:text-[15px] leading-relaxed text-sdc-muted max-w-[520px] mb-12 tracking-wide">
        Coordinamos cada detalle para que tu evento fluya a la perfección, con personal de alto nivel.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-[#0f0d08] border border-[rgba(250,248,244,0.06)] rounded-xl p-7 pl-8 overflow-hidden transition-colors duration-300 hover:border-[rgba(201,168,76,0.35)] group"
          >
            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-sdc-gold/70 to-sdc-wine/70" aria-hidden />
            <div className="font-system-pro text-[12px] font-semibold tracking-[0.2em] text-sdc-gold-soft/80 mb-4">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="font-system-pro text-[15px] font-semibold tracking-wide text-sdc-cream mb-2 transition-colors duration-300 group-hover:text-sdc-gold-soft">
              {service.name}
            </div>
            <div className="font-system-pro text-[13px] text-sdc-muted leading-relaxed tracking-wide">
              {service.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
