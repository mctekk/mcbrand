import { Footer } from "@/components/organism/sections/footer";
import Header from "@/components/organism/header";
import { GA } from "@/components/atoms/analitiycs";
import Info from "@/components/organism/sections/privacy-policy/info";
import Menu from "@/components/molecules/menu";
import McMenu from "@/components/molecules/mc-menu";
import { usePageBuilder } from "@/model/interactions/use-page-builder";
import { ReactNode } from "react";

import { McPolicyData } from "@/model/api/policy-data/data";
import McPrivacyPolicy from "@/components/organism/sections/mc-policy";

const PAGE_SECTIONS_PRIVACY: Record<string, ReactNode> = {
  salesassist: [
    <GA />,
    <Header
      menu={<Menu></Menu>}
      logo="/images/logo.png"
      iconColor="text-black"
    />,
    <Info />,
    <Footer kind="dark" />,
  ],

  mctekk: [
    <Header
      menu={<McMenu></McMenu>}
      className="bg-black"
      logo="/images/McLogo.svg"
      iconColor="text-white"
    />,
    <McPrivacyPolicy />,
    <Footer mctekk></Footer>,
  ],
};

export default function Page() {
  const { generatePage } = usePageBuilder();
  return generatePage(PAGE_SECTIONS_PRIVACY);
}
