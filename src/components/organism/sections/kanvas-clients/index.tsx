import React from "react";
import Image from "next/image";
interface ImageListProps {
  title: string;
  imageUrls: string[];

  className?: string;
}

function Clients({ title, imageUrls, className }: ImageListProps) {
  return (
    <div>
      <div className={` ${className} text-white hidden lg:flex`}>
        <div className=" lg:flex lg:flex-row flex flex-col w-fit  lg:space-x-20 mx-auto items-center">
          <p className="text-[20px] font-semibold  text-black">{title}</p>
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
      <section className={`${className} section lg:hidden`}>
        <div
          className={`slider-container container mx-auto lg:flex ${className} flex-col`}
        >
          <p
            className={`text-[30px] font-semibold pt-10 mb-10 mx-auto items-center w-fit ml-4 md:ml-0`}
          >
            {title}
          </p>
          <div className="kanvas-slider-inside">
            <ul className="infinity-x-container ">
              {imageUrls.map((imageUrl, index) => (
                <li
                  className="infinity-x"
                  style={{ marginRight: "200px" }}
                  key={index}
                >
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
    </div>
  );
}

export default Clients;
