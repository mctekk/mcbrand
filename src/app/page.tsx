import Header from "@/components/organism/header";
import Hero from "@/components/organism/sections/home/hero";
import CompletionTools from "@/components/organism/sections/home/completionTools";
import ImageChanger from "@/components/organism/sections/home/iteraction";
import { data } from "@/data/iteraction-data/data";
import { Automated } from "@/components/organism/sections/home/automated";
import { CompletionProcess } from "@/components/organism/sections/home/completionProcess";


export default function Home() {
  return (
    <main >
      <Header/>
      <Hero/>
      <CompletionTools/>
      <ImageChanger data={data}/>
      <Automated></Automated>
      <CompletionProcess></CompletionProcess>
    </main>
  )
}
