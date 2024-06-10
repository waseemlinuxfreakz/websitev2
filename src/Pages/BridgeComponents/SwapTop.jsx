import React from "react";

import SwapContainerMenu from "../HomeComponents/SwapContainerMenu";

const SwapTop = () => {
  return (
    <div className="swap_top_menu">
      <h2>Transfer</h2>
      <div className="swap_top_menu_right">
        <SwapContainerMenu parent={"bridge"} />
      </div>
    </div>
  );
};

export default SwapTop;
