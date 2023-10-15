
import { MdAdd, MdRemove } from "react-icons/md";

interface CounterProps {
    enable?: {
        add?: boolean,
        remove?: boolean
    },
    add: () => void,
    remove: () => void,
}

export function Counter  ({ enable = { remove: true, add: false }, add, remove }: CounterProps) {
    return (
        <div className="flex mt-3 gap-4 items-center h-[2rem]">
        Unlimited users


           
        </div>
    )
}