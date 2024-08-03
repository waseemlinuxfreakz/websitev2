import React from "react";
import PoolByTokenSelector from "../../PoolComponents/PoolTable/PoolByTokenSelector";

function PoolByToken() {
  return (
    <div className="ExplorerTransactionsFilter buyChainFilter">
      <div className="filterName">By token</div>
      <div className="filterDropdown">
        <PoolByTokenSelector />
      </div>
    </div>
  );
}

export default PoolByToken;
