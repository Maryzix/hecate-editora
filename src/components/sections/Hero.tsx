"use client";

import Image from "next/image";
import Link from "next/link";
import Particles from "../ui/Particles";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background */}
      <Image
        src="/images/hero.gbg.png"
        alt="Hécate Editora"
        fill
        priority
        className="object-cover object-center"
      />

      

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          {/* Main Logo */}
        <h1
          className="
            relative
            text-[7rem]
            md:text-[8rem]
            lg:text-[11rem]
            uppercase
            tracking-[0.14em]
            leading-none
            text-transparent
            bg-clip-text
            select-none
            pl-3
          "
          style={{
            fontFamily: "Norse",
            backgroundImage: `
              linear-gradient(
                180deg,
                #FFFDF0 0%,
                #FFF4C9 10%,
                #FFE79A 22%,
                #F4D77A 35%,
                #D4AF37 52%,
                #E7C45A 62%,
                #A87416 82%,
                #7B4F00 100%
              )
            `,
            backgroundSize: "200% auto",
            animation: "goldShine 4s linear infinite",
            filter: "drop-shadow(0 0 20px rgba(255,215,100,0.45))",
            textShadow: `
          
            `,
          }}>
            HÉCATE
</h1>

          {/* Ornamental Divider */}
          <div className="mx-auto mt-6 mb-12 flex items-center justify-center gap-6">
            <div
              className="h-0.5 w-40"
              style={{
                background:
                  "linear-gradient(to right, transparent, #C89B3C, #F4D77A)",
              }}
            />

            <div className="relative flex items-center justify-center">
              <div className="h-8 w-8 rotate-45 border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.35)]" />
              <div className="absolute h-3 w-3 rounded-full bg-[#D4AF37]" />
            </div>

            <div
              className="h-0.5 w-40"
              style={{
                background:
                  "linear-gradient(to left, transparent, #C89B3C, #F4D77A)",
              }}
            />
          </div>

          {/* Subtitle */}
          <p
            className="
              text-xl
              md:text-2xl
              lg:text-2xl
              uppercase
              tracking-[0.35em]
              leading-[1.8]
              text-[#F8E7B0]
              select-none
            "
            style={{
              fontFamily: "cinze",
              textShadow: `
                0 3px 12px rgba(0,0,0,0.9),
                0 0 20px rgba(212,175,55,0.15)
              `,
            }}
          >
            Onde Histórias
            <br />
            Nascem Para Serem Contadas
          </p>

        </div>
      </div>
    </section>
  );
}