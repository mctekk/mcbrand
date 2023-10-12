import React from "react";
import Header from "@/components/organism/header";
import { WhySalesAssistHero } from "@/components/organism/sections/why-sales-assist/why-hero";
import { dataHero } from "@/model/api/why-sales-hero-data/data";
import { Benefits } from "@/components/organism/sections/why-sales-assist/benefits";
const data1 = {
  title: "Here's How Everyone Involved Benefits",
  benefits: [
    {
      kind: "Business",
      bullet_points: [
        {
          title: "More sales",
          desc: "Simplify the sales process so your sales team has more time to do what matters most — sell more.",
        },
        {
          title: "Improve NPS",
          desc: "Provide a frictionless and convenient experience to your customers by completing the sale straight from their phones.",
        },
        {
          title: "Save money",
          desc: "Replace the many one-off applications and systems you currently use to complete the sale with off-the-shelf or custom Sales Actions.",
        },
      ],
    },
    {
      kind: "Salespeople",
      bullet_points: [
        {
          title: "Complete sales faster",
          desc: "Make your salespeople super efficient by simplifying the collection and sharing of information. Handling customer interactions has never been easier!",
        },
        {
          title: "Less mundane work",
          desc: "No more chasing customers for emails, scans, and papers, or switching between multiple systems to manually enter information to complete the sale.",
        },
        {
          title: "Reduce errors",
          desc: "Reduce unnecessary errors with e-Forms and e-Signatures that are smart, fully integrated with all of your existing systems.",
        },
      ],
    },
    {
      kind: "Customer",
      bullet_points: [
        {
          title: "Reduce friction",
          desc: "Eliminate the emails, scans, multiple portals and all the back and forth by completing the sale straight from customers’ mobile device",
        },
        {
          title: "Save time",
          desc: "Slash time by allowing customers to complete everything on their mobile device, from e-Signatures to uploading documents to e-Forms.",
        },
        {
          title: "Delight customers",
          desc: "Create happy and returning customers by providing a frictionless and personalized sales experience.",
        },
      ],
    },
  ],
};

export default function page() {
  return (
    <main>
      <Header></Header>
      <WhySalesAssistHero data={dataHero}></WhySalesAssistHero>
      <Benefits data={data1}></Benefits>
    </main>
  );
}
