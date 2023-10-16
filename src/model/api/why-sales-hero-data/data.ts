import { translate } from "@/locales";

const dataHero ={
    "title":  `${translate("whySalesAssist.hero.title")}`,
    "desc": `${translate("whySalesAssist.hero.desc")}`,
    "reasons": [
      {
        "code": "CSF",
        "title": `${translate("whySalesAssist.hero.reasons[0].title")}`,
        "desc": `${translate("whySalesAssist.hero.reasons[0].desc")}`
      },
      {
        "code": "CEW",
        "title": `${translate("whySalesAssist.hero.reasons[1].title")}`,
        "desc": `${translate("whySalesAssist.hero.reasons[1].desc")}`
      },
      {
        "code": "PBE",
        "title": `${translate("whySalesAssist.hero.reasons[2].title")}`,
        "desc": `${translate("whySalesAssist.hero.reasons[2].desc")}`
      }
    ]
  }
  export { dataHero };