import React from "react";
import Header from "@/components/organism/header";
import { WhySalesAssistHero } from "@/components/organism/sections/why-sales-assist/why-hero";
import { dataHero } from "@/model/api/why-sales-hero-data/data";
import { Benefits } from "@/components/organism/sections/why-sales-assist/benefits";
import { dataBenefits } from "@/model/api/benefits-data/data";
import { HowItWorks } from "@/components/organism/sections/why-sales-assist/how-it-works";
import { howData } from "@/model/api/how-it-works-data/data";
import { WhySalesAssistSimplifySales } from "@/components/organism/sections/why-sales-assist/simplify-sales";
import { Customers } from "@/components/organism/sections/why-sales-assist/customers";
import { InstantChanges } from "@/components/organism/sections/home/instantChanges";
import { WhySalesAssistCompletingSalesIsPainless } from "@/components/organism/sections/why-sales-assist/complete-sales-painless";
import { Footer } from "@/components/organism/sections/footer";
import { dataPainless } from "@/model/api/sales-painless/data";
import { dataSlide } from "@/model/api/simplify-sales";
import { GA } from "@/components/atoms/analitiycs";
import { Menu } from "@headlessui/react";

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
      <WhySalesAssistSimplifySales data={dataSlide} />
      <Customers></Customers>
      <InstantChanges />
      <WhySalesAssistCompletingSalesIsPainless data={dataPainless} />
      <Footer kind="dark" />
    </main>
  );
}
