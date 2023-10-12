import { useResponsive } from '@/model/interactions/use-responsive/useResponsive';
import classNames from 'classnames';


interface DashedAnimationsProps {
    active: 'one' | 'two' | 'tree' | 'idle';
}

export function DashedAnimation ({ active = 'idle' }: DashedAnimationsProps) {
    const { isMobile, isTablet, isDesktop } = useResponsive();
    const lineOne = classNames('stroke-gray-300', { 'path': active === 'one' })
    const lineTow = classNames('stroke-gray-300', { 'r-path': active === 'two' })
    const lineThree = classNames('stroke-gray-300', { 'path': active === 'tree' })


    return (<div className="absolute inset-0">
       {isDesktop && <svg viewBox="0 0 150 150" className='p-4'>
            <line className={lineOne} strokeDasharray={3} strokeWidth={.5} x1="55" y1="25" x2="115" y2="70" />
            <line className={lineTow} strokeDasharray={3} strokeWidth={.5} x1="30" y1="125" x2="110" y2="75" />
            <line className={lineThree} strokeDasharray={3} strokeWidth={.5} x1="15" y1="120" x2="35" y2="45" />
        </svg>}

        {isTablet && <svg viewBox="0 0 150 150" className='p-4'>
            <line className={lineOne} strokeDasharray={3} strokeWidth={.5} x1="55" y1="20" x2="115" y2="85" />
            <line className={lineTow} strokeDasharray={3} strokeWidth={.5} x1="30" y1="130" x2="110" y2="70" />
            <line className={lineThree} strokeDasharray={3} strokeWidth={.5} x1="15" y1="135" x2="35" y2="45" />
        </svg>}

        {isMobile && <svg viewBox="0 0 150 150" className='p-4'>
            <line className={lineOne} strokeDasharray={4} strokeWidth={.5} x1="85" y1="25" x2="115" y2="70" />
            <line className={lineTow} strokeDasharray={4} strokeWidth={.5} x1="30" y1="85" x2="100" y2="85" />
            <line className={lineThree} strokeDasharray={4} strokeWidth={.5} x1="35" y1="75" x2="75" y2="0" />
        </svg>}
    </div>

    )
}
