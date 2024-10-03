import EmbedJobs from "@/components/molecules/jobs-embed";
import McMenu from "@/components/molecules/mc-menu";
import Header from "@/components/organism/header";
import { Footer } from "@/components/organism/sections/footer";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen bg-white">
        {/* Header */}
        <Header
          menu={<McMenu></McMenu>}
          className="bg-black "
          logo="/images/McLogo.svg"
          iconColor="text-white"
        />

        {/* Main Content */}
        <div className="flex-grow my-32">
          <EmbedJobs />
        </div>

        {/* Footer */}
        <Footer mctekk />
      </div>
    </>
  );
}
