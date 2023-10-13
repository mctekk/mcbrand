import Image from 'next/image';
import { Section } from '@/components/atoms/section';
import { translate } from '@/locales';


export function Customers() {
  return (
    <section className='section bg-white'>
      <Section className='flex flex-col md:flex-row gap-4 md:gap-20 items-center xl:4/5 2xl:w-3/5 w-full'>
        <div className='flex flex-col gap-6'>
          <h1>
            {translate("whySalesAssist.Customers.title")}
          </h1>
          <h4>
          {translate("whySalesAssist.Customers.desc")}
          </h4>
        </div>
        <div className='shrink-0 md:w-[440px] md:h-[345px] rounded-lg drop-shadow-sa overflow-hidden'>
          <Image alt='Simple to Use by Customers Example' src="/images/simple-to-use-by-customers.jpg" width={600} height={300} />
        </div>
      </Section>
    </section>
  )
}