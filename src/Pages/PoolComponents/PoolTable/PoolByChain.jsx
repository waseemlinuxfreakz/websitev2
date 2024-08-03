import React from "react";

import PoolByChainSelector from "./PoolByChainSelector";

function PoolByChain() {
  return (
    <div className="ExplorerTransactionsFilter buyChainFilter">
      <div className="filterName">By network</div>
      <div className="filterDropdown">
        <PoolByChainSelector />
      </div>
    </div>
  );
}

export default PoolByChain;
