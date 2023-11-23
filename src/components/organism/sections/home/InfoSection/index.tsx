import Image from "next/image";
import { Section } from "@/components/atoms/section";
import { Solid } from "@/components/atoms/button/solid";
import Link from "next/link";
interface Props {
  title?: string;
  desc: string;
  button: boolean;
  buttonLink: string;
  buttonTitle?: string;
  img: string;
  backColor?: string;
  textColor?: string;
  buttonColor?: string;
  reverse?: boolean;
  link?: string;
  imgSize?: number | 600;
  space?: string;
  isCase?: boolean;
  upperLogo?: string;
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
  reverse,
  link,
  imgSize,
  space,
  isCase,
  upperLogo
}: Props) {
  reverse ? ( isCase?space = "xl:ml-32 -ml-26":"") : (space = "2xl:mr-40");
  return (
    <section className={`${backColor} section  `}>
      <Section
        className={`flex flex-col  lg:flex-row ${
          reverse ? "lg:flex-row-reverse  space-x-36 " : "lg:flex-row"
        }  items-center  ${isCase ? "space-x-56" : "space-x-20"}`}
      >
        <div
          className={`flex flex-col gap-6 ${
            isCase ? "xl:w-2/4 xl:ml-32 " : "xl:w-1/2 "
          } xl:ml-48 ${reverse ? "xl:mr-32" : ""} ${textColor} `}
        >
          {isCase? <Image
            alt="Logo"
            src={upperLogo || ""}
            width={50}
            height={96}

          ></Image>:""}
          <h1>{title}</h1>
          <h4>{desc}</h4>
          {button && (
            <Link href={buttonLink}>
              <Solid className={`px-5 mt-4 lg:px-3 ${buttonColor}`}>
                {buttonTitle}
              </Solid>
            </Link>
          )}
        </div>
        <div
          className={`shrink-0 md:w-fit md:h-[29.5rem] rounded-lg drop-shadow-sa overflow-hidden  `}
        >
          <a href={link}>
            <Image
              alt="Completion Process Example"
              src={img}
              width={imgSize || 600}
              height={96}
              className={`${space} `}
            />
          </a>
        </div>
      </Section>
    </section>
  );
}
