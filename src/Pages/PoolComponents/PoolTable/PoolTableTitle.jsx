import React from "react";
import { useAppSelector } from "../../../hooks/storage";

function PoolTableTitle() {
  const pool = useAppSelector((state) => state.pool);
  return (
    <div className="poolTableTitle explorerTransactionsTitle">
      <h2>Active pool</h2>
      <p>TVL: ${pool.totalSupply}</p>
    </div>
  );
}

export default PoolTableTitle;
