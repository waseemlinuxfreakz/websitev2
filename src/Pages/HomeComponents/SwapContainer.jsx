import React, {useEffect, useState} from 'react';
import SwapTop from './SwapTop';
import RefreshExchange from './RefreshExchange';
import GassFee from './GassFee';
import Slippage from './Slippage';
import MainActionButton from './MainActionButton';
// import EnterAmountBtn from './EnterAmountBtn';
import TokenSelectors from './TokenSelectors/TokenSelectors'


function SwapContainer() {

    const [fromToken, setFromToken] = useState('ETH');
    const [toToken, setToToken] = useState('USDT');

    return ( 
        <div className="swapContainerBox">
            <SwapTop/>
            <TokenSelectors/>
            <RefreshExchange
                fromToken={fromToken}
                toToken={toToken}
            />
            <GassFee/>
            <Slippage/>
            <MainActionButton/>
        </div>
     );
}

export default SwapContainer;