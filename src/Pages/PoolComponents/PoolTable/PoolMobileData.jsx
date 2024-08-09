import React, { useEffect, useState } from "react";
import Yourliquidity from "./Yourliquidity";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/storage";
import poolTokens from "../../../store/poolCoins.json";
import poolChains from "../../../store/poolChains.json";
import usePool from "../../../hooks/usePool";

function PoolMobileData() {
  const [isYourLiquidityVisible, setYourLiquidityVisible] = useState(false);
  const navigate = useNavigate();

  const handleAddPollClick = (item) => {
    setYourLiquidityVisible(!isYourLiquidityVisible);
    navigate("./your-liquidity", {
      state: { chain: item.chain, token: item.token },
    });
  };
  const pool = useAppSelector((state) => state.pool);
  const bridge = useAppSelector((state) => state.bridge);
  const getTokenIcon = (token) => {
    return poolTokens.find((i) => i.name === token).icon;
  };

  const getChainIcon = (chain) => {
    return poolChains.find((i) => i.name === chain).icon;
  };

  const filter = (item) => {
    return (
      (pool.byChain === "Show All" || pool.byChain === item.chain) &&
      (pool.byToken === "Show All" || pool.byToken === item.token)
    );
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
    {
      token: "TON",
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
            filter(item) && (
              <TableData
                getChainIcon={getChainIcon}
                getTokenIcon={getTokenIcon}
                handleAddPollClick={handleAddPollClick}
                item={item}
                key={index}
              />
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

const TableData = ({
  item,
  getTokenIcon,
  getChainIcon,
  handleAddPollClick,
}) => {
  const { getData } = usePool();
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
    liquidityPoolInUSD: 0,
  });

  useEffect(() => {
    (async () => {
      const _data = await getData(item.chain, item.token);
      setData(_data);
    })();
  }, []);
  return (
    <div className="poolBox addDepositBox">
      <div className="poolboxTop">
        <div className="poolboxTopLeft">
          <div className="chainToken">
            <img
              src={getTokenIcon(item.token)}
              alt="USDT"
              className="mainChain"
            />
            <img src={getChainIcon(item.chain)} alt="ETH" className="onChain" />
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
            <h3>${data.liquidityPoolInUSD}</h3>
          </div>
          <div className="col-6">
            <h4>APY (%)</h4>
            <h3>{data.apy}%</h3>
          </div>
          <div className="addDeposit">
            <button
              className="addDepositBtn"
              onClick={() => handleAddPollClick(item)}
            >
              + Add deposit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolMobileData;
