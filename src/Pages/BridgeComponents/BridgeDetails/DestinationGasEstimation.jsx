import React from 'react';
import { useAppSelector } from '../../../hooks/storage';
import { SUPPORTED_CHAINS, ChainNameToTypeChainName, destCircleClaimFee } from '../../../types';
import { getDestinationFee } from '../../../utils';

export default function DestinationGasEstimation() {

    const bridge = useAppSelector((state) => state.bridge);
    const destCurrency = SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.toChain]].nativeCurrency.symbol;

    return (<div className="detialItem">
        <div className="detialItemLeft">
            Destination Gas Fee (Est.)
        </div>
        <div className="detialItemRight">
            {destCircleClaimFee[ChainNameToTypeChainName[bridge.toChain]].toFixed(7)} {destCurrency}
        </div>
    </div>)
}