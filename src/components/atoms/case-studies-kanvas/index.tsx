"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Section } from "../section";

interface ImageData {
  imageUrl: string;
  title?: string;
  text?: string;
}

interface VerticalImageStackProps {
  images: ImageData[];
}

const VerticalImageStack: React.FC<VerticalImageStackProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const toggleImageSize = (index: number) => {
    setSelectedImageIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="section">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className=""
      >
        <h1 className="pb-2  font-semibold md:leading-10 tracking-tight 	lg:self-center text-cyan-600">
          Case studies
        </h1>
        <h3 className="md:pb-10  text-cyan-600 font-semibold ">From some of our customers</h3>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {images.map((image, index) => (
            <div key={index} style={{ margin: "10px", cursor: "pointer" }}>
              <img
                src={image.imageUrl}
                alt={`Image ${index + 1}`}
                style={{
                  width: selectedImageIndex === index ? "800px" : "400px",
                  height: selectedImageIndex === index ? "600px" : "600px",
                  objectFit: "cover",
                }}
                onClick={() => toggleImageSize(index)}
                className="rounded  border-solid border-8  border-white mr-9"
              />

              <Transition
                show={selectedImageIndex === index}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="mt-2">
                  <h3 className="font-semibold text-[1.5rem]">{image.title}</h3>
                  <p className="text-[1.085rem] text-gray-400 font-semibold">
                    {image.text}
                  </p>
                </div>
              </Transition>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalImageStack;
