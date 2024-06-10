import React from "react";
import SwapTop from "./SwapTop";
import MainActionButton from "./MainActionButton";
import TokenSelectors from "./TokenSelectors/TokenSelectors";
import BridgeDetails from "./BridgeDetails/BridgeDetails";
import WalletAddress from "./WalletAddress";
import ProceedWallet from "./ProceedWallet";

function BridgeSwapContainer() {
  return (
    <div className="bridgeSwap swapContainerBox">
      <SwapTop />
      <TokenSelectors />
      <WalletAddress />
      <BridgeDetails />
      <MainActionButton />
      <ProceedWallet />
    </div>
  );
}

export default BridgeSwapContainer;
