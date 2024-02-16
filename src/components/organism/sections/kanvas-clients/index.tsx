import React from "react";
import Image from "next/image";
interface ImageListProps {
  title: string;
  imageUrls: string[];

  className?: string;
}

function Clients({ title, imageUrls, className }: ImageListProps) {
  return (
    <div className={` ${className} text-white`}>
      <div className=" lg:flex lg:flex-row flex flex-col w-fit  lg:space-x-20 mx-auto items-center">
        <p className="text-[20px] font-semibold  text-black">
          {title}
        </p>
        {imageUrls.map((imageUrl, index) => (
          <Image
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            className="mb-20 mt-20  "
            width={113}
            height={24}
          />
        ))}
      </div>
    </div>
  );
}

export default Clients;
