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
import { imagesBrand, kanvasImagesBrand } from "@/model/api";
import SimpleForm from "@/components/organism/sections/home/formContact";
import Behind from "@/components/organism/sections/about-us/behind-laptos";
import { GaMc } from "@/components/atoms/analitiycs/mctekkGa";
import { translate } from "@/locales";
import { GaKanvas } from "@/components/atoms/analitiycs/kanvasGa";
import { KanvasMenu } from "@/components/molecules/kanvas-menu";
import CenteredContent from "@/components/organism/sections/center-content";
import ImagenStack from "@/components/organism/sections/imagen stack";
import { Ikanvas } from "@/components/organism/sections/interactive-kanvas";
import Clients from "@/components/organism/sections/kanvas-clients";
import TwoPartComponent from "@/components/organism/sections/slider-text";
import Content from "@/components/organism/sections/content";

const PAGE_SECTIONS_ABOUT_US: Record<string, ReactNode> = {
  kanvas: [
    <div className="flex justify-center items-center m-16 py-36">
      <img src="/images/kanvasBlue.svg" alt="Descripción de la imagen" />
    </div>,
    
  ],
};

export default function Page() {
  const { generatePage } = usePageBuilder();
  return generatePage(PAGE_SECTIONS_ABOUT_US);
}
