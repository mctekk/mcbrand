"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdInsights } from "react-icons/md";
import SyntaxHighlighter from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/esm/styles/hljs";
interface ImageData {
  url: string;
  desc: string;
  name: string;
  title: string;
}

interface ListProps {
  data: ImageData[];
  buttonColor?: string;
  selected?: string;
  code?: boolean;
  double : 500 | 200 | 600
  top?: string
}
export default function ListButtons({
  data,
  buttonColor,
  selected,
  code,
  double,
  top
}: ListProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const handleClick = (index: number) => {
    setImageIndex(index);
  };
  if (code) {
    return (
      <div className="flex space-x-20 xl:ml-64">
        <div className="space-y-6 md:hidden flex-col hidden lg:flex ">
          {data.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleClick(index)}
              initial={{ translateX: -300, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "linear", delay: index / 2 }}
              className={
                index === imageIndex
                  ? `${selected}   whitespace-nowrap outline outline-1  rounded-lg px-4 w-64 py-2  flex items-center justify-start text-left gap-2 transition-all duration-500 select-none  text-[1.20rem]`
                  : ` ${buttonColor} text-[1.20rem] rounded-lg px-4 py-2 w-64 flex items-center justify-start  text-left gap-2 transition-all duration-500 select-none`
              }
            >
              <MdInsights className="md:text-[1.75rem]" />
              {item.name}
            </motion.button>
          ))}
        </div>
        <div className="flex-col items-center justify-center mt-9  hidden lg:flex ">
          <SyntaxHighlighter language="javascript" style={shadesOfPurple} wrapLongLines={true}>
            {data[imageIndex].url}
          </SyntaxHighlighter>
          <h4 className="font-semibold mt-5">{data[imageIndex].title}</h4>
          <p className=" w-3/4 ">{data[imageIndex].desc}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex space-x-48 xl:ml-64">
        <div className="space-y-6 md:hidden flex-col hidden lg:flex ">
          {data.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleClick(index)}
              initial={{ translateX: -300, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "linear", delay: index / 2 }}
              className={
                index === imageIndex
                  ? `${selected}   whitespace-nowrap outline outline-1  rounded-lg px-4 w-72 py-2  flex items-center justify-start text-left gap-2 transition-all duration-500 select-none  text-[1.20rem]`
                  : ` ${buttonColor} text-[1.20rem] rounded-lg px-4 py-2 w-72 flex items-center justify-start  text-left gap-2 transition-all duration-500 select-none`
              }
            >
              <MdInsights className="md:text-[1.75rem]" />
              {item.name}
            </motion.button>
          ))}
        </div>
        <div className={`flex-col  justify-center mt-9 text-center hidden lg:flex ${top} `}>
          <Image
            src={data[imageIndex].url}
            alt={data[imageIndex].desc}
            width={double}
            height={24}
            className="mb-10 "
          />
           <div className="w-[80%]">
          <h4 className="font-semibold  ">{data[imageIndex].title}</h4>
          <p className="">{data[imageIndex].desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
