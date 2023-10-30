"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Section } from "@/components/atoms/section";
import { ShowCase, Options } from "@/model/types";
import "swiper/css";
import { useSlide } from "@/model/interactions/use-slide";
import StepButton from "@/components/atoms/step-button";

interface WhySalesAssistSimplifySalesSection {
  color: string
  background: string
  data: {
    title: string;
    desc: string;
    options: string[];
    show_case: ShowCase[];
  };
}

export function Slider({
  data,
  background,
  color
}: WhySalesAssistSimplifySalesSection) {
  const { ref, clickOnCard, currentSwiper, progressLeft, currentStep } =
    useSlide();

  const handleSlideChange = (ev: { activeIndex: number }) => {
    if (ev.activeIndex === data.show_case.length + 1) {
      clickOnCard(0)();
    } else {
      clickOnCard(ev.activeIndex)();
    }
  };

  return (
  <section className={`overflow-hidden section ${background}  `}>
      <Section className="container mx-auto text-white flex flex-col gap-6 md:gap-12 2xl:ml-80  ">
        <div className="2xl:w-3/4">
          <h1 className="mb-4">{data.title}</h1>
          <h4>{data.desc}</h4>
        </div>
        <div className="flex-grow gap-6 md:gap-12 flex flex-col 2xl:w-3/4">
          <StepButton
          color={color}
            options={data.options}
            clickOnCard={clickOnCard}
            currentStep={currentStep}
            progressLeft={progressLeft}
          ></StepButton>
          <div ref={ref} className="flex items-center">
            <Swiper
              slidesPerView={1}
              speed={600}
              onSwiper={(sw) => (currentSwiper.current = sw)}
              onSlideChange={handleSlideChange}
            >
              {data.show_case.map((data, index) => (
                <SwiperSlide key={data.url}>
                  <div
                    key={data.url}
                    className="w-full flex items-center justify-center flex-col md:flex-row gap-4 lg:gap-6"
                  >
                    <div className="md:hidden block w-[80%]">
                      {index + 1}. {data.option}
                    </div>

                    <div className="w-[80%] md:w-full md:px-6 relative h-[15rem] sm:h-[18rem] md:h-[20rem] lg:h-[29rem] rounded-xl md:rounded-3xl overflow-hidden flex items-center">
                      <Image
                        src={data.url}
                        alt="example"
                        width={500}
                        height={300}
                      />
                    </div>

                    <div className="text-white-normal w-[80%]">
                      <h2 className="mb-2">{data.title}</h2>
                      <p className="text-sm">{data.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Section>
    </section>
  );
}
