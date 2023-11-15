import { Section } from "@/components/atoms/section";
import Image from "next/image";
import classNames from "classnames";
import { translate } from "@/locales";


interface Props{
  title: string;
  desc: string ;
  img:string;
  descColor?:string
  titleColor?:string
  bg?:string
}

export function Automated({desc,img,title,descColor,titleColor,bg}:Props) {
  const classes = classNames(`section ${bg}`);
  return (
    <section className={classes}>
      <Section className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 mx-auto     ">
          <h1 className={`${titleColor} text-black justify-center mx-auto relative `}>
           
           {title}
          </h1>
          <h4 className={`${descColor} text-gray-500  xl:mx-56 xl:pl-16 `}>
          
          {desc}
          </h4>
        </div>

        <div className="relative w-full flex  mx-auto justify-center">
          <Image
            src={img}
            alt="as"
            width={1100}
            height={24}
          />
        </div>
      </Section>
    </section>
  );
}
