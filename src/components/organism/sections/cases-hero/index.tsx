import { Section } from "@/components/atoms/section";
import React from "react";

interface Props {
  titulo: string;
  parrafo: string;
}

function CasesHero({ titulo, parrafo }: Props){
  return (
    <div className="bg-black text-white py-32">
      <Section className=" ">
        <div className="flex justify-center items-center ">
          <div className="w-1/2 text-left xl:ml-32">
            <h1 className="text-[55px] font-bold">{titulo}</h1>
          </div>
          <div className="w-1/2 text-center">
            <p className="text-lg">{parrafo}</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CasesHero;
