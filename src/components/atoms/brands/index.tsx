import React from "react";
import Image from "next/image";
interface ImageListProps {
  title: string;
  imageUrls: string[];
  titleColor:string
  slider?: boolean;
}

function ImageList({ title, imageUrls, slider ,titleColor}: ImageListProps) {
  if (slider) {
    return (
      <section className="bg-sky-700 section">
  <div className="slider-container container mx-auto lg:flex bg-sky-700 flex-col">
    <p className={`text-[30px] font-semibold pt-10 mb-10 mx-auto items-center w-fit ${titleColor}`}>{title}</p>
    <div className="kanvas-slider-inside">
      <ul className="infinity-x-container ">
        {imageUrls.map((imageUrl, index) => (
          <li className="infinity-x" style={{ marginRight: '200px' }} key={index}>
            <Image
              src={imageUrl}
              alt={`Image ${index}`}
              className="mb-20"
              width={150}
              height={24}
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>
    );
  } else {
    return (
      <div className="  bg-black text-white">
        <p className="text-[32px] font-semibold pt-14 mb-10 mx-auto items-center w-fit">
          {title}
        </p>
        <div className=" lg:flex lg:flex-row flex flex-col w-fit  lg:space-x-20 mx-auto items-center">
          {imageUrls.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              alt={`Image ${index}`}
              className="mb-20 w-full "
              width={93}
              height={24}
              quality={100}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ImageList;
