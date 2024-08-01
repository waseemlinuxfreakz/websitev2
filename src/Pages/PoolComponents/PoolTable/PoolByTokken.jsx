import React from "react";
import ChainSelectorDropdown from "../../HomeComponents/ChainSelectorDropdown/ChainSelectorDropdown";
import TokenSelectionDropdown from "../../PoolComponents/TokenSelectors/TokenSelectionDropdown";

function PoolByToken() {
  return (
    <div className="ExplorerTransactionsFilter buyChainFilter">
      <div className="filterName">By token</div>
      <div className="filterDropdown">
        <TokenSelectionDropdown />
      </div>
    </div>
  );
}

export default PoolByToken;
