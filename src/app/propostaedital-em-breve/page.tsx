
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Gift } from "lucide-react";

export default function PropostaEdital() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Textura de fundo */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20" />

      {/* Brilho dourado */}
      <div className="absolute right-10 top-32 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-14 pt-24 md:px-8 md:pt-28">
        {/* Botão voltar */}
        <Link
          href="/#editais"
          className="group mb-9 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#D4AF37] transition-colors duration-300 hover:text-[#FFF4C9]"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Voltar para Editais
        </Link>

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Capa */}
          <div className="relative mx-auto w-full max-w-[330px]">
            <div className="absolute inset-0 rounded-3xl bg-[#D4AF37]/20 blur-3xl" />

            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#6E4A11] shadow-[0_0_45px_rgba(212,175,55,0.15)]">
              <Image
                src="/images/em-breve.jpg"
                alt="Capa do edital Bestiário das Criaturas Demoníacas"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 330px"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Status */}
            <span className="inline-block rounded-md border border-[#D4AF37]/70 bg-[#D4AF37]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F4D77A]">
              EM BREVE
            </span>

            {/* Título */}
            <h1
              className="mt-5 text-4xl uppercase leading-tight text-transparent sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: "Norse",
                backgroundImage:
                  "linear-gradient(180deg, #FFF4C9 0%, #D4AF37 60%, #7B4F00 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              EM BREVE
            </h1>

            {/* Descrição */}
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#D7C08A] sm:text-lg">
              Em breve
            </p>

            {/* Datas */}
            <div className="mt-7 grid w-full max-w-lg grid-cols-2 gap-3">
              <div className="rounded-xl border border-[#6E4A11] bg-[#080808] p-4 sm:p-5">
                <div className="mb-2 flex items-center gap-2 text-[#D4AF37]">
                  <Calendar size={18} />
                  <span className="text-[10px] uppercase tracking-[0.15em] sm:text-xs">
                    Início
                  </span>
                </div>

                <p className="text-lg font-semibold text-white sm:text-xl">
                  xx/xx/xxxx
                </p>
              </div>

              <div className="rounded-xl border border-[#6E4A11] bg-[#080808] p-4 sm:p-5">
                <div className="mb-2 flex items-center gap-2 text-[#D4AF37]">
                  <Clock size={18} />
                  <span className="text-[10px] uppercase tracking-[0.15em] sm:text-xs">
                    Encerramento
                  </span>
                </div>

                <p className="text-lg font-semibold text-white sm:text-xl">
                  xx/xx/xxxx
                </p>
              </div>
            </div>

            {/* Botão centralizado */}
            <div className="mt-8 flex w-full flex-col items-center">
              <Link
                href="/pdfs/" //PDF do edital vai aqui
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-sm items-center justify-center rounded-xl border border-[#D4AF37] bg-gradient-to-r from-[#7B4F00] via-[#D4AF37] to-[#A87416] px-7 py-4 text-base font-semibold uppercase tracking-[0.12em] text-black shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(212,175,55,0.4)]"
              >
                Quero Participar
              </Link>

              {/* Aviso de gratuidade */}
              <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[#D7C08A]/80">
                <Gift size={17} className="text-[#D4AF37]" />
                xxxx • Leia o edital em PDF
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
