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
  gewaerActionsDataEs,
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
import { GLMenu, GLMenuEs } from "@/components/atoms/gewaerLeadMenu";
import { GaGewaerLaunch } from "@/components/atoms/analitiycs/gewaerGaLaunch";

const PAGE_SECTIONS_LAUNCH: Record<string, ReactNode> = {
  salesassist: [],

  mctekk: [],
  kanvas: [],
  gewaer: [
    <Header
      menu={<GLMenuEs />}
      className="bg-gewaer-100"
      logo="/images/Gewaer.svg"
      iconColor="text-white"
    />,
    <GaGewaerLaunch />,
    <Hero
      className="bg-gewaer-100 "
      messageDesc={"Facilita a vendedores y choferes la gestión y administración de pedidos y datos de clientes de manera eficiente. Automatiza la validación de crédito y cobros y asigna pedidos para entrega, agilizando el flujo de trabajo y permitiendo el acceso en tiempo real, optimizando así el proceso y reduciendo la necesidad de intervención manual.      "}
      messageEnd={''}
      upperMessage={"Mejora la eficiencia "}
      lowerMessage={"de tus"}
      words={["ventas"]}
      colorDesc="text-white"
      colorFonts="text-white"
      colorWords="text-white"
      nlMessage="Suscríbete para obtener noticias de producto"
      gewaer
    ></Hero>,
    <CompletionTools
      title={"Automatiza tus procesos de pedidos"}
      desc={"Gewaer optimiza la gestión de pedidos para tu equipo de ventas. Tus vendedores tendrán la capacidad de ingresar información de manera rápida y eficiente, además de poder monitorear en tiempo real. Esto mejora significativamente el flujo de aprobación y el seguimiento de los pedidos, entre otras funcionalidades. Todo diseñado para potenciar la eficiencia y efectividad de tu equipo comercial."}
      img="/images/Orders.jpg"
      colorFonts="text-gewaer-200"
    />,
    <ImageChanger
      data={gewaerActionsDataEs}
      buttonColor="bg-white text-violet-500"
      selected="text-white"
      className="bg-gewaer-100 text-white"
      title={"Digitaliza tu negocio: deja las tareas manuales"}
      desc={"Gewaer ofrece un conjunto de funcionalidades diseñadas para mejorar la eficiencia y optimizar las operaciones, incluyendo portales dedicados para vendedores que ofrecen experiencias personalizadas, gestión de pedidos, rastreo de pedidos, automatización de aprobaciones, seguimiento en tiempo real y más."}
      double={600}
      top="-mt-16 "
      margenImagen="ml-16"
    />,
    <InfoSection
      desc={"Gewaer ofrece una interfaz de usuario de marca blanca que puedes personalizar con tu propia marca: Esto incluye cambiar el logotipo, colores, fuentes y diseño sin ninguna marca predeterminada. También puedes añadir un dominio personalizado y personalizar cualquier correo electrónico y comunicación. Transforma el potencial de tu negocio con nuestro exclusivo programa para distribuidores. Te damos el poder de convertirte en un revendedor bajo tu propia marca. "}
      title={"Marca Blanca"}
      linkLetters={"Únete a nosotros y expande tu alcance en el mercado, proporcionando a tus clientes una experiencia fluida y personalizada, todo bajo tu propia etiqueta."}
      img="/images/Frame54.png"
      button={true}
      buttonColor="bg-gewaer-100 "
      buttonTitle={"Solicita una prueba "}
      backColor="bg-violet-50"
      textColor="text-gewaer-200"
      buttonLink="/schedule"
      imgSize={450}
    ></InfoSection>,
    <Brands
      imageUrls={gewaerImagesBrand}
      title={"Marcas que confían en nosotros "}
      titleColor="text-white"
      className="bg-gewaer-100"
    ></Brands>,
    <Footer  gewaerEs></Footer>,
  ],
};
export default function Page() {
  const { generatePage } = usePageBuilder();
  return generatePage(PAGE_SECTIONS_LAUNCH);
}
