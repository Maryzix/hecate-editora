"use client";

import Image from "next/image";

export default function AboutDesigner() {
  return (
    <section className="relative bg-[#0B0D12] text-white py-32 overflow-hidden" id="aboutdesigner">

      <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* text */}
        <div className="space-y-8">

          <span className="text-xs tracking-[0.3em] text-[#C6A343] uppercase">
            A Designer
          </span>

          <h2 className="text-4xl lg:text-5xl leading-tight">
            <span className="text-[#C6A343] font-serif">
              Paixão por
            </span>
            <br />
            <span className="italic font-serif text-[#EDE6D6]">
              narrativas visuais
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-lg">
            Por trás da Hécate está uma designer apaixonada arte e 
            narrativas visuais. Cada projeto é tratado de forma única, com atenção 
            aos detalhes e foco na identidade do autor.
          </p>

          {/* gold line */}
          <div className="w-40 h-px bg-[#C6A343] opacity-50" />

          <p className="text-xs tracking-[0.4em] text-[#C6A343] uppercase">
            Arte • Design • Histórias
          </p>
        </div>

        {/* photo */}
        <div className="relative flex justify-center">

          {/*  glow */}
          <div className="absolute w-[320px] h-105 border border-[#C6A343] rotate-3 opacity-40" />
          <div className="absolute w-[320px] h-105 border border-[#C6A343] -rotate-2 opacity-40" />

          {/* photo */}
          <div className="relative w-[320px] h-105">
            <Image
              src="/images/designer.jpg"
              alt="Designer"
              fill
              className="object-cover rounded-sm"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
