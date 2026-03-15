import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Domia | Plataforma Inmobiliaria con IA en Perú",
    template: "%s | Domia",
  },
  description: "Encuentra departamentos, casas y locales en alquiler o venta en Lima y el Perú. Tecnología de inteligencia artificial para propietarios e inquilinos.",
  keywords: ["inmobiliaria peru", "departamentos en alquiler lima", "casas en venta peru", "alquiler departamentos miraflores", "portal inmobiliario peru"],
  authors: [{ name: "Domia" }],
  creator: "Domia",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://domia.pe",
    siteName: "Domia",
    title: "Domia | Plataforma Inmobiliaria con IA en Perú",
    description: "Encuentra departamentos, casas y locales en alquiler o venta en Lima y el Perú.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Domia | Plataforma Inmobiliaria con IA en Perú",
    description: "Encuentra departamentos, casas y locales en alquiler o venta en Lima y el Perú.",
    creator: "@domia_pe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE" className={`${inter.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
