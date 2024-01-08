import { usePageBuilder } from "@/model/interactions/use-page-builder";

import { ReactNode } from "react";

import Header from "@/components/organism/header";
import { Footer } from "@/components/organism/sections/footer";
import { Automated } from "@/components/organism/sections/home/automated";

import InfoSection from "@/components/organism/sections/home/InfoSection";
import CompletionTools from "@/components/organism/sections/home/completionTools";
import Hero from "@/components/organism/sections/home/hero";
import { InstantChanges } from "@/components/organism/sections/home/instantChanges";
import ImageChanger from "@/components/organism/sections/home/iteraction";
import Sales from "@/components/organism/sections/home/sales";
import { WhySalesAssistSalesProcess } from "@/components/organism/sections/home/whySalesAssistSales";
import {
  actionsData,
  gewaerActionsData,
  kanvasActionsData,
} from "@/model/api/image-data/data";
import { industriesData } from "@/model/api/sales-data/data";

import Menu from "@/components/molecules/menu";
import McMenu from "@/components/molecules/mc-menu";
import { translate } from "@/locales";

import Brands from "@/components/atoms/brands";
import SimpleForm from "@/components/organism/sections/home/formContact";
import { gewaerImagesBrand, imagesBrand, kanvasImagesBrand } from "@/model/api";
import { KanvasMenu } from "@/components/molecules/kanvas-menu";
import { GMenu } from "@/components/molecules/gewaer-menu";
import {
  columnsData,
  leadingData,
  ratesData,
} from "@/model/api/instant-changes/data";
import { GA } from "@/components/atoms/analitiycs";
import { GaKanvas } from "@/components/atoms/analitiycs/kanvasGa";
import GewaerForm from "@/components/organism/sections/home/gewaerContact";
import { GaGewaer } from "@/components/atoms/analitiycs/gewaerGa";
import { GaMc } from "@/components/atoms/analitiycs/mctekkGa";
import { GLMenu } from "@/components/atoms/gewaerLeadMenu";
import { GaGewaerLaunch } from "@/components/atoms/analitiycs/gewaerGaLaunch";

const PAGE_SECTIONS_LAUNCH: Record<string, ReactNode> = {
  salesassist: [],

  mctekk: [],
  kanvas: [],
  gewaer: [
    <Header
      menu={<GLMenu />}
      className="bg-gewaer-100"
      logo="/images/Gewaer.svg"
      iconColor="text-white"
    />,
    <GaGewaerLaunch />,
    <Hero
      className="bg-gewaer-100 "
      messageDesc={"Agiliza pedidos: La creación y gestión de pedidos se vuelve rápida y eficiente. Los vendedores pueden ingresar pedidos fácilmente, seleccionando clientes existentes o añadiendo nuevos con todos los detalles necesarios.      "}
      messageEnd={''}
      upperMessage={"Mejora la eficiencia "}
      lowerMessage={"de tus"}
      words={["ventas"]}
      colorDesc="text-white"
      colorFonts="text-white"
      colorWords="text-white"
      lead
      button
      buttonColor="bg-white text-gewaer-100"
      buttonInfo="Solicita un Demo "
      buttonLink="/schedule"
    ></Hero>,
    <CompletionTools
      title={"Agiliza pedidos"}
      desc={" La creación y gestión de pedidos se vuelve rápida y eficiente. Los vendedores pueden ingresar pedidos fácilmente, seleccionando clientes existentes o añadiendo nuevos con todos los detalles necesarios.      "}
      img="/images/gview.png"
      colorFonts="text-gewaer-200"
    />,
    <ImageChanger
      data={gewaerActionsData}
      buttonColor="bg-white text-violet-500"
      selected="text-white"
      className="bg-gewaer-100 text-white"
      title={translate("changer.title")}
      desc={translate("changer.desc")}
      double={600}
      top="-mt-16 "
      margenImagen="ml-16"
    />,
    <InfoSection
      desc={translate("branding.desc")}
      title={translate("branding.title")}
      linkLetters={translate("branding.linkLetters")}
      img="/images/stack.png"
      button={true}
      buttonColor="bg-gewaer-100 "
      buttonTitle={translate("branding.buttonTitle")}
      backColor="bg-violet-50"
      textColor="text-gewaer-200"
      buttonLink="/schedule"
      imgSize={450}
    ></InfoSection>,
    <Brands
      imageUrls={gewaerImagesBrand}
      title={translate("brandSection.title")}
      titleColor="text-white"
      className="bg-gewaer-100"
    ></Brands>,
    <Footer gewaer></Footer>,
  ],
};
export default function Page() {
  const { generatePage } = usePageBuilder();
  return generatePage(PAGE_SECTIONS_LAUNCH);
}
