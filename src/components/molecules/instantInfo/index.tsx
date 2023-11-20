import { translate } from "@/locales";
import Image from "next/image";
import Column from "@/components/atoms/column";
import Leading from "@/components/atoms/leading";
import Rates from "@/components/atoms/rates";
import { ColumnDataDesk, ColumnData } from "@/model/types";
interface InstantChangesDesktopProps {
  leadingData: ColumnDataDesk[];
  ratesData: ColumnDataDesk[];
}
interface InstantChangesMobileProps {
  columnsData: ColumnData[];
}

export function InstantChangesDesktop({ leadingData, ratesData }: InstantChangesDesktopProps) {
  const fixedImages = [
    "/images/Business_Icon.svg",
    "/images/SA_Sales_Icon.svg",
    "/images/SA_Customer_Icon.svg",
  ];

  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap-10 w-full mb-4 justify-items-center">
        {fixedImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt=""
            width={150}
            height={24}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-10 w-full mb-4">
        {leadingData.map((data, index) => (
          <Leading
            key={index}
            title={(data.title)}
            content={(data.content)}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-10 w-full text-orange-normal font-semibold">
        {ratesData.map((data, index) => (
          <Rates
            key={index}
            rate={data.title}
            title={data.content}
          />
        ))}
      </div>
    </div>
  );
}

export function InstantChangesMobile({
  columnsData,
}: InstantChangesMobileProps) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {columnsData.map((data, index) => (
        <Column
          key={index}
          amount={data.amount}
          title={data.title}
          content={data.content}
        />
      ))}
    </div>
  );
}
