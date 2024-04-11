import React from "react";
import SwapTop from "../BridgeComponents/SwapTop";
import MainActionButton from "../BridgeComponents/MainActionButton";
import TokenSelectors from "./TokenSelectors/TokenSelectors";
import BridgeDetails from "../BridgeComponents/BridgeDetails/BridgeDetails";
import WalletAddress from "../BridgeComponents/WalletAddress";
import ProceedWallet from "../BridgeComponents/ProceedWallet";

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
