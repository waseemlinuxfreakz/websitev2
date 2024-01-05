import React from 'react';
import { useSwitchNetwork } from 'wagmi'
import './TokenSwitchButton.css';
import SwitchBtn from '../../../assets/img/Switch-button.svg';
import { useAppSelector, useAppDispatch } from '../../../hooks/storage';
import { setBridgeError, swapBridgeChainsAndTokens } from '../../../store/bridgeSlice';
import { getChainidByName } from '../../../utils/filters';

export default function TokenswitchButton() {

    // Global state
    const bridge = useAppSelector((state) => state.bridge);
    const toChain = bridge.fromChain
    const fromChain = bridge.toChain;
    const fromToken = bridge.toToken;
    const toToken = bridge.fromToken;

    const dispatch = useAppDispatch();

    const onError = (message) => {
        dispatch(setBridgeError(message));
    }

    const onSuccess = () => {
        dispatch(swapBridgeChainsAndTokens({ fromChain, toChain, fromToken, toToken }));
        dispatch(setBridgeError(''));
    }

    const { switchNetwork } = useSwitchNetwork({ onError, onSuccess });

    const handleSwitchButtonClick = () => {

        try {
            //  Chains
            const toChain = bridge.toChain;
            const id = getChainidByName(toChain);


            switchNetwork?.(id);

        } catch (error) {
            console.log(error.message)
        }
    };

    return (
        <button className="switchBtn" onClick={handleSwitchButtonClick}>
            <img src={SwitchBtn} alt="Token Switch Button" />
        </button>
    )
}