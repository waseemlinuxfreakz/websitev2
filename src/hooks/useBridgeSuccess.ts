import {useEffect, useState} from 'react';
import { IBridgeState } from '../store/bridgeSlice';
import { useAppSelector } from './storage';

export default function useBridgeSuccess() {

    const bridge: IBridgeState = useAppSelector(state => state.bridge);

    const [isSuccess, setIsSuccess] = useState(bridge.isSuccess);

    useEffect(() => {

        if (bridge.isSuccess) {
            setIsSuccess(true);
        } else {
            setIsSuccess(false);
        }

    }, [bridge.isSuccess]);

    return isSuccess;
}