import { Navigation } from "@/components/client/Navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brian Vaughn",
  description: "My homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.className} max-h-svh`} lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="m-0 p-0 flex flex-col md:flex-row flex-nowrap overflow-y-auto max-h-svh">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
