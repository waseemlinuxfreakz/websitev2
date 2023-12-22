import React, {useEffect, useState} from 'react';
import TrackExplorer from './TrackExplorer';
import TransactionInformation from './TransactionInformation';
import TransactionProgress from './TransactionProgress'
import BridgeTransactionDetails from './BridgeTransactionDetails';
import BridgeTransactionTop from './BridgeTransactionTop';

import { useAppSelector } from '../../hooks/storage';


function BridgeSwapTransaction() {

    const bridge = useAppSelector((state) => state.bridge);

    return ( 
        <div className="bridgeSwap swapContainerBox">
            <BridgeTransactionTop/>
            <TransactionProgress/>
            <BridgeTransactionDetails/>
            <TrackExplorer/>
            <TransactionInformation/>
        </div>
     );
}

export default BridgeSwapTransaction;