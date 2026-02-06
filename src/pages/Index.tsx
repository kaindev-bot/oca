import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import TechniqueMaterials from "@/components/sections/TechniqueMaterials";
import Details from "@/components/sections/Details";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <TechniqueMaterials />
      <Details />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

