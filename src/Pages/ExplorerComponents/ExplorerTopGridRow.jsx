import React from "react";
import "./ExplorerTopGrid/ExplorerTopGrid.css";
import useExplorerStats from "../../hooks/useExplorerStats";

function ExplorerTopGridRow() {
  const { stats } = useExplorerStats();

  return (
    <div className="explorereTopRow">
      <div className="row">
        <div className="col-xl-3">
          <div className="ExplorerBoxGray valueBox">
            <p>Total Volume</p>
            <h3>$ {Number(stats.totalVolume)}</h3>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="ExplorerBoxGray feesBox">
            <p>Fees</p>
            <h3>$ {Number(stats.totalFees)}</h3>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="ExplorerBoxGray Totaltransactions">
            <p>Total transactions</p>
            <h3>{Number(stats.totalTransactions)}</h3>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="ExplorerBoxGray addressBox">
            <p>Unique Addresses</p>
            <h3>{Number(stats.uniqueUser)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplorerTopGridRow;
