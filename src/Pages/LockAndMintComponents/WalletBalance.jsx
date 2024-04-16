import React, { useEffect, useState } from "react";
import Wallet from "../../assets/img/Wallet.svg";
import "../HomeComponents/WalletBalance/WalletBalance.css";
import { getBalance, getAccount } from "@wagmi/core";
import { wagmiConfig } from "../../App";
// @ts-ignore
import { getTokenAddress } from "../../utils";
import { useAppSelector, useAppDispatch } from "../../hooks/storage";
import { useTonWallet } from "@tonconnect/ui-react";
import { getTonProvider } from "../../utils";
import { setSenderAddress } from "../../store/bridgeSlice";
import { chainFactoryTestnet } from "../../store/chainFactory";

export default function WalletBalance({ name, parent, balance }) {
  const [balanceSwap, setBalance] = useState("0.00");
  const bridge = useAppSelector((state) => state.bridge);
  const dispatch = useAppDispatch();
  const tonWallet = useTonWallet();

  const chains = wagmiConfig.chains;
  const account = getAccount(wagmiConfig);
  const chain = chains.find((chain) => chain.name === bridge.fromChain);
  let tokenAddress;
  if (chain) {
    console.log("getTokenAddress", chain.id, name);
    tokenAddress = getTokenAddress(chain.id, name);
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

  useEffect(() => {
    console.log({ senderAddress: bridge.senderAddress });
    if (!bridge.senderAddress) {
      return;
    }

    (async () => {
      const handler = await chainFactoryTestnet.inner(chain.id);
      console.log({ handler });

      if (name === handler.nativeCoin()) {
        const balance = await handler.balance(bridge.senderAddress);
        console.log({ balance });
        setBalance(balance.toString());
      } else {
        const balance = await handler.tokenBalance(
          tokenAddress,
          bridge.senderAddress
        );
        console.log({ balance });
        setBalance(balance.toString());
      }
    })();
  }, [tonWallet, tokenAddress, name, bridge.senderAddress]);

  useEffect(() => {
    console.log({ balance, balanceSwap, name, parent, chain });
  }, [balance, balanceSwap, name]);

  return (
    <div className="walletBalance">
      <img src={Wallet} alt="Wallet" />

      <span>{parent == "lock-and-mint" ? balance : balanceSwap}</span>
      <span>{name}</span>
    </div>
  );
}
