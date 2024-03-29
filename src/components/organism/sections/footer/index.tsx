import classNames from "classnames";
import { FooterList } from "../../../atoms/footer-list";
import { footerLinks } from "@/model/api/routes-data/data";
import NextLink from "next/link";
import FooterLinks from "@/components/molecules/footer-links";
import FooterLogo from "@/components/atoms/footer-logo";
import FooterSocials from "@/components/atoms/footer-socials";
import FooterRights from "@/components/atoms/footer-rights";

interface FooterProps {
  className?: string;
  sales?: boolean;
  mctekk?: boolean;
  kanvas?: boolean;
  gewaer?: boolean;
  gewaerEs?: boolean;
  kind?: "dark" | "light";
}

export function Footer({
  className,
  kind = "light",
  mctekk,
  sales,
  kanvas,
  gewaer,
  gewaerEs,
}: FooterProps) {
  const baseClasses = classNames(
    "md:py-12 duration-300 py-6 ",
    { "bg-zinc-800": kind === "dark" },
    { "text-white": kind === "dark" },
    { "text-white bg-black": mctekk },
    { "text-white bg-sky-700": kanvas },
    { "text-white bg-gewaer-100": gewaer },
    { "text-white bg-gewaer-100": gewaerEs },

    className
  );

  return (
    <footer className={baseClasses}>
      <div className="h-full container xl:w-3/5 lg:w-full  mx-auto flex-grow flex gap-6 flex-col justify-center items-center ">
        {/* footer left panel */}
        <div className="h-1/2 w-full flex justify-between md:gap-4 md:items-center ">
          <div className="w-full md:w-fit lg:w-1/3 h-full px-2 md:py-2 relative mb-auto">
            <div className="max-w-[164px] mb-3">
              {sales && <FooterLogo kind={kind} />}
              {mctekk && <img src="/images/McLogo.svg" />}
              {kanvas && <img src="/images/klogof.png" />}
              {gewaer && <img src="/images/Gewaer.svg" />}
              {gewaerEs && <img src="/images/Gewaer.svg" />}
            </div>
            <h4 className="hidden md:block text-[0.75rem]">
              <FooterRights
                kanvas={kanvas}
                mctekk={mctekk}
                gewaer={gewaer}
                gewaerEs={gewaerEs}
              />
            </h4>
            {sales && (
              <FooterList
                kind={kind}
                hideTitle
                className="block md:hidden"
                title={footerLinks.salesAssist.title}
                links={footerLinks.salesAssist.links}
              />
            )}
            {mctekk && (
              <FooterList
                kind={kind}
                hideTitle
                className="block md:hidden"
                title={footerLinks.mctekk.title}
                links={footerLinks.mctekk.links}
              />
            )}
            {kanvas && (
              <>
                <FooterList
                  kind={kind}
                  hideTitle
                  className="block md:hidden"
                  title={footerLinks.kanvas.title}
                  links={footerLinks.kanvas.links}
                />
                <FooterList
                  kind={kind}
                  title={footerLinks.kanvasContact.title}
                  className=" md:hidden text-left  lg:text-right   mt-9 lg:mt-0 md:mt-0"
                  links={footerLinks.kanvasContact.links}
                  direction="text-left lg:text-right "
                />
              </>
            )}
            {gewaer && (
              <FooterList
                kind={kind}
                hideTitle
                className="block md:hidden"
                title={footerLinks.gewaer.title}
                links={footerLinks.gewaer.links}
              />
            )}
            {gewaerEs && (
              <FooterList
                kind={kind}
                hideTitle
                className="block md:hidden"
                title={footerLinks.gewaerEs.title}
                links={footerLinks.gewaerEs.links}
              />
            )}
          </div>
          {/* links */}
          {sales && <FooterLinks sales />}
          {mctekk && (
            <>
              <FooterLinks mctekk />
            </>
          )}{" "}
          {kanvas && (
            <>
              <FooterLinks kanvas />
            </>
          )}
          {gewaer && (
            <>
              <FooterLinks gewaer />
            </>
          )}
          {gewaerEs && (
            <>
              <FooterLinks gewaerEs />
            </>
          )}
        </div>
        {/* more about */}
        <div
          className={`flex-col md:flex-row flex-grow md:border-t ${
            mctekk && "border-gray-800"
          }  w-full flex md:items-start md:justify-between gap-6 px-2 md:px-0 md:py-2`}
        >
          {/* useful links */}
          <div className=" w-1/6 border block md:hidden"></div>

          {kanvas ? (
            <a href="http://mctekk.com/">Made With 💙 By mctekk </a>
          ) : mctekk ? (
            <div className="md:w-1/2 h-full flex items-start md:gap-6 md:justify-start flex-col md:flex-row ">
              {[{ name: "Privacy Policy", path: "/privacy-policy" }].map(
                (link) => (
                  <NextLink key={link.path} passHref href={link.path}>
                    <p className="px-0 ">{link.name}</p>
                  </NextLink>
                )
              )}
            </div>
          ) : gewaer || gewaerEs ? (
            <a href="http://mctekk.com/">Made With 💜 By mctekk </a>
          ) : (
            <div className="md:w-1/2 h-full flex items-start md:gap-6 md:justify-start flex-col md:flex-row ">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },

                { name: "Terms of Service", path: "/terms-of-service" },
              ].map((link) => (
                <NextLink key={link.path} passHref href={link.path}>
                  <p className="px-0 ">{link.name}</p>
                </NextLink>
              ))}
            </div>
          )}

          {/* social media */}
          <div className="md:w-1/2 h-full flex justify-end gap-2 md:gap-6 flex-col md:flex-row w-full md:pb-12">
            <h4 className="block md:hidden text-[0.75rem] text-gray-400">
              <FooterRights
                kanvas={kanvas}
                gewaer={gewaer}
                mctekk={mctekk}
                gewaerEs={gewaerEs}
              />
            </h4>
            {sales && <FooterSocials kind={kind} sales />}
            {mctekk && <FooterSocials kind={kind} />}
            {kanvas && <FooterSocials kind={kind} kanvas />}
            {gewaer && <FooterSocials kind={kind} gewaer />}
          </div>
        </div>
      </div>
    </footer>
  );
}
