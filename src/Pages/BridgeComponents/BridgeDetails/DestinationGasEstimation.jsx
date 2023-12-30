import React from 'react';
import { useAppSelector } from '../../../hooks/storage';
import { SUPPORTED_CHAINS, ChainNameToTypeChainName } from '../../../types'

export default function DestinationGasEstimation() {

    const bridge = useAppSelector((state) => state.bridge);
    const destCurrency = SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.toChain]].nativeCurrency.symbol;

    return (<div className="detialItem">
        <div className="detialItemLeft">
            Destination Gas Fee
        </div>
        <div className="detialItemRight">
            0.01 {destCurrency}
        </div>
    </div>)
}