export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-[#070707] px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-[72px]"
    >
      <div className="space-y-4">
        <div className="font-system-pro text-[10px] font-semibold tracking-[0.28em] text-sdc-gold/90 uppercase">
          Sobre nosotros
        </div>
        <h2 className="font-system-pro text-3xl md:text-[2rem] font-semibold tracking-tight text-sdc-cream">
          Un equipo joven con experiencia en eventos
        </h2>
        <p className="font-system-pro text-[14px] md:text-[15px] leading-relaxed text-sdc-muted tracking-wide max-w-md">
          Somos un grupo de jóvenes apasionados por la hospitalidad, con amplia experiencia coordinando meseros y logística para eventos corporativos, bodas y banquetes. Nos mueve el detalle, la puntualidad y un servicio impecable.
        </p>
      </div>

      {/* Foto del equipo: sustituir por <Image src="/nosotros.png" /> cuando esté disponible */}
      <div className="relative aspect-[4/3] rounded-xl border border-[rgba(201,168,76,0.2)] bg-[#0f0d08] flex items-center justify-center text-center p-6">
        <span className="font-system-pro text-[12px] text-sdc-muted tracking-[0.14em] uppercase">
          Foto del equipo · próximamente
        </span>
      </div>
    </section>
  );
}
