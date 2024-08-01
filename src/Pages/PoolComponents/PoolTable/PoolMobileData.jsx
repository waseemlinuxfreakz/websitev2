import React, { useState } from "react";
import Yourliquidity from "./Yourliquidity";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/storage";
import poolTokens from "../../../store/poolCoins.json";
import poolChains from "../../../store/poolChains.json";

function PoolMobileData() {
  const [isYourLiquidityVisible, setYourLiquidityVisible] = useState(false);

  const handleAddPollClick = () => {
    setYourLiquidityVisible(!isYourLiquidityVisible);
  };
  const pool = useAppSelector((state) => state.pool);
  const bridge = useAppSelector((state) => state.bridge);
  const getTokenIcon = (token) => {
    return poolTokens.find((i) => i.name === token).icon;
  };

  const getChainIcon = (chain) => {
    return poolChains.find((i) => i.name === chain).icon;
  };

  const data = [
    {
      token: "USDC",
      chain: "Sepolia",
      apy: pool.apy,
      volume: "$43,432.00",
      totalLiquidity: pool.totalSupply,
    },
    {
      token: "USDC",
      chain: "TONTestnet",
      apy: 0,
      volume: "$43,432.00",
      totalLiquidity: 0,
    },
  ];

  return (
    <>
      <div className="poolMobileData">
        {data.map(
          (item, index) =>
            bridge.fromChain === item.chain &&
            bridge.fromToken === item.token && (
              <div className="poolBox addDepositBox">
                <div className="poolboxTop">
                  <div className="poolboxTopLeft">
                    <div className="chainToken">
                      <img
                        src={getTokenIcon(item.token)}
                        alt="USDT"
                        className="mainChain"
                      />
                      <img
                        src={getChainIcon(item.chain)}
                        alt="ETH"
                        className="onChain"
                      />
                    </div>
                    <div className="">
                      <h2>{item.token}</h2>
                      on {item.chain}
                    </div>
                  </div>
                </div>
                <div className="poolboxBottom">
                  <div className="row">
                    <div className="col-6">
                      <h4>Total liquidity (USDC)</h4>
                      <h3>${item.totalLiquidity}</h3>
                    </div>
                    <div className="col-6">
                      <h4>APY (%)</h4>
                      <h3>{item.apy}%</h3>
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
            ),
        )}
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
