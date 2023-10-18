"use client";
import { motion } from "framer-motion";

import { AnimatedCard } from "@/components/atoms/animations/animatedCard";
import { Card } from "@/components/atoms/card";
import { InteractAnimation } from "@/components/atoms/animations/HowitWorksAnimations/Interact";
import { CustomerAnimation } from "@/components/atoms/animations/HowitWorksAnimations/Customer";
import { SalesAnimation } from "@/components/atoms/animations/HowitWorksAnimations/Sales";
import { Section } from "@/components/atoms/section";
import { HowItWorksSection } from "@/model/types";
import { useProgressWithInView } from "@/model/interactions/use-progress-in-view";



interface HowProps {
  data: HowItWorksSection;
}
export function HowItWorks({ data }: HowProps) {


  const { progressLeft, ref, currentCard, clickOnCard, inView } =
    useProgressWithInView();

  return (
    <main ref={ref} className="section overflow-x-auto bg-white">
      <Section>
        <div className="px-4 md:px-0 mb-2 xl:ml-60">
          <h1 className="mb-4 text-black">{data.title}</h1>
          <h4 className="text-gray-500">{data.desc}</h4>
        </div>

        <div className="lg:flex flex-col lg:flex-row py-6 gap-12 xl:ml-60 hidden">
          <div className="flex flex-col gap-6 w-fit">
            {data.actions.map((data, index) => {
              return (
                <motion.div
                  initial={{ x: -500, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: data.delay,
                  }}
                  viewport={{ once: true }}
                  key={index}
                >
                  <AnimatedCard
                    isActive={currentCard.current === index}
                    key={index}
                    progress={progressLeft}
                    title={data.title}
                    sub={data.desc}
                    code={data.code}
                    onClick={clickOnCard(index)}
                  />
                </motion.div>
              );
            })}
          </div>

          <div className="w-fit flex items-center justify-start">
            <div className="bg-gray-100 h-full md:w-[27rem] max-w-md mx-auto rounded-lg flex items-center justify-start p-4">
              {inView && currentCard.current === 0 && <InteractAnimation />}
              {inView && currentCard.current === 1 && <CustomerAnimation />}
              {inView && currentCard.current === 2 && <SalesAnimation />}
            </div>
          </div>
        </div>

        <div className="relative overflow-y-hidden overflow-x-auto flex px-4 lg:hidden">
          {data.actions.map((data, index) => {
            return (
              <Card
                kind={data.kind}
                key={index}
                title={data.title}
                sub={data.desc}
                className="shadow"
              >
                {
                  [
                    <InteractAnimation key="InteractAnimation" />,
                    <CustomerAnimation key="CustomerAnimation" />,
                    <SalesAnimation key="SalesAnimation" />,
                  ][index]
                }
              </Card>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
