import React, { useEffect, useState } from "react";

import USDT from "../../../assets/img/coin/usdc.svg";
import ETH from "../../../assets/img/coin/eth.svg";
import Target from "../../../assets/img/target.svg";
import { useAppSelector } from "../../../hooks/storage";
import { Link } from "react-router-dom";
import usePool from "../../../hooks/usePool";
import { useAccount } from "wagmi";

function PoolBox1() {
  const { getData, getBalance } = usePool();
  const pool = useAppSelector((state) => state.pool);
  const bridge = useAppSelector((state) => state.bridge);
  const { address, isConnected } = useAccount();
  const [data, setData] = useState({
    decimals: 1,
    apy: 0,
    totalSupply: 0,
    protocolFee: 0,
    protocolFeeAmount: 0,
    tokenFee: 0,
    feeGrowthGlobal: 0,
    feeDecimals: 0,
    pendingRewards: 0,
  });
  const [stakedBalance, setStakedBalance] = useState(0);

  useEffect(() => {
    (async () => {
      const _data = await getData("Sepolia", "USDC", address);
      setData(_data);
      const _stakedBalance = await getBalance(
        "Withdraw",
        "Sepolia",
        "USDC",
        address,
      );
      setStakedBalance(_stakedBalance);
    })();
  }, [address]);

  return (
    <div className="poolBox">
      <div className="poolboxTop">
        <div className="poolboxTopLeft">
          <div className="chainToken">
            <img src={USDT} alt="USDT" className="mainChain" />
            <img src={ETH} alt="ETH" className="onChain" />
          </div>
          <div className="">
            <h2>USDC</h2>
            on Sepolia
          </div>
        </div>
        <div className="poolboxTopRight">
          <Link to="./your-liquidity" className="tragetLink">
            <img src={Target} alt="Target" />
          </Link>
          <p>
            <b>APY</b> {data?.apy}%
          </p>
        </div>
      </div>
      <div className="poolboxBottom">
        <div className="row">
          <div className="col-6">
            <h4>Deposit (USDC)</h4>
            <h3>{stakedBalance}</h3>
          </div>
          <div className="col-6">
            <h4>Rewards (USDC)</h4>

            <h3>{address ? data.pendingRewards : "---"}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoolBox1;
