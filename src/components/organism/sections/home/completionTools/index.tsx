import Image from "next/image";
import { Section } from "@/components/atoms/section";

interface Props {
  title: string;
  desc: string;
  img: string;
  subtitle?: string;
  subdesc?: string;
  colorFonts?: string;
}
export default function CompletionTools({
  desc,
  img,
  subdesc,
  title,
  subtitle,
  colorFonts,
}: Props) {
  return (
    <div className="section bg-white mx-auto  ">
      {" "}
      <Section
        className={`flex flex-col gap-6 xl:w-2/3 lg:w-full lg:px-16 mx-auto   ${colorFonts}  `}
      >
        {" "}
        <h1 className="text-[2.125rem]"> {title}</h1>{" "}
        <h4 className="mb-6 ">{desc}</h4>{" "}
        <Image alt="Completion Tools" src={img} width={2000} height={24} />{" "}
        <h1 className="text-[2.125rem]"> {subtitle}</h1>
        <h4 className="mb-24 ">{subdesc}</h4>
      </Section>{" "}
    </div>
  );
}
