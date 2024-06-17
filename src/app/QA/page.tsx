'use client'
import ContactFormCv from "@/components/atoms/form-cv";
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
        parrafo="We are seeking a detail-oriented Quality Assurance Specialist to ensure the high quality and reliability of our software products. The ideal candidate will have experience in designing and executing comprehensive testing plans, both manually and through automation, to identify defects and guarantee software functionality. You will collaborate closely with developers, product owners, and other stakeholders to ensure efficient resolution of issues."
        titulo="Quality Assurance Specialist"
      ></CasesHero>
      <Tags
      
        datos={[
          { titulo: "Type:", descripcion: "Remote Contractor - Full Time"   },
          { titulo: "Level ", descripcion: "Mid-Senior"  },
          { titulo: "Location", descripcion: "Dominican Republic"},
        ]}
      ></Tags>
        <GoalsList
        title="Key Responsibilities:"
        goals={[
          { id: 1, description: "Design and develop detailed test plans, test cases, and test scripts based on project requirements." },
          { id: 2, description: "Perform manual and/or automated testing to identify defects and ensure software functionality." },
          { id: 3, description: "Document and report software issues found during testing, including reproduction steps, screenshots, and detailed logs." },
          { id: 4, description: "Work closely with developers, product owners, and other stakeholders to ensure defects are understood and resolved efficiently." },
          { id: 5, description: "Develop and maintain automated test scripts to enhance testing efficiency and coverage." },
          { id: 6, description: "Participate in code reviews to ensure quality best practices are followed during development." },
          { id: 7, description: "Monitor test results and prepare quality reports and metrics for management." },
        ]}
      />
      <GoalsList
        title="Qualifications:"
        goals={[
          { id: 1, description: "Degree in Computer Science, Software Engineering, or a related field." },
          { id: 2, description: "Minimum of 2 years of experience in software quality assurance." },
          { id: 3, description: "Knowledge of test and defect management tools (e.g., JIRA, TestRail)." },
          { id: 4, description: "Experience with test automation tools (e.g., Selenium, Appium)." },
          { id: 5, description: "Familiarity with agile development methodologies and agile testing." },
          { id: 6, description: "Familiarity with CI/CD tools." },
          { id: 7, description: "Analytical skills and attention to detail." },
          { id: 8, description: "Effective communication skills and problem-solving abilities." },
          { id: 9, description: "Ability to work in a team and collaborate with other departments." },
        ]}
      />
      <GoalsList
        title="Benefits:"
        goals={[
          { id: 1, description: "Competitive salary and performance bonuses." },
          { id: 2, description: "Flexible working hours and remote work options." },
          { id: 3, description: "Professional development opportunities and continuous learning." },
          { id: 4, description: "A collaborative and inclusive work environment." },
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
