import classNames from 'classnames';
import React, { ReactNode } from 'react';


type Kind = 'orange' | 'purple' | 'normal' | string


interface CardProps {
  title: string;
  sub: string;
  className?: string;
  kind?: Kind;
  children?: ReactNode;
}

export function Card({ title, sub, className, kind = 'normal', children }: CardProps): JSX.Element {
  const cardClasses = classNames(
    "mb-6 pt-4 h-[25rem] w-[20rem] rounded-2xl bg-white overflow-hidden cursor-pointer flex duration-400 items-center flex-col",
    { 'bg-gradient-to-b from-[#FF333366] to-[#FF990066]': kind === 'orange' },
    { 'bg-gradient-to-b from-[#3360FF66] to-[#8B00AE66]': kind === 'purple' },
    className
  );

  return (
    <div className='block mr-6'>
      <div className={cardClasses}>
        {children}
        <div className='flex p-2 bg-white h-[9rem]'>
          <div className='h-full py-2 px-4'>
            <h3 className='text-[1rem] font-semibold text-black'>{title}</h3>
            <p className='text-gray-500 text-[0.825rem]'>{sub}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
