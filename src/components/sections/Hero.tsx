"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background */}
      <Image
        src="/images/hero-bg.png"
        alt="Hécate Editora"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          {/* Main Logo */}
          <h1
            className="
              text-[7rem]
              md:text-[7rem]
              lg:text-[10rem]
              uppercase
              tracking-[0.14em]
              leading-none
              text-transparent
              bg-clip-text
              select-none
            "
            style={{
              fontFamily: "Norse",
              backgroundImage: `
                linear-gradient(
                  to bottom,
                  #FFF4C9 0%,
                  #F4D77A 18%,
                  #D4AF37 42%,
                  #A87416 70%,
                  #7B4F00 100%
                )
              `,
              textShadow: `
                0 2px 0 #5A3B00,
                0 4px 12px rgba(0,0,0,0.85),
                0 0 35px rgba(212,175,55,0.35)
              `,
            }}
          >
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
            Nascem Para Assombrar
          </p>

          {/* CTA */}
          <Link
            href="#editais"
            className="
              mt-14
              inline-block
              rounded-md
              border-2
              px-14
              py-5
              text-lg
              uppercase
              tracking-[0.18em]
              text-white
              transition-all
              duration-300
              hover:scale-105
              active:scale-100
            "
            style={{
              fontFamily: "Norse",
              borderColor: "#D4AF37",
              backgroundImage: `
                linear-gradient(
                  to bottom,
                  #B57A19 0%,
                  #8F5C11 45%,
                  #5F3906 100%
                )
              `,
              boxShadow: `
                0 0 35px rgba(212,175,55,0.25),
                inset 0 1px 0 rgba(255,244,201,0.35)
              `,
            }}
          >
            Explore os Editais
          </Link>
        </div>
      </div>
    </section>
  );
}