const GOOGLE_REVIEWS_URL = "https://share.google/7F7IpxIidIhX8SjiC";

const reviews = [
  {
    name: "Felipe Ramirez",
    text: "Excelente servicio, muy atento todo el personal y muy respetuosos 🙏",
  },
  {
    name: "Alexander Z",
    text: "10/10 muy atentos y un excelente servicio ✨",
  },
  {
    name: "Jesús Nava Díaz",
    text: "Todo el servicio fue excelente, los meseros muy atentos y profesionales",
  },
  {
    name: "Monica Romero",
    text: "Un exelente servicio, nuestro evento fue un éxito por el buen trato que se le dió a los invitados 😊",
  },
  {
    name: "Nahomi Torres",
    text: "super amables, atentos y siempre están al pendiente, el mesero Uziel es el mejor!!!!!",
  },
  {
    name: "Eli Barrón Gonzalez",
    text: "Excelente servicio, puntualidad y compromiso con su trabajo. Muchas gracias!!!",
  },
  {
    name: "Mateo Sandoval",
    text: "Muy respetuoso, rápidos y atentos, se nota la experiencia!!",
  },
  {
    name: "Dulce Maria Rivera Jimenez",
    text: "Muy atentos los muchachos, increíble servicio!!",
  },
  {
    name: "Airam Rivas",
    text: "Muchas felicidades, servicio excepcional altamente recomendados.",
  },
  {
    name: "Maria de la Cruz",
    text: "Me atendieron de lo mejor, se los recomiendo",
  },
  {
    name: "Edgar uwu",
    text: "Excelente servicio 👌",
  },
  {
    name: "Esmeralda Gallegos",
    text: "Super recomendables!!",
  },
  { name: "Fabian Amezcua" },
  { name: "Alberto Rios" },
  { name: "Nico Rivas" },
  { name: "Atzin Ibarra" },
  { name: "Maximiliano Mena" },
  { name: "Chuy Guzmanrizo" },
  { name: "Alex Svki" },
  { name: "Hiram Ibarra Rivas" },
  { name: "ESTEFANY RAMIREZ OROZCO" },
];

export default function Testimonials() {
  return (
    <section
      id="resenas"
      className="scroll-mt-[72px] border-y border-[#2a2218] bg-[#070707] px-5 py-12 sm:px-8 md:py-14 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 font-system-pro text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c9a84c]">
              Reseñas de Google
            </div>
            <h2 className="font-system-pro text-2xl font-semibold tracking-tight text-[#f0e8d8] md:text-3xl">
              Opiniones de nuestros clientes
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-3 rounded-lg border border-[#c9a84c]/25 bg-[#0f0d08] px-4 py-3">
            <span
              aria-label="5 de 5 estrellas"
              className="font-system-pro text-sm tracking-[0.16em] text-[#e0bf6a]"
            >
              ★★★★★
            </span>
            <span className="h-7 w-px bg-[#2a2218]" aria-hidden="true" />
            <span className="font-system-pro text-xs leading-5 text-[#a89070]">
              <strong className="block text-sm font-semibold text-[#f0e8d8]">
                5.0 en Google
              </strong>
              21 reseñas
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <article
              key={review.name}
              className="flex flex-col rounded-lg border border-[#2a2218] bg-[linear-gradient(145deg,#14110c_0%,#0c0b09_72%)] p-4 transition-colors duration-300 hover:border-[#c9a84c]/45 sm:p-5"
            >
              <span
                aria-label="5 de 5 estrellas"
                className="mb-2 font-system-pro text-[10px] tracking-[0.24em] text-[#e0bf6a]"
              >
                ★★★★★
              </span>
              {review.text ? (
                <blockquote className="font-system-pro text-[13px] leading-5 tracking-wide text-[#e8e0d2]">
                  “{review.text}”
                </blockquote>
              ) : (
                <p className="font-system-pro text-[13px] leading-5 tracking-wide text-[#a89070]">
                  Dejó una calificación de 5 estrellas en Google.
                </p>
              )}
              <div className="mt-3 border-t border-[#2a2218] pt-3 font-system-pro text-[10px] font-semibold uppercase tracking-[0.12em] text-[#d4c49a]">
                {review.name}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-[#c9a84c]/45 px-5 py-2.5 font-system-pro text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e0bf6a] transition-colors hover:border-[#e0bf6a] hover:bg-[#c9a84c]/10"
          >
            Leer las 21 reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
