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
import FormatBulletPoints from "@/components/atoms/FormatBulletPoints";

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
      desc={translate("weGotSection.desc")}
      title={translate("weGotSection.title")}
      img="/images/Mctekk_Ecommerce.png"
      button={true}
      backColor="bg-white"
      buttonLink="http://ecommerce.mctekk.com/"
      id="Services"
      buttonColor="bg-mctekk-100"
      buttonTitle={translate("weGotSection.buttonTitle")}
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
    <CardList sectionTitle="Our Case Studies"></CardList>,
    
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
    <FormatBulletPoints />, // Client component that applies formatting
   
    <TwoPartComponent
      title="Your operational engine for commerce"
      description="Unify your systems. Extend your stack. Automate your ops — without rebuilding from scratch."
      buttonText="Take a tour"
      sliderImages={["/images/Products.png"]}
    />,
    <Clients title="Trusted by our beloved clients" imageUrls={kanvasImagesBrand} className="bg-gray-200" />,
    <InfoSection
      isCase
      button={false}
      buttonLink=""
      desc={`🛒 Marketplaces – product, vendor, and order management built in
🚘 Dealer platforms – CRM, lead routing, and user role control
🧩 Product bundlers – real-time inventory sync and advanced logic
📦 Operational platforms – inventory, CRM, and internal workflows
🏦 B2B commerce portals – multi-user pricing and approvals
📱 B2C commerce apps – APIs ready for mobile or headless frontends`}
      img="/images/kanvas/001.png"
      title="What You Can Build with Kanvas"
    />,
    <InfoSection
      reverse
      button={false}
      buttonLink=""
      desc="Other tools are either rigid templates or raw infrastructure. Kanvas takes a middle-out approach — living between your frontend and your tools, orchestrating your data, workflows, and logic in one place."
      img="/images/kanvas/002.png"
      imgSize={500}
      title="Why Kanvas Is Different"
    />,
    <Content
      description={`✅ Module base: CRM, inventory, commerce, workflows
✅ 20+ integrations: Shopify, NetSuite, Stripe, WooCommerce and more
✅ Kanvas Agents: automation wired into your stack
✅ Flexible APIs: build and extend without limits`}
      img="/images/kanvas/003.png"
      title="Building Blocks:"
      top="xl:mt-44"
    />,
    <InfoSection
      reverse
      button={false}
      buttonLink=""
      desc="Because Kanvas lives in the middle, AI Agents can access real data and take real action — not just observe. 🧠 Sync inventory, detect sales drops, trigger campaigns. With Kanvas, AI is operational — not just conversational."
      img="/images/kanvas/004.png"
      imgSize={420}
      title="AI Ready, by Design:"
    />,
    <Ikanvas
      title="Take a tour"
      desc="Find out how you can consolidate your data with this interactive tour."
      bg="bg-sky-600"
      descColor="text-white"
      titleColor="text-white"
    />,
    
   
    <Footer kanvas />,
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
    />,
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
    />,
    <Brands
      imageUrls={gewaerImagesBrand}
      title={translate("brandSection.title")}
      titleColor="text-white"
      className="bg-gewaer-100"
    />,
    <Footer gewaer />,
  ],
};
export default function Page() {
  const { generatePage } = usePageBuilder();
  return generatePage(PAGE_SECTIONS_HOME);
}