import React from 'react';
import CheckGreen from '../../../assets/img/CheckGreen.svg';

import BridgeFee from './BridgeFee';
import DestinationGasEstimation from './DestinationGasEstimation';
import BridgingTimeEstimation from './BridgingTimeEstimation';

function BridgeDetails() {
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
                    0.5 ETH
                </div>
            </div>
        </div>
     );
}

export default BridgeDetails;