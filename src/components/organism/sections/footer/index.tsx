import classNames from "classnames";
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FooterList } from "../../../atoms/footer-list";
import { footerLinks } from "@/model/api/routes-data/data";
import NextLink from "next/link";
import Image from "next/image";
import FooterLinks from "@/components/molecules/footer-links";

interface FooterProps {
  className?: string;
  kind?: "dark" | "light";
}

const social = [
    { url: 'https://www.linkedin.com/company/getsalesassist', icon: <BsLinkedin />},
    { url: 'https://twitter.com/SalesAssistSaaS', icon: <BsTwitter />}
]

export function Footer({ className, kind = "light" }: FooterProps) {
  const baseClasses = classNames(
    "md:py-12 duration-300 py-6 ",
    { "bg-zinc-800": kind === "dark" },
    { "text-white": kind === "dark" },
    className
  );

  const socialClasses = classNames(
    "text-[1.875rem] text-white rounded",
    { "bg-white": kind === "dark" },
    { "bg-zinc-800": kind === "light" }
  );

  return (
    <footer className={baseClasses}>
      <div className="h-full container mx-auto flex-grow flex gap-6 flex-col">
        {/* footer left panel */}
        <div className="h-1/2 w-full flex justify-between md:gap-4 md:items-center">
          <div className="w-full md:w-fit lg:w-1/2 h-full px-2 md:py-2 relative mb-auto">
            <div className="max-w-[164px]">
              {kind == "dark" ? (
                <Image
                  src="/images/WLogo.svg"
                  alt=""
                  width={500}
                  height={224}
                />
              ) : (
                <Image
                  src="/images/logo.png"
                  alt={""}
                  width={500}
                  height={224}
                />
              )}
            </div>
            <h4 className="hidden md:block text-[0.75rem]">
              © Shiplove Inc. {new Date().getFullYear()} All Rights Reserved
            </h4>
            <FooterList
              kind={kind}
              hideTitle
              className="block md:hidden"
              title={footerLinks.salesAssist.title}
              links={footerLinks.salesAssist.links}
            />
          </div>
          {/* links */}
         <FooterLinks></FooterLinks>
        </div>
        {/* more about */}
        <div className="flex-col md:flex-row flex-grow md:border-t w-full flex md:items-start md:justify-between gap-6 px-2 md:px-0 md:py-2">
          {/* useful links */}
          <div className="w-1/6 border block md:hidden"></div>
          <div className="md:w-1/2 h-full flex items-start md:gap-6 md:justify-start flex-col md:flex-row ">
            {[
              { name: "Privacy Policy", path: "/privacy-policy" },
              { name: "Terms of Service", path: "/terms-of-service" },
            ].map((link) => (
              <NextLink key={link.path} passHref href={link.path}>
                <p className="px-0 hover:text-orange-500">{link.name}</p>
              </NextLink>
            ))}
          </div>

          {/* social media */}
          <div className="md:w-1/2 h-full flex justify-end gap-2 md:gap-6 flex-col md:flex-row w-full md:pb-12">
            <h4 className="block md:hidden text-[0.75rem] text-gray-400">
              © Shiplove Inc. {new Date().getFullYear()} All Rights Reserved
            </h4>
            <div className="flex gap-6 w-full flex-wrap md:justify-end">
              {social.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className={socialClasses}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
