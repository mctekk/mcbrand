import React from "react";
import Image from "next/image";
interface ImageListProps {
  title: string;
  imageUrls: string[];
}

function ImageList({ title, imageUrls }: ImageListProps) {
  return (
    <div className="lg:flex lg:flex-col justify-center mx-auto items-center bg-black text-white">
      <p className="text-[32px] font-semibold mt-20 mb-10 mx-auto items-center w-fit">{title}</p>
      <div className=" lg:flex lg:flex-row flex flex-col w-fit  lg:space-x-20 mx-auto">
        {imageUrls.map((imageUrl, index) => (
          <Image
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            className="mb-20"
            width={100}
            height={24}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageList;
