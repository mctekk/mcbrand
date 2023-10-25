
import { usePageBuilder } from "@/model/interactions/use-page-builder";

import { ReactNode } from "react";
import McHome from "@/components/organism/parts/mctekk/home";
import Header from "@/components/organism/header";
import Hero from "@/components/organism/sections/home/hero";
import CompletionTools from "@/components/organism/sections/home/completionTools";
import ImageChanger from "@/components/organism/sections/home/iteraction";
import { actionsData } from "@/model/api/image-data/data";
import { Automated } from "@/components/organism/sections/home/automated";
import CompletionProcess from "@/components/organism/sections/home/completionProcess";
import { InstantChanges } from "@/components/organism/sections/home/instantChanges";
import { WhySalesAssistSalesProcess } from "@/components/organism/sections/home/whySalesAssistSales";
import Sales from "@/components/organism/sections/home/sales";
import { Footer } from "@/components/organism/sections/footer";
import { industriesData } from "@/model/api/sales-data/data";


const PAGE_SECTIONS_HOME: Record<string, ReactNode> = {
 salesassist: [
  <Header  />,
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

 mctekk: [<McHome/>],
};
export default function Page() {
  const {generatePage} = usePageBuilder()
  return generatePage(PAGE_SECTIONS_HOME)
}
