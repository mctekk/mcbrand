import JobCard from "@/components/atoms/job-card";
import Formulario from "@/components/atoms/job-form";
import McMenu from "@/components/molecules/mc-menu";
import Header from "@/components/organism/header";
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
      /><JobCard></JobCard>
      <Footer mctekk></Footer>
    </>
  );
}
