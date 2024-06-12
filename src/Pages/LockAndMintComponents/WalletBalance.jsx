import React from "react";
import Wallet from "../../assets/img/Wallet.svg";
import "../HomeComponents/WalletBalance/WalletBalance.css";
import { TOKEN_SYMBOL_TO_TOKEN } from "../../types";

export default function WalletBalance({ name, parent, balance }) {
  return (
    <div className="walletBalance">
      <img src={Wallet} alt="Wallet" />

      <span>{parent === "lock-and-mint" ? balance : "0.00"}</span>
      <span>{TOKEN_SYMBOL_TO_TOKEN[name]}</span>
    </div>
  );
}
