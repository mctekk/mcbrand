
import React from "react";
import Header from "@/components/organism/header";
import { Footer } from "@/components/organism/sections/footer";
import { AboutUsHero } from "@/components/organism/sections/about-us/about-us-hero";
import { AboutUsOurTeam } from "@/components/organism/sections/about-us/our-team";
import { AboutUsTeam } from "@/components/organism/sections/about-us/team-members";
import { GA } from "@/components/atoms/analitiycs";
import { aboutUsData } from "@/model/api/about-us/data";
import { ourTeamData } from "@/model/api/our-team/data";
import { aboutTeamData } from "@/model/api/about-us-team/data";
import Menu from "@/components/molecules/menu";

export default function page() {
  return (
    <>
      <Header
        menu={<Menu ></Menu>}
        logo="/images/logo.png"
        iconColor="text-black"
      />
      
      <GA />
      <AboutUsHero data={aboutUsData}></AboutUsHero>
      <AboutUsOurTeam data={ourTeamData}></AboutUsOurTeam>
      <AboutUsTeam data={aboutTeamData}></AboutUsTeam>
      <Footer kind="dark"></Footer>
    </>
  );
}
