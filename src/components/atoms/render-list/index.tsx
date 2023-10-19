import React from "react";

export function paragraphNumber(
  entryIndex: number,
  paragraphIndex: number
): string {
  return `${entryIndex + 1}.${paragraphIndex + 1}. `;
}
type RenderListProps = {
  entry: any;
  paragraph: any;
  entryIndex: number;
  paragraphIndex: number;
};

export function RenderList({
  entry,
  paragraph,
  entryIndex,
  paragraphIndex,
}: RenderListProps) {
  if (paragraph.type === "paragraph") {
    return paragraph.list.map((option: any, optionIndex: number) => (
      <p
        key={`${entry.key}-${paragraphIndex}-${optionIndex}`}
        className="text-base"
      >
        {optionIndex === 0 && paragraphNumber(entryIndex, paragraphIndex)}
        {option}
      </p>
    ));
  } else if (paragraph.type === "list") {
    return (
      <React.Fragment>
        <p className="text-base">
          {paragraphNumber(entryIndex, paragraphIndex)}
          {paragraph.firstLine}
        </p>
        <ul className="list-disc pl-6 md:pl-12 flex flex-col gap-4">
          {paragraph.list.map((option: any, optionIndex: number) => (
            <li key={`${entry.key }-${paragraphIndex}-${optionIndex}`}>
              {option}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
