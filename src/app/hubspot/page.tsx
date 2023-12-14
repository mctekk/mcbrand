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
import { actionsData, kanvasActionsData } from "@/model/api/image-data/data";
import { industriesData } from "@/model/api/sales-data/data";

import Menu from "@/components/molecules/menu";
import McMenu from "@/components/molecules/mc-menu";
import { translate } from "@/locales";

import Brands from "@/components/atoms/brands";
import SimpleForm from "@/components/organism/sections/home/formContact";
import { imagesBrand, kanvasImagesBrand } from "@/model/api";
import { KanvasMenu } from "@/components/molecules/kanvas-menu";

import {
  columnsData,
  leadingData,
  ratesData,
} from "@/model/api/instant-changes/data";
import { GLMenu } from "@/components/atoms/gewaerLeadMenu";
import { GaGewaerLaunch } from "@/components/atoms/analitiycs/gewaerGaLaunch";
import HubSpotMeetingsEmbed from "@/components/atoms/hubspotGewaer";

const PAGE_SECTIONS_LAUNCH: Record<string, ReactNode> = {
  salesassist: [
    <Header
      menu={<Menu></Menu>}
      logo="/images/logo.png"
      iconColor="text-black"
    />,
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
      img="/images/fast.png"
      button={false}
      backColor="bg-white"
      buttonLink="/"
      imgSize={650}
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
      reverse
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
    <InfoSection
      desc={translate("weGotSection.desc")}
      title={translate("weGotSection.title")}
      img="/images/ser.jpg"
      button={true}
      backColor="bg-white"
      buttonLink="https://meetings.hubspot.com/jennifer-herasme"
      id="Services"
      linkLetters={translate("weGotSection.linkLetters")}
      linkColor=""
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
    <Hero
      className="bg-sky-600 "
      buttonInfo={translate("kanvasHero.buttonInfo")}
      buttonLink="https://meetings.hubspot.com/jennifer-herasme"
      messageDesc={translate("kanvasHero.messageDesc")}
      messageEnd={translate("kanvasHero.messageEnd")}
      upperMessage={translate("kanvasHero.upperMessage")}
      lowerMessage={translate("kanvasHero.lowerMessage")}
      words={Array.from(translate("kanvasHero.words"))}
      colorDesc="text-white"
      colorFonts="text-white"
      colorWords="text-white"
      buttonColor="bg-white text-sky-700"
      kanvas
      id="Newsletter"
    ></Hero>,
    <CompletionTools
      title={translate("kanvasTools.title")}
      desc={translate("kanvasTools.desc")}
      img="/images/HeroKanvas.png"
      colorFonts="text-sky-600"
      back="bg-white"
    />,
    <ImageChanger
      data={kanvasActionsData}
      buttonColor="bg-white text-sky-600"
      selected="text-white"
      className="bg-sky-700 text-white"
      title="Our Headless Modules"
      desc="Easy to use foundation for any client facing application. Our purpose is to provide you with the necessary tools to get things done swiftly and effortlessly in order to achieve your goals."
      double={500}
    />,
    <Automated
      desc={translate("kanvasAutomated.desc")}
      img={"/images/kanvasBoard.png"}
      title={translate("kanvasAutomated.title")}
      descColor="text-sky-700"
      titleColor="text-sky-700"
      bg="bg-white"
    />,
    <InfoSection
      desc={translate("kanvasGit.desc")}
      title={translate("kanvasGit.title")}
      img="/images/gt.png"
      imgSize={400}
      button={false}
      backColor="bg-white"
      textColor="text-sky-700"
      buttonLink="/"
      link="https://github.com/bakaphp/kanvas-ecosystem-api"
    ></InfoSection>,
    <InfoSection
      desc={translate("kanvasPhoenix.desc")}
      title={translate("kanvasPhoenix.title")}
      img="/images/Gewaer.png"
      button={true}
      buttonColor="bg-sky-700 "
      buttonTitle={translate("kanvasPhoenix.button")}
      backColor="bg-white"
      textColor="text-sky-700"
      buttonLink="#Newsletter"
      imgSize={580}
      space="mt-4"
    ></InfoSection>,
    <Brands
      imageUrls={kanvasImagesBrand}
      title={translate("brandSection.title")}
      slider
      titleColor="text-white"
      className="bg-sky-700"
    ></Brands>,
    <Footer kanvas></Footer>,
  ],
  gewaer: [
    <Header
      menu={<GLMenu />}
      className="bg-gewaer-100"
      logo="/images/Gewaer.svg"
      iconColor="text-white"
    />,

    <GaGewaerLaunch />,
    <HubSpotMeetingsEmbed />,
    <Footer gewaer></Footer>,
  ],
};
export default function Page() {
  const { generatePage } = usePageBuilder();
  return generatePage(PAGE_SECTIONS_LAUNCH);
}
