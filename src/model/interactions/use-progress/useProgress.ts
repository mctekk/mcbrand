import { useState } from 'react';

let local: NodeJS.Timer | any;
let timer: NodeJS.Timer | any;
export function useProgress() {
    const [progressLeft, setProgress] = useState(1);
    const [count, setCount] = useState(1);


    function startProgress() {
        clearInterval(timer);

        let interval = 100;

        timer = setInterval(() => {

            interval--

            if (interval >= 0) {
                setProgress(interval)
                return
            }

            clearInterval(timer)
            interval = 100;

        }, 100)
    }

    function startCount({ count, startAt = 0 }: { count: number, startAt: number }) {
        let local: NodeJS.Timer;

        let interval = startAt;

        local = setInterval(() => {

            interval++

            if (interval <= count) {
                setCount(interval)
                return
            }

            local = timer
            interval = 0;

        }, 40)
    }

    function stopCount() {
        clearInterval(local)
    }
    function stopProgress() {
        clearInterval(timer)
    }


    return { progressLeft, startProgress, count, startCount, stopCount, stopProgress }

}
