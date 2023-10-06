import { translate } from '@/locales';
import Image from 'next/image';
import Column from '@/components/atoms/column';
import Leading from '@/components/atoms/leading';
import Rates from '@/components/atoms/rates';

export function InstantChangesDesktop() {
  return (
    <div className='text-center'>
      <div className='grid grid-cols-3 gap-10 w-full mb-4 justify-items-center'>
        <Image src="/images/Business_Icon.svg" alt='' width={150} height={24}/>
        <Image src="/images/SA_Sales_Icon.svg"  alt='' width={150} height={24}/>
        <Image src="/images/SA_Customer_Icon.svg"  alt='' width={105} height={24}/>
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

export function InstantChangesMobile() {
  return (
    <div className='grid grid-cols-1 gap-6'>
      <Column amount='+23%' title={translate("home.changes[0].title")} content={translate("home.changes[0].cont")} />
      <Column amount='15hrs+' title={translate("home.changes[1].title")} content={translate("home.changes[1].cont")} />
      <Column amount='+15%' title={translate("home.changes[2].title")} content={translate("home.changes[2].cont")} />
    </div>
  )
}


