import Image from "next/image";
import { Section } from "@/components/atoms/section";
import { Solid } from "@/components/atoms/button/solid";

interface Props {
  title?: string;
  desc: string;
  button: boolean;
  buttonLink?: string;
  buttonTitle?: string;
  img: string;
  backColor?: string;
  textColor?: string;
  buttonColor?: string;
  reverse?:boolean
}

export default function InfoSection({
  button,
  desc,
  buttonLink,
  buttonTitle,
  title,
  img,
  backColor,
  textColor,
  buttonColor,
  reverse
}: Props) {
  return (
    <section className={`${backColor} section  `}>
      <Section
        className={`flex flex-col  lg:flex-row ${reverse? "lg:flex-row-reverse":"lg:flex-row"} gap-4 md:gap-20 items-center`}
      >
        <div className={`flex flex-col gap-6 xl:w-fit xl:ml-72 ${textColor} `}>
          <h1>{title}</h1>
          <h4>
            {desc}
            {button && (
              <a href={buttonLink} target="_blank" rel="noreferrer">
                <Solid className={`px-2 mt-4 lg:px-3 ${buttonColor}`}>
                  {buttonTitle}
                </Solid>
              </a>
            )}
          </h4>
        </div>
        <div className="shrink-0 md:w-[35.5rem] md:h-[27.5rem] rounded-lg drop-shadow-sa overflow-hidden ">
          <Image
            alt="Completion Process Example"
            src={img}
            width={1000}
            height={96}
          />
        </div>
      </Section>
    </section>
  );
}
