import { Section } from "@/components/atoms/section";
import Image from "next/image";
import classNames from "classnames";
import { translate } from "@/locales";

export function Automated({}) {
  const classes = classNames("section");
  return (
    <section className={classes}>
      <Section className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 mx-auto    ">
          <h1 className=" text-black justify-center mx-auto relative">
           {translate("home.automated.title")}
          </h1>
          <h4 className="text-gray-500  xl:mx-56 xl:pl-16 ">
          {translate("home.automated.desc")}
          </h4>
        </div>

        <div className="relative w-full flex  mx-auto justify-center">
          <Image
            src={"/images/automated.svg"}
            alt="as"
            width={1100}
            height={24}
          />
        </div>
      </Section>
    </section>
  );
}
