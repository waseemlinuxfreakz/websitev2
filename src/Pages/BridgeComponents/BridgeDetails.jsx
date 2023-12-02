import React from 'react';

function BridgeDetails() {
    return ( 
        <div className="bridgeDetails">
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
                    Estimated time
                </div>
                <div className="detialItemRight">
                    20m 10s
                </div>
            </div>
            <div className="detialItem">
                <div className="detialItemLeft">
                    Token allowance
                </div>
                <div className="detialItemRight">
                    0.5 ETH
                </div>
            </div>
        </div>
     );
}

export default BridgeDetails;