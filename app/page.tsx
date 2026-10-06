import Navbar from "../Componentes/Navbar";
import Hero from "../Componentes/Hero";
import Services from "../Componentes/Services";
import About from "../Componentes/About";
import Gallery from "../Componentes/Gallery";
import Testimonials from "../Componentes/Tesimonials";
import Contact from "../Componentes/Contact";
import Footer from "../Componentes/Footer";
import FloatingLogo from "../Componentes/FloatingLogo";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-sdc-body relative">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />

      <FloatingLogo />
    </main>
  );
}
