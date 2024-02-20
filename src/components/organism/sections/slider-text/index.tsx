"use client"
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Section } from '@/components/atoms/section';

interface TwoPartComponentProps {
  title: string;
  description: string;
  buttonText: string;
  sliderImages: string[];
}

function TwoPartComponent({ title, description, buttonText, sliderImages }: TwoPartComponentProps): JSX.Element {
  const swiperRef = useRef<any>(null);

  return (
    <section className='bg-sky-600'>
    <Section >
    <div className='bg-sky-600 mx-auto justify-center  '>
      <div className="flex flex-col xl:flex-row section justify-center mx-auto xl:w-10/12 ">
        <div className="xl:w-1/2 p-4 text-white">
          <h2 className="text-[36px] font-bold mb-4">{title}</h2>
          <p className="mb-4 text-[18px]">{description}</p>
          <button className="bg-blue-950  text-white font-bold py-2 px-4 rounded">
            {buttonText}
          </button>
        </div>
        <div className="xl:w-1/2 m-9 xl:m-0">
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
    </Section>
    </section>
  );
}

export default TwoPartComponent;
