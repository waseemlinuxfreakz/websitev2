import React, { useEffect, useState } from "react";
import Wallet from "../../assets/img/Wallet.svg";
import "../HomeComponents/WalletBalance/WalletBalance.css";

export default function WalletBalance({ name, parent, balance }) {
  const [balanceSwap, setBalance] = useState("0.00");

  return (
    <div className="walletBalance">
      <img src={Wallet} alt="Wallet" />

      <span>{parent === "lock-and-mint" ? balance : balanceSwap}</span>
      <span>{name}</span>
    </div>
  );
}
