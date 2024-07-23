import React from "react";
import Wallet from "../../../assets/img/Wallet.svg";
import "./WalletBalance.css";
import { useAppSelector } from "../../../hooks/storage";

export default function WalletBalance({ name }) {
  const pool = useAppSelector((state) => state.pool);
  return (
    <div className="walletBalance">
      <img src={Wallet} alt="Wallet" />
      <span>{pool.balance}</span>
      <span>{name}</span>
    </div>
  );
}
