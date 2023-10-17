
import classNames from "classnames";
import React from "react";
type StepButtonProps = {
  options: string[];
  currentStep: any;
  clickOnCard: (step: number) => () => void;
  progressLeft: number;
};

function StepButton({
  options,
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
console.log(currentStep)
  return (
    <div className="p-2 flex w-full justify-between items-center gap-4">
      {options.map((step, index) => (
        <React.Fragment key={index}>
          <button className={getClasses(index)} onClick={clickOnCard(index)}>
            <span>
              {index +1}
              <span className="hidden md:inline">. {step}</span>
            </span>
          </button>
          {index < options.length - 1 && (
            <div className="w-1/6 md:w-[10%] h-1 rounded-full bg-white overflow-hidden">
              {currentStep.current == index && (
                <div
                  style={{ transform: `translateX(${-progressLeft}%)` }}
                  className="bg-orange-500 w-full h-full rounded-full"
                ></div>
              )}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default StepButton;
