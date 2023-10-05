"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdInsights } from "react-icons/md";

interface ImageData {
  url: string;
  desc: string;
  name: string;
  title: string;
}
export default function ListButtons({ data }: { data: ImageData[] }) {
  const [imageIndex, setImageIndex] = useState(0);
  const handleClick = (index: number) => {
    setImageIndex(index);
  };
  return (
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
      <div className="flex-col items-center justify-center mt-9 text-center hidden lg:flex ">
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
  );
}
