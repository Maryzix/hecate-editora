"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WHATSAPP_NUMBER = "5551991090199"; 

const covers = [
  {
    title: "O Chamado Da Morte",
    price: "R$ 100,00",
    image: "/images/capa1.jpg",
  },
  {
    title: "O Que Me Espera Do Lado De Fora?",
    price: "R$ 100,00",
    image: "/images/capa2.jpg",
  },
  {
    title: "Nada Além Do Universo",
    price: "R$ 100,00",
    image: "/images/capa3.jpg",
  },
  {
    title: "A Boneca De Pano",
    price: "R$ 100,00",
    image: "/images/capa4.jpg",
  },
  {
    title: "Objetos Cortantes",
    price: "R$ 100,00",
    image: "/images/capa5.jpg",
  },
  {
    title: "Hemoglobina",
    price: "R$ 100,00",
    image: "/images/capa6.jpg",
  },
   {
    title: "Obsessão Fatal",
    price: "R$ 100,00",
    image: "/images/capa7.jpg",
  },
   {
    title: "Fauno - O culto da floresta viva",
    price: "R$ 100,00",
    image: "/images/capa8.jpg",
  },
    {
    title: "Herdeiro das chamas",
    price: "R$ 100,00",
    image: "/images/capa9.jpg",
  },
   {
    title: "The man in the top hat",
    price: "R$ 100,00",
    image: "/images/capa10.jpg",
  },
];

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 350;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleWhatsApp = (title: string) => {
    const message = `Oi, quero a capa "${title}"`;
    const encoded = encodeURIComponent(message);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`,
      "_blank"
    );
  };

  return (
    <section className="bg-[#0B0D12] py-20 md:py-28 text-white relative" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">

        {/* Header */}
        <div className="flex justify-between items-center mb-10 md:mb-20">
          <div>
            <span className="text-xs tracking-[0.3em] text-[#C6A343] uppercase">
              Portfólio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#C6A343] mt-3">
              Capas disponíveis
            </h2>
          </div>

          <div className="hidden sm:flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-[#C6A343] flex items-center justify-center hover:bg-[#C6A343] hover:text-black transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-[#C6A343] flex items-center justify-center hover:bg-[#C6A343] hover:text-black transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      {/* Carrossel */}
    <div
    ref={scrollRef}
    className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4 snap-x snap-mandatory"
    >
    {covers.map((cover, index) => (
        <div
        key={index}
        className="snap-center min-w-full sm:min-w-[320px] md:min-w-85 bg-[#11141B]  border border-[#1E222D]  p-5 md:p-6  rounded-lg transition-all duration-300 ease-out hover:border-[#C6A343] hover:scale-[0.99] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
              <div className="relative">
                <img
                  src={cover.image}
                  alt={cover.title}
                  className="w-full h-75 sm:h-90 object-cover rounded-md"
                  draggable={false}
                />
                <span className="absolute top-3 right-3 bg-black/70 px-3 py-1 text-xs border border-[#C6A343]">
                  {cover.price}
                </span>
              </div>
              
              <p className="mt-4 text-lg font-serif ">{cover.title}</p>
              <p className="text-[14px] mt-5 sm:text-xs md:text-xs font-serif text-[#f5db94]">*Alteração gratuita do título do livro, fonte e nome do autor/editora.*</p>
              <p className="text-[14px] mt-2 sm:text-xs md:text-xs font-serif text-[#f5db94]">*Mudanças de cor, elementos ou redesign podem ter custo adicional. Consulte valores.*</p>
        

              <button
                onClick={() => handleWhatsApp(cover.title)}
                className="mt-6 w-full bg-linear-to-r from-[#C6A343] to-[#E6C16A]  text-black py-2 text-2sm tracking-widest uppercase rounded-md hover:opacity-90 active:scale-95 transition font-serif"
              >
                Quero essa
              </button>
            </div> 
          ))}
        </div>
      </div>
    </section>
  );
}
