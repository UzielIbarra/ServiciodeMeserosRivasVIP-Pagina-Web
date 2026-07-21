export default function Testimonials() {
  const reviews = [
    {
      name: "Ana G.",
      role: "Boda",
      text: '"El equipo de meseros fue impecable. Muy atentos y profesionales durante toda la boda."',
    },
    {
      name: "Ricardo M.",
      role: "Evento corporativo",
      text: '"Coordinaron a la perfección la cena de nuestra empresa. Servicio puntual y de primer nivel."',
    },
    {
      name: "Sofía L.",
      role: "Banquete",
      text: '"Personal muy capacitado y elegante. Nuestros invitados quedaron encantados con la atención."',
    },
  ];

  return (
    <section id="resenas" className="bg-[#070707] px-10 py-16 scroll-mt-[72px]">
      <div className="font-system-pro text-[10px] font-semibold tracking-[0.28em] text-sdc-gold/90 uppercase mb-3">
        Reseñas de Google
      </div>
      <h2 className="font-system-pro text-3xl md:text-[2rem] font-semibold tracking-tight text-sdc-cream mb-12 max-w-xl">
        Lo que dicen nuestros clientes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#0f0d08] border border-[rgba(250,248,244,0.06)] rounded-xl p-7"
          >
            <div className="font-system-pro text-sdc-gold-soft/85 text-[11px] tracking-[0.35em] mb-4">
              ★★★★★
            </div>
            <p className="font-system-pro text-[14px] md:text-[15px] text-sdc-body leading-relaxed mb-6 tracking-wide italic">
              {review.text}
            </p>
            <div className="font-system-pro text-[11px] text-sdc-gold-soft tracking-[0.14em] uppercase font-semibold">
              {review.name}
            </div>
            <div className="font-system-pro text-[11px] text-sdc-subtle mt-2 tracking-wide">
              {review.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
