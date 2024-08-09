import React, { useState } from "react";
import Yourliquidity from "../PoolTable/Yourliquidity";
import { useAppSelector } from "../../../hooks/storage";
import { Link } from "react-router-dom";
import Skeleton from "../../CommonComponents/Skeleton/Skeleton";

function YourPoolTitle() {
  const [isYourLiquidityVisible, setYourLiquidityVisible] = useState(false);
  const handleAddPollClick = () => {
    setYourLiquidityVisible(!isYourLiquidityVisible);
  };
  const pool = useAppSelector((state) => state.pool);
  const bridge = useAppSelector((state) => state.bridge);

  return (
    <>
      <div className="yourPoolTitle">
        <div className="poolTitleLeft">
          <h5>Your pool</h5>
          <p>
            {pool.dataLoading ? (
              <Skeleton width={80} height={12} />
            ) : (
              `Total Rewards: $${pool.pendingRewards}`
            )}
          </p>
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
