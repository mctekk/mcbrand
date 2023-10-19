import React from "react";
import { DashedAnimation } from "../animations/animatedTriangle";
import { IconBox } from "../icon-box";
import { useProgressWithInView } from "@/model/interactions/use-progress-in-view";

type Props = {};

export default function BenefitsTriangle({}: Props) {
  const { isActive, currentStatus, progressLeft,  } =
    useProgressWithInView();
  return (
    <div className="md:w-1/2 w-full md:h-full  pt-12 relative flex items-center justify-center">
      <div className="flex-col gap-6 md:gap-0 items-center justify-center flex max-w-sm relative w-full">
        <DashedAnimation active={currentStatus.current} />
        <div className="flex items-center h-fit w-full justify-center md:px-16 md:justify-start cursor-not-allowed">
          <IconBox
            text="Business"
            className="cursor-default"
            icon="/images/Business_Icon.svg"
            isActive={isActive(0)}
            progress={progressLeft}
          />
        </div>

        <div className="flex items-center h-fit w-full justify-between px-12 md:justify-end">
          <IconBox
            text="Salespeople"
            icon="/images/SA_Sales_Icon.svg"
            isActive={isActive(1)}
            className="order-2 md:order-1 cursor-default"
            progress={progressLeft}
          />

          <IconBox
            text="Customer"
            icon="/images/SA_Customer_Icon.svg"
            className="md:hidden cursor-default"
            isActive={isActive(2)}
            progress={progressLeft}
          />
        </div>

        <div className="w-full flex items-center  ">
          <IconBox
            text="Customer"
            icon="/images/SA_Customer_Icon.svg"
            className="hidden md:flex md:flex-col cursor-default"
            isActive={isActive(2)}
            progress={progressLeft}
          />
        </div>
      </div>
    </div>
  );
}
