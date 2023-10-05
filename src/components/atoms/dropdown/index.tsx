"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdInsights, MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
interface ImageData {
  url: string;
  desc: string;
  name: string;
  title: string;
}
export default function Dropdown({ data }: { data: ImageData[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const handleClick = (index: number) => {
    setImageIndex(index);
  };
  return (
    <div className="lg:hidden relative">
      <div>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className=" text-[1.20rem] outline outline-1 w-full rounded-lg px-4 py-2  flex items-center justify-between  text-left gap-2 transition-all duration-500 select-none"
        >
          {data[imageIndex].name}

          <MdKeyboardArrowDown className="md:text-[1rem]" />
        </motion.button>
        {isOpen && (
          <ul className="bg-zinc-900 p-2 rounded-lg absolute  w-full">
            {data.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  handleClick(index);
                  setIsOpen(false);
                }}
                className="mt-5 w-full flex"
              >
                <MdInsights className="md:text-[1rem] flex mr-2 mt-1" />
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-col items-center justify-center mt-9 text-center  ">
        <Image
          src={data[imageIndex].url}
          alt={data[imageIndex].desc}
          width={200}
          height={24}
          className="mb-20 "
        />
        <h4 className="font-semibold">{data[imageIndex].title}</h4>
        <p >{data[imageIndex].desc}</p>
      </div>
    </div>
  );
}
