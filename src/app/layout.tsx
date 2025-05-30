import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.PAGE_TITLE ?? process.env.PAGE_TYPE?.toUpperCase(),
  description: (() => {
    switch (process.env.PAGE_TYPE) {
      case "kanvas ":
        return "Kanvas - Your operational engine for commerce ";
      case "gewaer":
        return " Launch a platform for your business that allows your sales team to input new orders and potential leads. Gewaer will enable clients to view progress updates on their projects or to upload the necessary documents to finalize tasks.";
      case "mctekk":
        return "MCTEKK is focused on developing solutions through software. With headless smart code we assure you will scale your business to the next level. The technologies we use include PHP, Laravel, AWS, VueJS, React Native, and much more.";
      case "salesassist":
        return "SalesAssist";
      default:
        return "Mctekk brand page";
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

  const seoImage =
    type == "mctekk"
      ? "/images/favicons/mcfavi.png"
      : type == "kanvas"
      ? "/images/Products.png"
      : type == "gewaer"
      ? "/images/favicons/gewaerFav.svg"
      : type == "salesassist"
      ? "/images/favicons/favicon.ico"
      : "/images/favicons/gewaerFav.svg";
  const description =
    type == "mctekk"
      ? ""
      : type == "kanvas"
      ? "Elevate Projects with Modular Building Blocks. Quickly deploy and enhance your projects with unparalleled ease and efficiency. Our comprehensive control panel puts you in command, streamlining project management across the board."
      : type == "gewaer"
      ? ""
      : type == "salesassist"
      ? ""
      : "";

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={faviconPath} sizes="32x32" />
        <meta property="og:image" content={seoImage} />
        <meta property="og:description" content={description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}


