import { useState, useEffect } from 'react';

export interface UseWindowSize {
    width: number | undefined,
    height: number | undefined,
}

export function useWindowSize() {
    const [size, setSize] = useState<UseWindowSize>({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
      if (typeof window === 'undefined') return;

      function handleResize() {
          setSize({
              width: window.innerWidth,
              height: window.innerHeight
          })
      }

      window.addEventListener('resize', handleResize);

      handleResize()
    
      return () => {
        window.removeEventListener('resize', handleResize)
      };
    }, []);


    return { ...size }
}
