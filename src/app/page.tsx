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
import { actionsData, gewaerActionsData, kanvasActionsData } from "@/model/api/image-data/data";
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
    <GA />,
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
      upperLogo="/images/g1.svg"
    ></InfoSection>,
    // <InfoSection
    //   desc="Our solution connects to your CRM and allows to have an Agent Portal connected to your CRM and manage individual agent websites, referral programs, and more."
    //   title="All Managed with ease"
    //   img="/images/Dpro.svg"
    //   button={true}
    //   buttonTitle="Learn More "
    //   buttonColor="bg-sky-600"
    //   backColor="bg-sky-700"
    //   buttonLink="https://gewaer.webflow.io/"
    //   textColor="text-white"
    //   imgSize={490}
    //   isCase
    //   upperLogo="/images/d1.svg"
    // ></InfoSection>,
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
    // <InfoSection
    //   desc=" We're committed to empowering your business with our comprehensive suite of services and products. With Kanvas, we simplify app development, allowing you to focus on crafting outstanding experiences.    "
    //   title="Our clients    "
    //   img="/images/ser.jpg"
    //   button={true}
    //   buttonColor="bg-mctekk-100"
    //   buttonTitle="Let's get started!"
    //   backColor="bg-white"
    //   buttonLink="#contact"
    //   id="Services"
    // ></InfoSection>,
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
    <Hero
      className="bg-sky-600 "
      buttonInfo="Get Notified"
      buttonLink="https://meetings.hubspot.com/jennifer-herasme"
      messageDesc="Deploy new projects at super-speed or enhance existing ones by utilizing our headless modules as building blocks for your application."
      messageEnd="We provide ready-made, easy to configure CRM, Inventory, Social Interactions, and Multitenancy components."
      upperMessage="Don't start from scratch"
      lowerMessage=" Headless Modules for"
      words={["agencies", "startups", "freelancers"]}
      colorDesc="text-white"
      colorFonts="text-white"
      colorWords="text-white"
      buttonColor="bg-white text-sky-700"
      kanvas
      id="Newsletter"
    ></Hero>,
    <CompletionTools
      title="Your Backend Complement"
      desc="
      Kanvas Niche is not a replacement for your existing development framework or backend-as-a-service. Instead, it complements them by providing specific modules for common problems that you would otherwise need to develop yourself."
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
      desc="When undertaking custom development, backend data management can be a significant challenge. To address this, we offer a versatile admin interface that provides comprehensive control over all modules."
      img={"/images/kanvasBoard.png"}
      title="Control every aspect of the application ecosystem"
      descColor="text-sky-700"
      titleColor="text-sky-700"
      bg="bg-white"
    />,
    <InfoSection
      desc="Kanvas Modules are MIT licensed to ensure that you are in full control of your headless stack."
      title="Open Source"
      img="/images/gt.png"
      imgSize={400}
      button={false}
      backColor="bg-white"
      textColor="text-sky-700"
      buttonLink="/"
      link="https://github.com/bakaphp/kanvas-ecosystem-api"
    ></InfoSection>,
    <InfoSection
      desc="Simplify your app development using our pre-built components based on the Atomic Design concept. Integrated seamlessly with Kanvas Niche, they offer a quick solution for launching your frontend app effortlessly."
      title="Get a head start with Phoenix"
      img="/images/Gewaer.png"
      reverse
      button={true}
      buttonColor="bg-sky-700 "
      buttonTitle="Get Notified"
      backColor="bg-white"
      textColor="text-sky-700"
      buttonLink="#Newsletter"
      imgSize={580}
      space="mt-4"
    ></InfoSection>,
    // <VerticalImageStack images={imagesDataKanvas}></VerticalImageStack>,
    <Brands
      imageUrls={kanvasImagesBrand}
      title="Brands that trust us"
      slider
      titleColor="text-white"
      className="bg-sky-700"
    ></Brands>,
    <Footer kanvas></Footer>,
  ],
  gewaer: [
    <Header
      menu={<GMenu />}
      className="bg-gewaer-100"
      logo="/images/Gewaer.svg"
      iconColor="text-white"
    />,
    <GA />,
    <Hero
      className="bg-gewaer-100 "
      messageDesc="Launch a platform for your business that allows your sales team to input new orders and potential leads.  "
      messageEnd="Gewaer will enable clients to view progress updates on their projects or to upload the necessary documents to finalize tasks.   "
      upperMessage="Streamline business processes "
      lowerMessage="to accommodate "
      words={[" Clients", "Sellers", "Partners"]}
      colorDesc="text-white"
      colorFonts="text-white"
      colorWords="text-white"
      gewaer
      
    ></Hero>,
    <CompletionTools
      title="Portals helps you up-level customer experience"
      desc="Provide a secure and personalized method for clients, sellers, or partners to engage with your business data, products, and services, eliminating the necessity for manual interaction."
      img="/images/gview.png"
      colorFonts="text-gewaer-200"
    />,
    <ImageChanger
      data={gewaerActionsData}
      buttonColor="bg-white text-violet-500"
      selected="text-white"
      className="bg-gewaer-100 text-white"
      title="Digitalize your business: end manual tasks"
      desc="Gewaer offers a suite of features crafted to enhance efficiency and streamline operations, including dedicated client portals for personalized customer experiences, agent portals to empower your sales force, marketplaces for broader reach, secure contract hubs for seamless transactions, document management systems and more."
      double={600}
      top="-mt-24"
      center="text-center"
    />,
    <InfoSection
      desc="Gewaer offers a white-label UI that you can customize with your own branding: This includes changing logo, colors, fonts, and layout without any default branding."
      title="Branding Free"
      linkLetters="You can also add a custom domain and customize any email and communication."
      img="/images/stack.png"
      button={true}
      buttonColor="bg-gewaer-100 "
      buttonTitle="Request Demo"
      backColor="bg-violet-50"
      textColor="text-gewaer-200"
      buttonLink="https://meetings.hubspot.com/jennherasme/kanvas"
      imgSize={450}
      
    ></InfoSection>,
    <Brands
      imageUrls={gewaerImagesBrand}
      title="Brands that trust us"
      titleColor="text-white"
      className="bg-gewaer-100"
    ></Brands>,
    // <GewaerForm id="Contact"/>,
    <Footer gewaer></Footer>,
  ],
};
export default function Page() {
  const { generatePage } = usePageBuilder();
  return generatePage(PAGE_SECTIONS_HOME);
}
