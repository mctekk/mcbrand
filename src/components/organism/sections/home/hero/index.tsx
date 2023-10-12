"use client";
import { Button } from "@/components/atoms/button/base";

import { Section } from "@/components/atoms/section";
import { translate } from "@/locales";

import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div className="section" id="how-it-works">
        <Section className="lg:mt-6 pl-0  flex items-center justify-end">
          <div className="flex justify-center  flex-col gap-6  lg:w-[70rem] xl:w-[81rem] xl:ml-32  ">
            <div className="flex flex-col pb-12 ">
              <h1 className=" md:text-[3rem] lg:text-[4.5rem] lg:tracking-wide lg:mb-1.5 ml-5 md:ml-0 lg:ml-0">
                {translate("home.hero.upper_message")}
              </h1>
              <div className="flex flex-col lg:flex-row lg:w-fit  md:gap-4 lg:tracking-wide  ">
                <h1 className="md:text-[3rem] lg:text-[4.5rem] text-orange-500 font-normal ml-5 md:ml-0 lg:ml-0 whitespace-nowrap ">
                  {translate("home.hero.lower_message")}
                </h1>
                <div className="overflow-hidden gap-6 flex flex-col h-[50px] md:h-[90px] lg:h-[99px] slices  ">
                  <h1 className="text-orange-500 md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem]  slice ml-5 md:ml-0 lg:ml-0 lg:mt-5">
                    <Typewriter
                      words={Array.from(translate("home.modules"))}
                      loop={0}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </h1>
                </div>
              </div>
            </div>

            <div className="xl:w-3/4  md:mr-28">
              <h4 className="text-gray-500 md:text-[1.50rem] ml-5 md:ml-0 lg:ml-0">
                {translate("home.desc.message")}{" "}
                <span className="font-bold underline underline-offset-2 decoration-orange-500">
                  {translate("home.desc.highLight")}
                </span>{" "}
                {translate("home.desc.message_end")}
              </h4>
            </div>
            <a
              href="https://calendly.com/salesasssit/30min"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="text-[1.063rem] font-semibold bg-orange-500 ml-5 md:ml-0 lg:ml-0">
                {translate("home.button")}
              </Button>
            </a>
          </div>
        </Section>
      </div>

  );
}
