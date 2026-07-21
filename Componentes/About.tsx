import Image from "next/image";

export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-[#0a0a0a] px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-[72px] border-y border-[rgba(250,248,244,0.06)]"
    >
      <div className="space-y-4">
        <div className="font-system-pro text-[10px] font-semibold tracking-[0.28em] text-sdc-gold/90 uppercase">
          Sobre nosotros
        </div>
        <h2 className="font-system-pro text-3xl md:text-[2rem] font-semibold tracking-tight text-sdc-cream">
          Un equipo joven con experiencia en eventos
        </h2>
        <p className="font-system-pro text-[14px] md:text-[15px] leading-relaxed text-sdc-muted tracking-wide max-w-md">
          Somos un grupo de jóvenes apasionados por la hospitalidad, con amplia experiencia coordinando meseros, barra, coctelería y banquetería para bodas, eventos corporativos y banquetes. Nos mueve el detalle, la puntualidad y un servicio impecable.
        </p>
        <p className="font-system-pro text-[13px] leading-relaxed text-sdc-subtle tracking-wide max-w-md">
          Servicio de Meseros Rivas VIP · Guadalajara, Jalisco.
        </p>
      </div>

      <div className="relative w-full max-w-[440px] mx-auto md:ml-auto aspect-[3/4] rounded-2xl overflow-hidden border border-[rgba(201,168,76,0.35)] shadow-[0_0_36px_rgba(0,0,0,0.5),0_0_54px_rgba(125,31,43,0.22)]">
        <Image
          src="/nosotros.jpg"
          alt="Equipo de Servicio de Meseros Rivas VIP"
          fill
          quality={90}
          sizes="(max-width: 768px) 90vw, 440px"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
