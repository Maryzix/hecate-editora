"use client";

import Link from "next/link";
import Image from "next/image";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const navItems = [
  { label: "Início", href: "/#hero" },
  { label: "Sobre", href: "/#about" },
  { label: "Editais", href: "/#aboutdesigner" },
  { label: "Entre em Contato", href: "/#ordersection" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/85 backdrop-blur-md border-b border-[#6E4A11]">
      {/* Linha dourada inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#C89B3C] to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Hécate Editora"
            width={70}
            height={70}
            priority
            className="h-auto w-auto object-contain"
          />
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                group
                relative
                text-sm
                uppercase
                tracking-[0.18em]
                text-[#D4AF37]
                transition-all
                duration-300
                hover:text-[#FFF4C9]
              "
              style={{ fontFamily: "Norse" }}
            >
              {item.label}

              <span
                className={`
                  absolute
                  -bottom-3
                  left-1/2
                  h-0.5
                  -translate-x-1/2
                  bg-linear-to-r
                  from-transparent
                  via-[#D4AF37]
                  to-transparent
                  transition-all
                  duration-300
                  ${
                    index === 0
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </Link>
          ))}
        </nav>

        {/* WhatsApp */}
        <Link
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border-2
            border-[#D4AF37]
            text-[#D4AF37]
            transition-all
            duration-300
            hover:scale-110
            hover:bg-[#D4AF37]
            hover:text-black
            hover:shadow-[0_0_25px_rgba(212,175,55,0.45)]
          "
        >
          <IconBrandWhatsapp size={28} stroke={2} />
        </Link>
      </div>
    </header>
  );
}