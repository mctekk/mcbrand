import Image from "next/image";
import { Section } from "@/components/atoms/section";
import Link from "next/link";

interface Props {
  title?: string;
  desc: string | string[];
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
  id?: string;
  linkLetters?: string;
  finalLink?: string;
  linkColor?: string;
  isUpperLogo?: boolean;
}

export default function InfoSectionDivided({
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
  upperLogo,
  id,
  finalLink,
  linkLetters,
  linkColor,
  isUpperLogo
}: Props) {
  reverse ? "" : (space = "2xl:mr-20");

  const renderDescription = () => {
    if (Array.isArray(desc)) {
      return desc.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ));
    }
    return <h4>{desc}</h4>;
  };

  return (
    <section className={`${backColor} section`} id={id}>
      <Section
        className={`flex flex-col lg:flex-row ${
          reverse ? "lg:flex-row-reverse lg:space-x-24" : "lg:flex-row"
        } items-center ${isCase ? "xl:space-x-56" : ""}`}
      >
        <div
          className={`flex flex-col gap-6 mb-5 md:ml-14 ${
            isCase ? "xl:w-2/4 xl:ml-32" : "xl:w-1/2"
          } xl:ml-48 ${reverse ? "2xl:mr-3" : "ml-0"} ${textColor}`}
        >
          {isCase && isUpperLogo && (
            <Image alt="Logo" src={upperLogo || ""} width={50} height={96} />
          )}
          <h1>{title}</h1>
          {renderDescription()}
          {finalLink && linkLetters && (
            <h4>
              <a href={finalLink} target="_blank" className={linkColor}>
                {linkLetters}
              </a>
            </h4>
          )}
          {button && (
            <Link href={buttonLink} className="text-white w-fit">
              <button className={`px-5 p-2 mt-4 lg:px-3 ${buttonColor}`}>
                {buttonTitle}
              </button>
            </Link>
          )}
        </div>

        <div className="shrink-0 md:w-fit md:h-[29.5rem] rounded-lg drop-shadow-sa overflow-hidden">
          <a href={link}>
            <Image
              alt="Completion Process Example"
              src={img}
              width={imgSize || 600}
              height={96}
              className={`${space} mt-12 ${reverse ? "xl:ml-24" : ""}`}
            />
          </a>
        </div>
      </Section>
    </section>
  );
}
