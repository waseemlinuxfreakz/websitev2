import React from "react";
import useExplorerStats from "../../../hooks/useExplorerStats";

function ExplorerTransactionsTitle() {
  const { stats } = useExplorerStats();

  return (
    <div className="explorerTransactionsTitle">
      <h2>Transactions</h2>
      <p>Total {Number(stats.total24HourTransactions)} TXs in 24 hours</p>
    </div>
  );
}

export default ExplorerTransactionsTitle;
