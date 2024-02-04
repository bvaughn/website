import type { Metadata, NextPageContext } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/client/Navigation";

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
    <html className={inter.className} lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="m-0 p-0 flex flex-row">
        <Navigation />
        {children}
      </body>
    </html>
  );
}

RootLayout.getInitialProps = async function getInitialProps(
  context: NextPageContext
) {
  return {};
};
