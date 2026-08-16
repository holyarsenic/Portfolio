import type { Metadata } from "next";
import React from "react";
import { Archivo_Black, Bitcount_Prop_Single, Advent_Pro } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "@/components/SmoothScroll";
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
  metadataBase: new URL("https://holyarsenic.vercel.app"),

  title: {
    default: "Rohan Kamat | Full Stack Developer",
    template: "%s | Rohan Kamat",
  },

  description:
    "Next.js, React, TypeScript, Node.js, and modern web development.",

  keywords: [
    "Rohan Kamat",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Web Development",
  ],

  authors: [
    {
      name: "Rohan Kamat",
    },
  ],

  creator: "holyarsenic",
  publisher: "holyarsenic",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Rohan Kamat - Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rohan Kamat | Full Stack Developer",
    images: ["/profile.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          enableColorScheme={false}
        >
        <SmoothScroll />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}