"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-32"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20" />

      {/* Golden Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#DBAC13] to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        {/* Image */}
        <div className="relative order-1 mx-auto w-full max-w-xs sm:max-w-md lg:order-0 lg:max-w-xl">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#D4AF37]/20 via-transparent to-transparent blur-3xl" />

          <Image
            src="/images/logo1.png"
            alt="Ilustração representando a Hécate Editora"
            width={600}
            height={700}
            priority
            className="relative z-10 h-auto w-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="order-2 text-center lg:text-left">
          <h2
            id="about-title"
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              uppercase
              tracking-[0.08em]
              text-transparent
              bg-clip-text
              leading-tight
            "
            style={{
              fontFamily: "Norse",
              backgroundImage: `
                linear-gradient(
                  180deg,
                  #FFF4C9 0%,
                  #F4D77A 25%,
                  #D4AF37 55%,
                  #A87416 85%,
                  #7B4F00 100%
                )
              `,
              textShadow: `
                0 0 25px rgba(212,175,55,0.25),
                0 4px 12px rgba(0,0,0,0.85)
              `,
            }}
          >
            Sobre a Hécate
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#D7C08A] sm:text-lg lg:mx-0">
            A Hécate é uma editora independente dedicada à publicação de
            obras que exploram o lado obscuro da mente humana, do
            sobrenatural e do inexplicável.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#B9984A] sm:text-lg lg:mx-0">
            Nosso propósito é revelar histórias que caminham entre a
            realidade e o desconhecido, despertando fascínio,
            inquietação e encanto em cada leitor.
          </p>
        </div>
      </div>

      {/* Golden Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#6E4A11] to-transparent" />
    </section>
  );
}