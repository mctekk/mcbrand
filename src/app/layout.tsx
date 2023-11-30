import "./globals.css";
import type { Metadata } from "next";
import { Head } from "next/document";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.PAGE_TITLE ?? process.env.PAGE_TYPE?.toUpperCase(),
  description: (() => {
    switch (process.env.PAGE_TYPE) {
      case 'kanvas':
        return 'Swiftly deploy projects or enhance existing ones with our ready-to-use headless module';
      case 'gewaer':
        return 'Gewaer Page';
      case 'mctekk':
        return 'MCTEKK is focused on developing solutions through software. With headless smart code we assure you will scale your business to the next level. The technologies we use include PHP, Laravel, AWS, VueJS, React Native, and much more.';
      case 'salesassist':
        return 'SalesAssist';
      default:
        return 'Mctekk brand page';
    }
  })(),
};

const type = process.env.PAGE_TYPE || "";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const faviconPath =
    type == "mctekk"
      ? "/images/favicons/mcfavi.png"
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