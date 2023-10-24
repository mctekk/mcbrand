import React, { ReactNode } from "react";
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


const PAGE_SECTIONS_HOME: Record<string, ReactNode[]> = {
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

 anotherpage: [],
};

function createPageHome(): ReactNode[] {
 const type = process.env.PAGE_TYPE || "";
 return PAGE_SECTIONS_HOME[type] || [];
}

function usePageBuilder() {
 function generatePage(): ReactNode[] {
    return createPageHome();
 }

 return {
    generatePage,
 };
}

function Home() {
 const { generatePage } = usePageBuilder();
 return (
    <>
      {generatePage().map((section, index) => (
        <div key={index}>{section}</div>
      ))}
    </>
 );
}

export default Home;