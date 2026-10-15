import Navbar from "../Componentes/Navbar";
import Hero from "../Componentes/Hero";
import Services from "../Componentes/Services";
import About from "../Componentes/About";
import EventGallery from "../Componentes/EventGallery";
import Gallery from "../Componentes/Gallery";
import Testimonials from "../Componentes/Tesimonials";
import Contact from "../Componentes/Contact";
import Footer from "../Componentes/Footer";
import FloatingLogo from "../Componentes/FloatingLogo";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-sdc-body relative">
      <Navbar />
      {/* SECCIÓN 01 · Inicio (#inicio) */}
      <Hero />
      {/* SECCIÓN 02 · Servicios (#servicios) */}
      <Services />
      {/* SECCIÓN 03 · Sobre nosotros (#nosotros) */}
      <About />
      {/* SECCIÓN 04 · Galería de eventos (#galeria) */}
      <EventGallery />
      {/* SECCIÓN 05 · Clientes (#clientes) */}
      <Gallery />
      {/* SECCIÓN 06 · Reseñas (#resenas) */}
      <Testimonials />
      {/* SECCIÓN 07 · Contacto (#contacto) */}
      <Contact />
      {/* SECCIÓN 08 · Pie de página */}
      <Footer />

      <FloatingLogo />
    </main>
  );
}
