import React from 'react';
import SwapTop from './SwapTop';
import PayReceive from './PayReceive';
import RefreshExchange from './RefreshExchange';
import GassFee from './GassFee';
import Slippage from './Slippage';
import MainYellowActionButton from './MainYellowActionButton';
// import EnterAmountBtn from './EnterAmountBtn';


function SwapContainer() {
    return ( 
        <div className="swapContainerBox">
            <SwapTop/>
            <PayReceive/>
            <RefreshExchange/>
            <GassFee/>
            <Slippage/>
            <MainYellowActionButton/>
        </div>
     );
}

export default SwapContainer;