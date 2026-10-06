import Image from "next/image";

export default function FloatingLogo() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 sm:bottom-8 sm:right-8"
    >
      <a
        href="https://www.tiktok.com/@serviciomeserosrivasvip"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visita nuestro TikTok"
        className="relative flex size-[60px] items-center justify-center overflow-hidden rounded-full border border-[#f0e8d8]/30 bg-[#0a0a0a] shadow-[0_0_15px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0bf6a] sm:size-[68px] md:size-[46px] lg:size-[48px]"
      >
        <Image
          src="/TiktokLogo.png"
          alt=""
          fill
          quality={100}
          sizes="(max-width: 640px) 60px, 48px"
          className="scale-[1.4] rounded-full object-cover"
        />
      </a>

      <div
        aria-label="Instagram"
        className="relative flex size-[60px] items-center justify-center overflow-hidden rounded-full border border-[#feda75] bg-[#0a0a0a] shadow-[0_0_15px_rgba(201,168,76,0.2)] opacity-90 sm:size-[68px] md:size-[46px] lg:size-[48px]"
      >
        <Image
          src="/instagram_icon.png"
          alt=""
          fill
          quality={100}
          sizes="(max-width: 640px) 60px, 48px"
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
}
