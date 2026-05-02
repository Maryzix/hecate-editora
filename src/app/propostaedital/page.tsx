"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export default function PropostaEdital() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20" />

      {/* Glow Effect */}
      <div className="absolute top-40 right-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-12">
        {/* Back Button */}
        <Link
          href="/#editais"
          className="group mb-12 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#D4AF37] transition-colors duration-300 hover:text-[#FFF4C9]"
        >
          <ArrowLeft
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Voltar para Editais
        </Link>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Cover */}
          <div className="relative mx-auto w-full max-w-105 lg:max-w-115">
            {/* Golden Glow */}
            <div className="absolute inset-0 rounded-3xl bg-[#D4AF37]/20 blur-3xl" />

            {/* Book Cover */}
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl border border-[#6E4A11] shadow-[0_0_60px_rgba(212,175,55,0.18)]">
              <Image
                src="/images/capa1.jpg"
                alt="Capa do edital Sangue e Cinzas"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 460px"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block rounded-md border border-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#F4D77A]">
              Em Aberto
            </span>

            <h1
              className="mt-6 text-5xl uppercase leading-tight text-transparent bg-clip-text md:text-7xl"
              style={{
                fontFamily: "Norse",
                backgroundImage:
                  "linear-gradient(180deg, #FFF4C9 0%, #D4AF37 60%, #7B4F00 100%)",
              }}
            >
              Sangue e Cinzas
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-[#D7C08A]">
              Antologia de terror gótico, horror psicológico e narrativas
              sombrias que exploram os limites entre a realidade e o pesadelo.
            </p>

            {/* Dates */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#6E4A11] bg-[#080808] p-6">
                <div className="mb-3 flex items-center gap-3 text-[#D4AF37]">
                  <Calendar size={22} />
                  <span className="text-sm uppercase tracking-[0.2em]">
                    Início
                  </span>
                </div>

                <p className="text-3xl font-semibold text-white">
                  01/05/2026
                </p>
              </div>

              <div className="rounded-2xl border border-[#6E4A11] bg-[#080808] p-6">
                <div className="mb-3 flex items-center gap-3 text-[#D4AF37]">
                  <Clock size={22} />
                  <span className="text-sm uppercase tracking-[0.2em]">
                    Encerramento
                  </span>
                </div>

                <p className="text-3xl font-semibold text-white">
                  30/08/2026
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="#formulario"
              className="
                mt-12
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-[#D4AF37]
                bg-linear-to-r
                from-[#7B4F00]
                via-[#D4AF37]
                to-[#A87416]
                px-10
                py-5
                text-lg
                font-semibold
                uppercase
                tracking-[0.15em]
                text-black
                shadow-[0_0_35px_rgba(212,175,55,0.25)]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_55px_rgba(212,175,55,0.45)]
              "
            >
              Quero Participar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}