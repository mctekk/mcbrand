"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/atoms/section";
import { MdInsights, MdKeyboardArrowDown } from "react-icons/md";
import { translate } from "@/locales";

interface ImageData {
  url: string;
  desc: string;
  name: string;
  title: string;
}
export default function ImageChanger({ data }: { data: ImageData[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const handleClick = (index: number) => {
    setImageIndex(index);
  };
  const handleDropClick = (index: number) => {
    setIsOpen(false);
  };
  return (
    <div className="section bg-zinc-800 text-white">
      <Section>
        <div className="xl:ml-64 mb-10">
          <h1 className="mb-4">{translate("home.iteraction.title")}</h1>
          <h4 className="text-white-normal">
            {translate("home.iteraction.desc")}
          </h4>
        </div>
        <div className="lg:hidden relative">
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
        <div className="flex space-x-1 xl:ml-64">
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
                    ? " text-orange-500  whitespace-nowrap outline outline-1  rounded-lg px-4 w-64 py-2  flex items-center justify-start text-left gap-2 transition-all duration-500 select-none  text-[1.20rem]"
                    : " bg-stone-600 text-[1.20rem] rounded-lg px-4 py-2 w-64 flex items-center justify-start  text-left gap-2 transition-all duration-500 select-none"
                }
              >
                <MdInsights className="md:text-[1.75rem]" />
                {item.name}
              </motion.button>
            ))}
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
            <p className="">{data[imageIndex].desc}</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
