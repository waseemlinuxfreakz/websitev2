import React from 'react';
import { useSwitchNetwork } from 'wagmi'
import './TokenSwitchButton.css';
import SwitchBtn from '../../../assets/img/Switch-button.svg';
import { useAppSelector, useAppDispatch } from '../../../hooks/storage';
import { swapBridgeChainsAndTokens } from '../../../store/bridgeSlice';
import { getChainidByName } from '../../../utils/filters';

export default function TokenswitchButton() {

    // Global state
    const bridge = useAppSelector((state) => state.bridge);
    const dispatch = useAppDispatch();
    const { switchNetwork } = useSwitchNetwork();

    const handleSwitchButtonClick = () => {
        //  Chains
        const toChain = bridge.toChain;
        const id = getChainidByName(toChain);
        dispatch(swapBridgeChainsAndTokens());
        switchNetwork?.(id);
    };

    return (
        <button className="switchBtn" onClick={handleSwitchButtonClick}>
            <img src={SwitchBtn} alt="Token Switch Button" />
        </button>
    )
}