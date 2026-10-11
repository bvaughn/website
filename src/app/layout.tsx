import { SiteHeader } from "@/components/client/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Brian Vaughn",
  description: "Songs written and recorded after hours.",
};

export const viewport: Viewport = {
  themeColor: "#0b0b10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${sans.variable} ${mono.variable}`} lang="en">
      <body>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8 lg:px-6">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
