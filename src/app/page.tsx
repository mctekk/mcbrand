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
import { dataMcSlide } from "@/model/api/simplify-sales";
import Brands from "@/components/atoms/brands";
import SimpleForm from "@/components/organism/sections/home/formContact";
import { imagesBrand, kanvasImagesBrand } from "@/model/api";
import { KanvasMenu } from "@/components/molecules/kanvas-menu";
import { GMenu } from "@/components/molecules/gewaer-menu";
import {
  columnsData,
  imagesDataKanvas,
  leadingData,
  ratesData,
} from "@/model/api/instant-changes/data";
import { GA } from "@/components/atoms/analitiycs";
import VerticalImageStack from "@/components/atoms/case-studies-kanvas";
import { GaKanvas } from "@/components/atoms/analitiycs/kanvasGa";

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
      messageDesc="We leverage 18 years of experience in software development and a suite of headless components to help your business grow."
      messageEnd="We solve problems and create solutions."
      upperMessage="Taking your business to the"
      lowerMessage="next level with"
      words={["Smart Code ", "Practical Solutions"]}
      colorDesc="text-white"
      colorFonts="text-white"
      colorWords="text-white"
      buttonColor="bg-orange-300"
      button
    ></Hero>,
    <InfoSection
      desc=" No matter if you're just starting out with a new idea or have been running a business for a long time, MCTEKK has the skills to help you make your product successful. Talk to us to find out how we can help you. "
      title="Let us help you move 2x faster"
      img="/images/fast.png"
      button={false}
      backColor="bg-white"
      buttonLink="/"
      imgSize={650}
    ></InfoSection>,
    <InfoSection
      desc="Kanvas Niche’s modules simplify complexities, letting you concentrate on building exceptional experiences. See the difference!"
      title="Unlock Seamless App Development"
      img="/images/Kpro.svg"
      button={true}
      buttonTitle="Learn More "
      buttonColor="bg-sky-600"
      backColor="bg-kanvas-bg bg-cover"
      buttonLink="https://kanvas.dev/"
      textColor="text-white"
      imgSize={400}
      isCase
      upperLogo="/images/k1.svg"
    ></InfoSection>,
    <InfoSection
      desc="Our solution connects to your CRM and allows to have an Agent Portal connected to your CRM and manage individual agent websites, referral programs, and more."
      title="All Managed with ease"
      img="/images/Gpro.svg"
      button={true}
      buttonTitle="Learn More "
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
      title="Brands that trust us"
      titleColor="text-white"
      
    />,
    <InfoSection
      desc=" We understand the dynamic needs of the tech industry and offer tailored staff augmentation services to meet those demands. Our team of experts specializes in seamlessly integrating skilled professionals into your existing workforce, ensuring they align with your company's culture and project requirements. Whether you need short-term assistance or long-term support, we provide flexible solutions to enhance your team's capabilities."
      title="We’ve got you covered"
      img="/images/ser.jpg"
      button={false}
      backColor="bg-white"
      buttonLink="/"
      id="Services"
      finalLink="https://meetings.hubspot.com/jennifer-herasme"
      linkLetters="Schedule a meeting with us to learn more about how we can assist you with your business needs"
      linkColor="text-orange-300 underline"
    ></InfoSection>,
    <InfoSection
    desc=" We're committed to empowering your business with our comprehensive suite of services and products. With Kanvas, we simplify app development, allowing you to focus on crafting outstanding experiences.    "
    title="Our clients    "
    img="/images/ser.jpg"
    button={true}
    buttonColor="bg-orange-300"
    buttonTitle="Let's get started!"
    backColor="bg-white"
    buttonLink="#contact"
    id="Services"

  ></InfoSection>,
    <SimpleForm></SimpleForm>,
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
      imgSize={500}
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
    ></InfoSection>,
    // <VerticalImageStack images={imagesDataKanvas}></VerticalImageStack>,
    <Brands
      imageUrls={kanvasImagesBrand}
      title="Brands that trust us"
      slider
      titleColor="text-white"
    ></Brands>,
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
      words={["ease", "baka", "lorem"]}
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
      double={200}
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
      buttonLink="/"
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

    <InstantChanges
      className="bg-violet-50"
      title="Companies That Turn to Gewaer See these Benefits"
      columnsData={columnsData}
      leadingData={leadingData}
      ratesData={ratesData}
    />,
    <WhySalesAssistSalesProcess data={industriesData} />,
    <Sales className="bg-violet-50" />,
    <Footer gewaer></Footer>,
  ],
};
export default function Page() {
  const { generatePage } = usePageBuilder();
  return generatePage(PAGE_SECTIONS_HOME);
}
