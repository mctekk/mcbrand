import { MdCheck } from "react-icons/md";
import { SiHackthebox } from "react-icons/si";
import { plansIcons } from "../icons/plans-icons";
import { buildIcon } from "../salesIcon";

import { Counter } from "../counter";
import usePricing from "@/model/interactions/use-pricing";
import { Plan } from "@/model/types";


interface PlanCardProps {
  plan: Plan;
  add?: () => {};
  remove?: () => {};
  annually?: boolean;
  price: number;
}

export function PlanCard({ plan, price }: PlanCardProps) {
  const { users, addUsers, removeUsers } = usePricing();

  return (
    <div
      key={plan.name}
      className="p-4 flex flex-col gap-4 bg-white w-full h-full rounded-xl"
    >
      <div className="w-16 h-16">
        {buildIcon({
          data: plansIcons,
          code: plan.code,
          fallback: <SiHackthebox />,
          size: { width: 64, height: 64 },
        })}
      </div>
      <div className="text-gray-900 flex flex-col ">
        <div className="mb-2.5">
          <h1 className=" font-bold text-[34px] leading-none">{plan.name}</h1>
          <p className="text-[0.90rem]">{plan.desc}</p>
        </div>
        <div className="w-10 h-[3px] bg-gray-300 rounded-sm" />
        <div className="flex items-start min-h-[120px]">
          {!plan.custom && (
            <div className="flex flex-col items-start gap-1 mt-5 h-[45%] justify-between">
              <p className="text-sm">{plan.starting_at?.name}</p>
              <span className="text-gray-900 flex items-end">
                <h3 className="font-bold text-[34px]">${price}</h3>
                /mo
              </span>
              <Counter
                enable={{
                  remove: plan.users === users,
                  add: plan.limit === users,
                }}
                add={addUsers}
                remove={removeUsers}
              ></Counter>
            </div>
          )}

          {plan.custom && (
            <div className="text-gray-900 mt-5">
              <p className="text-gray-500 ">{plan.custom.contact_us}</p>
              <h3 className="font-bold text-[34px]">{plan.custom.pricing}</h3>
              <div className="mt-3 flex items-center">
                <p className="text-gray-500  ">{plan.custom.users}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
      {/* perks */}
      <ul className=" text-gray-900">
        {plan.perks.map((perk) => (
          <li key={perk.name} className="last:mb-0 mb-2">
            <span className="font-">{perk.perk}</span>{" "}
            <span className="text">{perk.name}</span>
          </li>
        ))}
      </ul>
      {/* features */}
      <div className="text-sm flex flex-col gap-2">
        <span className="font-semibold">{plan.features.name}</span>
        <ul className="text-gray-500">
          {plan.features.perks.map((perk, i) => {
            return (
              <li
                className="flex gap-2 items-center mb-2 last:mb-0"
                key={i + "perk"}
              >
                <MdCheck className="text-green-600" />
                {perk}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
