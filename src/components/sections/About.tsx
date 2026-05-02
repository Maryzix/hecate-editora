import Counter from "@/components/ui/Counter";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0b0b] text-white py-20 md:py-32 px-6"
    >
      {/* TOP / BOTTOM LINES */}
      <div className="absolute top-0 left-0 w-full h-px gold-line opacity-80" />
      <div className="absolute bottom-0 left-0 w-full h-px gold-line opacity-80" />

      {/* Gradient lateral */}
      <div className="absolute inset-0 bg-linear-to-r from-[#1a1205]/40 via-transparent to-transparent pointer-events-none" />

      {/* Glow radial dourado */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(198,163,67,0.15),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid gap-16 md:grid-cols-2 items-center">
        
        {/* LEFT */}
        <div className="relative">
          <span className="text-[#C6A343] tracking-[0.4em] text-sm sm:text-base uppercase">
            Sobre a Hécate
          </span>

          <div className="w-20 sm:w-24 h-px bg-[#C6A343]/60 my-3" />
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif leading-tight">
            Onde arte encontra <br />
            <span className="italic text-[#C6A343]">
              narrativa
            </span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-lg text-sm sm:text-base">
            Hécate nasceu da paixão por transformar histórias em
            imagens. Cada capa é criada com intenção, conceito e identidade
            única, pensada para transmitir a essência do livro antes mesmo da
            leitura.
          </p>

          {/* NUMBERS */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 mt-12 md:mt-16 pt-8 md:pt-10 border-t border-white/10">
            
            <div className="sm:pr-10 sm:border-r sm:border-white/10">
              <p className="text-2xl sm:text-3xl font-serif text-[#C6A343]">
                <Counter value={25} suffix="+" />
              </p>
              <span className="text-xs tracking-widest text-gray-500 uppercase">
                Capas Criadas
              </span>
            </div>

            <div className="sm:pr-10 sm:border-r sm:border-white/10">
              <p className="text-2xl sm:text-3xl font-serif text-[#C6A343]">
                <Counter value={10} suffix="+" />
              </p>
              <span className="text-xs tracking-widest text-gray-500 uppercase">
                Autores Atendidos
              </span>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-serif text-[#C6A343]">
                <Counter value={2} suffix="+" />
              </p>
              <span className="text-xs tracking-widest text-gray-500 uppercase">
                Anos de Experiência como Designer
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
