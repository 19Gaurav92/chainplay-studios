import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

// Premium "Gaming/Agency" Fonts
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "ChainPlay Studios | Custom Game Development",
  description: "Studio-first game development agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${outfit.variable} font-sans bg-[#050505] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}