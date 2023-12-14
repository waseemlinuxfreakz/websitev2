import {useEffect, useState} from 'react';
import { IBridgeState } from '../store/bridgeSlice';
import { useAppSelector } from './storage';

export default function useBridgeFailure() {

    const bridge: IBridgeState = useAppSelector(state => state.bridge);

    const [isFailure, setIsFailure] = useState(bridge.isFailure);

    useEffect(() => {

        if (bridge.isFailure) {
            setIsFailure(true);
        } else {
            setIsFailure(false);
        }

    }, [bridge.isFailure]);

    return {isFailure};
}