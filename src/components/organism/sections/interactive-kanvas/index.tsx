import { Section } from "@/components/atoms/section";
import Image from "next/image";
import classNames from "classnames";
import { translate } from "@/locales";
import { EmailForm } from "@/components/atoms/wait-form";

interface Props {
  title: string;
  desc: string;
  descColor?: string;
  titleColor?: string;
  bg?: string;
}

export function Ikanvas({
  desc,

  title,
  descColor,
  titleColor,
  bg,
}: Props) {
  const classes = classNames(`section ${bg}`);
  return (
    <section className={classes} id="Tour">
      <Section className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 mx-auto     ">
          <h1
            className={`${titleColor} text-black justify-center mx-auto relative `}
          >
            {title}
          </h1>
          <h4 className={`${descColor} text-gray-500  xl:mx-56 xl:pl-16 `}>
            {desc}
          </h4>
        </div>

        <div className="relative w-full flex justify-center">
          <div className=" w-full ">
            <iframe
              src="https://demo.arcade.software/EdbIbP2XjmtLT1adLvZg?embed&show_copy_link=true"
              title="Presentation - Kanvas Prototype"
              loading="lazy"
              allowFullScreen
              allow="clipboard-write"
              className="w-full lg:h-screen md:h-[33rem]  h-[28rem]"
            ></iframe>
            
          </div>
        
        </div>
        <div className=" self-center text-center mt-32 ">
              {" "}
              <h4
                className={` text-white md:text-[2.50rem] ml-5 md:ml-0 lg:ml-0 font-semibold`}
              >
                Join our waitlist for our open beta release:
              </h4>{" "}
              <div className="ml-5 md:ml-0">
                {" "}
                <EmailForm />{" "}
              </div>
            </div>
      </Section>
    </section>
  );
}
