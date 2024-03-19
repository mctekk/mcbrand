import McMenu from "@/components/molecules/mc-menu";
import Header from "@/components/organism/header";
import GoalsList from "@/components/organism/sections/case-goals";
import CardList from "@/components/organism/sections/cases";
import CasesHero from "@/components/organism/sections/cases-hero";
import CaseInfo from "@/components/organism/sections/cases-info";
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
        parrafo="Our project with Copic represented a focused initiative to enhance their online retail capabilities and customer engagement strategies. "
        titulo="Too Corporation (Copic) Case Study  "
      ></CasesHero>
      <Tags
        datos={[
          { titulo: "Client", descripcion: " Too Corporation" },
          { titulo: "Service", descripcion: "Development, Growth" },
          { titulo: "Industry", descripcion: "Technology" },
          { titulo: "Tags", descripcion: "Technology, Growth" },
        ]}
      ></Tags>
      <CaseInfo imagenSrc="/images/case/too/desktop1.png" texto="Our project with Too Corporation Americas and their collaboration with the brand Copic represented a focused initiative to enhance their online retail capabilities and customer engagement strategies. " />
      <GoalsList
        title="Project Objectives:"
        goals={[
          {
            id: 1,
            description:
              "Headless Shopify Ecommerce Solution: To develop a scalable and high-performance ecommerce solution using Shopify's headless architecture.",
          },
          {
            id: 2,
            description:
              "Loyalty Program Development: To design and implement a loyalty program that incentivizes repeat purchases and enhances customer loyalty.",
          },
        ]}
      />
      <GoalsList
        title="Achievements:"
        goals={[
          {
            id: 1,
            description:
              "Headless Shopify Ecommerce Solution: We successfully developed a headless ecommerce solution for Copic, leveraging Shopify's robust API and modern web development frameworks. This approach decoupled the frontend from the backend, resulting in faster page loads, improved SEO, and a highly customizable user experience.  ",
          },
          {
            id: 2,
            description:
              "Loyalty Program: We built a comprehensive loyalty program for Copic, designed to reward customers for their engagement and repeat purchases. The program features a points system, tiered rewards, and exclusive benefits, significantly enhancing customer satisfaction and retention.",
          },
        ]}
      />
      <CaseInfo imagenSrc="/images/case/too/desktop2.png" title="Positive Results:" texto="The implementation of the headless ecommerce solution and loyalty program for Copic has led to remarkable outcomes in enhancing loyalty and their online presence. The headless architecture has streamlined Copic's online operations, offering customers a seamless and responsive online shopping experience. This has led to increased website traffic and higher conversion rates."/>
      <Footer mctekk></Footer>
    </>
  );
}
