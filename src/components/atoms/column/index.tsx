
import React from 'react'

interface ColumnProps {
    amount: string;
    title: string;
    content: string;
  }


export default function Column({ amount, title, content }: ColumnProps ) {
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


  