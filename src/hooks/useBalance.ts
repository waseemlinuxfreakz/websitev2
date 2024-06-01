import { getProvider, addressToAccount, getTonProvider } from "../utils";
import {
  ChainNameToTypeChainName,
  CHAIN_NAME_TO_ID,
  SUPPORTED_CHAINS,
  TOKEN_CHAIN_CONTRACT,
  TOKEN_DECIMALS,
  TTokenName,
  ChainToDestinationDomain,
} from "../types";
import { useAppDispatch, useAppSelector } from "./storage";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { erc20Abi } from "viem";
import {
  setBridgeBalance,
  setBridgeError,
  setBridgeToBalance,
} from "../store/bridgeSlice";
import { chainFactoryTestnet } from "../store/chainFactory";

type TDirection = "from" | "to";

export default function useBalance() {
  const dispatch = useAppDispatch();
  const bridge = useAppSelector((state) => state.bridge);
  const [txFeeCoinBalance, setTxFeeCoinbalance] = useState<number>(0);
  const [balance, setBalance] = useState<number>(bridge.balance);
  const [balanceTo, setBalanceTo] = useState<number>(bridge.balance);

  async function getCoinBalance(direction: TDirection) {
    try {
      const handler =
        direction === "from"
          ? await chainFactoryTestnet.inner(
              // @ts-ignore
              ChainToDestinationDomain[
                ChainNameToTypeChainName[bridge.fromChain]
              ]
            )
          : await chainFactoryTestnet.inner(
              // @ts-ignore
              ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]]
            );
      const addr =
        direction === "from" ? bridge.senderAddress : bridge.receiver;

      // if (addr) {

      const bal = await handler?.balance(addr);
      // }

      if (bal) {
        return Number(bal.toString());
      }
      return 0;
    } catch (error) {
      console.log("useBalance:getTokenBalance", error);
      return 0;
    }
  }

  async function getTokenBalance(direction: TDirection) {
    const tokenAddress: string =
      direction === "from"
        ? // @ts-ignore
          TOKEN_CHAIN_CONTRACT[bridge.fromToken][
            ChainNameToTypeChainName[bridge.fromChain]
          ]
        : // @ts-ignore
          TOKEN_CHAIN_CONTRACT[bridge.fromToken][
            ChainNameToTypeChainName[bridge.toChain]
          ];

    // try {
    const handler =
      direction === "from"
        ? await chainFactoryTestnet.inner(
            // @ts-ignore
            ChainToDestinationDomain[ChainNameToTypeChainName[bridge.fromChain]]
          )
        : await chainFactoryTestnet.inner(
            // @ts-ignore
            ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]]
          );

    const addr = direction === "from" ? bridge.senderAddress : bridge.receiver;

    const bal = await handler.tokenBalance(tokenAddress, addr);

    // console.log({ addr: tokenAddress, direction, bal });

    if (bal) {
      return Number(bal.toString());
    }
    return 0;
    // } catch (error) {
    //   console.log("useBalance:getTokenBalance", error);
    //   return 0;
    // }
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
          const bal: number = await getCoinBalance("from");
          const formattedBalance = bal / 10 ** decimals;
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
          const bal: number = await getTokenBalance("from");
          const formattedBalance =
            bal / 10 ** Number(TOKEN_DECIMALS[bridge.fromToken as TTokenName]);
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
  }, [bridge.fromChain, bridge.fromToken, bridge.amount, bridge.senderAddress]);

  useEffect(() => {
    if (bridge.toChain && bridge.toToken && bridge.receiver) {
      const chain = SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.toChain]];

      const decimals = chain.nativeCurrency.decimals;
      if (bridge.toToken === chain.nativeCurrency.symbol) {
        (async () => {
          const bal: number = await getCoinBalance("to");

          const formattedBalance = bal / 10 ** decimals;
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
          const bal: number = await getTokenBalance("to");
          const formattedBalance =
            bal / 10 ** Number(TOKEN_DECIMALS[bridge.fromToken as TTokenName]);
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
  }, [bridge.toChain, bridge.toToken, bridge.receiver, bridge.senderAddress]);

  return {
    coinBalance: txFeeCoinBalance,
    fromBalance: balance,
    toBalance: balanceTo,
  };
}
