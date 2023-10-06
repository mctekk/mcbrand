import { buildIcon } from "../../atoms/salesIcon";
import { industries } from "@/components/atoms/icons/saless";
import classNames from 'classnames';

interface IndustriesItemProps {
    code: string,
    kind: 'li' | 'div',
    name: string
}

export const IndustriesItem: React.FC<IndustriesItemProps> = ({ code, name, kind }) => {
    const liClasses = classNames('flex-1  p-2 text-center flex items-center justify-center flex-col infinity-x');
    const divClasses = classNames('w-1/2 md:w-1/3 p-2 text-center inline-flex items-center justify-center flex-col');
    
    function returnKind(child: JSX.Element) {
        if (kind === 'li') {
            return <li className={liClasses}>
                {child}
            </li>
        }

        return <div className={divClasses}>
            {child}
        </div>
    }

    return returnKind(
        <>
            <div className ="flex  items-center  justify-center rounded-full bg-gray-200 ">
                {buildIcon({ data: industries, code: code, fallback: <></>})}
            </div>
            <p className='mt-2 text-gray-300 '>{name}</p>
        </>
    )
}