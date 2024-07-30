import React, { useState } from "react";
import Yourliquidity from "../PoolTable/Yourliquidity";
import { useAppSelector } from "../../../hooks/storage";
import { Link } from "react-router-dom";

function YourPoolTitle() {
  const [isYourLiquidityVisible, setYourLiquidityVisible] = useState(false);
  const handleAddPollClick = () => {
    setYourLiquidityVisible(!isYourLiquidityVisible);
  };
  const pool = useAppSelector((state) => state.pool);
  return (
    <>
      <div className="yourPoolTitle">
        <div className="poolTitleLeft">
          <h5>Your pool</h5>
          <p>Total Rewards: ${pool.pendingRewards}</p>
        </div>
        <div className="poolTitlerRight">
          <Link
            to="./your-liquidity"
            className="addLiquidity"
            onClick={handleAddPollClick}
          >
            Add liquidity
          </Link>
        </div>
      </div>
      {/* {isYourLiquidityVisible && <Yourliquidity />} */}
    </>
  );
}

export default YourPoolTitle;
