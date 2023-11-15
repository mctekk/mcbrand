import React from "react";
import { Button } from "../button/base";

interface CardProps {
  imageSrc: string;
  title: string;
  text: string;
  info: string;
  button?:boolean
  direction?:string
}

export function InfoCard({ imageSrc, title, text, info,button,direction }: CardProps) {
  return (
    <div className=" shadow-md bg-white rounded-lg ">
      <img
        src={imageSrc}
        alt={title}
        className="w-fit h-fit mx-auto p-9 "
      />
      <h2 className="text-xl font-semibold text-center mt-4">{title}</h2>
      <p className="text-gray-600 text-center mt-2">{text}</p>
      {button? <a href={direction} className="flex items-center mx-auto justify-center mt-2 pb-24"><Button className="bg-gray-400 ">{info}</Button></a>: <p className="text-gray-500 text-center mt-2 pb-24">{info}</p>}
     
    </div>
  );
}


