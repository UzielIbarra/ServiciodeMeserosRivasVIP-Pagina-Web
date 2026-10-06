const reasons = [
  {
    title: "Presentación impecable",
    description:
      "Personal uniformado y atento, preparado para recibir a tus invitados con calidez y profesionalismo.",
  },
  {
    title: "Puntualidad y coordinación",
    description:
      "Planeamos cada servicio con anticipación para que el montaje y la atención fluyan sin contratiempos.",
  },
  {
    title: "Atención a cada detalle",
    description:
      "Cuidamos el protocolo de mesa, barra y buffet para que cada momento de tu evento se sienta especial.",
  },
  {
    title: "Experiencia local",
    description:
      "Acompañamos bodas, eventos corporativos y celebraciones en Guadalajara y su zona metropolitana.",
  },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative scroll-mt-[72px] overflow-hidden border-y border-[#2a2218] bg-[#080706] px-5 py-20 sm:px-8 md:py-24 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[min(80vw,900px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.1),transparent_68%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#c9a84c]/35 bg-[#0f0d08]/80 px-4 py-2">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#e0bf6a] shadow-[0_0_10px_rgba(201,168,76,0.7)]"
            />
            <span className="font-system-pro text-[10px] font-semibold uppercase tracking-[0.24em] text-[#e0bf6a]">
              Sobre Rivas VIP
            </span>
          </div>
          <h2 className="font-system-pro text-3xl font-semibold leading-tight tracking-tight text-[#f0e8d8] sm:text-4xl md:text-5xl">
            Hospitalidad que
            <span className="block font-medium text-[#c9a84c]">
              se nota en cada detalle
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-system-pro text-sm leading-7 tracking-wide text-[#a89070] sm:text-base">
            Somos un equipo joven de Guadalajara que combina energía,
            coordinación y una presentación impecable. Atendemos servicios de
            meseros, barra, coctelería y banquetería con el compromiso de estar
            a la altura de cada gran ocasión, desde una celebración íntima
            hasta los eventos que pondrán nuestra ciudad ante los ojos del
            mundo.
          </p>
        </div>

        <div className="mb-7 flex items-center justify-center gap-4">
          <span
            aria-hidden="true"
            className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a84c]/60 sm:w-20"
          />
          <h3 className="font-system-pro text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d4c49a] sm:text-xs">
            La diferencia está en el servicio
          </h3>
          <span
            aria-hidden="true"
            className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9a84c]/60 sm:w-20"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-xl border border-[#2a2218] bg-[#0d0b08] p-6 shadow-[0_14px_36px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c]/55 hover:bg-[#110e09] hover:shadow-[0_18px_40px_rgba(0,0,0,0.35),0_0_20px_rgba(201,168,76,0.08)] sm:p-7"
            >
              <span
                aria-hidden="true"
                className="mb-7 flex size-11 items-center justify-center rounded-full border border-[#c9a84c]/35 bg-[#c9a84c]/[0.07] text-[#e0bf6a] transition-all duration-300 group-hover:border-[#e0bf6a]/70 group-hover:bg-[#c9a84c]/[0.13] group-hover:shadow-[0_0_18px_rgba(201,168,76,0.12)]"
              >
                <svg viewBox="0 0 24 24" fill="none" className="size-5">
                  <path
                    d="M12 3.25 14.15 9.85 20.75 12l-6.6 2.15L12 20.75l-2.15-6.6L3.25 12l6.6-2.15L12 3.25Z"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </span>
              <h4 className="font-system-pro text-base font-semibold tracking-wide text-[#f0e8d8] transition-colors group-hover:text-[#e0bf6a]">
                {reason.title}
              </h4>
              <p className="mt-3 flex-1 font-system-pro text-[13px] leading-6 tracking-wide text-[#a89070]">
                {reason.description}
              </p>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-[#c9a84c]/70 to-transparent transition-transform duration-300 group-hover:scale-x-100 sm:left-7 sm:right-7"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
