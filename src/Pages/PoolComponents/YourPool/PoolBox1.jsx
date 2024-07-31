import React from "react";

import USDT from "../../../assets/img/coin/usdc.svg";
import ETH from "../../../assets/img/coin/eth.svg";
import Target from "../../../assets/img/target.svg";
import { useAppSelector } from "../../../hooks/storage";
import { Link } from "react-router-dom";

function PoolBox1() {
  const pool = useAppSelector((state) => state.pool);
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
            on Ethereum
          </div>
        </div>
        <div className="poolboxTopRight">
          <Link to="./your-liquidity" className="tragetLink">
            <img src={Target} alt="Target" />
          </Link>
          <p>
            <b>APY</b> {pool.apy}%
          </p>
        </div>
      </div>
      <div className="poolboxBottom">
        <div className="row">
          <div className="col-6">
            <h4>Deposit (USDC)</h4>
            <h3>{pool.stakedBalance}</h3>
          </div>
          <div className="col-6">
            <h4>Fees (USDC)</h4>
            <h3>{pool.feeGrowthGlobal}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoolBox1;
