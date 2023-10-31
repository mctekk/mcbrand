import classNames from 'classnames';

import { Section } from '@/components/atoms/section';
import {  InstantChangesMobile } from '@/components/molecules/instantInfo';
import { InstantChangesDesktop } from '@/components/molecules/instantInfo';
import { ColumnData, ColumnDataDesk } from '@/model/types';


interface Props {
  title:string
  className?: string;
  columnsData: ColumnData[];
  leadingData: ColumnDataDesk[];
  ratesData: ColumnDataDesk[];
}


export function InstantChanges({ className,title,columnsData,leadingData,ratesData }: Props) {
  return (
    <section className={classNames('flex flex-col h-full lg:px-12 pb-6 lg:pb-20', className)}>
      <Section className='container mx-auto'>
        <div className='flex items-center justify-center flex-col gap-6'>
          <div className='pt-6 lg:pt-20 items-center flex flex-col'>
            <h1 className='pb-6 md:pb-10 font-semibold md:leading-10 tracking-tight	lg:self-center'>
             {title}
            </h1>
            <div className='flex lg:hidden'>
             <InstantChangesMobile  columnsData={columnsData}/>
             </div>
             <div className=' hidden lg:flex'>
             <InstantChangesDesktop  leadingData={leadingData} ratesData={ratesData} />
             </div>
          </div>
        </div>
      </Section>
    </section>
  )
}
