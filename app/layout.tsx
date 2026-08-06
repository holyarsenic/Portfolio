import type { Metadata } from "next";
import { Archivo_Black, Bitcount_Prop_Single, Advent_Pro } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
});

const bitcount = Bitcount_Prop_Single({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bitcount",
});

const adventPro = Advent_Pro({
  subsets: ["latin"],
  variable: "--font-advent-pro",
});

export const metadata: Metadata = {
  title: "Rohan | Fullstack developer",
  description: "Nope",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${bitcount.variable} ${adventPro.variable} h-full antialiased dark`}
    >
      <body className={`${adventPro.variable} min-h-full flex flex-col items-center`}>{children}</body>
    </html>
  );
}
