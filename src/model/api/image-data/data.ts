import { translate } from "@/locales";

interface Action {
  name: string;
  title: string;
  desc: string;
  url: string;
}

const translateData = Array.from(translate("home.actions")) ;

const actionsData: Action[] = translateData.map((action: any, index: number) => ({
  name: translate(`home.actions[${index}].name`),
  title: translate(`home.actions[${index}].title`),
  desc: translate(`home.actions[${index}].desc`),
  url: translate(`home.actions[${index}].url`),
}));

export { actionsData };
