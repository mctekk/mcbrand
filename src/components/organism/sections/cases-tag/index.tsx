import React from "react";
import { Section } from "@/components/atoms/section";

interface TituloDescripcion {
  titulo: string;
  descripcion: string;
}

function Tags({ datos }: { datos: TituloDescripcion[] }) {
  return (
    <Section>
      <div className="flex flex-col md:flex-row md:justify-between section md:ml-24 w-fit lg:w-full mx-auto text-center lg:text-justify">
        {datos.map((item, index) => (
          <div key={index} className="w-full md:w-1/4 md:mr-4 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">{item.titulo}</h2>
            <p className="">{item.descripcion}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Tags;
