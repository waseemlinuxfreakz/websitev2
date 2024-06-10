import React from "react";
import ChainSelectorDropdown from "../../HomeComponents/ChainSelectorDropdown/ChainSelectorDropdown";
import TokenSelectionDropdown from "../../HomeComponents/TokenSelectors/TokenSelectionDropdown";

function ExplorerFromChainSelectDropdown() {
  return (
    <div className="ExplorerTransactionsFilter fromTypeFilter">
      <div className="filterName">From</div>
      <div className="filterDropdown">
        <ChainSelectorDropdown parent="explorer" direction="from" />
      </div>
    </div>
  );
}

export default ExplorerFromChainSelectDropdown;
