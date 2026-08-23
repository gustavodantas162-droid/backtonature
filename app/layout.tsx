import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://planoselva.vercel.app"),
  title: "Plano Selva | Entenda. Sinta. Construa.",
  description: "Uma nova forma de recuperar autonomia, energia e disposição com comida de verdade.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Plano Selva",
    description: "Entenda. Sinta. Construa.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/plano-selva-cover.png", width: 941, height: 1672, alt: "Capa do Plano Selva" }],
  },
  twitter: {
    card: "summary",
    title: "Plano Selva",
    description: "Entenda. Sinta. Construa.",
    images: ["/plano-selva-cover.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
