
import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/storage';
import { setBridgeTimeElapsed } from '../../store/bridgeSlice';

export default function TransactionCountUp() {

    const bridge = useAppSelector((state) => state.bridge);
    const dispatch = useAppDispatch();

    const second = 1000;
    const minute = 60 * second;
    let interval;

    const [time, setTime] = useState(bridge.timeElapsed);

    useEffect(() => {
        if (bridge.isRunning) {
            interval = setInterval(() => {
                const newTime = time + 10;
                setTime(newTime);
                dispatch(setBridgeTimeElapsed(newTime));
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
            dispatch(setBridgeTimeElapsed(0));
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