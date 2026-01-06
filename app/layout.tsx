import type { Metadata } from "next";
import "./globals.css";
// import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
// import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Beehive Web Designs | Premium Web Agency in Utah",
  description: "Beehive Web Designs is a premier web design agency in Utah specializing in high-converting Shopify stores and lightning-fast static websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="f8963d98-b007-42c6-be46-fd1b7c0194d0"
        />
        {/* <ErrorReporter /> */}
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "BeehiveWebDesigns", "version": "1.0.0"}'
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* <VisualEditsMessenger /> */}
        <Toaster />
      </body>
    </html>
  );
}
