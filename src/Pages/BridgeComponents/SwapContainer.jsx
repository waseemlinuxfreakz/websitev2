import React, {useEffect, useState} from 'react';
import SwapTop from './SwapTop';
import MainActionButton from './MainActionButton';
import TokenSelectors from './TokenSelectors/TokenSelectors'
import BridgeDetails from './BridgeDetails';


function SwapContainer() {

    const [fromToken, setFromToken] = useState('ETH');
    const [toToken, setToToken] = useState('USDT');

    return ( 
        <div className="bridgeSwap swapContainerBox">
            <SwapTop/>
            <TokenSelectors/>
            <BridgeDetails/>
            <MainActionButton/>
        </div>
     );
}

export default SwapContainer;