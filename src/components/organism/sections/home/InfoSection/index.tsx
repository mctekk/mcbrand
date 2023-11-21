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
  reverse?:boolean
  link?:string
  imgSize?:number | 600
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
  imgSize 
}: Props) {
  return (
    <section className={`${backColor} section  `}>
      <Section
        className={`flex flex-col  lg:flex-row ${reverse? "lg:flex-row-reverse":"lg:flex-row"} gap-4  items-center`}
      >
        <div className={`flex flex-col gap-6 xl:w-fit xl:ml-56 ${textColor} `}>
          <h1>{title}</h1>
          <h4>
            {desc}
          </h4>
          {button && (
              <Link href={buttonLink}  >
                <Solid className={`px-5 mt-4 lg:px-3 ${buttonColor}`}>
                  {buttonTitle}
                </Solid>
              </Link>
            )}
        </div>
        <div className="shrink-0 md:w-fit md:h-[27.5rem] rounded-lg drop-shadow-sa overflow-hidden -mr-20 ">
          <a href={link}>
          <Image
            alt="Completion Process Example"
            src={img}
            width={imgSize || 600}
            height={96}
          />
          </a>
        </div>
      </Section>
    </section>
  );
}
