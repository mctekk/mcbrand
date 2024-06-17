import { usePageBuilder } from "@/model/interactions/use-page-builder";

import { ReactNode } from "react";

import Header from "@/components/organism/header";
import { Footer } from "@/components/organism/sections/footer";

import McMenu from "@/components/molecules/mc-menu";

import { KanvasMenu } from "@/components/molecules/kanvas-menu";
import { GMenu } from "@/components/molecules/gewaer-menu";

import { GaKanvas } from "@/components/atoms/analitiycs/kanvasGa";

import { GaGewaer } from "@/components/atoms/analitiycs/gewaerGa";
import { GaMc } from "@/components/atoms/analitiycs/mctekkGa";
import InfoSection from "@/components/organism/sections/home/InfoSection";

const PAGE_SECTIONS_HOME: Record<string, ReactNode> = {
  mctekk: [
    <Header
      menu={<McMenu></McMenu>}
      className="bg-black"
      logo="/images/McLogo.svg"
      iconColor="text-white"
    />,
    <GaMc />,
    <InfoSection
      button
      buttonLink="/"
      desc="Sorry, the page you are looking for doesn't exist.Here are some helpful links:"
      title="Page not found"
      img="/images/404/404m.png"
      buttonTitle="Take me home"
      buttonColor="bg-mctekk-100"
      backColor="mb-40"
      textColor="mt-36"
      imgSize={480}
      isCase
    ></InfoSection>,
    <Footer mctekk></Footer>,
  ],
  kanvas: [
    <Header
      menu={<KanvasMenu />}
      className="bg-sky-600"
      logo="/images/kanvasL.svg"
      iconColor="text-white"
    />,
    <GaKanvas />,
    <InfoSection
      button
      buttonLink="/"
      desc="Sorry, the page you are looking for doesn't exist.Here are some helpful links:"
      title="Page not found"
      img="/images/404/404k.png"
      buttonTitle="Take me home"
      textColor="mt-36"
      buttonColor="bg-sky-600"
      imgSize={480}
      isCase
      backColor="mb-40"
    ></InfoSection>,
    <Footer kanvas></Footer>,
  ],
  gewaer: [
    <Header
      menu={<GMenu />}
      className="bg-gewaer-100"
      logo="/images/Gewaer.svg"
      iconColor="text-white"
    />,
    <GaGewaer />,
    <InfoSection
      button
      buttonLink="/"
      desc="Sorry, the page you are looking for doesn't exist.Here are some helpful links:"
      title="Page not found"
      img="/images/404/404g.png"
      buttonTitle="Take me home"
      textColor="mt-36"
      buttonColor="bg-gewaer-100"
      imgSize={480}
      isCase
      backColor="mb-40"
    ></InfoSection>,
    <Footer gewaer></Footer>,
  ],
};
export default function Page() {
  const { generatePage } = usePageBuilder();
  return generatePage(PAGE_SECTIONS_HOME);
}
