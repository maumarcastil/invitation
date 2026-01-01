import type { Metadata } from "next";
import { Allura, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const allura = Allura({
  weight: ["400"],
  variable: "--font-allura",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mis XV Años | Invitación",
  description: "Estás invitado a celebrar mis XV años.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${allura.variable} ${playfair.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
