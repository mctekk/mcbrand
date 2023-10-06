import { translate } from '@/locales';
import Image from 'next/image';

interface ColumnProps {
    amount: string;
    title: string;
    content: string;
  }
  
  const Column = ({ amount, title, content }: ColumnProps ) => {
    return (
      <div className='flex gap-4'>
        <div className='w-[92px] text-[28px] font-semibold text-orange-normal leading-[34px] shrink-0 text-orange-500'>
          { amount }
        </div>
        <div>
          <h3 className=' leading-[24px] text-[1.2rem] font-semibold'>{ title }</h3>
          <span className='text-[1.1rem] leading-[24px] text-gray-400 '>{ content }</span>
        </div>
      </div>
    )
  }
  
  export const InstantChangesMobile = () => {
    return (
      <div className='grid grid-cols-1 gap-6'>
        <Column amount='+23%' title={translate("home.changes[0].title")} content={translate("home.changes[0].cont")} />
        <Column amount='15hrs+' title={translate("home.changes[1].title")} content={translate("home.changes[1].cont")} />
        <Column amount='+15%' title={translate("home.changes[2].title")} content={translate("home.changes[2].cont")} />
      </div>
    )
  }



interface LeadingProps {
  title: string;
  content: string;
}

interface RatesProps {
  rate: string;
  title: string;
}



function Leading({ title, content }: LeadingProps) {
    return (
      <div>
        <h3 className='font-semibold text-[1.5rem] leading-6'>{title}</h3>
        <span className='flex justify-center leading-6 text-gray-400 font-medium text-[1.3rem]'>{content}</span>
      </div>
    );
  }

const Rates = ({ rate, title }: RatesProps) => {
  return (
    <div>
      <div className='text-[4rem] leading-[72px] text-orange-500'>{ rate }</div>
      <span className='text-[1.3rem] leading-6 text-orange-500'>{ title }</span>
    </div>
  )
}

export const InstantChangesDesktop = () => {
  return (
    <div className='text-center'>
      <div className='grid grid-cols-3 gap-10 w-full mb-4 justify-items-center'>
        <Image src="/images/Business_icon.svg" alt='' width={150} height={24}/>
        <Image src="/images/SA_Sales_icon.svg"  alt='' width={150} height={24}/>
        <Image src="/images/SA_Customer_icon.svg"  alt='' width={105} height={24}/>
      </div>
      <div className='grid grid-cols-3 gap-10 w-full mb-4'>
        <Leading title={translate("home.changes[0].title")} content={translate("home.changes[0].cont")} />
        <Leading title={translate("home.changes[1].title")} content={translate("home.changes[1].cont")} />
        <Leading title={translate("home.changes[2].title")} content={translate("home.changes[2].cont")} />
      </div>
      <div className='grid grid-cols-3 gap-10 w-full text-orange-normal font-semibold'>
        <Rates rate='+23%' title='Closing Rate' />
        <Rates rate='15hrs+' title='Saved Per Person Per Month' />
        <Rates rate='+15%' title='Positive Reviews' />
      </div>
    </div>
  )
}


