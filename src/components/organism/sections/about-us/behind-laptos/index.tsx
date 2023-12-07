import { mcAboutTeamData } from "@/model/api/about-us-team/data";
import React from "react";
import { AboutUsTeam } from "../team-members";
import { translate } from "@/locales";

type Props = {};

export default function Behind({}: Props) {
  return (
    <div >
      <div className="flex flex-col mx-auto justify-center items-center bg-white section">
        <h1 className="text-mctekk-100">{translate("behind.title")}</h1>
        <p className="mt-4 text-gray-500 ">{translate("behind.subTitle")}</p>
        <p className=" text-gray-500 ">{translate("behind.desc")}</p>
      </div>
      <div > <AboutUsTeam data={mcAboutTeamData} bgColor="bg-white " mctekk ></AboutUsTeam>,</div>
    </div>
  );
}
