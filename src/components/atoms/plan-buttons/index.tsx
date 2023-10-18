import { translate } from '@/locales';
import classNames from 'classnames';
import React from 'react'

type Props = {
    handleIsAnnually: any,
    currentActive : "year" |"month"
}
function buttonClass(isActive: boolean) {
    return classNames('p-4 py-2 rounded-md font-semibold duration-500 transition-all relative shadow', { 'bg-white text-orange-500': !isActive }, { 'bg-orange-500 text-white': isActive });
  }

export default function ButtonPlans({handleIsAnnually,currentActive}: Props) {
  return (
    <div className="flex items-center justify-center gap-6 py-6 md:py-0 h-[4rem]">
     <button onClick={handleIsAnnually('year')} className={buttonClass(currentActive === 'year')}>
       <span className="absolute -left-6 -top-4 bg-[#F2994A] px-3 rounded-lg text-white text-[0.805rem] font-normal">20% off</span>
      {translate('pricing.pricingData.planButtons.annually')}
     </button>
     <button onClick={handleIsAnnually('month')} className={buttonClass(currentActive === 'month')}> {translate('pricing.pricingData.planButtons.monthly')}</button>
   </div>
  )
}