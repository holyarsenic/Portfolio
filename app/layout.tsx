import type { Metadata } from "next";
import React from 'react';
import { Archivo_Black, Bitcount_Prop_Single, Advent_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: "Rohan | Fullstack developer",
  openGraph: {
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
  },
  description: "Nope",
  applicationName: "holyarsenic",
  keywords: [
    "Rohan Kamat",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Projects",
    "Web Developer",
  ],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivoBlack.variable} ${bitcount.variable} ${adventPro.variable} antialiased`}
    >
      <body className={`${adventPro.variable} min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          enableColorScheme={false}
        >
          {children}
        </ThemeProvider>    
      </body>
    </html>
  );
}
