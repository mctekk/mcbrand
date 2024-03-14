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
import TwoPartComponent from "@/components/organism/sections/slider-text";
import Content from "@/components/organism/sections/content";
import { Ikanvas } from "@/components/organism/sections/interactive-kanvas";
import CenteredContent from "@/components/organism/sections/center-content";
import Clients from "@/components/organism/sections/kanvas-clients";
import ImagenStack from "@/components/organism/sections/imagen stack";
import CardList from "@/components/organism/sections/cases";

const PAGE_SECTIONS_HOME: Record<string, ReactNode> = {
  salesassist: [
    <Header
      menu={<Menu></Menu>}
      logo="/images/logo.png"
      iconColor="text-black"
    />,
    <GA />,
    <Hero
      upperMessage={translate("home.hero.upper_message")}
      lowerMessage={translate("home.hero.lower_message")}
      words={Array.from(translate("home.modules"))}
      messageDesc={translate("home.desc.message")}
      highligh={translate("home.desc.highLight")}
      messageEnd={translate("home.desc.message_end")}
      buttonLink="https://calendly.com/salesasssit/30min"
      buttonInfo={translate("home.button")}
    />,
    <CompletionTools
      desc={translate("home.completiontools.desc")}
      img="/images/completion-tools-screenshot.png"
      title={translate("home.completiontools.title")}
      back="bg-white"
    />,
    <ImageChanger
      data={actionsData}
      buttonColor="bg-stone-600 "
      selected="text-orange-500"
      className=" bg-zinc-800 text-white"
      title={translate("home.iteraction.title")}
      desc={translate("home.iteraction.desc")}
      double={200}
    />,
    <Automated
      desc={translate("home.automated.desc")}
      img={"/images/automated.svg"}
      title={translate("home.automated.title")}
    />,
    <InfoSection
      desc={translate("home.completionprocess.desc")}
      img="/images/completion-process-example.png"
      title={translate("home.completionprocess.title")}
      button={false}
      buttonLink=""
    />,
    <InstantChanges
      title={translate("home.changesPage.title")}
      columnsData={columnsData}
      leadingData={leadingData}
      ratesData={ratesData}
    />,
    <WhySalesAssistSalesProcess data={industriesData} />,
    <Sales className="bg-white" />,
    <Footer sales={true} />,
  ],

  mctekk: [
    <Header
      menu={<McMenu></McMenu>}
      className="bg-black"
      logo="/images/McLogo.svg"
      iconColor="text-white"
    />,
    <GaMc />,
    <Hero
      className="bg-black "
      buttonInfo=" Schedule a Meeting "
      buttonLink="https://meetings.hubspot.com/jennifer-herasme"
      highligh=""
      messageDesc={translate("mchero.messageDesc")}
      messageEnd={translate("mchero.messageEnd")}
      upperMessage={translate("mchero.upperMessage")}
      lowerMessage={translate("mchero.lowerMessage")}
      words={Array.from(translate("mchero.words"))}
      colorDesc="text-white"
      colorFonts="text-white"
      colorWords="text-white"
      buttonColor="bg-mctekk-100"
      button
    ></Hero>,
    <InfoSection
      desc={translate("secondSection.desc")}
      title={translate("secondSection.title")}
      img="/images/move.png"
      button={false}
      backColor="bg-white"
      buttonLink="/"
      imgSize={670}
    ></InfoSection>,
    <InfoSection
      desc={translate("kanvasSection.desc")}
      title={translate("kanvasSection.title")}
      img="/images/Kpro.svg"
      button={true}
      buttonTitle={translate("kanvasSection.buttonTitle")}
      buttonColor="bg-sky-600"
      backColor="bg-kanvas-bg bg-cover"
      buttonLink="https://kanvas.dev/"
      textColor="text-white"
      imgSize={400}
      isCase
      isUpperLogo
      upperLogo="/images/k1.svg"
    ></InfoSection>,
    <InfoSection
      desc={translate("gewaerSection.desc")}
      title={translate("gewaerSection.title")}
      img="/images/Gpro.svg"
      button={true}
      buttonTitle={translate("gewaerSection.buttonTitle")}
      buttonColor="bg-violet-600"
      backColor="bg-gradient-to-r from-violet-200 to-violet-300"
      buttonLink="https://www.gewaer.io/"
      textColor="text-blue-900"
      imgSize={400}
      isCase
      isUpperLogo
      upperLogo="/images/g1.svg"
    ></InfoSection>,
    <Brands
      imageUrls={imagesBrand}
      title={translate("brandSection.title")}
      titleColor="text-white"
      className="bg-black"
    />,
    <CardList sectionTitle="Our Cases"></CardList>,
    <InfoSection
      desc={translate("weGotSection.desc")}
      title={translate("weGotSection.title")}
      img="/images/Mctekk_Ecommerce.png"
      button={true}
      backColor="bg-white"
      buttonLink="#ContactForm"
      id="Services"
      buttonColor="bg-mctekk-100"
      buttonTitle={translate("weGotSection.buttonTitle")}
    ></InfoSection>,
    <SimpleForm id="ContactForm"></SimpleForm>,
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
   
    <TwoPartComponent
      title="Your Agency Modular Control Panel "
      description="Quickly deploy and enhance your projects with unparalleled ease and efficiency. Our comprehensive control panel puts you in command, streamlining project management across the board."
      buttonText="Take a tour"
      sliderImages={["/images/Products.png"]}
    />,
    <Clients title="Trusted by our beloved clients" imageUrls={kanvasImagesBrand} className="bg-gray-200"  ></Clients>,
    <InfoSection
      isCase
      button={false}
      buttonLink=""
      desc="Manage all your projects under a single roof with our intuitive control panel. Get real-time insights, make adjustments on the fly, and maintain full control over every module and template."
      img="/images/kanvas/001.png"
      title="Centralized Control Panel:"
    ></InfoSection>,
    <InfoSection
      reverse
      button={false}
      buttonLink=""
      desc="Gain unparalleled flexibility with our Headless architecture, enabling custom front-end development while maintaining robust back-end functionalities."
      img="/images/kanvas/002.png"
      imgSize={500}
      title="Headless:"
    ></InfoSection>,
    <Content
      description="Quickly integrate pre-designed modules for common functionalities like social interactions, CRM, and workflow automation, speeding up development time."
      img="/images/kanvas/003.png"
      title="Building Blocks:"
      top="xl:mt-44"
    ></Content>,
    <InfoSection
      reverse
      button={false}
      buttonLink=""
      desc="Automate and connect tasks seamlessly across modules and systems, enhancing efficiency and allowing your team to focus on innovation."
      img="/images/kanvas/004.png"
      imgSize={420}
      title="Action Engine:"
    ></InfoSection>,
    <Ikanvas
      title="Take a tour"
      desc="Find out how you can consolidate your data with this interactive tour."
      bg="bg-sky-600"
      descColor="text-white"
      titleColor="text-white"
    ></Ikanvas>,
    <CenteredContent
      title="How it works."
      imageUrl="/images/ghi.svg"
      text="Kanvas Niche is open-source, licensed under the MIT License, featuring a user-friendly admin panel built with React and a robust backend powered by Laravel. Opt for self-hosting to gain full control over your projects, customizing and scaling with complete freedom."
    ></CenteredContent>,
    <ImagenStack 
    description="Discover our prebuilt frontend modules, ready for one-click integration with Kanvas, designed to seamlessly enhance your projects. "
      title="Our Recipes"
      img="/images/kanvas/r001.png"
      top=""
      subdesc="These customizable solutions, from marketplace functionalities and e-commerce bundles to social engagement and CRM, offer agencies a quick and efficient way to deploy feature-rich applications."
     ></ImagenStack>,
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
    <Hero
      className="bg-gewaer-100 "
      messageDesc={translate("gewaerHero.messageDesc")}
      messageEnd={translate("gewaerHero.messageEnd")}
      upperMessage={translate("gewaerHero.upperMessage")}
      lowerMessage={translate("gewaerHero.lowerMessage")}
      words={Array.from(translate("gewaerHero.words"))}
      colorDesc="text-white"
      colorFonts="text-white"
      colorWords="text-white"
      gewaer
      nlMessage="Subscribe to get product updates:      "
    ></Hero>,
    <CompletionTools
      title={translate("GewaerTools.title")}
      desc={translate("GewaerTools.desc")}
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
  return generatePage(PAGE_SECTIONS_HOME);
}
