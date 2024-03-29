import React from "react";

interface Goal {
  id: number;
  description: string;
}

interface GoalsListProps {
  goals: Goal[];
  title?: string;
}

function GoalsList({ goals,title }: GoalsListProps): JSX.Element {
  function renderGoals(): JSX.Element[] {
    return goals.map((goal) => (
      <li key={goal.id} className="mb-2">
        {goal.description}
      </li>
    ));
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-3xl mx-auto ">
      {title && <p className="text-left  xl:text-[40px] text-[30px] font-semibold  mb-5">{title}</p>}
      <ul className="list-disc pl-8 xl:text-[24px] text-[20px]">{renderGoals()}</ul>
    </div>
  );
}

export default GoalsList;
