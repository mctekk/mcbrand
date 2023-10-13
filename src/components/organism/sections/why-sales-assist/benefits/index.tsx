"use client";

import { Insight } from "@/components/atoms/insight";
import { motion } from "framer-motion";
import { Section } from "@/components/atoms/section";
import { BenefitsSection } from "@/model/types";
import { useProgressWithInView } from "@/model/interactions/use-progress-in-view";
import BenefitsTriangle from "@/components/atoms/benefits-triangle";

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

export function Benefits({ data }: BenefitsProps) {
  const { ref, currentCard } = useProgressWithInView();

  return (
    <section ref={ref} className="section bg-zinc-800">
      <Section>
        <div className="container xl:ml-60 text-white px-4 md:px-0  w-fit ">
          <h1 className="mb-4">{data.title}</h1>
        </div>
        <div className="text-white container mx-auto flex-grow flex gap-6 md:gap-2 flex-col md:flex-row md:px-12">
          <BenefitsTriangle></BenefitsTriangle>
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
