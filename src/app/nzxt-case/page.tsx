import McMenu from "@/components/molecules/mc-menu";
import Header from "@/components/organism/header";
import GoalsList from "@/components/organism/sections/case-goals";
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
        parrafo="Our most recent engagement involved a comprehensive project with NZXT, aimed at enhancing their ecommerce presence and operational efficiency across multiple dimensions.  "
        titulo="NZXT Case Study  "
      ></CasesHero>
      <Tags
        datos={[
          { titulo: "Client", descripcion: " NZXT" },
          { titulo: "Service", descripcion: "Development, Growth" },
          { titulo: "Industry", descripcion: "Technology" },
          { titulo: "Tags", descripcion: "Development, Growth, Ecommerce" },
        ]}
      ></Tags>
      <CaseInfo imagenSrc="/images/case/NZXT/desktop1.png" texto="" />
      <GoalsList
        title="Project Objectives:"
        goals={[
          {
            id: 1,
            description:
              "Ecommerce Backend Infrastructure Development: To design and implement a robust backend infrastructure capable of managing multiple Shopify stores.",
          },
          {
            id: 2,
            description:
              "Custom PC Building Solution: To create a tailored solution that simplifies the process of custom PC building for NZXT's customers.",
          },
          {
            id: 3,
            description:
              "Multi-Region Shopify Account Implementation: To facilitate the expansion of NZXT's market reach by implementing Shopify accounts across multiple regions.",
          },
          {
            id: 4,
            description:
              "Headless Shopify Ecommerce Solution: To develop a headless ecommerce solution on Shopify, enhancing website performance and user experience.",
          },
        ]}
      />
       <CaseInfo imagenSrc="/images/case/NZXT/desktop2.png" texto="" />
      <GoalsList
        title="Achievements:"
        goals={[
          {
            id: 1,
            description:
              "Ecommerce Backend Infrastructure: Successfully built a complete backend infrastructure that now supports seamless management of NZXT’s multiple Shopify stores. This infrastructure has improved operational efficiency and provided a solid foundation for scalability.  ",
          },
          {
            id: 2,
            description:
              "Custom PC Building Solution: Developed a custom PC building solution that has significantly enhanced the customer experience, making it easier for users to customize PCs according to their specific needs. This solution has contributed to an increase in customer satisfaction and sales.",
          },
          {
            id: 3,
            description:
              "Multi-Region Shopify Account: Implemented multi-region Shopify accounts, enabling NZXT to broaden its market presence and cater to a wider audience. This strategic move has resulted in increased global sales and market penetration.",
          },
          {
            id: 4,
            description:
              "Headless Shopify Ecommerce Solution: Created a headless ecommerce solution for Shopify, which has led to faster website loading times, better SEO, and a more flexible user interface. This solution has markedly improved the online shopping experience for customers.",
          },
        ]}
      />
      <CaseInfo
        texto="The collaboration with NZXT yielded significant positive outcomes, including operational efficiencies, enhanced customer experiences, and increased sales. The custom solutions and implementations have set a new standard for NZXT’s ecommerce capabilities, positioning them for sustained growth and success in the competitive tech and PC gaming market."
      />
      <Footer mctekk></Footer>
    </>
  );
}
