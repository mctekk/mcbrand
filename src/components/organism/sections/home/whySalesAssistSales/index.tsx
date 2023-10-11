import { IndustriesItem } from "@/components/molecules/industries";

interface Business {
  code: string;
  name: string;
}

interface SalesData {
  title: string;
  industries: Business[];
}

export function WhySalesAssistSalesProcess({ data }: { data: SalesData }) {
  return (
    <section className="bg-white h-full section md:pt-20">
      <div className="py-6 text-center">
        <h1 className="font-semibold text-2xl">{data.title}</h1>
      </div>
      <div className="slider-container container mx-auto lg:flex hidden">
        <div className="slider-inside">
          <ul className="infinity-x-container">
            {data.industries.map((business) => (
              <IndustriesItem
                key={business.code}
                code={business.code}
                name={business.name}
                kind="li"
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="ml-9 lg:hidden relative ">
        {data.industries.map((business) => (
          <IndustriesItem
            key={business.code}
            code={business.code}
            name={business.name}
            kind="div"
          />
        ))}
      </div>
    </section>
  );
}
