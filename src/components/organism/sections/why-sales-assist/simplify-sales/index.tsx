"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Section } from "@/components/atoms/section";
import { ShowCase, Options } from "@/model/types";
import "swiper/css";
import { useSlide } from "@/model/interactions/use-slide";
import StepButton from "@/components/atoms/step-button";

interface WhySalesAssistSimplifySalesSection {
  data: {
    title: string;
    desc: string;
    options: Options;
    show_case: ShowCase[];
  };
}

export function WhySalesAssistSimplifySales({
  data,
}: WhySalesAssistSimplifySalesSection) {
  const { ref, clickOnCard, currentSwiper, progressLeft, currentStep } =
    useSlide();

  return (
    <section className="overflow-hidden section bg-zinc-800">
      <Section className="container mx-auto text-white flex flex-col gap-6 md:gap-12 2xl:ml-80 ">
        <div className="2xl:w-3/4">
          <h1 className="mb-4">{data.title}</h1>
          <h4 >{data.desc}</h4>
        </div>
        <div className="flex-grow gap-6 md:gap-12 flex flex-col 2xl:w-3/4">
          <StepButton
            data={data}
            clickOnCard={clickOnCard}
            currentStep={currentStep}
            progressLeft={progressLeft}
          ></StepButton>
          <div ref={ref} className="flex items-center">
            <Swiper
              slidesPerView={1}
              speed={600}
              onSwiper={(sw) => (currentSwiper.current = sw)}
              onSlideChange={(ev) => {
                if (ev.activeIndex === data.show_case.length + 1) {
                  clickOnCard(0)();
                }
                clickOnCard(ev.activeIndex)();
              }}
            >
              {data.show_case.map((d, i) => (
                <SwiperSlide key={d.url}>
                  <div
                    key={d.url}
                    className="w-full flex items-center justify-center flex-col md:flex-row gap-4 lg:gap-6"
                  >
                    <div className="md:hidden block w-[80%]">
                      {i + 1}. {d.option}
                    </div>

                    <div className="w-[80%] md:w-full md:px-6 relative h-[15rem] sm:h-[18rem] md:h-[20rem] lg:h-[29rem] rounded-xl md:rounded-3xl overflow-hidden flex items-center">
                      <Image
                        src={d.url}
                        alt="example"
                        width={500}
                        height={300}
                      />
                    </div>

                    <div className="text-white-normal w-[80%]">
                      <h2 className="mb-2">{d.title}</h2>
                      <p className="text-sm">{d.desc}</p>
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
