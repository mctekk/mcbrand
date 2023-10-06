import Header from "@/components/organism/header";
import Hero from "@/components/organism/sections/home/hero";
import CompletionTools from "@/components/organism/sections/home/completionTools";
import ImageChanger from "@/components/organism/sections/home/iteraction";
import { Automated } from "@/components/organism/sections/home/automated";
import CompletionProcess from "@/components/organism/sections/home/completionProcess";
import { InstantChanges } from "@/components/organism/sections/home/instantChanges";
import { WhySalesAssistSalesProcess } from "@/components/organism/sections/home/whySalesAssistSales";
import { actionsData } from "@/model/api/image-data/data";
import { industriesData } from "@/model/api/sales-data/data";


export default function Home() {
  return (
    <main >
      <Header/>
      <Hero/>
      <CompletionTools/>
      <ImageChanger data={actionsData}/>
      <Automated></Automated>
      <CompletionProcess/>
      <InstantChanges/>
      <WhySalesAssistSalesProcess data={industriesData} />
    </main>
  )
}
