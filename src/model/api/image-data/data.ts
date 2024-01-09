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
    url: "/images/actionsGewaer/Client-portal1.png",
  },
  {
    url: "/images/actionsGewaer/Agent-portal1.png",
  },
  {
    url: "/images/actionsGewaer/business-marketplaces1.png",
  },
  {
    url: "/images/actionsGewaer/Contract-hub1.png",
  },
 
];
const gewaerDataEs = [
  {
    url: "/images/actionsGewaer/Client-portal1.png",
  },
  {
    url: "/images/actionsGewaer/Agent-portal1.png",
  },
  {
    url: "/images/actionsGewaer/business-marketplaces1.png",
  },
  {
    url: "/images/actionsGewaer/Contract-hub1.png",
  },{
    url: "/images/actionsGewaer/Contract-hub1.png",
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

const gewaerActionsData: Action[] = gewaerData.map(
  (action: any, index: number) => ({
    name: translate(`home.gewaerActions[${index}].name`),
    title: translate(`home.gewaerActions[${index}].title`),
    desc: translate(`home.gewaerActions[${index}].desc`),
    url: gewaerData[index].url,
  })
);

const gewaerActionsDataEs: Action[] = gewaerData.map(
  (action: any, index: number) => ({
    name: translate(`home.gewaerActionsEs[${index}].name`),
    title: translate(`home.gewaerActionsEs[${index}].title`),
    desc: translate(`home.gewaerActionsEs[${index}].desc`),
    url: gewaerDataEs[index].url,
  })
);

export { actionsData, kanvasActionsData, gewaerActionsData,gewaerActionsDataEs };
