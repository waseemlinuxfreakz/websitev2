import React from 'react';
import SwapTop from './SwapTop';
import PayReceive from './PayReceive';
import RefreshExchange from './RefreshExchange';
import GassFee from './GassFee';
import Slippage from './Slippage';
import MainActionButton from './MainActionButton';
// import EnterAmountBtn from './EnterAmountBtn';


function SwapContainer() {
    return ( 
        <div className="swapContainerBox">
            <SwapTop/>
            <PayReceive/>
            <RefreshExchange/>
            <GassFee/>
            <Slippage/>
            <MainActionButton/>
        </div>
     );
}

export default SwapContainer;