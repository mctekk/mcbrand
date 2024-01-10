import { translate } from "@/locales";

export enum Paths {
  whySalesAssist = "/why-sales-assist",
  pricing = "/pricing",
  about = "/about-us",
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

export type Route = { path: string; name: string };
export type Routes = Array<Route>;

export const calendlyLink = "https://calendly.com/salesasssit/30min";

const salesAssist = {
  title: `${translate("routesTitles.title")}`,
  links: [
    { path: "/#how-it-works", name: RouteNames.howItWorks },
    { path: `${Paths.whySalesAssist}/#benefits`, name: RouteNames.benefits },
    { path: "/#actions", name: RouteNames.actions },
    { path: Paths.pricing, name: RouteNames.pricing },
    { path: `${Paths.pricing}/#Q&A`, name: RouteNames.qAndA },
  ],
};
const mctekk = {
  title: `Products `,
  links: [
    { path: "https://kanvas.dev/", name: "Kanvas" },
    { path: `https://www.gewaer.io/`, name: "Gewaer" },
  ],
};
const kanvas = {
  title: `Kanvas`,
  links: [
    { path: "/#how-it-works", name: RouteNames.howItWorks },
    { path: "/#features", name: "Core Functionalities "},

  ],
};
const gewaer = {
  title: `Gewaer`,
  links: [
    { path: "/#features", name: "Core Functionalities "},

  ],
};
const gewaerEs = {
  title: `Gewaer`,
  links: [
    { path: "/#features", name: "Funcionalidades "},

  ],
};
const mcCompany = {
  title: `${translate("routesTitles.title1")}`,
  links: [
    { path: "/about-us", name: RouteNames.about },
    {
      path: "https://mctekk.grovehr.com/careers/job?id=65117eed2487c21055883347",
      name: "Jobs",
    },
  ],
};
const company = {
  title: `${translate("routesTitles.title1")}`,
  links: [
    { path: "/about-us", name: RouteNames.about },
    { path: calendlyLink, name: RouteNames.bookADemo },
  ],
};

const GewaerCompany = {
  title: `${translate("routesTitles.title1")}`,
  links: [
    {
      path: "/schedule",
      name: "Request Demo",
    },
  ],
};
const GewaerCompanyEs = {
  title: `${"Empresa"}`,
  links: [
    {
      path: "/schedule",
      name: "Solicita una prueba",
    },
  ],
};
const contact = {
  title: `${translate("routesTitles.title2")}`,
  links: [
    { path: "mailto:help@salesassist.io", name: "help@salesassist.io" },
    { path: "#", name: "251 Little Falls Drive, Wilmington, Delaware 19808" },
  ],
};
const kanvasContact = {
  title: `${translate("routesTitles.title2")}`,
  links: [
    { path: "mailto:info@kanvas.dev", name: " info@kanvas.dev" },
  ],
};
const GewaerContact = {
  title: `${translate("routesTitles.title2")}`,
  links: [
    { path: "mailto: contacto@mctekk.com", name: " contacto@mctekk.com    " },
  ],
};
const GewaerContactEs = {
  title: `${"Contacto"}`,
  links: [
    { path: "mailto: contacto@mctekk.com", name: " contacto@mctekk.com    " },
  ],
};
const mcContact = {
  title: `${translate("routesTitles.title2")}`,
  links: [
    { path: "mailto: contacto@mctekk.com", name: " contacto@mctekk.com    " },
    
  ],
};

export const footerLinks = {
  salesAssist,
  GewaerCompany,
  GewaerContact,
  gewaer,
  mcCompany,
  mcContact,
  mctekk,
  company,
  contact,
  kanvas,
  kanvasContact,
 GewaerCompanyEs,gewaerEs,GewaerContactEs 
};
