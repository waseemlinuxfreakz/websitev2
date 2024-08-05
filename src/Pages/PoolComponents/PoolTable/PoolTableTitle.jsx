import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/storage";
import usePool from "../../../hooks/usePool";

function PoolTableTitle() {
  const pool = useAppSelector((state) => state.pool);
  const [tonTotalSupply, setTonTotalSupply] = useState(0);

  const { getData } = usePool();

  useEffect(() => {
    (async () => {
      const _data = await getData("TONTestnet", "USDC");
      setTonTotalSupply(_data.totalSupply);
    })();
  }, []);

  return (
    <div className="poolTableTitle explorerTransactionsTitle">
      <h2>Active pool</h2>
      <p>TVL: ${pool.totalSupply + tonTotalSupply}</p>
    </div>
  );
}

export default PoolTableTitle;
