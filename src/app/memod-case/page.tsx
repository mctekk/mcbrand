import McMenu from "@/components/molecules/mc-menu";
import Header from "@/components/organism/header";
import GoalsList from "@/components/organism/sections/case-goals";
import CardList from "@/components/organism/sections/cases";
import CasesHero from "@/components/organism/sections/cases-hero";
import ImagenParrafoCentrado from "@/components/organism/sections/cases-info";
import Tags from "@/components/organism/sections/cases-tag";
import { Footer } from "@/components/organism/sections/footer";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <>
      {" "}
      <Header
        menu={<McMenu></McMenu>}
        className="bg-black"
        logo="/images/McLogo.svg"
        iconColor="text-white"
      />
      <CasesHero
        parrafo="Memo'd is a note-sharing app where you can find inspirations and ideas shared by a community of creators.  "
        titulo="Memod’s Case Study"
      ></CasesHero>
      <Tags
        datos={[
          { titulo: "Technology", descripcion: " Kanvas" },
          { titulo: "Service", descripcion: "Development, Growth" },
          { titulo: "Industry", descripcion: "Technology" },
          { titulo: "Tags", descripcion: "Technology, Growth" },
        ]}
      ></Tags>
       <GoalsList
      title="Goals"
        goals={[
          { id: 1, description: "Create a system that allowed people to gain, store, retain and share knowledge" },
          { id: 2, description: "Allow different creators to post quality content" },
          { id: 3, description: "Allow people to have condensed versions of content that they could absorb easily" },
        ]}
      />{" "}
      <ImagenParrafoCentrado
        title="Challenges & Business Drivers"
        imagenSrc="/images/case/NZD.PNG"
        texto="Pain point 1: With the proliferation of mobile internet, people are overwhelmed with information and have little time finding quality content -- users want curated high-impact insights in less time and space to be better"
      />
      <ImagenParrafoCentrado texto="Pain point 2: Oftentimes we forget what we’ve read, despite the feeling that we think we remember the information. We believe users will value a fun solution to retain and leverage powerful ideas and insights." />
      <ImagenParrafoCentrado texto="In essence, the fundamental value propositions are 1) surfacing and curating high-impact knowledge and 2) transforming desirable but lengthy content into simple, short, and structured insights." />
      <ImagenParrafoCentrado
        texto="Social Media Site and Mobile App: Successfully launched a fully-functional social media platform with a responsive design, ensuring compatibility across various devices and operating systems. The platform features an intuitive interface, real-time messaging, multimedia sharing capabilities, and robust privacy settings."
        title="Product Focus & Intended Outcomes"
      />
      <ImagenParrafoCentrado texto="AI Feature for Creators: Introduced an advanced AI feature that leverages machine learning algorithms to suggest content ideas, optimize posting times, and personalize content. This tool assists creators in maximizing their reach and engagement on the platform." />
     
      <Footer mctekk></Footer>
    </>
  );
}
