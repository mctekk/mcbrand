import React from "react";
import Header from "@/components/organism/header";
import { WhySalesAssistHero } from "@/components/organism/sections/why-sales-assist/why-hero";
import { dataHero } from "@/model/api/why-sales-hero-data/data";
import { Benefits } from "@/components/organism/sections/why-sales-assist/benefits";
import { dataBenefits } from "@/model/api/benefits-data/data";
import { HowItWorks } from "@/components/organism/sections/why-sales-assist/how-it-works";
import { howData } from "@/model/api/how-it-works-data/data";
import { Slider } from "@/components/organism/sections/why-sales-assist/simplify-sales";
import { Customers } from "@/components/organism/sections/why-sales-assist/customers";
import { InstantChanges } from "@/components/organism/sections/home/instantChanges";
import { WhySalesAssistCompletingSalesIsPainless } from "@/components/organism/sections/why-sales-assist/complete-sales-painless";
import { Footer } from "@/components/organism/sections/footer";
import { dataPainless } from "@/model/api/sales-painless/data";
import { dataSlide } from "@/model/api/simplify-sales";
import { GA } from "@/components/atoms/analitiycs";
import Menu from "@/components/molecules/menu";
import { columnsData, leadingData, ratesData } from "@/model/api/instant-changes/data";


export default function page() {
  return (
    <main>
      <Header
        menu={<Menu></Menu>}
        logo="/images/logo.png"
        iconColor="text-black"
      />
      ,
      <GA />
      <WhySalesAssistHero data={dataHero} />
      <Benefits data={dataBenefits} />
      <HowItWorks data={howData} />
      <Slider data={dataSlide} background="bg-zinc-800" color="bg-orange-500"/>
      <Customers></Customers>
      <InstantChanges columnsData={columnsData} leadingData={leadingData} ratesData={ratesData} title="Companies That Turn to SalesAssist See 3 Instant Changes" />
      <WhySalesAssistCompletingSalesIsPainless data={dataPainless} />
      <Footer kind="dark" />
    </main>
  );
}
