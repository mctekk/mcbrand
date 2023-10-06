import React from "react";

interface RatesProps {
  rate: string;
  title: string;
}

export default function Rates({ rate, title }: RatesProps) {
  return (
    <div>
      <div className="text-[4rem] leading-[72px] text-orange-500">{rate}</div>
      <span className="text-[1.3rem] leading-6 text-orange-500">{title}</span>
    </div>
  );
}
