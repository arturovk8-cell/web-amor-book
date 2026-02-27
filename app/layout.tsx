import type { Metadata } from "next";
import { Playfair_Display, Caveat, Special_Elite } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"]
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "700"]
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  variable: "--font-special-elite",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Crónicas de un Acoso Exitoso",
  description: "Edición Sunset Metepec"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${caveat.variable} ${specialElite.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
