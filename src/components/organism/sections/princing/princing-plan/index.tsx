import { PlanCard } from "@/components/atoms/plan-card";
import { MdArrowDropDown } from "react-icons/md";
import { PricingData } from "@/model/api/princing-data/data";
import { motion } from 'framer-motion';


import { Section } from "@/components/atoms/section";
import usePricing from "@/model/interactions/use-pricing";

import PricingMobile from "@/components/atoms/princing-mobile";
import ButtonPlans from "@/components/atoms/plan-buttons";

interface PricingHeroProps {
  isClicked: boolean,
  onClick: () => void
}

export function PricingPlans({ isClicked, onClick }:PricingHeroProps) {
    const {handleIsAnnually,currentActive, getDelay,} = usePricing();

 
  return (
    <div className='h-full flex flex-col   md:pb-12'>
      <Section className='flex items-center justify-center flex-col gap-5 mx-auto '>
        <div className="hidden md:flex items-center justify-center">
       <ButtonPlans currentActive={currentActive} handleIsAnnually={handleIsAnnually} ></ButtonPlans>
       </div>
        <div className='hidden relative overflow-x-auto overflow-y-hidden lg:w-[50rem] xl:w-3/4 md:flex gap-5 md:items-start md:justify-center h-[46rem] lg:flex  '>
          {PricingData.plans.map((plan, i) => <motion.div className="w-1/2 h-full" initial={{ translateY: 100, opacity: 0 }} transition={{ duration: .5, ease: 'linear', delay: getDelay(i) }} viewport={{ once: true }} animate={{ translateY: 0, opacity: 1 }} key={plan.name}>
            <PlanCard plan={plan} annually={currentActive === 'year'} price={plan.starting_at[currentActive]} />
          </motion.div>)}
        </div>
        <div className="md:hidden flex justify-center" ><PricingMobile></PricingMobile></div>
       

        {!isClicked && <motion.button initial={{ translateY: 100, opacity: 0 }} transition={{ duration: .5, ease: 'linear', delay: 1 }} viewport={{ once: true }} animate={{ translateY: 0, opacity: 1 }} onClick={onClick} className="p-4 py-6 md:w-3/4 bg-white rounded-lg flex items-center justify-center gap-1 border md:border-none mt-6">
          See Full Feature Comparison <MdArrowDropDown />
        </motion.button>}
      </Section>
    </div>
  )
}
