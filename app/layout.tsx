import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://backtonaturebtn.vercel.app"),
  title: "Protocolo Back to Nature | Léo Frota",
  description: "Recupere autonomia, energia e disposição com o método Back to Nature.",
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
    images: [{ url: "/product-back-to-nature.png", width: 500, height: 500, alt: "Capa do Protocolo Back to Nature" }],
  },
  twitter: {
    card: "summary",
    title: "Protocolo Back to Nature",
    description: "Volte ao básico. Recupere sua vitalidade.",
    images: ["/product-back-to-nature.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
