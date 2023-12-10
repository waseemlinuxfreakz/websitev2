import React, {useEffect, useState} from 'react';
import SwapTop from './SwapTop';
import MainActionButton from './MainActionButton';
import TokenSelectors from './TokenSelectors/TokenSelectors'
import BridgeDetails from './BridgeDetails/BridgeDetails';
import WalletAddress from './WalletAddress';
import SwitchOptimism from './SwitchOptimism';
import ProceedWallet from './ProceedWallet';
import TrackExplorer from './TrackExplorer';
import TransactionInformation from './TransactionInformation';



function BridgeSwapContainer() {


    return ( 
        <div className="bridgeSwap swapContainerBox">
            <SwapTop/>
            <TokenSelectors/>
            <WalletAddress/>
            <BridgeDetails/>
            {/* <TrackExplorer/> */}
            {/* <TransactionInformation/> */}
            <MainActionButton/>
            {/* <SwitchOptimism/> */}
            <ProceedWallet/>
        </div>
     );
}

export default BridgeSwapContainer;