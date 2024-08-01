import React, { useState } from "react";
import USDT from "../../../assets/img/coin/usdc.svg";
import ETH from "../../../assets/img/coin/eth.svg";
import Yourliquidity from "./Yourliquidity";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/storage";

function PoolMobileData() {
  const [isYourLiquidityVisible, setYourLiquidityVisible] = useState(false);

  const handleAddPollClick = () => {
    setYourLiquidityVisible(!isYourLiquidityVisible);
  };
  const pool = useAppSelector((state) => state.pool);

  return (
    <>
      <div className="poolMobileData">
        <div className="poolBox addDepositBox">
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
          </div>
          <div className="poolboxBottom">
            <div className="row">
              <div className="col-6">
                <h4>Total liquidity (USDC)</h4>
                <h3>${pool.totalSupply}</h3>
              </div>
              <div className="col-6">
                <h4>APY (%)</h4>
                <h3>{pool.apy}%</h3>
              </div>
              <div className="addDeposit">
                <Link
                  to="./your-liquidity"
                  className="addDepositBtn"
                  onClick={handleAddPollClick}
                >
                  + Add deposit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {isYourLiquidityVisible && <Yourliquidity />} */}
      <div className="mobileDeposite">
        <Link to="./your-liquidity" type="button" className="depositeBtn ">
          Deposit
        </Link>
      </div>
    </>
  );
}

export default PoolMobileData;
