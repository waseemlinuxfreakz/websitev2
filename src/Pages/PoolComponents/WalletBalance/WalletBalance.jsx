import React from "react";
import Wallet from "../../../assets/img/Wallet.svg";
import "./WalletBalance.css";

export default function WalletBalance({ name, parent, balance }) {
  return (
    <div className="walletBalance">
      <img src={Wallet} alt="Wallet" />
      <span>{parent === "bridge" ? balance : 0}</span>
      <span>{name}</span>
    </div>
  );
}
