import React from "react";
import { Section } from "@/components/atoms/section";

interface TituloDescripcion {
  titulo: string;
  descripcion: string;
  apply?: boolean;
}

function Tags({ datos }: { datos: TituloDescripcion[] }) {
  return (
    <Section>
      <div className="flex flex-col md:flex-row md:justify-between section md:ml-24 w-fit lg:w-full mx-auto text-center lg:text-justify">
        {datos.map((item, index) => (
          <div key={index} className="w-full md:w-1/4 md:mr-4 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">{item.titulo}</h2>
            <p className="mb-4">{item.descripcion}</p>
            {item.apply && (
              
              <a
                href="/jobs-form"
                className="rounded-md w bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Apply Now
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Tags;
