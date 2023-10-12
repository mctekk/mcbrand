"use client";
import { IconBox } from "@/components/atoms/icon-box";
import { Insight } from "@/components/atoms/insight";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { DashedAnimation } from "@/components/atoms/animations/animatedTriangle";
import { motion } from "framer-motion";
import { Section } from "@/components/atoms/section";
import { useResponsive } from "@/model/interactions/use-responsive/useResponsive";
import { BenefitsSection } from "@/model/types";

export const fade = {
  start: {
    opacity: 0,
  },
  stop: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "linear",
    },
  },
};

interface BenefitsProps {
  data: BenefitsSection;
}

let timer: NodeJS.Timer | any;

export function Benefits({ data }: BenefitsProps) {
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const currentCard = useRef(0);
  const currentStatus = useRef<"one" | "two" | "tree" | "idle">("idle");
  const [progressLeft, setProgress] = useState(1);

  function startProgress() {
    clearInterval(timer);

    let interval = 100;

    timer = setInterval(() => {
      interval--;

      if (interval >= 0) {
        setProgress(interval);
        return;
      }

      clearInterval(timer);
      interval = 100;
    }, 100);
  }
  const [ref, inView] = useInView({ initialInView: true });

  useEffect(() => {
    if (inView) {
      currentCard.current = 0;
      startProgress();
    } else {
      currentCard.current = 0;
    }
  }, [inView]);

  useEffect(() => {
    if (progressLeft === 0) {
      startProgress();
      if (currentCard.current >= 2) {
        currentCard.current = 0;
      } else {
        currentCard.current = currentCard.current + 1;
      }
    }
  }, [currentCard, progressLeft]);

  function clickOnIcon(card: number, startAt: number) {
    return () => {
      currentCard.current = card;
      startProgress();
    };
  }

  const isActive = (at: number) => currentCard.current === at;

  return (
    <section ref={ref} className="section bg-zinc-800">
      <Section>
        <div className="container xl:ml-60 text-white px-4 md:px-0  w-fit ">
          <h1 className="mb-4">{data.title}</h1>
        </div>
        <div className="text-white container mx-auto flex-grow flex gap-6 md:gap-2 flex-col md:flex-row md:px-12">
          <div className="md:w-1/2 w-full md:h-full  pt-12 relative flex items-center justify-center">
            <div className="flex-col gap-6 md:gap-0 items-center justify-center flex max-w-sm relative w-full">
              <DashedAnimation active={currentStatus.current} />
              <div className="flex items-center h-fit w-full justify-center md:px-16 md:justify-start">
                <IconBox
                  text="Business"
                  icon="/images/Business_Icon.svg"
                  isActive={isActive(0)}
                  onClick={clickOnIcon(0, 1)}
                  progress={progressLeft}
                />
              </div>

              <div className="flex items-center h-fit w-full justify-between px-12 md:justify-end">
                <IconBox
                  text="Salespeople"
                  icon="/images/SA_Sales_Icon.svg"
                  isActive={isActive(1)}
                  onClick={clickOnIcon(1, 168)}
                  className="order-2 md:order-1"
                  progress={progressLeft}
                />

                {isTablet ||
                  isDesktop ||
                  (isMobile && (
                    <IconBox
                      text="Customer"
                      icon="/images/SA_Customer_Icon.svg"
                      isActive={isActive(2)}
                      onClick={clickOnIcon(2, 373)}
                      progress={progressLeft}
                    />
                  ))}
              </div>
              {(isDesktop || isTablet) && (
                <div className="w-full flex items-center  ">
                  <IconBox
                    text="Customer"
                    icon="/images/SA_Customer_Icon.svg"
                    isActive={isActive(2)}
                    onClick={clickOnIcon(2, 373)}
                    progress={progressLeft}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="md:w-1/2  flex-col flex gap-12 md:h-[30rem] mt-12 ">
            {data.benefits[currentCard.current]?.bullet_points.map((point) => {
              return (
                <motion.div
                  key={point.title}
                  initial="start"
                  animate="stop"
                  variants={fade}
                >
                  <Insight text={point.title} isActive>
                    {point.desc}
                  </Insight>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>
    </section>
  );
}
