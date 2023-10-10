import React from "react";

interface LeadingProps {
  title: string;
  content: string;
}

export default function Leading({ title, content }: LeadingProps) {
  return (
    <div>
      <h3 className="font-semibold text-[1.5rem] leading-6">{title}</h3>
      <span className="flex justify-center leading-6 text-gray-400 font-medium text-[1.3rem]">
        {content}
      </span>
    </div>
  );
}
