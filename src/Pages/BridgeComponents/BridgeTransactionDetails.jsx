import React from 'react';
import './BridgeTransactionDetails.css';

function BridgeTransactionDetails() {
    return ( 
        <ul className="bridgeTransactionDetails">
            <li className='bridgeTransactionDetailsList'>
                <div className="bridgeTransDetLeft">
                    You will receive
                </div>
                <div className="bridgeTransDetRight">
                    0.003 ETH
                </div>
            </li>
            <li className='bridgeTransactionDetailsList'>
                <div className="bridgeTransDetLeft">
                    Bridge Fee
                </div>
                <div className="bridgeTransDetRight">
                    0.003 ETH
                </div>
            </li>
            <li className='bridgeTransactionDetailsList'>
                <div className="bridgeTransDetLeft">
                    Destinations Gas Fee
                </div>
                <div className="bridgeTransDetRight">
                    0.01 ETH
                </div>
            </li>
            <li className='bridgeTransactionDetailsList'>
                <div className="bridgeTransDetLeft">
                    Estimated wait time
                </div>
                <div className="bridgeTransDetRight">
                    20 min
                </div>
            </li>
        </ul>
     );
}

export default BridgeTransactionDetails;