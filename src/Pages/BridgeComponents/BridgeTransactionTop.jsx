import React from 'react';
import './BridgeTransactionTop.css';

function BridgeTransactionTop() {

    const handleBackButtonClick = () => {
        window.history.back();
    };

    
    return ( 
        <div className="bridgeTransactionTop">
            <h2>Transfer</h2>
            <img src="./img/close-border.svg" alt="" className="backBtn" onClick={handleBackButtonClick}/>
        </div>
     );
}

export default BridgeTransactionTop;