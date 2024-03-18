import { Section } from '@/components/atoms/section';
import React from 'react';

interface TituloDescripcion {
  titulo: string;
  descripcion: string;
}

const Tags: React.FC<{ datos: TituloDescripcion[] }> = ({ datos }) => {
  return (
    <Section>
    <div className="flex flex-row justify-between section ml-24">
      {datos.map((item, index) => (
        <div key={index} className="w-1/4">
          <h2 className="text-xl font-bold mb-2">{item.titulo}</h2>
          <p>{item.descripcion}</p>
        </div>
      ))}
    </div>
    </Section>
  );
};

export default Tags;
