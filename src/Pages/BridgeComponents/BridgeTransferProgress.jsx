import React from "react";
import TrackExplorer from "./TransferProgress/TrackExplorer";
import TransactionInformation from "./TransferProgress/TransactionInformation";
import TransactionProgress from "./TransferProgress/TransactionProgress";
import BridgeTransactionDetails from "./TransferProgress/BridgeTransactionDetails";
import BridgeTransactionTop from "./TransferProgress/BridgeTransactionTop";

export default function BridgeTransferProgress() {
  return (
    <div className="bridgeSwap swapContainerBox">
      <BridgeTransactionTop />
      <TransactionProgress />
      <BridgeTransactionDetails />
      <TrackExplorer />
      <TransactionInformation />
    </div>
  );
}
