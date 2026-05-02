"use client";

import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-[#2A1A05]">
      {/* Texture */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20" />

      {/* Golden Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between lg:px-12">
        {/* Text */}
        <div className="space-y-2 text-center md:text-left">
          <p className="text-sm text-[#B9984A]">
            © {new Date().getFullYear()} Hécate Editora. Todos os direitos reservados.
          </p>

          <p className="text-sm text-[#8A6A2F]">
            Desenvolvido por{" "}
            <a
              href="https://instagram.com/marynotjane_"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#D4AF37] transition-colors duration-300 hover:text-[#FFF4C9]"
            >
              Mary Lindsen
            </a>
          </p>
        </div>

        {/* Instagram */}
        <a
          href="https://instagram.com/hecatecapista"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Hécate Editora"
          className="
            mx-auto
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-[#D4AF37]/50
            text-[#D4AF37]
            transition-all
            duration-300
            hover:scale-110
            hover:border-[#D4AF37]
            hover:bg-[#D4AF37]
            hover:text-black
            md:mx-0
          "
        >
          <Instagram size={22} />
        </a>
      </div>
    </footer>
  );
}