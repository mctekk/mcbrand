
import { usePageBuilder } from "@/model/interactions/use-page-builder";

import Home from "@/components/organism/parts/salesassist/home";
import { ReactNode } from "react";
import McHome from "@/components/organism/parts/mctekk/home";


const PAGE_SECTIONS_HOME: Record<string, ReactNode> = {
 salesassist: <Home />,

 mctekk: [<McHome/>],
};
export default function Page() {
  const {generatePage} = usePageBuilder()
  return generatePage(PAGE_SECTIONS_HOME)
}
