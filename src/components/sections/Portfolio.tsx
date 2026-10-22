"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const editals = [
  {
    title: "Bestiário das Criaturas Demoníacas",
    status: "Em Aberto",
    period: "23/10/2026 - 22/12/2026",
    description:
      "Antologia de Terror, Horror, Suspense e Ficção Histórica Sombria.",
    image: "/images/Capa-Bestiario-das-criaturas-demoniacas.jpeg",
    link: "/propostaedital-bestiario-das-criaturas-demoniacas",
  },
   {
   title: "Em Breve",
    status: "Em Breve",
    period: "Aguardando anúncio",
    description:
      "Em Breve",
    image: "/images/em-breve.jpg",
    link: "/propostaedital-em-breve",
  },
   {
   title: "Em Breve",
    status: "Em Breve",
    period: "Aguardando anúncio",
    description:
      "Em Breve",
    image: "/images/em-breve.jpg",
    link: "/propostaedital-em-breve",
  },
   {
   title: "Em Breve",
    status: "Em Breve",
    period: "Aguardando anúncio",
    description:
      "Em Breve",
    image: "/images/em-breve.jpg",
    link: "/propostaedital-em-breve",
  },
   {
   title: "Em Breve",
    status: "Em Breve",
    period: "Aguardando anúncio",
    description:
      "Em Breve",
    image: "/images/em-breve.jpg",
    link: "/propostaedital-em-breve",
  },
  
];

export default function Editais() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="editais"
      aria-labelledby="editais-title"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20" />

      {/* Decorative Borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#D4AF37] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#6E4A11] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Navigation */}
        <div className="hidden lg:block">
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#D4AF37]/50 bg-black/80 p-4 text-[#D4AF37] transition-all duration-300 hover:scale-110 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scroll("right")}
            aria-label="Próximo"
            className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#D4AF37]/50 bg-black/80 p-4 text-[#D4AF37] transition-all duration-300 hover:scale-110 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {editals.map((edital, index) => (
            <article
              key={index}
              className="group min-w-[320px] max-w-95 flex-1 snap-center"
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#6E4A11]
                  bg-[#080808]
                  transition-all
                  duration-500
                  hover:border-[#D4AF37]
                  hover:shadow-[0_0_40px_rgba(212,175,55,0.18)]
                "
              >
                {/* Cover with Blur */}
                <div className="relative h-130 overflow-hidden">
                  <Image
                    src={edital.image}
                    alt={edital.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 380px"
                    className="scale-105 object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Soft dark overlay */}
                  <div className="absolute inset-0 bg-black/25" />

                  {/* Dark gradient for text readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 via-55% to-black/10" />
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-7">
                  {/* Status */}
                  <span
                    className={`inline-block rounded-sm border px-3 py-1 text-xs uppercase tracking-[0.15em] ${
                      edital.status === "Em Aberto"
                        ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#F4D77A]"
                        : "border-gray-500 bg-gray-500/10 text-gray-300"
                    }`}
                  >
                    {edital.status}
                  </span>

                  {/* Title */}
                  <h3
                    className="mt-5 text-3xl uppercase leading-tight text-transparent bg-clip-text drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                    style={{
                      fontFamily: "Norse",
                      backgroundImage:
                        "linear-gradient(180deg, #FFF4C9 0%, #D4AF37 60%, #7B4F00 100%)",
                    }}
                  >
                    {edital.title}
                  </h3>

                  {/* Period */}
                  <p className="mt-4 text-sm text-[#C8A75A]">
                    {edital.period}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-base leading-relaxed text-[#D7C08A]">
                    {edital.description}
                  </p>

                  {/* Link */}
                  <Link
                    href={edital.link}
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-3
                      text-lg
                      uppercase
                      tracking-[0.12em]
                      text-[#D4AF37]
                      transition-all
                      duration-300
                      hover:text-[#FFF4C9]
                    "
                    style={{ fontFamily: "Norse" }}
                  >
                    Leia o edital
                    <ArrowRight
                      size={22}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </Link>
                </div>
              </div>
            </article>
            
          ))}
          
        </div>
      </div>
    </section>
  );
}