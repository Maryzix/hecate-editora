"use client";

import Reveal from "../ui/Reveal";

export default function OrderSection() {
  const numero = "5551991090199"; 

  const mensagem = "Olá, gostaria de solicitar uma capa sob encomenda";
  const whatsappUrl = `https://wa.me/${numero}?text=${encodeURIComponent(
    mensagem
  )}`;

  return (
   
    <section className="relative w-full bg-[#0B0D12] text-white py-24 px-6 overflow-hidden" id="ordersection">
      <div className="max-w-5xl mx-auto text-center">
  <Reveal>
        <p className="text-yellow-400 tracking-[0.3em] text-xs mb-4">
          ✦ ENCOMENDA EXCLUSIVA ✦
        </p>

        <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
          Transforme sua história em uma
          <span className="block italic text-yellow-400">
            capa única e memorável
          </span>
         
          <span className="block text-[#C6A343] font-serif mt-4">
            Encomende sua capa personalizada hoje mesmo!
          </span>
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          Cada projeto é desenvolvido de forma personalizada,
          respeitando a identidade da sua obra e criando uma presença visual
          marcante e profissional.
        </p>

        <div className="mb-10">
          <p className="text-zinc-500 text-sm">Investimento</p>
          <p className="text-3xl md:text-4xl font-semibold text-yellow-400">
            A partir de R$150,00
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href={whatsappUrl}
            target="_blank"
            className="bg-linear-to-r from-yellow-500 to-yellow-300 text-black font-semibold px-8 py-4 rounded-xl hover:scale-105 transition duration-300"
          >
            Solicitar minha capa
          </a>
          
        </div>
</Reveal>
      </div>
    </section>

  );
}
