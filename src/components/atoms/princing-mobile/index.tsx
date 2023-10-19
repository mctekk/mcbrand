import { PricingData } from "@/model/api/princing-data/data";
import React from "react";
import { MdCheck } from "react-icons/md";
import { SiHackthebox } from "react-icons/si";
import { plansIcons } from "../icons/plans-icons";
import { buildIcon } from "../salesIcon";
import usePricing from "@/model/interactions/use-pricing";

import ButtonPlans from "../plan-buttons";
import { Counter } from "../counter";

export default function PricingMobile() {
  const { currentActive, current, price, handleIsActive, handleIsAnnually,addUsers,removeUsers,users } =
    usePricing();
  return (
    <div>
        <div className="flex justify-center ">
        <ButtonPlans currentActive={currentActive} handleIsAnnually={handleIsAnnually}></ButtonPlans>
        </div>
      <div className="py-2 w-full">
        <div className="w-full flex items-end h-full">
          {PricingData.plans.map((plan, index) => {
            return (
              <div key={index} className="w-full flex flex-col items-end">
                <button
                  onClick={handleIsActive(index)}
                  className={`px-1 py-4 text-left duration-300 h-full w-full border-b-2 ${
                    current === index ? "border-orange-500" : ""
                  }`}
                >
                  <h4 className="text-gray-900">{plan.name}</h4>
                  <p className="text-gray-500 text-[0.805rem]">
                    {plan.code !== "ENTPRS"
                      ? "$" +
                        (currentActive === "year"
                          ? +plan.starting_at.year
                          : plan.starting_at.month) +
                        "/mo"
                      : "Custom"}
                  </p>
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full  p-4 flex-col gap-6">
          <div className="w-full flex flex-col gap-1">
            <div className="w-full">
              {buildIcon({
                data: plansIcons,
                code: PricingData.plans[current].code,
                fallback: <SiHackthebox className="text-[2rem]" />,
                size: { width: 64, height: 64 },
              })}
            </div>
            <h1 className="text-gray-900 mb-2 font-semibold">
              {PricingData.plans[current].name}
            </h1>
            <p className=" text-gray-500">{PricingData.plans[current].desc}</p>
            <div className="w-1/6 border-b mt-4" />
          </div>
          <div>
            {!PricingData.plans[current].custom && (
              <div className="flex flex-col items-start gap-1 my-2">
                <p className="text-[0.805rem]">
                  {PricingData.plans[current].starting_at?.name}
                </p>
                <span className="text-gray-900 flex items-end">
                  <h1 className="font-semibold">${price}</h1>
                  /mo
                </span>
                <Counter
                  enable={{
                    remove: PricingData.plans[current].users === users,
                    add: PricingData.plans[current].limit === users
                  }}
                  add={addUsers}
                  remove={removeUsers}
                ></Counter>
              </div>
            )}

            {PricingData.plans[current].custom && (
              <div className="text-gray-900 my-2 mb-5">
                <p className="text-gray-500">
                  {PricingData.plans[current].custom?.contact_us}
                </p>
                <h1 className="font-semibold">
                  {PricingData.plans[current].custom?.pricing}
                </h1>
                <p className="text-gray-500">
                  {PricingData.plans[current].custom?.users}
                </p>
              </div>
            )}
          </div>
          <div className="my-4 mb-6">
            {PricingData.plans[current].perks.map((perk) => {
              return (
                <div className="" key={perk.name}>
                  <b>{perk.perk}</b> {perk.name}
                </div>
              );
            })}
          </div>

          <div className="my-4 mb-6">
            <h3 className="text-gray-900 font-medium">
              {PricingData.plans[current].features.name}
            </h3>
            {PricingData.plans[current].features.perks.map((perk) => {
              return (
                <div className="flex gap-2 items-center" key={perk}>
                  <MdCheck className="text-green-600" /> {perk}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
