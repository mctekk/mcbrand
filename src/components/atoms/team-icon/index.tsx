import { RiLinkedinBoxFill } from 'react-icons/ri';
import Image from 'next/image';
import { buildIcon } from '../salesIcon';
import { team } from '../icons/team';

interface TeamIconProps {
  src?: string,
  title: string,
  name: string,
  link: string,
  code?: string
  mctekk?:boolean
}

export const TeamIcon: React.FC<TeamIconProps> = ({ src, title, name, link, code,mctekk }) => {
  if (code && src) throw new Error(`you cannot use src and code at the same time`)
  return (
    <div className={`w-2/5 gap-4 md:w-1/3 lg:w-1/6 flex items-center justify-center flex-col mx-auto md:mx-0 mb-6 p-2 md:p-9 ${mctekk && "bg-gray-200 "} `}>
      <div className='relative h-20 w-20 rounded-full overflow-hidden flex items-center justify-center '>
        {src && <Image src={src} width={64} height={64} alt='name' />}
        {code && buildIcon({
          data: team,
          code,
          fallback: <></>,
         
        })
        }
      </div>
      <div className='flex items-center justify-center flex-col'>
        <div>
          <h3 className='font-medium text-[0.805rem] lg:text-[0.96rem] inline mr-1  '>{name}</h3>
          <a href={link} className='inline-svg -mt-1'>
            <RiLinkedinBoxFill />
          </a>
        </div>
        <p className='text-gray-500 text-[0.825rem] text-center'>{title}</p>
      </div>
    </div>
  )
}
