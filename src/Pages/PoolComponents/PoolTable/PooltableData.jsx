import React, { useState } from "react";

import Updown from "../../../assets/img/table-updown.svg";
import Yourliquidity from "./Yourliquidity";
import { useAppSelector } from "../../../hooks/storage";
import { Link } from "react-router-dom";

const PoolTable = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [isYourLiquidityVisible, setYourLiquidityVisible] = useState(false);
  const pool = useAppSelector((state) => state.pool);

  const data = [
    {
      Token:
        '<span class="poolCoin"><img src="/img/coin/usdc.svg" alt="usdc" /> USDC</span>',
      Chain:
        '<span class="poolCoin"><img src="/img/coin/eth.svg" alt="eth" /> Sepolia</span>',
      APY: `<span style="color: #E0E3E6;">${pool.apy}%</span>`,
      Volume: "$43,432.00",
      TotalLiquidity: `<span class="totleLiqui">$${pool.totalSupply}</span>`,
    },
  ];

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });

  const handleAddPollClick = () => {
    setYourLiquidityVisible(!isYourLiquidityVisible);
  };

  return (
    <>
      <div className="transactionTable poolTable">
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => handleSort("Token")}>
                Token{" "}
                <span className="upDown">
                  <img src={Updown} alt="Updown" />
                </span>
              </th>
              <th onClick={() => handleSort("Chain")}>
                Chain{" "}
                <span className="upDown">
                  <img src={Updown} alt="Updown" />
                </span>
              </th>
              <th onClick={() => handleSort("APY")}>
                APY{" "}
                <span className="upDown">
                  <img src={Updown} alt="Updown" />
                </span>
              </th>
              <th onClick={() => handleSort("Daily")}>
                Volume (24h){" "}
                <span className="upDown">
                  <img src={Updown} alt="Updown" />
                </span>
              </th>
              <th onClick={() => handleSort("TotalLiquidity")}>
                Total liquidity{" "}
                <span className="upDown">
                  <img src={Updown} alt="Updown" />
                </span>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={index}>
                <td dangerouslySetInnerHTML={{ __html: item.Token }} />
                <td dangerouslySetInnerHTML={{ __html: item.Chain }} />
                <td dangerouslySetInnerHTML={{ __html: item.APY }} />
                <td dangerouslySetInnerHTML={{ __html: item.Volume }} />
                <td dangerouslySetInnerHTML={{ __html: item.TotalLiquidity }} />
                <td>
                  <Link
                    to="./your-liquidity"
                    className="addPoll"
                    onClick={handleAddPollClick}
                  >
                    <img src="/img/add.svg" alt="Add" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {isYourLiquidityVisible && <Yourliquidity />} */}
    </>
  );
};

export default PoolTable;
