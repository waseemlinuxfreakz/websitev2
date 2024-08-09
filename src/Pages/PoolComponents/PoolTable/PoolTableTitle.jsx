import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/storage";
import usePool from "../../../hooks/usePool";
import Skeleton from "../../CommonComponents/Skeleton/Skeleton";

function PoolTableTitle() {
  const pool = useAppSelector((state) => state.pool);
  const [tonLiquidityPoolInUSD, setTonLiquidityPoolInUSD] = useState(0);
  const [tontonLiquidityPoolInUSD, setTonTonLiquidityPoolInUSD] = useState(0);
  const [loading, setLoading] = useState(false);

  const { getData } = usePool();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const _data = await getData("TONTestnet", "USDC");
      setTonLiquidityPoolInUSD(parseFloat(_data.liquidityPoolInUSD));
      const _data2 = await getData("TONTestnet", "TON");
      setTonTonLiquidityPoolInUSD(parseFloat(_data2.liquidityPoolInUSD));
      setLoading(false);
    })();
  }, []);

  return (
    <div className="poolTableTitle explorerTransactionsTitle">
      <h2>Active pools</h2>
      <p>
        {loading ? (
          <Skeleton height={12} width={80} />
        ) : (
          `TVL: $${
            parseFloat(pool.liquidityPoolInUSD) +
            tonLiquidityPoolInUSD +
            tontonLiquidityPoolInUSD
          }`
        )}
      </p>
    </div>
  );
}

export default PoolTableTitle;
