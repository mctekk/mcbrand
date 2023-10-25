import Header from "@/components/organism/header";
import { Section } from "@/components/atoms/section";
import { translate } from "@/locales";
import Menu from "@/components/molecules/menu";

export function PricingHero() {
  return (
    <div className="h-full flex flex-col  pb-12 lg:px-12">
      <Header
        menu={<Menu></Menu>}
        logo="/images/logo.png"
        iconColor="text-black"
      />
      ,
      <div className="section">
        <Section className="flex-grow flex items-center justify-start flex-col gap-5 xl:w-2/3">
          <div className="bold w-full text-center">
            <h2 className="text-gray-900 md:text-4xl font-semibold mb-4 text-[2.25rem] ">
              {translate("pricing.pricingHero.title")}
            </h2>
            <p className="text-gray-500 text-[24px]">
              {translate("pricing.pricingHero.desc")}
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
