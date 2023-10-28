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
}

export default function ImageChanger({ data, buttonColor,selected,className,desc,title }: ImageChangerProps) {
  return (
    <div className={`section  ${className}`} id="actions">
      <Section>
        <div className="xl:ml-64 mb-10">
          <h1 className="mb-4">{title}</h1>
          <h4 className="text-white-normal">
           {desc}
          </h4>
        </div>
        <Dropdown data={data}></Dropdown>
        <div>
          <ListButtons data={data} buttonColor={buttonColor} selected={selected} /> {/* Pasar el color a ListButtons */}
        </div>
      </Section>
    </div>
  );
}
