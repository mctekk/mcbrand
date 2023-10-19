import React from "react";
import { tos } from "@/model/api/terms-of-service/data";
import { RenderList, paragraphNumber } from "@/components/atoms/render-list";

export default function Terms() {
  return (
    <>
      <section id="terms-of-service">
        <div className="container mx-auto py-12 flex flex-col gap-6 lg:px-12 md:px-6 px-4 text-gray-primary">
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <h1 className="font-bold text-4xl">{tos.title}</h1>
            </div>
            <p className="text-base">{tos.effectiveDate}</p>
            {tos.introduction.map((paragraph, index) => (
              <p key={`introduction-${index}`} className="text-base">
                {paragraph}
              </p>
            ))}
          </div>
          {tos.data.map((entry, entryIndex) => (
            <React.Fragment key={entry.key}>
              <div className="flex flex-col gap-6">
                <h1 className="font-bold text-xl">
                  {entryIndex + 1}. {entry.title}
                </h1>
                {entry.text.map((paragraph, paragraphIndex) => {
                  if (typeof paragraph === "object") {
                    return (
                      <RenderList
                        entry={entry}
                        paragraph={paragraph}
                        entryIndex={entryIndex}
                        paragraphIndex={paragraphIndex}
                      />
                    );
                  } else {
                    return (
                      <p
                        key={`${entry.key}-${paragraphIndex}`}
                        className="text-base"
                      >
                        {entry.text.length > 1 &&
                          paragraphNumber(entryIndex, paragraphIndex)}
                        {paragraph}
                      </p>
                    );
                  }
                })}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
