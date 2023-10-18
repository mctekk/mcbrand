import { translate } from "@/locales";

export const howData ={
"title": `${translate("whySalesAssist.howItWorks.title")}`,
    "desc": `${translate("whySalesAssist.howItWorks.desc")}`,
    "actions": [
      {
        "code": "HIW-ASA",
        "title": `${translate("whySalesAssist.howItWorks.actions[0].title")}`,
        "desc": `${translate("whySalesAssist.howItWorks.actions[0].desc")}`,
        "kind": "orange",
        "delay": 0
      },
      {
        "code": "HIW-IWC",
        "title": `${translate("whySalesAssist.howItWorks.actions[1].title")}`,
        "desc": `${translate("whySalesAssist.howItWorks.actions[1].desc")}`,
        "kind": "purple",
        "delay": 0.5
      },
      {
        "code": "HIW-CTS",
        "title": `${translate("whySalesAssist.howItWorks.actions[2].title")}`,
        "desc": `${translate("whySalesAssist.howItWorks.actions[2].desc")}`,
        "kind": "normal",
        "delay": 0.8
      }
    ]
  }