
import { Section } from "@/components/atoms/section";
import Image from "next/image";
import React from "react";

import "swiper/css";

interface TwoPartComponentProps {
  title: string;
  description: string;
  img: string;
  top:string
  subdesc?:string
}

function Content({
  title,
  description,
  img,
  top,
  subdesc
}: TwoPartComponentProps): JSX.Element {


  return (
    <section>
      <Section>
    <div className="">
      <div className="flex flex-col  lg:flex-row section xl:w-5/6 mx-auto ">
        <div className={`xl:w-1/2 p-4 ${top}`}>
          <h2 className="text-[36px] font-bold mb-4">{title}</h2>
          <p className="mb-4 text-[18px]">{description}</p>
          <p className="mb-4 text-[18px]">{subdesc}</p>
        </div>
        <div className="xl:w-1/2">
          <Image
            alt="Completion Process Example"
            src={img}
            width={600}
            height={96}
          />
        </div>
      </div>
    </div>
    </Section>
    </section>
  );
}

export default Content;
