import { BsBarChartFill } from 'react-icons/bs'
import { buildIcon } from '@/components/atoms/salesIcon';

import { calendlyLink } from '@/model/api/routes-data/data'; 
import { Section } from '@/components/atoms/section';
import { simplifySales } from '@/components/atoms/icons/simplify-sales';
import { WhySalesAssistCompleteSalesPainlessSection } from '@/model/types';

interface Props{
  data:WhySalesAssistCompleteSalesPainlessSection
}

export function WhySalesAssistCompletingSalesIsPainless({ data}: Props) {
  return (
    <section className='section flex flex-col relative bg-zinc-800 text-white'>
      <Section className='container gap-6 md:gap-12 py-6 mx-auto flex-col h-full flex xl:w-3/5 md:w-full'>
        <div className='w-full'>
          <h1>{data.title}</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12  md:mb-12'>
          {
            data.bullet_points.map((k) => {
              return <div key={k.code} className='flex flex-col gap-4 bg-zinc-700 rounded-xl px-5 pt-4 pb-6 w-full'>
                <div className='leading-[0] w-12 h-12 ' >
                  {buildIcon({ data: simplifySales, code: k.code, fallback: <BsBarChartFill />, })}
                </div>
                <div>
                  <h3 className='mb-1'>{k.title}</h3>
                  <p className='text-[1.25rem]'>{k.desc}</p>
                </div>
              </div>
            })
          }
        </div>
        {/* banner */}
        <div className='w-full px-6 flex-wrap md:px-12 py-8 flex items-center justify-between rounded-lg bg-gradient-to-br from-[#F87129] via-[#F87129] to-[#FFA742] text-white'>
          <h1 className='text-[1.25rem] font-semibold'>{data.banner.text}</h1>
          <div className='my-6 border-2 border-transparent'></div>

          <a href={calendlyLink} target="_blank" rel="noreferrer">
            <button className='p-2 px-3 font-medium rounded-md bg-white text-orange-500'>
              {data.banner.cta}
            </button>
          </a>
        </div>
      </Section>
    </section>
  )
}

