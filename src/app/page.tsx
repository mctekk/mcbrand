import Header from "@/components/organism/header";
import { Hero } from "../components/organism/sections/home/hero";
import { CompletionTools } from "@/components/organism/sections/home/completionTools";

export default function Home() {
  return (
    <main >
      <Header/>
      <Hero/>
      <CompletionTools/>
    </main>
  )
}
