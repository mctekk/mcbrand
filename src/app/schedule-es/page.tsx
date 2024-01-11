import { usePageBuilder } from "@/model/interactions/use-page-builder";

import { ReactNode } from "react";

import Header from "@/components/organism/header";
import { Footer } from "@/components/organism/sections/footer";

import Menu from "@/components/molecules/menu";
import McMenu from "@/components/molecules/mc-menu";
import { translate } from "@/locales";

import { KanvasMenu } from "@/components/molecules/kanvas-menu";

import { GLMenu, GLMenuEs } from "@/components/atoms/gewaerLeadMenu";
import { GaGewaerLaunch } from "@/components/atoms/analitiycs/gewaerGaLaunch";
import HubSpotMeetingsEmbed from "@/components/atoms/hubspotGewaer";
import HubSpotMeetingsEmbedEs from "@/components/atoms/hubspotGewaerEs";

const PAGE_SECTIONS_SCHEDULE: Record<string, ReactNode> = {
  salesassist: [
    <Header
      menu={<Menu></Menu>}
      logo="/images/logo.png"
      iconColor="text-black"
    />,
    <Footer sales={true} />,
  ],

  mctekk: [
    <Header
      menu={<McMenu></McMenu>}
      className="bg-black"
      logo="/images/McLogo.svg"
      iconColor="text-white"
    />,
    <Footer mctekk></Footer>,
  ],
  kanvas: [
    <Header
      menu={<KanvasMenu />}
      className="bg-sky-600"
      logo="/images/kanvasL.svg"
      iconColor="text-white"
    />,
    <Footer kanvas></Footer>,
  ],
  gewaer: [
    <Header
      menu={<GLMenuEs />}
      className="bg-gewaer-100"
      logo="/images/Gewaer.svg"
      iconColor="text-white"
    />,
    <HubSpotMeetingsEmbedEs />,
    <Footer gewaerEs></Footer>,
  ],
};
export default function Page() {
  const { generatePage } = usePageBuilder();
  return generatePage(PAGE_SECTIONS_SCHEDULE);
}
