import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/storage";
import usePool from "../../../hooks/usePool";

function PoolTableTitle() {
  const pool = useAppSelector((state) => state.pool);
  const [tonLiquidityPoolInUSD, setTonLiquidityPoolInUSD] = useState(0);

  const { getData } = usePool();

  useEffect(() => {
    (async () => {
      const _data = await getData("TONTestnet", "USDC");
      setTonLiquidityPoolInUSD(_data.liquidityPoolInUSD);
    })();
  }, []);

  return (
    <div className="poolTableTitle explorerTransactionsTitle">
      <h2>Active pool</h2>
      <p>TVL: ${pool.liquidityPoolInUSD + tonLiquidityPoolInUSD}</p>
    </div>
  );
}

export default PoolTableTitle;
