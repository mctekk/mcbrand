import ContactFormCv from "@/components/atoms/form-cv";
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
        parrafo="We are seeking a skilled Front End Developer with a passion for creating stunning, user-friendly web interfaces. The ideal candidate will have experience in building responsive and interactive websites and applications using modern front-end technologies. You will work closely with our design and back-end development teams to deliver seamless user experiences. "
        titulo="Front End Developer"
      ></CasesHero>
      <Tags
      
        datos={[
          { titulo: "Type:", descripcion: "Remote Contractor - Full Time" },
          { titulo: "Level ", descripcion: "Mid-Senior"   },
          { titulo: "Location", descripcion: "Dominican Republic"},
        ]}
      ></Tags>
      <GoalsList
        title="Key Responsibilities:"
        goals={[
          {
            id: 1,
            description:
              "Develop and implement visual interfaces using NextJS, JavaScript, React.js.",
          },
          {
            id: 2,
            description:
              "Develop and maintain responsive web applications using HTML, CSS, and JavaScript.",
          },
          {
            id: 3,
            description:
              "Optimize visual interfaces for fast loading and efficient performance, ensuring code scalability.",
          },
          {
            id: 4,
            description:
              "Implement and maintain front-end frameworks and libraries, such as React, Vue.js, or Angular.",
          },
          {
            id: 5,
            description:
              "Perform performance tests to identify and resolve issues or errors.",
          },
          {
            id: 6,
            description:
              "Write and maintain unit tests to ensure code quality.",
          },
          { id: 7, description: "Maintain and improve existing code." },
          {
            id: 8,
            description:
              "Collaborate with designers to translate UI/UX wireframes and mockups into functional, high-performance code.",
          },
          {
            id: 9,
            description:
              "Collaborate with backend developers to integrate services and APIs, ensuring smooth communication between developers.",
          },
          {
            id: 10,
            description:
              "Document code and development processes to facilitate maintenance and team collaboration ",
          },
          {
            id: 11,
            description:
              "Use version control tools (such as Git) to manage and track code changes.",
          },
          {
            id: 12,
            description:
              "Optimize applications for maximum speed and scalability.",
          },
          {
            id: 13,
            description: "Ensure the technical feasibility of UI/UX designs.",
          },
          {
            id: 14,
            description:
              "Conduct code reviews and provide constructive feedback to peers.",
          },
          {
            id: 15,
            description:
              "Stay up-to-date with the latest industry trends and best practices in front-end development.",
          },
          {
            id: 16,
            description:
              "Debug and resolve cross-browser compatibility issues.",
          },
          {
            id: 17,
            description:
              "Work closely with back-end developers to integrate APIs and ensure seamless data flow.",
          },
        ]}
      />{" "}
      
      <GoalsList
        title="Qualifications:"
        goals={[
          {
            id: 1,
            description:
              "Proven experience as a Front End Developer or similar role.",
          },
          {
            id: 2,
            description:
              " Proficiency in HTML, CSS, JavaScript, and experience with front-end frameworks/libraries such as React, NextJS, Vue.js, or Angular.",
          },
          {
            id: 3,
            description:
              "Experience in developing and implementing visual interfaces using NextJS, JavaScript, and React.js.",
          },
          {
            id: 4,
            description:
              " Strong understanding of responsive design principles and mobile-first development.",
          },
          {
            id: 5,
            description:
              " Familiarity with performance testing to identify and resolve issues or errors.",
          },
          {
            id: 6,
            description:
              "Experience in writing and maintaining unit tests to ensure code quality.",
          },
          {
            id: 7,
            description: "Ability to maintain and improve existing code.",
          },
          {
            id: 8,
            description:
              "Ability to collaborate with designers to transform UI/UX wireframes and mockups into functional, high-performance code.",
          },
          {
            id: 9,
            description:
              "Strong collaboration skills to work with backend developers for integrating services and APIs.",
          },
          {
            id: 10,
            description:
              "Knowledge of version control systems (e.g., Git) for managing and tracking code changes.",
          },
          {
            id: 11,
            description:
              "Understanding of web performance optimization techniques.",
          },
          {
            id: 12,
            description:
              "Excellent problem-solving skills and attention to detail.",
          },
          {
            id: 13,
            description: "Strong communication and collaboration abilities.",
          },
          {
            id: 14,
            description:
              "Ability to work independently and manage multiple tasks simultaneously.",
          },
          {
            id: 15,
            description:
              "Knowledge of debugging and resolving cross-browser compatibility issues.",
          },
          {
            id: 16,
            description:
              "Familiarity with documenting code and development processes to facilitate maintenance and team collaboration.",
          },
          {
            id: 17,
            description:
              "Preferred experience with headless CMS and ecommerce platforms, particularly Shopify.",
          },
          { id: 18, description: "Knowledge of GraphQL and RESTful APIs." },
          { id: 19, description: "Understanding of SEO best practices." },
          {
            id: 20,
            description:
              "Familiarity with modern build tools and workflows (e.g., Webpack, Babel, npm).",
          },
        ]}
      />
      <GoalsList
        title="Preferred Qualifications (a plus):"
        goals={[
          {
            id: 1,
            description:
              "Experience with headless CMS and ecommerce platforms, particularly Shopify.",
          },
          { id: 2, description: "Knowledge of GraphQL and RESTful APIs." },
          { id: 3, description: "Understanding of SEO best practices." },
          {
            id: 4,
            description:
              "Familiarity with modern build tools and workflows (e.g., Webpack, Babel, npm).",
          },
        ]}
      />
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
    <ContactFormCv></ContactFormCv>
      <Footer mctekk></Footer>
    </>
  );
}
