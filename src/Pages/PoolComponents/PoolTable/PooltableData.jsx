import React, { useEffect, useState } from "react";
import "./PoolTable.css";
import Updown from "../../../assets/img/table-updown.svg";
import Yourliquidity from "./Yourliquidity";
import { useAppDispatch, useAppSelector } from "../../../hooks/storage";
import { Link } from "react-router-dom";
import poolTokens from "../../../store/poolCoins.json";
import poolChains from "../../../store/poolChains.json";
import { useNavigate } from "react-router-dom";
import usePool from "../../../hooks/usePool";
import { useAccount } from "wagmi";
import { useTonAddress } from "@tonconnect/ui-react";

const PoolTable = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [isYourLiquidityVisible, setYourLiquidityVisible] = useState(false);
  const pool = useAppSelector((state) => state.pool);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { getData } = usePool();
  const [data, setData] = useState([
    {
      token: "USDC",
      chain: "Sepolia",
      apy: 0,
      volume: "$43,432.00",
      totalLiquidity: 0,
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
  ]);

  const getTokenIcon = (token) => {
    return poolTokens.find((i) => i.name === token).icon;
  };

  const getChainIcon = (chain) => {
    return poolChains.find((i) => i.name === chain).icon;
  };

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const filter = (item) => {
    return (
      (pool.byChain === "Show All" || pool.byChain === item.chain) &&
      (pool.byToken === "Show All" || pool.byToken === item.token)
    );
  };

  // const sortedData = ;

  useEffect(() => {
    setData(
      data.sort((a, b) => {
        if (sortOrder === "asc") {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
      }),
    );
  }, [sortBy, sortOrder]);

  useEffect(() => {
    (async () => {
      setData(
        await Promise.all(
          data.map(async (i) => {
            const _data = await getData(i.chain, i.token);
            return {
              ...i,
              apy: _data.apy,
              totalLiquidity: _data.liquidityPoolInUSD,
            };
          }),
        ),
      );
    })();
  }, []);

  const handleAddPollClick = (item) => {
    navigate("./your-liquidity", {
      state: { chain: item.chain, token: item.token },
    });
    // setYourLiquidityVisible(!isYourLiquidityVisible);
  };

  return (
    <>
      <div className="transactionTable poolTable">
        <table className="table">
          <thead>
            <tr>
              <th className="tableHead" onClick={() => handleSort("token")}>
                Token{" "}
                <span className="upDown">
                  <img src={Updown} alt="Updown" />
                </span>
              </th>
              <th className="tableHead" onClick={() => handleSort("chain")}>
                Chain{" "}
                <span className="upDown">
                  <img src={Updown} alt="Updown" />
                </span>
              </th>
              <th className="tableHead" onClick={() => handleSort("apy")}>
                APY{" "}
                <span className="upDown">
                  <img src={Updown} alt="Updown" />
                </span>
              </th>
              {/* <th onClick={() => handleSort("Daily")}>
                Volume (24h){" "}
                <span className="upDown">
                  <img src={Updown} alt="Updown" />
                </span>
              </th> */}
              <th
                className="tableHead"
                onClick={() => handleSort("TotalLiquidity")}
              >
                Total liquidity{" "}
                <span className="upDown">
                  <img src={Updown} alt="Updown" />
                </span>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              (item, index) =>
                filter(item) && (
                  <TableDataRow
                    item={item}
                    getChainIcon={getChainIcon}
                    getTokenIcon={getTokenIcon}
                    handleAddPollClick={handleAddPollClick}
                    key={index}
                  />
                ),
            )}
          </tbody>
        </table>
      </div>
      {/* {isYourLiquidityVisible && <Yourliquidity />} */}
    </>
  );
};

function TableDataRow({
  item,
  getTokenIcon,
  getChainIcon,
  handleAddPollClick,
}) {
  const { getData } = usePool();
  // const [data, setData] = useState({
  //   decimals: 1,
  //   apy: 0,
  //   totalSupply: 0,
  //   protocolFee: 0,
  //   protocolFeeAmount: 0,
  //   tokenFee: 0,
  //   feeGrowthGlobal: 0,
  //   feeDecimals: 0,
  //   pendingRewards: 0,
  // });

  // useEffect(() => {
  //   (async () => {
  //     const _data = await getData(item.chain, item.token);
  //     setData(_data);
  //   })();
  // }, [item.chain, item.token]);

  return (
    <tr>
      <td>
        <span class="poolCoin">
          <img src={getTokenIcon(item.token)} alt={item.token} /> {item.token}
        </span>
      </td>
      <td>
        <span class="poolCoin">
          <img src={getChainIcon(item.chain)} alt="eth" /> {item.chain}
        </span>
      </td>
      <td>
        <span style={{ color: "#E0E3E6" }}>{item.apy}%</span>
      </td>
      {/* <td>$43,432.00</td> */}
      <td>
        <span class="totleLiqui">${item.totalLiquidity}</span>
      </td>
      <td>
        <button className="addPoll" onClick={() => handleAddPollClick(item)}>
          <img src="/img/add.svg" alt="Add" />
        </button>
      </td>
    </tr>
  );
}

export default PoolTable;
