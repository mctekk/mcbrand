
import { whySalesAssistHero } from '@/components/atoms/icons/why-sales-assist-hero';
import { buildIcon } from '@/components/atoms/salesIcon';
import { Section } from '@/components/atoms/section';
import { WhySalesAssistHeroSection } from '@/model/types';

  type WhySalesAssistHeroProps = {
    data: WhySalesAssistHeroSection;
  };

  export function WhySalesAssistHero({ data }: WhySalesAssistHeroProps) {
  return (
    <header className='h-full px-4 flex flex-col section lg:pb-12 lg:px-12'>
      <Section className='flex-grow flex items-center justify-center flex-col gap-12'>
        <div className='text-center w-full'>
          <h1 className=' font-bold mb-6'>{data.title}</h1>
          <p className='mx-auto md:px-6 text-gray-400 text-[0.875rem] md:text-[1.25rem] max-w-5xl'>{data.desc}</p>
        </div>
        <div className='grid md:grid-cols-3 gap-5 pb-12'>
          {/* list of things here */}
          {
            data.reasons.map(singleCard => {
              return <>
                <div className='p-4 rounded-md bg-white lg:w-80'>
                  <div className='w-12 h-12 rounded-full'>
                    {buildIcon({ data: whySalesAssistHero, code: singleCard.code, fallback: <></> })}
                  </div>
                  <div className='pt-2'>
                    <p className='text-[0.875rem] md:text-[1.25rem] font-semibold'>{singleCard.title}</p>
                    <p className='text-[0.875rem] md:text-[1.25rem] text-gray-400'>{singleCard.desc}</p>
                  </div>
                </div>
              </>
            })
          }
        </div>
      </Section>
    </header>
  )
}
