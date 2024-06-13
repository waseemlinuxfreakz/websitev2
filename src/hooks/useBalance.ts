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
import { chainFactoryTestnet } from "../store/chainFactory";
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
          ? await chainFactoryTestnet.inner(
              // @ts-ignore
              ChainToDestinationDomain[
                ChainNameToTypeChainName[bridge.fromChain]
              ],
            )
          : await chainFactoryTestnet.inner(
              // @ts-ignore
              ChainToDestinationDomain[
                ChainNameToTypeChainName[bridge.toChain]
              ],
            );
      const addr =
        direction === "from" ? bridge.senderAddress : bridge.receiver;

      // if (addr) {

      const bal = await handler?.balance(addr);
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
        ? await chainFactoryTestnet.inner(
            // @ts-ignore
            ChainToDestinationDomain[
              ChainNameToTypeChainName[bridge.fromChain]
            ],
          )
        : await chainFactoryTestnet.inner(
            // @ts-ignore
            ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]],
          );
    //TODO: Remove Web3Helper type assertion after SDK supports for TON.

    const tokenAddress: string = (
      await (handler as Web3Helper).token(bridge.fromToken)
    ).address;

    const addr = direction === "from" ? bridge.senderAddress : bridge.receiver;

    const bal = await handler.tokenBalance(tokenAddress, addr);

    if (bal) {
      return Number(bal);
    }
    return 0;
  }

  useEffect(() => {
    if (bridge.fromChain && bridge.fromToken && bridge.senderAddress) {
      const chain =
        SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]];
      const decimals = chain.nativeCurrency.decimals;

      (async () => {
        const coinBalance: number = await getCoinBalance("from");
        const formattedBalance = coinBalance / 10 ** decimals;
        if (formattedBalance) {
          setTxFeeCoinbalance(formattedBalance);
        }
      })();
      if (bridge.fromToken === chain.nativeCurrency.symbol) {
        (async () => {
          setBalance(0);
          const bal: number = await getCoinBalance("from");
          const fmb = bal / 10 ** decimals;
          const formattedBalance = Number(fmb);
          setBalance(formattedBalance);
          dispatch(setBridgeBalance(formattedBalance));
          dispatch(setBridgeError(""));
        })().catch((e) => {
          const formattedError = `useCoinBalanceFrom:Error: ${e}`;
          console.error(formattedError);
          dispatch(setBridgeError(formattedError));
        });
      } else {
        (async () => {
          setBalance(0);
          const bal: number = await getTokenBalance("from");
          const fmb =
            bal / 10 ** Number(TOKEN_DECIMALS[bridge.fromToken as TTokenName]);
          const formattedBalance = Number(fmb);
          setBalance(formattedBalance);
          dispatch(setBridgeBalance(formattedBalance));
          dispatch(setBridgeError(""));
        })().catch((e) => {
          const formattedError = `useTokenBalanceFrom:Error: ${e}`;
          console.error(formattedError);
          dispatch(setBridgeError(formattedError));
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bridge.fromChain, bridge.fromToken, bridge.senderAddress]);

  useEffect(() => {
    if (bridge.toChain && bridge.toToken && bridge.receiver) {
      const chain = SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.toChain]];

      const decimals = chain.nativeCurrency.decimals;
      if (bridge.toToken === chain.nativeCurrency.symbol) {
        (async () => {
          setBalanceTo(0);
          const bal: number = await getCoinBalance("to");
          const fmb = bal / 10 ** decimals;
          const formattedBalance = Number(fmb);
          setBalanceTo(formattedBalance);
          dispatch(setBridgeToBalance(formattedBalance));
          dispatch(setBridgeError(""));
        })().catch((e) => {
          const formattedError = `useCoinBalanceTo:Error: ${e}`;
          console.error(formattedError);
          dispatch(setBridgeError(formattedError));
        });
      } else {
        (async () => {
          setBalanceTo(0);
          const bal: number = await getTokenBalance("to");
          const fmb =
            bal / 10 ** Number(TOKEN_DECIMALS[bridge.fromToken as TTokenName]);
          const formattedBalance = Number(fmb);
          setBalanceTo(formattedBalance);
          dispatch(setBridgeToBalance(formattedBalance));
          dispatch(setBridgeError(""));
        })().catch((e) => {
          const formattedError = `useTokenBalanceTo:Error: ${e}`;
          console.error(formattedError);
          dispatch(setBridgeError(formattedError));
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bridge.toChain, bridge.toToken, bridge.receiver, bridge.senderAddress]);

  return {
    coinBalance: txFeeCoinBalance,
    fromBalance: balance,
    toBalance: balanceTo,
  };
}
