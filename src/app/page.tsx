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
import { Slider } from "@/components/organism/sections/why-sales-assist/simplify-sales";
import { dataMcSlide, dataSlide } from "@/model/api/simplify-sales";
import Brands from "@/components/atoms/brands";
import SimpleForm from "@/components/organism/sections/home/formContact";
import { imagesBrand } from "@/model/api";
import { KanvasMenu } from "@/components/molecules/kanvas-menu";
import { GMenu } from "@/components/molecules/gewaer-menu";
import { columnsData, columnsDataKanvas, leadingData, leadingDataKanvas, ratesData, ratesDataKanvas } from "@/model/api/instant-changes/data";
import { GA } from "@/components/atoms/analitiycs";





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
    />,
    <ImageChanger
      data={actionsData}
      buttonColor="bg-stone-600 "
      selected="text-orange-500"
      className=" bg-zinc-800 text-white"
      title={translate("home.iteraction.title")}
      desc={translate("home.iteraction.desc")}
      id="actions"
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
    />,
    <InstantChanges title={translate("home.changesPage.title")} columnsData={columnsData}  leadingData={leadingData} ratesData={ratesData} />,
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
    <GA />,
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
      button
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
  kanvas: [
    <Header
      menu={<KanvasMenu />}
      className="bg-sky-600"
      logo="/images/klogof.png"
      iconColor="text-white"
    />,
    <GA />,
    <Hero
      className="bg-sky-600 "
      buttonInfo="Get Started"
      buttonLink="https://meetings.hubspot.com/jennifer-herasme"
      messageDesc="Kanvas Niche’s modules simplify complexities, letting you concentrate on building"
      messageEnd="exceptional experiences. See the difference"
      upperMessage="Discover headless "
      lowerMessage=" components for"
      words={["Agencies", "Developers","Startups"]}
      colorDesc="text-white"
      colorFonts="text-white"
      colorWords="text-white"
      buttonColor="bg-white text-sky-600"
      button
    ></Hero>,
    <CompletionTools
      title="Our solution"
      desc="Our solution provides graph APIs for common problems encountered during development, allowing you to focus on building your product instead of worrying about the backend infrastructure."
      img="/images/kanvastool.png"
      subtitle="Your Backend Complement"
      subdesc="Kanvas Niche is not a replacement for your existing backend-as-a-service or development framework. Instead, it complements them by providing specific modules for common problems that you would otherwise need to develop yourself."
      colorFonts="text-sky-700"
    />,
    <ImageChanger
      data={kanvasActionsData}
      buttonColor="bg-white text-sky-600"
      selected="text-white"
      className="bg-sky-700 text-white"
      title="Manage your leads, agents, and commissions with ease."
      desc="Our SaaS solution connects to your CRM and allows for managing leads, agents, commissions, individual agent websites, referral programs, and more"
      id="features"
    />,
    <Automated
      desc="Our SaaS solution connects to your CRM and allows for managing leads, agents, commissions, individual agent websites, referral programs, and more"
      img={"/images/automated.svg"}
      title="Manage your leads, agents, and commissions with ease."
      descColor="text-cyan-600"
      titleColor="text-cyan-600"
      bg="bg-sky-50"
    />,
    <InfoSection
      desc="Our SaaS solution connects to your CRM and allows for managing leads, agents, commissions, individual agent websites, referral programs, and more"
      title="Manage your leads, agents, and commissions with ease."
      img="/images/Frame.jpg"
      button={false}
      backColor="bg-sky-50"
      textColor="text-cyan-600"
    ></InfoSection>,
    <InfoSection
      desc="Our SaaS solution connects to your CRM and allows for managing leads, agents, commissions, individual agent websites, referral programs, and more"
      title="Manage your leads, agents, and commissions with ease."
      img="/images/Frame.jpg"
      reverse
      button={true}
      buttonColor="bg-cyan-600 "
      buttonTitle="Get Started"
      backColor="bg-sky-50"
      textColor="text-cyan-600"
      buttonLink="https://meetings.hubspot.com/jennherasme/kanvas"
    ></InfoSection>,
    <InstantChanges className="bg-white" title="Companies That Turn to Kanvas See these Benefits"  columnsData={columnsDataKanvas} leadingData={leadingDataKanvas} ratesData={ratesDataKanvas}/>,
    <WhySalesAssistSalesProcess data={industriesData} />,
    <Sales className="bg-white" />,
    <Footer kanvas></Footer>,
  ],
  gewaer: [
    <Header
      menu={<GMenu />}
      className="bg-violet-500"
      logo="/images/Gewaer.svg"
      iconColor="text-white"
    />,
    <GA />,
    <Hero
      className="bg-violet-500 "
      buttonInfo="Request Demo"
      buttonLink="https://meetings.hubspot.com/jennherasme/gewaer-leads"
      messageDesc="Our SaaS solution connects to your CRM and allows for managing leads, agents, "
      messageEnd="commissions, individual agent websites, referral programs, and more"
      upperMessage="Manage your leads, agents,  "
      lowerMessage="and commissions with "
      words={["ease","baka", "lorem"]}
      colorDesc="text-white"
      colorFonts="text-white"
      colorWords="text-white"
      buttonColor="bg-white text-violet-500"
      button
    ></Hero>,
    <CompletionTools
      title="Manage your leads, agents, and commissions with ease."
      desc="Our SaaS solution connects to your CRM and allows for managing leads, agents, commissions, individual agent websites, referral programs, and more"
      img="/images/gview.png"
      colorFonts="text-blue-950"
    />,
    <ImageChanger
      data={kanvasActionsData}
      buttonColor="bg-white text-violet-500"
      selected="text-white"
      className="bg-violet-500 text-white"
      title="Manage your leads, agents, and commissions with ease."
      desc="Our SaaS solution connects to your CRM and allows for managing leads, agents, commissions, individual agent websites, referral programs, and more"
      id="learnMore"
    />,
    <Automated
      desc="Our SaaS solution connects to your CRM and allows for managing leads, agents, commissions, individual agent websites, referral programs, and more"
      img={"/images/automated.svg"}
      title="Manage your leads, agents, and commissions with ease."
      descColor="text-cyan-600"
      titleColor="text-cyan-600"
      bg="bg-violet-50"
    />,
    <InfoSection
      desc="Our SaaS solution connects to your CRM and allows for managing leads, agents, commissions, individual agent websites, referral programs, and more"
      title="Manage your leads, agents, and commissions with ease."
      img="/images/Frame.jpg"
      button={false}
      backColor="bg-violet-50"
      textColor="text-blue-950"
    ></InfoSection>,
    <InfoSection
      desc="Our SaaS solution connects to your CRM and allows for managing leads, agents, commissions, individual agent websites, referral programs, and more"
      title="Manage your leads, agents, and commissions with ease."
      img="/images/Frame.jpg"
      reverse
      button={true}
      buttonColor="bg-violet-500 "
      buttonTitle="Request Demo"
      backColor="bg-violet-50"
      textColor="text-blue-950"
      buttonLink="https://meetings.hubspot.com/jennherasme/kanvas"
    ></InfoSection>,
    
    <InstantChanges className="bg-violet-50" title="Companies That Turn to Gewaer See these Benefits" columnsData={columnsData} leadingData={leadingData} ratesData={ratesData} />,
    <WhySalesAssistSalesProcess data={industriesData} />,
    <Sales className="bg-violet-50" />,
    <Footer gewaer></Footer>,
  ],
};
export default function Page() {
  const { generatePage } = usePageBuilder();
  return generatePage(PAGE_SECTIONS_HOME);
}
