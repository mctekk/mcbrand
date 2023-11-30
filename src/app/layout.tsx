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
        return 'MCTEKK specializes in Headless E-commerce, Data Analytics, and Community solutions, with over 15 years of experience in technology consulting and custom software development. Our unique Kanvas Graph Api Layer approach enhances business scalability and efficiency. We boast a talented team skilled in front-end and back-end development, UX/UI design, and project management. Our commitment to innovation and quality is evident in partnerships with notable companies like NZXT and Crunchyroll. Choose MCTEKK for smart, effective, and reliable technology solutions that drive business growth.';
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