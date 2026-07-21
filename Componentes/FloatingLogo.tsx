import Image from "next/image";

export default function FloatingLogo() {
  return (
    <div
      aria-label="Instagram (próximamente)"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 size-[60px] sm:size-[68px] md:size-[46px] lg:size-[48px] rounded-full flex items-center justify-center"
    >
      <div className="relative w-full h-full bg-[#0a0a0a] border border-[#feda75] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(201,168,76,0.2)] overflow-hidden opacity-90">
        <Image
          src="/instagram_icon.png"
          alt="Instagram"
          fill
          quality={100}
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
}
