import React from "react";
import Header from "@/components/organism/header";
import { WhySalesAssistHero } from "@/components/organism/sections/why-sales-assist/why-hero";
import { dataHero } from "@/model/api/why-sales-hero-data/data";
import { Benefits } from "@/components/organism/sections/why-sales-assist/benefits";
import { dataBenefits } from "@/model/api/benefits-data/data";
import { HowItWorks } from "@/components/organism/sections/why-sales-assist/how-it-works";
import { howData } from "@/model/api/how-it-works-data/data";
import { WhySalesAssistSimplifySales } from "@/components/organism/sections/why-sales-assist/simplify-sales";


const data = {
  "title": "Simple to Manage by Leadership",
  "desc": "We make it extremely easy for management to assemble the ideal Completion Panel for their sales team. On our web portal managers can easily select customizable off-the-shelf Completion Tools, integrate their existing ones, or mix and match.",
  "options": {
    "select": "Select a Completion Tool template",
    "customize": "Customize your own",
    "add": "Add to your Completion Panel"
  },
  "show_case": [
    {
      "option": "Select a Completion Tool template",
      "url": "/images/ActionBuilder/Step1.png",
      "title": "Select off-the-shelf Completion Tools",
      "desc": "Choose off-the-shelf Completion Tool templates from our ever-growing Template Library."
    },{
      "option": "Select a Completion Tool template",
      "url": "/images/ActionBuilder/Step1.png",
      "title": "Select off-the-shelf Completion Tools",
      "desc": "Choose off-the-shelf Completion Tool templates from our ever-growing Template Library."
    }
  ],
  
  
}
export default function page() {
  return (
    <main>
      <Header></Header>
      <WhySalesAssistHero data={dataHero}></WhySalesAssistHero>
      <Benefits data={dataBenefits}></Benefits>
      <HowItWorks data={howData}></HowItWorks>
      <WhySalesAssistSimplifySales data={data}></WhySalesAssistSimplifySales>
    </main>
  );
}
