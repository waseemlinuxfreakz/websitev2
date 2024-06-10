import React from "react";

import SwapContainerMenu from "./SwapContainerMenu";
import ChainSelectorDropdown from "./ChainSelectorDropdown/ChainSelectorDropdown";

const SwapTop = () => {
  return (
    <div className="swap_top_menu">
      <ChainSelectorDropdown parent="swap" direction="from" />
      <div className="swap_top_menu_right">
        <SwapContainerMenu parent="swap" />
      </div>
    </div>
  );
};

export default SwapTop;
