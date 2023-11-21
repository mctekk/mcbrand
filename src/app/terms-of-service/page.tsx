import React, { ReactNode } from "react";
import Header from "@/components/organism/header";
import { Footer } from "@/components/organism/sections/footer";
import Terms from "@/components/organism/sections/terms-of-service/terms";
import Menu from "@/components/molecules/menu";
import { usePageBuilder } from "@/model/interactions/use-page-builder";
import McMenu from "@/components/molecules/mc-menu";
import McPrivacyPolicy from "@/components/organism/sections/mc-policy";

const PAGE_SECTIONS_TERMS_OF_SERVICE: Record<string, ReactNode> = {
  salesassist: [
    <Header
      menu={<Menu></Menu>}
      logo="/images/logo.png"
      iconColor="text-black"
    />,
    <Terms />,
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
  return generatePage(PAGE_SECTIONS_TERMS_OF_SERVICE);
}
