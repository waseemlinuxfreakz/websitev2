import React, {useEffect, useState} from 'react';
import TrackExplorer from './TrackExplorer';
import TransactionInformation from './TransactionInformation';
import TransactionProgress from './TransactionProgress'
import TransactionProgressSuccess from './TransactionProgressSuccess'
import BridgeTransactionDetails from './BridgeTransactionDetails';
import BridgeTransactionTop from './BridgeTransactionTop';




function BridgeSwapTransaction() {

    return ( 
        <div className="bridgeSwap swapContainerBox">
            <BridgeTransactionTop/>
            {/* <TransactionProgress/> */}
            <TransactionProgressSuccess/>
            <BridgeTransactionDetails/>
            <TrackExplorer/>
            <TransactionInformation/>
        </div>
     );
}

export default BridgeSwapTransaction;