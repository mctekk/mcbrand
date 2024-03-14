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
      image: "",
      tags: ["Informatica", "Programacion"],
      link:"/posts/nzxt-case-study"
    },
    {
      title: "Too Corporation Case Study ",
      subtitle: "Our project with Too Corporation Americas and their collaboration with the brand Copic represented a focused initiative to enhance their online retail capabilities and customer engagement strategies.       ",
      image: "url_de_la_imagen_2",
      tags: ["Tecnologia", "Desarrollo"],
      link:"/posts/too-corporation-case-study"
    },
    {
      title: "Memod’s Case Study",
      subtitle: "Memo'd is a note-sharing app where you can find inspirations and ideas shared by a community of creators",
      image: "url_de_la_imagen_2",
      tags: ["Tecnologia", "Desarrollo"],
      link:"/posts/memod-s-case-study"
    },
  ];

  return (
    <div className="section">
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
