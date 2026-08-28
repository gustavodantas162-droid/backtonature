import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://planoselva.vercel.app"),
  title: "Comunidade da Selva | Um grupo para despertados",
  description: "Esteja em meio a pessoas que saíram do tradicional e decidiram retomar o que a modernidade roubou delas.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Comunidade da Selva | Um grupo para despertados",
    description: "Esteja em meio a pessoas que saíram do tradicional e decidiram retomar o que a modernidade roubou delas.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/comunidade-selva-cover.png", width: 1254, height: 1254, alt: "Capa da Comunidade da Selva" }],
  },
  twitter: {
    card: "summary",
    title: "Comunidade da Selva | Um grupo para despertados",
    description: "Esteja em meio a pessoas que saíram do tradicional e decidiram retomar o que a modernidade roubou delas.",
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
