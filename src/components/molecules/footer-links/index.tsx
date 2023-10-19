import { FooterList } from '@/components/atoms/footer-list'
import { footerLinks } from '@/model/api/routes-data/data'
import React from 'react'

type Props = {
    kind?: "dark" | "light";
}

export default function FooterLinks({kind}: Props) {
  return (
    <div className="lg:w-1/2 h-full flex justify-between  px-2 md:py-2 flex-wrap md:flex-nowrap">
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
    
  </div>
  
  )
}