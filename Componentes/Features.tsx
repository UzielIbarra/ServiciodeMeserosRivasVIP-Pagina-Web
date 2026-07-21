export default function Features() {
  const features = [
    {
      title: "Personal uniformado",
      desc: "Meseros y capitanes presentables, con uniforme impecable y actitud de servicio.",
    },
    {
      title: "Puntualidad garantizada",
      desc: "Llegamos con tiempo para montar y dejar todo listo antes de tu evento.",
    },
    {
      title: "Protocolo de primer nivel",
      desc: "Servicio de mesa, barra y buffet con protocolo cuidado en cada detalle.",
    },
    {
      title: "Cobertura en Guadalajara",
      desc: "Atendemos bodas, eventos corporativos y banquetes en toda la zona metropolitana.",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] px-10 py-16 border-y border-[rgba(250,248,244,0.05)]">
      <div className="font-system-pro text-[10px] font-semibold tracking-[0.28em] text-sdc-gold/90 uppercase mb-3">
        Por qué elegirnos
      </div>
      <h2 className="font-system-pro text-3xl md:text-[2rem] font-semibold tracking-tight text-sdc-cream mb-12 max-w-xl">
        La diferencia está en el servicio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl border border-[rgba(250,248,244,0.06)] bg-[#0f0d08] p-7 transition-colors duration-300 hover:border-[rgba(201,168,76,0.35)]"
          >
            <div
              className="mb-5 h-9 w-9 rounded-full flex items-center justify-center font-system-pro text-[13px] font-semibold text-[#0a0a0a]"
              style={{
                background:
                  index % 2 === 0
                    ? "var(--color-sdc-gold)"
                    : "var(--color-sdc-wine)",
                color: index % 2 === 0 ? "#0a0a0a" : "#f5f1e8",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="font-system-pro text-[15px] font-semibold tracking-wide text-sdc-cream mb-2">
              {feature.title}
            </div>
            <div className="font-system-pro text-[13px] text-sdc-muted leading-relaxed tracking-wide">
              {feature.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
