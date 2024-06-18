import React from "react";
import useExplorerStats from "../../../hooks/useExplorerStats";
import useExplorerTransactions from "../../../hooks/useExplorerTransactions";

function ExplorerTransactionsTitle() {
  const { txs } = useExplorerTransactions(1);

  return (
    <div className="explorerTransactionsTitle">
      <h2>Transactions</h2>
      <p>
        Total{" "}
        {txs.filter((txn) => Date.now() - Number(txn.started) < 8.64e7).length}{" "}
        TXs in 24 hours
      </p>
    </div>
  );
}

export default ExplorerTransactionsTitle;
