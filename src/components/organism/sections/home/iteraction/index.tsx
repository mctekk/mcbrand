// En tu componente ImageChanger.tsx
import React from "react";
import { Section } from "@/components/atoms/section";
import { translate } from "@/locales";
import Dropdown from "@/components/atoms/dropdown";
import ListButtons from "@/components/atoms/list-buttons";

interface ImageData {
  url: string;
  desc: string;
  name: string;
  title: string;
}

interface ImageChangerProps {
  data: ImageData[];
  buttonColor?: string; 
  selected?:string
  className:string
  title:string
  desc:string
  code?:boolean
  double : 500 | 200 | 600
  top?:string
  center?:string
  margenImagen?:string
}

export default function ImageChanger({ data, buttonColor,selected,className,desc,title,code,double,top,center,margenImagen }: ImageChangerProps) {
  return (
    <div className={`section  ${className}`} id="features">
      <Section>
        <div className={`xl:ml-44 mb-10 ${center}`}>
          <h1 className="mb-4">{title}</h1>
          <h4 className="text-white-normal">
           {desc}
          </h4>
        </div>
        <Dropdown data={data} code={code} double={double}></Dropdown>
        <div>
          <ListButtons data={data} buttonColor={buttonColor} selected={selected} code={code} double={double} top={top} margenImagen={margenImagen}/>
        </div>
      </Section>
    </div>
  );
}
