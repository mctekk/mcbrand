import Image from "next/image";

interface Icon {
    code: string,
    path: string,
}

interface BuilderIcon {
    data: Array<Icon>,
    code: string,
    fallback: JSX.Element,
    size?: {
        width: number,
        height: number
    },
}
/**
 * a simple way to build the icon we need on some places of the website
 * @param data [{ code: string, path: string }] - array of icons
 * @param code - code of the icon you want to get
 * @param fallback - if something goes wrong provide a fallback element to be render instead
 * @returns JSX.Element
 */
export function buildIcon({ data, code, fallback, }: BuilderIcon) {
    const current = data.find(d => d.code === code);

    if (current) {
        return <Image width={124} height={254} alt={current.code} src={current.path}  />
    }

    return fallback
}
