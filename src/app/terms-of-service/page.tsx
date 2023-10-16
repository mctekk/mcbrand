import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/organism/header";
import { Footer } from "@/components/organism/sections/footer";
import { tos } from "@/model/api/terms-of-service/data";

const paragraphNumber = (entryIndex: number, paragraphIndex: number): string => {
  return `${entryIndex + 1}.${paragraphIndex + 1}. `;
};
type RenderListProps = {
    entry: any;
    paragraph: any;
    entryIndex: number;
    paragraphIndex: number;
  };
  
  function RenderList({
    entry,
    paragraph,
    entryIndex,
    paragraphIndex,
  }: RenderListProps) {
  if (paragraph.type === "paragraph") {
    return paragraph.list.map((option: any, optionIndex: number) => (
      <p key={`${entry.key}-${paragraphIndex}-${optionIndex}`} className="text-base">
        { optionIndex === 0 && paragraphNumber(entryIndex, paragraphIndex) }
        { option }
      </p>
    ))
  } else if (paragraph.type === "list") {
    return (
      <React.Fragment>
        <p className="text-base">
          { paragraphNumber(entryIndex, paragraphIndex) }
          { paragraph.firstLine }
        </p>
        <ul className="list-disc pl-6 md:pl-12 flex flex-col gap-4">
          {
            paragraph.list.map((option: any, optionIndex: number) => (
              <li key={`${entry.key}-${paragraphIndex}-${optionIndex}`}>
                { option }
              </li>
            ))
          }
        </ul>
      </React.Fragment>
    )
  }
}

const TermsAndService: NextPage = () => {
  return (
    <>
      <Head>
        <title>SalesAssist Subscription Terms of Service</title>
        <meta name="description" content="Complete sales faster with SalesAssist - the Sales Completion Platform that unifies all the sales completion tools into a single panel within your CRM, integrates them with workflow automation and assists your sales team with smart suggestions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header/>
      </header>
      <section id="terms-of-service">
        <div className="container mx-auto py-12 flex flex-col gap-6 lg:px-12 md:px-6 px-4 text-gray-primary">
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <h1 className="font-bold text-4xl">{tos.title}</h1>
            </div>
            <p className="text-base">{tos.effectiveDate}</p>
            {tos.introduction.map((paragraph, index) => <p key={`introduction-${index}`} className="text-base">{paragraph}</p>)}
          </div>
          { tos.data.map((entry, entryIndex) => (
            <React.Fragment key={entry.key}>
              <div className="flex flex-col gap-6">
                <h1 className="font-bold text-xl">{entryIndex + 1}. {entry.title}</h1>
                {
                    entry.text.map((paragraph, paragraphIndex) => {
                    if (typeof paragraph === "object") {
                      return <RenderList entry={entry} paragraph={paragraph} entryIndex={entryIndex} paragraphIndex={paragraphIndex} />
                    } else {
                      return (
                        <p key={`${entry.key}-${paragraphIndex}`} className="text-base">
                          { entry.text.length > 1 && paragraphNumber(entryIndex, paragraphIndex) }
                          { paragraph }
                        </p>
                      )
                    }
                  })
                }
              </div>
            </React.Fragment>
          )) }
        </div>
      </section>
      <Footer kind="dark" />
    </>
  );
};

export default TermsAndService;
