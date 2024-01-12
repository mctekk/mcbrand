import { usePageBuilder } from "@/model/interactions/use-page-builder";

import { ReactNode } from "react";

import Header from "@/components/organism/header";
import { Footer } from "@/components/organism/sections/footer";


import InfoSection from "@/components/organism/sections/home/InfoSection";
import CompletionTools from "@/components/organism/sections/home/completionTools";
import Hero from "@/components/organism/sections/home/hero";

import ImageChanger from "@/components/organism/sections/home/iteraction";

import {

  gewaerActionsDataEs,

} from "@/model/api/image-data/data";


import Brands from "@/components/atoms/brands";

import { gewaerImagesBrand } from "@/model/api";


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
      upperMessage={" "}
      lowerMessage={"Mejora la"}
      words={["eficiencia de  tus ventas"," gestión de pedidos"," gestión de entregas    "]}
      colorDesc="text-white"
      colorFonts="text-white"
      colorWords="text-white"
      nlMessage="Suscríbete para obtener noticias de producto"
      button
      buttonColor="bg-white text-violet-500"
      buttonInfo="Agenda un demo"
      buttonLink="/schedule-es"
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
      center="w-4/5"
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
export default function PageClient() {
  const { generatePage } = usePageBuilder();
  return generatePage(PAGE_SECTIONS_LAUNCH);
}
