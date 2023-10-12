import React from "react";
import Header from "@/components/organism/header";
import { WhySalesAssistHero } from "@/components/organism/sections/why-sales-assist/why-hero";
import { dataHero } from "@/model/api/why-sales-hero-data/data";
import { Benefits } from "@/components/organism/sections/why-sales-assist/benefits";
import { dataBenefits } from "@/model/api/benefits-data/data";

export default function page() {
  return (
    <main>
      <Header></Header>
      <WhySalesAssistHero data={dataHero}></WhySalesAssistHero>
      <Benefits data={dataBenefits}></Benefits>
    </main>
  );
}
