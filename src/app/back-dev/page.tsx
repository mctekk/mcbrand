"use client";
import ContactForm from "@/components/atoms/form-cv";
import JobCard from "@/components/atoms/job-card";
import McMenu from "@/components/molecules/mc-menu";
import Header from "@/components/organism/header";
import GoalsList from "@/components/organism/sections/case-goals";
import CardList from "@/components/organism/sections/cases";
import CasesHero from "@/components/organism/sections/cases-hero";

import CaseInfo from "@/components/organism/sections/cases-info";
import Tags from "@/components/organism/sections/cases-tag";
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
      <CasesHero
        parrafo="We are seeking a skilled Backend Developer to join our team and contribute to the development of robust, scalable, and secure backend services. The ideal candidate will have experience in building and maintaining backend architectures, databases, and APIs. You will work closely with our frontend development team to ensure seamless integration and optimal performance of our applications."
        titulo=" BackendEnd Developer"
      ></CasesHero>
      <Tags
        datos={[
          { titulo: "Type:", descripcion: "Remote Contractor - Full Time" , apply: true },
          { titulo: "Level ", descripcion: "Mid-Senior", },
          { titulo: "Language ", descripcion: "PHP" },
          { titulo: "Location", descripcion: "Dominican Republic" },
        ]}
      ></Tags>
      <GoalsList
        title="Key Responsibilities:"
        goals={[
          {
            id: 8,
            description:
              "Develop the architecture of backend services using languages like PHP or Python.",
          },
          {
            id: 9,
            description:
              "Design and implement scalable, robust, and secure backend architectures and APIs.",
          },
          {
            id: 10,
            description:
              "Create and manage databases, ensuring data integrity and security.",
          },
          {
            id: 11,
            description:
              "Optimize database queries and performance to improve system efficiency.",
          },
          {
            id: 12,
            description:
              "Collaborate with frontend developers to integrate services and APIs, ensuring smooth communication between developers.",
          },
          {
            id: 13,
            description:
              "Perform performance tests to identify and resolve issues or errors.",
          },
          {
            id: 14,
            description:
              "Write and maintain unit tests to ensure code quality.",
          },
          {
            id: 15,
            description:
              "Document the architecture, database schema, base code, APIs, and endpoints to facilitate maintenance and team collaboration.",
          },
          {
            id: 16,
            description:
              "Use version control tools (such as Git) to manage and track code changes.",
          },
        ]}
      />
      <GoalsList
        title="Qualifications:"
        goals={[
          {
            id: 17,
            description:
              "Technical degree or professional qualification in IT, Software Engineering, or a related field.",
          },
          {
            id: 18,
            description:
              "Minimum of two years of experience in backend development with knowledge of PHP or Python.",
          },
          {
            id: 19,
            description: "Experience with frameworks such as Laravel.",
          },
          {
            id: 20,
            description:
              "Experience in database management with databases like MySQL, Aurora.",
          },
          { id: 21, description: "Basic knowledge of server management." },
          { id: 22, description: "Proficiency with version control tools." },
          { id: 23, description: "Knowledge of GraphQL and RESTful APIs." },
          { id: 24, description: "Strong problem-solving skills." },
          {
            id: 25,
            description:
              "Ability to understand business requirements and translate them into technical requirements.",
          },
          {
            id: 26,
            description:
              "Ability to work collaboratively in an agile team environment.",
          },
        ]}
      />
      <GoalsList
        title="Preferred Qualifications (a plus):"
        goals={[
          {
            id: 28,
            description:
              "Experience with headless CMS and ecommerce platforms, particularly Shopify.",
          },
          {
            id: 29,
            description:
              "Knowledge of modern build tools and workflows (e.g., Webpack, Babel, npm).",
          },
          { id: 30, description: "Understanding of SEO best practices." },
        ]}
      ></GoalsList>
      <GoalsList
        title="Benefits:"
        goals={[
          { id: 1, description: "Competitive salary and performance bonuses." },
          {
            id: 2,
            description: "Flexible working hours and remote work options.",
          },
          {
            id: 3,
            description:
              "Professional development opportunities and continuous learning.",
          },
          {
            id: 4,
            description: "A collaborative and inclusive work environment.",
          },
          { id: 5, description: "Paid time off and company holidays." },
        ]}
      />
      <CaseInfo
        texto="Interested candidates are invited to submit their resume, portfolio, and a cover letter explaining why they are a great fit for this role through this form:"
        title="How to Apply:"
      />
      <Footer mctekk></Footer>
    </>
  );
}
