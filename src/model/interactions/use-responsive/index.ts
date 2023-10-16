
import { useEffect, useState } from 'react';
import { useWindowSize } from '../use-window-size';

export class UseResponsive {
    isMobile: boolean = false;
    isTablet: boolean = false;
    isDesktop: boolean = false;
}
const devices = new UseResponsive();

type DeviceType = keyof typeof devices;

export function useResponsive() {
    const { width } =useWindowSize()
    const [devices, setDevice] = useState<UseResponsive>(new UseResponsive());
    
    function handleDevice(device: DeviceType, status: boolean) {
        const defaults: UseResponsive = new UseResponsive();
        // map thru all the option an disable the ones that are true if status
        Object.entries(devices).forEach(([key, value]) => {
            // key
            const k: DeviceType = key as DeviceType;

            defaults[k] = false

            if (device === k) {
                defaults[device] = status
            }

        })
        setDevice(defaults);
    } 

    useEffect(() => {
        if (width) {
            if (width < 768) {
                handleDevice('isMobile', true);
            } else if (width >= 768 && width < 1024) {
                handleDevice('isTablet', true);
            } else if (width >= 1024) {
                handleDevice('isDesktop', true)
            }
        }
    }, [width]);


    return { ...devices }
}


