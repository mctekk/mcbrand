import { translate } from "@/locales";

interface Action {
  name: string;
  title: string;
  desc: string;
  url: string;
}

const translateData = Array.from(translate("home.actions")) ;
const Data =[
  {
    "url": `function createStyleObject(classNames, style) {
      return classNames.reduce((styleObject, className) => {
        return {...styleObject, ...style[className]};
      }, {});
    }
    
    function createClassNameString(classNames) {
      return classNames.join(' ');
    }`
  },
  {
   "url": "/images/actions/e-Forms.webp"
  },
  {
    "url": "/images/actions/e-Signature.webp"
  },
  {
    "url": "/images/actions/Product-Sharing.webp"
  },
  {
    "url": "/images/actions/Request-Referrals.webp"
  }
]

const actionsData: Action[] = translateData.map((action: any, index: number) => ({
  name: translate(`home.actions[${index}].name`),
  title: translate(`home.actions[${index}].title`),
  desc: translate(`home.actions[${index}].desc`),
  url: translate(`home.actions[${index}].url`),
}));



const kanvasActionsData: Action[] = Data.map((action: any, index: number) => ({
  name: translate(`home.kanvasActions[${index}].name`),
  title: translate(`home.kanvasActions[${index}].title`),
  desc: translate(`home.kanvasActions[${index}].desc`),
  url: Data[index].url,
}));


export { actionsData,kanvasActionsData };
