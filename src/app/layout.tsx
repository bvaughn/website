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
    <html lang="en">
      <body className={`${inter.className} m-0 p-0 flex flex-row`}>
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
