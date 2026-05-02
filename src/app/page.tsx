import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AboutDesigner from "@/components/sections/AboutDesigner";
import Portfolio from "@/components/sections/Portfolio";
import OrderSection from "@/components/sections/OrderSection";
import Footer from "@/components/sections/Footer";



export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <AboutDesigner />
      <Portfolio />
      <OrderSection />
      <Footer />
    </>
  );
}
