import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const geistsans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistmono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Import de ta police personnalisée
const byzantiumfont = localfont({
  src: "../assets/fonts/byzantium.otf", 
  variable: "--font-byzantium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Byzantium ÉTS | Club Blockchain",
  description: "L'ingénierie au service de la blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistsans.variable} ${geistmono.variable} ${byzantiumfont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}