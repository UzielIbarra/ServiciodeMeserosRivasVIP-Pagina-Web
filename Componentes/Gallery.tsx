export default function Gallery() {
  const clientes = [
    {
      tipo: "Corporativos",
      detalle: "Empresas y marcas que confían en nosotros para sus cenas, convenciones y activaciones.",
    },
    {
      tipo: "Bodas",
      detalle: "Parejas que celebraron su día especial con nuestro servicio de meseros.",
    },
    {
      tipo: "Banquetes",
      detalle: "Salones y organizadores de eventos de alta categoría en Guadalajara.",
    },
  ];

  return (
    <section
      id="clientes"
      className="bg-[#0d0b07] px-10 py-16 border-y border-[rgba(250,248,244,0.05)] scroll-mt-[72px]"
    >
      <div className="font-system-pro text-[10px] font-semibold tracking-[0.28em] text-sdc-gold/90 uppercase mb-3">
        Confían en nosotros
      </div>
      <h2 className="font-system-pro text-3xl md:text-[2rem] font-semibold tracking-tight text-sdc-cream mb-4">
        Nuestros clientes
      </h2>
      <p className="font-system-pro text-[14px] md:text-[15px] leading-relaxed text-sdc-muted max-w-[520px] mb-12 tracking-wide">
        Hemos atendido eventos de todo tipo, siempre con el mismo nivel de servicio y compromiso.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {clientes.map((cliente, index) => (
          <div
            key={index}
            className="bg-[#0f0d08] border border-[rgba(250,248,244,0.06)] rounded-xl p-8 text-center transition-colors duration-300 hover:border-[rgba(201,168,76,0.35)] group"
          >
            <div className="font-system-pro text-[18px] md:text-[20px] font-semibold tracking-wide text-sdc-cream mb-3 transition-colors duration-300 group-hover:text-sdc-gold-soft">
              {cliente.tipo}
            </div>
            <div className="font-system-pro text-[13px] text-sdc-muted leading-relaxed tracking-wide">
              {cliente.detalle}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
