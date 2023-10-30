"use client";
import { Button } from "@/components/atoms/button/base";

import { Section } from "@/components/atoms/section";

import { Typewriter } from "react-simple-typewriter";

interface Props {
  upperMessage?: string;
  lowerMessage?: string;
  words: string[];
  messageDesc: string;
  highligh?: string;
  messageEnd: string;
  buttonInfo?: string;
  buttonLink?: string;
  className?: string;
  colorFonts?: string;
  colorWords?: string;
  colorDesc?: string;
  buttonColor?:string
  button?:boolean
}
export default function Hero({
  highligh,
  lowerMessage,
  messageDesc,
  messageEnd,
  upperMessage,
  words,
  buttonInfo,
  buttonLink,
  className,
  colorFonts,
  colorWords = "text-orange-500",
  colorDesc = "text-gray-500",
  buttonColor='bg-orange-500',
  button

}: Props) {
  return (
    <div className={`section ${className} `} id="how-it-works">
      <Section className="lg:mt-6 pl-0  flex items-center justify-start ">
        <div className="flex justify-center  flex-col gap-6  lg:w-fit xl:w-fit xl:ml-64  ">
          <div className="flex flex-col pb-12 w-fit">
            <h1
              className={`${colorFonts} md:text-[3rem] lg:text-[4.5rem] lg:tracking-wide lg:mb-1.5  md:ml-0 lg:ml-0 w-fit `}
            >
              {upperMessage}
            </h1>
            <div className="flex flex-col lg:flex-row lg:w-fit  md:gap-4 lg:tracking-wide  ">
              <h1
                className={`${colorWords} md:text-[3rem] lg:text-[4.5rem]  font-normal  md:ml-0 lg:ml-0 whitespace-nowrap text-[1.80rem] ml-3`}
              >
                {lowerMessage}
              </h1>
              <div className="overflow-hidden gap-6 flex flex-col h-[50px] md:h-[90px] lg:h-[99px] slices  ">
                <h1
                  className={`${colorWords}  md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem]  slice ml-5 md:ml-0 lg:ml-0 lg:mt-5`}
                >
                  <Typewriter
                    words={words}
                    loop={0}
                    cursor
                    cursorStyle=""
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
              </div>
            </div>
          </div>

          <div className="xl:w-3/4  md:mr-28">
            <h4
              className={`${colorDesc} md:text-[1.50rem] ml-5 md:ml-0 lg:ml-0`}
            >
              {messageDesc}
              <span className="font-bold underline underline-offset-2 decoration-orange-500">
                {highligh}
              </span>{" "}
              {messageEnd}
            </h4>
          </div>
          {button && <a href={buttonLink} target="_blank" rel="noreferrer" className="w-fit">
            <Button className={`${buttonColor} text-[1.063rem] font-semibold  ml-5 md:ml-0 lg:ml-0 w-fit h-full`}>
              {buttonInfo}
            </Button>
          </a>}
          
        </div>
      </Section>
    </div>
  );
}
