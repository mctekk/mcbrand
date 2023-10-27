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
import { actionsData } from "@/model/api/image-data/data";
import { industriesData } from "@/model/api/sales-data/data";

import Menu from "@/components/molecules/menu";
import McMenu from "@/components/molecules/mc-menu";
import { translate } from "@/locales";
import { Slider } from "@/components/organism/sections/why-sales-assist/simplify-sales";
import { dataMcSlide, dataSlide } from "@/model/api/simplify-sales";
import Brands from "@/components/atoms/brands";
import SimpleForm from "@/components/organism/sections/home/formContact";
import { imagesBrand } from "@/model/api";

const PAGE_SECTIONS_HOME: Record<string, ReactNode> = {
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
    <CompletionTools />,
    <ImageChanger data={actionsData} />,
    <Automated />,
    <InfoSection
      desc={translate("home.completionprocess.desc")}
      img="/images/completion-process-example.png"
      title={translate("home.completionprocess.title")}
      button={false}
      
    />,
    <InstantChanges />,
    <WhySalesAssistSalesProcess data={industriesData} />,
    <Sales />,
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
      buttonInfo="Get Started"
      buttonLink="https://meetings.hubspot.com/jennifer-herasme"
      highligh="Dedicated to solving problems,"
      messageDesc="MCTEKK was born in 2004, and since then, we’ve been offering services and products to help companies grow."
      messageEnd=" creating solutions, and growing businesses across all platforms."
      upperMessage="Taking your business to the"
      lowerMessage="next level with"
      words={["Smart Code ", "Practical Solutions"]}
      colorDesc="text-white"
      colorFonts="text-white"
      colorWords="text-white"
      buttonColor="bg-orange-400"
    ></Hero>,
    <InfoSection
      
      desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      title="Lorem Ipsum"
      img="/images/Frame.jpg"
      button={false}
      backColor="bg-white"
    ></InfoSection>,
    <Slider
      data={dataMcSlide}
      background="bg-kanvas-bg bg-cover"
      color="bg-cyan-600"
    ></Slider>,
    <Brands imageUrls={imagesBrand} title="Brands that trust us" />,
    <InfoSection
      
      desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      title="Lorem Ipsum"
      img="/images/Frame.jpg"
      button={false}
      backColor="bg-white"
    ></InfoSection>,
    <InfoSection
      desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      title="Lorem Ipsum"
      img="/images/Frame.jpg"
      button={false}
      reverse
      backColor="bg-white"
    ></InfoSection>,
    <SimpleForm></SimpleForm>,
    <Footer mctekk></Footer>,
  ],
};
export default function Page() {
  const { generatePage } = usePageBuilder();
  return generatePage(PAGE_SECTIONS_HOME);
}
