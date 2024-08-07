import React from "react";
import Wallet from "../../../assets/img/Wallet.svg";
import "./WalletBalance.css";
import { useAppSelector } from "../../../hooks/storage";

export default function WalletBalance({ name, activeButton }) {
  const pool = useAppSelector((state) => state.pool);
  return (
    <div className="walletBalance">
      <img src={Wallet} alt="Wallet" />
      <span>
        {activeButton === "Deposit" ? pool.balance : pool.stakedBalance}
      </span>
      <span>{name}</span>
    </div>
  );
}
