import React from "react";
import "./TokenSelectorBox.css";
// Components
import WalletBalance from "../WalletBalance/WalletBalance";
import TokenSelectionDropdown from "./TokenSelectionDropdown";

import { useAppSelector, useAppDispatch } from "../../../hooks/storage";
import { setPoolAmount } from "../../../store/poolSlice";

export default function TokenSelectorBox({ type }) {
  // Global state
  const pool = useAppSelector((state) => state.pool);
  const dispatch = useAppDispatch();

  function onInputChange(e) {
    dispatch(setPoolAmount(Number(e.target.value)));
  }

  function isDeposit() {
    return type && type === "Deposit";
  }

  return (
    <span className={isDeposit() ? "order1" : "order3"}>
      <div className="SwapPay swapPayReceive">
        <div className="payReLeftBox">
          <div className="payReLeft payOption">
            <div className="payInput">
              <p>{isDeposit() ? "Pay" : "Receive"}</p>
            </div>
            <h2 className="amount">
              <input
                onChange={onInputChange}
                type="number"
                placeholder="0.0"
                value={pool.amount}
                disabled={type && type === "to" ? true : false}
              />
            </h2>
          </div>
        </div>
        <div className="payReRight">
          <WalletBalance name={pool.token} />
          <TokenSelectionDropdown type={type} />
        </div>
      </div>
    </span>
  );
}
