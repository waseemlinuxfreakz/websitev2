
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/storage';

export default function TransactionCountUp() {

    const bridge = useAppSelector((state) => state.bridge);

    const second = 1000;
    const minute = 60 * second;
    let interval;

    const [time, setTime] = useState(0);

    useEffect(() => {
        if (bridge.isRunning) {
            interval = setInterval(() => {
                setTime(time + 10)
            }, 10)
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    });

    useEffect(() => {

        if (bridge.isReset) {
            clearInterval(interval);
            setTime(0);
        }

    }, [bridge.isReset])

    return (<h5>
        {
            `${('0' + Math.floor(time / minute) % 60).slice(-2)} min
        ${('0' + Math.floor(time / second) % 60).slice(-2)} sec
        ${('0' + Math.floor(time / 10) % 100).slice(-2)} ms`
        }
    </h5>)

}