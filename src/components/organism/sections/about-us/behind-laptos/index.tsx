import { mcAboutTeamData } from "@/model/api/about-us-team/data";
import React from "react";
import { AboutUsTeam } from "../team-members";

type Props = {};

export default function Behind({}: Props) {
  return (
    <div >
      <div className="flex flex-col mx-auto justify-center items-center bg-white section">
        <h1 className="text-orange-300">Behind the laptops</h1>
        <p className="mt-4 text-gray-500 ">The founding team’s principles revolve around providing an atmosphere in which our team is able to work on things that we are passionate about and make us happy.</p>
      </div>
      <div > <AboutUsTeam data={mcAboutTeamData} bgColor="bg-white " mctekk ></AboutUsTeam>,</div>
    </div>
  );
}
