import React from 'react';

interface ImagenParrafoProps {
  imagenSrc?: string;
  texto: string;
  title?:string
}

function CaseInfo ({ imagenSrc, texto,title }: ImagenParrafoProps){
  return (
    <div className="flex flex-col items-center justify-center ">
      {imagenSrc && <img src={imagenSrc} alt="Imagen" className=" w-2/4"  />}
      {title && <p className="text-left  max-w-3xl text-[40px] font-semibold  mb-5 mt-5">{title}</p>}
      <p className="text-justify mx-auto max-w-3xl text-[24px] mt-5 mb-5">{texto}</p>
    </div>
  );
};

export default CaseInfo;
