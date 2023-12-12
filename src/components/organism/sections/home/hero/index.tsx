"use client";
import { Button } from "@/components/atoms/button/base";
import { Solid } from "@/components/atoms/button/solid";
import { GewaerEmailForm } from "@/components/atoms/gewaerForm";

import { Section } from "@/components/atoms/section";
import { EmailForm } from "@/components/atoms/wait-form";

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
  buttonColor?: string;
  button?: boolean;
  kanvas?: boolean;
  gewaer?:boolean
  id?: string;
  lowerI?:string
  lead?:boolean
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
  buttonColor = "bg-orange-500",
  button,
  kanvas,
  gewaer,
  id,
  lowerI,
  lead
}: Props) {
  return (
    <div
      className={`section ${className} mx-auto justify-center items-center ` }
      
      id={id}
    >
      <Section className="lg:mt-6 pl-0  flex  ">
        <div className="flex justify-center  flex-col gap-6  lg:w-fit mx-auto items-center xl:ml-4 2xl:ml-16 md:ml-14 lg:ml-0">
          <div className="flex flex-col pb-12 xl:w-[80%] w-full justify-center items-start ">
            <h1
              className={`${colorFonts} md:text-[3rem] lg:text-[4rem] lg:tracking-wide lg:mb-1.5  md:ml-0 lg:ml-0 w-fit ml-3 `}
            >
              {upperMessage}
            </h1>
            <div className="flex flex-col lg:flex-row lg:w-fit  md:gap-4 lg:tracking-wide  ">
              <h1
                className={`${colorWords} md:text-[3rem] lg:text-[4rem] 2xl:text-[4.5rem]  font-normal  md:ml-0 lg:ml-0 whitespace-nowrap text-[1.80rem] ml-3`}
              >
                {lowerMessage}
              </h1>
              <div className="overflow-hidden gap-6 flex flex-col h-[50px] md:h-[90px] lg:h-[99px] slices  ">
                <h1
                  className={`${colorWords}  md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem]  slice ml-3 md:ml-0 lg:ml-0 lg:mt-2`}
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
            <h1 className={`${colorWords}  md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem]  slice ml-3 md:ml-0 lg:ml-0 lg:mt-2`}>{lowerI}</h1>
          </div>

          <div className="xl:w-3/4  md:mr-28 xl:ml-9">
            <h4
              className={`${colorDesc} md:text-[1.50rem] ml-5 md:ml-0 lg:ml-0 mb-5`}
            >
              {messageDesc}
              <span className="font-bold underline underline-offset-2 decoration-orange-500">
                {highligh}
              </span>{" "}
              {messageEnd}
            </h4>
            {button && (
            <a
              href={buttonLink}
              target="_blank"
              rel="noreferrer"
              className="w-fit"
            >
              <Solid
                className={`${buttonColor} text-[1.063rem] font-semibold  ml-5 md:ml-0 lg:ml-0 w-fit h-15 rounded-none `}
              >
                {buttonInfo}
              </Solid>
            </a>
          )}
          </div>
          
          {kanvas && (
            <div className=" mx-auto xl:ml-28 lg:ml-0 ml-0 2xl:ml-36 md:ml-2 ">
              {" "}
              <h4
                className={`${colorDesc} md:text-[1.50rem] ml-5 md:ml-0 lg:ml-0 font-semibold`}
              >
                Join our waitlist for our open beta release:
              </h4>{" "}
              <div className="ml-5 md:ml-0">
                {" "}
                <EmailForm />{" "}
              </div>
            </div>
          )}
           {gewaer && (
            <div className=" mx-auto xl:ml-28 lg:ml-0 ml-0 2xl:ml-36 md:ml-2 ">
              {" "}
              <h4
                className={`${colorDesc} md:text-[1.50rem] ml-5 md:ml-0 lg:ml-0 font-semibold`}
              >
                Subscribe to get product updates:
              </h4>{" "}
              <div className="ml-5 md:ml-0">
                {" "}
                <GewaerEmailForm />{" "}
              </div>
            </div>
          )}
         
        </div>
      </Section>
    </div>
  );
}
