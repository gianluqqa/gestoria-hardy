import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gestoria Hardy",
  description:
    "Gestión integral de trámites del automotor en Rosario, Santa Fe. Transferencias, denuncias de compra y venta, informes de dominio, duplicados de cédulas, títulos y chapas patentes. Asesoramiento profesional y personalizado.",
  keywords: [
    "Mandatario del Automotor Rosario",
    "Gestoría automotor Rosario",
    "Transferencia vehicular Rosario",
    "Gian Luca Caravone",
    "Trámites automotores Santa Fe",
    "Informe de dominio",
    "Denuncia de venta",
    "Duplicado de cédula",
  ],
  authors: [{ name: "Gian Luca Caravone" }],
  icons: {
    icon: "/logo-gestoria-hardy-dos.jpeg",
    shortcut: "/logo-gestoria-hardy-dos.jpeg",
    apple: "/logo-gestoria-hardy-dos.jpeg",
  },
  openGraph: {
    title: "Gian Luca Caravone | Mandatario del Automotor",
    description: "Gestión transparente, profesional y rápida de trámites automotores en Rosario, Santa Fe.",
    locale: "es_AR",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${jakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-[#E2BD68]/30 selection:text-[#16233B]">
        {children}
      </body>
    </html>
  );
}

