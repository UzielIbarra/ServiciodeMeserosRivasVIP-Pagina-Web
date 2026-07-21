import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configuración de la fuente principal
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Servicio de Meseros Rivas VIP",
  description:
    "Coordinación de meseros y logística para eventos corporativos, bodas y banquetes de alta categoría en Guadalajara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} font-system-pro bg-[#0a0a0a] antialiased text-sdc-body`}
      >
        {children}
      </body>
    </html>
  );
}