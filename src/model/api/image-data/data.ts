import { translate } from "@/locales";

interface Action {
  name: string;
  title: string;
  desc: string;
  url: string;
}

const translateData = Array.from(translate("home.actions"));
const Data = [
  {
    url: "/images/actionsKanvas/Ecosystem.png",
  },
  {
    url: "/images/actionsKanvas/CRM.png",
  },
  {
    url: "/images/actionsKanvas/Inventory.png",
  },
  {
    url: "/images/actionsKanvas/Social.png",
  },
  {
    url: "/images/actionsKanvas/Workflow.png",
  },
];

const gewaerData = [
  {
    url: "/images/actionsGewaer/integration.png",
  },
  {
    url: "/images/actionsGewaer/label.png",
  },
  {
    url: "/images/actionsGewaer/management.png",
  },
  {
    url: "/images/actionsGewaer/management1.png",
  },
  {
    url: "/images/actionsGewaer/registration.png",
  },
 
];

const actionsData: Action[] = translateData.map(
  (action: any, index: number) => ({
    name: translate(`home.actions[${index}].name`),
    title: translate(`home.actions[${index}].title`),
    desc: translate(`home.actions[${index}].desc`),
    url: translate(`home.actions[${index}].url`),
  })
);

const kanvasActionsData: Action[] = Data.map((action: any, index: number) => ({
  name: translate(`home.kanvasActions[${index}].name`),
  title: translate(`home.kanvasActions[${index}].title`),
  desc: translate(`home.kanvasActions[${index}].desc`),
  url: Data[index].url,
}));

const gewaerActionsData: Action[] = gewaerData.map((action: any, index: number) => ({
  name: translate(`home.gewaerActions[${index}].name`),
  title: translate(`home.gewaerActions[${index}].title`),
  desc: translate(`home.gewaerActions[${index}].desc`),
  url: gewaerData[index].url,
}));

export { actionsData, kanvasActionsData, gewaerActionsData };
