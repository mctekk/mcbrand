import React from "react";
import { FooterList } from "@/components/atoms/footer-list";
import { footerLinks } from "@/model/api/routes-data/data";

type Props = {
  kind?: "dark" | "light";
  sales?: boolean;
  mctekk?: boolean;
  kanvas?: boolean;
  gewaer?: boolean;
  gewaerEs?: boolean;
};

export default function FooterLinks({ kind, mctekk, sales, kanvas, gewaer, gewaerEs }: Props) {
  let content;

  switch (true) {
    case kanvas:
      content = (
        <>
          <FooterList
            kind={kind}
            className="hidden md:block text-right"
            title={footerLinks.kanvas.title}
            links={footerLinks.kanvas.links}
            direction="text-right"
          />
          <FooterList
            kind={kind}
            title={footerLinks.kanvasContact.title}
            className="text-right"
            links={footerLinks.kanvasContact.links}
            direction="text-right"
          />
        </>
      );
      break;

    case gewaer:
      content = (
        <>
          <FooterList
            kind={kind}
            className="hidden md:block"
            title={footerLinks.gewaer.title}
            links={footerLinks.gewaer.links}
          />
          <FooterList
            kind={kind}
            title={footerLinks.GewaerCompany.title}
            links={footerLinks.GewaerCompany.links}
          />
          <FooterList
            kind={kind}
            title={footerLinks.GewaerContact.title}
            links={footerLinks.GewaerContact.links}
          />
        </>
      );
      break;

    case gewaerEs:
      content = (
        <>
          <FooterList
            kind={kind}
            className="hidden md:block"
            title={footerLinks.gewaerEs.title}
            links={footerLinks.gewaerEs.links}
          />
          <FooterList
            kind={kind}
            title={footerLinks.GewaerCompanyEs.title}
            links={footerLinks.GewaerCompanyEs.links}
          />
          <FooterList
            kind={kind}
            title={footerLinks.GewaerContactEs.title}
            links={footerLinks.GewaerContactEs.links}
          />
        </>
      );
      break;

    case sales:
      content = (
        <>
          <FooterList
            kind={kind}
            className="hidden md:block"
            title={footerLinks.salesAssist.title}
            links={footerLinks.salesAssist.links}
          />
          <FooterList
            kind={kind}
            title={footerLinks.company.title}
            links={footerLinks.company.links}
          />
          <FooterList
            kind={kind}
            title={footerLinks.contact.title}
            links={footerLinks.contact.links}
          />
        </>
      );
      break;

    default:
      content = (
        <>
          <FooterList
            kind={kind}
            className="hidden md:block"
            title={footerLinks.mctekk.title}
            links={footerLinks.mctekk.links}
          />
          <FooterList
            kind={kind}
            title={footerLinks.mcCompany.title}
            links={footerLinks.mcCompany.links}
          />
          <FooterList
            kind={kind}
            title={footerLinks.mcContact.title}
            links={footerLinks.mcContact.links}
          />
        </>
      );
      break;
  }

  return (
    <div className="lg:w-1/2 h-full flex justify-between px-2 md:py-2 flex-wrap md:flex-nowrap">
      {content}
    </div>
  );
}
