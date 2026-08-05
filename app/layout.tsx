import type { Metadata } from "next";
import { Archivo_Black, Bitcount_Prop_Single } from "next/font/google";
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
      className={`${archivoBlack.variable} ${bitcount.variable} h-full antialiased dark`}
    >
      <body className={`${archivoBlack.className} min-h-full flex flex-col items-center`}>{children}</body>
    </html>
  );
}
