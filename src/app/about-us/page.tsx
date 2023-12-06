import React, { ReactNode } from "react";
import Header from "@/components/organism/header";
import { Footer } from "@/components/organism/sections/footer";
import { AboutUsHero } from "@/components/organism/sections/about-us/about-us-hero";
import { AboutUsOurTeam } from "@/components/organism/sections/about-us/our-team";
import { AboutUsTeam } from "@/components/organism/sections/about-us/team-members";
import { GA } from "@/components/atoms/analitiycs";
import { aboutUsData } from "@/model/api/about-us/data";
import { ourTeamData } from "@/model/api/our-team/data";
import { aboutTeamData, mcAboutTeamData } from "@/model/api/about-us-team/data";
import Menu from "@/components/molecules/menu";
import { usePageBuilder } from "@/model/interactions/use-page-builder";
import McMenu from "@/components/molecules/mc-menu";
import Hero from "@/components/organism/sections/home/hero";
import InfoSection from "@/components/organism/sections/home/InfoSection";
import Brands from "@/components/atoms/brands";
import { imagesBrand } from "@/model/api";
import SimpleForm from "@/components/organism/sections/home/formContact";
import Behind from "@/components/organism/sections/about-us/behind-laptos";
import { GaMc } from "@/components/atoms/analitiycs/mctekkGa";


const PAGE_SECTIONS_ABOUT_US: Record<string, ReactNode> = {
  salesassist: [
    <Header
      menu={<Menu></Menu>}
      logo="/images/logo.png"
      iconColor="text-black"
    />,

    <GA />,
    <AboutUsHero data={aboutUsData}></AboutUsHero>,
    <AboutUsOurTeam data={ourTeamData}></AboutUsOurTeam>,
    <AboutUsTeam data={aboutTeamData} bgColor="bg-zinc-800 text-white"></AboutUsTeam>,
    <Footer sales={true} kind="dark" />,
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
      buttonInfo="Get Started"
      buttonLink="https://meetings.hubspot.com/jennifer-herasme"
      messageDesc="MCTEKK is your partner in different key areas: Headless E-commerce, Data Analytics and Community. We base our solutions on a new approach we call "
      messageEnd=" Kanvas Graph Api Layer, in order to help you scale your business to the next level."
      lowerMessage="We are Mctekk"
      words={[]}
      colorDesc="text-white"
      colorFonts="text-white"
      colorWords="text-white font-semibold"
      buttonColor="bg-mctekk-100"
      button
      className="bg-cover bg-center bg-black fill-black"
    ></Hero>,
    <InfoSection
      desc="We are deeply committed to addressing business challenges through ingenious coding solutions. In collaboration with our valued partners, we have pinpointed specific domains where we are confident in our ability to drive meaningful change. "
      title="Our Mission"
      img="/images/comp.jpg"
      button={false}
      backColor="bg-white"
      buttonLink=""
    ></InfoSection>,
    <InfoSection
      desc="Whether it's enhancing E-commerce platforms, optimizing inventory management systems, or elevating client portals, our extensive experience with a diverse clientele has equipped us to tackle your software-related challenges effectively, enabling you to concentrate on your company's overarching objectives."
      img="/images/Gewaer.jpg"
      button={false}
      reverse={true}
      backColor="bg-white"
      buttonLink=""
      imgSize={480}
      
    ></InfoSection>,
    <Brands imageUrls={imagesBrand} title="Brands that trust us" titleColor="text-white" className="bg-black" />,
   <Behind></Behind>,
    <SimpleForm id="ContactForm"></SimpleForm>,
    <Footer mctekk></Footer>,
  ],
};

export default function Page() {
  const { generatePage } = usePageBuilder();
  return generatePage(PAGE_SECTIONS_ABOUT_US);
}
