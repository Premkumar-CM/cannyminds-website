
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import HeroGenZ from "@/components/sections/HeroGenZ";
import ProductsNew from "@/components/sections/ProductsNew";
import AboutNew from "@/components/sections/AboutNew";
import GlobalOfficesNew from "@/components/sections/GlobalOfficesNew";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";



export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section id="home">
          <HeroGenZ />
        </section>
        <section id="solutions">
          <ProductsNew />
        </section>
        <section id="about">
          <AboutNew />
        </section>
        <section id="offices">
          <GlobalOfficesNew />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
