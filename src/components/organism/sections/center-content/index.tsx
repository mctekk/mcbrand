// components/CenteredContent.tsx

import React from "react";

interface CenteredContentProps {
  title: string;
  text: string;
  imageUrl: string;
}

const CenteredContent: React.FC<CenteredContentProps> = ({
  title,
  text,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center justify-center section bg-gray-200">
      <div className="xl:w-3/6 text-center ">
        <h1 className="text-[42px] font-bold mb-4">{title}</h1>
        <p className="text-[22px] mb-6 text-gray-600 ">{text}</p>
      </div>
      <a href="https://github.com/bakaphp">
      <img
        src={imageUrl}
        alt="Imagen"
        className="w-[86px] h-[86px] rounded-full self-center"
      />
      </a>
    </div>
  );
};

export default CenteredContent;
