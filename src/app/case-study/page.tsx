
import McMenu from "@/components/molecules/mc-menu";
import Header from "@/components/organism/header";
import CardList from "@/components/organism/sections/cases";
import { Footer } from "@/components/organism/sections/footer";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <>
      {" "}
      <Header
        menu={<McMenu></McMenu>}
        className="bg-black"
        logo="/images/McLogo.svg"
        iconColor="text-white"
      />
      <CardList sectionTitle="Take a look to our cases"></CardList>
      <Footer mctekk></Footer>
    </>
  );
}
