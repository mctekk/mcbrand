import React from 'react'
import classNames from 'classnames';

import { buildIcon } from '../../salesIcon';
import { howItWorksIcons } from '../../icons/animated-card';
interface AnimatedCardProps {
  title: string;
  sub: string,
  code: string 
  isActive?: boolean,
  progress: number,
  onClick?: () => void,
}

export function AnimatedCard({ title, sub, code, isActive, progress, onClick }: AnimatedCardProps) {
  const baseClasses = classNames("group rounded-2xl cursor-pointer w-full md:w-[33rem] h-[10.5rem] flex overflow-hidden duration-400",
    {'bg-white': isActive },
    {'opacity-70 bg-gray-100': !isActive}
  );
  const progressClass = classNames("h-full w-6 duration-300 rounded-bl rounded-lg");
  return (
    <button
      className={baseClasses}
      onClick={onClick}
    >
      <div className={progressClass}>
        {isActive && <div style={{ transform: `translate(0, -${progress}%)`}} className='w-full h-full rounded-lg bg-orange-500 transform-gpu transition-all duration-300'  />}
      </div>
      <div className='flex h-full p-2 py-4 items-start gap-2'>
        <div className='flex justify-center'>
          <div className='w-20 h-20 rounded-full'>
            {buildIcon({ data: howItWorksIcons, code, fallback: <></>, size: { width: 64, height: 64 }})}
          </div>
        </div>
        <div className='h-full text-left'>
          <h3 className=' text-black text-[1.105rem]'>{title}</h3>
          <p className='text-gray-500 text-[1.105rem]'>{sub}</p>
        </div>
      </div>
    </button>
  )
}
