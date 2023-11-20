import Image from "next/image";
import { Section } from "@/components/atoms/section";

interface Props {
  title: string;
  desc: string;
  img: string;
  subtitle?: string;
  subdesc?: string;
  colorFonts?: string;
  back?: string | "bg-white";
}
export default function CompletionTools({
  desc,
  img,
  subdesc,
  title,
  subtitle,
  colorFonts,
  back,
}: Props) {
  return (
    <div className={`section mx-auto ${back} `}>
      {" "}
      <Section
        className={`flex flex-col gap-6   lg:w-full lg:px-16 mx-auto   ${colorFonts}  `}
      >
        {" "}
        <div className="xl:w-5/6 flex-col mx-auto">
          <h1 className="text-[2.125rem] "> {title}</h1>{" "}
          <h4 className="mb-6 ">{desc}</h4>{" "}
          <Image alt="Completion Tools" src={img} width={2000} height={24} />{" "}
        </div>
        <h1 className="text-[2.125rem]"> {subtitle}</h1>
        <h4 className=" ">{subdesc}</h4>
      </Section>{" "}
    </div>
  );
}
