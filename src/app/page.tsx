import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Footer from "@/components/sections/Footer";



export default function Home() {
  return (
    <>
      <Hero />
       {/* Divisor */}
      <div className="relative z-20 -mt-12 -mb-9 flex items-center justify-center px-6">
        <div className="flex items-center gap-6 rounded-full border border-[#6E4A11] bg-black/95 px-8 py-4 backdrop-blur-xl shadow-[0_0_35px_rgba(212,175,55,0.12)]">
          <span className="h-px w-10 bg-linear-to-r from-transparent to-[#D4AF37]" />

          <h2
            className="
              text-2xl
              md:text-3xl
              uppercase
              tracking-[0.18em]
              text-transparent
              bg-clip-text
              whitespace-nowrap
            "
            style={{
              fontFamily: "Norse",
              backgroundImage: `
                linear-gradient(
                  180deg,
                  #FFF4C9 0%,
                  #F4D77A 30%,
                  #D4AF37 60%,
                  #A87416 100%
                )
              `,
              textShadow: "0 0 20px rgba(212,175,55,0.25)",
            }}
          >
            Editais Abertos
          </h2>

          <span className="h-px w-10 bg-linear-to-l from-transparent to-[#D4AF37]" />
        </div>
      </div>
      <Portfolio />
      <About />
      <Footer />
    </>
  );
}
