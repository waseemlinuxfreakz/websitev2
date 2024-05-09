import React, { useEffect, useState } from "react";
import Wallet from "../../../assets/img/Wallet.svg";
import "./WalletBalance.css";
import { getBalance, getAccount } from "@wagmi/core";
import { wagmiConfig } from "../../../App";
import { getTokenAddress } from "../../../utils";
import { useAppSelector } from "../../../hooks/storage";
import { useTonWallet } from "@tonconnect/ui-react";
import { getTonProvider } from "../../../utils";
import { ChainNameToTypeChainName } from "../../../types";

export default function WalletBalance({ name, parent, balance }) {
  const [balanceSwap, setBalance] = useState("0.00");
  const bridge = useAppSelector((state) => state.bridge);
  const tonWallet = useTonWallet();

  const chains = wagmiConfig.chains;
  const account = getAccount(wagmiConfig);
  const chain = chains.find((chain) => chain.id === account.chainId);
  let tokenAddress;
  if (chain) {
    console.log({ name, chain });
    tokenAddress = getTokenAddress(ChainNameToTypeChainName[chain.name], name);
  }

  useEffect(() => {
    async function fetchTokenBalance(address) {
      if (chain) {
        const bal = await getBalance({
          address,
          chainId: chain.id,
          token: tokenAddress,
        });
        setBalance(bal.formatted.slice(0, 8));
      }
    }

    if (account.isConnected && chain && tokenAddress) {
      fetchTokenBalance(account.address);
    }

    // TODO: may need to be uncommented
    // if (!tokenAddress) {
    //   setBalance("0.00");
    // }
  }, [account, chain, tokenAddress]);

  return (
    <div className="walletBalance">
      <img src={Wallet} alt="Wallet" />
      <span>{parent == "bridge" ? balance : balanceSwap}</span>
      <span>{name}</span>
    </div>
  );
}
