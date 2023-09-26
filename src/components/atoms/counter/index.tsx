import { PropsWithChildren, FC, Children } from "react";


interface CounterProps {
    enable?: {
        add?: boolean,
        remove?: boolean
    },
    add: () => void,
    remove: () => void,
}

export const Counter: FC<PropsWithChildren<CounterProps>> = ({ children, enable = { remove: true, add: false }, add, remove }) => {
    return (
        <div className="flex mt-3 gap-4 items-center h-[2rem]">
        Unlimited users


        </div>
    )
}
