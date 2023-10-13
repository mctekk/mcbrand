
import { ShowCase, Options } from "@/model/types";
import classNames from "classnames";
import React from "react";
type StepButtonProps = {
  data: {
    title: string;
    desc: string;
    options: Options;
    show_case: ShowCase[];
  };
  currentStep: any;
  clickOnCard: (step: number) => () => void;
  progressLeft: number;
};

function StepButton({
  data,
  currentStep,
  clickOnCard,
  progressLeft,
}: StepButtonProps) {
  const getClasses = (step: number) => {
    return classNames(
      "w-fit h-fit flex py-2 px-4 rounded-full justify-center items-center duration-500 transition-all",
      { "bg-orange-500": currentStep.current === step },
      { "bg-zinc-700": currentStep.current !== step }
    );
  };

  return (
    <div className="p-2 flex w-full justify-between items-center gap-4">
      <button className={getClasses(0)} onClick={clickOnCard(0)}>
        <span>
          1<span className="hidden md:inline">. {data.options.select}</span>
        </span>
      </button>
      <div className="w-1/6 md:w-[10%] h-1 rounded-full bg-white overflow-hidden">
        {currentStep.current === 0 && (
          <div
            style={{ transform: `translateX(${-progressLeft}%)` }}
            className="bg-orange-500 w-full h-full rounded-full"
          ></div>
        )}
      </div>
      <button className={getClasses(1)} onClick={clickOnCard(1)}>
        <span>
          2<span className="hidden md:inline">. {data.options.customize}</span>
        </span>
      </button>
      <div className="w-1/6 md:w-[10%] h-1 rounded-full bg-white overflow-hidden">
        {currentStep.current === 1 && (
          <div
            style={{ transform: `translateX(${-progressLeft}%)` }}
            className="bg-orange-500 w-full h-full rounded-full"
          ></div>
        )}
      </div>
      <button className={getClasses(2)} onClick={clickOnCard(2)}>
        <span>
          3<span className="hidden md:inline">. {data.options.add}</span>
        </span>
      </button>
    </div>
  );
}

export default StepButton;
