import React from 'react';
import CheckGreen from '../../../assets/img/CheckGreen.svg';

import BridgeFee from './BridgeFee';
import DestinationGasEstimation from './DestinationGasEstimation';
import BridgingTimeEstimation from './BridgingTimeEstimation';

import { useAppSelector } from '../../../hooks/storage';
import { bnWithoutDecimals } from '../../../utils/bnWithoutDecimals';

function BridgeDetails() {

    const bridge = useAppSelector((state) => state.bridge);

    const [tokenName, setTokenName] = React.useState(bridge.fromToken);
    const [allowance, setAllowance] = React.useState(bridge.allowance);

    React.useEffect(() => {setTokenName(bridge.fromToken);}, [bridge.fromToken]);

    React.useEffect(() => {
        setAllowance(bnWithoutDecimals(bridge.allowance, bridge.decimals));
    }, [bridge.allowance, bridge.amount, bridge.fromChain, bridge.fromToken]);

    return ( 
        <div className="bridgeDetails">
            <BridgeFee />
            < DestinationGasEstimation />
            < BridgingTimeEstimation />
            <div className="detialItem">
                <div className="detialItemLeft">
                    Token allowance
                </div>
                <div className="detialItemRight">
                    <img src={CheckGreen} alt="CheckGreen" />
                    {allowance} {tokenName}
                </div>
            </div>
        </div>
     );
}

export default BridgeDetails;