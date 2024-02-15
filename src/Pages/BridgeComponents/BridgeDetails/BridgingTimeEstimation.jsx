import React from "react";
import EstimatedTime from '../../../assets/img/Estimatedtime.svg';
import { useAppSelector } from '../../../hooks/storage';
import { EstimatedTimeFromChain, ChainNameToTypeChainName } from '../../../types'

export default function BridgingTimeEstimation() {

    const bridge = useAppSelector((state) => state.bridge);
    
    return (<div className="detialItem">
        <div className="detialItemLeft">
            Estimated time
        </div>
        <div className="detialItemRight">
            <img src={EstimatedTime} alt="EstimatedTime" />
            {EstimatedTimeFromChain[ChainNameToTypeChainName[bridge.fromChain]]}
        </div>
    </div>)
}