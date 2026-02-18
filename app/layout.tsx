import type { Metadata } from "next";
import { Space_Grotesk, Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beehive Web Designs | Web Design, Hosting & SEO for Small Business",
  description:
    "Beehive Web Designs builds beautiful, high-performing websites for small businesses. We handle web design, hosting, and SEO so you can focus on what you do best.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased font-[family-name:var(--font-dm-sans)]">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
