import React from "react";
import Header from "@/components/organism/header";
import { WhySalesAssistHero } from "@/components/organism/sections/why-sales-assist/why-hero";
import { dataHero } from "@/model/api/why-sales-hero-data/data";
import { Benefits } from "@/components/organism/sections/why-sales-assist/benefits";
import { dataBenefits } from "@/model/api/benefits-data/data";
import { HowItWorks } from "@/components/organism/sections/why-sales-assist/how-it-works";
import { howData } from "@/model/api/how-it-works-data/data";
export default function page() {
  return (
    <main>
      <Header></Header>
      <WhySalesAssistHero data={dataHero}></WhySalesAssistHero>
      <Benefits data={dataBenefits}></Benefits>
      <HowItWorks data={howData}></HowItWorks>
    </main>
  );
}
