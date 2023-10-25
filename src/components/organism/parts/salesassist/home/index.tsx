'use client';

import { actionsData } from "@/model/api/image-data/data";
import { industriesData } from "@/model/api/sales-data/data";
import Header from "../../../header";
import { Footer } from "../../../sections/footer";
import { Automated } from "../../../sections/home/automated";
import CompletionProcess from "../../../sections/home/completionProcess";
import CompletionTools from "../../../sections/home/completionTools";
import Hero from "../../../sections/home/hero";
import { InstantChanges } from "../../../sections/home/instantChanges";
import ImageChanger from "../../../sections/home/iteraction";
import Sales from "../../../sections/home/sales";
import { WhySalesAssistSalesProcess } from "../../../sections/home/whySalesAssistSales";
import { translate } from "@/locales";


const menuItems = [
  {
    text: translate("navbar.section.whySalesAssist"),
    link: "/why-sales-assist",
  },
  { text: translate("navbar.section.pricing"), link: "/pricing" },
  { text: translate("navbar.section.aboutUs"), link: "/about-us" },
];
const externalLinks = [
  {
    text: translate("navbar.section.login"),
    link: "https://app.salesassist.io/",
    isExternal: true,
    className: "hidden lg:flex",
  },
  {
    text: translate("navbar.section.bookDemo"),
    link: "https://calendly.com/salesasssit/30min",
    isExternal: true,
    className: "lg:bg-orange-500 lg:text-white bg-white ",
  },
];

export default function Home() {
  return (
    <>
      <Header  />
      <Hero />
      <CompletionTools />
      <ImageChanger data={actionsData} />
      <Automated />
      <CompletionProcess />
      <InstantChanges />
      <WhySalesAssistSalesProcess data={industriesData} />
      <Sales />
      <Footer />
    </>
  );
}