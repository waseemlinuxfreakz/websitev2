import {
  ChainNameToTypeChainName,
  SUPPORTED_CHAINS,
  TOKEN_DECIMALS,
  TTokenName,
  ChainToDestinationDomain,
} from "../types";
import { useAppDispatch, useAppSelector } from "./storage";
import { useState, useEffect } from "react";
import {
  setBridgeBalance,
  setBridgeError,
  setBridgeToBalance,
} from "../store/bridgeSlice";
import { chainFactory } from "../store/chainFactory";
import { Web3Helper } from "emmet.js/dist/chains/web3";

type TDirection = "from" | "to";

export default function useBalance() {
  const dispatch = useAppDispatch();
  const bridge = useAppSelector((state) => state.bridge);
  const [txFeeCoinBalance, setTxFeeCoinbalance] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);
  const [balanceTo, setBalanceTo] = useState<number>(0);

  async function getCoinBalance(direction: TDirection) {
    try {
      
      const handler =
        direction === "from"
          ? await chainFactory.inner(
              // @ts-ignore
              ChainToDestinationDomain[
                ChainNameToTypeChainName[bridge.fromChain]
              ],
            )
          : await chainFactory.inner(
              // @ts-ignore
              ChainToDestinationDomain[
                ChainNameToTypeChainName[bridge.toChain]
              ],
            );
      const addr =
        direction === "from" ? bridge.senderAddress : bridge.receiver;
      console.log("getCoinBalance: addr", addr)

      // if (addr) {

      const bal = await handler?.balance(addr);

      console.log("getCoinBalance:", bal)

      // }

      if (bal) {
        return Number(bal);
      }
      return 0;
    } catch (error) {
      console.error("useBalance:getTokenBalance", error);
      return 0;
    }
  }

  async function getTokenBalance(direction: TDirection) {
    const handler =
      direction === "from"
        ? await chainFactory.inner(
            // @ts-ignore
            ChainToDestinationDomain[
              ChainNameToTypeChainName[bridge.fromChain]
            ],
          )
        : await chainFactory.inner(
            // @ts-ignore
            ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]],
          );
    //TODO: Remove Web3Helper type assertion after SDK supports for TON.

    const tokenAddress: string = (
      await (handler as Web3Helper).token(bridge.toToken)
    ).token;

    const addr = direction === "from" ? bridge.senderAddress : bridge.receiver;

    const bal = await handler.tokenBalance(tokenAddress, addr);

    // console.log({
    //   chain: direction === "from" ? bridge.fromChain : bridge.toChain,
    //   bal: Number(bal) / 1e6,
    // });

    if (bal) {
      return Number(bal);
    }
    return 0;
  }

  useEffect(() => {
    setBalance(0);
    const chain = SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]];

    // (async () => {
    //   const coinBalance: number = await getCoinBalance("from");
    //   const formattedBalance = coinBalance / 10 ** decimals;
    //   if (formattedBalance) {
    //     setTxFeeCoinbalance(formattedBalance);
    //   }
    // })();
    if (bridge.fromChain && bridge.fromToken && bridge.senderAddress)
      (async () => {
        let bal = 0;
        if (bridge.fromToken === chain.nativeCurrency.symbol) {
          bal = await getCoinBalance("from");
        } else {
          bal = await getTokenBalance("from");
        }
        const fmb =
          bal / 10 ** Number(TOKEN_DECIMALS[bridge.fromToken as TTokenName]);
        const formattedBalance = Number(fmb);
        // console.log({ fromChain: bridge.fromChain, formattedBalance });
        setBalance(formattedBalance);
        dispatch(setBridgeBalance(formattedBalance));
        dispatch(setBridgeError(""));
      })().catch((e) => {
        const formattedError = `useCoinBalanceFrom:Error: ${e}`;
        console.error(formattedError);
        dispatch(setBridgeError(formattedError));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    bridge.fromChain,
    bridge.fromToken,
    // bridge.toToken,
    bridge.senderAddress,
    // bridge.receiver,
  ]);

  useEffect(() => {
    console.log({ 
      toChain: bridge.toChain,
      toToken: bridge.toToken,
      to: bridge.receiver
    });
    setBalanceTo(0);
    if (bridge.receiver && bridge.toChain && bridge.toToken) {
      const chain = SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.toChain]];
      
      (async () => {
        let bal = 0;
        if (bridge.fromChain !== bridge.toChain) {
          if (bridge.toToken === chain.nativeCurrency.symbol) {
            bal = await getCoinBalance("to");
          } else {
            bal = await getTokenBalance("to");
          }
          const fmb =
            bal / 10 ** Number(TOKEN_DECIMALS[bridge.toToken as TTokenName]);
          const formattedBalance = Number(fmb);
          // console.log({ toChain: bridge.toChain, formattedBalance });
          setBalanceTo(formattedBalance);
          dispatch(setBridgeBalance(formattedBalance));
          dispatch(setBridgeError(""));
        }
      })().catch((e) => {
        const formattedError = `useCoinBalanceFrom:Error: ${e}`;
        console.error(formattedError);
        dispatch(setBridgeError(formattedError));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    bridge.toChain,
    bridge.amount,
    bridge.toToken,
    // bridge.senderAddress,
    bridge.receiver,
  ]);

  return {
    coinBalance: txFeeCoinBalance,
    fromBalance: balance,
    toBalance: balanceTo,
  };
}
