import Image from 'next/image'
import classNames from 'classnames';


interface IconBoxProps {
    text: string,
    icon: string,
    isActive?: boolean,
    className?: string,
    onClick?: () => void,
    progress?: number,
}
export const IconBox: React.FC<IconBoxProps> = (props) => {
    const { text, icon, isActive, className, onClick, progress } = props;
    const baseClass = classNames('w-fit h-fit text-center duration-700 transition-all relative',
        className
    );
    const imageClass = classNames('relative flex items-center justify-center h-24 w-24 rounded-full p-3  transition-all duration-500 overflow-hidden  ', {
        'border-orange-500': isActive,
        'border-transparent': !isActive,
    });

    const textClass = classNames('my-2 transition-all duration-500', { 'opacity-50': !isActive })

    return (
        <button className={baseClass} onClick={onClick}>
            <div className={imageClass}>
                <div className='absolute inset-0 rounded-full '>
                    {isActive && <svg viewBox="0 0 160 160" className='transform -rotate-90'>
                        <circle
                            className="percent fifty stroke-orange-500 "
                            cx="80" cy="80" r="72"
                            fill="none"
                            strokeWidth="4"
                            pathLength="100"
                            strokeDashoffset={progress || 100}
                            strokeDasharray={100}
                        />
                    </svg>}
                </div>
                <div className='bg-white w-full h-full rounded-full flex items-center justify-center p-2'>
                    <Image width={64} height={64} src={icon} alt={text} />
                </div>
            </div>
            <h4 className={textClass}>{text}</h4>
        </button>
    )
}
