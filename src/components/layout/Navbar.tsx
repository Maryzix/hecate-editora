"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IconBrandWhatsapp,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

const navItems = [
  { label: "Início", href: "/#hero" },
  { label: "Sobre", href: "/#about" },
  { label: "Editais", href: "/#aboutdesigner" },
  { label: "Contato", href: "/#ordersection" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#6E4A11] bg-black/90 backdrop-blur-md">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#C89B3C] to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo1.png"
            alt="Hécate Editora"
            width={42}
            height={52}
            priority
            className="h-auto w-auto object-contain"
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
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
                className="
                  absolute
                  -bottom-3
                  left-1/2
                  h-0.5
                  w-0
                  -translate-x-1/2
                  bg-linear-to-r
                  from-transparent
                  via-[#D4AF37]
                  to-transparent
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* WhatsApp */}
          <Link
            href="https://wa.me/5551991090199"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border-2
              border-[#D4AF37]
              text-[#D4AF37]
              transition-all
              duration-300
              hover:bg-[#D4AF37]
              hover:text-black
              hover:shadow-[0_0_25px_rgba(212,175,55,0.45)]
            "
          >
            <IconBrandWhatsapp size={24} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex
              md:hidden
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border-2
              border-[#D4AF37]
              text-[#D4AF37]
              transition-all
              duration-300
              hover:bg-[#D4AF37]
              hover:text-black
            "
            aria-label="Abrir menu"
          >
            {isOpen ? (
              <IconX size={24} />
            ) : (
              <IconMenu2 size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-500
          ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav className="border-t border-[#6E4A11] bg-black/95 px-6 py-6 backdrop-blur-xl">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  text-center
                  text-xl
                  uppercase
                  tracking-[0.2em]
                  text-[#D4AF37]
                  transition-all
                  duration-300
                  hover:text-[#FFF4C9]
                "
                style={{ fontFamily: "Norse" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}