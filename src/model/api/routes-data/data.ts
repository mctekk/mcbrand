import { translate } from "@/locales";

export enum Paths {
    whySalesAssist = '/why-sales-assist',
    pricing = '/pricing',
    about = '/about-us',
}
export const RouteNames = {
  whySalesAssist: `${translate("routes.whySalesAssist")}`,
  pricing: `${translate("routes.pricing")}`,
  about: `${translate("routes.about")}`,
  qAndA: `${translate("routes.qAndA")}`,
  howItWorks: `${translate("routes.howItWorks")}`,
  benefits: `${translate("routes.Benefits")}`,
  actions: `${translate("routes.actions")}`,
  bookADemo: `${translate("routes.bookADemo")}`,
  legal: `${translate("routes.legal")}`,
  policy: `${translate("routes.policy")}`,
};

export type Route = { path: string, name: string };
export type Routes = Array<Route>;



export const calendlyLink = 'https://calendly.com/salesasssit/30min';

const salesAssist = {
    title: `${translate("routesTitles.title")}`,
    links: [
        { path: '/#how-it-works', name: RouteNames.howItWorks },
        { path: `${Paths.whySalesAssist}/#benefits`, name: RouteNames.benefits },
        { path: '/#actions', name: RouteNames.actions },
        { path: Paths.pricing, name: RouteNames.pricing },
        { path: `${Paths.pricing}/#Q&A`, name: RouteNames.qAndA },
    ]
}

const company = {
    title: `${translate("routesTitles.title1")}`,
    links: [
        { path: '/about-us', name: RouteNames.about },
        { path: calendlyLink, name: RouteNames.bookADemo },
    ]
}

const contact = {
    title: `${translate("routesTitles.title2")}`,
    links: [
        { path: 'mailto:help@salesassist.io', name: 'help@salesassist.io' },
        { path: '#', name: '251 Little Falls Drive, Wilmington, Delaware 19808' },
    ]
}



export const footerLinks = {
    salesAssist,
    company,
    contact,
}

