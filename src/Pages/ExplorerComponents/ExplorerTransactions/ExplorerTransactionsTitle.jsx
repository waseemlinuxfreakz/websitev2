import React from "react";
import useExplorerStats from "../../../hooks/useExplorerStats";

function ExplorerTransactionsTitle() {
  const { txCount, uniqueAddresses, ttlTransactions, ttlAmount } =
    useExplorerStats();

  return (
    <div className="explorerTransactionsTitle">
      <h2>Transactions</h2>
      <p>Total {txCount} TXs in 24 hours</p>
    </div>
  );
}

export default ExplorerTransactionsTitle;
