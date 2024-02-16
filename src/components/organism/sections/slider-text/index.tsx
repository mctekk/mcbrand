"use client"
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface TwoPartComponentProps {
  title: string;
  description: string;
  buttonText: string;
  sliderImages: string[];
}

function TwoPartComponent({ title, description, buttonText, sliderImages }: TwoPartComponentProps): JSX.Element {
  const swiperRef = useRef<any>(null);

  return (
    <div className='bg-sky-600'>
      <div className="flex section xl:w-4/6 mx-auto ">
        <div className="w-1/2 p-4 text-white">
          <h2 className="text-[36px] font-bold mb-4">{title}</h2>
          <p className="mb-4 text-[18px]">{description}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            {buttonText}
          </button>
        </div>
        <div className="w-1/2">
          <Swiper
            ref={swiperRef}
            spaceBetween={3}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {sliderImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Imagen ${index + 1}`} className="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TwoPartComponent;
