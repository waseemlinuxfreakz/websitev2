import React, {useEffect, useState} from 'react';
import SwapTop from './SwapTop';
import PayReceive from './PayReceive';
import RefreshExchange from './RefreshExchange';
import GassFee from './GassFee';
import Slippage from './Slippage';
import MainActionButton from './MainActionButton';
// import EnterAmountBtn from './EnterAmountBtn';


function SwapContainer() {

    const [fromToken, setFromToken] = useState('ETH');
    const [toToken, setToToken] = useState('USDT');

    return ( 
        <div className="swapContainerBox">
            <SwapTop/>
            <PayReceive/>
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