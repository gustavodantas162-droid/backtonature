import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://backtonature-red.vercel.app"),
  title: "Protocolo Back to Nature | Léo Frota",
  description: "O Método Libertação Ancestral para recuperar autonomia, energia e disposição com comida de verdade.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Protocolo Back to Nature",
    description: "Volte ao básico. Recupere sua vitalidade.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1728, height: 896, alt: "Protocolo Back to Nature" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protocolo Back to Nature",
    description: "Volte ao básico. Recupere sua vitalidade.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
