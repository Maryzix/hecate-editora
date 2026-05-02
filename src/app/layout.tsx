// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { norse } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hecateeditora.com.br"),
  title: {
    default: "Hécate Editora | Editora de Terror, Suspense e Fantasia",
    template: "%s | Hécate Editora",
  },
  description:
    "Hécate Editora é uma editora brasileira especializada em terror, suspense e fantasia sombria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={norse.variable}>
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}