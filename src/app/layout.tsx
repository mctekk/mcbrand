import "./globals.css";
import type { Metadata } from "next";
import { Head } from "next/document";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.PAGE_TITLE ?? process.env.PAGE_TYPE?.toUpperCase(),
  description: "Mctekk brand page",
};

const type = process.env.PAGE_TYPE || "";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const faviconPath =
    type == "mctekk"
      ? "/images/favicons/mctekkFav.svg"
      : type == "kanvas"
      ? "/images/favicons/kanvasFav.svg"
      : type == "gewaer"
      ? "/images/favicons/gewaerFav.svg"
      : type == "salesassist"
      ? "/images/favicons/favicon.ico"
      : "/images/favicons/gewaerFav.svg";

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={faviconPath} sizes="32x32" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}