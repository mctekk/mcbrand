import { usePageBuilder } from "@/model/interactions/use-page-builder";


import { ReactNode } from "react";

import Header from "@/components/organism/header";
import { Footer } from "@/components/organism/sections/footer";
import { Automated } from "@/components/organism/sections/home/automated";
import CompletionProcess from "@/components/organism/sections/home/completionProcess";
import CompletionTools from "@/components/organism/sections/home/completionTools";
import Hero from "@/components/organism/sections/home/hero";
import { InstantChanges } from "@/components/organism/sections/home/instantChanges";
import ImageChanger from "@/components/organism/sections/home/iteraction";
import Sales from "@/components/organism/sections/home/sales";
import { WhySalesAssistSalesProcess } from "@/components/organism/sections/home/whySalesAssistSales";
import { actionsData } from "@/model/api/image-data/data";
import { industriesData } from "@/model/api/sales-data/data";
import McHeader from "@/components/organism/mc-header";

const PAGE_SECTIONS_HOME: Record<string, ReactNode> = {
  salesassist: [
    <Header />,
    <Hero />,
    <CompletionTools />,
    <ImageChanger data={actionsData} />,
    <Automated />,
    <CompletionProcess />,
    <InstantChanges />,
    <WhySalesAssistSalesProcess data={industriesData} />,
    <Sales />,
    <Footer />,
  ],

  mctekk: [<McHeader />,],
};
export default function Page() {
  const { generatePage } = usePageBuilder();
  return generatePage(PAGE_SECTIONS_HOME);
}
