import React from 'react';
import './BridgeTransactionDetails.css';
import useBridgeFee from '../../hooks/useBridgeFee';
import { useAppSelector } from '../../hooks/storage';

function BridgeTransactionDetails() {

    const { nativeCurrency, formattedFee } = useBridgeFee();
    const bridge = useAppSelector((state) => state.bridge);

    return ( 
        <ul className="bridgeTransactionDetails">
            <li className='bridgeTransactionDetailsList'>
                <div className="bridgeTransDetLeft">
                    You will receive
                </div>
                <div className="bridgeTransDetRight">
                    {bridge.receive} {bridge.toToken}
                </div>
            </li>
            <li className='bridgeTransactionDetailsList'>
                <div className="bridgeTransDetLeft">
                    Bridging Fee
                </div>
                <div className="bridgeTransDetRight">
                {formattedFee && formattedFee.toFixed(6)} {nativeCurrency}
                </div>
            </li>
            <li className='bridgeTransactionDetailsList'>
                <div className="bridgeTransDetLeft">
                    Destination Gas Fee
                </div>
                <div className="bridgeTransDetRight">
                    0.001 {nativeCurrency}
                </div>
            </li>
            <li className='bridgeTransactionDetailsList'>
                <div className="bridgeTransDetLeft">
                    Estimated waiting time <img src="./img/InfoIcons.svg" alt="InfoIcons" />
                </div>
                <div className="bridgeTransDetRight">
                    3 min 30 sec
                </div>
            </li>
        </ul>
     );
}

export default BridgeTransactionDetails;