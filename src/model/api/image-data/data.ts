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
    "name": "Ecosystem",
    "title": "The foundation for any user facing app.",
    "desc": "Dive into authentication and teams (or multi-tenant) management, permission, notification and more. All the building blocks you need to build a user facing app.",
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
    "name": "Customers (CRM)",
    "title": "Customers are the most important part of any business.",
    "desc": "Handle customer information, communication, and relationships in a single place. Manage your sales process and customer journey from lead to customer.",
    "url": "/images/actions/e-Forms.webp"
  },
  {
    "name": "Inventory",
    "title": "Handle your inventory in a single place.",
    "desc": "Extend your e-commerce solution with headless bundles, create marketplaces, or build your own inventory management system.",
    "url": "/images/actions/e-Signature.webp"
  },
  {
    "name": "Social",
    "title": "Add social media features to any app.",
    "desc": "Share product, follow users , add groups , messaging, comments, likes, and more. All the building blocks you need to build a social app.",
    "url": "/images/actions/Product-Sharing.webp"
  },
  {
    "name": "Workflow",
    "title": "Connect kanvas modules with other systems.",
    "desc": "Allow you to set the rules to trigger actions based on events you define withing the kanvas ecosystem. After create lead creating send it to your CRM, or send a notification to your team, you just define it",
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
