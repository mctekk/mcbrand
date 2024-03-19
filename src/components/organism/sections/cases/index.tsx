import React from "react";
import { Section } from "@/components/atoms/section";
import CardSe from "../caseStudies";

interface CardInfo {
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  link:string
}

interface Props {
  sectionTitle: string;
}

const CardList: React.FC<Props> = ({ sectionTitle }) => {
  const cards: CardInfo[] = [
    {
      title: "NZXT Case Study ",
      subtitle: "Our most recent engagement involved a comprehensive project with NZXT, aimed at enhancing their ecommerce presence and operational efficiency across multiple dimensions.       ",
      image: "/images/case/NZXTC.png",
      tags: ["Tech", "Programing"],
      link:"/nzxt-case"
    },
    {
      title: "Too Corporation Case Study ",
      subtitle: "Our project with Too Corporation Americas and their collaboration with the brand Copic represented a focused initiative to enhance their online retail capabilities and customer engagement strategies.       ",
      image: "/images/case/copic.png",
      tags: ["Tech", "Growth"],
      link:"/too-case"
    },
    {
      title: "Memod’s Case Study",
      subtitle: "Memo'd is a note-sharing app where you can find inspirations and ideas shared by a community of creators",
      image: "/images/case/memod.png",
      tags: ["Development", "Growth"],
      link:"/memod-case"
    },
  ];

  return (
    <div className="section bg-white">
      <Section >
      <p className="justify-center mx-auto w-fit mb-24 font-semibold text-[34px]">{sectionTitle}</p>
        <div className="flex flex-wrap justify-center mx-auto">
          {cards.map((card, index) => (
            <CardSe
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              tags={card.tags}
              link={card.link}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default CardList;
