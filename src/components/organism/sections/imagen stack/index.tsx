import Image from "next/image";
import React from "react";

import "swiper/css";

interface TwoPartComponentProps {
  title: string;
  description: string;
  img: string;
  top: string;
  subdesc?: string;
}

function ImagenStack({
  title,
  description,
  img,
  top,
  subdesc,
}: TwoPartComponentProps): JSX.Element {
  return (
    <div className="">
      <div className="flex flex-col  lg:flex-row section xl:w-4/6 mx-auto ">
        <div className={`xl:w-1/3 p-4 ${top}`}>
          <h2 className="text-[36px] font-bold mb-4">{title}</h2>
          <p className="mb-4 text-[18px]">{description}</p>
          <p className="mb-4 text-[18px]">{subdesc}</p>
        </div>
        <div className="xl:w-2/3 bg-white rounded-md  overflow-hidden">
          <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center">
            <div className="flex flex-col lg:flex-row  ">
            <div className="w-full h-full  lg:w-56 lg:h-96 m-1">
              <img
                className="w-full h-full object-contain"
                src="/images/recipe/recipe3.png"
                alt="Imagen 1"
              />
            </div>
            <div className="w-1/2 h-1/2  lg:w-48 lg:h-96 mx-auto lg:mx-0">
              <img
                className="w-full h-full object-contain"
                src="/images/recipe/recipe2.png"
                alt="Imagen 2"
              />
            </div>
            </div>
            <div className="flex lg:flex-col md:flex-row">
            <div className="w-48 h-48 md:w-96 md:h-96 lg:w-44 lg:h-48 m-1">
              <img
                className="w-full h-full object-contain"
                src="/images/recipe/recipe4.png"
                alt="Imagen 3"
              />
            </div>
           
            <div className="w-48 h-48 md:w-96 md:h-96 lg:w-44 lg:h-44 m-1">
              <img
                className="w-full h-full object-contain"
                src="/images/recipe/recipe5.png"
                alt="Imagen 4"
              />
            </div>
            </div>
            <div className="flex lg:flex-row ">
            <div className="w-48 h-48 md:w-96 md:h-96 lg:w-52 lg:h-72 m-1">
              <img
                className="w-full h-full object-contain"
                src="/images/recipe/recipe6.png"
                alt="Imagen 5"
              />
            </div>
            <div className="w-48 h-48 md:w-96 md:h-96 lg:w-52 lg:h-72 m-1">
              <img
                className="w-fit h-full object-contain"
                src="/images/recipe/recipe7.png"
                alt="Imagen 6"
              />
            </div>
            </div>
            <div className="flex flex-col">
            <div className=" h-48 md:w-96 md:h-96 lg:w-60 lg:h-48 m-1">
              <img
                className="w-full h-full object-contain"
                src="/images/recipe/recipe1.png"
                alt="Imagen 7"
              />
            </div>
            <div className=" w-96 h-48 md:w-96 md:h-96 lg:w-60 lg:h-48 m-1">
              <img
                className="w-full h-fit object-contain "
                src="/images/recipe/recipe9.png"
                alt="Imagen 8"
              />
            </div>
            
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ImagenStack;
