// src/app/fonts.ts

import localFont from "next/font/local";

export const norse = localFont({
  src: [
    {
      path: "../../public/fonts/Norsebold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-norse",
  display: "swap",
});