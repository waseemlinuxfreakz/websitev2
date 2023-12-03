import React from 'react';

function BridgeTransferDetails() {
    return ( 
        <div className="transferDetails bridgeDetails">
            <div className="detialItem">
                <div className="detialItemLeft">
                    You will receive
                </div>
                <div className="detialItemRight">
                    0.003 ETH
                </div>
            </div>
            <div className="detialItem">
                <div className="detialItemLeft">
                    Bridge Fee
                </div>
                <div className="detialItemRight">
                    0.0 ETH
                </div>
            </div>
            <div className="detialItem">
                <div className="detialItemLeft">
                    Destinations Gas Fee
                </div>
                <div className="detialItemRight">
                    0.01 ETH
                </div>
            </div>
            <div className="detialItem">
                <div className="detialItemLeft">
                    Estimated tnx time
                </div>
                <div className="detialItemRight">
                    20m 10s
                </div>
            </div>
        </div>
     );
}

export default BridgeTransferDetails;