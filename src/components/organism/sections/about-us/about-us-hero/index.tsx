import { SiHackthebox } from "react-icons/si";

import { buildIcon } from "@/components/atoms/salesIcon";
import { aboutUsIcons } from "@/components/atoms/icons/about-us";
import { Section } from "@/components/atoms/section";
import { AboutUsHeroInter } from "@/model/types";

type Props = {
  data: AboutUsHeroInter;
};

export function AboutUsHero({ data }: Props) {
  return (
    <div className="h-full flex flex-col  pb-12 lg:px-12 section mt-9">
      <Section>
        <div className="flex-grow flex items-center  flex-col gap-12 ">
          <div className="text-left bold w-5/6  xl:ml-56">
            <h2 className="text-gray-900 md:text-[2.50rem] font-semibold mb-4 ">
              {data.title}
            </h2>
            <p className="text-gray-500 max-w-5xl">{data.desc}</p>
          </div>

          <div className="py-2 w-10/12 xl:ml-56">
            <h2 className="text-gray-900 md:text-[2.80rem] font-semibold mb-4">
              {data.our_values.name}
            </h2>
            <div className="flex items-center flex-wrap gap-4 w-full ">
              {data.our_values.values.map((value) => {
                return (
                  <div
                    className="p-4 flex bg-white items-center justify-center w-full md:w1/2 lg:w-[32%] gap-4 h-28 rounded-lg"
                    key={value.code}
                  >
                    <div className="w-1/5  h-full flex items-center justify-center">
                      {buildIcon({
                        data: aboutUsIcons,
                        code: value.code,
                        fallback: <SiHackthebox />,
                        size: { width: 64, height: 64 },
                      })}
                    </div>
                    <div className="flex-grow w-[80%]">
                      <h4 className="font-medium">{value.title}</h4>
                      <p className="text-gray-500 ">{value.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
