"use client";
import { Footer } from "@/components/organism/sections/footer";
import { PricingComparison } from "@/components/organism/sections/princing/comparison";
import { PricingHero } from "@/components/organism/sections/princing/princing-hero";
import { PricingPlans } from "@/components/organism/sections/princing/princing-plan";
import { PricingQuestions } from "@/components/organism/sections/princing/princing-questions";
import React, { useState } from "react";

export default function page() {
  const [isFull, setIsFull] = useState<boolean>(false);
  const handleIsFull = () => setIsFull(!isFull);
  return (
    <div>
      <PricingHero></PricingHero>
      <PricingPlans isClicked={isFull} onClick={handleIsFull}></PricingPlans>
      {isFull && <PricingComparison />}
      <PricingQuestions id="Q&A"></PricingQuestions>
      <Footer></Footer>
    </div>
  );
}
