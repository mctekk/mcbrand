import { translate } from "@/locales";


interface Action {
  name: string;
  title: string;
  desc: string;
  url: string;
}

const actionsLength = translate("home.actions").length;

const data: Action[] = [];

for (let index = 0; index < actionsLength; index++) {
  data.push({
    name: translate(`home.actions[${index}].name`),
    title: translate(`home.actions[${index}].title`),
    desc: translate(`home.actions[${index}].desc`),
    url: translate(`home.actions[${index}].url`),
  });
}

export { data };
