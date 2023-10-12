"use client";
import React from "react";
import { Section } from "@/components/atoms/section";
import { translate } from "@/locales";
import Dropdown from "@/components/atoms/dropdown";
import ListButtons from "@/components/atoms/list-buttons";

interface ImageData {
  url: string;
  desc: string;
  name: string;
  title: string;
}
export default function ImageChanger({ data }: { data: ImageData[] }) {
  return (
    <div className="section bg-zinc-800 text-white" id="actions">
      <Section>
        <div className="xl:ml-64 mb-10">
          <h1 className="mb-4">{translate("home.iteraction.title")}</h1>
          <h4 className="text-white-normal">
            {translate("home.iteraction.desc")}
          </h4>
        </div>
        <Dropdown data={data}></Dropdown>
        <div>
          <ListButtons data={data}></ListButtons>
        </div>
      </Section>
    </div>
  );
}
