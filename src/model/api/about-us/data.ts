import { translate } from "@/locales";

export const aboutUsData = {
  title: `${translate("aboutUs.title")}`,
  desc: `${translate("aboutUs.desc")}`,
  our_values: {
    name: `${translate("aboutUs.our_values.name")}`,
    values: [
      {
        code: "FOI",
        title: `${translate("aboutUs.our_values.values[0].title")}`,
        desc: `${translate("aboutUs.our_values.values[0].desc")}`,
      },
      {
        code: "SO",
        title: `${translate("aboutUs.our_values.values[1].title")}`,
        desc: `${translate("aboutUs.our_values.values[1].desc")}`,
      },
      {
        code: "PS",
        title: `${translate("aboutUs.our_values.values[2].title")}`,
        desc: `${translate("aboutUs.our_values.values[2].desc")}`,
      },
      {
        code: "TBS",
        title: `${translate("aboutUs.our_values.values[3].title")}`,
        desc: `${translate("aboutUs.our_values.values[3].desc")}`,
      },
      {
        code: "RR",
        title: `${translate("aboutUs.our_values.values[4].title")}`,
        desc: `${translate("aboutUs.our_values.values[4].desc")}`,
      },
      {
        code: "EO",
        title: `${translate("aboutUs.our_values.values[5].title")}`,
        desc: `${translate("aboutUs.our_values.values[5].desc")}`,
      },
    ],
  },
};
