import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { ScrollToTopOnRouteChange } from "@/components/navigation/ScrollToTopOnRouteChange";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Portafolio Universitario",
    template: "%s | Portafolio Universitario",
  },
  description:
    "Portafolio personal universitario con trabajos, aprendizajes y reflexiones del semestre.",
  keywords: [
    "portafolio",
    "universidad",
    "proyectos",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Rodrigo Galindo" }],
  creator: "Rodrigo Galindo",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Portafolio Universitario",
    description:
      "Trabajos destacados, habilidades y reflexiones desarrolladas durante el semestre.",
    type: "website",
    locale: "es_BO",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <SmoothScrollProvider>
          <ScrollToTopOnRouteChange />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
