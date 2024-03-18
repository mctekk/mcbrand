import React from 'react';

interface ImagenParrafoProps {
  imagenSrc?: string;
  texto: string;
  title?:string
}

const ImagenParrafoCentrado: React.FC<ImagenParrafoProps> = ({ imagenSrc, texto,title }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      {imagenSrc && <img src={imagenSrc} alt="Imagen" className=" w-3/4"  />}
      {title && <p className="text-left  max-w-3xl text-[44px] font-semibold  mb-5 mt-5">{title}</p>}
      <p className="text-justify mx-auto max-w-3xl text-[26px] mt-5 mb-5">{texto}</p>
    </div>
  );
};

export default ImagenParrafoCentrado;
