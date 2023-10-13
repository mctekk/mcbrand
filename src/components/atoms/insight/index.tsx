import React, { ReactNode } from 'react';

import { MdInsights } from "react-icons/md"
import classNames from 'classnames';

interface InsightProp {
    text: string,
    children?: ReactNode;
    className?: string,
    isActive?: boolean,
}

export function Insight({ text, children, className, isActive }: InsightProp) {
    const baseClass = classNames('duration-400', {'opacity-40': !isActive}, className);
    return (
        <div className={baseClass}>
            <div className="flex items-center mb-4">
                <MdInsights className="text-[1.5rem]" />
                <h4 className="ml-3 font-bold">{text}</h4>
            </div>
            <div className="pl-12 md:p-0 xl:w-2/3">
                <h5 className="text-white">{children}</h5>
            </div>
        </div>
    )
}
