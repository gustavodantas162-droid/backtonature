import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://comunidadeselvaryanstevan.vercel.app"),
  title: "Desafio Selva 21 Dias | Plano Selva",
  description: "Organize sua alimentação e construa uma rotina de comida de verdade em 21 dias com plano diário, materiais práticos e comunidade.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Desafio Selva 21 Dias | Plano Selva",
    description: "Organize sua alimentação e construa uma rotina de comida de verdade em 21 dias.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/comunidade-selva-cover.png", width: 1254, height: 1254, alt: "Capa da Comunidade da Selva" }],
  },
  twitter: {
    card: "summary",
    title: "Desafio Selva 21 Dias | Plano Selva",
    description: "Organize sua alimentação e construa uma rotina de comida de verdade em 21 dias.",
    images: ["/images/comunidade-selva-cover.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
